// src/components/Services.js
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const services = [
  {
    title: "Guided Nature Hikes",
    description: "Explore the stunning landscapes of Port St. Johns with a knowledgeable guide leading the way.",
    imageUrl: "/image17.jpg",
  },
  {
    title: "Cultural Tours",
    description: "Immerse yourself in the rich cultural heritage of the local communities.",
    imageUrl: "/image8.jpg",
  },
  {
    title: "Bird Watching",
    description: "Discover the diverse bird species that inhabit the region.",
    imageUrl: "/image22.jpg",
  },
];

const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="services" className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800">Our Services</h2>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              data-aos="fade-right"
            >
              <img
                src={service.imageUrl}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">{service.title}</h3>
                <p className="mt-4 text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;