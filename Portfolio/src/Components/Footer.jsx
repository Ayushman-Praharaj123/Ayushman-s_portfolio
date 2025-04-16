import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 border-t border-gray-800">
      <div className="container mx-auto px-8 md:px-16 lg:px-24 text-center">
        <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          Ayushman Praharaj
        </h3>
        <p className="text-gray-400 mb-6">
          Crafting beautiful web experiences with passion & precision.
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 text-xl mb-6">
          <a
            href="https://github.com/Ayushman-Praharaj123"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition-transform duration-300 hover:scale-110"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/ayushman-praharaj-28985231b/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-transform duration-300 hover:scale-110"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition-transform duration-300 hover:scale-110"
          >
            <FaInstagram />
          </a>
          <a
            href="mailto:ayushmanpraharaj85@gmail.com"
            className="hover:text-yellow-400 transition-transform duration-300 hover:scale-110"
          >
            <FaEnvelope />
          </a>
        </div>

        {/* Bottom Line */}
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} The site is managed by Ayushman Praharaj.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
