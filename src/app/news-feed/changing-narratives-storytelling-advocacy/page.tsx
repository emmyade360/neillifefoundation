import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Changing Narratives: Storytelling for Advocacy",
  description:
    "Neil Life Foundation and Nigeria Youth Future Fund hosted a one-day storytelling advocacy workshop to shift narratives and advance inclusive change.",
  alternates: {
    canonical: "/news-feed/changing-narratives-storytelling-advocacy",
  },
};

export default function Page() {
  return (
    <div className="page-shell flex flex-col items-start space-y-6 md:space-y-10">
      <div className="inline-flex">
        <Link href="/news-feed" className="inline-flex items-center space-x-2">
          <span className="text-xl md:text-2xl">&lt;</span>
          <span className="inline text-sm md:text-base">News Feed</span>
        </Link>
      </div>

      <div className="flex w-full flex-col space-y-8 md:space-y-12">
        <h1 className="text-3xl font-bold font-poppins md:text-6xl md:font-extrabold md:leading-relaxed">
          Changing Narratives: Storytelling for Advocacy
        </h1>
        <div className="relative">
          <Image
            src="https://res.cloudinary.com/dfcpht2ua/image/upload/q_auto/f_auto/v1778551214/IMG-20260508-WA0075_axo1w6.jpg"
            alt="Storytelling advocacy workshop participants"
            width={990}
            height={565}
            loading="lazy"
            sizes="(max-width: 640px) 640px, (max-width: 1024px) 900px, 990px"
            className="h-auto w-full rounded-xl object-cover md:max-h-[565px]"
          />
          <div className="absolute right-4 bottom-4 rounded-lg bg-brand-700 px-4 py-2 text-sm font-bold text-white shadow-lg">
            October 4, 2025
          </div>
        </div>
      </div>

      <div className="flex w-full max-w-[800px] flex-col space-y-5 rounded-xl border border-slate-200 bg-white p-5 md:mt-8 md:space-y-8 md:p-8">
        <p className="inline w-max rounded-xl bg-neutral-300 px-2 py-1 text-xs font-semibold">
          ADVOCACY &AMP; YOUTH LEADERSHIP
        </p>

        <p className="text-base font-poppins leading-6 text-brand-950 md:leading-8">
          The Neil Life Foundation one-day storytelling advocacy workshop, held in collaboration with the Nigeria Youth Future Fund (NYFF), was a powerful space of learning, sharing, and collaboration.
        </p>

        <p className="text-base font-poppins leading-6 text-brand-950 md:leading-8">
          Together, we explored how storytelling can be used as a tool to shift narratives, build empathy, and advocate for inclusive change.
        </p>

        <div className="space-y-6 md:grid md:grid-cols-2 md:gap-3 md:space-y-0">
          <div>
            <Image
              src="https://res.cloudinary.com/dfcpht2ua/image/upload/q_auto/f_auto/v1778551213/IMG-20260508-WA0077_r6jgir.jpg"
              alt="Participants in storytelling session"
              width={467}
              height={369}
              loading="lazy"
              sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 467px"
              className="h-auto w-full rounded-lg object-cover"
            />
          </div>
          <div>
            <Image
              src="https://res.cloudinary.com/dfcpht2ua/image/upload/q_auto/f_auto/v1778551213/IMG-20260508-WA0076_qthc72.jpg"
              alt="Youth advocates in workshop"
              width={467}
              height={369}
              loading="lazy"
              sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 467px"
              className="h-auto w-full rounded-lg object-cover"
            />
          </div>
        </div>

        <p className="text-base font-poppins leading-6 text-brand-950 md:leading-8">
          When stories are centered—especially those from marginalized communities—barriers begin to dissolve. This workshop reinforced that advocacy rooted in lived experience is both powerful and transformative.
        </p>

        <span className="text-sm text-slate-600">
          We are grateful to Nigeria Youth Future Fund for this partnership and to every young storyteller who joined us in shaping a more inclusive narrative for the future.
        </span>
      </div>
    </div>
  );
}
