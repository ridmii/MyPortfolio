// eslint-disable-next-line no-unused-vars
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './ProjectsStyles.module.css';
import artistic from '../../assets/artistic.png';
import naturalist from '../../assets/naturalist.png';
import insta from '../../assets/insta.png';
import wandermate from '../../assets/app.png';
import ayu from '../../assets/ayu.png';

// Import your video files (you'll need to add these)
import wanderMateVideo from '../../assets/gms.mp4';
import instaVideo from '../../assets/gms.mp4';
import artisticVideo from '../../assets/gms.mp4';
import naturalistVideo from '../../assets/nat.mp4';
import ayuVideo from '../../assets/ayu.mp4';

function Projects() {
  const [flippedIndex, setFlippedIndex] = useState(null);
  const videoRefs = useRef([]);

  const projects = [
    {
      src: wandermate,
      video: wanderMateVideo,
      link: "https://github.com/ridmii/WanderMate",
      title: "WanderMate",
      description: "Android travel companion with real-time navigation, weather, and location services",
      technologies: ["React Native", "Firebase", "Google Maps API", "Node.js"]
    },
    {
      src: insta,
      video: instaVideo,
      link: "https://github.com/ridmii/Insta-Clone",
      title: "Instagram Clone",
      description: "Functional Instagram replica with React and Firebase authentication",
      technologies: ["React", "Firebase", "Tailwind CSS", "Context API"]
    },
    {
      src: artistic,
      video: artisticVideo,
      link: "https://aartistic.netlify.app/",
      title: "Artistic",
      description: "Elegant portfolio website for a photography business",
      technologies: ["React", "CSS3", "Framer Motion", "Netlify"]
    },
    {
      src: naturalist,
      video: naturalistVideo,
      link: "https://naturalistchoc.netlify.app/",
      title: "Naturalist",
      description: "Product showcase for an organic beverage company",
      technologies: ["HTML5", "CSS3", "JavaScript", "GSAP"]
    },
  ];

  // Handle video playback when card flips
  useEffect(() => {
    if (flippedIndex !== null) {
      const video = videoRefs.current[flippedIndex];
      if (video) {
        setTimeout(() => {
          video.play().catch(e => {
            console.log("Video autoplay failed:", e);
          });
        }, 300);
      }
    } else {
      videoRefs.current.forEach(video => {
        if (video) {
          video.pause();
          video.currentTime = 0;
        }
      });
    }
  }, [flippedIndex]);

  const handleFlip = (index) => {
    if (flippedIndex === index) {
      const video = videoRefs.current[index];
      if (video) {
        video.pause();
        video.currentTime = 0;
      }
      setFlippedIndex(null);
    } else {
      setFlippedIndex(index);
    }
  };

  const handleVideoEnd = (index) => {
    const video = videoRefs.current[index];
    if (video) {
      video.currentTime = 0;
      video.play().catch(e => console.log("Video replay failed:", e));
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        when: "beforeChildren",
        staggerChildren: 0.3
      }
    }
  };

  const projectCardVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      rotateY: -180,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 1,
        ease: [0.25, 0.1, 0.25, 1],
      }
    }
  };

  return (
    <motion.section 
      id="projects" 
      className={styles.projectsSection}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.div 
        className={styles.sectionId}
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        PROJECTS
      </motion.div>

      <motion.h2 
        className={styles.sectionTitle}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        Featured Projects
      </motion.h2>

      <div className={styles.circularOrbitContainer}>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className={styles.orbitalCard}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={projectCardVariants}
            style={{
              '--orbit-index': index,
              '--total-items': projects.length,
            }}
          >
            <motion.div
              className={styles.flipCard}
              animate={{ 
                rotateY: flippedIndex === index ? 180 : 0,
                scale: flippedIndex === index ? 1.1 : 1,
              }}
              transition={{ 
                duration: 0.6,
                type: "spring",
                stiffness: 50
              }}
              onClick={() => handleFlip(index)}
            >
              {/* Front of Card */}
              <div className={styles.cardFront}>
                <motion.div 
                  className={styles.imageContainer}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img 
                    src={project.src} 
                    alt={project.title}
                    className={styles.projectImage}
                  />
                  <div className={styles.overlay}>
                    <div className={styles.overlayContent}>
                      <h3 className={styles.overlayTitle}>{project.title}</h3>
                      <p className={styles.overlayDescription}>
                        {project.description}
                      </p>
                      <div className={styles.overlayTechStack}>
                        {project.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className={styles.overlayTechTag}>
                            {tech}
                          </span>
                        ))}
                      </div>
                      <motion.span 
                        className={styles.viewProject}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Click to View Demo →
                      </motion.span>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Back of Card with Video */}
              <div className={styles.cardBack}>
                <div className={styles.videoContainer}>
                  <video
                    ref={el => videoRefs.current[index] = el}
                    className={styles.projectVideo}
                    muted
                    loop
                    playsInline
                    autoPlay={flippedIndex === index}
                    onEnded={() => handleVideoEnd(index)}
                  >
                    <source src={project.video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <div className={styles.videoOverlay}>
                    <h3 className={styles.videoTitle}>{project.title}</h3>
                    <div className={styles.videoControls}>
                      <motion.a 
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.projectLink}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        View Project
                      </motion.a>
                      <motion.button
                        className={styles.flipBack}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleFlip(index);
                        }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Back
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        className={styles.backgroundElements}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className={styles.orbitPath}></div>
        <div className={styles.orbitPath2}></div>
      </motion.div>
    </motion.section>
  );
}

export default Projects;