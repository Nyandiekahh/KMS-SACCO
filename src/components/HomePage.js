// src/components/HomePage.js
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from './Header';
import Contact from './Contact';
import Services from './Services';
import About from './About';
import Testimonials from './Testimonials';
import './HomePage.css';

const Homepage = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'services', 'stats', 'testimonials', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 150 && rect.bottom >= 150;
        }
        return false;
      });
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  const testimonials = [
    { name: 'Polycarp Kesa', text: 'KMS Sacco has redefined what community support means. Together, we are building a strong financial future for our members.' },
    { name: 'Sonia Kamori', text: 'The collaboration within KMS Sacco has inspired me to engage more actively in my financial growth. It’s a supportive environment that fosters success.' },
    { name: 'Einstein Mokua - Founder', text: 'As the founder, I am proud to see how KMS Sacco is empowering individuals. Our mission is to uplift everyone towards financial independence.' },
    { name: 'David Gitonga', text: 'KMS Sacco offers tools and education that truly make a difference. I’m grateful to be part of such an innovative community.' },
    { name: 'Oscar Kipkorir', text: 'The impact of KMS Sacco on my life has been profound. The resources provided have enhanced my financial decision-making.' },
  ];

  const openModal = (content) => {
    setModalContent(content);
    setShowModal(true);
  };

  return (
    <div className="homepage">
      <Header />
      <div className="content-container">
        <main>
          <motion.section
            id="hero"
            initial="hidden"
            animate={activeSection === 'hero' ? 'visible' : 'hidden'}
            variants={sectionVariants}
            className="hero"
          >
            <h1>Welcome to KMS Sacco</h1>
            <p>Your journey to financial empowerment begins here.</p>
            <button onClick={() => openModal('Join us today and experience the difference!')}>Get Started</button>
          </motion.section>

          <About openModal={openModal} />
          <Services openModal={openModal} />
          <Testimonials testimonials={testimonials} />
          <Contact />
        </main>
      </div>
      {/* Footer is removed from here */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => setShowModal(false)}>&times;</span>
            <p>{modalContent}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Homepage;
