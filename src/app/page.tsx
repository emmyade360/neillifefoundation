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
      <div className="w-full md:p-4">
      <div className="min-w-full relative  bg-indigo-500 ">
            <div className="absolute right-0 top-0 h-full w-full bg-gradient-to-t from-indigo-950 to-transparent"></div>
        <Image
          src='/images/EV_NYFF_4.jpeg'
          alt='Neil Life Foundation community gathering'
          width={1080}
          height={719}
          sizes="100vw"
          priority
          fetchPriority="high"
          quality={85}
          
          className="h-auto w-full max-h-[50vh] max-w-full object-cover md:max-h-[75vh]"
        />
        <div  className="absolute md:top-36 md:left-20 backdrop-blur-xs top-12 left-8">
        <h1 className=' font-extrabold md:text-4xl text-2xl text-white font-poppins'>
            We are Neil Life Foundation <span className="block">championing dignity, inclusion, and equal opportunity.</span> 
            <span className="block">We empower women, youth, and persons with disabilities to lead change.</span>
        </h1>
        <Link href='/about-us'>
        <button className="md:text-lg text-sm font-extrabold bg-indigo-950 mt-4 p-2 text-white">
          More About Us</button>
        </Link>
        </div>
        
        </div>
      </div>
      <div>
        
      </div>
     <div className="w-full my-3 md:px-3 flex-grow">
      <div className="relative overflow-hidden rounded-[2rem]">
        <Image
          src='/images/EV_NYFF_2.jpeg'
          alt="news feed"
          width={1080}
          height={360}
          loading="lazy"
          sizes="100vw"
          className="h-auto w-full min-h-64 object-cover md:max-h-64"
        />
        <div className="absolute inset-0 bg-black/35" />
        <div className="absolute top-6 left-4 md:left-8">
          <h1 className="text-white font-extrabold text-3xl md:text-4xl font-poppins">Latest News</h1>
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
                sizes="18rem"
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
                sizes="18rem"
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
                sizes="18rem"
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
       <Link href='/news-feed'>
         <button className="rounded-full bg-blue-900 px-6 py-2 text-sm font-bold text-white transition hover:bg-blue-800">
           See More
         </button>
       </Link>
      </div>
     </div>
     <div className="md:mb-4 mb-10 w-full md:min-h-[500px] px-8 md:mt-6">
      <div className="bg-slate-100  w-full flex flex-col md:flex-row justify-between items-start
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
        <h1 className="md:text-5xl font-extrabold text-3xl text-black font-poppins">
          Our Mission & Vision
        </h1>
        <div className="md:bg-white pt-1 px-2 pb-2 md:p-8 w-full flex flex-col 
        items-center justify-center gap-4 shadow-lg">
          <h1 className="text-wrap text-base md:text-lg md:font-bold font-medium md:leading-10 font-poppins">
            We envision communities where every person, regardless of disability, has the support,
            voice, and opportunities needed to thrive and lead.
          </h1>
          <Link href='/about-us'>
          <button className="bg-blue-900 text-white font-bold md:px-3 md:py-2 py-1 px-2 
          rounded-3xl hover:scale-105 transition-all ease-in-out">
            Learn More
          </button>
          </Link>
        </div>
      </div> 
      </div>
      </div>  
      <section className="w-full px-6 pb-10 md:px-8">
        <div className="mb-6 flex flex-col gap-2 md:mb-10 md:max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-wide text-blue-800">Our approach</p>
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
                <h3 className="font-poppins text-xl font-bold text-blue-950">{card.title}</h3>
                <p className="flex-1 text-sm leading-6 text-slate-700 md:text-base">{card.copy}</p>
                <Link
                  href={card.href}
                  className="mt-2 inline-flex w-max rounded-3xl bg-blue-900 px-5 py-2 text-sm font-bold text-white transition hover:bg-blue-800"
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

