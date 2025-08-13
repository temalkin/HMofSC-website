import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import SEO from '../components/SEO';
import * as FiIcons from 'react-icons/fi';

const { FiHelpCircle, FiChevronDown, FiChevronUp, FiPhone, FiCalendar } = FiIcons;

function FAQ() {
  const [openFaq, setOpenFaq] = React.useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "Do you offer same-day handyman service?",
      answer: "Yes, we offer same-day service for many requests depending on our availability. Our AI assistant can check our schedule immediately and book you for the next available slot, which is often the same day for urgent needs."
    },
    {
      question: "What cities do you serve?",
      answer: "We serve Charlotte, Ballantyne, Mint Hill, Pineville, and Matthews. Our service area covers most of South Charlotte and surrounding communities."
    },
    {
      question: "What kinds of jobs do you take?",
      answer: "We handle a wide variety of handyman services including furniture assembly, drywall repair, TV mount installation, pressure washing, gutter cleaning, bathroom and kitchen remodeling, tiling, flooring installation, and many other general home repairs and improvements."
    },
    {
      question: "How do I send pictures?",
      answer: "You can text pictures to our service number or email them to info@handymanofsouthcharlotte.com. Photos help us understand your project better and provide more accurate quotes."
    },
    {
      question: "How can I talk to a real person?",
      answer: "When you call our AI assistant, simply say 'Transfer to Human' at any time and you'll be connected to a real person as soon as one is available. You can also request a callback through our contact form."
    },
    {
      question: "How much do your services cost?",
      answer: "Our pricing varies depending on the specific job, materials needed, and time required. We provide free estimates for all projects. For simple jobs, our AI assistant can often provide an immediate price range."
    },
    {
      question: "What are your hours of operation?",
      answer: "While our physical service hours are typically 7 AM to 7 PM Monday through Saturday, our AI booking system is available 24/7. You can schedule service anytime, day or night."
    },
    {
      question: "What's your cancellation policy?",
      answer: "We understand that plans change. We ask for at least 24 hours notice for cancellations when possible. For last-minute cancellations, please call us as soon as you can so we can adjust our schedule."
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <SEO
        title="Frequently Asked Questions - Handyman of South Charlotte"
        description="Find answers to common questions about our handyman services in Charlotte, NC. Learn about our service areas, booking process, types of jobs we handle, and more."
        keywords="handyman FAQ, Charlotte handyman questions, book handyman service, handyman pricing, same day handyman"
        schema={schema}
      />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-light-blue to-bright-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Find answers to common questions about our handyman services
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                  onClick={() => toggleFaq(index)}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`p-2 rounded-full ${openFaq === index ? 'bg-bright-green' : 'bg-gray-100'}`}>
                      <SafeIcon
                        icon={FiHelpCircle}
                        className={`h-5 w-5 ${openFaq === index ? 'text-white' : 'text-gray-500'}`}
                      />
                    </div>
                    <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                  </div>
                  <SafeIcon
                    icon={openFaq === index ? FiChevronUp : FiChevronDown}
                    className="h-5 w-5 text-gray-500"
                  />
                </button>
                {openFaq === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-6 pb-6 text-gray-600"
                  >
                    <div className="pt-4 border-t border-gray-200">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Still Have Questions */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Still Have Questions?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Can't find the answer you're looking for? Our team is here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+19803167792"
                className="bg-ai-purple text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-600 transition-colors inline-flex items-center justify-center"
              >
                <SafeIcon icon={FiPhone} className="mr-2 h-5 w-5" /> Call Our AI Assistant (Beta – We are still working to improve quality)
              </a>
              <a
                href="/contact"
                className="bg-bright-green text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-600 transition-colors inline-flex items-center justify-center"
              >
                <SafeIcon icon={FiCalendar} className="mr-2 h-5 w-5" /> Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SEO Terms */}
      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-sm text-gray-500 space-y-2">
            <p>
              Looking for a reliable handyman in Charlotte? Handyman of South Charlotte offers professional handyman services throughout Charlotte, Ballantyne, Mint Hill, Pineville, and Matthews. Our services include furniture assembly, drywall repair, TV mount installation, pressure washing, gutter cleaning, and much more.
            </p>
            <p>
              With our convenient AI booking system, you can book handyman services near me 24/7. Same-day service is often available for urgent needs. Call our AI assistant anytime or use our online booking system to schedule your handyman service today!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default FAQ;