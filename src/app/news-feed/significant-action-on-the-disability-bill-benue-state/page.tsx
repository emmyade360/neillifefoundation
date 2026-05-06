import Link from "next/link";
import Image from "next/image";
import { StoryVideo } from "@/app/components/StoryVideo";
import { STORY_VIDEO_URLS } from "@/lib/storyVideos";

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
          Together We Rise: Collective Action for Disability Inclusion
        </h1>
        <Image src="/images/EV_NYFF_10.jpeg" alt="Community and partners standing together for inclusion" width={990} height={565} loading="lazy" sizes="100vw" className="h-auto w-full rounded-xl object-cover md:max-h-[565px]" />
      </div>
      <div className="flex w-full max-w-[760px] flex-col space-y-4 rounded-xl border border-slate-200 bg-white p-5 md:mt-8 md:space-y-6 md:p-8">
        <p className="inline w-max rounded-xl bg-neutral-300 px-2 py-1 text-xs font-semibold">COLLECTIVE ACTION</p>
        <p className="text-base font-poppins leading-6 text-blue-950 md:leading-8">
          This moment captures what Neil Life Foundation stands for: people from different backgrounds united by one purpose, to build a future where persons with disabilities participate fully and equally.
        </p>
        <p className="text-base font-poppins leading-6 text-blue-950 md:leading-8">
          Through collaboration with stakeholders, advocates, and community members, we continue to push for systems that are accessible, fair, and responsive to real needs.
        </p>
        <p className="text-base font-poppins leading-6 text-blue-950 md:leading-8">
          Every partnership formed is a step toward lasting social change. Every voice included is a step toward justice.
        </p>
      </div>
      <StoryVideo src={STORY_VIDEO_URLS.collectiveAction} />
    </div>
  )
}
