import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SafeIcon from '../../common/SafeIcon';
import SEO from '../../components/SEO';
import * as FiIcons from 'react-icons/fi';

const { FiTool, FiCheckCircle, FiCalendar, FiHome, FiShield, FiDroplet, FiAlertTriangle } = FiIcons;

function PressureWashing() {
  const benefits = [
    'Restore the appearance of exterior surfaces',
    'Remove harmful mold, mildew, and algae',
    'Extend the life of your driveway, deck, and siding',
    'Increase your property value and curb appeal'
  ];

  const services = [
    {
      title: 'Driveway & Walkway Cleaning',
      description: 'Remove oil stains, dirt, and grime from concrete surfaces'
    },
    {
      title: 'House Siding Washing',
      description: 'Safely clean vinyl, fiber cement, and other siding materials'
    },
    {
      title: 'Deck & Fence Restoration',
      description: 'Remove buildup and prepare wood surfaces for staining or sealing'
    },
    {
      title: 'Roof Cleaning',
      description: 'Gently remove moss, algae, and stains from roof surfaces'
    },
    {
      title: 'Patio & Pool Deck Cleaning',
      description: 'Clean concrete, pavers, and stone surfaces around outdoor living areas'
    },
    {
      title: 'Commercial Pressure Washing',
      description: 'Storefront, sidewalk, and parking lot cleaning for businesses'
    }
  ];

  const safetyMeasures = [
    'Proper pressure settings for each surface type to prevent damage',
    'Eco-friendly cleaning solutions that are safe for plants and pets',
    'Careful masking and protection of delicate areas and landscaping',
    'Water runoff management to comply with environmental regulations'
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Pressure Washing",
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
    "description": "Professional pressure washing services in Charlotte, NC. We safely clean driveways, siding, decks, patios, and fences for residential and commercial properties."
  };

  return (
    <>
      <SEO
        title="Pressure Washing in Charlotte, NC"
        description="Professional pressure washing services in Charlotte. We safely clean driveways, siding, decks, patios, and fences for residential and commercial properties."
        keywords="pressure washing Charlotte, power washing, driveway cleaning, house washing, deck cleaning, exterior cleaning"
        schema={schema}
      />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-light-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Pressure Washing in Charlotte, NC
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              We safely clean your exterior surfaces with professional pressure washing—residential and commercial.
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
                Professional Pressure Washing Services
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Our pressure washing service uses professional-grade equipment and techniques to safely clean and restore the appearance of your exterior surfaces. From removing stubborn stains on driveways to washing away years of dirt and mildew from siding, we deliver exceptional results that enhance your property's curb appeal.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                We understand that different surfaces require different cleaning approaches. Our experienced technicians select the appropriate pressure levels and cleaning solutions for each material, ensuring effective cleaning without causing damage. Whether it's concrete, vinyl siding, wood decking, or brick, we have the expertise to clean it properly.
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
                src="https://images.unsplash.com/photo-1558402529-d2638a7023e9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Professional pressure washing a driveway"
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Benefits of Professional Pressure Washing</h2>
            <p className="text-lg text-gray-600">Why regular pressure washing is important for your property</p>
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

      {/* Before and After */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">The Transformation</h2>
            <p className="text-lg text-gray-600">See the dramatic difference pressure washing makes</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-2"
            >
              <div className="relative rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1604148482093-d55d6fc62400?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Dirty driveway before pressure washing"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4 bg-red-500 text-white px-4 py-1 rounded-full font-medium">
                  Before
                </div>
              </div>
              <p className="text-center text-gray-700 font-medium">Driveway with years of dirt and oil stains</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-2"
            >
              <div className="relative rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1623875151980-3f1bcd40a8bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Clean driveway after pressure washing"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4 bg-green-500 text-white px-4 py-1 rounded-full font-medium">
                  After
                </div>
              </div>
              <p className="text-center text-gray-700 font-medium">Restored to like-new condition</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-2"
            >
              <div className="relative rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Dirty siding before pressure washing"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4 bg-red-500 text-white px-4 py-1 rounded-full font-medium">
                  Before
                </div>
              </div>
              <p className="text-center text-gray-700 font-medium">House siding with mildew and dirt buildup</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-2"
            >
              <div className="relative rounded-lg overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                  alt="Clean siding after pressure washing"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4 bg-green-500 text-white px-4 py-1 rounded-full font-medium">
                  After
                </div>
              </div>
              <p className="text-center text-gray-700 font-medium">Clean, bright siding that enhances curb appeal</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Pressure Washing Services</h2>
            <p className="text-lg text-gray-600">Comprehensive solutions for all your exterior cleaning needs</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-md"
              >
                <div className="bg-bright-green p-3 rounded-lg w-fit mb-4">
                  <SafeIcon icon={FiDroplet} className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Section */}
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
                Our Safety-First Approach
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Pressure washing, when done incorrectly, can damage surfaces, waste water, and even cause injury. Our professionals are trained to use the right techniques and equipment for each specific application, ensuring effective cleaning without causing damage.
              </p>
              <div className="space-y-4 mt-8">
                {safetyMeasures.map((measure, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <SafeIcon icon={FiShield} className="h-6 w-6 text-bright-green mt-1" />
                    <p className="text-gray-700">{measure}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <SafeIcon icon={FiAlertTriangle} className="h-5 w-5 text-yellow-400" />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm text-yellow-700">
                      <span className="font-medium">Safety Disclaimer:</span> Pressure washing uses high-pressure water that can cause injury if misused. Our technicians are properly trained and equipped with safety gear. Please keep children and pets away from the work area during service.
                    </p>
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
                src="https://images.unsplash.com/photo-1611023296694-b8cba7a45fd5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Professional using pressure washer with safety equipment"
                className="rounded-lg shadow-lg w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Surface Types */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Surfaces We Clean</h2>
            <p className="text-lg text-gray-600">We safely clean a wide variety of exterior surfaces</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-4 shadow-sm text-center"
            >
              <h3 className="font-semibold text-gray-900">Concrete</h3>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-4 shadow-sm text-center"
            >
              <h3 className="font-semibold text-gray-900">Vinyl Siding</h3>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-4 shadow-sm text-center"
            >
              <h3 className="font-semibold text-gray-900">Wood Decking</h3>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.25 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-4 shadow-sm text-center"
            >
              <h3 className="font-semibold text-gray-900">Brick</h3>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-4 shadow-sm text-center"
            >
              <h3 className="font-semibold text-gray-900">Stone Pavers</h3>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.35 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-4 shadow-sm text-center"
            >
              <h3 className="font-semibold text-gray-900">Stucco</h3>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Pressure Washing Process</h2>
            <p className="text-lg text-gray-600">How we deliver exceptional results</p>
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
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Assessment</h3>
              <p className="text-gray-600">We evaluate the surfaces to determine the appropriate cleaning approach</p>
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
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Preparation</h3>
              <p className="text-gray-600">We protect landscaping, fixtures, and sensitive areas before cleaning</p>
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
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Cleaning</h3>
              <p className="text-gray-600">We apply appropriate cleaning solutions and use professional pressure washing equipment</p>
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
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Final Inspection</h3>
              <p className="text-gray-600">We review our work and ensure all areas are properly cleaned</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Commercial Services */}
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
                src="https://images.unsplash.com/photo-1577801622187-9a1076d049da?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Commercial pressure washing service"
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
                Commercial Pressure Washing
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                We also provide professional pressure washing services for businesses. Our commercial services include cleaning storefronts, sidewalks, parking lots, dumpster areas, and more. Regular cleaning helps maintain your business's professional appearance and creates a positive impression for customers.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <SafeIcon icon={FiCheckCircle} className="h-6 w-6 text-bright-green mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Storefront Cleaning</h3>
                    <p className="text-gray-600">Enhance your business's curb appeal with clean walkways and entrances</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <SafeIcon icon={FiCheckCircle} className="h-6 w-6 text-bright-green mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Parking Lot Maintenance</h3>
                    <p className="text-gray-600">Remove oil stains, gum, and debris from parking areas</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <SafeIcon icon={FiCheckCircle} className="h-6 w-6 text-bright-green mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Scheduled Maintenance Programs</h3>
                    <p className="text-gray-600">Regular cleaning services to keep your property looking its best year-round</p>
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
              Ready to Transform Your Property's Exterior?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Schedule your pressure washing service today
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
              "Need help with pressure washing? Book your same-day handyman now — online, by call, or by text."
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default PressureWashing;