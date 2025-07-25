'use client';

import { Element } from 'react-scroll';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with Next.js, Stripe integration, and inventory management.",
    tags: ["Next.js", "Tailwind CSS", "Cloudinary", "Stripe", "MongoDB"],
    github: "#",
    live: "#"
  },
//   {
//     title: "Portfolio Builder",
//     description: "Interactive portfolio generator with customizable templates and CMS integration.",
//     tags: ["React", "Firebase", "Framer Motion"],
//     github: "#",
//     live: "#"
//   },
//   {
//     title: "Task Management App",
//     description: "Kanban-style productivity app with real-time collaboration features.",
//     tags: ["TypeScript", "React", "WebSockets"],
//     github: "#",
//     live: "#"
//   }

];

export default function Projects() {
  return (
    <div  id="projects" className="min-h-screen py-20 bg-[#f6f5f3] relative">
           {/* Decorative Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute top-24 left-16 w-40 h-40 rounded-full bg-amber-500 mix-blend-multiply filter blur-2xl animate-blob" />
        <div className="absolute top-1/3 right-16 w-48 h-48 rounded-full bg-cyan-500 mix-blend-multiply filter blur-2xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-20 left-1/3 w-52 h-52 rounded-full bg-amber-600 mix-blend-multiply filter blur-2xl animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto px-6">
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
            Here are some of my recent works. Each project was built to solve specific problems and improve my skills.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-[#161b22] rounded-lg overflow-hidden border border-[#30363d] hover:border-cyan-400 transition-all duration-300"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#f6f5f3] mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs px-3 py-1 bg-[#0d1117] text-[#f6f5f3] rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <a 
                    href="https://github.com/rajroka/e-commerce.git"
                    className="flex items-center text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                    aria-label="View on GitHub"
                  >
                    <FiGithub className="mr-2" /> Code
                  </a>
                  <a 
                    href="https://ggshop-vcns.vercel.app/"
                    className="flex items-center text-sm text-gray-400 hover:text-cyan-400 transition-colors"
                    aria-label="View live demo"
                  >
                    <FiExternalLink className="mr-2" /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 border border-cyan-400 text-cyan-400 rounded-md hover:bg-cyan-400 hover:bg-opacity-10 transition-all"
          >
            View All Projects
          </a>
        </motion.div> */}
      </div>
    </div>
  );
}