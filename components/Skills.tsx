'use client';

import { motion } from 'framer-motion';

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

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 md:px-16 lg:px-28 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-black text-gray-900 mb-12"
        >
          Skills<span className="text-cyan-700">.</span>
        </motion.h2>

        {/* Categories grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
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

      </div>
    </section>
  );
}
