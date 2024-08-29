// src/components/Portfolio.js
import React from 'react';

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Featured Works</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="relative">
            <img src="/image12.jpg" alt="Project 1" className="w-full h-48 object-cover rounded" />
          </div>
          <div className="relative">
            <img src="/image23.jpg" alt="Project 2" className="w-full h-48 object-cover rounded" />
          </div>
          <div className="relative">
            <img src="/image32.jpg" alt="Project 3" className="w-full h-48 object-cover rounded" />
          </div>
          <div className="relative">
            <img src="/image28.jpg" alt="Project 4" className="w-full h-48 object-cover rounded" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
