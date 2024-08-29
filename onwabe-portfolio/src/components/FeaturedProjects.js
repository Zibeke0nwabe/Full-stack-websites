import React, { useState } from 'react';
import ProjectCard from './ProjectCard';

const FeaturedProjects = ({ projects }) => {
  const [showAll, setShowAll] = useState(false);

  // Determine the number of projects to display
  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  // Toggle the view more/less functionality
  const handleToggle = () => {
    setShowAll(!showAll);
  };

  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
        {displayedProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <button 
          onClick={handleToggle} 
          className="bg-orange-500 text-white px-6 py-2 rounded font-semibold hover:bg-orange-600 transition-colors"
        >
          {showAll ? 'View Less' : 'View More'}
        </button>
      </div>
    </section>
  );
};

export default FeaturedProjects;
