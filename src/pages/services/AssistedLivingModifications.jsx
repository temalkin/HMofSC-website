import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SafeIcon from '../../common/SafeIcon';
import SEO from '../../components/SEO';
import * as FiIcons from 'react-icons/fi';

const { FiHome, FiTool, FiCheckCircle, FiShield, FiCalendar, FiHeart, FiMonitor } = FiIcons;

function AssistedLivingModifications() {
  const benefits = [
    'Improved safety and accessibility for seniors and those with mobility challenges',
    'Custom solutions tailored to specific needs and home layout',
    'Professional installation with proper anchoring and support',
    'Enhanced independence and quality of life'
  ];

  const services = [
    {
      title: 'TV Mount Installation',
      description: 'Securely mounted TVs with proper anchoring and cable management for clean appearance and accessibility'
    },
    {
      title: 'Ramp Installation',
      description: 'Custom-built wheelchair and walker ramps for safe and easy home access'
    },
    {
      title: 'Doorway Widening',
      description: 'Widening doorways to accommodate wheelchairs and walkers'
    },
    {
      title: 'Zero-Step Entries',
      description: 'Creating threshold-free entrances for improved accessibility'
    },
    {
      title: 'Bathroom Modifications',
      description: 'Walk-in showers, shower seats, raised toilets, and other bathroom safety improvements'
    },
    {
      title: 'Stairlifts & Railings',
      description: 'Secure handrail installation and stairlift preparation'
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Assisted Living Modifications",
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
    "description": "Professional assisted living modifications in Charlotte, NC. Expert installation of TV mounts, ramps, and home safety features to help seniors age in place safely and comfortably."
  };

  return (
    <>
      <SEO
        title="Assisted Living Modifications in Charlotte, NC - Aging in Place"
        description="Professional assisted living modifications in Charlotte. Expert installation of TV mounts, ramps, and home safety features to help seniors age in place safely and comfortably."
        keywords="assisted living modifications Charlotte, aging in place, TV mount installation, wheelchair ramp installation, bathroom safety, senior home modifications"
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
              Assisted Living Modifications in Charlotte, NC
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Helping seniors and those with mobility challenges live safely and independently at home with professional accessibility modifications.
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
                Safety Modifications for Aging in Place
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Our assisted living modification services help seniors and those with mobility challenges continue living safely and independently in their own homes. We provide professional installation of TV mounts, ramps, and other accessibility features tailored to your specific needs.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Each modification is expertly installed with proper anchoring and support to ensure safety and stability. Our experienced team understands the unique needs of seniors and will work with you to create custom solutions that enhance both safety and quality of life.
              </p>
              <Link
                to="/contact"
                className="bg-bright-green text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-600 transition-colors inline-flex items-center"
              >
                <SafeIcon icon={FiCalendar} className="mr-2 h-5 w-5" /> Schedule Consultation
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1586105251261-72a756497a11?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Senior-friendly bathroom with accessibility features"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Benefits of Our Modifications</h2>
            <p className="text-lg text-gray-600">Enhancing safety and independence at home</p>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Modification Services</h2>
            <p className="text-lg text-gray-600">Comprehensive solutions for aging in place</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  {service.title === 'TV Mount Installation' ? (
                    <SafeIcon icon={FiMonitor} className="h-6 w-6 text-white" />
                  ) : (
                    <SafeIcon icon={FiShield} className="h-6 w-6 text-white" />
                  )}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Story */}
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
                src="https://images.unsplash.com/photo-1581579438747-104c53d755df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Senior couple enjoying their home safely"
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
                Making a Difference for Families
              </h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  "After my father's fall, we were concerned about his safety at home. The team at Handyman of South Charlotte installed a TV mount at the perfect viewing height and a ramp at the front entrance. These modifications have allowed him to maintain his independence while giving our family peace of mind."
                </p>
                <p className="font-semibold">— Jennifer M., Charlotte</p>
              </div>
              <div className="mt-8 flex items-center space-x-3">
                <SafeIcon icon={FiHeart} className="h-8 w-8 text-bright-green" />
                <p className="text-lg font-medium text-gray-900">Supporting independence with care</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Consultation Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-lg text-gray-600">How we create safer living spaces</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Consultation</h3>
              <p className="text-gray-600">We assess your specific needs and home layout to identify the most beneficial modifications</p>
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
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Custom Plan</h3>
              <p className="text-gray-600">We develop a personalized modification plan with clear pricing and timeline</p>
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
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Installation</h3>
              <p className="text-gray-600">Our experienced team installs all modifications with proper support and anchoring</p>
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
              Ready to Make Your Home Safer?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Contact us today for a consultation on assisted living modifications
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
    </>
  );
}

export default AssistedLivingModifications;