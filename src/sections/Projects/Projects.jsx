// eslint-disable-next-line no-unused-vars
import React from 'react';
import { motion } from 'framer-motion';
import styles from './ProjectsStyles.module.css';
import artistic from '../../assets/artistic.png';
import naturalist from '../../assets/naturalist.png';
import insta from '../../assets/insta.png';
import wandermate from '../../assets/app.png';

function Projects() {
  const projects = [
  {
    src: wandermate,
    link: "https://github.com/ridmii/WanderMate",
    title: "WanderMate",
    description: "Android travel companion with real-time navigation, weather, and location services"
  },
  {
    src: insta,
    link: "https://github.com/ridmii/Insta-Clone",
    title: "Instagram Clone",
    description: "Functional Instagram replica with React and Firebase authentication"
  },
  {
    src: artistic,
    link: "https://aartistic.netlify.app/",
    title: "Artistic",
    description: "Elegant portfolio website for a photography business"
  },
  {
    src: naturalist,
    link: "https://naturalistchoc.netlify.app/",
    title: "Naturalist",
    description: "Product showcase for an organic beverage company"
  },
];
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

  const projectCardVariants = {
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
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const overlayVariants = {
    hidden: {
      opacity: 0
    },
    hover: {
      opacity: 1,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <motion.section 
      id="projects" 
      className={styles.projectsSection}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <motion.div 
        className={styles.sectionId}
        variants={{
          hidden: { opacity: 0, x: -20 },
          visible: { opacity: 1, x: 0 }
        }}
      >
        PROJECTS
      </motion.div>
      <motion.div 
        className={styles.projectsGrid}
        variants={containerVariants}
      >
        {projects.map((project, index) => (
          <motion.a 
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectCard}
            variants={projectCardVariants}
            whileHover="hover"
            initial="hidden"
            animate="visible"
          >
            <div className={styles.imageWrapper}>
              <motion.img 
                src={project.src} 
                alt={project.title}
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
              <motion.div 
                className={styles.overlay}
                variants={overlayVariants}
                initial="hidden"
                whileHover="hover"
              >
                <motion.span 
                  className={styles.viewProject}
                  initial={{ y: 20, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  View Project
                </motion.span>
              </motion.div>
            </div>
            <motion.div 
              className={styles.projectInfo}
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </motion.div>
          </motion.a>
        ))}
      </motion.div>
    </motion.section>
  );
}

export default Projects;