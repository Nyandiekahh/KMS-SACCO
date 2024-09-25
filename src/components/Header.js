import React from 'react';
import { motion } from 'framer-motion';
import './Header.css'; // Ensure you have a CSS file for your Header styling

const Header = () => {
  return (
    <header className="header">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="logo"
      >
        KMS Sacco
      </motion.div>
      <nav>
        <ul>
          {['Home', 'About', 'Services', 'Stats', 'Testimonials', 'Contact'].map((item) => (
            <motion.li
              key={item}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href={`#${item.toLowerCase()}`}>{item}</a>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
