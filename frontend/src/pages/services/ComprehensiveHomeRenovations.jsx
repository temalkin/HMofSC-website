import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SafeIcon from '../../common/SafeIcon';
import SEO from '../../components/SEO';
import * as FiIcons from 'react-icons/fi';

const { FiHome, FiTool, FiCheckCircle, FiCalendar, FiShield, FiLayers, FiAward } = FiIcons;

function ComprehensiveHomeRenovations() {
  const benefits = [
    'Increased home value and market appeal',
    'Improved functionality and space utilization',
    'Updated aesthetics and modern features',
    'Energy efficiency improvements'
  ];

  const services = [
    {
      title: 'Kitchen Renovations',
      description: 'Complete kitchen remodels with custom cabinets, countertops, and modern appliances'
    },
    {
      title: 'Bathroom Transformations',
      description: 'Full bathroom renovations with updated fixtures, tiling, and custom features'
    },
    {
      title: 'Basement Finishing',
      description: 'Transform unfinished basements into functional living spaces'
    },
    {
      title: 'Room Additions',
      description: 'Expand your living space with expertly constructed room additions'
    },
    {
      title: 'Interior Reconfigurations',
      description: 'Modify floor plans and remove walls to create open, flowing spaces'
    },
    {
      title: 'Exterior Updates',
      description: 'Enhance curb appeal with siding, trim, and entryway renovations'
    }
  ];

  const renovationProcess = [
    {
      title: 'Initial Consultation',
      description: 'We discuss your vision, needs, budget, and timeline to understand your renovation goals'
    },
    {
      title: 'Design & Planning',
      description: 'Professional planning with detailed designs, material selections, and project specifications'
    },
    {
      title: 'Construction',
      description: 'Expert execution with quality craftsmanship and attention to detail at every stage'
    },
    {
      title: 'Final Inspection',
      description: 'Thorough review ensuring all work meets our high standards and your expectations'
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Comprehensive Home Renovations",
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
    "description": "Professional home renovation services in Charlotte, NC. From kitchen and bathroom remodels to room additions and basement finishing, we transform your home with quality craftsmanship."
  };

  return (
    <>
      <SEO
        title="Comprehensive Home Renovations in Charlotte, NC"
        description="Professional home renovations in Charlotte. From kitchen and bathroom remodels to room additions and basement finishing, we transform your home with quality craftsmanship."
        keywords="home renovation Charlotte, kitchen remodeling, bathroom renovation, room additions, basement finishing, home remodel contractor"
        schema={schema}
      />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-bright-brown to-bright-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Comprehensive Home Renovations in Charlotte, NC
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Transform your living space with professional renovation services that blend functionality with style.
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
                Transform Your Home With Expert Renovations
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Our comprehensive home renovation services provide complete solutions for transforming your living spaces. Whether you're looking to update a single room or renovate your entire home, our experienced team will guide you through the entire process from initial design to final completion.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                With 15 years of experience in home renovations, we understand how to balance aesthetics with functionality, creating spaces that not only look beautiful but also enhance your daily living. Our attention to detail and commitment to quality ensure your renovation will stand the test of time.
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
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Modern renovated living room with open concept design"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Benefits of Home Renovation</h2>
            <p className="text-lg text-gray-600">Why investing in your home makes sense</p>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Renovation Services</h2>
            <p className="text-lg text-gray-600">Comprehensive solutions for your home transformation</p>
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
                  <SafeIcon icon={service.title.includes('Kitchen') ? FiHome : service.title.includes('Exterior') ? FiShield : FiLayers} className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Showcase */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Recent Renovation Projects</h2>
            <p className="text-lg text-gray-600">See the quality of our renovation work</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-lg shadow-md"
            >
              <img
                src="https://images.unsplash.com/photo-1556912173-3bb406ef7e77?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Modern kitchen renovation"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-white">
                <h3 className="font-medium text-gray-900">Kitchen Transformation</h3>
                <p className="text-sm text-gray-600">Ballantyne, Charlotte</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-lg shadow-md"
            >
              <img
                src="https://images.unsplash.com/photo-1576941089067-2de3c901e126?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Bathroom renovation"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-white">
                <h3 className="font-medium text-gray-900">Master Bath Renovation</h3>
                <p className="text-sm text-gray-600">Matthews, NC</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-lg shadow-md"
            >
              <img
                src="https://images.unsplash.com/photo-1565183928294-7063f23ce0f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Finished basement renovation"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-white">
                <h3 className="font-medium text-gray-900">Basement Finishing</h3>
                <p className="text-sm text-gray-600">Mint Hill, NC</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Renovation Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Renovation Process</h2>
            <p className="text-lg text-gray-600">How we bring your vision to life</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {renovationProcess.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-bright-green text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quality Commitment */}
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
                src="https://images.unsplash.com/photo-1615529182904-14819c35db37?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Quality renovation craftsmanship"
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
                Our Commitment to Quality
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <SafeIcon icon={FiAward} className="h-6 w-6 text-bright-green mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Premium Materials</h3>
                    <p className="text-gray-600">We use only high-quality materials that ensure durability and longevity</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <SafeIcon icon={FiTool} className="h-6 w-6 text-bright-green mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Expert Craftsmanship</h3>
                    <p className="text-gray-600">Our skilled professionals have years of experience in home renovations</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <SafeIcon icon={FiShield} className="h-6 w-6 text-bright-green mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Quality Assurance</h3>
                    <p className="text-gray-600">Multiple inspections throughout the project to ensure everything meets our standards</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <SafeIcon icon={FiHome} className="h-6 w-6 text-bright-green mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Owner Supervision</h3>
                    <p className="text-gray-600">Owner-led projects with personal attention to every detail</p>
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
              Ready to Transform Your Home?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Contact us today to schedule a consultation for your renovation project
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
              "Need help with home renovations? Book your same-day handyman now — online, by call, or by text."
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default ComprehensiveHomeRenovations;