import React from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../../common/SafeIcon';

const { FiTool, FiSettings, FiPaintBucket, FiHome } = FiIcons;

const MainCategoryStep = ({ selectedCategories, onCategoriesChange, onNext }) => {
  const categories = [
    {
      id: 'repairs',
      name: 'Repairs',
      icon: FiTool,
      description: 'Fix what\'s broken in your home',
      color: 'bg-red-50 border-red-200 hover:bg-red-100'
    },
    {
      id: 'installations',
      name: 'Installations',
      icon: FiSettings,
      description: 'Mount, install, and set up new items',
      color: 'bg-blue-50 border-blue-200 hover:bg-blue-100'
    },
    {
      id: 'painting',
      name: 'Painting & Finishing',
      icon: FiPaintBucket,
      description: 'Paint, stain, and beautify surfaces',
      color: 'bg-green-50 border-green-200 hover:bg-green-100'
    },
    {
      id: 'renovations',
      name: 'Renovations',
      icon: FiHome,
      description: 'Transform and upgrade your space',
      color: 'bg-purple-50 border-purple-200 hover:bg-purple-100'
    }
  ];

  const toggleCategory = (categoryId) => {
    const newSelection = selectedCategories.includes(categoryId)
      ? selectedCategories.filter(id => id !== categoryId)
      : [...selectedCategories, categoryId];
    
    onCategoriesChange(newSelection);
  };

  const canProceed = selectedCategories.length > 0;

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          What type of work do you need help with?
        </h2>
        <p className="text-gray-600">
          Select all that apply - you can choose multiple categories
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {categories.map((category, index) => {
          const isSelected = selectedCategories.includes(category.id);
          
          return (
            <motion.button
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => toggleCategory(category.id)}
              className={`p-6 rounded-xl border-2 text-left transition-all duration-300 ${
                isSelected
                  ? 'border-blue-500 bg-blue-50 shadow-lg'
                  : category.color
              }`}
              aria-pressed={isSelected}
            >
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-lg ${
                  isSelected ? 'bg-blue-500 text-white' : 'bg-white'
                }`}>
                  <SafeIcon icon={category.icon} className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {category.description}
                  </p>
                </div>
                {isSelected && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="text-blue-500"
                  >
                    <SafeIcon icon={FiIcons.FiCheck} className="w-6 h-6" />
                  </motion.div>
                )}
              </div>
            </motion.button>
          );
        })}
      </div>

      {canProceed && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex justify-center pt-6"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onNext}
            className="bg-blue-600 text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
          >
            <span>Continue</span>
            <SafeIcon icon={FiIcons.FiArrowRight} className="w-4 h-4" />
          </motion.button>
        </motion.div>
      )}
    </div>
  );
};

export default MainCategoryStep;