'use client';

import { FiArrowUpRight } from 'react-icons/fi';

const socials = [
  { name: 'Github', url: 'https://github.com/rajroka' },
  { name: 'Linkedin', url: 'https://www.linkedin.com/in/raj-roka-4588501b9/' },
  { name: 'Facebook', url: 'https://www.facebook.com/rajpariroka' },
  { name: 'Email', url: 'mailto:ggcode30@gmail.com' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="grid-bg-dark border-t border-line bg-panel text-panel-text">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <h2 className="display mt-6 text-[clamp(2.75rem,8vw,5.5rem)] text-panel-text">
          Let&apos;s build
          <br />
          something.
        </h2>

        <p className="mt-6 font-mono text-sm tracking-normal text-panel-soft">
          Have a project in mind? Drop a line.
        </p>

        <a
          href="mailto:ggcode30@gmail.com"
          className="mt-6 inline-flex items-center gap-2 border-b border-accent pb-1 font-mono text-sm tracking-normal text-accent transition-colors hover:text-panel-text md:text-base"
        >
          ggcode30@gmail.com <FiArrowUpRight />
        </a>

        <div className="mt-14 flex flex-wrap gap-x-8 gap-y-3 border-t border-panel-line pt-6">
          {socials.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm tracking-normal text-panel-soft transition-colors hover:text-accent"
            >
              {s.name} ↗
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-panel-line">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 py-5 font-mono text-xs tracking-normal text-panel-soft">
          <span>© {year} Raj Roka</span>
          <span>Built with Next.js</span>
        </div>
      </div>
    </footer>
  );
}
