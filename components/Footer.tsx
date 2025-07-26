'use client';

import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiFacebook, FiMail } from 'react-icons/fi';
import Link from 'next/link';

const Footer = () => {
  const year = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      icon: <FiGithub />,
      url: 'https://github.com/yourusername', // replace with your GitHub
    },
    {
      name: 'LinkedIn',
      icon: <FiLinkedin />,
      url: 'https://linkedin.com/in/yourusername', // replace with your LinkedIn
    },
    {
      name: 'Facebook',
      icon: <FiFacebook />,
      url: 'https://www.facebook.com/rajpariroka', // replace with your Facebook
    },
    {
      name: 'Email',
      icon: <FiMail />,
      url: 'mailto:youremail@example.com', // replace with your email
    },
  ];

  return (
    <footer className="w-full bg-[#0f1115] text-white py-10 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Side: Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-gray-400">
            © {year} Raj Roka. All rights reserved.
          </p>
        </motion.div>

        {/* Right Side: Social Links */}
        <motion.div
          className="flex gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          {socialLinks.map(({ name, icon, url }) => (
            <motion.a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
              className="text-xl text-gray-300 hover:text-white transition-colors"
              aria-label={name}
            >
              {icon}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
