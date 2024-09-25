// src/components/Testimonials.js
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
      <div className="testimonial-carousel">
        <AnimatePresence>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              className="testimonial-item"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ delay: index * 0.2 }}
            >
              <p>"{testimonial.text}"</p>
              <h4>- {testimonial.name}</h4>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </motion.section>
  );
};

export default Testimonials;
