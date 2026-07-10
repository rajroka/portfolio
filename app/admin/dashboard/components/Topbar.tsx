'use client';

import { useAdminAuth } from '@/contexts/AdminAuthContext';
import { FiMenu, FiLogOut, FiBell } from 'react-icons/fi';
import Image from 'next/image';

interface TopbarProps {
  onMenuClick: () => void;
}

export default function Topbar({ onMenuClick }: TopbarProps) {
  const { admin, logout } = useAdminAuth();

  return (
    <header className="h-16 bg-[#0d1117] border-b border-[#30363d] flex items-center justify-between px-4 md:px-6 flex-shrink-0">
      {/* Left: hamburger + page title slot */}
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="lg:hidden text-gray-400 hover:text-white transition p-1"
          aria-label="Open sidebar"
        >
          <FiMenu size={22} />
        </button>
        <span className="text-white font-semibold text-base hidden sm:block">
          Portfolio Admin
        </span>
      </div>

      {/* Right: notifications + user */}
      <div className="flex items-center gap-3">
        {/* Bell */}
        <button
          className="text-gray-400 hover:text-white transition p-1.5 rounded-lg hover:bg-[#161b22]"
          aria-label="Notifications"
        >
          <FiBell size={18} />
        </button>

        {/* User info */}
        {admin && (
          <div className="flex items-center gap-2">
            <div className="relative w-8 h-8 rounded-full overflow-hidden border-2 border-[#30363d]">
              <Image
                src={admin.avatar || '/p.jpg'}
                alt={admin.name}
                fill
                className="object-cover"
              />
            </div>
            <span className="text-sm text-gray-300 hidden md:block">{admin.name}</span>
          </div>
        )}

        {/* Logout */}
        <button
          onClick={logout}
          className="flex items-center gap-1.5 text-xs text-gray-400 hover:text-red-400 transition px-2 py-1.5 rounded-lg hover:bg-[#161b22]"
          title="Logout"
        >
          <FiLogOut size={15} />
          <span className="hidden sm:block">Logout</span>
        </button>
      </div>
    </header>
  );
}
