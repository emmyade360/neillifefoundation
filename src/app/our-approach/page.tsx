import Image from "next/image";
import Link from "next/link";
import { APPROACHES } from "@/lib/approaches";

export default function Page() {
  return (
    <div className="page-shell flex flex-col items-center gap-8 md:gap-12">
      <div
        style={{ backgroundImage: "url(/images/EV_NYFF_4.jpeg)" }}
        className="relative flex h-[220px] w-full items-center justify-center rounded-xl bg-cover bg-center bg-no-repeat md:h-[420px]"
      >
        <div className="absolute inset-0 bg-[rgba(77,20,111,0.75)]" />
        <h1 className="relative inline-block pb-5 text-3xl font-extrabold text-white after:absolute after:bottom-0 after:right-1/2 after:block after:w-20 after:translate-x-1/2 after:border-b-8 after:border-brand-500 md:text-6xl">
          Our Approach
        </h1>
      </div>

      <section className="w-full max-w-[70rem] space-y-4">
        <p className="text-sm font-semibold uppercase tracking-wide text-brand-700">Approaches</p>
        <h2 className="text-2xl font-bold text-slate-900 md:text-4xl">
          Explore how we create impact through focused, people-centered action.
        </h2>
      </section>

      <div className="grid w-full max-w-[70rem] gap-5 md:grid-cols-3">
        {APPROACHES.map((approach) => (
          <article key={approach.slug} className="flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
            <Image
              src={approach.imageSrc}
              alt={approach.imageAlt}
              width={640}
              height={360}
              loading="lazy"
              sizes="(max-width: 640px) 100vw, 21rem"
              className="h-52 w-full object-cover"
            />
            <div className="flex flex-1 flex-col gap-3 p-5">
              <h3 className="text-lg font-bold text-brand-950 md:text-xl">{approach.title}</h3>
              <p className="flex-1 text-sm leading-6 text-slate-700">{approach.summary}</p>
              <Link
                href={`/our-approach/${approach.slug}`}
                className="inline-flex w-max rounded-3xl bg-brand-700 px-4 py-2 text-sm font-bold text-white transition hover:bg-brand-800"
              >
                Learn More
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
