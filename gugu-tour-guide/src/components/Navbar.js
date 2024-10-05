import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    if (!isMenuOpen) {
      console.log('Clicked');
    } else {
      console.log('is closed');
    }
    setIsMenuOpen(prevState => !prevState);
  };

  return (
    <nav className="relative flex justify-between items-center p-4 bg-white shadow-md">
      {/* Logo Section */}
      <a href="/" className="text-2xl font-bold">Yonwaba</a>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-8 font-semibold">
        <a href="/#home" className="hover:text-blue-500">Home</a>
        <a href="/#about" className="hover:text-blue-500">About</a>
        <a href="/#services" className="hover:text-blue-500">Services</a>
        <a href="/#contact" className="hover:text-blue-500">Contact</a>
        <a href="#book" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Book Now</a>
      </div>

      {/* Mobile Menu Icon */}
      <button
        onClick={toggleMenu}
        className="md:hidden p-2 text-gray-700 cursor-pointer"
        aria-label="Toggle menu"
      >
        <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} size="lg" />
      </button>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white transition-transform transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} z-50`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={toggleMenu}
            className="text-gray-700 cursor-pointer"
            aria-label="Close menu"
          >
            <FontAwesomeIcon icon={faTimes} size="lg" />
          </button>
        </div>
        <div className="flex flex-col items-center justify-center h-full space-y-4">
          <a href="/#home" onClick={toggleMenu} className="text-2xl font-semibold hover:text-blue-500">Home</a>
          <a href="/#about" onClick={toggleMenu} className="text-2xl font-semibold hover:text-blue-500">About</a>
          <a href="/#services" onClick={toggleMenu} className="text-2xl font-semibold hover:text-blue-500">Services</a>
          <a href="/#contact" onClick={toggleMenu} className="text-2xl font-semibold hover:text-blue-500">Contact</a>
          <a href="#book" onClick={toggleMenu} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Book Now</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;