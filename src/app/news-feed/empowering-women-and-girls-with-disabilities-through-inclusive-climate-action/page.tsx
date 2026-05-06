import Image from "next/image"
import Link from "next/link"
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
          From Silence to Voice: Dialogue that Inspires Inclusion
        </h1>
        <Image src="/images/EV_NYFF_3.jpeg" alt="Inclusive roundtable session at Neil Life Foundation event" width={990} height={565} loading="lazy" sizes="100vw" className="h-auto w-full rounded-xl object-cover md:max-h-[565px]" />
      </div>
      <div className="flex w-full max-w-[800px] flex-col space-y-5 rounded-xl border border-slate-200 bg-white p-5 md:mt-8 md:space-y-8 md:p-8">
        <p className="inline w-max rounded-xl bg-neutral-300 px-2 py-1 text-xs font-semibold">INCLUSION DIALOGUE</p>

        <div className="space-y-6 md:grid md:grid-cols-2 md:gap-3 md:space-y-0">
          <div>
            <Image src='/images/EV_NYFF_6.jpeg' alt="Facilitator speaking during inclusion session" width={467} height={369} loading="lazy" sizes="100vw" className="h-auto w-full rounded-lg object-cover" />
          </div>
          <div>
            <Image src='/images/EV_NYFF_7.jpeg' alt="Participant sharing insights during dialogue" width={467} height={369} loading="lazy" sizes="100vw" className="h-auto w-full rounded-lg object-cover" />
          </div>
        </div>

        <div className="space-y-6 md:grid md:grid-cols-2 md:gap-3 md:space-y-0">
          <div>
            <Image src='/images/EV_NYFF_8.jpeg' alt="Stakeholders listening during community dialogue" width={467} height={369} loading="lazy" sizes="100vw" className="h-auto w-full rounded-lg object-cover" />
          </div>
          <div>
            <Image src='/images/EV_NYFF_5.jpeg' alt="Session participants collaborating at the event" width={467} height={369} loading="lazy" sizes="100vw" className="h-auto w-full rounded-lg object-cover" />
          </div>
        </div>

        <p className="text-base font-poppins leading-6 text-blue-950 md:leading-8">
          When communities gather to listen and learn together, barriers begin to fall. This dialogue session created room
          for honest stories, practical ideas, and renewed commitment to disability inclusion.
        </p>
        <p className="text-base font-poppins leading-6 text-blue-950 md:leading-8">
          Participants explored how inclusion can be strengthened through local leadership, accessible communication,
          and collaborative policy action.
        </p>
        <p className="text-base font-poppins leading-6 text-blue-950 md:leading-8">
          At Neil Life Foundation, we believe transformation happens when people are not spoken for, but empowered to speak for themselves.
        </p>
      </div>
      <StoryVideo src={STORY_VIDEO_URLS.dialogue} maxWidthClass="max-w-[800px]" />
    </div>
  )
}
