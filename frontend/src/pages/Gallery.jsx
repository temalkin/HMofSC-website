import React from 'react';
import { motion } from 'framer-motion';
import SafeIcon from '../common/SafeIcon';
import SEO from '../components/SEO';
import * as FiIcons from 'react-icons/fi';

const { FiImage, FiZoomIn, FiX, FiPhone, FiCalendar } = FiIcons;

function Gallery() {
  const [selectedImage, setSelectedImage] = React.useState(null);

  const galleryCategories = [
    {
      title: 'Bathroom Remodels',
      images: [
        {
          url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          alt: 'Modern bathroom renovation with walk-in shower',
          description: 'Complete bathroom renovation with custom tile work and walk-in shower'
        },
        {
          url: 'https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          alt: 'Bathroom vanity installation',
          description: 'Custom bathroom vanity installation with dual sinks'
        },
        {
          url: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          alt: 'Small bathroom renovation',
          description: 'Small bathroom renovation with space-saving fixtures'
        }
      ]
    },
    {
      title: 'Flooring Projects',
      images: [
        {
          url: 'https://images.unsplash.com/photo-1581858726788-75bc0f6a952d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          alt: 'Hardwood flooring installation',
          description: 'Hardwood flooring installation in living room'
        },
        {
          url: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          alt: 'Tile flooring in kitchen',
          description: 'Custom tile flooring installation in kitchen'
        },
        {
          url: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          alt: 'Luxury vinyl plank flooring',
          description: 'Luxury vinyl plank flooring installation in dining room'
        }
      ]
    },
    {
      title: 'Furniture Assembly',
      images: [
        {
          url: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          alt: 'Office desk assembly',
          description: 'Professional assembly of complex office furniture'
        },
        {
          url: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          alt: 'Living room furniture setup',
          description: 'Complete living room furniture assembly and setup'
        },
        {
          url: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          alt: 'Bedroom furniture assembly',
          description: 'Bedroom furniture assembly including bed frame and dressers'
        }
      ]
    },
    {
      title: 'Home Maintenance',
      images: [
        {
          url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          alt: 'Gutter cleaning',
          description: 'Professional gutter cleaning and maintenance'
        },
        {
          url: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          alt: 'Pressure washing',
          description: 'Driveway and exterior pressure washing'
        },
        {
          url: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
          alt: 'Door repair and refinishing',
          description: 'Front door repair and refinishing'
        }
      ]
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "ImageGallery",
    "about": {
      "@type": "Service",
      "name": "Handyman of South Charlotte - Project Gallery",
      "description": "Gallery of completed handyman projects in Charlotte, NC including bathroom remodels, flooring installation, furniture assembly, and home maintenance."
    }
  };

  return (
    <>
      <SEO
        title="Project Gallery - Handyman of South Charlotte"
        description="Browse our gallery of completed handyman projects in Charlotte, NC. See before and after photos of bathroom remodels, flooring installations, furniture assembly, and more."
        keywords="handyman projects, bathroom remodel photos, flooring installation gallery, furniture assembly Charlotte, handyman before after"
        schema={schema}
      />

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-bright-green to-light-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Project Gallery
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Browse our completed projects to see the quality of our work
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {galleryCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-3xl font-bold text-gray-900 mb-6"
              >
                {category.title}
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.images.map((image, imageIndex) => (
                  <motion.div
                    key={imageIndex}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: imageIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="overflow-hidden rounded-lg shadow-lg"
                  >
                    <div className="relative group cursor-pointer" onClick={() => setSelectedImage(image)}>
                      <img
                        src={image.url}
                        alt={image.alt}
                        className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <SafeIcon icon={FiZoomIn} className="h-10 w-10 text-white" />
                      </div>
                    </div>
                    <div className="p-4 bg-white">
                      <p className="text-gray-800 font-medium">{image.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="max-w-5xl w-full relative">
            <button 
              className="absolute top-4 right-4 bg-white rounded-full p-2"
              onClick={() => setSelectedImage(null)}
            >
              <SafeIcon icon={FiX} className="h-6 w-6 text-gray-900" />
            </button>
            <img
              src={selectedImage.url}
              alt={selectedImage.alt}
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
            <div className="bg-white p-4 rounded-b-lg">
              <p className="text-gray-900 font-medium">{selectedImage.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready for Your Project?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Let us bring the same quality craftsmanship to your home. 
              Book your service today and see why our customers love our work!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="contact#/contact"
                className="bg-bright-green text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-600 transition-colors inline-flex items-center justify-center"
              >
                <SafeIcon icon={FiCalendar} className="mr-2 h-5 w-5" />
                Contact Us
              </a>
              <a
                href="tel:+19803167792"
                className="bg-ai-purple text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-600 transition-colors inline-flex items-center justify-center"
              >
                <SafeIcon icon={FiPhone} className="mr-2 h-5 w-5" />
                Call for Consultation
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Bookmark CTA */}
      <section className="py-8 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg font-semibold text-bright-green">
            Bookmark us to keep your handyman in your pocket!
          </p>
        </div>
      </section>
    </>
  );
}

export default Gallery;