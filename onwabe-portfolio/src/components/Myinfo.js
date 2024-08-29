import React from 'react';
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';

const Myinfo = () => {
  return (
    <section className="py-20 px-4 md:px-20 flex flex-col md:flex-row items-center">
      <div className="md:w-1/3 mb-8 md:mb-0">
        <img
          src="/onwabe.jpg" 
          alt="Zibeke Onwabe"
          className="w-full h-auto rounded-full shadow-md"
        />
      </div>
      <div className="md:w-2/3 md:pl-12 text-center md:text-left">
        <h2 className="text-3xl font-bold mb-4">About Onwabe Zibeke</h2>
        <p className="text-lg text-gray-700 mb-6">
          I am a MERN stack developer who studied ICT at Durban University of Technology.
          Though I haven’t had any luck securing an internship, I’ve never let that bring me down.
          My journey as a self-taught developer has been enriched with the development of numerous projects,
          all contributing to my growth and expertise in software development.
        </p>
        <div className="flex justify-center md:justify-start space-x-4">
          <a href="https://www.linkedin.com/in/onwabe-zibeke" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl text-blue-600 hover:text-blue-800" />
          </a>
          <a href="https://github.com/onwabe" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-2xl text-gray-900 hover:text-gray-700" />
          </a>
          <a href="https://wa.me/+27784300901" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp className="text-2xl text-green-600 hover:text-green-800" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Myinfo;