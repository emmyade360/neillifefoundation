import Image from "next/image";
import Link from "next/link";

const approachCards = [
  {
    title: "Rights and Inclusion",
    href: "/our-approach/advocacy",
    image: "/images/EV_NYFF_9.jpeg",
    alt: "Participants reflecting during group session",
    copy:
      "We help women, youth, and persons with disabilities turn lived experience into confident advocacy, community voice, and visible leadership.",
  },
  {
    title: "Policy Change",
    href: "/our-approach/policy",
    image: "/images/EV_NYFF_4.jpeg",
    alt: "Stakeholders and participants at outreach event",
    copy:
      "We bring communities and decision-makers together so policies move beyond promises and begin to reflect the real needs of people with disabilities.",
  },
  {
    title: "Health and Dignity",
    href: "/our-approach/sexualhealth",
    image: "/images/EV_NYFF_8.jpeg",
    alt: "A woman addressing youths on sexual reproductive health",
    copy:
      "We champion access to respectful sexual and reproductive health information, care, and support for young persons with disabilities.",
  },
];

export default function Page() {
  return (
    <div className="page-shell flex flex-col items-center">
      <section className="relative isolate flex min-h-[34rem] w-full overflow-hidden rounded-lg sm:min-h-[38rem] md:min-h-[42rem]">
        <Image
          src='/images/EV_NYFF_4.jpeg'
          alt='Neil Life Foundation community gathering'
          width={1080}
          height={719}
          sizes="(max-width: 640px) 640px, (max-width: 1080px) 1080px, 1280px"
          priority
          fetchPriority="high"
          quality={85}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-indigo-950 via-indigo-950/60 to-transparent" />

        <div className="flex w-full items-end px-4 pb-10 pt-24 sm:px-6 sm:pb-12 md:px-8 md:pb-16">
          <div className="max-w-3xl">
            <h1 className='font-poppins text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl'>
              We are Neil Life Foundation
              <span className="mt-2 block text-2xl sm:text-3xl md:text-4xl">Championing dignity, inclusion, and equal opportunity.</span>
            </h1>
            <p className="mt-4 max-w-2xl text-base font-semibold leading-7 text-white/90 sm:text-lg">
              We empower women, youth, and persons with disabilities to lead change.
            </p>
            <Link
              href='/about-us'
              className="mt-6 inline-flex rounded bg-indigo-950 px-5 py-3 text-sm font-extrabold text-white transition hover:bg-indigo-900 md:text-base"
            >
              More About Us
            </Link>
          </div>
        </div>
      </section>
      {/* Mission & Vision Section */}
      <section className="w-full bg-gradient-to-b from-brand-50 to-white px-4 py-12 sm:px-6 sm:py-16 md:px-12 md:py-20 mt-0 sm:mt-2 md:mt-4">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Mission */}
            <div className="space-y-3 sm:space-y-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-900">Our Mission</h2>
              <p className="text-sm sm:text-base md:text-lg text-brand-700 leading-relaxed">
                To empower women and youth with disabilities through inclusive education, advocacy, mentorship, and resource access, while amplifying the leadership of communities often left behind.
              </p>
              <ul className="space-y-2 sm:space-y-3 pt-2 sm:pt-4">
                <li className="flex items-start gap-2 sm:gap-3">
                  <span className="text-brand-600 font-bold text-lg sm:text-xl flex-shrink-0" aria-hidden="true">&#10003;</span>
                  <span className="text-sm sm:text-base text-brand-700">Expand inclusive education and livelihood pathways.</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <span className="text-brand-600 font-bold text-lg sm:text-xl flex-shrink-0" aria-hidden="true">&#10003;</span>
                  <span className="text-sm sm:text-base text-brand-700">Build leadership, confidence, and community advocacy.</span>
                </li>
                <li className="flex items-start gap-2 sm:gap-3">
                  <span className="text-brand-600 font-bold text-lg sm:text-xl flex-shrink-0" aria-hidden="true">&#10003;</span>
                  <span className="text-sm sm:text-base text-brand-700">Drive policy reforms so systems work for everyone.</span>
                </li>
              </ul>
            </div>

            {/* Vision */}
            <div className="space-y-3 sm:space-y-4">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-900">Our Vision</h2>
              <p className="text-sm sm:text-base md:text-lg text-brand-700 leading-relaxed">
                A world where disability is never a boundary and inclusion is the default &mdash; where every person with a disability has the support, voice, and opportunities needed to thrive.
              </p>
              <div className="mt-4 sm:mt-8 p-4 sm:p-6 bg-white rounded-lg border-l-4 border-brand-600 shadow-sm">
                <p className="text-xs sm:text-sm md:text-base text-brand-700 italic leading-relaxed">
                  &quot;We believe systemic change starts with local leadership, and our interventions are designed to build skill, confidence, accountability, and long-term resilience.&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
     <div className="w-full my-3 md:px-3 flex-grow">
      <div className="relative overflow-hidden rounded-[2rem]">
        <Image
          src='/images/EV_NYFF_2.jpeg'
          alt="news feed"
          width={1080}
          height={360}
          loading="lazy"
          sizes="(max-width: 640px) 640px, (max-width: 1024px) 1024px, 1080px"
          className="h-auto w-full min-h-64 object-cover md:max-h-64"
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute top-6 left-4 md:left-8">
          <h2 className="text-white font-extrabold text-3xl md:text-4xl font-poppins">Latest News</h2>
        </div>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <Link href='/news-feed/empowering-women-with-disabilities-in-benue-state' className="group">
          <article className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <div className="relative">
              <Image
                src="/images/EV_NYFF_6.jpeg"
                alt="Facilitator during community session"
                height={231}
                width={288}
                loading="lazy"
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 33vw"
                className="h-[18rem] w-full object-cover"
              />
            </div>
            <div className="p-5 space-y-3">
              <p className="inline-flex rounded-full bg-neutral-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700">
                Economic Development
              </p>
              <h2 className="text-xl font-extrabold text-slate-950">
                Building inclusive leadership through practical community training.
              </h2>
            </div>
          </article>
        </Link>

        <Link href='/news-feed/significant-action-on-the-disability-bill-benue-state' className="group">
          <article className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <div className="relative">
              <Image
                src="/images/EV_NYFF_10.jpeg"
                alt="Community partners in group photo"
                height={231}
                width={288}
                loading="lazy"
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 33vw"
                className="h-[18rem] w-full object-cover"
              />
            </div>
            <div className="p-5 space-y-3">
              <p className="inline-flex rounded-full bg-neutral-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700">
                Action Story
              </p>
              <h2 className="text-xl font-extrabold text-slate-950">
                Together we rise: collective action for inclusion.
              </h2>
            </div>
          </article>
        </Link>

        <Link href='/news-feed/empowering-women-and-girls-with-disabilities-through-inclusive-climate-action' className="group">
          <article className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
            <div className="relative">
              <Image
                src="/images/EV_NYFF_3.jpeg"
                alt="Inclusive roundtable discussion"
                height={231}
                width={288}
                loading="lazy"
                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 33vw"
                className="h-[18rem] w-full object-cover"
              />
            </div>
            <div className="p-5 space-y-3">
              <p className="inline-flex rounded-full bg-neutral-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-slate-700">
                Economic Development
              </p>
              <h2 className="text-xl font-extrabold text-slate-950">
                From silence to voice: dialogue that inspires lasting inclusion.
              </h2>
            </div>
          </article>
        </Link>
      </div>

      <div className="mt-6 flex justify-center">
       <Link
         href='/news-feed'
         className="inline-flex rounded-full bg-brand-700 px-6 py-2 text-sm font-bold text-white transition hover:bg-brand-800"
       >
         See More
       </Link>
      </div>
     </div>
     <div className="md:mb-4 mb-10 w-full md:min-h-[500px] px-8 md:mt-6">
      <div className="bg-brand-surface w-full flex flex-col md:flex-row justify-between items-start
      md:px-36 pt-10 space-x-5 px-4 space-y-3 pb-3">
      <Image
      src='/images/EV_NYFF_1.jpeg'
      alt="Mother and child during community event"
      width={1080}
      height={720}
      loading="lazy"
      sizes="(max-width: 768px) 100vw, 500px"
      className="h-auto w-full max-w-[500px] object-cover md:min-h-80"/>
      <div className="flex flex-col justify-between space-y-2 md:space-y-12">
        <h2 className="md:text-5xl font-extrabold text-3xl text-black font-poppins">
          Our Mission & Vision
        </h2>
        <div className="md:bg-white pt-1 px-2 pb-2 md:p-8 w-full flex flex-col 
        items-center justify-center gap-4 shadow-lg">
          <p className="text-wrap text-base md:text-lg md:font-bold font-medium md:leading-10 font-poppins">
            We envision communities where every person, regardless of disability, has the support,
            voice, and opportunities needed to thrive and lead.
          </p>
          <Link
            href='/about-us'
            className="rounded-3xl bg-brand-700 px-3 py-2 text-sm font-bold text-white transition hover:bg-brand-800 md:text-base"
          >
            Learn More
          </Link>
        </div>
      </div> 
      </div>
      </div>  
      <section className="w-full px-6 pb-10 md:px-8">
        <div className="mb-6 flex flex-col gap-2 md:mb-10 md:max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-wide text-brand-700">Our approach</p>
          <h2 className="font-poppins text-3xl font-extrabold text-slate-950 md:text-5xl">
            Practical action, built around real people.
          </h2>
        </div>

        <div className="grid w-full gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {approachCards.map((card) => (
            <article key={card.href} className="flex h-full flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
              <Image
                src={card.image}
                alt={card.alt}
                width={420}
                height={280}
                loading="lazy"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="h-56 w-full object-cover"
              />
              <div className="flex flex-1 flex-col gap-3 p-5">
                <h3 className="font-poppins text-xl font-bold text-brand-950">{card.title}</h3>
                <p className="flex-1 text-sm leading-6 text-slate-700 md:text-base">{card.copy}</p>
                <Link
                  href={card.href}
                  className="mt-2 inline-flex w-max rounded-3xl bg-brand-700 px-5 py-2 text-sm font-bold text-white transition hover:bg-brand-800"
                >
                  Learn More
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
    
  );
}

