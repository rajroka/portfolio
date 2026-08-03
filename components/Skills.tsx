'use client';

import { motion, useReducedMotion } from 'framer-motion';

interface Skill {
  name: string;
}

interface Layer {
  layer: string;
  items: Skill[];
}

const skillLayers: Layer[] = [
  {
    layer: 'Layer 01 — Frontend',
    items: [
      { name: 'Next.js' },
      { name: 'React.js' },
      { name: 'TypeScript' },
      { name: 'Tailwind CSS' },
      { name: 'HTML / CSS' },
    ],
  },
  {
    layer: 'Layer 02 — Backend',
    items: [
      { name: 'Node.js' },
      { name: 'Express.js' },
      { name: 'MongoDB' },
      { name: 'REST APIs' },
      { name: 'JWT Auth' },
    ],
  },
  {
    layer: 'Layer 03 — Tooling',
    items: [
      { name: 'Git & GitHub' },
      { name: 'Vercel' },
      { name: 'Cloudinary' },
      { name: 'Figma' },
      { name: 'VS Code' },
    ],
  },
  {
    layer: 'Layer 04 — Practice',
    items: [
      { name: 'Problem solving' },
      { name: 'Communication' },
      { name: 'Collaboration' },
      { name: 'Commitment' },
      { name: 'Fast learner' },
    ],
  },
];

export default function Skills() {
  const reduce = useReducedMotion();

  return (
    <section id="skills" className="grid-bg scroll-mt-16 border-t border-line py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.header
          initial={reduce ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.45 }}
          className="mb-14 border-b border-line pb-8"
        >
          <div className="mt-4">
            <h2 className="display text-5xl text-ink md:text-6xl">Stack</h2>
          </div>
        </motion.header>

        <div className="grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-4">
          {skillLayers.map((layer, i) => (
            <motion.div
              key={layer.layer}
              initial={reduce ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.4, delay: (i % 4) * 0.06 }}
            >
              <h3 className="border-b border-line pb-3 font-mono text-xs tracking-normal text-ink">
                {layer.layer}
              </h3>
              <ul className="mt-5 space-y-3">
                {layer.items.map((skill) => (
                  <li
                    key={skill.name}
                    className="font-mono text-sm tracking-normal text-ink"
                  >
                    {skill.name}
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
