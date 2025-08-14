import React, { useState } from 'react';
import AddressAutocomplete from '../common/AddressAutocomplete';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import SEO from '../components/SEO';
import { buildTelegramMessage } from '../common/MessageFormatter';
import { sendSms as backendSendSms, sendTelegram as backendSendTelegram, storeRequest } from '../common/BackendAPI';
import * as FiIcons from 'react-icons/fi';

const { FiMapPin, FiPhone, FiMail, FiMessageCircle, FiCalendar } = FiIcons;

function Contact() {
  const serviceAreas = [
    'Charlotte, NC',
    'Ballantyne, NC',
    'Mint Hill, NC',
    'Pineville, NC',
    'Matthews, NC'
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Handyman of South Charlotte",
    "description": "Professional handyman services in Charlotte and surrounding areas.",
    "telephone": "+19803167792",
    "email": "info@handymanofsouthcharlotte.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Charlotte",
      "addressRegion": "NC",
      "addressCountry": "US"
    },
    "areaServed": serviceAreas
  };

  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    phone: '',
    description: '',
    consentToText: false,
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const normalizePhone = (raw) => {
    if (!raw) return '';
    const digits = String(raw).replace(/\D/g, '');
    if (!digits) return '';
    if (digits.length === 10) return `+1${digits}`;
    if (digits.length === 11 && digits.startsWith('1')) return `+${digits}`;
    return digits.startsWith('+') ? digits : `+${digits}`;
  };

  const sendTelnyxSms = async ({ to, text, subject }) => {
    try { await backendSendSms({ to, text, subject }); } catch (e) { /* ignore */ }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Placeholder submit
    console.log('Contact form submitted:', formData);
    setFormSubmitted(true);
    const to = normalizePhone(formData.phone);
    if (to) {
      const text = `We received your request. Name: ${formData.name}. We will contact you shortly.`;
      try { await backendSendSms({ to, text, subject: 'Contact Request' }); } catch (e) { console.warn('Backend SMS failed, fallback direct'); await sendTelnyxSms({ to, text, subject: 'Contact Request' }); }
    }
    // Store in Supabase via backend
    try {
      // Reuse shared session id across all forms
      let sharedSessionId = '';
      try { sharedSessionId = localStorage.getItem('ai_session_id') || ''; } catch (_) { sharedSessionId = ''; }

      await storeRequest({
        source: 'website',
        form_type: 'contact',
        session_id: sharedSessionId || undefined,
        contact: { name: formData.name, email: formData.email, phone: formData.phone, address: formData.address, consentToText: formData.consentToText },
        meta: { description: formData.description || '' },
      });
    } catch (e) { console.warn('storeRequest failed (contact):', e); }

    setFormData({ name: '', address: '', email: '', phone: '', description: '', consentToText: false });
    setTimeout(() => setFormSubmitted(false), 5000);

    // Telegram notification
    try {
      const text = buildTelegramMessage('New Contact Form Submission', {
        Name: formData.name,
        Email: formData.email,
        Phone: formData.phone,
        Address: formData.address,
        Description: formData.description || '-',
        Source: 'Contact Page',
      });
      try { await backendSendTelegram(text); } catch (err) { console.warn('Backend telegram text failed (contact):', err); }
      // No photos in this compact contact form
    } catch (err) {
      console.warn('Telegram notify failed (contact):', err);
    }
  };

  return (
    <>
      <SEO
        title="Contact Handyman of South Charlotte - Service Areas"
        description="Contact Handyman of South Charlotte for professional services in Charlotte, Ballantyne, Mint Hill, Pineville, and Matthews. Call our AI assistant 24/7 or use our booking page."
        keywords="contact handyman Charlotte, handyman service areas, Charlotte handyman phone, book handyman Charlotte"
        schema={schema}
      />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-bright-brown to-bright-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Contact Us
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Get in touch with us for all your handyman needs in Charlotte and surrounding areas
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-lg p-8"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-bright-green p-3 rounded-lg">
                    <SafeIcon icon={FiPhone} className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600 mb-1">(980) 316-7792</p>
                    <p className="text-sm text-gray-500">Available 24/7 with AI assistant (Beta – We are still working to improve quality)</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-bright-green p-3 rounded-lg">
                    <SafeIcon icon={FiMail} className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">info@handymanofsouthcharlotte.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-bright-green p-3 rounded-lg">
                    <SafeIcon icon={FiMapPin} className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">Service Areas</h3>
                    <ul className="text-gray-600 space-y-1">
                      {serviceAreas.map((area) => (
                        <li key={area}>{area}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Form</h3>
                <div className="bg-white rounded-lg p-6 border border-gray-200">
                  {formSubmitted ? (
                    <div className="bg-bright-green/10 border-2 border-bright-green rounded-lg p-4 text-center">
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">Thank you!</h4>
                      <p className="text-gray-700">We received your request and will get back to you shortly.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="md:col-span-1">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bright-green focus:border-transparent"
                          placeholder="Your name"
                        />
                      </div>
                      <div className="md:col-span-1">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bright-green focus:border-transparent"
                          placeholder="you@email.com"
                        />
                      </div>
                      <div className="md:col-span-1">
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bright-green focus:border-transparent"
                          placeholder="(980) 316-7792"
                        />
                      </div>
                      <div className="md:col-span-1">
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Address *</label>
                      <AddressAutocomplete
                        id="address"
                        value={formData.address}
                        onChange={(val) => setFormData((prev) => ({ ...prev, address: val }))}
                        placeholder="Start typing address..."
                        required
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bright-green focus:border-transparent"
                      />
                      </div>
                      <div className="md:col-span-2">
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">Brief Description</label>
                        <textarea
                          id="description"
                          name="description"
                          rows={3}
                          value={formData.description}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-bright-green focus:border-transparent"
                          placeholder="Tell us what you need help with"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="flex items-start space-x-3 cursor-pointer">
                          <input
                            type="checkbox"
                            name="consentToText"
                            checked={formData.consentToText}
                            onChange={(e) => setFormData((prev) => ({ ...prev, consentToText: e.target.checked }))}
                            className="mt-1 h-5 w-5 rounded border-gray-300 text-bright-green focus:ring-bright-green"
                            required
                          />
                          <span className="text-sm text-gray-700">
                            I agree to receive text messages from Handyman of South Charlotte. *
                          </span>
                        </label>
                      </div>
                      <div className="md:col-span-2">
                        <button type="submit" className="w-full bg-bright-green text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors">Send Request</button>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="rounded-lg overflow-hidden shadow-lg h-80 lg:h-full">
                <iframe
                  title="Handyman of South Charlotte Service Area"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d104736.83001835675!2d-80.93281784179686!3d35.22709399999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88541fc4fc381a81%3A0x884650e6bf43d164!2sCharlotte%2C%20NC!5e0!3m2!1sen!2sus!4v1658955826463!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Need a Handyman in Your Pocket?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Bookmark this site so you always know where your handyman is. Our AI booking system makes scheduling easy and our owner-led service ensures quality work every time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+19803167792"
                className="bg-ai-purple text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-600 transition-colors inline-flex items-center justify-center"
              >
                <SafeIcon icon={FiPhone} className="mr-2 h-5 w-5" /> Call Now (Beta – We are still working to improve quality)
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Contact;