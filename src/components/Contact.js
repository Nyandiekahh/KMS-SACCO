import React from 'react';
import { motion } from 'framer-motion';
import './Contact.css'; // Create a corresponding CSS file for styling

const Contact = () => {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      className="contact"
    >
      <h2>Get in Touch</h2>
      <form className="contact-form">
        <motion.input whileFocus={{ scale: 1.05 }} type="text" placeholder="Name" required />
        <motion.input whileFocus={{ scale: 1.05 }} type="email" placeholder="Email" required />
        <motion.textarea whileFocus={{ scale: 1.05 }} placeholder="Message" required />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
        >
          Send Message
        </motion.button>
      </form>
    </motion.section>
  );
};

export default Contact;
