import React from 'react';
import { motion } from 'framer-motion';

const StepIndicator = ({ currentStep, totalSteps, onStepClick }) => {
  const steps = [
    'Service Type',
    'Service Group',
    'Details',
    'Project Info',
    'Contact'
  ];

  return (
    <div className="mb-8">
      <div className="flex justify-center">
        <div className="flex items-center space-x-2 sm:space-x-4">
          {steps.map((step, index) => {
            const stepNumber = index + 1;
            const isActive = stepNumber === currentStep;
            const isCompleted = stepNumber < currentStep;
            const isClickable = stepNumber < currentStep;

            return (
              <div key={stepNumber} className="flex items-center">
                <motion.button
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-lg'
                      : isCompleted
                      ? 'bg-green-500 text-white'
                      : 'bg-gray-200 text-gray-500'
                  } ${isClickable ? 'cursor-pointer hover:opacity-80' : 'cursor-default'}`}
                  whileHover={isClickable ? { scale: 1.05 } : {}}
                  whileTap={isClickable ? { scale: 0.95 } : {}}
                  onClick={() => isClickable && onStepClick(stepNumber)}
                  disabled={!isClickable}
                  aria-label={`Go to ${step} step`}
                >
                  {isCompleted ? '✓' : stepNumber}
                </motion.button>

                <div className="ml-2 hidden sm:block">
                  <motion.button
                    className={`text-sm font-medium ${
                      isActive
                        ? 'text-blue-600'
                        : isCompleted
                        ? 'text-green-600'
                        : 'text-gray-400'
                    } ${isClickable ? 'cursor-pointer hover:underline' : 'cursor-default'}`}
                    onClick={() => isClickable && onStepClick(stepNumber)}
                    disabled={!isClickable}
                  >
                    {step}
                  </motion.button>
                </div>

                {index < steps.length - 1 && (
                  <div
                    className={`w-4 sm:w-8 h-0.5 mx-1 sm:mx-4 ${
                      isCompleted ? 'bg-green-500' : 'bg-gray-200'
                    }`}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StepIndicator;