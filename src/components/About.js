// src/components/About.js
import React from 'react';
import { motion } from 'framer-motion';

const About = ({ openModal }) => {
  return (
    <motion.section
      id="about"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
      }}
      className="about"
    >
      <h2>About KMS Sacco</h2>
      <p>KMS Sacco is a cutting-edge financial cooperative dedicated to empowering our members through innovative savings and credit solutions. Founded in 2022 having only two members, we've grown to 5 Board members and serving over 15 satisfied customers, leveraging technology to provide seamless, accessible financial services.</p>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => openModal('Learn more about our mission, vision, and the team behind KMS Sacco.')}
        className="learn-more-button"
      >
        Learn More
      </motion.button>
    </motion.section>
  );
};

export default About;
