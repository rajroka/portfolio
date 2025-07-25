'use client';

import { motion } from 'framer-motion';

const Footer = () => {

     const year = new Date().getFullYear();

  return (
    <footer className="w-full py-8 bg-[#161b22]  ">
      <div className="container mx-auto flex justify-center items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-white text-sm">
            © {year} Raj Roka. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
