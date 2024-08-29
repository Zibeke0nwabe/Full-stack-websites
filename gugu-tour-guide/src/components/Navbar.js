import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="absolute top-0 left-0 w-full bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <a href="/" className="text-white text-2xl md:text-2xl sm:text-xl font-bold">Yonwaba</a>
          </div>

          {/* Navigation Links for Desktop */}
          <div className="hidden md:flex space-x-8 font-semibold">
            <a href="#home" className="text-white hover:text-blue-500 hover:underline">Home</a>
            <a href="#about" className="text-white hover:text-blue-500 hover:underline">About</a>
            <a href="#services" className="text-white hover:text-blue-500 hover:underline">Services</a>
            <a href="#contact" className="text-white hover:text-blue-500 hover:underline">Contact</a>
          </div>

          {/* Book Now Button for Desktop */}
          <div className="hidden md:block">
            <a href="#book" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Book Now</a>
          </div>

          {/* Menu Icon for Mobile */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} size="lg" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4 font-semibold text-center">
            <a href="#home" className="text-white block hover:text-blue-500 hover:underline">Home</a>
            <a href="#about" className="text-white block hover:text-blue-500 hover:underline">About</a>
            <a href="#services" className="text-white block hover:text-blue-500 hover:underline">Services</a>
            <a href="#contact" className="text-white block hover:text-blue-500 hover:underline">Contact</a>
            <a href="#book" className="px-4 py-2 bg-blue-500 text-white rounded-md block mx-auto w-max hover:bg-blue-600">Book Now</a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
