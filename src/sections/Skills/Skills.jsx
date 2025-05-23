// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './SkillsStyles.module.css';
import { useTheme } from '../../common/ThemeContext';

// eslint-disable-next-line react/prop-types
const SkillCard = ({ skill, level, color }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { theme } = useTheme();

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  const cardVariants = {
    hidden: { 
      scale: 0.9, 
      opacity: 0,
      y: 20 
    },
    visible: { 
      scale: 1, 
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        duration: 0.5,
        bounce: 0.3
      }
    },
    hover: { 
      y: -8, 
      scale: 1.02,
      transition: { 
        type: "spring", 
        stiffness: 300, 
        damping: 20 
      }
    }
  };

  const iconVariants = {
    hidden: { 
      scale: 0,
      rotate: -180 
    },
    visible: { 
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 20
      }
    },
    hover: { 
      scale: 1.1,
      transition: { 
        type: "spring", 
        stiffness: 400, 
        damping: 10 
      }
    }
  };

  const progressVariants = {
    hidden: { width: "0%" },
    visible: { 
      width: `${level}%`,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.3
      }
    }
  };

  return (
    <motion.div
      className={`${styles.skillCard} ${styles[theme]}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      variants={cardVariants}
      whileHover="hover"
      initial="hidden"
      animate="visible"
    >
      <motion.div 
        className={styles.skillHeader}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        <motion.div 
          className={`${styles.skillIcon} ${styles[color]}`}
          variants={iconVariants}
        />
        <motion.h3
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {skill}
        </motion.h3>
      </motion.div>
      
      <motion.div className={styles.progressBar}>
        <motion.div 
          className={`${styles.progressFill} ${styles[color]}`}
          variants={progressVariants}
        />
      </motion.div>
      
      <motion.span 
        className={styles.percentage}
        initial={{ opacity: 0, y: 10 }}
        animate={{
          opacity: isHovered ? 1 : 0,
          y: isHovered ? 0 : 5
        }}
        transition={{ 
          duration: 0.3,
          ease: "easeOut"
        }}
      >
        {level}%
      </motion.span>
    </motion.div>
  );
};

const SkillsSection = () => {
  const skillsData = [
    { skill: "HTML", level: 90, color: "orange" },
    { skill: "CSS", level: 85, color: "blue" },
    { skill: "JavaScript", level: 80, color: "yellow" },
    { skill: "React", level: 85, color: "cyan" },
    { skill: "Node.js", level: 75, color: "green" },
    { skill: "Tailwind CSS", level: 88, color: "teal" },
    { skill: "Bootstrap", level: 85, color: "purple" },
    { skill: "jQuery", level: 70, color: "lightBlue" },
    { skill: "AJAX", level: 75, color: "pink" }
  ];

  const containerVariants = {
    hidden: { 
      opacity: 0, 
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        when: "beforeChildren",
        staggerChildren: 0.15,
        ease: "easeOut"
      }
    }
  };

  const titleVariants = {
    hidden: { 
      opacity: 0, 
      y: -30,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        type: "spring",
        stiffness: 200
      }
    }
  };

  return (
    <motion.section 
      id="skills-section" 
      className={styles.skillsSection}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <div className={styles.container}>
        <motion.h2 
          className={styles.title}
          variants={titleVariants}
        >
          Technical Skills
        </motion.h2>

        <motion.div 
          className={styles.skillsGrid}
          variants={containerVariants}
        >
          {skillsData.map((skill, index) => (
            <motion.div 
              key={skill.skill}
              className={styles.skillCardWrapper}
              variants={{
                hidden: { 
                  opacity: 0, 
                  y: 30,
                  scale: 0.9
                },
                visible: {
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    duration: 0.5,
                    ease: "easeOut",
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 200
                  }
                }
              }}
            >
              <SkillCard {...skill} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default SkillsSection;