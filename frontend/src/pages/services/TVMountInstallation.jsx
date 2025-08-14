import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SafeIcon from '../../common/SafeIcon';
import SEO from '../../components/SEO';
import * as FiIcons from 'react-icons/fi';

const { FiMonitor, FiTool, FiCheckCircle, FiCalendar, FiInfo, FiGrid, FiLayers } = FiIcons;

function TVMountInstallation() {
  const benefits = [
    'Create a sleek, professional look with no visible cords',
    'Free up floor space and reduce clutter',
    'Achieve optimal viewing angles for better enjoyment',
    'Secure installation prevents accidents and damage'
  ];

  const mountTypes = [
    {
      title: 'Fixed Mount',
      description: 'Securely holds your TV flat against the wall with minimal profile'
    },
    {
      title: 'Tilting Mount',
      description: 'Allows vertical angle adjustment to reduce glare and improve viewing'
    },
    {
      title: 'Full-Motion Mount',
      description: 'Complete flexibility with extension, tilt, and swivel for perfect positioning'
    },
    {
      title: 'Ceiling Mount',
      description: 'Ideal for corners or when wall mounting isn\'t possible'
    }
  ];

  const faqItems = [
    {
      question: 'Do I need to provide the TV mount?',
      answer: "You can either provide your own mount or we can recommend and supply an appropriate mount for your TV size and needs. If you'd like us to provide the mount, we'll discuss options and pricing during booking."
    },
    {
      question: 'Can you hide the wires in the wall?',
      answer: 'Yes, we offer in-wall wire concealment for a clean, professional look. This service includes cutting access holes, running cables through the wall, and installing a power bridge system if needed. Additional charges may apply for this service.'
    },
    {
      question: 'What types of walls can you mount on?',
      answer: 'We can mount TVs on drywall with wooden or metal studs, brick, stone, and concrete walls. Each surface requires different mounting hardware and techniques, which our technicians are experienced with.'
    },
    {
      question: 'How high should I mount my TV?',
      answer: "The ideal height depends on your viewing position and room layout. Generally, the center of the screen should be at eye level when seated. We'll discuss optimal positioning during installation."
    },
    {
      question: 'How long does installation take?',
      answer: 'A standard TV mounting takes approximately 1-2 hours, depending on the mount type and whether wire concealment is needed. Complex installations may take longer.'
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "TV Mount Installation",
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
    "description": "Professional TV mounting services in Charlotte, NC. We install fixed, tilting, and full-motion mounts on drywall, brick, and concrete walls with optional wire concealment."
  };

  return (
    <>
      <SEO
        title="TV Mount Installation in Charlotte, NC"
        description="Professional TV mounting services in Charlotte. We install fixed, tilting, and full-motion mounts on drywall, brick, and concrete walls with optional wire concealment."
        keywords="TV mounting Charlotte, TV wall mount installation, TV mount service, hide TV wires, flat screen mounting"
        schema={schema}
      />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              TV Mount Installation in Charlotte, NC
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Professional TV mounting services for a clean, sleek look with secure installation.
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
                Professional TV Mounting Services
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Our TV mount installation service provides a complete solution for securely mounting your television to the wall. Whether you're looking to mount a small TV in your bedroom or a large screen in your living room, our experienced technicians will ensure a clean, professional installation that enhances your viewing experience.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                We work with all types of mounts—fixed, tilting, and full-motion—and can install on virtually any wall surface including drywall, brick, stone, and concrete. We also offer professional wire concealment solutions to hide cables inside your wall for a clean, cord-free appearance.
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
                src="https://images.unsplash.com/photo-1593784991095-a205069470b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Modern living room with wall-mounted TV"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Benefits of Professional TV Mounting</h2>
            <p className="text-lg text-gray-600">Why mounting your TV is the smart choice</p>
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

      {/* Mount Types Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">TV Mount Types</h2>
            <p className="text-lg text-gray-600">We install all popular mount styles</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mountTypes.map((mount, index) => (
              <motion.div
                key={mount.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-lg p-6 shadow-md"
              >
                <div className="bg-bright-green p-3 rounded-lg w-fit mb-4">
                  <SafeIcon icon={FiMonitor} className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{mount.title}</h3>
                <p className="text-gray-600">{mount.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Wall Types Section */}
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
                src="https://images.unsplash.com/photo-1558888401-3cc1de77652d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Wall-mounted TV with hidden cables"
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
                We Mount on Any Wall Type
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <SafeIcon icon={FiGrid} className="h-6 w-6 text-bright-green mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Drywall with Wooden Studs</h3>
                    <p className="text-gray-600">The most common wall type, we use stud finders to locate secure mounting points</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <SafeIcon icon={FiGrid} className="h-6 w-6 text-bright-green mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Drywall with Metal Studs</h3>
                    <p className="text-gray-600">We use special anchors and techniques for secure mounting on metal studs</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <SafeIcon icon={FiGrid} className="h-6 w-6 text-bright-green mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Brick and Stone</h3>
                    <p className="text-gray-600">Specialized masonry bits and anchors for solid mounting on brick or stone surfaces</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <SafeIcon icon={FiGrid} className="h-6 w-6 text-bright-green mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Concrete</h3>
                    <p className="text-gray-600">Heavy-duty concrete anchors ensure your TV is securely mounted</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Wire Concealment */}
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
                Professional Wire Concealment
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Complete your TV installation with our professional wire concealment service. We hide power cords, HDMI cables, and other wires inside your wall for a clean, cord-free appearance that enhances your room's aesthetic.
              </p>
              <div className="space-y-4 mt-8">
                <div className="flex items-start space-x-3">
                  <SafeIcon icon={FiLayers} className="h-6 w-6 text-bright-green mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">In-Wall Cable Routing</h3>
                    <p className="text-gray-600">We carefully cut access holes and run cables through the wall cavity</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <SafeIcon icon={FiLayers} className="h-6 w-6 text-bright-green mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Power Bridge Installation</h3>
                    <p className="text-gray-600">Add power outlets behind your TV for a truly wireless look</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <SafeIcon icon={FiLayers} className="h-6 w-6 text-bright-green mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Cable Management Systems</h3>
                    <p className="text-gray-600">External solutions when in-wall concealment isn't possible</p>
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
                src="https://images.unsplash.com/photo-1603574670812-d24560880210?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="TV mounted with concealed wires"
                className="rounded-lg shadow-lg w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Recent Installations</h2>
            <p className="text-lg text-gray-600">Examples of our professional TV mounting work</p>
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
                src="https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Living room TV installation"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-white">
                <h3 className="font-medium text-gray-900">Living Room TV Mount</h3>
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
                src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Bedroom TV installation"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-white">
                <h3 className="font-medium text-gray-900">Bedroom TV with Full-Motion Mount</h3>
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
                src="https://images.unsplash.com/photo-1615876234886-fd9a39fda97f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Entertainment center TV installation"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-white">
                <h3 className="font-medium text-gray-900">Entertainment Center Installation</h3>
                <p className="text-sm text-gray-600">Mint Hill, NC</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Common questions about our TV mounting services</p>
          </motion.div>
          <div className="space-y-6">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-lg p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-start">
                  <SafeIcon icon={FiInfo} className="h-5 w-5 text-bright-green mt-1 mr-2 flex-shrink-0" />
                  {item.question}
                </h3>
                <p className="text-gray-700 ml-7">{item.answer}</p>
              </motion.div>
            ))}
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
              Ready for Your Professional TV Mount Installation?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Schedule your installation today for a clean, professional look
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
              "Need help mounting your TV? Book your same-day handyman now — online, by call, or by text."
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default TVMountInstallation;