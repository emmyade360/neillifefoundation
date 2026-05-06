import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { StoryVideo } from "@/app/components/StoryVideo";
import { APPROACHES, getApproachBySlug } from "@/lib/approaches";

export function generateStaticParams() {
  return APPROACHES.map((approach) => ({ slug: approach.slug }));
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const approach = getApproachBySlug(slug);

  if (!approach) {
    notFound();
  }

  return (
    <div className="page-shell flex flex-col items-start gap-6 md:gap-10">
      <Link href="/our-approach" className="inline-flex items-center gap-2 text-sm font-semibold text-blue-900 hover:underline">
        <span className="text-lg">&lt;</span>
        <span>Our Approach</span>
      </Link>

      <section className="w-full space-y-6 rounded-xl border border-slate-200 bg-white p-5 shadow-sm md:p-8">
        <h1 className="text-3xl font-extrabold text-blue-950 md:text-5xl">{approach.title}</h1>
        <p className="text-base leading-7 text-slate-700 md:text-lg">{approach.summary}</p>

        {approach.details.map((line) => (
          <p key={line} className="text-sm leading-7 text-slate-800 md:text-base md:leading-8">
            {line}
          </p>
        ))}

        <div>
          <Image
            src={approach.imageSrc}
            alt={approach.imageAlt}
            width={1000}
            height={560}
            loading="lazy"
            sizes="100vw"
            className="h-auto w-full rounded-lg object-cover"
          />
          <span className="mt-2 block text-xs text-slate-600">{approach.imageCaption}</span>
        </div>
      </section>

      <section className="w-full rounded-xl border border-slate-200 bg-white p-5 shadow-sm md:p-8">
        <p className="mb-3 text-sm font-semibold text-blue-900 md:text-base">{approach.videoTitle}</p>
        <StoryVideo src={approach.videoSrc} maxWidthClass="max-w-none" />
      </section>
    </div>
  );
}
