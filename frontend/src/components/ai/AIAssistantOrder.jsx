import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';
import AddressAutocomplete from '../../common/AddressAutocomplete';
import { buildTelegramMessage } from '../../common/MessageFormatter';
import { sendSms as backendSendSms, sendTelegram as backendSendTelegram, sendTelegramWithPhotos as backendSendTelegramWithPhotos, sendTelegramDocument as backendSendTelegramDocument, storeRequest, uploadPhotos, aiEnsureRequest, aiIngestMessage } from '../../common/BackendAPI';

const { 
  FiSend, FiUpload, FiX, FiMapPin, FiUser, 
  FiPhone, FiMail, FiDollarSign, FiMessageCircle, 
  FiCheckCircle, FiClipboard, FiPlusCircle, FiArrowRight
} = FiIcons;

const AIAssistantOrder = ({ formData, onDataChange, onSubmit }) => {
  const [userMessage, setUserMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [jobsExpanded, setJobsExpanded] = useState(true);
  const [contactExpanded, setContactExpanded] = useState(false);
  
  const [isTyping, setIsTyping] = useState(false);
  
  const messagesEndRef = useRef(null);
  const chatContainerRef = useRef(null);
  const fileInputRef = useRef(null);
  const messageInputRef = useRef(null);
  const sessionIdRef = useRef(null);

  // Telnyx SMS helpers
  const normalizePhone = (raw) => {
    if (!raw) return '';
    const digits = String(raw).replace(/\D/g, '');
    if (!digits) return '';
    // If US 10-digit, prefix +1
    if (digits.length === 10) return `+1${digits}`;
    // If already 11+ and starts with 1, ensure +
    if (digits.length === 11 && digits.startsWith('1')) return `+${digits}`;
    // Otherwise best-effort add +
    return digits.startsWith('+') ? digits : `+${digits}`;
  };

  const sendTelnyxSms = async ({ to, text, subject }) => {
    try { await backendSendSms({ to, text, subject }); } catch (e) { console.warn('Backend SMS failed:', e); }
  };

  const handleResetDialogue = () => {
    try {
      const oldSessionId = sessionIdRef.current;
      const newSessionId = `${Date.now()}-${Math.random().toString(36).slice(2)}`;
      localStorage.setItem('ai_session_id', newSessionId);
      sessionIdRef.current = newSessionId;
      if (oldSessionId) {
        try { localStorage.removeItem(`ai_chat_${oldSessionId}`); } catch (err) { console.warn('Failed to remove old chat key', err); }
      }
      try { localStorage.removeItem('ai_chat_last'); } catch (err) { console.warn('Failed to remove ai_chat_last', err); }
    } catch (err) {
      console.warn('Reset dialogue failed:', err);
    }
    onDataChange('aiMessages', []);
    onDataChange('aiJobs', []);
    onDataChange('aiPhotos', []);
    setUserMessage('');
    try {
      if (messageInputRef.current) {
        messageInputRef.current.style.height = 'auto';
      }
    } catch (err) { console.warn('Failed to reset textarea height', err); }
  };

  // Persist sessionId across reloads; create only if missing
  useEffect(() => {
    const STORAGE_KEY = 'ai_session_id';
    try {
      const existing = localStorage.getItem(STORAGE_KEY);
      if (existing && typeof existing === 'string') {
        sessionIdRef.current = existing;
      } else {
        const fresh = `${Date.now()}-${Math.random().toString(36).slice(2)}`;
        localStorage.setItem(STORAGE_KEY, fresh);
        sessionIdRef.current = fresh;
      }
      // Load persisted conversation for this session, if any
      const chatKey = `ai_chat_${sessionIdRef.current}`;
      let restored = false;
      try {
        const stored = localStorage.getItem(chatKey);
        if (stored) {
          const parsed = JSON.parse(stored);
          if (Array.isArray(parsed) && parsed.length > 0) {
            const cleaned = parsed.map((m) => ({
              sender: m.sender,
              content: typeof m.content === 'string' ? m.content : '',
              photos: Array.isArray(m.photos)
                ? m.photos
                    .filter((p) => p && p.url)
                    .map((p) => ({ url: p.url, name: p.name || '' }))
                : undefined,
            }));
            onDataChange('aiMessages', cleaned);
            restored = true;
          }
        }
  } catch (err) {
    console.warn('Chat load failed:', err);
  }

      // Fallback: if nothing under current sessionId, try the most recent saved chat
      if (!restored) {
        try {
          const keys = Object.keys(localStorage).filter((k) => k.startsWith('ai_chat_'));
          if (keys.length > 0) {
            // pick the one with the highest timestamp prefix if available
            const pick = keys
              .map((k) => {
                const sid = k.replace('ai_chat_', '');
                const tsStr = String(sid).split('-')[0];
                const ts = Number(tsStr) || 0;
                return { k, ts };
              })
              .sort((a, b) => b.ts - a.ts)[0];
            const altStored = pick ? localStorage.getItem(pick.k) : null;
            if (altStored) {
              const parsed = JSON.parse(altStored);
              if (Array.isArray(parsed) && parsed.length > 0) {
                const cleaned = parsed.map((m) => ({
                  sender: m.sender,
                  content: typeof m.content === 'string' ? m.content : '',
                  photos: Array.isArray(m.photos)
                    ? m.photos
                        .filter((p) => p && p.url)
                        .map((p) => ({ url: p.url, name: p.name || '' }))
                    : undefined,
                }));
                onDataChange('aiMessages', cleaned);
              }
            }
          }
        } catch (err) {
          console.warn('Chat fallback load failed:', err);
        }
      }
    } catch (_) {
      if (!sessionIdRef.current) {
        sessionIdRef.current = `${Date.now()}-${Math.random().toString(36).slice(2)}`;
      }
    }
  }, []);

  // No default seeded jobs; jobs will be added from webhook responses as available

  useEffect(() => {
    // Always keep chat scrolled to the latest message
      const chatContainer = chatContainerRef.current;
      if (chatContainer) {
        chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  }, [formData.aiMessages]);

  // Also keep it pinned to bottom while AI is typing
  useEffect(() => {
    const chatContainer = chatContainerRef.current;
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  }, [isTyping]);

  // Persist conversation to localStorage on every change (sanitize photos to serializable fields)
  useEffect(() => {
    try {
      if (sessionIdRef.current && Array.isArray(formData.aiMessages)) {
        const chatKey = `ai_chat_${sessionIdRef.current}`;
        const serializable = formData.aiMessages.map((m) => ({
          sender: m.sender,
          content: typeof m.content === 'string' ? m.content : '',
          photos: Array.isArray(m.photos)
            ? m.photos.map((p) => ({ url: p?.url || '', name: p?.name || '' }))
            : undefined,
        }));
        localStorage.setItem(chatKey, JSON.stringify(serializable));
      }
    } catch (err) {
      console.warn('Chat fallback load failed:', err);
    }
  }, [formData.aiMessages]);

  const scrollToBottom = () => {
    const chatContainer = chatContainerRef.current;
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  };

  const removeCurrentPhotoAt = (idx) => {
    try {
      const list = Array.isArray(formData.aiPhotos) ? [...formData.aiPhotos] : [];
      if (idx < 0 || idx >= list.length) return;
      // Revoke object URL if we created one
      try { if (list[idx] && list[idx].url && list[idx].url.startsWith('blob:')) URL.revokeObjectURL(list[idx].url); } catch (_) {}
      list.splice(idx, 1);
      onDataChange('aiPhotos', list);
    } catch (err) {
      // ignore
    }
  };

  // Upload a single file to a temporary host and return a public URL (unused here but kept)
  const uploadFileAndGetUrl = async (file) => {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 30000);
    try {
      const fd = new FormData();
      fd.append('file', file);
      const res = await fetch('https://file.io', { method: 'POST', body: fd, signal: controller.signal });
      const json = await res.json().catch(() => null);
      if (res.ok && json && (json.link || json.url)) {
        return json.link || json.url;
      }
      return null;
    } catch (_) {
      return null;
    } finally {
      clearTimeout(timeoutId);
    }
  };

  const fileToBase64 = (file) =>
    new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = () => resolve(String(reader.result || ''));
      reader.readAsDataURL(file);
    });

  const WEBHOOK_URL = 'https://www.klmnoperesete.com/webhook/website_ai_helper';

  const sendToWebhook = async (payload, { timeoutMs = 15000 } = {}) => {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), timeoutMs);
    
    console.log('Sending to webhook:', { url: WEBHOOK_URL, payload });
    
    try {
      const response = await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });

      console.log('Webhook response status:', response.status, response.statusText);
      console.log('Webhook response headers:', Object.fromEntries(response.headers.entries()));

      let data = null;
      try {
        data = await response.json();
        console.log('Webhook response data:', data);
      } catch (_) {
        console.log('Failed to parse webhook response as JSON');
      }

      if (!response.ok) {
        const error = new Error('Webhook responded with non-2xx status');
        error.status = response.status;
        error.data = data;
        throw error;
      }

      return data;
    } catch (error) {
      console.error('Webhook request failed:', error);
      throw error;
    } finally {
      clearTimeout(timeoutId);
    }
  };

  const handleMessageSubmit = async (e) => {
    if (e && typeof e.preventDefault === 'function') e.preventDefault();
    const hasPhotos = Array.isArray(formData.aiPhotos) && formData.aiPhotos.length > 0;
    if (!userMessage.trim() && !hasPhotos) return;

    const photosToSend = hasPhotos ? [...formData.aiPhotos] : [];

    // Add user message to chat immediately
    const updatedMessages = [
      ...formData.aiMessages,
      { sender: 'user', content: userMessage.trim(), photos: hasPhotos ? photosToSend : undefined }
    ];
    onDataChange('aiMessages', updatedMessages);

    // Clear UI immediately
    setUserMessage('');
    if (hasPhotos) onDataChange('aiPhotos', []);
    setIsTyping(true);

    // Fire-and-forget realtime persistence (ensure request, upload photos, save message)
    (async () => {
      try {
        let storagePaths = [];
        if (hasPhotos) {
          try {
            const ensure = await aiEnsureRequest({ sessionId: sessionIdRef.current });
            const requestId = ensure?.request_id || ensure?.requestId;
            if (requestId) {
              const up = await uploadPhotos({ requestId, origin: 'ai-message', files: photosToSend, sessionId: sessionIdRef.current });
              const items = (up && Array.isArray(up.items)) ? up.items : [];
              storagePaths = items.map((it) => it?.storage_path).filter(Boolean);
            }
          } catch (_) {}
        }
        try { await aiIngestMessage({ sessionId: sessionIdRef.current, sender: 'user', content: userMessage.trim(), photosCount: hasPhotos ? photosToSend.length : 0, storagePaths }); } catch (_) {}
      } catch (_) {}
    })();

    try {
      // Important: do NOT include the current outgoing message in history
      const priorMessages = formData.aiMessages;
      const trimmedHistory = priorMessages.slice(-20);
      // Ensure history is JSON-serializable: strip any photos/blob/file refs
      const sanitizedHistory = trimmedHistory.map((m) => ({
        sender: m.sender,
        content: typeof m.content === 'string' ? m.content : '',
        photos_count: Array.isArray(m.photos) ? m.photos.length : 0,
      }));
      const normalizedJobs = Array.isArray(formData.aiJobs)
        ? formData.aiJobs.map((j) => ({
            id: j.id,
            name: j.name,
            price: Number(j.price) || 0,
          }))
        : [];

      const jobsTotal = normalizedJobs.reduce((sum, j) => sum + (Number(j.price) || 0), 0);

      const contentText = userMessage.trim() || (hasPhotos ? 'Sent photos' : '');
      const photosCountValue = hasPhotos ? photosToSend.length : 0;
      const commonFields = {
        // Inline message shape
        sender: 'user',
        content: contentText,
        photos_count: photosCountValue,
        // Backward compatible field
        message: contentText,
        // Context
        sessionId: sessionIdRef.current,
        history: sanitizedHistory,
        contact: {
          address: formData.aiAddress,
          fullName: formData.aiFullName,
          phone: formData.aiPhone,
          email: formData.aiEmail,
        },
        source: 'calculator_ai',
        current_jobs: normalizedJobs,
        jobs_total: jobsTotal,
        photosCount: photosCountValue,
      };

      console.log('About to send webhook payload:', commonFields);

      let data;
      if (hasPhotos) {
        // Send multipart/form-data with binary photos and JSON fields
        const fd = new FormData();
        fd.append('sender', commonFields.sender);
        fd.append('content', commonFields.content);
        fd.append('photos_count', String(commonFields.photos_count));
        fd.append('message', commonFields.message);
        fd.append('sessionId', commonFields.sessionId);
        fd.append('history', JSON.stringify(commonFields.history));
        fd.append('contact', JSON.stringify(commonFields.contact));
        fd.append('source', commonFields.source);
        fd.append('current_jobs', JSON.stringify(commonFields.current_jobs));
        fd.append('jobs_total', String(commonFields.jobs_total));
        fd.append('photosCount', String(commonFields.photosCount));
        photosToSend.forEach((p, idx) => {
          if (p && p.file) {
            fd.append('photos', p.file, p.name || `photo-${idx}`);
          }
        });
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 30000);
        try {
          const response = await fetch(WEBHOOK_URL, {
            method: 'POST',
            headers: { Accept: 'application/json' },
            body: fd,
            signal: controller.signal,
          });
          let json = null;
          try {
            json = await response.json();
          } catch (_) {
            json = null;
          }
          if (!response.ok) {
            const err = new Error('Webhook responded with non-2xx status');
            err.status = response.status;
            err.data = json;
            throw err;
          }
          data = json;
        } finally {
          clearTimeout(timeoutId);
        }
      } else {
        data = await sendToWebhook(commonFields);
      }

      // Normalize n8n style response: [ { output: { ... } } ] or { output: { ... } }
      const normalized = Array.isArray(data)
        ? (data[0]?.output ?? data[0] ?? {})
        : (data?.output ?? data ?? {});

      // Extract reply message
      const replyMessage = normalized?.reply_message
        || normalized?.message // fallback to generic message field if provided
        || 'Thanks! I have recorded that. Could you share any other details about the job?';

      // Append AI reply
      const updatedMessagesWithAI = [
        ...updatedMessages,
        { sender: 'ai', content: replyMessage },
      ];
      onDataChange('aiMessages', updatedMessagesWithAI);

      try { await aiIngestMessage({ sessionId: sessionIdRef.current, sender: 'ai', content: replyMessage, photosCount: 0 }); } catch (_) {}
    } catch (error) {
      const updatedMessagesWithAI = [
        ...updatedMessages,
        { sender: 'ai', content: 'Извините, возникла ошибка при получении ответа. Попробуйте еще раз.' },
      ];
      onDataChange('aiMessages', updatedMessagesWithAI);
      console.error('Webhook error:', error);
    } finally {
      setIsTyping(false);
      // reset textarea height back to single-row after send
      try {
        if (messageInputRef.current) {
          messageInputRef.current.style.height = 'auto';
        }
      } catch (err) {
        // ignore
      }
    }
  };

  const addJobsFromWebhook = (webhookData) => {
    if (!webhookData || !webhookData.job) return;

    const { job } = webhookData;
    const type = String(job.type || '').toLowerCase();
    const id = job.id;
    const name = typeof job.name === 'string' ? job.name.trim() : '';
    const price = Number(job.price);

    const existing = Array.isArray(formData.aiJobs) ? [...formData.aiJobs] : [];
    const idxById = (targetId) => existing.findIndex((j) => j.id === targetId);

    if (type === 'create') {
      const safeId = id && String(id).trim() !== '' ? id : `${Date.now()}-${Math.random().toString(36).slice(2)}`;
      if (!name || Number.isNaN(price) || price === 0) return;
      const idx = idxById(safeId);
      const newJob = { id: safeId, name, price };
      if (idx >= 0) existing[idx] = newJob; else existing.push(newJob);
      onDataChange('aiJobs', existing);
      const toPhone = normalizePhone(formData.aiPhone);
      if (toPhone) {
        const text = `New request created: ${name} — $${price}. We will contact you shortly.`;
        const subject = 'New Service Request';
        try { backendSendSms({ to: toPhone, text, subject }).catch(() => {}); } catch (_) {}
      }
      return;
    }

    if (type === 'update') {
      if (!id) return;
      const idx = idxById(id);
      if (idx < 0) return;
      const updated = { ...existing[idx] };
      if (name) updated.name = name;
      if (!Number.isNaN(price)) updated.price = price;
      if (updated.price === 0) {
        onDataChange('aiJobs', existing.filter((j) => j.id !== id));
        return;
      }
      existing[idx] = updated;
      onDataChange('aiJobs', existing);
      return;
    }

    if (type === 'delete' || type === 'deleted') {
      if (!id) return;
      const filtered = existing.filter((j) => j.id !== id);
      onDataChange('aiJobs', filtered);
      return;
    }
  };

  const handleFileUpload = (e) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const room = Math.max(0, 10 - (formData.aiPhotos?.length || 0));
    const newFiles = Array.from(files).slice(0, room);
    const fileObjects = newFiles.map(file => ({
      file,
      name: file.name,
      size: file.size,
      url: URL.createObjectURL(file)
    }));
    
    onDataChange('aiPhotos', [...(formData.aiPhotos || []), ...fileObjects].slice(0, 10));
    try {
      if (fileInputRef.current) fileInputRef.current.value = '';
    } catch (err) {
      // ignore
    }
  };

  const handleSubmit = async () => {
    onSubmit();
    setFormSubmitted(true);
    try {
      const toPhone = normalizePhone(formData.aiPhone);
      if (toPhone) {
        const text = `Reply YES to confirm, STOP if this isn’t for you. We got your request — will contact you soon.`;
        const subject = 'AI Assistant Request';
        try { await backendSendSms({ to: toPhone, text, subject }); } catch (e) { console.warn('Backend SMS failed:', e); }
      }
    } catch (err) {
      console.warn('Chat persist failed:', err);
    }

    try {
      const jobs = Array.isArray(formData.aiJobs) ? formData.aiJobs.map(j => `${j.name} - $${j.price}`) : [];
      const tg = buildTelegramMessage('New AI Assistant Submission', {
        Address: formData.aiAddress || '-',
        FullName: formData.aiFullName || '-',
        Phone: formData.aiPhone || '-',
        Email: formData.aiEmail || '-',
        ConsentToText: !!formData.aiConsentToText,
        Jobs: jobs,
        JobsTotal: jobs.reduce((s, j) => {
          const m = /\$(\d+(?:\.\d+)?)/.exec(j);
          return s + (m ? Number(m[1]) : 0);
        }, 0),
        MessagesCount: Array.isArray(formData.aiMessages) ? formData.aiMessages.length : 0,
        Source: 'ServiceSelector: AI Assistant',
      });
      try { await backendSendTelegram(tg); } catch (err) { console.warn('Backend telegram text failed:', err); }
      try {
        const allPhotos = [];
        if (Array.isArray(formData.aiMessages)) {
          formData.aiMessages.forEach((m) => {
            if (m && m.sender === 'user' && Array.isArray(m.photos) && m.photos.length > 0) {
              m.photos.forEach((p) => allPhotos.push(p));
            }
          });
        }
        if (Array.isArray(formData.aiPhotos)) {
          allPhotos.push(...formData.aiPhotos);
        }
        if (allPhotos.length > 0) {
          try { await backendSendTelegramWithPhotos(allPhotos, 'AI Assistant photos (all from conversation)'); } catch (err) { console.warn('Backend telegram media failed:', err); }
        }
      } catch (err) {
        console.warn('Telegram media group (AI all photos) failed:', err);
      }

      try {
        if (Array.isArray(formData.aiMessages) && formData.aiMessages.length > 0) {
          const lines = formData.aiMessages.map((m) => {
            const who = m.sender === 'user' ? 'User' : 'AI';
            const text = typeof m.content === 'string' ? m.content : '';
            const photosInfo = Array.isArray(m.photos) && m.photos.length > 0
              ? ` [photos: ${m.photos.length}]`
              : '';
            return `${who}: ${text}${photosInfo}`;
          });
          const content = lines.join('\n\n');
          const blob = new Blob([content], { type: 'text/plain' });
          try { await backendSendTelegramDocument(blob, 'ai_dialog.txt', 'AI Assistant conversation'); } catch (err) { console.warn('Backend telegram document failed:', err); }
        }
      } catch (err) {
        console.warn('Telegram dialog send failed:', err);
      }

      try {
        const stored = await storeRequest({
          source: 'website',
          form_type: 'ai',
          session_id: sessionIdRef.current,
          contact: { fullName: formData.aiFullName, email: formData.aiEmail, phone: formData.aiPhone, address: formData.aiAddress, aiConsentToText: formData.aiConsentToText },
          jobs: Array.isArray(formData.aiJobs) ? formData.aiJobs.map(j => ({ id: j.id, name: j.name, price: j.price })) : [],
          messages: Array.isArray(formData.aiMessages) ? formData.aiMessages.map(m => ({ sender: m.sender, content: m.content, photos_count: Array.isArray(m.photos)? m.photos.length:0, session_id: sessionIdRef.current })) : [],
          photos: (() => {
            const list = [];
            if (Array.isArray(formData.aiMessages)) {
              formData.aiMessages.forEach((m) => {
                if (Array.isArray(m.photos)) {
                  m.photos.forEach((p) => list.push({ url: p.url, name: p.name, origin: 'ai-message', session_id: sessionIdRef.current }));
                }
              });
            }
            if (Array.isArray(formData.aiPhotos)) {
              formData.aiPhotos.forEach((p) => list.push({ url: p.url, name: p.name, origin: 'ai-current', session_id: sessionIdRef.current }));
            }
            return list;
          })(),
        });
        const requestId = stored && stored.request_id;
        if (requestId) {
          // Upload all conversation photos (from messages history) to storage
          try {
            const allPhotos = [];
            if (Array.isArray(formData.aiMessages)) {
              formData.aiMessages.forEach((m) => {
                if (m && m.sender === 'user' && Array.isArray(m.photos) && m.photos.length > 0) {
                  m.photos.forEach((p) => allPhotos.push(p));
                }
              });
            }
            if (allPhotos.length > 0) {
              await uploadPhotos({ requestId, origin: 'ai-message', files: allPhotos, sessionId: sessionIdRef.current });
            }
          } catch (e) { console.warn('uploadPhotos failed (ai-message):', e); }
          // Upload currently attached photos list (already in state) to storage
          if (Array.isArray(formData.aiPhotos) && formData.aiPhotos.length > 0) {
            try { await uploadPhotos({ requestId, origin: 'ai-current', files: formData.aiPhotos, sessionId: sessionIdRef.current }); } catch (e) { console.warn('uploadPhotos failed (ai-current):', e); }
          }
        }
      } catch (e) { console.warn('storeRequest failed (ai):', e); }
    } catch (err) {
      console.warn('Telegram notify failed (AI):', err);
    }
  };

  const removeJob = (jobId) => {
    const updatedJobs = formData.aiJobs.filter(job => job.id !== jobId);
    onDataChange('aiJobs', updatedJobs);
  };

  const addNewJob = () => {
    const newJob = {
      id: `${Date.now()}`,
      name: 'New job item',
      price: 0,
    };
    onDataChange('aiJobs', [...formData.aiJobs, newJob]);
  };

  const calculateTotal = () => {
    let total = 0;
    formData.aiJobs.forEach(job => {
      const amount = Number(job.price);
      if (!Number.isNaN(amount)) total += amount;
    });
    return `$${total.toFixed(2)}`;
  };

  const isFormValid = 
    formData.aiAddress && 
    formData.aiFullName && 
    formData.aiPhone && 
    formData.aiEmail && 
    formData.aiConsentToText;

  if (formSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center space-y-8 p-8"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
        >
          <SafeIcon icon={FiCheckCircle} className="w-24 h-24 text-green-500 mx-auto" />
        </motion.div>
        
        <div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            AI-Assisted Request Submitted Successfully!
          </h2>
          <p className="text-xl text-gray-600 mb-2">
            Thank you, {formData.aiFullName || 'valued customer'}!
          </p>
          <p className="text-gray-600">
            We've received your service request and will get back to you soon.
          </p>
        </div>

        <div className="bg-blue-50 rounded-xl p-6 space-y-4">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            What happens next?
          </h3>
          <div className="space-y-3 text-left">
            <div className="flex items-center space-x-3">
              <SafeIcon icon={FiMail} className="w-5 h-5 text-blue-500" />
              <span className="text-gray-700">
                You'll receive a confirmation email shortly
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <SafeIcon icon={FiPhone} className="w-5 h-5 text-blue-500" />
              <span className="text-gray-700">
                Our team will call you within 24 hours to discuss your project
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <SafeIcon icon={FiIcons.FiCalendar} className="w-5 h-5 text-blue-500" />
              <span className="text-gray-700">
                We'll schedule a convenient time for your service
              </span>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-xl p-6">
          <h4 className="text-lg font-semibold text-gray-800 mb-2">
            Need immediate assistance?
          </h4>
          <p className="text-gray-600 mb-4">
            Call us directly at
          </p>
          <a 
            href="tel:+19803167792" 
            className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
          >
            (980) 316-7792
          </a>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.location.reload()}
          className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:bg-blue-700 transition-colors"
        >
          Submit Another Request
        </motion.button>
      </motion.div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
      {/* Left Side - Chat Interface */}
      <div className="flex flex-col h-full border-r border-gray-200 lg:border-r-0">
        <div className="bg-blue-600 text-white p-4 flex items-center justify-between">
          <SafeIcon icon={FiMessageCircle} className="w-5 h-5 mr-2" />
          <h3 className="text-lg font-semibold">AI Assistant</h3>
          <button
            type="button"
            onClick={handleResetDialogue}
            className="ml-4 inline-flex items-center gap-2 text-sm bg-white/10 hover:bg-white/20 px-3 py-1 rounded"
            title="Reset dialogue"
          >
            <SafeIcon icon={FiIcons.FiRotateCcw} className="w-4 h-4" />
            <span>Reset Dialogue</span>
          </button>
        </div>
        
        <div 
          ref={chatContainerRef}
          className="flex-1 overflow-y-auto p-4 bg-gray-50"
          style={{ maxHeight: 'calc(100vh - 250px)', minHeight: '400px' }}
        >
          {formData.aiMessages.map((message, index) => (
            <div 
              key={index}
              className={`mb-4 flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={`max-w-[80%] rounded-2xl p-3 ${
                  message.sender === 'user' 
                    ? 'bg-blue-500 text-white rounded-tr-none' 
                    : 'bg-white shadow-md rounded-tl-none'
                }`}
              >
          {message.content && <div className="mb-2 whitespace-pre-wrap">{message.content}</div>}
          {Array.isArray(message.photos) && message.photos.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-1">
              {message.photos.map((photo, photoIndex) => (
                <img
                  key={photoIndex}
                  src={photo.url}
                  alt={photo.name}
                  className="h-20 w-20 object-cover rounded-lg"
                />
              ))}
            </div>
          )}
              </motion.div>
            </div>
          ))}
          {isTyping && (
            <div className="mb-4 flex justify-start">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="max-w-[80%] rounded-2xl p-3 bg-white shadow-md rounded-tl-none"
              >
                <div className="flex space-x-1">
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }} />
                </div>
              </motion.div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        
        <form onSubmit={handleMessageSubmit} className="p-4 bg-white border-t border-gray-200">
          <div className="flex space-x-2">
            <div className="relative flex-1">
                <textarea
                ref={messageInputRef}
                value={userMessage}
                onChange={(e) => setUserMessage(e.target.value)}
                placeholder="Type your message..."
                  rows={1}
                  className="w-full pl-4 pr-10 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none overflow-hidden"
                  style={{ minHeight: '48px', maxHeight: '120px', height: 'auto' }}
                  onInput={(e) => {
                    e.target.style.height = 'auto';
                    e.target.style.height = Math.min(e.target.scrollHeight, 120) + 'px';
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && !e.shiftKey) {
                      e.preventDefault();
                      handleMessageSubmit(e);
                    }
                  }}
              />
              <label htmlFor="ai-photo-upload" className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer hover:text-gray-600" title="Attach photos">
                <SafeIcon icon={FiUpload} className="w-5 h-5" />
              </label>
              <input
                id="ai-photo-upload"
                type="file"
                multiple
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
                  ref={fileInputRef}
              />
            </div>
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-600 text-white p-3 rounded-xl hover:bg-blue-700"
            >
              <SafeIcon icon={FiSend} className="w-5 h-5" />
            </motion.button>
          </div>
          
          {/* Photo Preview (current attachments) */}
          {Array.isArray(formData.aiPhotos) && formData.aiPhotos.length > 0 && (
            <div className="flex overflow-x-auto space-x-2 mt-2 pb-2">
              {formData.aiPhotos.map((photo, index) => (
                <div key={index} className="relative flex-shrink-0">
                  <img
                    src={photo.url}
                    alt={photo.name}
                    className="h-16 w-16 object-cover rounded-lg"
                  />
                  <button
                    type="button"
                    onClick={() => removeCurrentPhotoAt(index)}
                    className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full p-1 shadow hover:bg-red-700"
                    aria-label="Remove photo"
                    title="Remove photo"
                  >
                    <SafeIcon icon={FiX} className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </form>
      </div>
      
      {/* Right Side - Job Summary Panel */}
      <div className="bg-white border-l border-gray-200">
        <div className="bg-gray-50 p-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold text-gray-800">Job Summary</h3>
        </div>
        
        <div className="p-4">
          {/* Jobs Section */}
          <div className="mb-6">
            <button 
              onClick={() => setJobsExpanded(!jobsExpanded)}
              className="flex items-center justify-between w-full p-2 bg-blue-50 rounded-lg mb-2"
            >
              <div className="flex items-center">
                <SafeIcon icon={FiClipboard} className="w-5 h-5 text-blue-600 mr-2" />
                <span className="font-medium">Jobs</span>
              </div>
              <SafeIcon 
                icon={jobsExpanded ? FiIcons.FiChevronUp : FiIcons.FiChevronDown} 
                className="w-5 h-5 text-blue-600" 
              />
            </button>
            
            {jobsExpanded && (
              <div className="space-y-3 mt-3">
                {formData.aiJobs.map(job => (
                  <div key={job.id} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                    <div className="flex-1">
                      <p className="font-medium">{job.name}</p>
                      <div className="flex items-center text-sm text-gray-500">
                        <span className="font-medium text-blue-600">${String(Number(job.price).toFixed(2))}</span>
                      </div>
                    </div>
                    <button 
                      onClick={() => removeJob(job.id)}
                      className="text-gray-400 hover:text-red-500"
                    >
                      <SafeIcon icon={FiX} className="w-5 h-5" />
                    </button>
                  </div>
                ))}
                
                <button 
                  onClick={addNewJob}
                  className="flex items-center justify-center w-full p-2 border border-dashed border-blue-300 rounded-lg text-blue-600 hover:bg-blue-50"
                >
                  <SafeIcon icon={FiPlusCircle} className="w-5 h-5 mr-2" />
                  <span>Add Job Item</span>
                </button>
              </div>
            )}
          </div>
          
          {/* Contact Information */}
          <div className="mb-6">
            <button 
              onClick={() => setContactExpanded(!contactExpanded)}
              className="flex items-center justify-between w-full p-2 bg-blue-50 rounded-lg mb-2"
            >
              <div className="flex items-center">
                <SafeIcon icon={FiUser} className="w-5 h-5 text-blue-600 mr-2" />
                <span className="font-medium">Contact Information</span>
              </div>
              <SafeIcon 
                icon={contactExpanded ? FiIcons.FiChevronUp : FiIcons.FiChevronDown} 
                className="w-5 h-5 text-blue-600" 
              />
            </button>
            
            {contactExpanded && (
              <div className="space-y-4 mt-3">
                {/* Project Address with Google Places Autocomplete */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Project Address *
                  </label>
                  <div className="relative">
                    <AddressAutocomplete
                      id="ai-address"
                      value={formData.aiAddress || ''}
                      onChange={(val) => onDataChange('aiAddress', val)}
                      placeholder="Enter project address"
                      required
                      className="w-full p-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                </div>
                
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Contact Name *
                  </label>
                  <input
                    type="text"
                    value={formData.aiFullName || ''}
                    onChange={(e) => onDataChange('aiFullName', e.target.value)}
                    placeholder="Your full name"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    required
                  />
                </div>
                
                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={formData.aiPhone || ''}
                    onChange={(e) => onDataChange('aiPhone', e.target.value)}
                    placeholder="(980) 316-7792"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    required
                  />
                </div>
                
                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={formData.aiEmail || ''}
                    onChange={(e) => onDataChange('aiEmail', e.target.value)}
                    placeholder="your@email.com"
                    className="w-full p-2 border border-gray-300 rounded-lg"
                    required
                  />
                </div>
                
                {/* Text Message Consent */}
                <div className="pt-2">
                  <label className="flex items-start space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.aiConsentToText || false}
                      onChange={(e) => onDataChange('aiConsentToText', e.target.checked)}
                      className="mt-1 h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      required
                    />
                    <span className="text-sm text-gray-700">
                      I agree to receive text messages from Handyman of South Charlotte. *
                    </span>
                  </label>
                </div>
              </div>
            )}
          </div>
          
          {/* Total */}
          <div className="border-t border-gray-200 pt-4 mt-4">
            <div className="flex justify-between items-center mb-6">
              <span className="text-lg font-semibold text-gray-800">Estimated Total:</span>
              <span className="text-xl font-bold text-blue-600">{calculateTotal()}</span>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleSubmit}
              disabled={!isFormValid}
              className={`w-full py-3 px-6 rounded-xl font-medium flex items-center justify-center ${
                isFormValid 
                  ? 'bg-green-600 text-white' 
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              <span>Submit Request</span>
              <SafeIcon icon={FiArrowRight} className="ml-2 w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAssistantOrder;