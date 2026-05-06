import Image from 'next/image'
import Link from 'next/link';
import { CONTACT_INFO } from '@/lib/contact';

function Footer() {
  return (
    <div className='w-full border-t border-brand-700/20 decoration-slate-400 px-[1rem] py-[2.5rem] md:px-[2rem] md:py-[3rem]'>
      <div className='mx-auto grid w-full max-w-[90rem] grid-cols-1 gap-[2rem] md:grid-cols-2 md:gap-[1.5rem]'>
        <div className='flex flex-col items-center justify-center space-y-[0.5rem] text-center md:items-start md:text-left'>
          <Image
            src="/logo/neil-logo.png"
            width={96}
            height={96}
            alt="Neil Life Foundation logo"
            loading="lazy"
            className="h-[5rem] w-[5rem] object-contain"
          />
          <h2 className='text-[1.125rem] font-bold text-brand-950'>Neil Life Foundation</h2>
          <div className='text-[0.9375rem] text-brand-950'>
            {CONTACT_INFO.addressLines.map((line) => (
              <span key={line} className='block'>
                {line}
              </span>
            ))}
            <span className='block'>Phone: <a href={CONTACT_INFO.phoneHref} className='underline'>{CONTACT_INFO.phone}</a></span>
            <span className='block'>Email: <a href={`mailto:${CONTACT_INFO.email}`} className='underline'>{CONTACT_INFO.email}</a></span>
          </div>
        </div>

        <div className='flex flex-col items-center justify-center space-y-[0.5rem] text-center md:items-start md:text-left'>
          <h2 className='text-[1.125rem] font-bold text-brand-950'>Join Our Community</h2>
          <p className='text-[0.9375rem] text-brand-950'>
            We envision a world where women and young persons with disabilities are empowered, included, and treated
            with dignity. We welcome partnerships and collaborations to drive this vision forward.
          </p>
        </div>

        <div className='flex flex-col items-center justify-center space-y-[1rem] md:items-start'>
          <h2 className='text-[1.125rem] font-semibold text-brand-950'>Connect with us</h2>
          <div className='flex items-center space-x-[1rem]'>
            <a href='https://www.facebook.com/neillifefoundation' target='_blank' rel='noopener noreferrer'>
              <span className='inline-flex h-8 w-8 items-center justify-center rounded border border-brand-700 text-sm font-bold hover:text-brand-700'>f</span>
            </a>
            <a href='https://www.instagram.com/neillifefoundation' target='_blank' rel='noopener noreferrer'>
              <span className='inline-flex h-8 w-8 items-center justify-center rounded border border-slate-300 text-[10px] font-bold hover:text-pink-700'>IG</span>
            </a>
            <a href='https://x.com/neillifefdn' target='_blank' rel='noopener noreferrer'>
              <span className='inline-flex h-8 w-8 items-center justify-center rounded border border-brand-700 text-sm font-bold hover:text-brand-700'>X</span>
            </a>
          </div>
        </div>

        <div className='flex flex-col items-center space-y-[0.5rem] md:items-start'>
          <h2 className='mb-[0.25rem] text-[1.25rem] font-semibold text-brand-950'>Quick links</h2>
          <Link href='/news-feed'><p className='text-[0.9375rem] text-brand-950'>News Feed</p></Link>
          <Link href='/about-us'><p className='text-[0.9375rem] text-brand-950'>About Us</p></Link>
          <Link href='/our-approach'><p className='text-[0.9375rem] text-brand-950'>Our Approach</p></Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
