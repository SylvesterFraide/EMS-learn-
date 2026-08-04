import React from 'react'
import { projectsData } from '../component/ProjectsData';

const Projects = () => {
    
  return (
    <div>
      {projectsData.map(project => (
        <div key={project.id}>
          <h2>{project.title}</h2>
          <img src={project.image} alt={project.title} />
        </div>
      ))}
    </div>
  )
}

export default Projects;