// eslint-disable-next-line no-unused-vars
import React from 'react';
import { motion } from 'framer-motion';
import styles from './FooterStyles.module.css';

function Footer() {
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
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section 
      id="footer" 
      className={styles.container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        style={{ marginTop: "-2rem" }} // Add negative margin to move text up
      >
        &copy; 2025 Ridmi Vancuylenburg. <br />
        All rights reserved.
      </motion.p>
    </motion.section>
  );
}

export default Footer;