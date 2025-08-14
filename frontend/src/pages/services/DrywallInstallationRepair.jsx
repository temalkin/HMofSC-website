import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SafeIcon from '../../common/SafeIcon';
import SEO from '../../components/SEO';
import * as FiIcons from 'react-icons/fi';

const { FiTool, FiCheckCircle, FiCalendar, FiHome, FiGrid, FiLayers } = FiIcons;

function DrywallInstallationRepair() {
  const benefits = [
    'Professional finish that blends seamlessly with existing walls',
    'Proper repair of damaged areas to prevent future issues',
    'Expert installation of new drywall for renovations or additions',
    'Clean worksite with minimal dust and disruption'
  ];

  const services = [
    {
      title: 'Drywall Hole Repair',
      description: 'Professional repair of holes from doorknobs, furniture impacts, or accidents'
    },
    {
      title: 'Water Damage Repair',
      description: 'Removal and replacement of water-damaged drywall sections'
    },
    {
      title: 'New Drywall Installation',
      description: 'Complete installation for renovations, room additions, or new construction'
    },
    {
      title: 'Drywall Finishing',
      description: 'Professional taping, mudding, sanding, and texturing for a flawless finish'
    },
    {
      title: 'Ceiling Repair',
      description: 'Fix water stains, cracks, and damage to ceiling drywall'
    },
    {
      title: 'Patch & Paint',
      description: 'Comprehensive service that includes patching, sanding, and painting to match'
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Drywall Installation & Repair",
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
    "description": "Professional drywall installation and repair services in Charlotte, NC. Expert patching, finishing, and texturing for holes, water damage, and renovations with seamless results."
  };

  return (
    <>
      <SEO
        title="Drywall Installation & Repair in Charlotte, NC"
        description="Professional drywall installation and repair in Charlotte. Expert patching, finishing, and texturing for holes, water damage, and renovations with seamless results."
        keywords="drywall repair Charlotte, drywall installation, drywall patching, drywall contractor, water damage repair, hole in wall repair"
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
              Drywall Installation & Repair in Charlotte, NC
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Professional drywall services with seamless results for repairs, patches, and new installations.
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
                Expert Drywall Services
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Our professional drywall installation and repair services provide seamless solutions for homes and businesses in the Charlotte area. Whether you need to repair a small hole, fix water damage, or install drywall for a new addition, our experienced team delivers quality results that blend perfectly with your existing walls.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                With 15 years of experience in drywall work, we understand the importance of proper technique in each step of the process – from accurate measuring and cutting to professional taping, mudding, sanding, and texturing. Our attention to detail ensures a flawless finish that looks like the damage never happened.
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
                src="https://images.unsplash.com/photo-1621155346337-1d19476ba7d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Professional drywall repair and finishing"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Benefits of Professional Drywall Work</h2>
            <p className="text-lg text-gray-600">Why choose our expert drywall services</p>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Drywall Services</h2>
            <p className="text-lg text-gray-600">Comprehensive solutions for all your drywall needs</p>
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
                  <SafeIcon icon={service.title.includes('Installation') ? FiGrid : FiLayers} className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Drywall Process</h2>
            <p className="text-lg text-gray-600">How we achieve seamless, professional results</p>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-bright-green text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold flex-shrink-0 mt-1">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Assessment</h3>
                    <p className="text-gray-600">We evaluate the damage or area for new installation to determine the best approach and materials needed.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-bright-green text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold flex-shrink-0 mt-1">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Preparation</h3>
                    <p className="text-gray-600">We prepare the work area, protecting your furnishings and flooring, and remove damaged drywall if necessary.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-bright-green text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold flex-shrink-0 mt-1">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Installation/Repair</h3>
                    <p className="text-gray-600">We install new drywall or repair damaged sections with precision cutting and secure attachment.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-bright-green text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold flex-shrink-0 mt-1">
                    4
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Taping & Mudding</h3>
                    <p className="text-gray-600">We apply joint tape and multiple layers of joint compound with proper drying time between coats.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-bright-green text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold flex-shrink-0 mt-1">
                    5
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Sanding & Texturing</h3>
                    <p className="text-gray-600">We sand the surface to a smooth finish and apply texture to match your existing walls.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-bright-green text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold flex-shrink-0 mt-1">
                    6
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Priming & Cleanup</h3>
                    <p className="text-gray-600">We prime the repaired area and thoroughly clean the workspace, leaving your home neat and ready for painting.</p>
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
                src="https://images.unsplash.com/photo-1615529328331-f8917597711f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Professional drywall finishing process"
                className="rounded-lg shadow-lg w-full mb-6"
              />
              <img
                src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Drywall repair tools and materials"
                className="rounded-lg shadow-lg w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Common Repair Types */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Common Drywall Issues We Fix</h2>
            <p className="text-lg text-gray-600">Expert solutions for all types of drywall damage</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-md"
            >
              <img
                src="https://images.unsplash.com/photo-1630686039961-7fd5a8a3d19f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Drywall hole repair"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-medium text-gray-900 text-lg mb-2">Holes & Punctures</h3>
                <p className="text-gray-600">From small nail holes to larger doorknob damage, we repair holes of all sizes with seamless patches.</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-md"
            >
              <img
                src="https://images.unsplash.com/photo-1568638144237-8dfb52a63e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Water damaged drywall"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-medium text-gray-900 text-lg mb-2">Water Damage</h3>
                <p className="text-gray-600">We remove water-damaged sections, address moisture issues, and replace with new drywall to prevent mold.</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-md"
            >
              <img
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Cracked drywall repair"
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="font-medium text-gray-900 text-lg mb-2">Cracks & Seams</h3>
                <p className="text-gray-600">We repair settlement cracks and opening seams with proper reinforcement techniques for lasting results.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quality Commitment */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-lg p-8 shadow-lg"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Our Quality Commitment
            </h2>
            <div className="space-y-4 text-lg text-gray-700">
              <p>
                At Handyman of South Charlotte, we understand that drywall work requires skill and attention to detail. Our team takes pride in delivering seamless repairs and installations that stand the test of time.
              </p>
              <p>
                We use only quality materials and proper techniques at every stage of the process. From careful measurement and cutting to professional finishing with multiple coats of joint compound and expert sanding, our methodical approach ensures results that look like the damage never happened.
              </p>
              <p>
                Our customers appreciate our clean work habits – we use dust containment systems and thoroughly clean up after each project, minimizing disruption to your home or business.
              </p>
            </div>
          </motion.div>
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
              Need Drywall Installation or Repair?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Schedule your professional drywall service today
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
              "Need help with drywall installation or repair? Book your same-day handyman now — online, by call, or by text."
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default DrywallInstallationRepair;