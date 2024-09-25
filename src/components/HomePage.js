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
// import FeaturedMembers from './FeaturedMembers'; // Import the Featured Members component

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
    { label: 'Members', value: '5+', icon: faHandshake },
    { label: 'Total Savings', value: 'Ksh 30,000+', icon: faPiggyBank },
    { label: 'Loans Disbursed', value: 'Ksh 10,000+', icon: faChartLine },
    { label: 'Customer Satisfaction', value: '98%', icon: faComments },
    { label: 'Success Stories', value: '10+', icon: faLightbulb },
    { label: 'Award Winning', value: '5', icon: faUserShield },
  ];

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
        <aside className="featured-members">
          {/* <FeaturedMembers /> */}
        </aside>
      </div>
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
