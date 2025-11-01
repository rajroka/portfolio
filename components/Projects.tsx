'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    image: "/ecom.png",
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with Next.js, Stripe integration, and inventory management.",
    tags: ["Next.js", "Tailwind CSS", "Cloudinary", "Stripe", "MongoDB"],
    github: "https://github.com/rajroka/e-commerce.git",
    live: "https://ggshop-vcns.vercel.app/",
  },
  {
    image: "/blog.png",
    title: "Blog Platform",
    description:
      "Full-stack blog platform with Next.js, Clerk authentication, and an admin dashboard.",
    tags: ["Next.js", "Tailwind CSS", "Cloudinary", "Clerk", "MongoDB"],
    github: "https://github.com/rajroka/blog-platform",
    live: "https://blog-platform-demo.vercel.app/",
  },
  // {
  //   image: "/task.png",
  //   title: "Task Management App",
  //   description:
  //     "A productivity app with Kanban-style task organization and real-time collaboration.",
  //   tags: ["TypeScript", "React", "WebSockets"],
  //   github: "https://github.com/rajroka/task-manager",
  //   live: "https://taskmanager-demo.vercel.app/",
  // },
];

export default function Projects() {
  return (
    <div
      id="projects"
      className="min-h-screen py-20 font-poppins bg-[#f6f5f3] relative"
    >
      {/* Decorative Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute top-24 left-16 w-40 h-40 rounded-full bg-amber-500 mix-blend-multiply filter blur-2xl animate-blob" />
        <div className="absolute top-1/3 right-16 w-48 h-48 rounded-full bg-cyan-500 mix-blend-multiply filter blur-2xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-20 left-1/3 w-52 h-52 rounded-full bg-amber-600 mix-blend-multiply filter blur-2xl animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto px-6">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#161b22] mb-4">
            My <span className="text-[#161b22]">Projects</span>
          </h2>
          <p className="text-[#161b22] max-w-2xl mx-auto text-lg">
            Here are some of my recent works. Each project was built to solve
            real-world problems and strengthen my full-stack development skills.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#161b22] rounded-lg overflow-hidden border border-[#30363d] hover:border-cyan-400 hover:scale-[1.02] transition-all duration-300 shadow-lg"
            >
              {/* Image Section */}
              <div className="relative w-full h-52">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Text Section */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#f6f5f3] mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-3 py-1 bg-[#0d1117] text-[#f6f5f3] rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    <FiGithub className="mr-2" /> Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                  >
                    <FiExternalLink className="mr-2" /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
