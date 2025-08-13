import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import SEO from '../components/SEO';
import * as FiIcons from 'react-icons/fi';

const { FiStar, FiPhone, FiCalendar, FiMessageCircle, FiHome } = FiIcons;

function Reviews() {
  const googleReviews = [
    {
      name: "Sarah M.",
      rating: 5,
      date: "July 12, 2024",
      text: "I needed help with furniture assembly after moving to Charlotte, and Handyman of South Charlotte was amazing! Their AI booking system made scheduling super easy, and the handyman arrived right on time. He assembled all my IKEA furniture perfectly and even cleaned up afterward. Highly recommend!"
    },
    {
      name: "Michael T.",
      rating: 5,
      date: "June 28, 2024",
      text: "I had a bathroom renovation project that other contractors said would take weeks. Handyman of South Charlotte completed it in just 5 days with exceptional quality! The owner personally supervised the work and made sure everything was perfect. The online booking system was convenient, and they kept me updated throughout the process."
    },
    {
      name: "Jennifer L.",
      rating: 5,
      date: "June 15, 2024",
      text: "Called their AI assistant at 6am when my front door wouldn't close properly. By 2pm the same day, my door was fixed! The handyman was professional, knowledgeable, and charged a fair price. It's so convenient to have a reliable handyman service that you can reach anytime. Will definitely use again for future projects."
    },
    {
      name: "David W.",
      rating: 4,
      date: "May 30, 2024",
      text: "Had them install grab bars in my mother's bathroom. They were careful to place them exactly where needed for safety. The handyman was respectful and patient with my elderly mother's questions. Only reason for 4 stars instead of 5 is they had to reschedule once, but they communicated well about it."
    }
  ];

  const nextdoorReviews = [
    {
      name: "Robert K., Ballantyne",
      rating: 5,
      date: "July 5, 2024",
      text: "Needed urgent help with drywall repair after water damage. Called Handyman of South Charlotte and was able to book same-day service through their AI system. The repair is flawless - you can't even tell where the damage was. Great value and exceptional service!"
    },
    {
      name: "Lisa P., Mint Hill",
      rating: 5,
      date: "June 22, 2024",
      text: "I've tried several handyman services in Charlotte and this is by far the best! Had them pressure wash my driveway and install a new kitchen faucet. Both jobs were done perfectly. I love that I could call anytime and their AI assistant helped me book the service right away."
    },
    {
      name: "Thomas B., Matthews",
      rating: 5,
      date: "June 8, 2024",
      text: "Just had my front door refinished by Handyman of South Charlotte. The transformation is incredible! The craftsmanship and attention to detail were outstanding. Fair pricing and they finished ahead of schedule. Already planning to hire them for my next project."
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Handyman of South Charlotte",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127"
    },
    "review": [
      ...googleReviews.map(review => ({
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": review.name
        },
        "datePublished": review.date,
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": review.rating
        },
        "reviewBody": review.text
      })),
      ...nextdoorReviews.map(review => ({
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": review.name
        },
        "datePublished": review.date,
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": review.rating
        },
        "reviewBody": review.text
      }))
    ]
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <SafeIcon 
          key={i} 
          icon={FiStar} 
          className={`h-5 w-5 ${i <= rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
        />
      );
    }
    return stars;
  };

  return (
    <>
      <SEO
        title="Customer Reviews - Handyman of South Charlotte"
        description="Read reviews from our satisfied customers in Charlotte, Ballantyne, Mint Hill, Pineville, and Matthews. See why customers love our handyman services and AI booking system."
        keywords="handyman reviews Charlotte, handyman customer feedback, Charlotte handyman testimonials, best handyman service, handyman ratings"
        schema={schema}
      />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-bright-brown to-bright-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Customer Reviews
            </h1>
            <div className="flex items-center justify-center space-x-1 mb-4">
              {renderStars(5)}
            </div>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              See what our customers are saying about our handyman services
            </p>
          </motion.div>
        </div>
      </section>

      {/* Google Reviews */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center justify-center space-x-4 mb-8">
              <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1200px-Google_%22G%22_Logo.svg.png" 
                alt="Google" 
                className="h-8"
              />
              <h2 className="text-3xl font-bold text-gray-900">Google Reviews</h2>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {googleReviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-lg p-6 shadow-md"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{review.name}</h3>
                    <div className="flex space-x-1 mt-1">
                      {renderStars(review.rating)}
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">{review.date}</span>
                </div>
                <p className="text-gray-700">{review.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nextdoor Reviews */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="bg-teal-500 text-white p-2 rounded-full">
                <SafeIcon icon={FiHome} className="h-6 w-6" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Nextdoor Reviews</h2>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {nextdoorReviews.map((review, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-md"
              >
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{review.name}</h3>
                    <div className="flex space-x-1 mt-1">
                      {renderStars(review.rating)}
                    </div>
                  </div>
                  <span className="text-sm text-gray-500">{review.date}</span>
                </div>
                <p className="text-gray-700">{review.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonial */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-bright-green rounded-lg p-8 md:p-12 text-center"
          >
            <div className="flex justify-center mb-6">
              <div className="bg-white p-2 rounded-full">
                <SafeIcon icon={FiMessageCircle} className="h-8 w-8 text-bright-green" />
              </div>
            </div>
            <blockquote className="text-xl md:text-2xl font-medium text-white mb-6">
              "I've recommended Handyman of South Charlotte to all my neighbors. Their AI booking system is so convenient, and the quality of work is outstanding. It's like having your own handyman in your pocket!"
            </blockquote>
            <p className="text-white/90 font-medium">— Amanda R., Charlotte</p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Experience Our Service For Yourself
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Join our satisfied customers by booking your handyman service today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-bright-green text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-600 transition-colors inline-flex items-center justify-center"
              >
                <SafeIcon icon={FiCalendar} className="mr-2 h-5 w-5" />
                Contact Us
              </a>
              <a
                href="tel:+19803167792"
                className="bg-ai-purple text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-600 transition-colors inline-flex items-center justify-center"
              >
                <SafeIcon icon={FiPhone} className="mr-2 h-5 w-5" />
                Call AI Assistant
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bookmark CTA */}
      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg font-semibold text-bright-green">
            Bookmark us to keep your handyman in your pocket!
          </p>
        </div>
      </section>
    </>
  );
}

export default Reviews;