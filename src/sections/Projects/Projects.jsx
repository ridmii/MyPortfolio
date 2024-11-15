// eslint-disable-next-line no-unused-vars
import React from 'react';
import styles from './ProjectsStyles.module.css';
import bytebite from '../../assets/bytebite.png';
import chuttbati from '../../assets/chuttbati.png';
import quiztopia from '../../assets/quiztopia.png';
import artistic from '../../assets/artistic.png';
import naturalist from '../../assets/naturalist.png';
import niroda from '../../assets/niroda.png';

function Projects() {
  const projects = [
    {
      src: bytebite,
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

  return (
    <section id="projects" className={styles.projectsSection}>
      <div className={styles.sectionId}>PROJECTS</div>
      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <a 
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectCard}
          >
            <div className={styles.imageWrapper}>
              <img src={project.src} alt={project.title} />
              <div className={styles.overlay}>
                <span className={styles.viewProject}>View Project</span>
              </div>
            </div>
            <div className={styles.projectInfo}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Projects;
