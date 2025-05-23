// eslint-disable-next-line no-unused-vars
import React from 'react';
import { motion } from 'framer-motion';
import styles from './ContactStyles.module.css';

function Contact() {
  const containerVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const formGroupVariants = {
    hidden: {
      opacity: 0,
      x: -20
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const inputVariants = {
    focus: {
      scale: 1.02,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <motion.section 
      id="contact" 
      className={styles.container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <motion.h1 
        className="sectionTitle"
        variants={{
          hidden: { opacity: 0, y: -20 },
          visible: { opacity: 1, y: 0 }
        }}
      >
        Contact
      </motion.h1>
      <motion.form 
        action=""
        variants={containerVariants}
      >
        <motion.div 
          className="formGroup"
          variants={formGroupVariants}
        >
          <label htmlFor="name" hidden>Name</label>
          <motion.input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
            variants={inputVariants}
            whileFocus="focus"
          />
        </motion.div>
        <motion.div 
          className="formGroup"
          variants={formGroupVariants}
        >
          <label htmlFor="email" hidden>Email</label>
          <motion.input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            required
            variants={inputVariants}
            whileFocus="focus"
          />
        </motion.div>
        <motion.div 
          className="formGroup"
          variants={formGroupVariants}
        >
          <label htmlFor="message" hidden>Message</label>
          <motion.textarea
            name="message"
            id="message"
            placeholder="Message"
            required
            variants={inputVariants}
            whileFocus="focus"
          ></motion.textarea>
        </motion.div>
        <motion.input 
          className="hover btn"
          type="submit" 
          value="Submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        />
      </motion.form>
    </motion.section>
  );
}

export default Contact;