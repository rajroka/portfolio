'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useContactModal } from '@/contexts/ContactModalContext';

const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 3 + 1.5,
  duration: Math.random() * 6 + 5,
  delay: Math.random() * 4,
}));

export default function Hero() {
  const { open } = useContactModal();

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center bg-white px-6 md:px-16 lg:px-28 relative overflow-hidden"
    >
      {/* Dot particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-cyan-700 opacity-20 pointer-events-none"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
          }}
          animate={{
            y: [0, -18, 0],
            x: [0, 6, 0],
            opacity: [0.15, 0.35, 0.15],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}

      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-12">

        {/* Left — Text */}
        <div className="flex-1">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-gray-500 text-base mb-3"
          >
            Hey, I&apos;m Raj 👋
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-6xl font-black leading-tight mb-2 text-gray-900"
          >
            Raj Roka
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-xl md:text-2xl font-semibold text-cyan-700 mb-5"
          >
            Full-Stack Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-500 text-base max-w-lg mb-8 leading-relaxed"
          >
            Building scalable web applications with modern technologies. I develop fast,
            responsive, and production-ready applications using Next.js, TypeScript,
            Node.js, MongoDB, and cloud technologies.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="/#projects"
              className="bg-cyan-700 hover:bg-cyan-800 text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
            >
              View My Work
            </a>
            <a
              href="/Raj_Roka_Resume.pdf"
              download="Raj_Roka_Resume.pdf"
              className="border border-gray-300 hover:border-cyan-700 hover:text-cyan-700 text-gray-800 font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
            >
              Download Resume
            </a>
          </motion.div>
        </div>

        {/* Right — Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-shrink-0"
        >
          <div className="w-72 h-72 md:w-96 md:h-96 rounded-full border-2 border-gray-300 flex items-center justify-center">
            <div className="relative w-60 h-60 md:w-80 md:h-80 rounded-full overflow-hidden">
              <Image
                src="/p.jpg"
                alt="Raj Roka"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
