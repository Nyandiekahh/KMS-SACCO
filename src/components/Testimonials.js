// src/components/Testimonials.js
import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = ({ testimonials }) => {
  return (
    <motion.section
      id="testimonials"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
      }}
      className="testimonials"
    >
      <h2>What Our Members Say</h2>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="testimonial-item"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <p>"{testimonial.text}"</p>
            <p>- {testimonial.name}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Testimonials;
