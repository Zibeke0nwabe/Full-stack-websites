// src/App.js
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/HeroSection';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Portfolio from './components/Portfolio';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      
      <Hero />
      <Services />
      <Gallery/>
      <Portfolio />
      <FAQ/>
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;
