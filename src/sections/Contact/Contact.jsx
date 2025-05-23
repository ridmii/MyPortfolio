// Contact.jsx
import { useTheme } from '../../common/ThemeContext';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Lottie from 'lottie-react';
import styles from './ContactStyles.module.css';


// Correct import paths

import basketballAnimation from '../../assets/basket.json';
import karateAnimation from '../../assets/Karate.json';
import drawingAnimation from '../../assets/draw.json';
import musicAnimation from '../../assets/music.json';
import workoutAnimation from '../../assets/gym.json';

const activities = [
  {
    text: "I play basketball",
    animation: basketballAnimation
  },
  {
    text: "I practice karate",
    animation: karateAnimation
  },
  {
    text: "I workout daily",
    animation: workoutAnimation
  },
  {
    text: "I love to draw",
    animation: drawingAnimation
  },
  {
    text: "I listen to music",
    animation: musicAnimation
  }
];

export default function MyPassions() {
  const { theme } = useTheme(); // Get current theme
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % activities.length);
    }, 2500);
    
    return () => clearInterval(interval);
  }, []);

  const currentActivity = activities[currentIndex];

  return (
    <section 
      className={styles.container} 
      id="passions"
      data-theme={theme} // Explicitly set theme
    >
      <h2 className={styles.sectionTitle}>Beyond Coding</h2>
      <p className={styles.sectionSubtitle}>What I enjoy when I&apos;m not developing</p>
      
      <motion.div 
        key={currentIndex}
        className={styles.activityContainer}
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: 1, 
          y: 0,
          transition: { duration: 0.5 }
        }}
        exit={{ opacity: 0, y: -20 }}
      >
        <motion.div
          className={styles.lottieContainer}
          animate={{
            rotate: [0, -5, 5, -5, 0],
            y: [0, -5, 5, -5, 0],
            transition: {
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        >
          <Lottie 
            animationData={currentActivity.animation} 
            style={{ width: 300, height: 300 }}
            loop={true}
          />
        </motion.div>
        
        <p className={styles.activityText}>
          {currentActivity.text}
        </p>
      </motion.div>
    </section>
  );
}