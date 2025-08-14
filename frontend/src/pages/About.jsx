import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import SEO from '../components/SEO';
import * as FiIcons from 'react-icons/fi';

const { FiUser, FiTool, FiStar, FiHeart, FiAward, FiCalendar, FiPhone } = FiIcons;

function About() {
  const values = [
    {
      icon: FiHeart,
      title: 'Personal Touch',
      description: 'Every job gets the owner\'s personal attention and commitment to quality'
    },
    {
      icon: FiStar,
      title: 'Excellence',
      description: '15 years of experience delivering solutions that last'
    },
    {
      icon: FiTool,
      title: 'Reliability',
      description: 'Consistent, dependable service you can count on'
    },
    {
      icon: FiAward,
      title: 'Integrity',
      description: 'Honest pricing, clear communication, and transparent service'
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Handyman of South Charlotte",
    "description": "Owner-led handyman business established in 2024, backed by 15 years of hands-on experience. Serving Charlotte, Ballantyne, Mint Hill, Pineville, and Matthews with professional handyman services.",
    "foundingDate": "2024",
    "founder": {
      "@type": "Person",
      "name": "Owner"
    }
  };

  return (
    <>
      <SEO
        title="About Handyman of South Charlotte - 15 Years Experience"
        description="Learn about Handyman of South Charlotte - established 2024, backed by 15 years experience. Owner-led, detail-focused service with real solutions for your home."
        keywords="about handyman Charlotte, experienced handyman, owner operated handyman, Charlotte home repairs, professional handyman services"
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
              About Handyman of South Charlotte
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Established in 2024 — Backed by 15 Years of Hands-On Experience
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  When we founded Handyman of South Charlotte in 2024, we brought with us 15 years 
                  of hands-on experience in home repairs and improvements. We saw too many homeowners 
                  struggling with unreliable service providers and decided to do something different.
                </p>
                <p>
                  Our approach is simple: owner-led, detail-focused service with real solutions 
                  built for everyday comfort and long-term reliability. We believe that quality 
                  work speaks for itself, and our growing list of satisfied customers in Charlotte, 
                  Ballantyne, Mint Hill, Pineville, and Matthews is proof of that commitment.
                </p>
                <p>
                  What sets us apart is our dedication to building real relationships with our 
                  customers. We're not just here to fix things — we're here to be your trusted 
                  handyman partner for years to come.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1504148455328-c376907d081c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Professional handyman tools and workspace"
                className="rounded-lg shadow-lg w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Relationship & Booking Message */}
      <section className="py-16 bg-gray-50">
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
                At Handyman of South Charlotte, we build real relationships — not just fix things. 
                That means fast, personal access to help when you need it.
              </p>
              <p>
                You can check our reviews on Google and Nextdoor — our customers love the quick 
                response and care we put into every detail.
              </p>
            </div>

            <div className="bg-white rounded-lg p-8 mb-8 shadow-md">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                We're rolling out our Fast Booking System powered by AI:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                <div className="flex items-start space-x-3">
                  <SafeIcon icon={FiPhone} className="h-6 w-6 text-ai-purple mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Call anytime</h4>
                    <p className="text-gray-600">Even at 5 AM or midnight — our AI assistant will take your info and book it</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <SafeIcon icon={FiCalendar} className="h-6 w-6 text-bright-green mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Use our Contact Form</h4>
                    <p className="text-gray-600">Send your request any time</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <SafeIcon icon={FiTool} className="h-6 w-6 text-light-blue mt-1" />
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

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600">What drives everything we do</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-bright-green p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <SafeIcon icon={value.icon} className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
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
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Quality handyman work and attention to detail"
                className="rounded-lg shadow-lg w-full"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">15 Years of Proven Experience</h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  Our 15 years of hands-on experience means we've seen it all and know how to 
                  handle any challenge that comes our way. From simple repairs to complex 
                  renovations, we bring expertise and attention to detail to every project.
                </p>
                <p>
                  We've built our reputation on quality workmanship, fair pricing, and 
                  exceptional customer service. Our customers in the Charlotte area know 
                  they can rely on us for honest advice and reliable solutions.
                </p>
                <p>
                  Whether it's a quick fix or a major project, we approach every job with 
                  the same level of professionalism and commitment to excellence.
                </p>
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
              Ready to Experience the Difference?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let us show you what 15 years of experience and commitment to quality looks like
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-bright-green px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-colors inline-flex items-center justify-center"
              >
                <SafeIcon icon={FiCalendar} className="mr-2 h-5 w-5" />
                Contact Us
              </Link>
              <Link
                to="/reviews"
                className="bg-ai-purple text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-600 transition-colors inline-flex items-center justify-center"
              >
                <SafeIcon icon={FiStar} className="mr-2 h-5 w-5" />
                Read Reviews
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default About;