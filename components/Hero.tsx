'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';

const specRows = [
  { k: 'Role', v: 'Full-Stack Developer' },
  { k: 'Stack', v: 'Next.js · TypeScript · Node' },
];

export default function Hero() {
  const reduce = useReducedMotion();
  const rise = reduce ? undefined : { initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 } };

  return (
    <section id="hero" className="relative overflow-hidden border-b border-line">
      <div className="grid-bg pointer-events-none absolute inset-0" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-6 pb-20 pt-10 md:pb-28 md:pt-14">
        <div className="grid items-center gap-14 pt-16 md:grid-cols-[1.15fr_0.85fr] md:pt-24">
          {/* Manifest */}
          <div>
            <motion.h1
              {...rise}
              transition={{ duration: 0.5, delay: 0.05 }}
              className="display mt-5 text-[clamp(3rem,10vw,6.5rem)] text-ink"
            >
              Raj Roka
            </motion.h1>

            <motion.p
              {...rise}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-4 font-mono text-sm tracking-normal text-ink-soft"
            >
              Full-stack developer — systems &amp; interface
            </motion.p>

            <motion.div
              {...rise}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="corners mt-10 max-w-md border border-line bg-white/70 p-6"
            >
              <div className="flex flex-col gap-3.5">
                {specRows.map((row) => (
                  <div
                    key={row.k}
                    className="grid grid-cols-[72px_1fr] gap-4 font-mono text-xs tracking-normal"
                  >
                    <span className="text-ink-soft">{row.k}</span>
                    <span className="text-ink">{row.v}</span>
                  </div>
                ))}
                <div className="grid grid-cols-[72px_1fr] gap-4 font-mono text-xs tracking-normal">
                  <span className="text-ink-soft">Status</span>
                  <span className="flex items-center gap-2 text-accent">
                    <span className="relative flex h-2 w-2" aria-hidden>
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                    </span>
                    Open for work
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.p
              {...rise}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8 max-w-md text-[15px] leading-relaxed text-ink-soft"
            >
              I design and ship full-stack products end to end — from the first sketch to a
              deployed, working system. Clear architecture, fast interfaces, and code that
              survives its first users.
            </motion.p>

            <motion.div
              {...rise}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a
                href="/#projects"
                className="inline-flex items-center gap-2 rounded-lg bg-ink px-6 py-3 font-mono text-sm tracking-normal text-paper transition-colors hover:bg-accent"
              >
                View the work <span aria-hidden>↓</span>
              </a>
              <a
                href="/Raj_Roka_Resume.pdf"
                download="Raj_Roka_Resume.pdf"
                className="inline-flex items-center gap-2 rounded-lg border border-line px-6 py-3 font-mono text-sm tracking-normal text-ink transition-colors hover:border-accent hover:text-accent"
              >
                Download CV <span aria-hidden>↘</span>
              </a>
            </motion.div>
          </div>

          {/* Drafted portrait */}
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="corners relative border border-line bg-white/70 p-3 md:p-4">
              <div className="relative aspect-[4/5] overflow-hidden bg-accent-tint">
                <Image
                  src="/p.jpg"
                  alt="Portrait of Raj Roka"
                  fill
                  priority
                  sizes="(max-width: 768px) 90vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
