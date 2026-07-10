'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMessageCircle } from 'react-icons/fi';
import Link from 'next/link';
import { useContactModal } from '@/contexts/ContactModalContext';

const navLinks = [
  { label: 'Home', href: '/#hero' },
  { label: 'Projects', href: '/#projects' },
];

export default function Navbar({ onContact }: { onContact?: () => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const { open } = useContactModal();
  const handleContact = onContact ?? open;

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="bg-white text-gray-800 sticky top-0 z-50 border-b border-gray-100 shadow-sm"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Link href="/" className="text-lg font-black tracking-tight text-gray-900">
            RajRoka<span className="text-cyan-700">.</span>
          </Link>
        </motion.div>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, i) => (
            <motion.div
              key={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
            >
              <a
                href={link.href}
                className="text-sm text-gray-600 hover:text-cyan-700 transition-colors duration-200"
              >
                {link.label}
              </a>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 + navLinks.length * 0.08 }}
          >
            <Link
              href="/about"
              className="text-sm text-gray-600 hover:text-cyan-700 transition-colors duration-200"
            >
              About
            </Link>
          </motion.div>
        </div>

        {/* Get in Touch icon */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="hidden md:flex"
        >
          <motion.button
            onClick={handleContact}
            whileHover={{ scale: 1.1, backgroundColor: '#0e7490' }}
            whileTap={{ scale: 0.95 }}
            aria-label="Get in touch"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-900 text-white"
          >
            <FiMessageCircle size={18} />
          </motion.button>
        </motion.div>

        {/* Hamburger */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
          className="md:hidden text-2xl focus:outline-none text-gray-700"
        >
          {isOpen ? '✕' : '☰'}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-white border-t border-gray-100"
          >
            <div className="px-6 pb-6 pt-2">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-3 text-base text-gray-700 hover:text-cyan-700 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.07 }}
              >
                <Link
                  href="/about"
                  onClick={() => setIsOpen(false)}
                  className="block py-3 text-base text-gray-700 hover:text-cyan-700 transition-colors duration-200"
                >
                  About
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
              >
                <button
                  onClick={() => { handleContact(); setIsOpen(false); }}
                  className="flex items-center justify-center gap-2 mt-4 w-full bg-gray-900 hover:bg-cyan-700 text-white font-semibold py-3 rounded-lg transition-colors"
                >
                  <FiMessageCircle size={16} />
                  Get in Touch
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
