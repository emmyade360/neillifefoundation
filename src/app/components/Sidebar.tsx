'use client'
import Link from 'next/link'

type SidebarProps = {
  isOpen: boolean;
  onClose: () => void;
};

export const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
    return(
        <div
          id="mobile-menu"
          aria-hidden={!isOpen}
          className={`fixed top-0 z-50 flex h-screen w-screen items-start justify-start bg-white px-6 pt-20 transition-transform duration-300 ease-in-out md:hidden ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
        >
            {isOpen && 
    <button type="button" aria-label="Close menu" className='fixed right-4 top-4 cursor-pointer rounded-full border border-slate-300 bg-white px-3 py-2 text-2xl font-extrabold' onClick={onClose} >×</button>}
    
            <ul className="mt-8 flex flex-col space-y-7 font-extrabold text-xl" onClick={onClose}>
                <li><Link href='/'>HOME</Link></li>
                <li><Link href='/news-feed'>NEWS FEED</Link></li>
                <li><Link href='/our-approach'>OUR APPROACH</Link></li>
                <li><Link href='/about-us'>ABOUT US</Link></li>
            </ul>
        </div>
    )
}
