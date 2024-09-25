// src/components/HomePage.js
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faPiggyBank, faHandshake, faComments, faLightbulb, faUserShield } from '@fortawesome/free-solid-svg-icons';
import './HomePage.css';
import Header from './Header';
import Footer from './Footer';
import Contact from './Contact';
import Testimonials from './Testimonials'; // Import the Testimonials component

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

  const statsData = [
    { label: 'Members', value: '25,000+', icon: faHandshake },
    { label: 'Total Savings', value: '$50M+', icon: faPiggyBank },
    { label: 'Loans Disbursed', value: '$100M+', icon: faChartLine },
    { label: 'Customer Satisfaction', value: '98%', icon: faComments },
    { label: 'Success Stories', value: '500+', icon: faLightbulb },
    { label: 'Award Winning', value: '5', icon: faUserShield },
  ];

  const testimonials = [
    { name: 'John Doe', text: 'KMS Sacco has transformed my financial life. Their innovative services and supportive community have helped me achieve my goals faster than I ever thought possible.' },
    { name: 'Jane Smith', text: 'I\'ve been a member of KMS Sacco for over 5 years now, and I couldn\'t be happier. The digital-first approach makes managing my finances a breeze!' },
    { name: 'Michael Johnson', text: 'The financial education programs offered by KMS Sacco have been invaluable. I feel more confident and in control of my financial future.' },
    { name: 'Emily Davis', text: 'KMS Sacco offers a unique approach to financial wellness. I highly recommend their services to anyone looking to improve their financial literacy.' },
    { name: 'Chris Brown', text: 'Joining KMS Sacco was one of the best decisions I made. Their support and resources have been incredible!' },
  ];

  const openModal = (content) => {
    setModalContent(content);
    setShowModal(true);
  };

  return (
    <div className="homepage">
      <Header />
      <main>
        <motion.section
          id="hero"
          initial="hidden"
          animate={activeSection === 'hero' ? 'visible' : 'hidden'}
          variants={sectionVariants}
          className="hero"
        >
          <h1>Welcome to KMS Sacco</h1>
          <p>Empowering Your Financial Future with Innovative Solutions</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => openModal('Join KMS Sacco today and start your journey towards financial freedom!')}
            className="cta-button"
          >
            Join Now
          </motion.button>
        </motion.section>

        <motion.section
          id="about"
          initial="hidden"
          animate={activeSection === 'about' ? 'visible' : 'hidden'}
          variants={sectionVariants}
          className="about"
        >
          <h2>About KMS Sacco</h2>
          <p>KMS Sacco is a cutting-edge financial cooperative dedicated to empowering our members through innovative savings and credit solutions. Founded in 2010, we've grown to serve over 25,000 members, leveraging technology to provide seamless, accessible financial services.</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => openModal('Learn more about our mission, vision, and the team behind KMS Sacco.')}
            className="learn-more-button"
          >
            Learn More
          </motion.button>
        </motion.section>

        <motion.section
          id="services"
          initial="hidden"
          animate={activeSection === 'services' ? 'visible' : 'hidden'}
          variants={sectionVariants}
          className="services"
        >
          <h2>Our Services</h2>
          <div className="service-grid">
            {['Savings Accounts', 'Personal Loans', 'Business Loans', 'Investment Options', 'Financial Education', 'Mobile Banking', 'Insurance', 'Retirement Planning'].map((service, index) => (
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

        <motion.section
          id="stats"
          initial="hidden"
          animate={activeSection === 'stats' ? 'visible' : 'hidden'}
          variants={sectionVariants}
          className="stats"
        >
          <h2>KMS Sacco by the Numbers</h2>
          <div className="stats-grid">
            {statsData.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="stat-item"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <FontAwesomeIcon icon={stat.icon} className="stat-icon" />
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Use the Testimonials component here */}
        <Testimonials testimonials={testimonials} />

        <motion.section
          id="contact"
          initial="hidden"
          animate={activeSection === 'contact' ? 'visible' : 'hidden'}
          variants={sectionVariants}
          className="contact"
        >
          <Contact />
        </motion.section>

      </main>
      <Footer />
      {showModal && (
        <motion.div className="modal" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <div className="modal-content">
            <span className="close" onClick={() => setShowModal(false)}>&times;</span>
            <p>{modalContent}</p>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Homepage;
