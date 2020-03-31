import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {

  const projects = [
    {
      title: "CFB Machine",
      description: "This application allows allows you to look up historical College Football matches and stats.",
      repository: "https://github.com/adavisson/cfb-machine",
      link: "https://cfb-machine.andydavisson.com/"
    },
    {
      title: "Crazy Tales",
      description: "This application mimics Mad Libs. A user is presented with types of words to come up with and is then presented with a story where those words are used.",
      repository: "https://github.com/adavisson/Wacky-Stories",
      link: "https://crazy-tales.andydavisson.com/"
    },
    {
      title: "Job Board",
      description: "This application allows a user to view companies and job postings, and save contact information and notes. This project also implements GraphQL.",
      repository: "https://github.com/adavisson/job-board-client"
    },
    {
      title: "Study Buddy",
      description: "This application provides study questions for various topics that one might see in a developer interview.",
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