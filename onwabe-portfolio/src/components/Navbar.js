import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  return (
    <nav className="relative flex justify-between items-center p-4 bg-white shadow-md">
      <a href='/'><div className="text-2xl font-bold">Onwabe Zibeke</div></a>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-4 font-semibold">
        <a href="/" className="hover:text-orange-500">Home</a>
        <a href="#about" className="hover:text-orange-500">About</a>
        <a href="#projects" className="hover:text-orange-500">Projects</a>
        <a href="#services" className="hover:text-orange-500">Services</a>
        <button className="bg-orange-500 text-white px-4 py-2 rounded">Download CV</button>
      </div>

      {/* Mobile Menu Icon */}
      <button
        onClick={handleMenuToggle}
        className="md:hidden p-2 text-gray-700"
        aria-label="Toggle menu"
      >
        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white transition-transform transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} z-50`}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={handleMenuToggle}
            className="text-gray-700"
            aria-label="Close menu"
          >
            <FaTimes size={24} />
          </button>
        </div>
        <div className="flex flex-col items-center justify-center h-full space-y-4">
          <a href="#hero" onClick={handleMenuToggle} className="text-2xl font-semibold hover:text-orange-500">Home</a>
          <a href="#about" onClick={handleMenuToggle} className="text-2xl font-semibold hover:text-orange-500">About</a>
          <a href="#projects" onClick={handleMenuToggle} className="text-2xl font-semibold hover:text-orange-500">Projects</a>
          <a href="#services" onClick={handleMenuToggle} className="text-2xl font-semibold hover:text-orange-500">Services</a>
          <button onClick={handleMenuToggle} className="bg-orange-500 text-white px-4 py-2 rounded">Download CV</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
