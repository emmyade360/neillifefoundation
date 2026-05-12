import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "News Feed",
  description: "Read Neil Life Foundation impact stories, inclusion updates, and community advocacy news.",
  alternates: {
    canonical: "/news-feed",
  },
};

export default function Page() {
  return (
    <div className="page-shell flex flex-col items-center">
      <div
        style={{ backgroundImage: 'url(/images/EV_NYFF_4.jpeg)' }}
        className="relative mb-10 flex h-[200px] w-full items-center justify-center rounded-xl bg-cover bg-center bg-no-repeat md:mb-16 md:h-[490px]"
      >
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[rgba(77,20,111,0.75)]" />
        <h1 className="relative inline-block pb-6 font-poppins text-3xl font-extrabold text-white after:absolute after:bottom-0 after:right-1/2 after:block after:w-20 after:translate-x-1/2 after:transform after:border-b-8 after:border-brand-500 md:pb-10 md:text-6xl">
          Our Latest Impact Stories
        </h1>
      </div>

      <article className="my-4 flex w-full flex-col items-center space-y-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm md:my-5 md:flex-row md:justify-between md:space-x-8 md:px-10">
        <div className="relative w-full md:w-auto">
          <Image src="https://res.cloudinary.com/dfcpht2ua/image/upload/q_auto/f_auto/v1778564860/IMG-20260508-WA0078_xlra7m.jpg" alt="Stakeholders meeting on Disability Act implementation in Benue State" width={321} height={227} loading="lazy" sizes="(max-width: 768px) 100vw, 430px" className="object-cover md:h-[304px] md:w-[430px]" />
          <div className="absolute right-3 bottom-3 rounded-md bg-brand-700 px-3 py-1 text-xs font-bold text-white">
            March 30, 2026
          </div>
        </div>
        <div className="flex flex-col space-y-3 px-3 md:space-y-6">
          <p className="inline w-max rounded-xl bg-neutral-300 px-2 py-1 text-xs font-semibold">DISABILITY RIGHTS &AMP; POLICY</p>
          <h2 className="text-xl font-bold font-poppins md:text-3xl">Strengthening Disability Rights: Implementing the Disability Act in Benue State</h2>
          <Link href='/news-feed/disability-act-implementation-benue-state' className="inline-block w-max rounded-2xl bg-brand-700 px-4 py-1 text-lg font-semibold text-white transition hover:bg-brand-800">
            Read Story
          </Link>
        </div>
      </article>

      <article className="my-4 flex w-full flex-col items-center space-y-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm md:my-5 md:flex-row md:justify-between md:space-x-8 md:px-10">
        <div className="relative w-full md:w-auto">
          <Image src="https://res.cloudinary.com/dfcpht2ua/image/upload/q_auto/f_auto/v1778551214/IMG-20260508-WA0075_axo1w6.jpg" alt="Storytelling advocacy workshop participants sharing their narratives" width={321} height={227} loading="lazy" sizes="(max-width: 768px) 100vw, 430px" className="object-cover md:h-[304px] md:w-[430px]" />
          <div className="absolute right-3 bottom-3 rounded-md bg-brand-700 px-3 py-1 text-xs font-bold text-white">
            October 4, 2025
          </div>
        </div>
        <div className="flex flex-col space-y-3 px-3 md:space-y-6">
          <p className="inline w-max rounded-xl bg-neutral-300 px-2 py-1 text-xs font-semibold">ADVOCACY &AMP; YOUTH LEADERSHIP</p>
          <h2 className="text-xl font-bold font-poppins md:text-3xl">Changing Narratives: Storytelling for Advocacy</h2>
          <Link href='/news-feed/changing-narratives-storytelling-advocacy' className="inline-block w-max rounded-2xl bg-brand-700 px-4 py-1 text-lg font-semibold text-white transition hover:bg-brand-800">
            Read Story
          </Link>
        </div>
      </article>

      <article className="my-4 flex w-full flex-col items-center space-y-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm md:my-5 md:flex-row md:justify-between md:space-x-8 md:px-10">
        <div className="relative w-full md:w-auto">
          <Image src="https://res.cloudinary.com/dfcpht2ua/image/upload/q_auto/f_auto/v1778575035/IMG-20260508-WA0072_1_g2aziu.jpg" alt="GBV prevention training session at Kano IDP camp" width={321} height={227} loading="lazy" sizes="(max-width: 768px) 100vw, 430px" className="object-cover md:h-[304px] md:w-[430px]" />
          <div className="absolute right-3 bottom-3 rounded-md bg-brand-700 px-3 py-1 text-xs font-bold text-white">
            August 18, 2025
          </div>
        </div>
        <div className="flex flex-col space-y-3 px-3 md:space-y-6">
          <p className="inline w-max rounded-xl bg-neutral-300 px-2 py-1 text-xs font-semibold">COMMUNITY SAFETY</p>
          <h2 className="text-xl font-bold font-poppins md:text-3xl">Building Safer Communities: Gender Based Violence Prevention in Kano</h2>
          <Link href='/news-feed/gbv-prevention-training-kano-idp-camps' className="inline-block w-max rounded-2xl bg-brand-700 px-4 py-1 text-lg font-semibold text-white transition hover:bg-brand-800">
            Read Story
          </Link>
        </div>
      </article>

      <article className="my-4 flex w-full flex-col items-center space-y-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm md:my-5 md:flex-row md:justify-between md:space-x-8 md:px-10">
        <div className="relative w-full md:w-auto">
          <Image src="https://res.cloudinary.com/dfcpht2ua/image/upload/q_auto/f_auto/v1778548598/WhatsApp_Image_2026-05-08_at_3.37.27_PM_mo4p9q.jpg" alt="Empower Her event participants at University of Jos" width={321} height={227} loading="lazy" sizes="(max-width: 768px) 100vw, 430px" className="object-cover md:h-[304px] md:w-[430px]" />
          <div className="absolute right-3 bottom-3 rounded-md bg-brand-700 px-3 py-1 text-xs font-bold text-white">
            March 19, 2025
          </div>
        </div>
        <div className="flex flex-col space-y-3 px-3 md:space-y-6">
          <p className="inline w-max rounded-xl bg-neutral-300 px-2 py-1 text-xs font-semibold">EMPOWER HER</p>
          <h2 className="text-xl font-bold font-poppins md:text-3xl">Empower Her: Advancing SHR Rights for Women and Girls with Disabilities in Jos</h2>
          <Link href='/news-feed/empower-her-advancing-shr-rights-in-jos' className="inline-block w-max rounded-2xl bg-brand-700 px-4 py-1 text-lg font-semibold text-white transition hover:bg-brand-800">
            Read Story
          </Link>
        </div>
      </article>

      <div className="mt-8 flex justify-center">
        <Link
          href='/news-feed'
          className="inline-flex items-center gap-2 rounded-full bg-brand-700 px-8 py-3 text-sm font-bold text-white shadow-md transition hover:bg-brand-800 hover:shadow-lg"
        >
          View All News
        </Link>
      </div>
    </div>
  )
}
