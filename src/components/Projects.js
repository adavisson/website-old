import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {

  const projects = [
    {
      title: "CFB Machine",
      description: "A football website",
      link: "https://github.com/adavisson/cfb-machine"
    },
    {
      title: "Wacky Stories",
      description: "MadLibz",
      link: "https://github.com/adavisson/Wacky-Stories"
    },
    {
      title: "Job Board",
      description: "Hire Me",
      link: "https://github.com/adavisson/job-board-client"
    },
    {
      title: "Study Buddy",
      description: "I know it all",
      link: "https://github.com/adavisson/study-buddy"
    }
  ]

  return (
    <>
      <h1>Projects</h1>
      <div className="card-container">
        {projects.map(proj => {
          return (
            <ProjectCard
              title={proj.title}
              description={proj.description}
              link={proj.link}
            />
          )
        })}
        
      </div>
    </>
  );
}
 
export default Projects;