'use client';

import { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#161b22] text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-xl font-bold">My Portfolio</div>

        {/* Hamburger button for mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
            className="text-2xl"
          >
            {isOpen ? '✕' : '☰'}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <ScrollLink to="hero" smooth duration={500} offset={-70} className="cursor-pointer hover:text-cyan-400">
            Home
          </ScrollLink>
          <ScrollLink to="about" smooth duration={500} offset={-70} className="cursor-pointer hover:text-cyan-400">
            About
          </ScrollLink>
          <ScrollLink to="projects" smooth duration={500} offset={-70} className="cursor-pointer hover:text-cyan-400">
            Projects
          </ScrollLink>
          <ScrollLink to="contact" smooth duration={500} offset={-70} className="cursor-pointer hover:text-cyan-400">
            Contact
          </ScrollLink>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col space-y-4">
          <ScrollLink
            to="hero"
            smooth
            duration={500}
            offset={-70}
            onClick={() => setIsOpen(false)}
            className="cursor-pointer hover:text-cyan-400"
          >
            Home
          </ScrollLink>
          <ScrollLink
            to="about"
            smooth
            duration={500}
            offset={-70}
            onClick={() => setIsOpen(false)}
            className="cursor-pointer hover:text-cyan-400"
          >
            About
          </ScrollLink>
          <ScrollLink
            to="projects"
            smooth
            duration={500}
            offset={-70}
            onClick={() => setIsOpen(false)}
            className="cursor-pointer hover:text-cyan-400"
          >
            Projects
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth
            duration={500}
            offset={-70}
            onClick={() => setIsOpen(false)}
            className="cursor-pointer hover:text-cyan-400"
          >
            Contact
          </ScrollLink>
        </div>
      )}
    </nav>
  );
}
