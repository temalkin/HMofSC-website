import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import SEO from '../components/SEO';
import * as FiIcons from 'react-icons/fi';

const { FiMessageCircle, FiPhone, FiCalendar, FiClock, FiCheckCircle, FiHelpCircle, FiUsers, FiSend, FiUser } = FiIcons;

function AIAssistant() {
  const [messages, setMessages] = useState([
    { id: 1, text: "Hello! I'm the AI assistant for Handyman of South Charlotte (Beta – We are still working to improve quality). How can I help you today?", sender: 'ai' }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const features = [
    { 
      icon: FiClock, 
      title: '24/7 Availability', 
      description: 'Our AI assistant is available any time of day or night to take your booking' 
    },
    { 
      icon: FiCheckCircle, 
      title: 'Instant Scheduling', 
      description: 'Get immediate confirmation of your booking and appointment time' 
    },
    { 
      icon: FiHelpCircle, 
      title: 'Service Information', 
      description: 'Ask questions about our services, pricing, and availability' 
    },
    { 
      icon: FiUsers, 
      title: 'Human Transfer', 
      description: 'Simply say "Transfer to Human" to connect with our team' 
    }
  ];

  // Sample responses based on keywords
  const getAIResponse = (userInput) => {
    const lowerInput = userInput.toLowerCase();

    // Check for transfer to human request
    if (lowerInput.includes('transfer to human') || lowerInput.includes('speak to human') || lowerInput.includes('talk to human')) {
      return "I'll connect you with a human team member right away. Please call us at (980) 316-7792 and one of our team members will assist you.";
    }

    // Check for booking or scheduling request
    if (lowerInput.includes('book') || lowerInput.includes('schedule') || lowerInput.includes('appointment')) {
      return "I'd be happy to help you schedule an appointment! Could you please provide the following information:\n\n1. The service you need\n2. Your preferred date and time\n3. Your address\n\nOr, you can submit our contact form at handymansouthcharlotte.com/#/contact for more options.";
    }

    // Check for service inquiries
    if (lowerInput.includes('service') || lowerInput.includes('repair') || lowerInput.includes('fix')) {
      return "We offer a wide range of handyman services including furniture assembly, drywall repair, TV mount installation, pressure washing, gutter cleaning, and much more. What specific service are you interested in?";
    }

    // Check for pricing inquiries
    if (lowerInput.includes('price') || lowerInput.includes('cost') || lowerInput.includes('quote') || lowerInput.includes('estimate')) {
      return "Our pricing varies depending on the specific job, materials needed, and time required. To provide you with an accurate quote, could you please describe the project you need help with in detail?";
    }

    // Check for contact information
    if (lowerInput.includes('contact') || lowerInput.includes('phone') || lowerInput.includes('call') || lowerInput.includes('email')) {
      return "You can reach us by phone at (980) 316-7792 or by email at info@handymanofsouthcharlotte.com. Our AI assistant is available 24/7, and our service hours are typically 7 AM to 7 PM Monday through Saturday.";
    }

    // Check for location or service area
    if (lowerInput.includes('area') || lowerInput.includes('location') || lowerInput.includes('where') || lowerInput.includes('service area')) {
      return "We serve Charlotte, Ballantyne, Mint Hill, Pineville, and Matthews areas. Are you located in one of these areas?";
    }

    // Default response for other queries
    return "Thank you for your message. To better assist you, could you provide more details about your handyman needs? You can ask me about our services, pricing, availability, or scheduling an appointment.";
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputText.trim() === '') return;

    // Add user message
    const userMessage = {
      id: messages.length + 1,
      text: inputText,
      sender: 'user'
    };
    setMessages(prevMessages => [...prevMessages, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate AI typing with delay
    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        text: getAIResponse(inputText),
        sender: 'ai'
      };
      setMessages(prevMessages => [...prevMessages, aiResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // Random delay between 1-2 seconds
  };

  // Auto-scroll to bottom when messages change or AI is typing
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (isTyping) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isTyping]);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "AI Assistant Booking",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Handyman of South Charlotte"
    },
    "description": "24/7 AI-powered booking assistant for scheduling handyman services in Charlotte, NC and surrounding areas."
  };

  return (
    <>
      <SEO
        title="AI Assistant - 24/7 Booking for Handyman Services"
        description="Learn about our 24/7 AI assistant for booking handyman services in Charlotte. Available anytime, even at midnight, with instant scheduling and human backup."
        keywords="AI handyman booking, 24/7 handyman scheduling, handyman Charlotte booking, instant handyman booking, handyman AI assistant"
        schema={schema}
      />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-ai-purple to-bright-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Meet Our AI Assistant (Beta – We are still working to improve quality)
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Your 24/7 booking partner for handyman services in Charlotte. Schedule service anytime, get immediate answers, and connect with our team instantly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:+19803167792"
                  className="bg-white text-ai-purple px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-colors inline-flex items-center justify-center"
                >
                  <SafeIcon icon={FiPhone} className="mr-2 h-5 w-5" /> Call AI Assistant (Beta)
                </a>
                <a
                  href="/contact"
                  className="bg-bright-green text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-600 transition-colors inline-flex items-center justify-center"
                >
                  <SafeIcon icon={FiCalendar} className="mr-2 h-5 w-5" /> Contact Form
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className="bg-white rounded-full w-64 h-64 flex items-center justify-center shadow-xl">
                  <div className="bg-ai-purple rounded-full w-48 h-48 flex items-center justify-center animate-pulse-gentle">
                    <SafeIcon icon={FiMessageCircle} className="h-24 w-24 text-white" />
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 bg-bright-green rounded-full w-16 h-16 flex items-center justify-center">
                  <SafeIcon icon={FiPhone} className="h-8 w-8 text-white" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Chat Interface */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Try Our AI Assistant Now (Beta – We are still working to improve quality)</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ask about our services, get pricing information, or schedule an appointment
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-lg shadow-lg overflow-hidden"
            >
              <div className="bg-ai-purple p-4 text-white">
                <div className="flex items-center">
                  <SafeIcon icon={FiMessageCircle} className="h-6 w-6 mr-2" />
                  <h3 className="text-lg font-semibold">AI Assistant Chat (Beta)</h3>
                </div>
              </div>
              <div className="h-96 overflow-y-auto p-4 bg-gray-100">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} mb-4`}
                  >
                    <div
                      className={`${
                        message.sender === 'user'
                          ? 'bg-bright-green text-white'
                          : 'bg-white text-gray-800 border border-gray-200'
                      } rounded-lg py-2 px-4 max-w-[80%]`}
                    >
                      <p style={{ whiteSpace: 'pre-wrap' }}>{message.text}</p>
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex justify-start mb-4">
                    <div className="bg-white text-gray-800 border border-gray-200 rounded-lg py-2 px-4">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: '0.2s' }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: '0.4s' }}
                        ></div>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>
              <form onSubmit={handleSendMessage} className="p-4 bg-white border-t border-gray-200">
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Type your message here..."
                    className="flex-1 border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-ai-purple"
                  />
                  <button
                    type="submit"
                    className="bg-ai-purple text-white px-4 py-2 rounded-lg hover:bg-purple-600 transition-colors"
                  >
                    <SafeIcon icon={FiSend} className="h-5 w-5" />
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Type "transfer to human" at any time to connect with our team
                </p>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Common Questions You Can Ask:</h3>
              <div className="space-y-4">
                <div
                  className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors cursor-pointer"
                  onClick={() => setInputText("What services do you offer?")}
                >
                  <p className="text-gray-800 font-medium">What services do you offer?</p>
                </div>
                <div
                  className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors cursor-pointer"
                  onClick={() => setInputText("How much does furniture assembly cost?")}
                >
                  <p className="text-gray-800 font-medium">How much does furniture assembly cost?</p>
                </div>
                <div
                  className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors cursor-pointer"
                  onClick={() => setInputText("I need to schedule a drywall repair")}
                >
                  <p className="text-gray-800 font-medium">I need to schedule a drywall repair</p>
                </div>
                <div
                  className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors cursor-pointer"
                  onClick={() => setInputText("What areas do you serve?")}
                >
                  <p className="text-gray-800 font-medium">What areas do you serve?</p>
                </div>
                <div
                  className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors cursor-pointer"
                  onClick={() => setInputText("Transfer to human")}
                >
                  <p className="text-gray-800 font-medium">Transfer to human</p>
                </div>
              </div>
              <p className="mt-6 text-gray-600">
                Our AI assistant can answer questions about services, pricing, scheduling, and more. For complex projects,
                we recommend speaking with our team directly.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">AI Assistant Features (Beta)</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our AI assistant is designed to make booking handyman services as simple as possible
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-md"
              >
                <div className="bg-ai-purple p-3 rounded-lg w-fit mb-4">
                  <SafeIcon icon={feature.icon} className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Human Backup */}
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
                Human Touch When You Need It
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                While our AI assistant handles most booking needs perfectly, we understand that sometimes you may want to
                speak with a human. That's why we've made it simple to connect with our team.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Just say "Transfer to Human" at any point during your conversation with our AI assistant, and you'll be
                connected with a team member as soon as one is available. We're committed to providing both technological
                convenience and personal service.
              </p>
              <a
                href="tel:+19803167792"
                className="bg-ai-purple text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-600 transition-colors inline-flex items-center"
              >
                <SafeIcon icon={FiPhone} className="mr-2 h-5 w-5" /> Call Now (Beta – We are still working to improve quality)
              </a>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-lg p-8"
            >
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-ai-purple p-3 rounded-full mt-1">
                    <SafeIcon icon={FiMessageCircle} className="h-6 w-6 text-white" />
                  </div>
                  <div className="bg-gray-100 rounded-lg p-4 flex-1">
                    <p className="text-gray-700">I need help with furniture assembly.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-bright-green p-3 rounded-full mt-1">
                    <SafeIcon icon={FiMessageCircle} className="h-6 w-6 text-white" />
                  </div>
                  <div className="bg-gray-100 rounded-lg p-4 flex-1">
                    <p className="text-gray-700">
                      I'd be happy to help you with furniture assembly! Could you tell me what type of furniture you need
                      assembled and your location in Charlotte?
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-ai-purple p-3 rounded-full mt-1">
                    <SafeIcon icon={FiMessageCircle} className="h-6 w-6 text-white" />
                  </div>
                  <div className="bg-gray-100 rounded-lg p-4 flex-1">
                    <p className="text-gray-700">Transfer to Human please.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-bright-green p-3 rounded-full mt-1">
                    <SafeIcon icon={FiMessageCircle} className="h-6 w-6 text-white" />
                  </div>
                  <div className="bg-gray-100 rounded-lg p-4 flex-1">
                    <p className="text-gray-700">
                      I'll connect you with a human team member right away. Please hold for just a moment...
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-ai-purple">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Experience 24/7 Booking?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Try our AI assistant today and see how easy it is to book handyman services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+19803167792"
                className="bg-white text-ai-purple px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-50 transition-colors inline-flex items-center justify-center"
              >
                <SafeIcon icon={FiPhone} className="mr-2 h-5 w-5" /> Call AI Assistant (Beta)
              </a>
              <a
                href="/contact"
                className="bg-bright-green text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-600 transition-colors inline-flex items-center justify-center"
              >
                <SafeIcon icon={FiCalendar} className="mr-2 h-5 w-5" /> Contact Form
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default AIAssistant;