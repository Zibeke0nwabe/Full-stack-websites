import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start">
          
          {/* Contact Information */}
          <div className="mb-8 md:mb-0">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p>Contact Mr. Somakhwabe at:</p>
            <p className="text-xl font-semibold mt-2">
              <a href="tel:+1234567890" className="text-blue-500 hover:underline">
                +123 456 7890
              </a>
            </p>
            <p className="text-xl font-semibold mt-1">
              <a href="mailto:email@example.com" className="text-blue-500 hover:underline">
                email@example.com
              </a>
            </p>
            <div className="mt-6">
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-blue-500 hover:text-blue-600 transition duration-300">
                  <FaFacebookF size={28} />
                </a>
                <a href="#" className="text-blue-300 hover:text-blue-400 transition duration-300">
                  <FaTwitter size={28} />
                </a>
                <a href="#" className="text-blue-700 hover:text-blue-800 transition duration-300">
                  <FaLinkedin size={28} />
                </a>
              </div>
            </div>
          </div>

          {/* Developer Information */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">Website Developed by</h3>
            <p className="text-lg">Mr. Onwabe Zibeke</p>
            <p className="mt-2">
              <strong>Email:</strong>{' '}
              <a href="mailto:zibekeonwabe@gmail.com" className="text-blue-400 hover:underline">
                zibekeonwabe@gmail.com
              </a>
            </p>
            <p className="mt-2">
              <strong>GitHub:</strong>{' '}
              <a href="https://github.com/Onwabe23" className="text-blue-400 hover:underline">
                @Onwabe23
              </a>
            </p>
            <p className="mt-2">
              <strong>WhatsApp:</strong>{' '}
              <a href="https://wa.me/2784300901" className="text-blue-400 hover:underline">
                078 430 0901
              </a>
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://github.com/Onwabe23" className="text-gray-400 hover:text-white transition duration-300">
                <FaGithub size={28} />
              </a>
              <a href="https://wa.me/2784300901" className="text-green-500 hover:text-green-600 transition duration-300">
                <FaWhatsapp size={28} />
              </a>
            </div>
          </div>

          {/* Additional Information */}
          <div className="max-w-md">
            <h3 className="text-2xl font-bold mb-4">About Port St. Johns</h3>
            <p className="text-lg mb-4 leading-relaxed">
              Explore the breathtaking beauty of the Wild Coast, rich in culture and natural wonders. Plan your visit with Mr. Somakhwabe and immerse yourself in the unique landscapes and vibrant traditions of Port St. Johns.
            </p>
            <a
              href="#book"
              className="inline-block mt-6 px-6 py-2 bg-blue-600 text-white rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300"
            >
              Book Your Tour
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

