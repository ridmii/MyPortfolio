import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import styles from './HeroStyles.module.css';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/R.M. Vancuylenburg resume.pdf';
import { useTheme } from '../../common/ThemeContext';
import developerAnimation from '../../assets/hh.json';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  // Animation variants
  const lottieJiggle = {
    animate: {
      y: [0, -15, 0, -10, 0],
      rotate: [0, 5, -5, 3, -3, 0],
      transition: {
        y: {
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        },
        rotate: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
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
      scale: 1.15,
      y: -3,
      transition: {
        duration: 0.2,
        ease: "easeInOut"
      }
    },
    tap: { 
      scale: 0.9,
      transition: {
        duration: 0.1
      }
    }
  };

  return (
    <section id="hero" className={styles.heroSection}>
      <motion.div
        className={styles.heroContainer}
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className={styles.themeToggle}>
          <motion.img
            src={themeIcon}
            alt="Color mode icon"
            onClick={toggleTheme}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={styles.themeIcon}
          />
        </div>

        <div className={styles.contentWrapper}>
          <motion.div 
            className={styles.lottieContainer}
            variants={lottieJiggle}
            animate="animate"
          >
            <Lottie
              animationData={developerAnimation}
              loop={true}
              autoplay={true}
              className={styles.lottieAnimation}
              style={{ width: '120%', height: '120%' }}
            />
          </motion.div>

          <motion.div 
            className={styles.content}
            variants={containerVariants}
          >
            <motion.h1 className={styles.title} variants={itemVariants}>
              Hi, I&apos;m Ridmi!
            </motion.h1>

            <motion.h2 className={styles.subtitle} variants={itemVariants}>
              Full-Stack Software Developer
            </motion.h2>

            <motion.p className={styles.description} variants={itemVariants}>
              Thanks for stopping by! Feel free to explore my work, connect with me, or just say hi 👋
              Let&apos;s create something awesome together
            </motion.p>

            <motion.div className={styles.socialLinks} variants={itemVariants}>
              <motion.a
                href="https://twitter.com/Ridmiii"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                variants={socialIconVariants}
                whileHover="hover"
                whileTap="tap"
                aria-label="Twitter"
              >
                <img src={twitterIcon} alt="Twitter" className={styles.socialIcon} />
                <span className={styles.tooltip}>Twitter</span>
              </motion.a>
              
              <motion.a
                href="https://github.com/ridmii"
                target="_blank"
                rel="noopener noreferrer nofollow"
                className={styles.socialLink}
                variants={socialIconVariants}
                whileHover="hover"
                whileTap="tap"
                aria-label="GitHub"
              >
                <img src={githubIcon} alt="GitHub" className={styles.socialIcon} />
                <span className={styles.tooltip}>GitHub</span>
              </motion.a>
              
              <motion.a
                href="https://www.linkedin.com/in/ridmi-vancuylenburg-3950b9248/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                variants={socialIconVariants}
                whileHover="hover"
                whileTap="tap"
                aria-label="LinkedIn"
              >
                <img src={linkedinIcon} alt="LinkedIn" className={styles.socialIcon} />
                <span className={styles.tooltip}>LinkedIn</span>
              </motion.a>
            </motion.div>

            <motion.a 
              href={CV} 
              download
              className={styles.resumeLink}
              variants={itemVariants}
            >
              <motion.button
                className={styles.resumeButton}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Resume
              </motion.button>
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;