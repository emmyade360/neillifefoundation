import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { StoryVideo } from "@/app/components/StoryVideo";
import { STORY_VIDEO_URLS } from "@/lib/storyVideos";

export const metadata: Metadata = {
  title: "Building Inclusive Leadership in Benue State",
  description: "Neil Life Foundation's community training helped women, youth, and leaders strengthen disability inclusion and local advocacy.",
  alternates: {
    canonical: "/news-feed/empowering-women-with-disabilities-in-benue-state",
  },
};

export default function Page() {
  return (
    <div className="page-shell flex flex-col items-start space-y-6 md:space-y-10">
      <div className="inline-flex">
        <Link href="/news-feed" className="inline-flex items-center space-x-2">
          <span className="text-xl md:text-2xl">&lt;</span><span className="inline text-sm md:text-base">News Feed</span>
        </Link>
      </div>
      <div className="flex w-full flex-col space-y-8 md:space-y-12">
        <h1 className="text-3xl font-bold font-poppins md:text-6xl md:font-extrabold md:leading-relaxed">
          Building Inclusive Leadership in Benue State
        </h1>
        <Image src="/images/EV_NYFF_2.jpeg" alt="Stakeholders participating in an inclusion training session" width={990} height={565} loading="lazy" sizes="(max-width: 640px) 640px, (max-width: 1024px) 900px, 990px" className="h-auto w-full rounded-xl object-cover md:max-h-[565px]" />
      </div>
      <div className="flex w-full max-w-[760px] flex-col space-y-4 rounded-xl border border-slate-200 bg-white p-5 md:mt-8 md:space-y-6 md:p-8">
        <p className="inline w-max rounded-xl bg-neutral-300 px-2 py-1 text-xs font-semibold">COMMUNITY LEADERSHIP</p>
        <p className="text-base font-poppins leading-6 text-brand-950 md:leading-8">
          At Neil Life Foundation, every training is designed to move people from awareness to action. In this session, women, youth, and community leaders gathered to share lived experiences and practical solutions for inclusion.
        </p>
        <p className="text-base font-poppins leading-6 text-brand-950 md:leading-8">
          Participants learned how to strengthen participation of persons with disabilities in decision-making, local advocacy, and community planning. The result was more than knowledge: it was renewed confidence and collective commitment.
        </p>
        <span className="w-full">
          <Image src="/images/EV_NYFF_9.jpeg" alt="Participants in attentive reflection during the session" width={467} height={311} loading="lazy" sizes="(max-width: 640px) 90vw, (max-width: 1024px) 85vw, 467px" className="h-auto w-full rounded-lg object-cover" />
          <span className="text-xs">Participants listening, learning, and contributing to shared solutions.</span>
        </span>
        <p className="text-base font-semibold font-poppins leading-6 text-brand-950 md:leading-8">
          We believe inclusive leadership begins when people are seen, heard, and supported to lead change in their own communities.
        </p>
      </div>
      <StoryVideo src={STORY_VIDEO_URLS.leadership} />
    </div>
  )
}
