import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SafeIcon from '../../common/SafeIcon';
import SEO from '../../components/SEO';
import * as FiIcons from 'react-icons/fi';

const { FiTool, FiCheckCircle, FiCalendar, FiHome, FiShield, FiRefreshCw, FiAlertTriangle } = FiIcons;

function DryerVentCleaning() {
  const benefits = [
    'Reduces fire hazards by removing flammable lint buildup',
    'Improves dryer efficiency and reduces energy costs',
    'Extends the life of your dryer by reducing strain',
    'Decreases drying times for clothes and linens'
  ];

  const services = [
    {
      title: 'Standard Dryer Vent Cleaning',
      description: 'Complete cleaning of your dryer vent from the dryer to the exterior vent'
    },
    {
      title: 'Vent Inspection',
      description: 'Thorough inspection to identify blockages, damage, or improper installations'
    },
    {
      title: 'Vent Repair',
      description: 'Fix damaged or disconnected vent sections to restore proper airflow'
    },
    {
      title: 'Vent Rerouting',
      description: 'Optimize dryer vent path for improved efficiency and safety'
    }
  ];

  const warningSignsNeeded = [
    'Clothes taking longer than normal to dry',
    'Dryer or laundry room becoming unusually hot during operation',
    'Burning smell when the dryer is running',
    'Visible lint accumulation around the dryer vent opening',
    "No lint on the lint screen (indicating it's being trapped in the vent)",
    "It's been over a year since your last dryer vent cleaning"
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Dryer Vent Cleaning",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Handyman of South Charlotte"
    },
    "areaServed": [
      "Charlotte, NC",
      "Ballantyne, NC",
      "Mint Hill, NC",
      "Pineville, NC",
      "Matthews, NC"
    ],
    "description": "Professional dryer vent cleaning services in Charlotte, NC. Reduce fire hazards, improve dryer efficiency, and extend the life of your appliance with our thorough dryer vent cleaning service."
  };

  return (
    <>
      <SEO
        title="Dryer Vent Cleaning in Charlotte, NC"
        description="Professional dryer vent cleaning in Charlotte. Reduce fire hazards, improve dryer efficiency, and extend the life of your appliance with our thorough dryer vent cleaning service."
        keywords="dryer vent cleaning Charlotte, dryer vent cleaning service, dryer fire prevention, improve dryer efficiency, lint removal, dryer vent safety"
        schema={schema}
      />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-bright-green to-light-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Dryer Vent Cleaning in Charlotte, NC
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Protect your home and improve dryer efficiency with professional vent cleaning.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Professional Dryer Vent Cleaning Service
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Our dryer vent cleaning service removes dangerous lint buildup from your entire vent system, from the dryer connection to the exterior vent. This essential maintenance not only reduces fire hazards but also improves your dryer's efficiency, saving you money on energy bills and extending the life of your appliance.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                According to the U.S. Fire Administration, thousands of house fires each year are caused by clogged dryer vents. Our thorough cleaning process uses professional-grade equipment to remove all lint, debris, and potential blockages, ensuring your dryer operates safely and efficiently.
              </p>
              <Link
                to="/contact"
                className="bg-bright-green text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-600 transition-colors inline-flex items-center"
              >
                <SafeIcon icon={FiCalendar} className="mr-2 h-5 w-5" /> Schedule Service
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1626806787461-102c1a7f1c62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Professional dryer vent cleaning service"
                className="rounded-lg shadow-lg w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Benefits of Regular Dryer Vent Cleaning</h2>
            <p className="text-lg text-gray-600">Why this simple maintenance is essential for your home</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-3"
              >
                <SafeIcon icon={FiCheckCircle} className="h-6 w-6 text-bright-green mt-1" />
                <p className="text-lg text-gray-700">{benefit}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Dryer Vent Services</h2>
            <p className="text-lg text-gray-600">Comprehensive solutions for dryer vent maintenance</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-lg p-6 shadow-md"
              >
                <div className="bg-bright-green p-3 rounded-lg w-fit mb-4">
                  <SafeIcon icon={service.title.includes('Repair') ? FiTool : FiRefreshCw} className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Warning Signs Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Warning Signs You Need Dryer Vent Cleaning
              </h2>
              <div className="space-y-4">
                {warningSignsNeeded.map((sign, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <SafeIcon icon={FiAlertTriangle} className="h-6 w-6 text-bright-green mt-1" />
                    <p className="text-lg text-gray-700">{sign}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <SafeIcon icon={FiAlertTriangle} className="h-5 w-5 text-yellow-400" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-yellow-700">
                      The National Fire Protection Association recommends having your dryer vents inspected and cleaned at least once per year.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1623050804066-42bcedb4e81d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Dryer vent with lint buildup"
                className="rounded-lg shadow-lg w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cleaning Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Cleaning Process</h2>
            <p className="text-lg text-gray-600">Thorough, professional dryer vent cleaning</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-bright-green text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Inspection</h3>
              <p className="text-gray-600">We examine your dryer vent system to assess the level of buildup and identify any issues</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-bright-green text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Disconnect & Prepare</h3>
              <p className="text-gray-600">We safely disconnect the dryer and prepare the work area for cleaning</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-bright-green text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Clean & Remove Lint</h3>
              <p className="text-gray-600">Using specialized equipment, we remove all lint and debris from the entire vent system</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-bright-green text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Final Testing</h3>
              <p className="text-gray-600">We reconnect the dryer, test the system, and ensure proper airflow</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Safety Facts */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Dryer Vent Safety Facts</h2>
            <p className="text-lg text-gray-600">Why regular maintenance is crucial</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-6 shadow-md"
            >
              <div className="flex items-start space-x-3">
                <SafeIcon icon={FiShield} className="h-6 w-6 text-bright-green mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Fire Prevention</h3>
                  <p className="text-gray-600">The U.S. Fire Administration reports that 2,900 home clothes dryer fires are reported each year, causing an estimated 5 deaths, 100 injuries, and $35 million in property loss.</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-6 shadow-md"
            >
              <div className="flex items-start space-x-3">
                <SafeIcon icon={FiHome} className="h-6 w-6 text-bright-green mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Energy Efficiency</h3>
                  <p className="text-gray-600">A clogged dryer vent can increase energy consumption by up to 30%. Regular cleaning helps your dryer operate efficiently and reduces utility bills.</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-6 shadow-md"
            >
              <div className="flex items-start space-x-3">
                <SafeIcon icon={FiAlertTriangle} className="h-6 w-6 text-bright-green mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Leading Cause</h3>
                  <p className="text-gray-600">The leading cause of dryer fires is failure to clean them. Lint buildup restricts airflow, causing excessive heat that can ignite the highly flammable lint.</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-6 shadow-md"
            >
              <div className="flex items-start space-x-3">
                <SafeIcon icon={FiRefreshCw} className="h-6 w-6 text-bright-green mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Appliance Longevity</h3>
                  <p className="text-gray-600">Regular vent cleaning can extend the life of your dryer by reducing strain on components and preventing overheating issues.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-bright-green">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Improve Your Dryer's Safety and Efficiency?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Schedule your professional dryer vent cleaning today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-bright-green px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-colors inline-flex items-center justify-center"
              >
                <SafeIcon icon={FiCalendar} className="mr-2 h-5 w-5" /> Contact Us
              </Link>
              <a
                href="tel:+19803167792"
                className="bg-ai-purple text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-600 transition-colors inline-flex items-center justify-center"
              >
                <SafeIcon icon={FiTool} className="mr-2 h-5 w-5" /> Call Now (Beta – We are still working to improve quality)
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quote Block */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="border-l-4 border-bright-green pl-6 py-2">
            <p className="text-lg text-gray-700">
              "Need help with dryer vent cleaning? Book your same-day handyman now — online, by call, or by text."
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default DryerVentCleaning;