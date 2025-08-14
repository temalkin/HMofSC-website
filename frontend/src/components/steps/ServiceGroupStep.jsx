import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiArrowLeft, FiArrowRight, FiCheck } = FiIcons;

const ServiceGroupStep = ({ 
  mainCategories, 
  selectedGroups, 
  onGroupsChange, 
  onNext, 
  onPrev, 
  serviceData 
}) => {
  const toggleGroup = (groupId) => {
    const newSelection = selectedGroups.includes(groupId)
      ? selectedGroups.filter(id => id !== groupId)
      : [...selectedGroups, groupId];
    
    onGroupsChange(newSelection);
  };

  const availableGroups = mainCategories.flatMap(categoryId => 
    serviceData[categoryId] ? Object.keys(serviceData[categoryId]) : []
  );

  const getGroupDisplayName = (groupId) => {
    for (const categoryId of mainCategories) {
      if (serviceData[categoryId] && serviceData[categoryId][groupId]) {
        return serviceData[categoryId][groupId].name;
      }
    }
    return groupId;
  };

  const getCategoryName = (categoryId) => {
    switch(categoryId) {
      case 'repairs': return 'Repairs';
      case 'installations': return 'Installations';
      case 'painting': return 'Painting & Finishing';
      case 'renovations': return 'Renovations';
      default: return categoryId;
    }
  };

  // Group services by their category for better organization
  const groupedServices = {};
  mainCategories.forEach(categoryId => {
    if (serviceData[categoryId]) {
      const categoryGroups = Object.keys(serviceData[categoryId]);
      if (categoryGroups.length > 0) {
        groupedServices[categoryId] = categoryGroups;
      }
    }
  });

  const canProceed = selectedGroups.length > 0;

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Which specific services do you need?
        </h2>
        <p className="text-gray-600">
          Select all services that apply to your project
        </p>
      </div>

      {Object.entries(groupedServices).map(([categoryId, groups], categoryIndex) => (
        <div key={categoryId} className="space-y-4">
          <motion.h3 
            className="text-xl font-bold text-gray-700 border-b pb-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: categoryIndex * 0.1 }}
          >
            {getCategoryName(categoryId)}
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {groups.map((groupId, index) => {
              const isSelected = selectedGroups.includes(groupId);
              
              return (
                <motion.button
                  key={groupId}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: (categoryIndex * 0.1) + (index * 0.05) }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => toggleGroup(groupId)}
                  className={`p-4 rounded-lg border-2 text-left transition-all duration-300 ${
                    isSelected
                      ? 'border-blue-500 bg-blue-50 shadow-md'
                      : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-sm'
                  }`}
                  aria-pressed={isSelected}
                >
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-semibold text-gray-800">
                      {getGroupDisplayName(groupId)}
                    </h4>
                    {isSelected && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="text-blue-500"
                      >
                        <SafeIcon icon={FiCheck} className="w-5 h-5" />
                      </motion.div>
                    )}
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      ))}

      <div className="flex justify-between pt-6">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onPrev}
          className="flex items-center space-x-2 bg-gray-200 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-300 transition-colors"
        >
          <SafeIcon icon={FiArrowLeft} className="w-4 h-4" />
          <span>Back</span>
        </motion.button>

        {canProceed && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onNext}
            className="flex items-center space-x-2 bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:bg-blue-700 transition-colors"
          >
            <span>Continue</span>
            <SafeIcon icon={FiArrowRight} className="w-4 h-4" />
          </motion.button>
        )}
      </div>
    </div>
  );
};

export default ServiceGroupStep;