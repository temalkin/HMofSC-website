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
    try {
      const v = localStorage.getItem('aiTooltipDismissed');
      if (v === '1' || v === 'true') setTooltipDismissed(true);
    } catch {}
  }, []);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (tooltipDismissed) return;
    const hideTimer = setTimeout(() => {
      setShowTooltip(false);
    }, 10000);
    return () => clearTimeout(hideTimer);
  }, [tooltipDismissed]);

  useEffect(() => {
    if (tooltipDismissed) return;

    let inactivityTimer;
    let shakeTimer;

    const resetInactivityTimer = () => {
      if (inactivityTimer) clearTimeout(inactivityTimer);
      if (shakeTimer) clearTimeout(shakeTimer);

      inactivityTimer = setTimeout(() => {
        setShowTooltip(true);
        setTimeout(() => {
          setShowTooltip(false);
        }, 10000);
      }, 30000);

      shakeTimer = setTimeout(() => {
        setShouldShake(true);
        setTimeout(() => setShouldShake(false), 500);
      }, Math.random() * 5000 + 15000);
    };

    const events = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart'];
    events.forEach(event => {
      document.addEventListener(event, resetInactivityTimer, true);
    });

    resetInactivityTimer();

    return () => {
      if (inactivityTimer) clearTimeout(inactivityTimer);
      if (shakeTimer) clearTimeout(shakeTimer);
      events.forEach(event => {
        document.removeEventListener(event, resetInactivityTimer, true);
      });
    };
  }, [tooltipDismissed]);

  const handleCall = () => {
    window.location.href = 'tel:+19803167792';
  };

  if (!isMounted) return null;

  return createPortal(
    <div
      className="fixed z-50"
      style={{
        right: `max(1.5rem, env(safe-area-inset-right, 0px))`,
        bottom: `max(1.5rem, env(safe-area-inset-bottom, 0px))`,
      }}
    >
      <div className="relative">
        <motion.button
          onClick={handleCall}
          className={`relative z-10 bg-ai-purple hover:bg-purple-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 ${
            shouldShake ? 'animate-shake' : 'hover:scale-110'
          }`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          animate={shouldShake ? { x: [-5, 5, -5, 5, 0] } : {}}
          transition={{ duration: 0.5 }}
          aria-label="Call AI Assistant"
        >
          <SafeIcon icon={FiPhone} className="h-6 w-6" />
        </motion.button>

        <AnimatePresence>
          {showTooltip && !tooltipDismissed && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 8 }}
              className="absolute right-0 bg-white rounded-lg shadow-lg p-3 max-w-xs border border-gray-200"
              style={{ bottom: 'calc(100% + 12px)' }}
            >
              <button
                type="button"
                aria-label="Close"
                onClick={() => {
                  setTooltipDismissed(true);
                  setShowTooltip(false);
                  try {
                    localStorage.setItem('aiTooltipDismissed', '1');
                  } catch {}
                }}
                className="absolute top-2 right-2 p-1 rounded hover:bg-gray-100 text-gray-500 hover:text-gray-700"
              >
                <SafeIcon icon={FiX} className="h-4 w-4" />
              </button>

              <div className="flex items-start space-x-2 pr-6">
                <SafeIcon icon={FiMessageCircle} className="h-5 w-5 text-ai-purple mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    Call our AI Assistant (Beta – We are still working to improve quality)
                  </p>
                  <p className="text-xs text-gray-600">Just say "Transfer to ALEX" anytime!</p>
                </div>
              </div>

              <div
                className="absolute w-3 h-3 bg-white border-r border-b border-gray-200"
                style={{
                  bottom: -6,
                  right: 24,
                  transform: 'rotate(45deg)',
                }}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>,
    document.body
  );
}

export default FloatingCallButton;