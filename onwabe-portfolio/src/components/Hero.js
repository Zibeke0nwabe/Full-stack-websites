import React from 'react';
import { ReactTyped as Typed } from 'react-typed';


const Hero = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between py-20 px-4 md:px-20 relative overflow-hidden">
      <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className="text-orange-500">Hello, I'm</span> <br />
          <Typed
            strings={["Zibeke Onwabe", "a Full Stack Developer", "a MERN Stack Developer"]}
            typeSpeed={100}
            backSpeed={50}
            loop
          />
        </h1>
        <p className="text-lg text-gray-700">
          Crafting dynamic web experiences using the power of modern technologies.
        </p>
        <div className="mt-8 space-x-4">
          <a
            href='/' 
            className="bg-orange-500 text-white px-6 py-3 font-semibold rounded-full shadow-md hover:bg-orange-600"
          >
            Download CV
          </a>
          <a
            href="https://wa.me/+27784300901" 
            className="bg-gray-900 text-white px-6 py-3 font-semibold rounded-full shadow-md hover:bg-gray-800"
          >
            Contact Me
          </a>
        </div>
      </div>
      <div className="md:w-1/2 relative">
        <div className="absolute inset-0 bg-orange-500 rounded-full transform translate-x-8 translate-y-8 md:translate-x-12 md:translate-y-12 z-0" style={{ width: '150%', height: '150%' }}></div>
        <img
          src="/onwabe.jpg"
          alt="Zibeke Onwabe"
          className="w-full h-full object-cover rounded-full relative z-10"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      </div>
    </section>
  );
};

export default Hero;


