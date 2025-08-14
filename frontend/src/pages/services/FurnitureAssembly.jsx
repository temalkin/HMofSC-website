import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SafeIcon from '../../common/SafeIcon';
import SEO from '../../components/SEO';
import * as FiIcons from 'react-icons/fi';

const { FiPackage, FiTool, FiCheckCircle, FiClock, FiCalendar } = FiIcons;

function FurnitureAssembly() {
  const benefits = [
    'Professional assembly of all furniture types',
    'Proper tools and expertise for safe assembly',
    'Time-saving service - no frustration',
    'Cleanup and packaging disposal included'
  ];

  const process = [
    {
      step: 1,
      title: 'Schedule Service',
      description: 'Book online or call our AI assistant 24/7 (Beta – We are still working to improve quality)'
    },
    {
      step: 2,
      title: 'Professional Assembly',
      description: 'We bring all tools and assemble your furniture correctly'
    },
    {
      step: 3,
      title: 'Quality Check',
      description: 'We ensure everything is stable and properly assembled'
    },
    {
      step: 4,
      title: 'Cleanup',
      description: 'We clean up all packaging and debris'
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Furniture Assembly",
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
    "description": "Professional furniture assembly services in Charlotte, NC. Expert assembly of all furniture types with proper tools and cleanup included."
  };

  return (
    <>
      <SEO
        title="Furniture Assembly in Charlotte, NC - Professional Service"
        description="Professional furniture assembly in Charlotte, Ballantyne, Mint Hill, Pineville, Matthews. Expert assembly with proper tools, cleanup included. Book online 24/7."
        keywords="furniture assembly Charlotte, furniture assembly near me, professional furniture assembly, IKEA assembly, bedroom furniture assembly, Charlotte handyman"
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
              Furniture Assembly in Charlotte, NC
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Professional furniture assembly service with proper tools and expertise. No more frustration - we handle it all from start to finish.
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
                Professional Furniture Assembly Service
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Skip the frustration and let our experienced professionals handle your furniture assembly. We have the right tools, expertise, and patience to get your furniture assembled correctly the first time.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                From simple IKEA pieces to complex bedroom sets, entertainment centers, and office furniture, we handle all types of furniture assembly with precision and care.
              </p>
              <Link
                to="/contact"
                className="bg-bright-green text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-600 transition-colors inline-flex items-center"
              >
                <SafeIcon icon={FiCalendar} className="mr-2 h-5 w-5" /> Schedule Assembly
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Professional furniture assembly service"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Assembly Service?</h2>
            <p className="text-lg text-gray-600">Professional results without the hassle</p>
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

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Assembly Process</h2>
            <p className="text-lg text-gray-600">Simple, efficient, and professional</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-bright-green text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Furniture Types */}
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
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Various furniture types for assembly"
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
                We Assemble All Types of Furniture
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <SafeIcon icon={FiPackage} className="h-6 w-6 text-bright-green mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Bedroom Furniture</h3>
                    <p className="text-gray-600">Beds, dressers, nightstands, wardrobes</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <SafeIcon icon={FiPackage} className="h-6 w-6 text-bright-green mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Living Room</h3>
                    <p className="text-gray-600">Entertainment centers, bookcases, coffee tables</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <SafeIcon icon={FiPackage} className="h-6 w-6 text-bright-green mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Office Furniture</h3>
                    <p className="text-gray-600">Desks, chairs, filing cabinets, shelving</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <SafeIcon icon={FiPackage} className="h-6 w-6 text-bright-green mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Dining Room</h3>
                    <p className="text-gray-600">Tables, chairs, cabinets, bar stools</p>
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
              Ready to Skip the Frustration?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let our professionals handle your furniture assembly quickly and correctly
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

export default FurnitureAssembly;