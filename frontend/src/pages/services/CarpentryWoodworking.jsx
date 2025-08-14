import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SafeIcon from '../../common/SafeIcon';
import SEO from '../../components/SEO';
import * as FiIcons from 'react-icons/fi';

const { FiTool, FiCheckCircle, FiCalendar, FiHome, FiGrid, FiPackage } = FiIcons;

function CarpentryWoodworking() {
  const benefits = [
    'Custom solutions tailored to your specific needs and space',
    'Quality craftsmanship with attention to detail',
    'Experienced carpenter with 15 years of expertise',
    'Durable results built to last'
  ];

  const services = [
    {
      title: 'Custom Shelving',
      description: 'Built-in shelves, floating shelves, and custom storage solutions'
    },
    {
      title: 'Trim & Molding',
      description: 'Crown molding, baseboards, wainscoting, and decorative trim work'
    },
    {
      title: 'Built-In Cabinets',
      description: 'Custom cabinets, entertainment centers, and storage units'
    },
    {
      title: 'Wood Repairs',
      description: 'Fixing damaged wood elements, stairs, railings, and structural components'
    },
    {
      title: 'Furniture Building',
      description: 'Custom tables, benches, bookcases, and other wooden furniture'
    },
    {
      title: 'Deck & Porch Repairs',
      description: 'Repairing damaged deck boards, railings, and stairs'
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Carpentry & Woodworking",
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
    "description": "Professional carpentry and woodworking services in Charlotte, NC. Custom shelving, trim work, built-ins, wood repairs, and more with quality craftsmanship and attention to detail."
  };

  return (
    <>
      <SEO
        title="Carpentry & Woodworking in Charlotte, NC"
        description="Professional carpentry and woodworking services in Charlotte. Custom shelving, trim work, built-ins, wood repairs, and more with quality craftsmanship and attention to detail."
        keywords="carpentry Charlotte, woodworking services, custom shelving, trim carpenter, built-in cabinets, wood repairs, furniture building"
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
              Carpentry & Woodworking in Charlotte, NC
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Expert carpentry services with attention to detail for all your custom woodworking needs.
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
                Quality Carpentry & Woodworking Services
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Our carpentry and woodworking services provide custom solutions that enhance your home's functionality and aesthetic appeal. Whether you need built-in shelving, custom trim work, or furniture repairs, our skilled carpenter brings 15 years of experience to every project.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                We take pride in our attention to detail and craftsmanship, ensuring that each piece is built to last and perfectly matches your vision. From small repairs to complete custom projects, we handle all aspects of woodworking with precision and care.
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
                src="https://images.unsplash.com/photo-1533090161767-e6ffed986c88?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Custom carpentry and woodworking"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Benefits of Professional Carpentry</h2>
            <p className="text-lg text-gray-600">Why choose our woodworking services</p>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Carpentry Services</h2>
            <p className="text-lg text-gray-600">Comprehensive woodworking solutions for your home</p>
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
                  {service.title.includes('Shelving') ? (
                    <SafeIcon icon={FiGrid} className="h-6 w-6 text-white" />
                  ) : service.title.includes('Furniture') ? (
                    <SafeIcon icon={FiPackage} className="h-6 w-6 text-white" />
                  ) : (
                    <SafeIcon icon={FiTool} className="h-6 w-6 text-white" />
                  )}
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.unsplash.com/photo-1601761186644-373dca472933?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Custom built-in shelving"
                  className="rounded-lg shadow-md w-full h-48 object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Trim carpentry work"
                  className="rounded-lg shadow-md w-full h-48 object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Custom cabinet installation"
                  className="rounded-lg shadow-md w-full h-48 object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1581428982868-e410dd047a90?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Custom woodworking project"
                  className="rounded-lg shadow-md w-full h-48 object-cover"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Woodworking Portfolio
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Take a look at some of our recent carpentry and woodworking projects. Each piece is crafted with attention to detail and tailored to our clients' specific needs and preferences.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                From built-in bookshelves that maximize space to custom trim work that adds character to a room, our carpentry services enhance your home's functionality and aesthetic appeal.
              </p>
              <Link
                to="/gallery"
                className="text-bright-green font-semibold hover:underline inline-flex items-center"
              >
                View more in our gallery <SafeIcon icon={FiTool} className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Carpentry Process</h2>
            <p className="text-lg text-gray-600">How we bring your woodworking projects to life</p>
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
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Consultation</h3>
              <p className="text-gray-600">We discuss your vision, needs, and measure the space</p>
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
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Design</h3>
              <p className="text-gray-600">We create a detailed plan with material selections</p>
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
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Crafting</h3>
              <p className="text-gray-600">We build your custom piece with precision and care</p>
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
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Installation</h3>
              <p className="text-gray-600">We install your finished piece with perfect fit and finish</p>
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
              Ready for Your Custom Carpentry Project?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Contact us today to discuss your woodworking needs and get a free estimate
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
              "Need help with carpentry & woodworking? Book your same-day handyman now — online, by call, or by text."
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default CarpentryWoodworking;