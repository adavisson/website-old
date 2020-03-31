import React from 'react';
import ProjectCard from './ProjectCard';

const Projects = () => {
  return (
    <>
      <h1>Projects</h1>
      <div className="card-container">
        <ProjectCard
          title="CFB Machine"
          description="A football website"
        />
      </div>
    </>
  );
}
 
export default Projects;