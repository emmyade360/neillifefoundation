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
        className={`fixed top-0 right-0 z-50 flex h-screen w-[85%] max-w-sm flex-col bg-white px-6 pt-20 shadow-2xl transition-transform duration-300 ease-in-out md:hidden ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
      {isOpen && (
        <button
          type="button"
          aria-label="Close menu"
          className="fixed right-4 top-4 flex h-10 w-10 items-center justify-center rounded-2xl border-2 border-slate-200 bg-white text-2xl font-extrabold shadow-sm hover:border-brand-500 hover:shadow-md"
          onClick={onClose}
        >
          &times;
        </button>
      )}

      <ul className="mt-6 flex flex-col space-y-2 text-xl font-extrabold" onClick={onClose}>
        {PRIMARY_NAVIGATION.map((item) => (
          <li key={item.href} className="border-b border-slate-100 last:border-0">
            <Link href={item.href} className="block py-3 hover:bg-brand-50 px-2 -mx-2 transition rounded-lg">
              {item.label}
            </Link>
          </li>
        ))}
        <li className="mt-4 border-t border-slate-200 pt-4">
          <Link href="/donate" className="block w-full rounded-2xl bg-brand-700 px-6 py-3 text-center font-extrabold text-white shadow-md hover:bg-brand-800">
            DONATE
          </Link>
        </li>
      </ul>
    </div>
  );
}
