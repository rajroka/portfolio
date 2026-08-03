'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import { FiArrowUpRight } from 'react-icons/fi';

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
  const reduce = useReducedMotion();
  const projects = data && data.length > 0 ? data : staticProjects;

  return (
    <section id="projects" className="scroll-mt-16 border-t border-line py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.header
          initial={reduce ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45 }}
          className="mb-14 border-b border-line pb-8"
        >
          <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
            <h2 className="display text-5xl text-ink md:text-6xl">Projects</h2>
          </div>
        </motion.header>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.article
              key={project._id ?? index}
              initial={reduce ? false : { opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.45, delay: (index % 2) * 0.08 }}
              className="corners group border border-line bg-white/70 p-5 transition-colors hover:border-accent"
            >
              <div className="flex items-center justify-between font-mono text-sm tracking-normal">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${project.title} live site`}
                    className="inline-flex items-center gap-1 text-accent transition-colors hover:text-accent-deep"
                  >
                    Open <FiArrowUpRight />
                  </a>
                )}
              </div>

              <div className="relative mt-4 aspect-[16/10] overflow-hidden bg-accent-tint">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center font-mono text-xs tracking-normal text-ink-soft">
                    No screenshot
                  </div>
                )}
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-line px-2 py-0.5 font-mono text-xs tracking-normal text-ink-soft"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h3 className="display mt-5 text-2xl text-ink">{project.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{project.description}</p>

              <div className="mt-5 flex gap-6 border-t border-line pt-4 font-mono text-sm tracking-normal">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink-soft transition-colors hover:text-accent"
                  >
                    GitHub ↗
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink-soft transition-colors hover:text-accent"
                  >
                    Live site ↗
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
