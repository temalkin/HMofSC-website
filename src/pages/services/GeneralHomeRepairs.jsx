import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SafeIcon from '../../common/SafeIcon';
import SEO from '../../components/SEO';
import * as FiIcons from 'react-icons/fi';

const { FiTool, FiCheckCircle, FiCalendar, FiHome, FiShield, FiSettings, FiLayers } = FiIcons;

function GeneralHomeRepairs() {
  const commonRepairs = [
    'Door repairs and adjustments',
    'Drywall patching and repair',
    'Window repairs and weatherstripping',
    'Trim and baseboard installation',
    'Caulking and sealing',
    'Cabinet and drawer repairs',
    'Hardware replacement',
    'Leaky faucet fixes',
    'Light fixture replacement',
    'Screen repair and replacement'
  ];

  const repairCategories = [
    {
      title: 'Door & Window Repairs',
      description: 'Fix sticking doors, broken locks, drafty windows, and damaged screens'
    },
    {
      title: 'Drywall & Ceiling Repairs',
      description: 'Patch holes, fix cracks, and repair water damage in walls and ceilings'
    },
    {
      title: 'Trim & Molding Work',
      description: 'Install, repair, or replace baseboards, crown molding, and trim'
    },
    {
      title: 'Fixture Replacement',
      description: 'Update or repair light fixtures, faucets, and hardware throughout your home'
    },
    {
      title: 'Caulking & Weatherproofing',
      description: 'Seal gaps around windows, doors, tubs, and other areas to prevent drafts and water damage'
    },
    {
      title: 'Small Carpentry Projects',
      description: 'Build or repair shelves, cabinets, and other wooden elements in your home'
    }
  ];

  const whyChooseUs = [
    {
      title: 'Experienced Professionals',
      description: 'Our handymen have years of experience with all types of home repairs'
    },
    {
      title: 'Quality Workmanship',
      description: 'We take pride in our attention to detail and quality results'
    },
    {
      title: 'Prompt Service',
      description: 'We arrive on time and work efficiently to minimize disruption'
    },
    {
      title: 'Transparent Pricing',
      description: 'No hidden fees or surprise charges - just honest, upfront pricing'
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "General Home Repairs",
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
    "description": "Professional general home repair services in Charlotte, NC. From minor fixes to full repair projects, we handle door repairs, drywall patching, window repairs, trim work, and more."
  };

  return (
    <>
      <SEO
        title="General Home Repairs in Charlotte, NC"
        description="Professional general home repairs in Charlotte. From minor fixes to full repair projects, we handle door repairs, drywall patching, window repairs, trim work, and more."
        keywords="home repairs Charlotte, handyman service, door repair, drywall repair, window repair, trim installation, general contractor"
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
              General Home Repairs in Charlotte, NC
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              From minor fixes to full repair projects—get your home back in shape.
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
                Comprehensive Home Repair Services
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Our general home repair service handles all those nagging issues around your home that need fixing. From doors that won't close properly to damaged drywall, leaky faucets to broken cabinets, our skilled handymen can tackle a wide range of repairs efficiently and professionally.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                With 15 years of experience in home maintenance and repairs, we've seen and fixed just about everything. We arrive with the tools and knowledge to handle multiple repair tasks in a single visit, saving you time and hassle. Our goal is to leave your home functioning perfectly and looking great.
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
                src="https://images.unsplash.com/photo-1621905251189-08b45249be80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Handyman repairing drywall"
                className="rounded-lg shadow-lg w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Common Repairs Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Common Repairs We Handle</h2>
            <p className="text-lg text-gray-600">Our most frequently requested repair services</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-8">
            {commonRepairs.map((repair, index) => (
              <motion.div
                key={repair}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex items-start space-x-3"
              >
                <SafeIcon icon={FiCheckCircle} className="h-6 w-6 text-bright-green mt-1" />
                <p className="text-lg text-gray-700">{repair}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Repair Categories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Repair Categories</h2>
            <p className="text-lg text-gray-600">Comprehensive solutions for all your home repair needs</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {repairCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-lg p-6 shadow-md"
              >
                <div className="bg-bright-green p-3 rounded-lg w-fit mb-4">
                  <SafeIcon icon={index % 2 === 0 ? FiTool : FiSettings} className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.title}</h3>
                <p className="text-gray-600">{category.description}</p>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Simple Repair Process</h2>
            <p className="text-lg text-gray-600">How we make home repairs easy for you</p>
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
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Contact Us</h3>
              <p className="text-gray-600">Tell us about the repairs you need through our online form or by phone</p>
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
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Get a Quote</h3>
              <p className="text-gray-600">Receive a clear estimate for the work that needs to be done</p>
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
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Schedule Service</h3>
              <p className="text-gray-600">We'll arrange a convenient time for our handyman to visit your home</p>
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
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Repairs Completed</h3>
              <p className="text-gray-600">Our skilled handyman completes all repairs efficiently and professionally</p>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Recent Repair Projects</h2>
            <p className="text-lg text-gray-600">Examples of our quality repair work</p>
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
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Drywall repair project"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-white">
                <h3 className="font-medium text-gray-900">Drywall Repair</h3>
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
                src="https://images.unsplash.com/photo-1581165825571-4516e8b3a5d4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Door repair and adjustment"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-white">
                <h3 className="font-medium text-gray-900">Door Repair & Adjustment</h3>
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
                src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Bathroom caulking repair"
                className="w-full h-64 object-cover"
              />
              <div className="p-4 bg-white">
                <h3 className="font-medium text-gray-900">Bathroom Caulking</h3>
                <p className="text-sm text-gray-600">Mint Hill, NC</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Repair Services</h2>
            <p className="text-lg text-gray-600">What sets our home repair services apart</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-md"
              >
                <div className="bg-bright-green p-3 rounded-lg w-fit mb-4">
                  {index === 0 && <SafeIcon icon={FiTool} className="h-6 w-6 text-white" />}
                  {index === 1 && <SafeIcon icon={FiCheckCircle} className="h-6 w-6 text-white" />}
                  {index === 2 && <SafeIcon icon={FiCalendar} className="h-6 w-6 text-white" />}
                  {index === 3 && <SafeIcon icon={FiShield} className="h-6 w-6 text-white" />}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-xl p-8 shadow-lg"
          >
            <div className="flex flex-col items-center">
              <div className="mb-6">
                <div className="flex text-yellow-400">
                  <SafeIcon icon={FiIcons.FiStar} className="h-6 w-6 fill-current" />
                  <SafeIcon icon={FiIcons.FiStar} className="h-6 w-6 fill-current" />
                  <SafeIcon icon={FiIcons.FiStar} className="h-6 w-6 fill-current" />
                  <SafeIcon icon={FiIcons.FiStar} className="h-6 w-6 fill-current" />
                  <SafeIcon icon={FiIcons.FiStar} className="h-6 w-6 fill-current" />
                </div>
              </div>
              <blockquote className="text-xl text-gray-700 text-center italic mb-6">
                "I had a list of repairs that had been piling up for months. The handyman from South Charlotte was amazing! He fixed my sticking door, patched several holes in the drywall, and even repaired a leaky faucet—all in one visit. Professional, efficient, and reasonably priced. I'll definitely call them again!"
              </blockquote>
              <div className="text-gray-800 font-medium">Sarah T. in Ballantyne</div>
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
              Ready to Get Those Repairs Done?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Schedule your repair service today and check those tasks off your list
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
              "Need help with home repairs? Book your same-day handyman now — online, by call, or by text."
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default GeneralHomeRepairs;