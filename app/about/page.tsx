'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowLeft } from 'react-icons/fi';

const socialLinks = [
  { label: 'Email', href: 'mailto:ggcode30@gmail.com' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/raj-roka-4588501b9/' },
  { label: 'GitHub', href: 'https://github.com/rajroka' },
];

const specRows = [
  { k: 'Role', v: 'Full-Stack Developer' },
  { k: 'Stack', v: 'Next.js · TypeScript · Node' },
  { k: 'Focus', v: 'Product & systems' },
  { k: 'Status', v: 'Open for work' },
];

const skillLayers = [
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

export default function AboutPage() {
  const reduce = useReducedMotion();
  const fade = reduce
    ? {}
    : { initial: { opacity: 0, y: 14 }, animate: { opacity: 1, y: 0 } };

  return (
    <main className="min-h-screen text-ink">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 font-mono text-sm tracking-normal text-ink-soft transition-colors hover:text-accent"
        >
          <FiArrowLeft /> Back to index
        </Link>

        <motion.h1
          {...fade}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="display mt-5 text-5xl text-ink md:text-7xl"
        >
          About
        </motion.h1>

        <div className="mt-14 grid gap-12 md:grid-cols-[0.85fr_1.15fr]">
          {/* Left column — portrait + spec */}
          <motion.div {...fade} transition={{ duration: 0.5, delay: 0.1 }}>
            <div className="corners border border-line bg-white/70 p-3">
              <div className="relative aspect-[4/5] overflow-hidden bg-accent-tint">
                <Image
                  src="/p.jpg"
                  alt="Portrait of Raj Roka"
                  fill
                  sizes="(max-width: 768px) 90vw, 35vw"
                  className="object-cover"
                />
              </div>
              <div className="mt-3 flex items-center justify-between font-mono text-xs tracking-normal text-ink-soft">
                <span>RR</span>
              </div>
            </div>

            <div className="corners mt-6 border border-line bg-white/70 p-6">
              <div className="flex flex-col gap-3.5">
                {specRows.map((row) => (
                  <div
                    key={row.k}
                    className="grid grid-cols-[72px_1fr] gap-4 font-mono text-xs tracking-normal"
                  >
                    <span className="text-ink-soft">{row.k}</span>
                    <span className={row.k === 'Status' ? 'text-accent' : 'text-ink'}>
                      {row.v}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right column — bio */}
          <motion.div {...fade} transition={{ duration: 0.5, delay: 0.15 }}>
            <p className="font-mono text-sm tracking-normal text-ink">
              Hello — Raj Roka here.
            </p>

            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-ink-soft">
              I build full-stack web applications — fast, clean, and scalable. Next.js and
              TypeScript are my tools of choice. But I care as much about design: reframing
              problems to fit the people using them, thinking about the user at every step, and
              shipping products that are genuinely enjoyable to use.
            </p>

            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-ink-soft">
              Those are the principles I work by. On any given day you&apos;ll find me rapidly
              prototyping by code or by design, thinking through architecture decisions, or
              debating with myself whether a component should be a server or client component.
            </p>

            <div className="mt-10 border-t border-line pt-6">
              <p className="label mb-4 text-ink-soft">Index</p>
              <div className="flex flex-col gap-2.5">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-fit font-mono text-sm tracking-normal text-ink-soft transition-colors hover:text-accent"
                  >
                    {link.label} ↗
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stack matrix */}
        <section className="mt-24 border-t border-line pt-14">
          <motion.div
            {...fade}
            transition={{ duration: 0.45 }}
            className="mb-12 flex flex-wrap items-end justify-between gap-4 border-b border-line pb-8"
          >
          </motion.div>

          <div className="grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-4">
            {skillLayers.map((layer) => (
              <div key={layer.layer}>
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
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
