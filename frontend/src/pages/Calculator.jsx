import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import ServiceSelector from '../components/ServiceSelector';

function Calculator() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Handyman Cost Calculator',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Handyman of South Charlotte',
    },
  };

  return (
    <>
      <SEO
        title="Cost Calculator"
        description="Estimate your handyman project cost or book hourly service. Use our dynamic form or AI assistant to get a fast quote."
        keywords="handyman cost calculator, handyman estimate, book handyman, AI assistant"
        schema={schema}
      />

      <section className="py-10 bg-gradient-to-r from-ai-purple to-bright-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">Cost Calculator</h1>
            <p className="text-white/90 text-lg">Select scope, hourly, or let AI help you describe the job.</p>
          </motion.div>
        </div>
      </section>

      <ServiceSelector />
    </>
  );
}

export default Calculator;


