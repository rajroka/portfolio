'use client';

import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useContactModal } from '@/contexts/ContactModalContext';

const navLinks = [
  { label: 'Work', href: '/#projects' },
  { label: 'About', href: '/about' },
];

export default function Navbar({ onContact }: { onContact?: () => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const { open } = useContactModal();
  const handleContact = onContact ?? open;

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="sticky top-0 z-50 border-b border-line bg-paper/95 backdrop-blur-sm"
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          href="/"
          className="font-mono text-sm font-medium tracking-tight text-ink"
        >
          Raj Roka<span className="text-accent">.</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-mono text-sm tracking-normal text-ink-soft transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={handleContact}
            className="rounded-lg bg-ink px-5 py-2.5 font-mono text-sm tracking-normal text-paper transition-colors hover:bg-accent"
          >
            Get in touch
          </button>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          className="font-mono text-xl text-ink md:hidden"
        >
          {isOpen ? '✕' : '☰'}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="overflow-hidden border-t border-line bg-paper md:hidden"
          >
            <div className="px-6 pb-6 pt-4">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-3 font-mono text-sm tracking-normal text-ink-soft hover:text-accent"
                  >
                    {link.label}
                  </a>
                </motion.div>
              ))}
              <button
                onClick={() => {
                  handleContact();
                  setIsOpen(false);
                }}
                className="mt-4 w-full rounded-lg bg-ink py-3 font-mono text-sm tracking-normal text-paper transition-colors hover:bg-accent"
              >
                Get in touch
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
