import { motion } from 'framer-motion';
import { useState } from 'react';
import styles from './HeroStyles.module.css';
import heroo from '../../assets/heroo.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/My Resume (2).pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  // Animation variants
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

  const imageVariants = {
    hidden: {
      scale: 0.8,
      opacity: 0
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const socialIconVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10
      }
    },
    hover: { 
      scale: 1.1,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    tap: { 
      scale: 0.95 
    }
  };

  return (
    <motion.section
      id="hero"
      className={`${styles.container} ${styles[theme]}`}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div 
        className={styles.colorModeContainer}
        variants={itemVariants}
      >
        <motion.img
          src={heroo}
          className={`${styles.hero} ${isImageLoaded ? styles.loaded : ''}`}
          alt="Profile picture of Ridmi Vancuylenburg"
          onLoad={() => setIsImageLoaded(true)}
          variants={imageVariants}
        />
        <motion.img
          className={`${styles.colorMode} ${styles.iconHover}`}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        />
      </motion.div>

      <motion.div 
        className={`${styles.info} ${isImageLoaded ? styles.loaded : ''}`}
        variants={containerVariants}
      >
        <motion.h1 className={styles.title}>
          <motion.span variants={itemVariants}>Ridmi</motion.span>
          <br />
          <motion.span variants={itemVariants}>Vancuylenburg</motion.span>
        </motion.h1>

        <motion.h2 
          className={styles.subtitle}
          variants={itemVariants}
        >
          Web Developer
        </motion.h2>

        <motion.span className={styles.socialIcons}>
          <motion.a
            href="https://twitter.com/Ridmiii"
            target="_blank"
            className={styles.iconLink}
            variants={socialIconVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <img src={twitterIcon} alt="Twitter icon" className={styles.iconHover} />
          </motion.a>
          <motion.a
            href="https://github.com/ridmii"
            target="_blank"
            className={styles.iconLink}
            variants={socialIconVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <img src={githubIcon} alt="Github icon" className={styles.iconHover} />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/ridmi-vancuylenburg-3950b9248/"
            target="_blank"
            className={styles.iconLink}
            variants={socialIconVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <img src={linkedinIcon} alt="Linkedin icon" className={styles.iconHover} />
          </motion.a>
        </motion.span>

        <motion.p 
          className={styles.description}
          variants={itemVariants}
        >
          With a passion for developing modern React web apps for commercial
          businesses.
        </motion.p>

        <motion.a 
          href={CV} 
          download
          variants={itemVariants}
        >
          <motion.button
            className={styles.resumeButton}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            Resume
          </motion.button>
        </motion.a>
      </motion.div>
    </motion.section>
  );
}

export default Hero;