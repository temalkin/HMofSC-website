import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SafeIcon from '../../common/SafeIcon';
import SEO from '../../components/SEO';
import * as FiIcons from 'react-icons/fi';

const { FiTool, FiCheckCircle, FiCalendar, FiHome, FiGrid, FiLayers } = FiIcons;

function CountertopInstallation() {
  const benefits = [
    'Transform the look of your kitchen or bathroom',
    'Increase your home\'s value and appeal',
    'Improve functionality with durable, stain-resistant surfaces',
    'Professional installation ensures proper fit and finish'
  ];

  const services = [
    {
      title: 'Granite Countertops',
      description: 'Natural stone countertops with unique patterns and exceptional durability'
    },
    {
      title: 'Quartz Surfaces',
      description: 'Engineered stone with consistent patterns and excellent stain resistance'
    },
    {
      title: 'Solid Surface',
      description: 'Seamless, non-porous surfaces that are easy to maintain and repair'
    },
    {
      title: 'Laminate Countertops',
      description: 'Affordable, versatile options with many design possibilities'
    },
    {
      title: 'Butcher Block',
      description: 'Warm, natural wood surfaces ideal for kitchen islands and workspaces'
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Countertop Installation",
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
    "description": "Professional countertop installation services in Charlotte, NC. Expert installation of granite, quartz, solid surface, laminate, and butcher block countertops for kitchens and bathrooms."
  };

  return (
    <>
      <SEO
        title="Countertop Installation in Charlotte, NC"
        description="Professional countertop installation in Charlotte. Expert installation of granite, quartz, solid surface, laminate, and butcher block countertops for kitchens and bathrooms."
        keywords="countertop installation Charlotte, granite countertops, quartz countertops, kitchen countertops, bathroom countertops, countertop replacement"
        schema={schema}
      />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-bright-brown to-light-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Countertop Installation in Charlotte, NC
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Transform your kitchen or bathroom with beautiful, professionally installed countertops.
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
                Professional Countertop Installation
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Our countertop installation service provides a complete solution for updating your kitchen or bathroom. We handle everything from template creation and fabrication coordination to professional installation with precise fit and finish.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                With 15 years of experience installing various countertop materials, we understand the unique properties of each surface type and use specialized techniques to ensure long-lasting, beautiful results. Our attention to detail extends to sink cutouts, edge profiles, seam placement, and proper support.
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
                src="https://images.unsplash.com/photo-1600607686527-6fb886090705?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Modern kitchen with granite countertops"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Benefits of New Countertops</h2>
            <p className="text-lg text-gray-600">Why upgrading your countertops is a smart investment</p>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Countertop Options</h2>
            <p className="text-lg text-gray-600">We install a variety of quality materials</p>
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
                  <SafeIcon icon={FiGrid} className="h-6 w-6 text-white" />
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
                src="https://images.unsplash.com/photo-1588854337236-6889d631faa8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Countertop installation process"
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
                    <h3 className="font-semibold text-gray-900">Consultation & Measurement</h3>
                    <p className="text-gray-600">We discuss material options and take precise measurements of your space</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-bright-green text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Material Selection & Template</h3>
                    <p className="text-gray-600">Choose your perfect countertop material and we create an exact template</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-bright-green text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Fabrication</h3>
                    <p className="text-gray-600">Your countertops are precisely cut and finished based on the template</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-bright-green text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Professional Installation</h3>
                    <p className="text-gray-600">We carefully install your new countertops with proper support and sealing</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-bright-green text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold flex-shrink-0">
                    5
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Final Inspection</h3>
                    <p className="text-gray-600">We ensure everything is perfect and provide care instructions</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Recent Countertop Projects</h2>
            <p className="text-lg text-gray-600">Examples of our quality installations</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="rounded-lg overflow-hidden shadow-md"
            >
              <img
                src="https://images.unsplash.com/photo-1556911220-bda9a01c6262?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Granite kitchen countertop installation"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-white">
                <h3 className="font-medium text-gray-900">Granite Kitchen Countertops</h3>
                <p className="text-sm text-gray-600">Ballantyne, Charlotte</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="rounded-lg overflow-hidden shadow-md"
            >
              <img
                src="https://images.unsplash.com/photo-1622372738946-62e02505feb3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Quartz bathroom countertop"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-white">
                <h3 className="font-medium text-gray-900">Quartz Bathroom Vanity</h3>
                <p className="text-sm text-gray-600">Matthews, NC</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="rounded-lg overflow-hidden shadow-md"
            >
              <img
                src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Butcher block kitchen island"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-white">
                <h3 className="font-medium text-gray-900">Butcher Block Island</h3>
                <p className="text-sm text-gray-600">Mint Hill, NC</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Material Comparison */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Choosing the Right Material</h2>
            <p className="text-lg text-gray-600">We'll help you select the perfect countertop for your needs</p>
          </motion.div>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-md">
              <thead className="bg-bright-green text-white">
                <tr>
                  <th className="py-3 px-4 text-left">Material</th>
                  <th className="py-3 px-4 text-left">Durability</th>
                  <th className="py-3 px-4 text-left">Maintenance</th>
                  <th className="py-3 px-4 text-left">Cost Range</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-3 px-4 font-medium">Granite</td>
                  <td className="py-3 px-4">Excellent</td>
                  <td className="py-3 px-4">Periodic sealing</td>
                  <td className="py-3 px-4">$$$</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Quartz</td>
                  <td className="py-3 px-4">Excellent</td>
                  <td className="py-3 px-4">Low maintenance</td>
                  <td className="py-3 px-4">$$$</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Solid Surface</td>
                  <td className="py-3 px-4">Good</td>
                  <td className="py-3 px-4">Easy to clean</td>
                  <td className="py-3 px-4">$$</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Laminate</td>
                  <td className="py-3 px-4">Moderate</td>
                  <td className="py-3 px-4">Very easy</td>
                  <td className="py-3 px-4">$</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium">Butcher Block</td>
                  <td className="py-3 px-4">Good</td>
                  <td className="py-3 px-4">Regular oiling</td>
                  <td className="py-3 px-4">$$</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-4 text-center">During your consultation, we'll discuss which material best suits your lifestyle, budget, and aesthetic preferences.</p>
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
              Ready to Transform Your Space?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Schedule your countertop installation consultation today
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
              "Need help with countertop installation? Book your same-day handyman now — online, by call, or by text."
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default CountertopInstallation;