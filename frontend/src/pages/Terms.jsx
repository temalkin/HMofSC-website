import React from 'react';
import SEO from '../components/SEO';

export default function Terms() {
  return (
    <div className="py-12 px-4">
      <SEO title="Terms & Conditions - Handyman of South Charlotte" description="Terms & Conditions for SMS notifications and service-related messaging." />
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow p-8 text-gray-800">
        <h1 className="text-3xl font-bold mb-6">Terms &amp; Conditions – SMS Notifications</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">1. Service Description</h2>
          <p className="leading-relaxed">
            By providing your mobile number to Handyman of South Charlotte, you agree to receive service-related SMS notifications only,
            including appointment confirmations, reminders, updates about scheduled visits, and requests for additional information or photos
            to assist with service preparation. We do not send marketing or promotional messages.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">2. Message Frequency</h2>
          <p>Message frequency varies by service activity. Typically, 1–3 messages per appointment.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">3. Message &amp; Data Rates</h2>
          <p>Message and data rates may apply according to your carrier plan. We are not responsible for carrier charges.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">4. Opt-In Consent</h2>
          <p>By requesting service and providing your mobile number, you consent to receive service-related SMS notifications.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">5. Opt-Out Instructions</h2>
          <p>Reply “STOP” to any message to unsubscribe. You will receive confirmation. You can re-subscribe later.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">6. Help Instructions</h2>
          <p>
            For help, reply “HELP” or contact us: Phone: (980) 316-7792 • Email: info@handymanofsouthcharlotte.com
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">7. Privacy</h2>
          <p>
            We respect your privacy. Your phone number and message content are used solely for service updates and are not shared with third
            parties except as required by law. See our <a href="#/privacy" className="text-blue-600 hover:underline">Privacy Policy</a>.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">8. Supported Carriers</h2>
          <p>Delivery is supported by major U.S. carriers (AT&amp;T, Verizon, T‑Mobile, etc.). Availability may vary by network.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">9. Limitation of Liability</h2>
          <p>
            We are not responsible for delayed or undelivered messages due to carrier issues, network problems, or factors beyond our
            control.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">10. Service Availability</h2>
          <p>Our SMS notification service is intended for customers located in the United States.</p>
        </section>
      </div>
    </div>
  );
}


