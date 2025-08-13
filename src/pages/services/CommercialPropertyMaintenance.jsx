import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SafeIcon from '../../common/SafeIcon';
import SEO from '../../components/SEO';
import * as FiIcons from 'react-icons/fi';

const { FiSettings, FiTool, FiCheckCircle, FiCalendar, FiHome, FiRefreshCw, FiBriefcase } = FiIcons;

function CommercialPropertyMaintenance() {
  const benefits = [
    'Maintain professional appearance for customers and tenants',
    'Prevent costly emergency repairs with regular maintenance',
    'Single point of contact for all maintenance needs',
    'Customized maintenance schedules to fit your business needs'
  ];

  const services = [
    {
      title: 'General Repairs',
      description: 'Quick fixes for doors, windows, walls, floors, and other common issues'
    },
    {
      title: 'Preventative Maintenance',
      description: 'Regular inspections and upkeep to prevent costly problems'
    },
    {
      title: 'Exterior Maintenance',
      description: 'Pressure washing, minor repairs, and upkeep of building exteriors'
    },
    {
      title: 'Interior Updates',
      description: 'Paint touch-ups, fixture replacements, and aesthetic improvements'
    },
    {
      title: 'Tenant Improvements',
      description: 'Modifications and updates for new or existing tenants'
    },
    {
      title: 'Emergency Services',
      description: 'Fast response for urgent repairs to minimize business disruption'
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Commercial Property Maintenance",
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
    "description": "Professional commercial property maintenance services in Charlotte, NC. Comprehensive maintenance solutions for offices, retail spaces, and commercial buildings to maintain appearance and functionality."
  };

  return (
    <>
      <SEO
        title="Commercial Property Maintenance in Charlotte, NC"
        description="Professional commercial property maintenance in Charlotte. Comprehensive maintenance solutions for offices, retail spaces, and commercial buildings to maintain appearance and functionality."
        keywords="commercial property maintenance Charlotte, office maintenance, retail space repairs, commercial handyman, business maintenance services"
        schema={schema}
      />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-light-blue to-bright-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Commercial Property Maintenance in Charlotte, NC
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Comprehensive maintenance solutions to keep your business property looking professional and functioning properly.
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
                Professional Commercial Maintenance Services
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Our commercial property maintenance services help business owners and property managers keep their facilities in top condition. We handle everything from minor repairs to ongoing maintenance, ensuring your property maintains its professional appearance and functionality.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                With 15 years of experience serving Charlotte businesses, we understand the importance of quick response times and minimizing disruptions to your operations. Our team works efficiently to address maintenance issues while allowing your business to continue running smoothly.
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
                src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Commercial property maintenance services"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Benefits of Regular Maintenance</h2>
            <p className="text-lg text-gray-600">Why consistent property upkeep is essential for your business</p>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Commercial Maintenance Services</h2>
            <p className="text-lg text-gray-600">Comprehensive solutions for your business property</p>
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
                  {service.title.includes('Emergency') ? (
                    <SafeIcon icon={FiRefreshCw} className="h-6 w-6 text-white" />
                  ) : service.title.includes('Tenant') ? (
                    <SafeIcon icon={FiBriefcase} className="h-6 w-6 text-white" />
                  ) : (
                    <SafeIcon icon={FiSettings} className="h-6 w-6 text-white" />
                  )}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Maintenance Plans */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Maintenance Plans</h2>
            <p className="text-lg text-gray-600">Customized solutions for ongoing property upkeep</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-6 shadow-md"
            >
              <div className="text-center mb-4">
                <div className="bg-bright-green p-3 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                  <SafeIcon icon={FiSettings} className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mt-4">Basic Maintenance</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2">
                  <SafeIcon icon={FiCheckCircle} className="h-5 w-5 text-bright-green mt-0.5" />
                  <span className="text-gray-600">Quarterly property inspections</span>
                </li>
                <li className="flex items-start space-x-2">
                  <SafeIcon icon={FiCheckCircle} className="h-5 w-5 text-bright-green mt-0.5" />
                  <span className="text-gray-600">Minor repairs as needed</span>
                </li>
                <li className="flex items-start space-x-2">
                  <SafeIcon icon={FiCheckCircle} className="h-5 w-5 text-bright-green mt-0.5" />
                  <span className="text-gray-600">Annual deep cleaning</span>
                </li>
                <li className="flex items-start space-x-2">
                  <SafeIcon icon={FiCheckCircle} className="h-5 w-5 text-bright-green mt-0.5" />
                  <span className="text-gray-600">Priority scheduling</span>
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-6 shadow-md border-2 border-bright-green"
            >
              <div className="text-center mb-4">
                <div className="bg-bright-green p-3 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                  <SafeIcon icon={FiSettings} className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mt-4">Standard Maintenance</h3>
                <span className="bg-bright-green text-white text-xs font-bold px-3 py-1 rounded-full uppercase">Most Popular</span>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2">
                  <SafeIcon icon={FiCheckCircle} className="h-5 w-5 text-bright-green mt-0.5" />
                  <span className="text-gray-600">Monthly property inspections</span>
                </li>
                <li className="flex items-start space-x-2">
                  <SafeIcon icon={FiCheckCircle} className="h-5 w-5 text-bright-green mt-0.5" />
                  <span className="text-gray-600">Regular repairs and maintenance</span>
                </li>
                <li className="flex items-start space-x-2">
                  <SafeIcon icon={FiCheckCircle} className="h-5 w-5 text-bright-green mt-0.5" />
                  <span className="text-gray-600">Semi-annual deep cleaning</span>
                </li>
                <li className="flex items-start space-x-2">
                  <SafeIcon icon={FiCheckCircle} className="h-5 w-5 text-bright-green mt-0.5" />
                  <span className="text-gray-600">24-hour emergency response</span>
                </li>
                <li className="flex items-start space-x-2">
                  <SafeIcon icon={FiCheckCircle} className="h-5 w-5 text-bright-green mt-0.5" />
                  <span className="text-gray-600">Discounted service rates</span>
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-6 shadow-md"
            >
              <div className="text-center mb-4">
                <div className="bg-bright-green p-3 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                  <SafeIcon icon={FiSettings} className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mt-4">Premium Maintenance</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2">
                  <SafeIcon icon={FiCheckCircle} className="h-5 w-5 text-bright-green mt-0.5" />
                  <span className="text-gray-600">Weekly property inspections</span>
                </li>
                <li className="flex items-start space-x-2">
                  <SafeIcon icon={FiCheckCircle} className="h-5 w-5 text-bright-green mt-0.5" />
                  <span className="text-gray-600">Comprehensive maintenance coverage</span>
                </li>
                <li className="flex items-start space-x-2">
                  <SafeIcon icon={FiCheckCircle} className="h-5 w-5 text-bright-green mt-0.5" />
                  <span className="text-gray-600">Quarterly deep cleaning</span>
                </li>
                <li className="flex items-start space-x-2">
                  <SafeIcon icon={FiCheckCircle} className="h-5 w-5 text-bright-green mt-0.5" />
                  <span className="text-gray-600">1-hour emergency response</span>
                </li>
                <li className="flex items-start space-x-2">
                  <SafeIcon icon={FiCheckCircle} className="h-5 w-5 text-bright-green mt-0.5" />
                  <span className="text-gray-600">Dedicated maintenance manager</span>
                </li>
              </ul>
            </motion.div>
          </div>
          <div className="text-center mt-8">
            <p className="text-gray-600">
              Contact us for a customized maintenance plan tailored to your specific business needs
            </p>
          </div>
        </div>
      </section>

      {/* Client Types */}
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
                Who We Serve
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Our commercial property maintenance services are designed for a variety of business types and property managers in the Charlotte area:
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <SafeIcon icon={FiBriefcase} className="h-6 w-6 text-bright-green mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Office Buildings</h3>
                    <p className="text-gray-600">Maintaining professional environments for businesses</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <SafeIcon icon={FiBriefcase} className="h-6 w-6 text-bright-green mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Retail Spaces</h3>
                    <p className="text-gray-600">Keeping storefronts and shopping areas in top condition</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <SafeIcon icon={FiBriefcase} className="h-6 w-6 text-bright-green mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Medical Facilities</h3>
                    <p className="text-gray-600">Maintaining clean and functional healthcare environments</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <SafeIcon icon={FiBriefcase} className="h-6 w-6 text-bright-green mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Property Management Companies</h3>
                    <p className="text-gray-600">Supporting multiple properties with consistent maintenance</p>
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
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Various commercial properties we maintain"
                className="rounded-lg shadow-lg w-full"
              />
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
              Ready to Discuss Your Commercial Maintenance Needs?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Contact us today for a consultation and customized maintenance plan
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
              "Need help with commercial property maintenance? Book your same-day handyman now — online, by call, or by text."
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default CommercialPropertyMaintenance;