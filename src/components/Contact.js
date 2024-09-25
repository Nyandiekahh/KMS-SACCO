import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
  const [state, handleSubmit] = useForm("mjkbqdql"); // Replace "mjkbqdql" with your Form ID
  const [submitted, setSubmitted] = useState(false);

  const handleSubmission = (e) => {
    handleSubmit(e);
    setSubmitted(true); // Set submitted to true when the form is submitted
  };

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
      {submitted && (
        <div className="submission-message">
          <span>✅</span> {/* Replace with any icon you want */}
          <p>Submitted Successfully, we will get back to you in 3 business days</p>
        </div>
      )}
      <form onSubmit={handleSubmission} className="contact-form">
        <label htmlFor="name">Name</label>
        <motion.input
          id="name"
          type="text"
          name="name"
          required
          whileFocus={{ scale: 1.05 }}
        />
        
        <label htmlFor="email">Email Address</label>
        <motion.input
          id="email"
          type="email"
          name="email"
          required
          whileFocus={{ scale: 1.05 }}
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <label htmlFor="message">Message</label>
        <motion.textarea
          id="message"
          name="message"
          required
          whileFocus={{ scale: 1.05 }}
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />

        <motion.button
          type="submit"
          disabled={state.submitting}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Submit
        </motion.button>
      </form>
    </motion.section>
  );
};

export default Contact;
