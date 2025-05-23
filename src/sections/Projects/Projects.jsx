// eslint-disable-next-line no-unused-vars
import React from 'react';
import { motion } from 'framer-motion';
import styles from './ProjectsStyles.module.css';
import byytebite from '../../assets/byytebite.png';
import chuttbati from '../../assets/chuttbati.png';
import quiztopia from '../../assets/quiztopia.png';
import artistic from '../../assets/artistic.png';
import naturalist from '../../assets/naturalist.png';
import niroda from '../../assets/niroda.png';

function Projects() {
  const projects = [
    {
      src: byytebite,
      link: "https://bytebite.netlify.app/",
      title: "ByteBite",
      description: "My First Website"
    },
    {
      src: artistic,
      link: "https://aartistic.netlify.app/",
      title: "Artistic",
      description: "A website I made for a photography business"
    },
    {
      src: naturalist,
      link: "https://naturalistchoc.netlify.app/",
      title: "Naturalist",
      description: "A website I made for a SL beverage company"
    },
    {
      src: niroda,
      link: "https://niroda.netlify.app/",
      title: "Client Portfolio",
      description: "A portfolio website I made for an individual"
    },
    {
      src: chuttbati,
      link: "https://chuttanbattichcha.netlify.app/",
      title: "Chuttan Batichcha",
      description: "Flappy Bird Game"
    },
    {
      src: quiztopia,
      link: "https://quizztopia.netlify.app/",
      title: "Quiztopia",
      description: "A Quiz Game"
    }
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