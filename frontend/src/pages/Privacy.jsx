import React from 'react';
import SEO from '../components/SEO';

export default function Privacy() {
  return (
    <div className="py-12 px-4">
      <SEO title="Privacy Policy - Handyman of South Charlotte" description="Privacy policy for service-related communications and data protection." />
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow p-8 text-gray-800">
        <h1 className="text-3xl font-bold mb-6">Privacy policy</h1>

        <p className="mb-6 leading-relaxed">
          At Handyman of south Charlotte, we are committed to protecting your privacy and ensuring the security of your personal information.
          This policy outlines how we collect, use, and safeguard your data when you use our website.
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Customer data we collect</h2>
          <p className="mb-3">We may collect the following types of information:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <span className="font-medium">Contact details:</span> Name, phone number, email address, service address.
            </li>
            <li>
              <span className="font-medium">Service-related communications:</span> SMS messages exchanged between you and Handyman of South Charlotte, including appointment confirmations, reminders, and updates.
            </li>
            <li>
              <span className="font-medium">Website usage data:</span> IP address, browser type, and browsing activity on our website.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">How we use your data</h2>
          <p className="mb-3">We use your information solely to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Confirm, schedule, and update your service appointments.</li>
            <li>Request additional information (such as photos) to prepare for your service.</li>
            <li>Respond to inquiries and provide customer support.</li>
            <li>Improve our website and service offerings.</li>
          </ul>
          <p className="mt-3">We do not sell or share your personal information with third parties except as required by law.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Protecting your privacy</h2>
          <p className="leading-relaxed">
            We implement robust security measures to protect the privacy of your data. This includes encryption, secure servers, and regular
            security audits. Our commitment is to safeguard your personal information from unauthorized access, use, or disclosure,
            ensuring a safe and secure experience with Handyman of south Charlotte.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">SMS Notifications</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>By providing your phone number, you consent to receive SMS messages for service-related purposes only.</li>
            <li>You can opt out at any time by replying STOP to any message.</li>
            <li>To get help, reply HELP or contact us directly.</li>
            <li>Standard message and data rates may apply.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Data Retention</h2>
          <p>We retain your personal data only as long as necessary to fulfill the purposes described above or as required by law.</p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-3">Your Rights</h2>
          <p>You may request to access, update, or delete your personal information by contacting us using the details below.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Contact us</h2>
          <p>
            For any questions or concerns regarding your privacy, please don't hesitate to reach out. We're here to ensure your data is
            protected and that you have a clear understanding of our privacy practices.
          </p>
        </section>
      </div>
    </div>
  );
}


