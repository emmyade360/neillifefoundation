import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Building Safer Communities: Gender Based Violence Prevention in Kano",
  description:
    "Neil Life Foundation and Urgent Action Fund Africa delivered essential GBV prevention and response training to IDP camp communities in Kano.",
  alternates: {
    canonical: "/news-feed/gbv-prevention-training-kano-idp-camps",
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
          Building Safer Communities: Gender Based Violence Prevention in Kano
        </h1>
        <div className="relative">
          <Image
            src="https://res.cloudinary.com/dfcpht2ua/image/upload/q_auto/f_auto/v1778575035/IMG-20260508-WA0072_1_g2aziu.jpg"
            alt="GBV prevention training session at Kano IDP camp"
            width={990}
            height={565}
            loading="lazy"
            sizes="(max-width: 640px) 640px, (max-width: 1024px) 900px, 990px"
            className="h-auto w-full rounded-xl object-cover md:max-h-[565px]"
          />
          <div className="absolute right-4 bottom-4 rounded-lg bg-brand-700 px-4 py-2 text-sm font-bold text-white shadow-lg">
            August 18, 2025
          </div>
        </div>
      </div>

      <div className="flex w-full max-w-[800px] flex-col space-y-5 rounded-xl border border-slate-200 bg-white p-5 md:mt-8 md:space-y-8 md:p-8">
        <p className="inline w-max rounded-xl bg-neutral-300 px-2 py-1 text-xs font-semibold">
          COMMUNITY SAFETY
        </p>

        <p className="text-base font-poppins leading-6 text-brand-950 md:leading-8">
          The Neil Life Foundation in collaboration with the Urgent Action Fund @uaf_africa, visited IDP camps in Kano to provide crucial training on Gender-Based Violence (GBV) prevention and response.
        </p>

        <div className="space-y-6 md:grid md:grid-cols-2 md:gap-3 md:space-y-0">
          <div>
            <Image
              src="https://res.cloudinary.com/dfcpht2ua/image/upload/q_auto/f_auto/v1778575035/IMG-20260508-WA0074_1_gixkrj.jpg"
              alt="Participants engaged in GBV prevention training"
              width={467}
              height={369}
              loading="lazy"
              sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 467px"
              className="h-auto w-full rounded-lg object-cover"
            />
          </div>
          <div>
            <Image
              src="https://res.cloudinary.com/dfcpht2ua/image/upload/q_auto/f_auto/v1778575035/IMG-20260508-WA0073_1_ro6na7.jpg"
              alt="Community members during GBV response workshop"
              width={467}
              height={369}
              loading="lazy"
              sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 467px"
              className="h-auto w-full rounded-lg object-cover"
            />
          </div>
        </div>

        <p className="text-base font-poppins leading-6 text-brand-950 md:leading-8">
          This outreach equipped community members—particularly women and youth—with knowledge and practical tools to recognize, prevent, and respond to GBV in vulnerable settings. The training emphasized survivor-centered approaches, accessible reporting mechanisms, and the importance of community-led protection.
        </p>

        <p className="text-base font-poppins leading-6 text-brand-950 md:leading-8">
          By strengthening local capacity to address GBV, we move closer to environments where all persons—especially those with disabilities—can live free from violence and fear.
        </p>

        <span className="text-sm text-slate-600">
          This partnership reflects our shared commitment to protecting human dignity and ensuring that even in displacement, no one is left behind.
        </span>
      </div>
    </div>
  );
}
