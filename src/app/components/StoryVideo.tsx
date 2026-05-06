type StoryVideoProps = {
  src?: string;
  maxWidthClass?: string;
};

function isEmbeddableVideoUrl(src?: string): src is string {
  if (!src) {
    return false;
  }

  try {
    const url = new URL(src);
    return url.protocol === "https:" && url.hostname === "res.cloudinary.com";
  } catch {
    return src.startsWith("/videos/");
  }
}

export function StoryVideo({ src, maxWidthClass = "max-w-[760px]" }: StoryVideoProps) {
  if (!isEmbeddableVideoUrl(src)) {
    return null;
  }

  return (
    <section className={`w-full ${maxWidthClass} space-y-3 rounded-xl border border-slate-200 bg-white p-5 md:p-8`}>
      <h2 className="text-xl font-bold text-blue-950 md:text-2xl">Watch Story Video</h2>
      <video
        src={src}
        controls
        preload="metadata"
        playsInline
        className="aspect-video h-auto w-full rounded-lg bg-slate-950 object-contain"
      >
        Your browser does not support the video tag.
      </video>
    </section>
  );
}
