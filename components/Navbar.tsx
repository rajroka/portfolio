'use client';

import { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#161b22] text-white sticky top-0 z-50 font-poppins shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold cursor-pointer select-none">My Portfolio</div>

        {/* Hamburger for mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            className="text-3xl focus:outline-none  hover:bg-gray-700 px-2 py-1   rounded"
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center">
          <ScrollLink
            to="hero"
            smooth
            duration={500}
            offset={-70}
            className="cursor-pointer hover:text-cyan-400 transition-colors duration-300"
          >
            Home
          </ScrollLink>

          <ScrollLink
            to="about"
            smooth
            duration={500}
            offset={-70}
            className="cursor-pointer hover:text-cyan-400 transition-colors duration-300"
          >
            About
          </ScrollLink>

          <ScrollLink
            to="projects"
            smooth
            duration={500}
            offset={-70}
            className="cursor-pointer hover:text-cyan-400 transition-colors duration-300"
          >
            Projects
          </ScrollLink>

          <ScrollLink
            to="contact"
            smooth
            duration={500}
            offset={-70}
            className="cursor-pointer hover:text-cyan-400 transition-colors duration-300"
          >
            Contact
          </ScrollLink>

          <a
            href="/rajroka-cv.pdf"
            download="Raj-Roka-CV.pdf"
            className=" bg-[#f6f5f3] hover:bg-gray-700 text-black  hover:text-white  py-2 px-5 rounded-md transition"
          >
            Download CV
          </a>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#161b22] px-6 pb-6 rounded-b-lg shadow-lg">
          <ScrollLink
            to="hero"
            smooth
            duration={500}
            offset={-70}
            onClick={() => setIsOpen(false)}
            className="block py-3 text-lg cursor-pointer hover:text-cyan-400 transition-colors duration-300"
          >
            Home
          </ScrollLink>

          <ScrollLink
            to="about"
            smooth
            duration={500}
            offset={-70}
            onClick={() => setIsOpen(false)}
            className="block py-3 text-lg cursor-pointer hover:text-cyan-400 transition-colors duration-300"
          >
            About
          </ScrollLink>

          <ScrollLink
            to="projects"
            smooth
            duration={500}
            offset={-70}
            onClick={() => setIsOpen(false)}
            className="block py-3 text-lg cursor-pointer hover:text-cyan-400 transition-colors duration-300"
          >
            Projects
          </ScrollLink>

          <ScrollLink
            to="contact"
            smooth
            duration={500}
            offset={-70}
            onClick={() => setIsOpen(false)}
            className="block py-3 text-lg cursor-pointer hover:text-cyan-400 transition-colors duration-300"
          >
            Contact
          </ScrollLink>

          <a
            href="/cv.pdf"
            download="Raj-Roka-CV.pdf"
            onClick={() => setIsOpen(false)}
            className="block text-center mt-4 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-3 rounded-md transition"
          >
            Download CV
          </a>
        </div>
      )}
    </nav>
  );
}
