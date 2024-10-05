import React from 'react';
import { FaProjectDiagram, FaTools, FaEnvelope, FaPhone, FaLinkedin, FaGithub, } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Projects Section */}
        <div>
          <h4 className="text-xl font-semibold mb-4 flex justify-center md:justify-start items-center">
            <FaProjectDiagram className="mr-2 text-orange-500" /> Best Projects
          </h4>
          <ul>
            <li>
              <a href="https://github.com/Onwabe23/React-Projects/tree/main/FULL%20STACK%20ESGELA" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500">
                Esgela Coding Bootcamp
              </a>
              <p className="text-sm text-gray-400 mt-1">Interactive platform teaching web development technologies.</p>
            </li>
            <li className="mt-4">
              <a href="https://www.esgela.onrender.com/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500">
                Esgela Online Application
              </a>
              <p className="text-sm text-gray-400 mt-1">Streamlined process for submitting applications and receiving student numbers.</p>
            </li>
            <li className="mt-4">
              <a href="https://gugu-ba8e9.web.app" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500">
                Port St. Johns Tour Guider
              </a>
              <p className="text-sm text-gray-400 mt-1">Comprehensive guide services around Port St. Johns.</p>
            </li>
            <li className="mt-4">
              <a href="https://fixtureapp-e3601.web.app/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500">
                Sports Fixture Generator
              </a>
              <p className="text-sm text-gray-400 mt-1">Manage teams, schedules, and game settings for various sports tournaments.</p>
            </li>
          </ul>
        </div>

        {/* Tools Section */}
        <div>
          <h4 className="text-xl font-semibold mb-4 flex justify-center md:justify-start items-center">
            <FaTools className="mr-2 text-orange-500" /> Tools
          </h4>
          <ul>
            <li><a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500">ReactJS</a></li>
            <li><a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500">React Native</a></li>
            <li><a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500">NodeJS</a></li>
            <li><a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500">TailwindCSS</a></li>
            <li><a href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500">MongoDB</a></li>
            <li><a href="https://expressjs.com/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500">ExpressJS</a></li>
            <li><a href="https://HTML.com/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500">HTML</a></li>
            <li><a href="https://css.com/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500">CSS</a></li>
            <li><a href="https://css.com/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500">Embedded JavaScript</a></li>
            <li><a href="https://css.com/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500">Git</a></li>
            <li><a href="https://css.com/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500">Github</a></li>
            <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500">JavaScript</a></li>
          </ul>
        </div>

        {/* Contacts Section */}
        <div>
          <h4 className="text-xl font-semibold mb-4 flex justify-center md:justify-start items-center">
            <FaEnvelope className="mr-2 text-orange-500" /> Contacts
          </h4>
          <ul>
            <li className="flex justify-center md:justify-start items-center">
              <FaPhone className="mr-2 text-orange-500" /> 
              <span>+27 78-430-0901</span>
            </li>
            <li className="flex justify-center md:justify-start items-center mt-2">
              <FaEnvelope className="mr-2 text-orange-500" />
              <span>Zibekeonwabe@gmail.com</span>
            </li>
            <li className="flex justify-center md:justify-start items-center mt-2">
              <FaLinkedin className="mr-2 text-orange-500" /> 
              <a href="https://www.linkedin.com/in/onwabe-zibeke-74b329228/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500">LinkedIn</a>
            </li>
            <li className="flex justify-center md:justify-start items-center mt-2">
              <FaGithub className="mr-2 text-orange-500" /> 
              <a href="https://github.com/Onwabe23" target="_blank" rel="noopener noreferrer" className="hover:text-orange-500">GitHub</a>
            </li>
            
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

