import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {

  const projects = [
    {
      title: "CFB Machine",
      description: "A football website"
    },
    {
      title: "Wacky Stories",
      description: "MadLibz"
    },
    {
      title: "Job Board",
      description: "Hire Me"
    },
    {
      title: "Study Buddy",
      description: "I know it all"
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
            />
          )
        })}
        
      </div>
    </>
  );
}
 
export default Projects;