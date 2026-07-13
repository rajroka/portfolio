'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';

export interface ProjectData {
  _id?: string;
  image?: string;
  title: string;
  description: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
}

const staticProjects: ProjectData[] = [
  {
    _id: '1',
    image: '/ecom.png',
    title: 'E-Commerce Platform',
    description:
      'Full-stack e-commerce solution with Next.js, Stripe integration, and inventory management.',
    tags: ['Next.js', 'Tailwind CSS', 'Stripe', 'MongoDB'],
    githubUrl: 'https://github.com/rajroka/e-commerce.git',
    liveUrl: 'https://e-commerce-yq58.vercel.app/',
  },
  {
    _id: '2',
    image: '/Screenshot (155).png',
    title: 'Blog Platform',
    description:
      'Full-stack blog platform with Next.js, Clerk authentication, and an admin dashboard.',
    tags: ['Next.js', 'Tailwind CSS', 'Clerk', 'MongoDB'],
    githubUrl: 'https://github.com/rajroka/blogging-site',
    liveUrl: 'https://blogging-site-gn4n.vercel.app/',
  },
  {
    _id: '3',
    image: '/postsathi.png',
    title: 'PostSathi',
    description:
      'A social media management system to schedule, manage, and track posts across platforms.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MongoDB'],
    liveUrl: 'https://post-sathi.vercel.app/',
  },
];

interface ProjectsProps {
  data?: ProjectData[] | null;
}

export default function Projects({ data }: ProjectsProps) {
  const projects = data && data.length > 0 ? data : staticProjects;

  return (
    <section id="projects" className="py-20 px-6 md:px-16 lg:px-28 bg-white">
      <div className="max-w-6xl mx-auto">

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-black text-gray-900 mb-12"
        >
          Projects<span className="text-cyan-700">.</span>
        </motion.h2>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project._id ?? index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              {/* Image container — gray bg with cyan accent corner */}
              <div className="relative w-full h-52 bg-gray-100 rounded-xl overflow-hidden mb-4">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
                    No image
                  </div>
                )}
              
              </div>

              {/* Title + link */}
              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-lg font-bold text-gray-900">{project.title}</h3>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-cyan-700 transition-colors"
                    aria-label="Live site"
                  >
                    <FiExternalLink size={15} />
                  </a>
                )}
              </div>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-relaxed">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
