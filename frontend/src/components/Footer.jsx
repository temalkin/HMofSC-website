import React from 'react';
import { Link } from 'react-router-dom';
import SafeIcon from '../common/SafeIcon';
import * as FiIcons from 'react-icons/fi';

const { FiTool, FiPhone, FiMail, FiMapPin, FiClock } = FiIcons;

function Footer() {
  const services = [
    'Furniture Assembly',
    'Drywall Repair',
    'TV Mount Installation',
    'Pressure Washing',
    'Gutter Cleaning',
    'Tiling Services',
  ];

  const areas = [
    'Charlotte, NC',
    'Ballantyne',
    'Mint Hill',
    'Pineville',
    'Matthews',
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-bright-green p-2 rounded-lg">
                <SafeIcon icon={FiTool} className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold">Handyman of South Charlotte</h3>
                <p className="text-sm text-gray-400">Est. 2024 • 15 Years Experience</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4">
              Owner-led, detail-focused service with real solutions built for everyday comfort and long-term reliability.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-bright-green transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-bright-green transition-colors">All Services</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-bright-green transition-colors">Contact Us</Link></li>
              <li><Link to="/gallery" className="text-gray-300 hover:text-bright-green transition-colors">Gallery</Link></li>
              <li><Link to="/reviews" className="text-gray-300 hover:text-bright-green transition-colors">Reviews</Link></li>
              <li><Link to="/faq" className="text-gray-300 hover:text-bright-green transition-colors">FAQ</Link></li>
              <li><Link to="/privacy" className="text-gray-300 hover:text-bright-green transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-gray-300 hover:text-bright-green transition-colors">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Popular Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Popular Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-300">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Service Areas */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact & Areas</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <SafeIcon icon={FiPhone} className="h-4 w-4 text-bright-green" />
                <span className="text-gray-300">(980) 316-7792</span>
              </div>
              <div className="flex items-center space-x-2">
                <SafeIcon icon={FiMail} className="h-4 w-4 text-bright-green" />
                <span className="text-gray-300">info@handymanofsouthcharlotte.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <SafeIcon icon={FiMapPin} className="h-4 w-4 text-bright-green mt-0.5" />
                <div>
                  <p className="text-gray-300 text-sm">Service Areas:</p>
                  <ul className="text-gray-400 text-sm space-y-1">
                    {areas.map((area) => (
                      <li key={area}>{area}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Handyman of South Charlotte. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Professional handyman services in Charlotte, Ballantyne, Mint Hill, Pineville, and Matthews.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;