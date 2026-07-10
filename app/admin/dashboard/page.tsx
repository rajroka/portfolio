'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useAdminAuth } from '@/contexts/AdminAuthContext';
import {
  FiBriefcase,
  FiCode,
  FiAward,
  FiBook,
  FiMessageSquare,
  FiMail,
  FiLoader,
  FiArrowRight,
} from 'react-icons/fi';

interface Stats {
  projects: number;
  skills: number;
  experience: number;
  education: number;
  certifications: number;
  totalMessages: number;
  unreadMessages: number;
}

interface Message {
  _id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  read: boolean;
  createdAt: string;
}

const statCards = (stats: Stats) => [
  {
    label: 'Projects',
    value: stats.projects,
    icon: FiBriefcase,
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10 border-cyan-500/20',
    href: '/admin/dashboard/projects',
  },
  {
    label: 'Skills',
    value: stats.skills,
    icon: FiCode,
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10 border-emerald-500/20',
    href: '/admin/dashboard/skills',
  },
  {
    label: 'Experience',
    value: stats.experience,
    icon: FiBriefcase,
    color: 'text-violet-400',
    bg: 'bg-violet-500/10 border-violet-500/20',
    href: '/admin/dashboard/experience',
  },
  {
    label: 'Education',
    value: stats.education,
    icon: FiBook,
    color: 'text-amber-400',
    bg: 'bg-amber-500/10 border-amber-500/20',
    href: '/admin/dashboard/education',
  },
  {
    label: 'Certifications',
    value: stats.certifications,
    icon: FiAward,
    color: 'text-pink-400',
    bg: 'bg-pink-500/10 border-pink-500/20',
    href: '/admin/dashboard/certifications',
  },
  {
    label: 'Messages',
    value: stats.totalMessages,
    icon: FiMessageSquare,
    color: 'text-orange-400',
    bg: 'bg-orange-500/10 border-orange-500/20',
    href: '/admin/dashboard/messages',
    badge: stats.unreadMessages > 0 ? stats.unreadMessages : undefined,
  },
];

const quickActions = [
  { label: 'Edit Hero', href: '/admin/dashboard/hero', color: 'bg-cyan-500 hover:bg-cyan-600' },
  { label: 'Add Project', href: '/admin/dashboard/projects/new', color: 'bg-violet-500 hover:bg-violet-600' },
  { label: 'Add Skill', href: '/admin/dashboard/skills/new', color: 'bg-emerald-500 hover:bg-emerald-600' },
  { label: 'View Messages', href: '/admin/dashboard/messages', color: 'bg-orange-500 hover:bg-orange-600' },
];

export default function DashboardOverview() {
  const { admin } = useAdminAuth();
  const [stats, setStats] = useState<Stats | null>(null);
  const [recentMessages, setRecentMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/admin/stats')
      .then((r) => r.json())
      .then((data) => {
        if (data.success) {
          setStats(data.stats);
          setRecentMessages(data.recentMessages);
        }
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  const greeting = () => {
    const h = new Date().getHours();
    if (h < 12) return 'Good morning';
    if (h < 18) return 'Good afternoon';
    return 'Good evening';
  };

  return (
    <div className="space-y-6 max-w-6xl">
      {/* Welcome */}
      <div>
        <h1 className="text-2xl font-bold text-white">
          {greeting()}, {admin?.name?.split(' ')[0] ?? 'Admin'} 👋
        </h1>
        <p className="text-gray-400 mt-1 text-sm">
          Here's what's happening with your portfolio today.
        </p>
      </div>

      {/* Stat cards */}
      {loading ? (
        <div className="flex items-center gap-2 text-gray-400 py-8">
          <FiLoader className="animate-spin" />
          Loading stats…
        </div>
      ) : stats ? (
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
          {statCards(stats).map(({ label, value, icon: Icon, color, bg, href, badge }) => (
            <Link
              key={label}
              href={href}
              className={`relative bg-[#161b22] border ${bg} rounded-xl p-4 hover:scale-[1.02] transition-transform`}
            >
              <div className={`${color} mb-3`}>
                <Icon size={20} />
              </div>
              <p className="text-2xl font-bold text-white">{value}</p>
              <p className="text-xs text-gray-400 mt-0.5">{label}</p>
              {badge !== undefined && (
                <span className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {badge}
                </span>
              )}
            </Link>
          ))}
        </div>
      ) : null}

      {/* Quick actions */}
      <div>
        <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
          Quick Actions
        </h2>
        <div className="flex flex-wrap gap-3">
          {quickActions.map(({ label, href, color }) => (
            <Link
              key={label}
              href={href}
              className={`${color} text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors flex items-center gap-1.5`}
            >
              {label}
              <FiArrowRight size={14} />
            </Link>
          ))}
        </div>
      </div>

      {/* Recent messages */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">
            Recent Messages
          </h2>
          <Link
            href="/admin/dashboard/messages"
            className="text-xs text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
          >
            View all <FiArrowRight size={12} />
          </Link>
        </div>

        {recentMessages.length === 0 ? (
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6 text-center text-gray-500 text-sm">
            No messages yet.
          </div>
        ) : (
          <div className="space-y-3">
            {recentMessages.map((msg) => (
              <Link
                key={msg._id}
                href={`/admin/dashboard/messages`}
                className="flex items-start gap-3 bg-[#161b22] border border-[#30363d] rounded-xl p-4 hover:border-cyan-500/30 transition-colors"
              >
                <div className="w-9 h-9 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0">
                  <FiMail size={15} className="text-cyan-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-white truncate">{msg.name}</span>
                    {!msg.read && (
                      <span className="text-xs bg-cyan-500/20 text-cyan-400 px-2 py-0.5 rounded-full flex-shrink-0">
                        New
                      </span>
                    )}
                    <span className="text-xs text-gray-600 ml-auto flex-shrink-0">
                      {new Date(msg.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 truncate mt-0.5">{msg.subject}</p>
                  <p className="text-xs text-gray-600 truncate mt-0.5">{msg.message}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Content status */}
      {stats && (
        <div>
          <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">
            Content Status
          </h2>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[#30363d]">
                  <th className="text-left text-xs text-gray-500 font-medium px-4 py-3">Section</th>
                  <th className="text-left text-xs text-gray-500 font-medium px-4 py-3">Count</th>
                  <th className="text-left text-xs text-gray-500 font-medium px-4 py-3">Status</th>
                  <th className="text-right text-xs text-gray-500 font-medium px-4 py-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { section: 'Projects', count: stats.projects, href: '/admin/dashboard/projects' },
                  { section: 'Skills', count: stats.skills, href: '/admin/dashboard/skills' },
                  { section: 'Experience', count: stats.experience, href: '/admin/dashboard/experience' },
                  { section: 'Education', count: stats.education, href: '/admin/dashboard/education' },
                  { section: 'Certifications', count: stats.certifications, href: '/admin/dashboard/certifications' },
                ].map(({ section, count, href }) => (
                  <tr key={section} className="border-b border-[#30363d] last:border-0">
                    <td className="px-4 py-3 text-gray-300">{section}</td>
                    <td className="px-4 py-3 text-gray-400">{count} items</td>
                    <td className="px-4 py-3">
                      {count > 0 ? (
                        <span className="text-xs bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full">Active</span>
                      ) : (
                        <span className="text-xs bg-amber-500/20 text-amber-400 px-2 py-0.5 rounded-full">Empty</span>
                      )}
                    </td>
                    <td className="px-4 py-3 text-right">
                      <Link href={href} className="text-xs text-cyan-400 hover:text-cyan-300">
                        Manage →
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
