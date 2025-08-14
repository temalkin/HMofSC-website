import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import SEO from '../components/SEO';
import * as FiIcons from 'react-icons/fi';

const {
  FiHome,
  FiTool,
  FiPackage,
  FiMonitor,
  FiDroplet,
  FiGrid,
  FiCpu,
  FiClipboard,
  FiLayers,
  FiBox,
  FiCompass,
  FiShield,
  FiPhone,
} = FiIcons;

function ServicesOverview() {
  const serviceCategories = [
    {
      title: "Installation Services",
      services: [
        {
          id: "furniture-assembly",
          name: "Furniture Assembly",
          icon: FiPackage,
          description: "Professional furniture assembly and installation",
          path: "/services/furniture-assembly"
        },
        {
          id: "tv-mount-installation",
          name: "TV Mount Installation",
          icon: FiMonitor,
          description: "Secure TV mounting on any wall type with clean cable management",
          path: "/services/tv-mount-installation"
        },
        {
          id: "attic-ladder-installation",
          name: "Attic Ladder Installation",
          icon: FiCompass,
          description: "Safe and secure attic ladder installation",
          path: "/services/attic-ladder-installation"
        },
      ]
    },
    {
      title: "Repair Services",
      services: [
        {
          id: "general-home-repairs",
          name: "General Home Repairs",
          icon: FiTool,
          description: "All types of general home repair and maintenance",
          path: "/services/general-home-repairs"
        },
        {
          id: "drywall-installation-repair",
          name: "Drywall Installation & Repair",
          icon: FiGrid,
          description: "Professional drywall installation and repair services",
          path: "/services/drywall-installation-repair"
        },
        {
          id: "gutter-cleaning",
          name: "Gutter Cleaning & Maintenance",
          icon: FiDroplet,
          description: "Professional gutter cleaning and maintenance services",
          path: "/services/gutter-cleaning"
        },
      ]
    },
    {
      title: "Remodeling Services",
      services: [
        {
          id: "bathroom-remodeling",
          name: "Bathroom Remodeling",
          icon: FiLayers,
          description: "Transform your bathroom with professional remodeling",
          path: "/services/bathroom-remodeling"
        },
        {
          id: "countertop-installation",
          name: "Countertop Installation",
          icon: FiBox,
          description: "Expert installation of various countertop materials",
          path: "/services/countertop-installation"
        },
        {
          id: "comprehensive-home-renovations",
          name: "Comprehensive Home Renovations",
          icon: FiHome,
          description: "Full-scale home renovation and improvement projects",
          path: "/services/comprehensive-home-renovations"
        },
      ]
    },
    {
      title: "Cleaning & Maintenance",
      services: [
        {
          id: "dryer-vent-cleaning",
          name: "Dryer Vent Cleaning",
          icon: FiCpu,
          description: "Thorough cleaning of dryer vents for safety and efficiency",
          path: "/services/dryer-vent-cleaning"
        },
        {
          id: "pressure-washing",
          name: "Pressure Washing",
          icon: FiDroplet,
          description: "Professional pressure washing for exterior surfaces",
          path: "/services/pressure-washing"
        },
        {
          id: "commercial-property-maintenance",
          name: "Commercial Property Maintenance",
          icon: FiClipboard,
          description: "Comprehensive maintenance services for commercial properties",
          path: "/services/commercial-property-maintenance"
        },
      ]
    },
    {
      title: "Specialty Services",
      services: [
        {
          id: "carpentry-woodworking",
          name: "Carpentry & Woodworking",
          icon: FiTool,
          description: "Custom carpentry and woodworking solutions",
          path: "/services/carpentry-woodworking"
        },
        {
          id: "assisted-living-modifications",
          name: "Assisted Living Modifications",
          icon: FiShield,
          description: "Home modifications for aging in place and accessibility",
          path: "/services/assisted-living-modifications"
        },
      ]
    },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": serviceCategories.flatMap((category, categoryIndex) => 
      category.services.map((service, serviceIndex) => ({
        "@type": "ListItem",
        "position": categoryIndex * 10 + serviceIndex + 1,
        "item": {
          "@type": "Service",
          "name": service.name,
          "description": service.description,
          "provider": {
            "@type": "LocalBusiness",
            "name": "Handyman of South Charlotte"
          }
        }
      }))
    )
  };

  return (
    <>
      <SEO 
        title="Handyman Services in Charlotte, NC" 
        description="Browse our comprehensive list of handyman services in Charlotte, NC including installation, repair, remodeling, and maintenance services for your home or business."
        keywords="handyman services, home repair, installation services, remodeling, Charlotte NC"
        schema={schema}
      />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Our Handyman Services
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Professional handyman services in Charlotte for all your home repair and improvement needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {serviceCategories.map((category, categoryIndex) => (
              <div key={category.title} className="space-y-6">
                <motion.h2 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="text-3xl font-bold text-gray-900 border-b pb-4"
                >
                  {category.title}
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.services.map((service, serviceIndex) => (
                    <Link 
                      key={service.id} 
                      to={service.path} 
                      className="group"
                    >
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: serviceIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-gray-50 rounded-lg p-6 border border-gray-200 h-full transition-all duration-300 group-hover:shadow-lg group-hover:border-gray-300"
                      >
                        <div className="flex items-start space-x-4">
                          <div className="bg-bright-green p-3 rounded-lg">
                            <SafeIcon icon={service.icon} className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-bright-green transition-colors">
                              {service.name}
                            </h3>
                            <p className="text-gray-600">
                              {service.description}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-8 shadow-lg"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Need a service not listed here?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We offer many more services than what's listed. Contact us to discuss your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-bright-green text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-600 transition-colors"
              >
                Contact Us
              </Link>
              <a
                href="tel:+19803167792"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors inline-flex items-center justify-center gap-2"
              >
                <SafeIcon icon={FiPhone} className="w-5 h-5" />
                Call AI Assistant
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default ServicesOverview;