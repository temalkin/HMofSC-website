import React, { useState } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiArrowLeft, FiArrowRight, FiCheck, FiEdit3, FiX } = FiIcons;

const DetailedServiceStep = ({ 
  serviceGroups, 
  selectedServices, 
  onServicesChange, 
  onNext, 
  onPrev, 
  serviceData 
}) => {
  const [customDescriptions, setCustomDescriptions] = useState({});
  const [activeGroup, setActiveGroup] = useState(null);

  const toggleService = (serviceId, customDescription = '') => {
    const serviceWithDescription = customDescription 
      ? `${serviceId}|${customDescription}`
      : serviceId;
    
    const newSelection = selectedServices.some(s => s.startsWith(serviceId))
      ? selectedServices.filter(s => !s.startsWith(serviceId))
      : [...selectedServices.filter(s => !s.startsWith(serviceId)), serviceWithDescription];
    
    console.log('toggleService:', {
      serviceId,
      customDescription,
      serviceWithDescription,
      oldSelection: selectedServices,
      newSelection
    });
    
    onServicesChange(newSelection);
  };

  const handleCustomInput = (groupId, value) => {
    setCustomDescriptions(prev => ({
      ...prev,
      [groupId]: value
    }));
  };

  const addCustomService = (groupId) => {
    const description = customDescriptions[groupId];
    console.log('Adding custom service:', groupId, 'description:', description);
    if (description && description.trim()) {
      const customServiceId = `${groupId}_custom|${description.trim()}`;
      console.log('Custom service ID created:', customServiceId);
      toggleService(`${groupId}_custom`, description.trim());
      setCustomDescriptions(prev => ({
        ...prev,
        [groupId]: ''
      }));
    }
  };

  const getAvailableServices = () => {
    const services = [];
    
    serviceGroups.forEach(groupId => {
      // Find the group in serviceData
      for (const categoryId in serviceData) {
        if (serviceData[categoryId][groupId]) {
          const group = serviceData[categoryId][groupId];
          services.push({
            groupId,
            groupName: group.name,
            options: group.options
          });
          break;
        }
      }
    });
    
    return services;
  };

  const isServiceSelected = (serviceId) => {
    return selectedServices.some(s => s.startsWith(serviceId));
  };

  // Get custom services for display
  const getCustomServices = () => {
    return selectedServices
      .filter(service => service.includes('|') && service.includes('_custom'))
      .map(service => {
        const [serviceId, description] = service.split('|', 2);
        const groupId = serviceId.replace('_custom', '');
        return {
          id: service,
          groupId,
          description
        };
      });
  };

  const removeCustomService = (serviceId) => {
    const newSelection = selectedServices.filter(s => s !== serviceId);
    onServicesChange(newSelection);
  };

  const canProceed = selectedServices.length > 0;
  const availableServices = getAvailableServices();

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Tell us more about your project
        </h2>
        <p className="text-gray-600">
          Select specific details for each service you need
        </p>
      </div>

      {/* Service group tabs for mobile */}
      {availableServices.length > 1 && (
        <div className="flex overflow-x-auto pb-2 mb-4 md:hidden">
          {availableServices.map((service, index) => (
            <button
              key={service.groupId}
              onClick={() => setActiveGroup(service.groupId)}
              className={`flex-shrink-0 px-4 py-2 mr-2 rounded-lg font-medium transition-colors ${
                activeGroup === service.groupId || (activeGroup === null && index === 0)
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {service.groupName}
            </button>
          ))}
        </div>
      )}

      {availableServices.map((service, groupIndex) => {
        // For mobile, only show the active group or the first group if none is active
        const isVisible = window.innerWidth >= 768 || 
                         activeGroup === service.groupId || 
                         (activeGroup === null && groupIndex === 0);
        
        return (
          <motion.div
            key={service.groupId}
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: isVisible ? 1 : 0,
              y: isVisible ? 0 : 20,
              height: isVisible ? 'auto' : 0,
              display: isVisible ? 'block' : 'none'
            }}
            transition={{ delay: groupIndex * 0.1 }}
            className="bg-gray-50 rounded-xl p-6"
          >
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              {service.groupName}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {service.options.map((option, optionIndex) => {
                const serviceId = `${service.groupId}_${optionIndex}`;
                const isSelected = isServiceSelected(serviceId);
                
                return (
                  <motion.button
                    key={optionIndex}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: (groupIndex * 0.1) + (optionIndex * 0.05) }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => toggleService(serviceId)}
                    className={`p-4 rounded-lg border-2 text-left transition-all duration-300 ${
                      isSelected
                        ? 'border-blue-500 bg-blue-50 shadow-md'
                        : 'border-gray-200 bg-white hover:border-gray-300'
                    }`}
                    aria-pressed={isSelected}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-gray-800 font-medium">{option}</span>
                      {isSelected && (
                        <SafeIcon icon={FiCheck} className="w-5 h-5 text-blue-500" />
                      )}
                    </div>
                  </motion.button>
                );
              })}
            </div>

            {/* Custom Description Input */}
            <div className="mt-4 p-4 bg-white rounded-lg border border-gray-200">
              <div className="flex items-center space-x-2 mb-2">
                <SafeIcon icon={FiEdit3} className="w-4 h-4 text-gray-500" />
                <span className="text-sm font-medium text-gray-700">
                  Other - Describe here
                </span>
              </div>
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="Describe your specific needs..."
                  value={customDescriptions[service.groupId] || ''}
                  onChange={(e) => handleCustomInput(service.groupId, e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      addCustomService(service.groupId);
                    }
                  }}
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => addCustomService(service.groupId)}
                  disabled={!customDescriptions[service.groupId]?.trim()}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                >
                  Add
                </motion.button>
              </div>
            </div>
          </motion.div>
        );
      })}

      {/* Display Added Custom Services */}
      {getCustomServices().length > 0 && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-800">Your Custom Services:</h3>
          <div className="space-y-2">
            {getCustomServices().map((customService, index) => (
              <motion.div
                key={customService.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center justify-between bg-green-50 border border-green-200 rounded-lg p-3"
              >
                <div className="flex items-center space-x-2">
                  <SafeIcon icon={FiCheck} className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-medium text-gray-800">
                    {customService.description}
                  </span>
                </div>
                <button
                  onClick={() => removeCustomService(customService.id)}
                  className="p-1 rounded-full hover:bg-red-100 text-red-500 hover:text-red-700 transition-colors"
                  aria-label="Remove custom service"
                >
                  <SafeIcon icon={FiX} className="w-4 h-4" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      )}

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

export default DetailedServiceStep;