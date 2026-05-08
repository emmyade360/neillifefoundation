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
        <Image src="/images/EV_NYFF_2.jpeg" alt="Community stakeholders meeting in session" width={321} height={227} loading="lazy" sizes="(max-width: 768px) 100vw, 430px" className="object-cover md:h-[304px] md:w-[430px]" />
        <div className="flex flex-col space-y-3 px-3 md:space-y-6">
          <p className="inline w-max rounded-xl bg-neutral-300 px-2 py-1 text-xs font-semibold">COMMUNITY LEADERSHIP</p>
          <h2 className="text-xl font-bold font-poppins md:text-3xl">Building Inclusive Leadership with Persons with Disabilities in Benue State</h2>
          <Link href='/news-feed/empowering-women-with-disabilities-in-benue-state' className="inline-block w-max rounded-2xl bg-brand-700 px-4 py-1 text-lg font-semibold text-white transition hover:bg-brand-800">
            Read Story
          </Link>
        </div>
      </article>

      <article className="my-4 flex w-full flex-col items-center space-y-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm md:my-5 md:flex-row md:justify-between md:space-x-8 md:px-10">
        <Image src="/images/EV_NYFF_3.jpeg" alt="Roundtable dialogue participants collaborating" width={321} height={227} loading="lazy" sizes="(max-width: 768px) 100vw, 377px" className="max-h-[258px] md:h-[304px] md:min-w-[377px]" />
        <div className="flex flex-col space-y-3 px-3 md:space-y-6">
          <p className="inline w-max rounded-xl bg-neutral-300 px-2 py-1 text-xs font-semibold">INCLUSION DIALOGUE</p>
          <h2 className="text-xl font-bold font-poppins md:text-3xl">From Silence to Voice: How Dialogue is Advancing Disability Inclusion</h2>
          <Link href='/news-feed/empowering-women-and-girls-with-disabilities-through-inclusive-climate-action' className="inline-block w-max rounded-2xl bg-brand-700 px-4 py-1 text-lg font-semibold text-white transition hover:bg-brand-800">
            Read Story
          </Link>
        </div>
      </article>

      <article className="my-4 flex w-full flex-col items-center space-y-3 rounded-xl border border-slate-200 bg-white p-4 shadow-sm md:my-5 md:flex-row md:justify-between md:space-x-8 md:px-10">
        <Image src='/images/EV_NYFF_10.jpeg' alt="Group portrait of participants and partners" width={321} height={227} loading="lazy" sizes="(max-width: 768px) 100vw, 377px" className="max-h-[258px] md:h-[304px] md:min-w-[377px]" />
        <div className="flex flex-col space-y-3 px-3 md:space-y-6">
          <p className="inline w-max rounded-xl bg-neutral-300 px-2 py-1 text-xs font-semibold">COLLECTIVE ACTION</p>
          <h2 className="text-xl font-bold font-poppins md:text-3xl">Together We Rise: Partnerships Driving Lasting Change</h2>
          <Link href='/news-feed/significant-action-on-the-disability-bill-benue-state' className="inline-block w-max rounded-2xl bg-brand-700 px-4 py-1 text-lg font-semibold text-white transition hover:bg-brand-800">
            Read Story
          </Link>
        </div>
      </article>
    </div>
  )
}
