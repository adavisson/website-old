import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {

  const projects = [
    {
      title: "CFB Machine",
      description: "A football website",
      repository: "https://github.com/adavisson/cfb-machine",
      link: "https://cfb-machine.andydavisson.com/"
    },
    {
      title: "Crazy Tales",
      description: "MadLibz",
      repository: "https://github.com/adavisson/Wacky-Stories",
      link: "https://crazy-tales.andydavisson.com/"
    },
    {
      title: "Job Board",
      description: "Hire Me",
      repository: "https://github.com/adavisson/job-board-client"
    },
    {
      title: "Study Buddy",
      description: "I know it all",
      repository: "https://github.com/adavisson/study-buddy",
      link: "https://study-buddy.andydavisson.com/"
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
              repository={proj.repository}
              link={proj.link}
            />
          )
        })}
      </div>
    </>
  );
}
 
export default Projects;