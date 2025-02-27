import React from 'react';
import "../componentStyling/Projects.css";
import ProjectCard from './ProjectCard';
const projects = [
  {
    name: 'Fitness',
    description: 'Built a Completely Responsive Gym Website that shows Exercise according to the category chosen and GIFS related to it.',
    technologies: [' ReactJs | Material UI | ExerciseDB and YouTube Search Download API from RapidAPI'],
    live: 'https://tkrfitness.netlify.app/'
  },
  {
    name: 'Smart Water Leakage Detection System',
    description: 'This system detects the leakage by noticing the difference between the rate of water flow sensors.',
    technologies: ['C language | IoT'],
    live: ''
  },
  {
    name: 'Random-Riddle',
    description: 'Implemented a dynamic gameplay mechanism where users are tasked with finding the "hit" value within a set of random numbers. Applied Fisher-Yates Shuffle Algorithm to effectively randomize the number set upon each iteration, enhancing game fairness and unpredictability.',
    technologies: ['HTML | CSS | JAVASCRIPT'],
    live: 'https://random-riddle.netlify.app/'
  },
  {
    name: 'Portfolio',
    description: 'I have crafted my personal portfolio website using React and CSS. This platform showcases my projects, skills, and professional journey in a visually engaging and user-friendly manner. Explore my work and expertise through this interactive portfolio built to reflect my passion for web development and design.',
    technologies: ['HTML | React | CSS | Javascript'],
    live: 'https://shekhapurtukara1.github.io/portfolio/'
  },
  {
    name: 'Tyres',
    description: 'Developed a website using Lightning Web Components (LWC) where customers can purchase tyres online. Implemented Web-to-Lead functionality for lead generation and integrated Web-to-Case functionality for case management.',
    technologies: ['HTML | CSS | Javascript | LWC | Apex | Triggers'],
    live: ''
  },
];

const Projects = () => {
  return (
    <div className="projects-container">
    <h1 className='main-heading'>My Projects</h1>
    <div className="project-list">
      {projects.map((project, index) => (
        <ProjectCard
          key={index}
          name={project.name}
          description={project.description}
          technologies={project.technologies}
          live={project.live}
        />
      ))}
    </div>
  </div>
  );
}

export default Projects;
