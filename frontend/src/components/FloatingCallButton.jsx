import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiPhone, FiMessageCircle, FiX } = FiIcons;

function FloatingCallButton() {
  const [showTooltip, setShowTooltip] = useState(true);
  const [shouldShake, setShouldShake] = useState(false);
  const [tooltipDismissed, setTooltipDismissed] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Load persisted dismissal state
    try {
      const v = localStorage.getItem('aiTooltipDismissed');
      if (v === '1' || v === 'true') setTooltipDismissed(true);
    } catch {}
  }, []);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (tooltipDismissed) return; // Do nothing if user closed it
    // Auto-hide tooltip after 10 seconds 
    const hideTimer = setTimeout(() => {
      setShowTooltip(false);
    }, 10000);

    return () => clearTimeout(hideTimer);
  }, [tooltipDismissed]);

  useEffect(() => {
    if (tooltipDismissed) return; // Don't reshow if dismissed
    // Show tooltip again after 30 seconds of inactivity
    let inactivityTimer;
    let shakeTimer;

    const resetInactivityTimer = () => {
      clearTimeout(inactivityTimer);
      clearTimeout(shakeTimer);

      inactivityTimer = setTimeout(() => {
        setShowTooltip(true);
        // Hide again after 10 seconds
        setTimeout(() => {
          setShowTooltip(false);
        }, 10000);
      }, 30000);

      // Shake animation every 15-20 seconds
      shakeTimer = setTimeout(() => {
        setShouldShake(true);
        setTimeout(() => setShouldShake(false), 500);
      }, Math.random() * 5000 + 15000); // 15-20 seconds
    };

    // Listen for user activity
    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'];
    events.forEach(event => {
      document.addEventListener(event, resetInactivityTimer, true);
    });

    resetInactivityTimer();

    return () => {
      clearTimeout(inactivityTimer);
      clearTimeout(shakeTimer);
      events.forEach(event => {
        document.removeEventListener(event, resetInactivityTimer, true);
      });
    };
  }, [tooltipDismissed]);

  const handleCall = () => {
    // In a real implementation, this would initiate a call to the AI assistant
    window.location.href = 'tel:+19803167792';
  };

  if (!isMounted) return null;

  return createPortal(
    <div
      className="fixed bottom-6 right-6 z-50 relative"
      style={{ position: 'fixed', right: '1.5rem', bottom: '1.5rem', left: 'auto' }}
    >
      {/* Call Button */}
      <motion.button
        onClick={handleCall}
        className={`bg-ai-purple hover:bg-purple-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 ${
          shouldShake ? 'animate-shake' : 'hover:scale-110'
        }`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={shouldShake ? { x: [-5, 5, -5, 5, 0] } : {}}
        transition={{ duration: 0.5 }}
      >
        <SafeIcon icon={FiPhone} className="h-6 w-6" />
      </motion.button>

      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && !tooltipDismissed && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.8, x: 20 }}
            className="absolute bottom-16 right-0 bg-white rounded-lg shadow-lg p-3 mb-2 max-w-xs relative"
          >
            <button
              type="button"
              aria-label="Close"
              onClick={() => {
                setTooltipDismissed(true);
                setShowTooltip(false);
                try { localStorage.setItem('aiTooltipDismissed', '1'); } catch {}
              }}
              className="absolute top-2 right-2 p-1 rounded hover:bg-gray-100 text-gray-500 hover:text-gray-700"
            >
              <SafeIcon icon={FiX} className="h-4 w-4" />
            </button>
            <div className="flex items-start space-x-2">
              <SafeIcon icon={FiMessageCircle} className="h-5 w-5 text-ai-purple mt-0.5" />
              <div>
                <p className="text-sm font-medium text-gray-900">Call our AI Assistant (Beta – We are still working to improve quality)</p>
                <p className="text-xs text-gray-600">Just say "Transfer to Human" anytime!</p>
              </div>
            </div>
            {/* Arrow pointing to button */}
            <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white transform rotate-45 border-r border-b border-gray-200"></div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>,
    document.body
  );
}

export default FloatingCallButton;