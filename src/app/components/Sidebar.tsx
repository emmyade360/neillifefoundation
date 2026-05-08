'use client'

import Link from 'next/link'
import { PRIMARY_NAVIGATION } from '@/lib/site';

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  return (
    <div
      id="mobile-menu"
      role="dialog"
      aria-modal={isOpen}
      aria-label="Mobile navigation"
      aria-hidden={!isOpen}
      className={`fixed top-0 z-50 flex h-screen w-screen items-start justify-start bg-white px-6 pt-20 transition-transform duration-300 ease-in-out md:hidden ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
    >
      {isOpen && (
        <button
          type="button"
          aria-label="Close menu"
          className="fixed right-4 top-4 cursor-pointer rounded-full border border-slate-300 bg-white px-3 py-2 text-2xl font-extrabold"
          onClick={onClose}
        >
          &times;
        </button>
      )}

      <ul className="mt-8 flex flex-col space-y-7 text-xl font-extrabold" onClick={onClose}>
        {PRIMARY_NAVIGATION.map((item) => (
          <li key={item.href}>
            <Link href={item.href}>{item.label}</Link>
          </li>
        ))}
        <li>
          <Link href="/donate">DONATE</Link>
        </li>
      </ul>
    </div>
  );
}
