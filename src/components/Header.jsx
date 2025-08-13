import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiMenu, FiX, FiTool, FiHome, FiUser, FiGrid, FiCalendar, FiPhone, FiHelpCircle, FiImage, FiStar, FiMessageCircle } = FiIcons;

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/', icon: FiHome },
    { name: 'About', href: '/about', icon: FiUser },
    { name: 'Services', href: '/services', icon: FiGrid },
    { name: 'Calculator', href: '/calculator', icon: FiMessageCircle },
    { name: 'Gallery', href: '/gallery', icon: FiImage },
    { name: 'Reviews', href: '/reviews', icon: FiStar },
    { name: 'FAQ', href: '/faq', icon: FiHelpCircle },
    { name: 'Contact', href: '/contact', icon: FiPhone },
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {/* Logo - занимает левую часть */}
          <Link to="/" className="flex items-center space-x-3 flex-shrink-0">
            <div className="bg-bright-green p-2 rounded-lg">
              <SafeIcon icon={FiTool} className="h-6 w-6 text-white" />
            </div>
            <div className="text-center">
              <h1 className="text-lg font-bold text-gray-800 leading-tight">
                Handyman of South Charlotte
              </h1>
              <p className="text-xs text-gray-600 leading-tight">
                Est. 2024 • 15 Years Experience
              </p>
            </div>
          </Link>

          {/* Desktop Navigation - занимает центр и растягивается */}
          <nav className="hidden lg:flex flex-1 justify-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors whitespace-nowrap ${
                  location.pathname === item.href
                    ? 'text-bright-green bg-green-50'
                    : 'text-gray-700 hover:text-bright-green hover:bg-gray-50'
                }`}
              >
                <SafeIcon icon={item.icon} className="h-4 w-4" />
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* Правая часть - для баланса */}
          <div className="flex-shrink-0 w-20 lg:w-24">
            {/* Можно добавить кнопку звонка или другую информацию */}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-bright-green hover:bg-gray-50"
          >
            <SafeIcon icon={isMenuOpen ? FiX : FiMenu} className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden pb-4 border-t border-gray-200"
          >
            <div className="pt-4 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    location.pathname === item.href
                      ? 'text-bright-green bg-green-50'
                      : 'text-gray-700 hover:text-bright-green hover:bg-gray-50'
                  }`}
                >
                  <SafeIcon icon={item.icon} className="h-5 w-5" />
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>
          </motion.nav>
        )}
      </div>
    </header>
  );
}

export default Header;