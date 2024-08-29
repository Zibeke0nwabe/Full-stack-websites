// src/components/Auth/Landing.js
import React, { useState } from 'react';
import {  Link } from 'react-router-dom';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaDatabase } from 'react-icons/fa'; // Import necessary icons
import { RiTailwindCssFill } from 'react-icons/ri'; // Import TailwindCSS icon 
import Carousel from '../Carousel';
import Footer from '../Footer';

const courses = [
  { id: 'html', title: 'Introduction to HTML', description: 'Learn the basics of HTML to build the structure of web pages.', hours: '1.5 Hours', level: 'Beginner', icon: FaHtml5, iconColor: '#E44D26' }, // HTML color
  { id: 'css', title: 'Introduction to CSS', description: 'Understand the fundamentals of CSS for styling web pages.', hours: '2.0 Hours', level: 'Beginner', icon: FaCss3Alt, iconColor: '#1572B6' }, // CSS color
  { id: 'javascript', title: 'Introduction to JavaScript', description: 'Explore the basics of JavaScript programming for web development.', hours: '2.5 Hours', level: 'Beginner', icon: FaJs, iconColor: '#F7DF1E' }, // JavaScript color
  { id: 'react', title: 'Introduction to React', description: 'Get started with React to build interactive UIs.', hours: '3.0 Hours', level: 'Beginner', icon: FaReact, iconColor: '#61DAFB' }, // React color
  { id: 'tailwind', title: 'Introduction to TailwindCSS', description: 'Learn to use TailwindCSS for efficient and modern styling.', hours: '2.0 Hours', level: 'Beginner', icon: RiTailwindCssFill, iconColor: '#38B2AC' }, // TailwindCSS color
  { id: 'mongodb', title: 'Introduction to MongoDB', description: 'Discover the basics of MongoDB, a NoSQL database.', hours: '2.5 Hours', level: 'Beginner', icon: FaDatabase, iconColor: '#4DB33D' }, // MongoDB color
];

const faqs = [
  {
    question: "What is Esgela?",
    answer: "Esgela is an online coding bootcamp offering free courses. It was founded by Onwabe Zibeke, a software developer who graduated from Durban University of Technology (DUT) in 2022. Esgela aims to provide accessible education to the rural community of Port St. Johns and beyond."
  },
  {
    question: "Are there any hidden charges or fees associated with the courses?",
    answer: "No, all courses offered by Esgela are completely free. We believe in providing accessible education to everyone."
  },
  {
    question: "How many free courses can I enroll in at the same time?",
    answer: "You can enroll in as many courses as you like. There is no limit to the number of courses you can take simultaneously."
  },
  {
    question: "Can these free courses help me get a job?",
    answer: "Yes, our courses are designed to provide practical skills that can help you secure a job in the tech industry. We focus on hands-on learning and real-world projects."
  },
  {
    question: "How will I get the course completion certificate?",
    answer: "Upon successfully completing a course, you will receive a certificate of completion that you can download from our platform."
  },
  {
    question: "Is there any time duration for completing these courses?",
    answer: "No, you can complete the courses at your own pace. There are no deadlines or time constraints."
  }
];

const Landing = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      <Carousel />
      <h2 className="p-2 text-2xl font-bold mb-4 p-4">Top Courses</h2>
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div key={course.id} className="bg-white shadow p-4 rounded border border-gray-300 flex flex-col h-full">
            <img
              src={course.imageUrl}
              alt={course.title}
              className="w-full h-32 object-cover mb-4 rounded"
            />
            <div className="flex justify-between items-center mb-2">
              <span className="bg-yellow-700 text-white text-xs py-1 px-2 rounded">Top Faculty</span>
              <span className="text-gray-500 text-sm">{course.level}</span>
            </div>
            <h3 className="text-black text-lg font-bold mb-1 flex-grow">{course.title}</h3>
            <p className="text-gray-600 text-sm mb-2 flex-grow">{course.description}</p>
            <div className="text-gray-500 text-xs mb-4">{course.hours}</div>
            <Link to="/login">
            <button
              className="bg-yellow-700 hover:bg-yellow-800 focus:outline-none focus:ring-2 focus:ring-yellow-500 text-white font-semibold w-full py-2 rounded-lg shadow-md transition-transform transform hover:scale-105"
            >
              Enroll Now
            </button>
            </Link>
          </div>
        ))}
      </div>
      <section className="bg-white py-12 w-full">
        <div className="flex flex-wrap items-start px-6">
          <div className="flex-shrink-0 w-2/3 max-w-xs">
            <img src="/favicon.jpg" alt="About Us" className="rounded shadow-sm w-full" />
          </div>
          <div className="flex-grow w-2/3 ml-8">
            <h2 className="text-3xl font-bold mb-8">About Us</h2>
            <p className="text-gray-700">
              Esgela is an innovative online coding bootcamp based in the rural town of Port St. Johns. Founded by Onwabe Zibeke, a dedicated software developer and graduate of Durban University of Technology (DUT) in 2022, Esgela aims to provide accessible and free coding education to individuals regardless of their location or financial situation.
            </p>
            <p className="text-gray-700 mt-4">
              Our mission is to empower learners with essential coding skills through a range of courses, including HTML, CSS, JavaScript, React, TailwindCSS, and MongoDB. We believe in breaking down barriers to education and creating opportunities for everyone to thrive in the tech industry. Join us on this journey to unlock your potential and gain the knowledge needed to succeed in a rapidly evolving digital world.
            </p>
          </div>
        </div>
      </section>
      <div className="bg-white py-12 w-full">
        <div className="flex flex-wrap items-start px-6">
          <div className="flex-grow max-w-full">
            <h2 className="text-3xl font-bold mb-8">Why You Should Choose Our Courses</h2>
            <div className="space-y-6">
              {[
                { title: 'Share your Certificate', description: 'Stand out to your professional network by sharing your certificate.' },
                { title: 'Learn from Industry Experts', description: 'Get in-depth, hands-on learning from industry experts.' },
                { title: 'Free Lifetime Access', description: 'Gain access to free guides on career paths, salary trends, and more.' },
                { title: 'Flexible Learning', description: 'Learn at your own pace from any location, using any device.' },
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="text-yellow-700 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="max-w-lg ml-auto">
            <img src="/esgela.png" alt="Esgela" className="rounded shadow-sm w-full h-full" />
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto p-8">
        <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-300 mb-4">
            <div
              className="flex justify-between items-center p-4 cursor-pointer"
              onClick={() => toggle(index)}
            >
              <h3 className="text-lg font-medium">{faq.question}</h3>
              <span className="text-xl">{openIndex === index ? '-' : '+'}</span>
            </div>
            {openIndex === index && (
              <div className="p-4 text-gray-600">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default Landing;