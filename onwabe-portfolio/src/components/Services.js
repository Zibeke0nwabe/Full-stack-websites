import React from 'react';

const services = [
  { title: 'MERN Stack Development', description: 'Building modern and efficient web applications with MongoDB, Express.js, React, and Node.js.' },
  { title: 'UI/UX Design', description: 'Crafting intuitive user experiences and interfaces with a focus on responsiveness and accessibility.' },
  { title: 'Full-Stack Web Development', description: 'Developing scalable and secure web applications, from front-end design to back-end integration.' },
  { title: 'Responsive Web Design', description: 'Ensuring that websites are fully responsive and optimized for various devices and screen sizes using Tailwind CSS.' },
  { title: 'Interactive Coding Platforms', description: 'Creating interactive coding environments and educational platforms for web development training.' },
  { title: 'E-Commerce Solutions', description: 'Designing and developing e-commerce platforms with advanced search, filtering, and user-friendly interfaces.' },
];
const Services = () => {
  return (
    <section id="services" className="py-20 bg-white text-center">
      <h2 className="text-3xl font-bold mb-8">Awesome Services For You</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        {services.map((service, index) => (
          <div key={index} className="bg-gray-50 shadow-md p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-700">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
