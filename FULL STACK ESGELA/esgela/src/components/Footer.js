import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12">
  <div className="container mx-auto px-6">
    {/* Footer Sections */}
    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
      {/* About Esgela Section */}
      <div>
        <h3 className="text-2xl font-bold mb-4 text-yellow-500">About Esgela</h3>
        <p className="text-white mb-4">
          Esgela is dedicated to providing high-quality coding education. Our mission is to empower individuals with the skills they need to excel in the tech industry.
        </p>
        <p className="text-white">
          Founded in 2024, we offer a range of free courses to help you start your journey in tech. Join us today!
        </p>
      </div>

      {/* Useful Links Section */}
      <div>
        <h3 className="text-2xl font-bold mb-4 text-yellow-500">Useful Links</h3>
        <ul className="space-y-2">
          <li><a href="#home" className="text-gray-300 hover:text-yellow-500 transition duration-300">Home</a></li>
          <li><a href="#courses" className="text-gray-300 hover:text-yellow-500 transition duration-300">Courses</a></li>
          <li><a href="#about" className="text-gray-300 hover:text-yellow-500 transition duration-300">About Us</a></li>
          <li><a href="#contact" className="text-gray-300 hover:text-yellow-500 transition duration-300">Contact</a></li>
        </ul>
      </div>

      {/* Newsletter Section */}
      <div>
        <h3 className="text-2xl font-bold mb-4 text-yellow-500">Stay Updated</h3>
        <p className="text-white mb-4">
          Subscribe to our newsletter to receive the latest updates, course offerings, and more.
        </p>
        <form className="flex flex-col">
          <input
            type="email"
            placeholder="Your Email"
            className="px-4 py-2 rounded bg-gray-800 border border-gray-600 text-white placeholder-gray-400 mb-4"
            required
          />
          <button
            type="submit"
            className="bg-yellow-500 text-black py-2 px-4 rounded hover:bg-yellow-400 transition duration-300 font-semibold"
          >
            Subscribe
          </button>
        </form>
      </div>

      {/* Contact Section */}
      <div>
        <h3 className="text-2xl font-bold mb-4 text-yellow-500">Contact Us</h3>
        <p className="text-white mb-4">
          We'd love to hear from you. Reach out to us through the following channels:
        </p>
        <ul className="space-y-2">
          <li>Email: <a href="mailto:support@esgela.com" className="text-yellow-500 hover:underline">support@esgela.com</a></li>
          <li>Phone: <a href="tel:+1234567890" className="text-yellow-500 hover:underline">+1 234 567 890</a></li>
        </ul>
      </div>
    </div>

    {/* Footer Bottom Section */}
    <div className="border-t border-gray-700 pt-6 mt-6">
      <div className="flex flex-col md:flex-row md:justify-between items-center">
        {/* Donate Button */}
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <p className="text-white mb-4">
            Support our mission to provide free education by making a donation. Your contribution helps us reach more individuals.
          </p>
          <a
            href="#donate"
            className="bg-yellow-500 text-black py-2 px-6 rounded hover:bg-yellow-400 transition duration-300 font-semibold"
          >
            Donate Now
          </a>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-4 mt-6 md:mt-0">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-500 transition duration-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2.04c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zm0 18.07c-4.4 0-8-3.6-8-8 0-4.4 3.6-8 8-8 4.4 0 8 3.6 8 8 0 4.4-3.6 8-8 8zm1.8-11.4h-1.3c-1.1 0-1.8.6-1.8 1.5v1.6h-1v1.6h1v4.6h1.9v-4.6h1.3l.2-1.6z"/>
            </svg>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-500 transition duration-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M23 3c-.8.4-1.7.7-2.7.8 1-1 1.8-2.5 1.8-4.2-1 .6-2.1 1-3.2 1.3-1-1-2.4-1.6-3.9-1.6-3 0-5.4 2.5-5.4 5.5 0 .4 0 .7.1 1.1-4.5-.2-8.6-2.4-11.3-5.7-.5.9-.8 1.9-.8 3 0 2.1 1.1 3.9 2.8 5-1.1 0-2.2-.3-3.1-.8v.1c0 2.9 2.1 5.3 4.8 5.9-.5.1-1.1.2-1.7.2-.4 0-.8 0-1.2-.1.8 2.4 3.1 4.2 5.8 4.3-2.1 1.7-4.7 2.7-7.6 2.7-.5 0-1 0-1.5-.1 2.8 1.8 6.1 2.9 9.7 2.9 11.6 0 17.9-9.6 17.9-17.9v-.8c1.2-.9 2.2-2 3-3.3z"/>
            </svg>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-500 transition duration-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10-4.5-10-10-10zm-1.8 14.4h-1.9v-5.9h1.9v5.9zm-1.1-6.7h-.1c-.6 0-1.1-.5-1.1-1.1s.5-1.1 1.1-1.1 1.1.5 1.1 1.1c0 .6-.5 1.1-1.1 1.1zm11.3 6.7h-1.9v-3.3c0-.8-.3-1.3-1-1.3-.5 0-.8.3-1.1.7v3.9h-1.9v-5.9h1.9v.8c.3-.5.9-1.2 2.1-1.2 1.5 0 2.6 1.1 2.6 3.4v3.5zm-5.3-7.4h-1.9v-1.9h1.9v1.9zm0 7.1h-1.9v-5.9h1.9v5.9z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</footer>

  );
};

export default Footer;