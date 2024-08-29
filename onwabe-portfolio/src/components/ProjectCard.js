import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
  const navigate = useNavigate();

  const handleProjectInfo = () => {
    navigate(`/project/${project.id}`);
  };

  return (
    <div className="project-card bg-white p-4 rounded shadow-md">
      <img 
        src={project.image} 
        alt={project.title} 
        className="w-full h-40 object-cover rounded mb-4" 
      />
      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
      <p className="text-gray-700 mb-4">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tools.map((tool, index) => (
          <span 
            key={index} 
            className="bg-gray-200 text-gray-800 px-2 py-1 font-semibold rounded text-sm"
          >
            {tool}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap gap-2 mb-4">
        <a 
          href={project.website} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center bg-gray-900 text-white px-4 py-2 rounded text-xs sm:text-sm"
        >
          <FaExternalLinkAlt className="mr-2" />
          Website
        </a>
        <a 
          href={project.github} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center bg-gray-900 text-white px-4 py-2 rounded text-xs sm:text-sm"
        >
          <FaGithub className="mr-2" />
          Source
        </a>
      </div>
      <button 
        onClick={handleProjectInfo} 
        className="mt-4 bg-orange-500 text-white px-4 py-2 font-semibold rounded text-sm sm:text-base"
      >
        View More
      </button>
    </div>
  );
};

export default ProjectCard;
