import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiCheckCircle, FiMail, FiPhone, FiCalendar } = FiIcons;

const ConfirmationStep = ({ formData, isHourly = false }) => {
  const name = isHourly ? formData.hourlyFullName : formData.fullName;
  
  return (
    <div className="text-center space-y-8">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      >
        <SafeIcon icon={FiCheckCircle} className="w-24 h-24 text-green-500 mx-auto" />
      </motion.div>

      <div>
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Request Submitted Successfully!
        </h2>
        <p className="text-xl text-gray-600 mb-2">
          Thank you, {name}!
        </p>
        <p className="text-gray-600">
          We've received your {isHourly ? 'hourly service' : 'service'} request and will get back to you soon.
        </p>
      </div>

      <div className="bg-blue-50 rounded-xl p-6 space-y-4">
        <h3 className="text-xl font-bold text-gray-800 mb-4">
          What happens next?
        </h3>
        <div className="space-y-3 text-left">
          <div className="flex items-center space-x-3">
            <SafeIcon icon={FiMail} className="w-5 h-5 text-blue-500" />
            <span className="text-gray-700">
              You'll receive a confirmation email shortly
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <SafeIcon icon={FiPhone} className="w-5 h-5 text-blue-500" />
            <span className="text-gray-700">
              Our team will call you within 24 hours to discuss your project
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <SafeIcon icon={FiCalendar} className="w-5 h-5 text-blue-500" />
            <span className="text-gray-700">
              We'll schedule a convenient time for your service
            </span>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 rounded-xl p-6">
        <h4 className="text-lg font-semibold text-gray-800 mb-2">
          Need immediate assistance?
        </h4>
        <p className="text-gray-600 mb-4">
          Call us directly at
        </p>
        <a
          href="tel:+19803167792"
          className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
        >
          (980) 316-7792
        </a>
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => window.location.reload()}
        className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:bg-blue-700 transition-colors"
      >
        Submit Another Request
      </motion.button>
    </div>
  );
};

export default ConfirmationStep;