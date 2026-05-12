import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Empower Her: Advancing SHR Rights for Women and Girls with Disabilities in Jos",
  description:
    "Neil Life Foundation, Sauri Growth Initiative, and MSI Choices NG hosted Empower Her at University of Jos to champion sexual and reproductive health rights for women and girls with disabilities.",
  alternates: {
    canonical: "/news-feed/empower-her-advancing-shr-rights-in-jos",
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
          Empower Her: Advancing SHR Rights for Women and Girls with Disabilities in Jos
        </h1>
        <div className="relative">
          <Image
            src="https://res.cloudinary.com/dfcpht2ua/image/upload/q_auto/f_auto/v1778548598/WhatsApp_Image_2026-05-08_at_3.37.27_PM_mo4p9q.jpg"
            alt="Empower Her event participants at University of Jos"
            width={990}
            height={565}
            loading="lazy"
            sizes="(max-width: 640px) 640px, (max-width: 1024px) 900px, 990px"
            className="h-auto w-full rounded-xl object-cover md:max-h-[565px]"
          />
          <div className="absolute right-4 bottom-4 rounded-lg bg-brand-700 px-4 py-2 text-sm font-bold text-white shadow-lg">
            March 19, 2025
          </div>
        </div>
      </div>

      <div className="flex w-full max-w-[800px] flex-col space-y-5 rounded-xl border border-slate-200 bg-white p-5 md:mt-8 md:space-y-8 md:p-8">
        <p className="inline w-max rounded-xl bg-neutral-300 px-2 py-1 text-xs font-semibold">
          EMPOWER HER
        </p>

        <p className="text-base font-poppins leading-6 text-brand-950 md:leading-8">
          On March 19th, the Nell Life Foundation, in collaboration with @sauri_growth_initiative_ and @msichoicesng, came together to host a powerful and transformative event themed &ldquo;Empower Her&rdquo; — a program that was dedicated to advocating for the sexual and reproductive health and rights (SHR) of women and girls with disabilities in University of Jos.
        </p>

        <div className="space-y-6 md:grid md:grid-cols-2 md:gap-3 md:space-y-0">
          <div>
            <Image
              src="https://res.cloudinary.com/dfcpht2ua/image/upload/q_auto/f_auto/v1778548598/WhatsApp_Image_2026-05-08_at_3.37.27_PM_1_fzuzvd.jpg"
              alt="Empower Her session participants engaging in discussion"
              width={467}
              height={369}
              loading="lazy"
              sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 467px"
              className="h-auto w-full rounded-lg object-cover"
            />
          </div>
          <div>
            <Image
              src="https://res.cloudinary.com/dfcpht2ua/image/upload/q_auto/f_auto/v1778548598/WhatsApp_Image_2026-05-08_at_3.37.27_PM_1_fzuzvd.jpg"
              alt="Attendees at the Empower Her event"
              width={467}
              height={369}
              loading="lazy"
              sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 467px"
              className="h-auto w-full rounded-lg object-cover"
            />
          </div>
        </div>

        <p className="text-base font-poppins leading-6 text-brand-950 md:leading-8">
          The event created a safe and empowering space for women and girls with disabilities to learn, share, and claim ownership of their voices and choices around sexual and reproductive health.
        </p>

        <p className="text-base font-poppins leading-6 text-brand-950 md:leading-8">
          Through accessible information, practical support, and respectful dialogue centered on dignity and consent, Empower Her demonstrated how collaboration can make rights tangible for people who are too often left behind.
        </p>

        <span className="text-sm text-slate-600">
          This initiative aligns with our commitment to ensure that women and girls with disabilities are not only included, but empowered to shape their own wellbeing.
        </span>
      </div>
    </div>
  );
}
