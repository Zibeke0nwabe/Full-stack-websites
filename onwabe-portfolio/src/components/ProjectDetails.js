import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Footer from '../components/Footer'

const ProjectDetails = ({ projects }) => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return <p>Project not found. Make sure the project ID is correct.</p>;
  }


  return (
    <>
    <div className="project-details container mx-auto p-4">
      <div className="project-card bg-white p-6 rounded ">
        <img 
          src={`/${project.image}`} 
          alt={project.title} 
          className="w-full h-full object-cover rounded mb-8" 
        />
        <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
        <p className="text-lg mb-4">{project.detailedDescription}</p>
        <div className="flex flex-wrap gap-2 mb-8">
          {project.tools.map((tool, index) => (
            <span key={index} className="bg-gray-200 px-2 py-1 rounded text-sm">{tool}</span>
          ))}
        </div>
        <div className="flex space-x-4 mb-8">
          <a href={project.website} target="_blank" rel="noopener noreferrer" className="bg-gray-900 text-white px-4 py-2 rounded">Website</a>
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="bg-gray-900 text-white px-4 py-2 rounded">Source</a>
        </div>
        <div className="experience mb-8">
          <h2 className="text-2xl font-semibold mb-2">Experience</h2>
          <p>{project.experience}</p>
        </div>
        <div className="challenges mb-8">
          <h2 className="text-2xl font-semibold mb-2">Challenges</h2>
          <p>{project.challenges}</p>
        </div>
        <div className="code-snippet mb-8">
          <h2 className="text-2xl font-semibold mb-2">Code Snippet</h2>
          <pre className="bg-gray-100 p-4 rounded overflow-x-auto">
            <code>{project.codeSnippet}</code>
          </pre>
          {project.codeImage && (
            <img 
              src={`/${project.codeImage}`} 
              alt="Code example" 
              className="mt-4 w-full rounded" 
            />
          )}
        </div>
        <div className="other-projects">
          <h2 className="text-2xl font-semibold mb-4">Other Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.filter(p => p.id !== id).map(p => (
              <Link 
                key={p.id} 
                to={`/project/${p.id}`} 
                className="project-card bg-white p-4 rounded shadow-md hover:shadow-lg transition"
              >
                <img 
                  src={`/${p.image}`} 
                  alt={p.title} 
                  className="w-full h-32 object-cover rounded mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
                <p className="text-sm">{p.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default ProjectDetails;