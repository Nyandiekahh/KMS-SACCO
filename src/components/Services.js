// src/components/Services.js
import React from 'react';
import { motion } from 'framer-motion';

const Services = ({ openModal }) => {
  const services = [
    'Savings Accounts',
    'Personal Loans',
    'Business Loans',
    'Investment Options',
    'Financial Education',
    'Mobile Banking',
    'Insurance',
    'Retirement Planning'
  ];

  return (
    <motion.section
      id="services"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
      }}
      className="services"
    >
      <h2>Our Services</h2>
      <div className="service-grid">
        {services.map((service, index) => (
          <motion.div
            key={service}
            className="service-item"
            whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(0,0,0,0.1)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <h3>{service}</h3>
            <p>Experience the future of finance with our {service.toLowerCase()}. Tailored to meet your unique needs and goals.</p>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => openModal(`Discover how our ${service.toLowerCase()} can benefit you.`)}
            >
              Learn More
            </motion.button>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Services;
