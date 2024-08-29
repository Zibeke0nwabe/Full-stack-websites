import React from 'react';
import { FaWhatsapp, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import Navbar from './Navbar';

const HeroSection = () => {
  return (
    <div
      className="relative bg-cover bg-center h-screen"
      style={{ backgroundImage: "url('/image24.jpg')" }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-75"></div>

      {/* Navbar Component */}
      <Navbar />

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
          Discover the Beauty of Port St. Johns
        </h1>
        <p className="mt-4 text-lg sm:text-xl md:text-2xl max-w-3xl">
          Join Mr. Somakhwabe on an unforgettable journey through the Wild Coast. 
          Experience the local culture, stunning landscapes, and hidden gems of Port St. Johns.
        </p>
        <a
          href="#contact"
          className="mt-8 px-8 py-3 bg-blue-600 text-white rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300"
        >
          Book Your Tour
        </a>

        {/* Social Icons */}
        <div className="mt-10 flex space-x-6">
          <a href="https://wa.me/2784300901" className="text-green-500 hover:text-green-600">
            <FaWhatsapp size={32} />
          </a>
          <a href="https://facebook.com" className="text-blue-700 hover:text-blue-700">
            <FaFacebookF size={32} />
          </a>
          <a href="https://twitter.com" className="text-blue-500 hover:text-blue-500">
            <FaTwitter size={32} />
          </a>
          <a href="https://instagram.com" className="text-pink-500 hover:text-pink-600">
            <FaInstagram size={32} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;