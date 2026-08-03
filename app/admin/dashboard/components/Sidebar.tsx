'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  FiGrid,
  FiUser,
  FiCode,
  FiBriefcase,
  FiBook,
  FiAward,
  FiMessageSquare,
  FiSettings,
  FiImage,
  FiZap,
  FiX,
  FiHome,
} from 'react-icons/fi';

const navItems = [
  { label: 'Overview', href: '/admin/dashboard', icon: FiGrid },
  { label: 'Hero', href: '/admin/dashboard/hero', icon: FiZap },
  { label: 'About', href: '/admin/dashboard/about', icon: FiUser },
  { label: 'Skills', href: '/admin/dashboard/skills', icon: FiCode },
  { label: 'Projects', href: '/admin/dashboard/projects', icon: FiBriefcase },
  { label: 'Experience', href: '/admin/dashboard/experience', icon: FiBriefcase },
  { label: 'Education', href: '/admin/dashboard/education', icon: FiBook },
  { label: 'Certifications', href: '/admin/dashboard/certifications', icon: FiAward },
  { label: 'Messages', href: '/admin/dashboard/messages', icon: FiMessageSquare },
  { label: 'Media', href: '/admin/dashboard/media', icon: FiImage },
  { label: 'Settings', href: '/admin/dashboard/settings', icon: FiSettings },
];

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

export default function Sidebar({ open, onClose }: SidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/60 z-30 lg:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Sidebar panel */}
      <aside
        className={`
          fixed top-0 left-0 h-full w-64 bg-[#0d1117] border-r border-[#30363d] z-40
          flex flex-col
          transition-transform duration-300
          ${open ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0 lg:static lg:z-auto
        `}
      >
        {/* Logo */}
        <div className="flex items-center justify-between px-5 py-5 border-b border-[#30363d]">
          <span className="text-white font-bold text-lg tracking-tight">
            ⚡ Admin Panel
          </span>
          <button
            onClick={onClose}
            className="lg:hidden text-gray-500 hover:text-white transition"
            aria-label="Close sidebar"
          >
            <FiX size={20} />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
          {navItems.map(({ label, href, icon: Icon }) => {
            const isActive =
              href === '/admin/dashboard'
                ? pathname === href
                : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                onClick={onClose}
                className={`
                  flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors
                  ${
                    isActive
                      ? 'bg-orange-500/10 text-orange-400 border border-orange-500/20'
                      : 'text-gray-400 hover:text-white hover:bg-[#161b22]'
                  }
                `}
              >
                <Icon size={16} className="flex-shrink-0" />
                {label}
              </Link>
            );
          })}
        </nav>

        {/* Back to site */}
        <div className="px-3 py-4 border-t border-[#30363d]">
          <Link
            href="/"
            target="_blank"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-gray-500 hover:text-white hover:bg-[#161b22] transition-colors"
          >
            <FiHome size={16} />
            View Portfolio
          </Link>
        </div>
      </aside>
    </>
  );
}
