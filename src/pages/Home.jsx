import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import SEO from '../components/SEO';
import * as FiIcons from 'react-icons/fi';

const { FiTool, FiStar, FiClock, FiPhone, FiCalendar, FiCheckCircle, FiHome, FiSettings, FiShield, FiMonitor } = FiIcons;

function Home() {
  const features = [
    {
      icon: FiClock,
      title: '24/7 AI Assistant (Beta – We are still working to improve quality)',
      description: 'Call anytime - our AI assistant takes your info and books your service instantly'
    },
    {
      icon: FiStar,
      title: '15 Years Experience',
      description: 'Owner-led service with proven expertise and attention to detail'
    },
    {
      icon: FiPhone,
      title: 'Fast Response',
      description: 'Get quotes in minutes, not hours or days'
    }
  ];

  const services = [
    { name: 'Furniture Assembly', icon: FiHome },
    { name: 'Drywall Repair', icon: FiTool },
    { name: 'TV Mount Installation', icon: FiMonitor },
    { name: 'Pressure Washing', icon: FiSettings },
    { name: 'Gutter Cleaning', icon: FiHome },
    { name: 'Kitchen Remodeling', icon: FiTool }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Handyman of South Charlotte",
    "description": "Professional handyman services in Charlotte, NC and surrounding areas. 15 years of experience with same-day service available.",
    "url": window.location.origin,
    "telephone": "+19803167792",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Charlotte",
      "addressRegion": "NC",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 35.2271,
      "longitude": -80.8431
    },
    "areaServed": [
      "Charlotte, NC",
      "Ballantyne, NC",
      "Mint Hill, NC",
      "Pineville, NC",
      "Matthews, NC"
    ],
    "serviceType": [
      "Handyman Services",
      "Home Repairs",
      "Furniture Assembly",
      "Drywall Repair",
      "Pressure Washing"
    ]
  };

  return (
    <>
      <SEO
        title="Professional Handyman Services in Charlotte, NC"
        description="Handyman of South Charlotte - 15 years experience, same-day service available. Book online 24/7 or call our AI assistant anytime. Serving Charlotte, Ballantyne, Mint Hill, Pineville, Matthews."
        keywords="handyman Charlotte, handyman near me, same-day handyman, Ballantyne handyman, Mint Hill handyman, book handyman online, affordable handyman Charlotte"
        schema={schema}
      />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-bright-green to-light-blue py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Established in 2024 — Backed by 15 Years of Hands-On Experience
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Owner-led, detail-focused service with real solutions built for everyday comfort and long-term reliability.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-white text-bright-green px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-colors inline-flex items-center justify-center"
                >
                  <SafeIcon icon={FiCalendar} className="mr-2 h-5 w-5" /> Get a Free Estimate
                </Link>
                <a
                  href="tel:+19803167792"
                  className="bg-ai-purple text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-600 transition-colors inline-flex items-center justify-center"
                >
                  <SafeIcon icon={FiPhone} className="mr-2 h-5 w-5" /> Call Now (Beta – We are still working to improve quality)
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Professional handyman working on home repairs"
                className="rounded-lg shadow-2xl w-full"
                loading="eager"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Relationship & Booking Message */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              We Build Real Relationships — Not Just Fix Things
            </h2>
            <div className="text-lg text-gray-700 space-y-4 mb-8">
              <p>
                At Handyman of South Charlotte, we build real relationships — not just fix things. That means fast, personal access to help when you need it.
              </p>
              <p>
                You can check our reviews on Google and Nextdoor — our customers love the quick response and care we put into every detail.
              </p>
            </div>
            <div className="bg-gray-50 rounded-lg p-8 mb-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                We're rolling out our Fast Booking System powered by AI:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                <div className="flex items-start space-x-3">
                  <SafeIcon icon={FiPhone} className="h-6 w-6 text-ai-purple mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Call anytime</h4>
                    <p className="text-gray-600">Even at 5 AM or midnight — our AI assistant (Beta – We are still working to improve quality) will take your info and book it</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <SafeIcon icon={FiCalendar} className="h-6 w-6 text-bright-green mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Use our Contact Form</h4>
                    <p className="text-gray-600">Send us your request any time</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <SafeIcon icon={FiCheckCircle} className="h-6 w-6 text-light-blue mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Prefer texting?</h4>
                    <p className="text-gray-600">Send us a task list and pictures — get a quote in minutes, not hours or days</p>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-lg text-gray-700 mb-6">
              Want your own handyman in your pocket? Just bookmark this site so you always know where your handyman is.
            </p>
            <p className="text-xl font-semibold text-bright-green">
              Simple services should be simple to access — anytime, anywhere.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
            <p className="text-lg text-gray-600">Professional service with a personal touch</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="bg-bright-green p-3 rounded-lg w-fit mb-4">
                  <SafeIcon icon={feature.icon} className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Popular Services</h2>
            <p className="text-lg text-gray-600">Quick fixes to complete renovations</p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-lg p-4 text-center hover:bg-bright-green hover:text-white transition-colors group"
              >
                <SafeIcon
                  icon={service.icon}
                  className="h-8 w-8 mx-auto mb-2 text-bright-green group-hover:text-white"
                />
                <p className="font-medium text-sm">{service.name}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/services"
              className="bg-bright-green text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-colors inline-flex items-center"
            >
              View All Services <SafeIcon icon={FiTool} className="ml-2 h-5 w-5" />
            </Link>
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Book your service online 24/7 or call our AI assistant anytime
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
                <SafeIcon icon={FiPhone} className="mr-2 h-5 w-5" /> Call AI Assistant (Beta – We are still working to improve quality)
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Home;