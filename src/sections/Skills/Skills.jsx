import React from 'react';
import { motion } from 'framer-motion';
import styles from './SkillsStyles.module.css';
import { useTheme } from '../../common/ThemeContext';

const ProficiencyIndicator = ({ level }) => {
  const getLevelDescription = () => {
    switch(level) {
      case 'basic': return 'Basic';
      case 'intermediate': return 'Intermediate';
      case 'advanced': return 'Advanced';
      case 'expert': return 'Expert';
      default: return level;
    }
  };

  return (
    <div className={`${styles.proficiency} ${styles[level]}`}>
      {getLevelDescription()}
    </div>
  );
};

const SkillItem = ({ skill, index }) => {
  return (
    <motion.div
      className={styles.skillItem}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <div className={styles.skillHeader}>
        <div className={styles.skillName}>{skill.name}</div>
        <ProficiencyIndicator level={skill.level} />
      </div>
    </motion.div>
  );
};

const SkillCategory = ({ category, skills }) => {
  return (
    <motion.div 
      className={styles.category}
      whileHover={{ y: -5 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <h3 className={styles.categoryTitle}>{category}</h3>
      <div className={styles.skillsList}>
        {skills.map((skill, index) => (
          <SkillItem key={index} skill={skill} index={index} />
        ))}
      </div>
    </motion.div>
  );
};

const SkillsSection = () => {
  const skillsData = [
  {
    category: 'Backend Development',
    skills: [
      { name: 'Spring Boot', level: 'intermediate' },
      { name: 'Node.js/Express', level: 'intermediate' },
      { name: 'Spring MVC', level: 'intermediate' },
      { name: 'Hibernate', level: 'intermediate' }
    ]
  },
  {
    category: 'Frontend Development',
    skills: [
      { name: 'React', level: 'intermediate' },
      { name: 'Bootstrap', level: 'intermediate' },
      { name: 'jQuery', level: 'basic' }
    ]
  },
  {
    category: 'Databases',
    skills: [
      { name: 'MongoDB', level: 'intermediate' },
      { name: 'MySQL', level: 'intermediate' }
    ]
  }
];

  return (
    <section id="skills" className={styles.skillsSection}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={styles.header}
        >
          <h2 className={styles.sectionId}>SKILLS</h2>
          <p className={styles.subtitle}>
            My technical expertise and proficiency levels
          </p>
        </motion.div>

        <div className={styles.categoriesContainer}>
          {skillsData.map((category, index) => (
            <SkillCategory 
              key={index}
              category={category.category}
              skills={category.skills}
            />
          ))}
        </div>
        
         {/* <div className={styles.techStack}>
          <h3 className={styles.techStackTitle}>TECHNOLOGY STACK</h3>
          <div className={styles.techItems}>
            {['Java', 'Android SDK', 'Firebase', 'JavaScript', 'React', 
              'HTML5', 'CSS3', 'Node.js', 'SQL', 'MySQL', 'MongoDB', 
              'REST APIs', 'Git', 'Gradle', 'TypeScript', 'Kotlin'].map((tech, i) => (
              <motion.div
                key={i}
                className={styles.techItem}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ 
                  delay: 0.5 + i * 0.05,
                  type: 'spring',
                  stiffness: 260,
                  damping: 20
                }}
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default SkillsSection;