import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Strengthening Disability Rights: Implementing the Disability Act in Benue State",
  description:
    "Neil Life Foundation and Nigerian Youth Future Fund convened stakeholders in Benue State to advance implementation of the Disability Act and protect the rights of persons with disabilities.",
  alternates: {
    canonical: "/news-feed/disability-act-implementation-benue-state",
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
          Strengthening Disability Rights: Implementing the Disability Act in Benue State
        </h1>
        <div className="relative">
          <Image
            src="https://res.cloudinary.com/dfcpht2ua/image/upload/q_auto/f_auto/v1778564860/IMG-20260508-WA0078_xlra7m.jpg"
            alt="Stakeholders meeting on Disability Act implementation in Benue State"
            width={990}
            height={565}
            loading="lazy"
            sizes="(max-width: 640px) 640px, (max-width: 1024px) 900px, 990px"
            className="h-auto w-full rounded-xl object-cover md:max-h-[565px]"
          />
          <div className="absolute right-4 bottom-4 rounded-lg bg-brand-700 px-4 py-2 text-sm font-bold text-white shadow-lg">
            March 30, 2026
          </div>
        </div>
      </div>

      <div className="flex w-full max-w-[800px] flex-col space-y-5 rounded-xl border border-slate-200 bg-white p-5 md:mt-8 md:space-y-8 md:p-8">
        <p className="inline w-max rounded-xl bg-neutral-300 px-2 py-1 text-xs font-semibold">
          DISABILITY RIGHTS &AMP; POLICY
        </p>

        <p className="text-base font-poppins leading-6 text-brand-950 md:leading-8">
          We were honored to host stakeholders in Benue State for a powerful engagement on implementing the Disability Act, made possible by the Nigerian Youth Future Fund. Together, we shared insights, aligned strategies, and strengthened our collective commitment to protecting the rights and dignity of persons with disabilities.
        </p>

        <div className="space-y-6 md:grid md:grid-cols-2 md:gap-3 md:space-y-0">
          <div>
            <Image
              src="https://res.cloudinary.com/dfcpht2ua/image/upload/q_auto/f_auto/v1778564860/IMG-20260508-WA0079_pwv5ao.jpg"
              alt="Stakeholders discussing Disability Act implementation"
              width={467}
              height={369}
              loading="lazy"
              sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 467px"
              className="h-auto w-full rounded-lg object-cover"
            />
          </div>
          <div>
            <Image
              src="https://res.cloudinary.com/dfcpht2ua/image/upload/q_auto/f_auto/v1778564859/IMG-20260508-WA0080_vo2vxg.jpg"
              alt="Group photo from the Disability Act implementation meeting"
              width={467}
              height={369}
              loading="lazy"
              sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 467px"
              className="h-auto w-full rounded-lg object-cover"
            />
          </div>
        </div>

        <p className="text-base font-poppins leading-6 text-brand-950 md:leading-8">
          The focus was on translating the Disability Act from policy into practice—ensuring that accessibility, inclusion, and equal opportunity become realities in our communities, schools, workplaces, and institutions.
        </p>

        <span className="text-sm text-slate-600">
          With gratitude to the Nigerian Youth Future Fund and all Benue State stakeholders for your dedication to systemic change and disability justice.
        </span>
      </div>
    </div>
  );
}
