'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowLeft } from 'react-icons/fi';

const socialLinks = [
  { label: 'email', href: 'mailto:ggcode30@gmail.com' },
  { label: 'linkedin', href: 'https://www.linkedin.com/in/raj-roka-4588501b9/' },
  { label: 'github', href: 'https://github.com/rajroka' },
];

const skillCategories = [
  {
    title: 'Frontend',
    skills: ['HTML / CSS', 'JavaScript', 'TypeScript', 'React.js', 'Next.js', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'JWT Auth'],
  },
  {
    title: 'Tools & Others',
    skills: ['Git & GitHub', 'Vercel', 'Cloudinary', 'Figma', 'VS Code'],
  },
  {
    title: 'Soft Skills',
    skills: ['Problem Solving', 'Communication', 'Collaboration', 'Commitment', 'Fast Learner'],
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* Back link */}
      <div className="px-6 md:px-16 lg:px-28 pt-8">
        <Link
          href="/"
          className="inline-flex items-center gap-1 text-sm text-gray-400 hover:text-cyan-700 transition-colors"
        >
          <FiArrowLeft size={14} /> Back to home
        </Link>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-16 lg:px-28 py-12">

        {/* Section heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-black text-gray-900 mb-12"
        >
          About<span className="text-cyan-700">.</span>
        </motion.h1>

        {/* Bio row — photo + text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col md:flex-row gap-10 items-start mb-16"
        >
          {/* Photo */}
          <div className="flex-shrink-0">
            <div className="w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-2 border-gray-300">
              <Image
                src="/p.jpg"
                alt="Raj Roka"
                width={176}
                height={176}
                className="object-cover w-full h-full"
                priority
              />
            </div>
          </div>

          {/* Text */}
          <div className="flex-1">
            <p className="text-gray-900 font-semibold text-base mb-4">
              Heyo! My name is Raj Roka 🙋
            </p>

            <p className="text-gray-500 text-sm leading-relaxed mb-4">
              Let&apos;s talk about building modern web applications — fast, clean, and scalable.
              Next.js and TypeScript are my tools of choice. But let&apos;s also talk about design.
              Let&apos;s talk about reframing problems to better fit people&apos;s needs,
              thinking about the user at every step of the process, and building
              products that are actually enjoyable to use.
            </p>

            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              These are some of the guiding principles that I follow. On any given day,
              you&apos;ll find me rapidly prototyping either by code or design, thinking through
              architecture decisions, or debating with myself whether a component should be
              a server or client component.
            </p>

            {/* Social links */}
            <div className="flex flex-col gap-2">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-700 underline underline-offset-2 hover:text-cyan-700 transition-colors w-fit"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="border-t border-gray-100 mb-16" />

        {/* Skills section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-12">
            Skills<span className="text-cyan-700">.</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {skillCategories.map((category, i) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.25 + i * 0.1 }}
              >
                <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wide">
                  {category.title}
                </h3>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li key={skill} className="text-sm text-gray-500">
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </main>
  );
}
