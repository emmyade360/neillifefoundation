'use client'
import Image from 'next/image'
import { Sidebar } from "./Sidebar";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { PRIMARY_NAVIGATION } from '@/lib/site';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const handleClick = () => setIsOpen(!isOpen)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 z-50 w-full bg-white/95 backdrop-blur ${isScrolled ? 'border-b border-brand-700 shadow-sm' : ''}`}>
      <div className="mx-auto flex w-full max-w-[90rem] items-center justify-between gap-[0.75rem] px-[0.75rem] py-[0.5rem] md:px-[1.5rem] md:py-[0.75rem]">
        <div className='inline-flex items-center gap-[0.5rem]'>
          <Image
            src="/logo/neil-logo.png"
            width={96}
            height={96}
            alt='Neil Life Foundation logo'
            className={`h-[3.75rem] w-[3.75rem] object-contain md:h-[5rem] md:w-[5rem] ${isScrolled ? 'md:h-[4.5rem] md:w-[4.5rem]' : ''}`}
            priority
          />
          <span>
            <h2 className="leading-tight">
              <span className={`block font-bold ${isScrolled ? 'text-[0.95rem] md:text-[1.125rem]' : 'text-[1rem] md:text-[1.5rem]'}`}>NEIL LIFE</span>
              <span className={`block font-semibold ${isScrolled ? 'text-[0.7rem] md:text-[0.8rem]' : 'text-[0.75rem] md:text-[0.9rem]'}`}>Foundation</span>
            </h2>
          </span>
        </div>

        <ul className="hidden flex-row items-center space-x-[2rem] md:flex">
          {PRIMARY_NAVIGATION.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="text-[1rem] font-bold hover:text-brand-700">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <Link
            href='/donate'
            className='group inline-flex gap-[0.5rem] rounded-[1.875rem] bg-brand-700 px-[1rem] py-[0.55rem] text-[0.875rem] font-extrabold text-white hover:bg-brand-800 lg:px-[2rem]'
          >
            DONATE
            <span className='text-[1.125rem] transition-all ease-in-out group-hover:scale-105 group-hover:text-[1.25rem]' aria-hidden="true">
              +
            </span>
          </Link>
        </div>

        <button
          type="button"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={handleClick}
          className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border-2 border-slate-200 bg-white shadow-sm text-slate-700 transition hover:border-brand-500 hover:bg-white hover:shadow-md md:hidden"
        >
          <span className="sr-only">{isOpen ? 'Close menu' : 'Open menu'}</span>
          <div className="flex h-6 w-6 flex-col items-center justify-center gap-1.5">
            <span className={`block h-0.5 w-6 rounded-full bg-current transition-all duration-300 ${isOpen ? 'translate-y-1.5 rotate-45' : ''}`} />
            <span className={`block h-0.5 w-6 rounded-full bg-current transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-6 rounded-full bg-current transition-all duration-300 ${isOpen ? '-translate-y-1.5 -rotate-45' : ''}`} />
          </div>
        </button>
      </div>
      <Sidebar isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </nav>
  )
}
