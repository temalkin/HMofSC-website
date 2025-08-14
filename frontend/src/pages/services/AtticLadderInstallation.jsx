import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SafeIcon from '../../common/SafeIcon';
import SEO from '../../components/SEO';
import * as FiIcons from 'react-icons/fi';

const { FiTool, FiCheckCircle, FiCalendar, FiHome, FiShield, FiArrowUp } = FiIcons;

function AtticLadderInstallation() {
  const benefits = [
    'Safe and easy access to your attic space',
    'Professional installation with proper support and anchoring',
    'Various ladder options to fit your space and needs',
    'Improved home functionality and storage access'
  ];

  const services = [
    {
      title: 'New Attic Ladder Installation',
      description: 'Complete installation of new attic ladders with proper framing and support'
    },
    {
      title: 'Attic Ladder Replacement',
      description: 'Removal of old ladders and installation of new, safer models'
    },
    {
      title: 'Attic Ladder Repair',
      description: 'Fix broken springs, hinges, and other components to restore function'
    },
    {
      title: 'Attic Ladder Maintenance',
      description: 'Lubrication, adjustment, and inspection of existing attic ladders'
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Attic Ladder Installation",
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
    "description": "Professional attic ladder installation in Charlotte, NC. Expert installation of pull-down attic stairs with proper support and anchoring for safe access to your attic space."
  };

  return (
    <>
      <SEO
        title="Attic Ladder Installation in Charlotte, NC"
        description="Professional attic ladder installation in Charlotte. Expert installation of pull-down attic stairs with proper support and anchoring for safe access to your attic space."
        keywords="attic ladder installation Charlotte, attic stairs installation, pull-down attic ladder, attic access Charlotte, handyman attic ladder, attic ladder repair"
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
              Attic Ladder Installation in Charlotte, NC
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Safe and reliable attic access with professionally installed pull-down ladders and stairs.
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
                Professional Attic Ladder Installation
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Our attic ladder installation service provides safe and convenient access to your attic space. Whether you need a new ladder installed or an old one replaced, our experienced team will ensure your attic ladder is properly supported and securely anchored.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                We work with various types of attic ladders including wooden, aluminum, and telescoping models to find the perfect solution for your home. Our professional installation ensures smooth operation and reliable access to your attic for storage, HVAC maintenance, or other needs.
              </p>
              <Link
                to="/contact"
                className="bg-bright-green text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-600 transition-colors inline-flex items-center"
              >
                <SafeIcon icon={FiCalendar} className="mr-2 h-5 w-5" /> Schedule Installation
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Professional attic ladder installation"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Benefits of Professional Installation</h2>
            <p className="text-lg text-gray-600">Why choose our attic ladder installation service</p>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Attic Access Services</h2>
            <p className="text-lg text-gray-600">Complete solutions for attic accessibility</p>
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
                  <SafeIcon icon={FiArrowUp} className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Attic ladder installation process"
                className="rounded-lg shadow-lg w-full"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Installation Process
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-bright-green text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Assessment</h3>
                    <p className="text-gray-600">We evaluate your ceiling structure and determine the best location and ladder type for your needs</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-bright-green text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Framing</h3>
                    <p className="text-gray-600">We properly frame the opening to ensure structural integrity and support</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-bright-green text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Installation</h3>
                    <p className="text-gray-600">We securely install the ladder with proper anchoring and hardware</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-bright-green text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Testing & Adjustment</h3>
                    <p className="text-gray-600">We test the ladder operation and make final adjustments for smooth function</p>
                  </div>
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
              Need an Attic Ladder Installed?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Schedule your professional attic ladder installation today
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
              "Need help with attic ladder installation? Book your same-day handyman now — online, by call, or by text."
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default AtticLadderInstallation;