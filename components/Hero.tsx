'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import { Link as ScrollLink } from 'react-scroll';

export default function Hero() {
  return (
    <div
      id="hero"
      className="w-full min-h-screen bg-[#f6f5f3] px-6 md:px-12 py-14 lg:py-20 flex flex-col md:flex-row items-center justify-between relative overflow-hidden"
    >
      {/* Decorative Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute top-24 left-16 w-40 h-40 rounded-full bg-amber-500 mix-blend-multiply filter blur-2xl animate-blob" />
        <div className="absolute top-1/3 right-16 w-48 h-48 rounded-full bg-cyan-500 mix-blend-multiply filter blur-2xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-20 left-1/3 w-52 h-52 rounded-full bg-amber-600 mix-blend-multiply filter blur-2xl animate-blob animation-delay-4000" />
      </div>

      {/* Left Side */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col justify-center md:w-1/2 w-full space-y-6 relative z-10"
      >
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight">
          Hi , <span className="text-[#161b22]">My name is Raj Roka </span>
        </h1>
        <p className="text-base sm:text-lg lg:text-xl text-gray-800 max-w-lg">
          I design and build modern, performant websites with Next.js, React, and Tailwind CSS. Let’s create something exceptional.
        </p>
        <div className="flex flex-wrap gap-4">
         <ScrollLink
  to="projects" // ID of the target section
  smooth={true}
  duration={500}
  offset={-70} // Optional: adjust for fixed navbar
  className="flex items-center gap-2 px-6 py-3 bg-[#161b22] text-white rounded-lg hover:bg-cyan-700 transition-all duration-300 shadow-md cursor-pointer"
>
  <ArrowRight size={18} />
  View Projects
</ScrollLink>

         <ScrollLink
  to="contact" // ID of the target section
  smooth={true}
  duration={500}
  offset={-70} // Optional: adjust for fixed navbar
  className="flex items-center gap-2 px-6 py-3 bg-[#161b22] font-poppins text-white rounded-lg hover:bg-cyan-700 transition-all duration-300 shadow-md cursor-pointer"
>
  <ArrowRight size={18} />
  Contact  
</ScrollLink>
        </div>
        <div className="flex items-center flex-wrap gap-3 mt-6">
          {['Next.js', 'React', 'Tailwind' , 'Mongodb' , 'Zustand' ,'Redux' , 'node'].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-white bg-gray-800 rounded-full text-sm font-medium shadow-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Right Side: Image */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex justify-center items-center md:w-1/2 w-full mt-12 md:mt-0 relative z-10"
      >
        <div className="relative">
          <div className="absolute  rounded-3xl blur-2xl scale-105" />
          <Image
            src="/p.jpg"
            alt="Portfolio preview"
            width={420}
            height={420}
            className="rounded-2xl object-cover w-full max-w-xs md:max-w-sm h-auto shadow-2xl border-4 border-white"
            priority
          />
        </div>
      </motion.div>

      <style jsx global>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 9s ease-in-out infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
}
