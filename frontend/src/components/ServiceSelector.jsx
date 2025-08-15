import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import StepIndicator from './StepIndicator';
import MainCategoryStep from './steps/MainCategoryStep';
import ServiceGroupStep from './steps/ServiceGroupStep';
import DetailedServiceStep from './steps/DetailedServiceStep';
import ProjectDetailsStep from './steps/ProjectDetailsStep';
import ContactInfoStep from './steps/ContactInfoStep';
import ConfirmationStep from './steps/ConfirmationStep';
import HourlyBookingForm from './hourly/HourlyBookingForm';
import AIAssistantOrder from './ai/AIAssistantOrder';
import FormToggle from './FormToggle';
import { serviceData } from '../data/serviceData';
import { buildTelegramMessage } from '../common/MessageFormatter';
import { sendSms as backendSendSms, sendTelegram as backendSendTelegram, sendTelegramWithPhotos as backendSendTelegramWithPhotos, storeRequest, uploadPhotos } from '../common/BackendAPI';

const ServiceSelector = () => {
  const [formType, setFormType] = useState('dynamic'); // 'dynamic', 'hourly', or 'ai'
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Dynamic form data
    mainCategories: [],
    serviceGroups: [],
    detailedServices: [],
    projectDescription: '',
    timeline: '',
    photos: [],
    address: '',
    fullName: '',
    phone: '',
    email: '',
    consentToText: false,

    // Hourly form data
    hourlyPackage: '',
    hourlyDescription: '',
    hourlyPhotos: [],
    hourlyAddress: '',
    hourlyFullName: '',
    hourlyPhone: '',
    hourlyEmail: '',
    hourlyConsentToText: false,

    // AI Assistant data
    aiMessages: [
      {
        sender: 'ai',
        content:
          "Hi! I'm your AI assistant. You can talk to me just like you would with a human, and I'll help collect the details of your project.",
      },
    ],
    aiJobs: [],
    aiPhotos: [],
    aiAddress: '',
    aiFullName: '',
    aiPhone: '',
    aiEmail: '',
    aiConsentToText: false,
  });
  const [navigationDirection, setNavigationDirection] = useState('forward');
  const totalSteps = 6;

  // Restore AI chat from localStorage on mount (fallback path independent of sessionId)
  React.useEffect(() => {
    // Ensure a shared session id exists for all flows (dynamic/hourly/ai)
    try {
      const key = 'ai_session_id';
      let sid = localStorage.getItem(key);
      if (!sid) {
        sid = `${Date.now()}-${Math.random().toString(36).slice(2)}`;
        localStorage.setItem(key, sid);
      }
    } catch (err) {
      console.warn('Failed to ensure ai_session_id', err);
    }

    try {
      // Try exact session-based keys first
      const keys = Object.keys(localStorage).filter((k) => k.startsWith('ai_chat_'));
      let parsed = null;
      if (keys.length > 0) {
        const pick = keys
          .map((k) => {
            const sid = k.replace('ai_chat_', '');
            const tsStr = String(sid).split('-')[0];
            const ts = Number(tsStr) || 0;
            return { k, ts };
          })
          .sort((a, b) => b.ts - a.ts)[0];
        const raw = pick ? localStorage.getItem(pick.k) : null;
        if (raw) parsed = JSON.parse(raw);
      }

      if (!parsed) {
        // Fallback simple key
        const raw = localStorage.getItem('ai_chat_last');
        if (raw) parsed = JSON.parse(raw);
      }

      if (Array.isArray(parsed) && parsed.length > 0) {
        const cleaned = parsed.map((m) => ({
          sender: m.sender,
          content: typeof m.content === 'string' ? m.content : '',
          photos: Array.isArray(m.photos)
            ? m.photos.filter((p) => p && p.url).map((p) => ({ url: p.url, name: p.name || '' }))
            : undefined,
        }));
        setFormData((prev) => ({ ...prev, aiMessages: cleaned }));
      }
    } catch (err) {
      console.warn('Chat restore failed:', err);
    }
  }, []);

  // Persist AI chat to a generic fallback key as well
  React.useEffect(() => {
    try {
      if (Array.isArray(formData.aiMessages)) {
        localStorage.setItem('ai_chat_last', JSON.stringify(formData.aiMessages));
      }
    } catch (err) {
      console.warn('Chat persist failed:', err);
    }
  }, [formData.aiMessages]);

  const updateFormData = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleFormTypeChange = (type) => {
    setFormType(type);
  };

  const goToStep = (step) => {
    if (step < currentStep) {
      setNavigationDirection('backward');
    } else {
      setNavigationDirection('forward');
    }
    setCurrentStep(step);
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setNavigationDirection('forward');
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setNavigationDirection('backward');
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = async (isHourly = false, isAI = false) => {
    try {
      // Immediately navigate to confirmation for Dynamic form
      if (!isHourly && !isAI) {
        setNavigationDirection('forward');
        setCurrentStep(totalSteps);
      }

      // Here you would integrate with your backend/database
      console.log(
        'Form Data:',
        isHourly
          ? {
              hourlyPackage: formData.hourlyPackage,
              projectDescription: formData.hourlyDescription,
              photos: formData.hourlyPhotos,
              address: formData.hourlyAddress,
              fullName: formData.hourlyFullName,
              phone: formData.hourlyPhone,
              email: formData.hourlyEmail,
              consentToText: formData.hourlyConsentToText,
            }
          : isAI
          ? {
              messages: formData.aiMessages,
              jobs: formData.aiJobs,
              photos: formData.aiPhotos,
              address: formData.aiAddress,
              fullName: formData.aiFullName,
              phone: formData.aiPhone,
              email: formData.aiEmail,
              consentToText: formData.aiConsentToText,
            }
          : formData,
      );

      // Telnyx SMS helpers (keep local to avoid external imports)
      const normalizePhone = (raw) => {
        if (!raw) return '';
        const digits = String(raw).replace(/\D/g, '');
        if (!digits) return '';
        if (digits.length === 10) return `+1${digits}`;
        if (digits.length === 11 && digits.startsWith('1')) return `+${digits}`;
        return digits.startsWith('+') ? digits : `+${digits}`;
      };

      const sendTelnyxSms = async ({ to, text, subject }) => {
        try { await backendSendSms({ to, text, subject }); } catch (e) { console.warn('Backend SMS failed:', e); }
      };

      // Obtain persisted AI session id if available (used to associate requests/photos across flows)
      let sharedSessionId = '';
      try { sharedSessionId = localStorage.getItem('ai_session_id') || ''; } catch (_) { sharedSessionId = ''; }

      // Send SMS for Dynamic and Hourly forms (AI flow already sends on job creation)
      if (!isAI) {
        if (isHourly) {
          const to = normalizePhone(formData.hourlyPhone);
          if (to) {
            const text = `Reply YES to confirm, STOP if this isn’t for you. We got your request — will contact you soon.`;
            try { await backendSendSms({ to, text, subject: 'Hourly Service Request' }); } catch (e) { console.warn('Backend SMS failed:', e); }
          }
          // Telegram notification for Hourly form
          try {
            const tg = buildTelegramMessage('New Hourly Form Submission', {
              Package: formData.hourlyPackage || '-',
              Description: formData.hourlyDescription || '-',
              Address: formData.hourlyAddress || '-',
              FullName: formData.hourlyFullName || '-',
              Phone: formData.hourlyPhone || '-',
              Email: formData.hourlyEmail || '-',
              PhotosCount: Array.isArray(formData.hourlyPhotos) ? formData.hourlyPhotos.length : 0,
              ConsentToText: !!formData.hourlyConsentToText,
              Source: 'ServiceSelector: Hourly',
            });
            try { await backendSendTelegram(tg); } catch (err) { console.warn('Backend telegram text failed:', err); }
            if (Array.isArray(formData.hourlyPhotos) && formData.hourlyPhotos.length > 0) {
              try { await backendSendTelegramWithPhotos(formData.hourlyPhotos, 'Hourly form photos'); } catch (err) { console.warn('Backend telegram media failed (hourly):', err); }
            }
          } catch (err) {
            console.warn('Telegram notify failed (hourly):', err);
          }
          // Store Hourly
          try {
            const stored = await storeRequest({
              source: 'website',
              form_type: 'hourly',
              session_id: sharedSessionId || undefined,
              contact: { fullName: formData.hourlyFullName, email: formData.hourlyEmail, phone: formData.hourlyPhone, address: formData.hourlyAddress, consentToText: formData.hourlyConsentToText },
              meta: { hourlyPackage: formData.hourlyPackage, description: formData.hourlyDescription },
              photos: Array.isArray(formData.hourlyPhotos) ? formData.hourlyPhotos.map(p => ({ url: p.url, name: p.name, origin: 'hourly' })) : [],
            });
            const requestId = stored && stored.request_id;
            if (requestId && Array.isArray(formData.hourlyPhotos) && formData.hourlyPhotos.length > 0) {
              try { await uploadPhotos({ requestId, origin: 'hourly', files: formData.hourlyPhotos, sessionId: sharedSessionId || null }); } catch (e) { console.warn('uploadPhotos failed (hourly):', e); }
            }
          } catch (e) { console.warn('storeRequest failed (hourly):', e); }
        } else {
          const to = normalizePhone(formData.phone);
          console.log('SMS Debug - formData.phone:', formData.phone, 'normalized to:', to);
          if (to) {
            const text = `Reply YES to confirm, STOP if this isn't for you. We got your request - will contact you soon.`;
            try { 
              console.log('Sending SMS to:', to, 'with text:', text);
              await backendSendSms({ to, text, subject: 'Service Request' }); 
              console.log('SMS sent successfully');
            } catch (e) { 
              console.error('Backend SMS failed:', e); 
            }
          } else {
            console.warn('SMS not sent - no valid phone number');
          }
          // Telegram notification for Dynamic form
          try {
            const mapIdToLabel = (id) => {
              // Handle custom descriptions: "kitchen_remodel_custom|Custom description text"
              if (String(id).includes('|')) {
                const [serviceId, customDesc] = String(id).split('|', 2);
                if (serviceId.endsWith('_custom')) {
                  const groupKey = serviceId.replace('_custom', '');
                  // Find group name
                  for (const catKey of Object.keys(serviceData)) {
                    const cat = serviceData[catKey];
                    if (cat[groupKey]) {
                      return `${cat[groupKey].name} — ${customDesc}`;
                    }
                  }
                  return `Custom — ${customDesc}`;
                }
              }
              
              // Handle regular IDs like "kitchen_remodel_1" or "drywall_repair_0"
              const parts = String(id).split('_');
              if (parts.length < 2) return id;
              
              // Get the last part as index, join the rest as group key
              const idxStr = parts[parts.length - 1];
              const groupKey = parts.slice(0, -1).join('_');
              
              for (const catKey of Object.keys(serviceData)) {
                const cat = serviceData[catKey];
                if (cat[groupKey]) {
                  const optIdx = Number(idxStr);
                  const name = cat[groupKey].name;
                  const option = Array.isArray(cat[groupKey].options) ? cat[groupKey].options[optIdx] : undefined;
                  return option ? `${name} — ${option}` : name || id;
                }
              }
              return id;
            };

            console.log('TG Debug - formData:', {
              projectDescription: formData.projectDescription,
              detailedServices: formData.detailedServices,
              mainCategories: formData.mainCategories,
              serviceGroups: formData.serviceGroups
            });
            
            const tg = buildTelegramMessage('New Dynamic Form Submission', {
              MainCategories: (formData.mainCategories || []).map(mapIdToLabel),
              ServiceGroups: (formData.serviceGroups || []).map(mapIdToLabel),
              DetailedServices: (formData.detailedServices || []).map(mapIdToLabel),
              ProjectDescription: formData.projectDescription || '-',
              Timeline: formData.timeline || '-',
              Address: formData.address || '-',
              FullName: formData.fullName || '-',
              Phone: formData.phone || '-',
              Email: formData.email || '-',
              PhotosCount: Array.isArray(formData.photos) ? formData.photos.length : 0,
              ConsentToText: !!formData.consentToText,
              Source: 'ServiceSelector: Dynamic',
            });
            
            console.log('TG Message:', tg);
            try { await backendSendTelegram(tg); } catch (err) { console.warn('Backend telegram text failed:', err); }
            if (Array.isArray(formData.photos) && formData.photos.length > 0) {
              try { await backendSendTelegramWithPhotos(formData.photos, 'Dynamic form photos'); } catch (err) { console.warn('Backend telegram media failed (dynamic):', err); }
            }
          } catch (err) {
            console.warn('Telegram notify failed (dynamic):', err);
          }
          // Store Dynamic
          try {
            // Map internal ids to human-readable names for TG and DB
            const labelize = (ids) => {
              if (!Array.isArray(ids)) return ids;
              const mapIdToLabel = (id) => {
                // Handle custom descriptions: "kitchen_remodel_custom|Custom description text"
                if (String(id).includes('|')) {
                  const [serviceId, customDesc] = String(id).split('|', 2);
                  if (serviceId.endsWith('_custom')) {
                    const groupKey = serviceId.replace('_custom', '');
                    // Find group name
                    for (const catKey of Object.keys(serviceData)) {
                      const cat = serviceData[catKey];
                      if (cat[groupKey]) {
                        return `${cat[groupKey].name} — ${customDesc}`;
                      }
                    }
                    return `Custom — ${customDesc}`;
                  }
                }
                
                // Handle regular IDs like "kitchen_remodel_1" or "drywall_repair_0"
                const parts = String(id).split('_');
                if (parts.length < 2) return id;
                
                // Get the last part as index, join the rest as group key
                const idxStr = parts[parts.length - 1];
                const groupKey = parts.slice(0, -1).join('_');
                
                for (const catKey of Object.keys(serviceData)) {
                  const cat = serviceData[catKey];
                  if (cat[groupKey]) {
                    const optIdx = Number(idxStr);
                    const name = cat[groupKey].name;
                    const option = Array.isArray(cat[groupKey].options) ? cat[groupKey].options[optIdx] : undefined;
                    return option ? `${name} — ${option}` : name || id;
                  }
                }
                return id;
              };
              return ids.map(mapIdToLabel);
            };

            const stored = await storeRequest({
              source: 'website',
              form_type: 'dynamic',
              session_id: sharedSessionId || undefined,
              contact: { fullName: formData.fullName, email: formData.email, phone: formData.phone, address: formData.address, consentToText: formData.consentToText },
              meta: { projectDescription: formData.projectDescription, timeline: formData.timeline, mainCategories: labelize(formData.mainCategories), serviceGroups: labelize(formData.serviceGroups), detailedServices: labelize(formData.detailedServices) },
              photos: Array.isArray(formData.photos) ? formData.photos.map(p => ({ url: p.url, name: p.name, origin: 'dynamic' })) : [],
            });
            const requestId = stored && stored.request_id;
            if (requestId && Array.isArray(formData.photos) && formData.photos.length > 0) {
              try { await uploadPhotos({ requestId, origin: 'dynamic', files: formData.photos, sessionId: sharedSessionId || null }); } catch (e) { console.warn('uploadPhotos failed (dynamic):', e); }
            }
          } catch (e) { console.warn('storeRequest failed (dynamic):', e); }
        }
      }

      // For dynamic we already navigated; for hourly the UI remains on the same view
    } catch (error) {
      console.error('Submission error:', error);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <MainCategoryStep
            selectedCategories={formData.mainCategories}
            onCategoriesChange={(categories) => updateFormData('mainCategories', categories)}
            onNext={nextStep}
          />
        );
      case 2:
        return (
          <ServiceGroupStep
            mainCategories={formData.mainCategories}
            selectedGroups={formData.serviceGroups}
            onGroupsChange={(groups) => updateFormData('serviceGroups', groups)}
            onNext={nextStep}
            onPrev={prevStep}
            serviceData={serviceData}
          />
        );
      case 3:
        return (
          <DetailedServiceStep
            serviceGroups={formData.serviceGroups}
            selectedServices={formData.detailedServices}
            onServicesChange={(services) => updateFormData('detailedServices', services)}
            onNext={nextStep}
            onPrev={prevStep}
            serviceData={serviceData}
          />
        );
      case 4:
        return (
          <ProjectDetailsStep
            formData={formData}
            onDataChange={updateFormData}
            onNext={nextStep}
            onPrev={prevStep}
          />
        );
      case 5:
        return (
          <ContactInfoStep
            formData={formData}
            onDataChange={updateFormData}
            onSubmit={handleSubmit}
            onPrev={prevStep}
          />
        );
      case 6:
        return <ConfirmationStep formData={formData} isHourly={false} />;
      default:
        return null;
    }
  };

  // Animation variants
  const pageVariants = {
    forward: {
      initial: { opacity: 0, x: 20 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: -20 },
    },
    backward: {
      initial: { opacity: 0, x: -20 },
      animate: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: 20 },
    },
  };

  const selectedVariant = pageVariants[navigationDirection];

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Handyman of South Charlotte</h1>
          <p className="text-xl text-gray-600">Let's find the perfect service for your home</p>
        </motion.div>

        {/* Form Type Toggle */}
        <FormToggle formType={formType} onFormTypeChange={handleFormTypeChange} />

        {formType === 'dynamic' ? (
          <>
            {/* Step Indicator */}
            {currentStep < totalSteps && (
              <StepIndicator currentStep={currentStep} totalSteps={totalSteps - 1} onStepClick={goToStep} />
            )}

            {/* Dynamic Form Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={selectedVariant.initial}
                animate={selectedVariant.animate}
                exit={selectedVariant.exit}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl shadow-xl p-8"
              >
                {renderStep()}
              </motion.div>
            </AnimatePresence>
          </>
        ) : formType === 'hourly' ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <HourlyBookingForm formData={formData} onDataChange={updateFormData} onSubmit={() => handleSubmit(true)} />
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-2xl shadow-xl p-0"
          >
            <AIAssistantOrder
              formData={formData}
              onDataChange={updateFormData}
              onSubmit={() => handleSubmit(false, true)}
            />
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ServiceSelector;