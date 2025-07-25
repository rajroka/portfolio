'use client';

import { motion } from 'framer-motion';
import React from 'react';

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen relative bg-[#f6f5f3] flex items-center justify-center px-6 py-16"
    >
  <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute top-24 left-16 w-40 h-40 rounded-full bg-amber-500 mix-blend-multiply filter blur-2xl animate-blob" />
        <div className="absolute top-1/3 right-16 w-48 h-48 rounded-full bg-cyan-500 mix-blend-multiply filter blur-2xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-20 left-1/3 w-52 h-52 rounded-full bg-amber-600 mix-blend-multiply filter blur-2xl animate-blob animation-delay-4000" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl w-full"
      >
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            About <span className="text-[#161b22]">Me</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto"
          >
            I'm a full-stack developer specializing in modern web technologies. With expertise in <strong className="font-medium">Next.js</strong>, <strong className="font-medium">React</strong>, and <strong className="font-medium">TypeScript</strong>, I build fast, accessible, and visually appealing digital experiences.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12 grid md:grid-cols-2 gap-8  md:gap-12"
        >
          <div className="bg-[#161b22] p-6 rounded-xl shadow-sm">
            <h3 className="text-2xl font-semibold text-[#f6f5f3] mb-4 flex items-center">
              <span className="mr-2">🛠️</span> Technical Skills
            </h3>
            <ul className="space-y-3">
              {[
                'Next.js & React ',
                'TypeScript & JavaScript (ES6+)',
                'Tailwind CSS ',
                'Node.js & Express',
                'MongoDB & Prisma',
                'Redux & Zustand'
              ].map((skill, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-cyan-600 mr-2">•</span>
                  <span className="text-gray-400">{skill}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[#161b22]  p-6 rounded-xl shadow-sm">
            <h3 className="text-2xl font-semibold text-[#f6f5f3] mb-4 flex items-center">
              <span className="mr-2">🌍</span> Location & Availability
            </h3>
            <p className="text-[#f6f5f3] mb-4">
              Based in <span className="font-medium">Pokhara , Nepal</span> 
            </p>
            <div className="mt-6">
              <h4 className="font-medium text-gray-400 mb-2">Beyond Coding:</h4>
              <p className="text-gray-400">
                I am also like to design and play games .
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}