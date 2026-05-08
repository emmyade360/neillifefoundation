import type { Metadata } from "next";
import Script from "next/script";

const DONORBOX_EMBED_URL = "https://donorbox.org/embed/project-support-4?language=en-us";
const DONORBOX_DONATION_URL = "https://donorbox.org/project-support-4";

export const metadata: Metadata = {
  title: "Donate",
  description: "Support Neil Life Foundation's inclusion, advocacy, and empowerment work.",
  alternates: {
    canonical: "/donate",
  },
};

export default function Page() {
  const isVercelPreview = process.env.VERCEL_ENV === "preview";

  return (
    <div className="page-shell flex flex-col items-center">
      {isVercelPreview ? (
        <section className="my-8 w-full max-w-[560px] rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm md:p-8">
          <h1 className="font-poppins text-2xl font-extrabold text-brand-950 md:text-3xl">
            Support Neil Life Foundation
          </h1>
          <p className="mt-3 text-sm leading-6 text-slate-700 md:text-base">
            Preview deployments use Vercel-generated domains, which donation providers can block for embedded payment forms.
          </p>
          <a
            href={DONORBOX_DONATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex rounded-full bg-brand-700 px-6 py-3 text-sm font-bold text-white transition hover:bg-brand-800"
          >
            Open Donation Form
          </a>
        </section>
      ) : (
        <>
          <Script src="https://donorbox.org/widget.js" strategy="lazyOnload" data-paypal-express="true" />
          <div className="my-2 w-full max-w-[560px] rounded-xl border border-slate-200 bg-white p-3 shadow-sm md:p-4">
            <iframe
              src={DONORBOX_EMBED_URL}
              name="donorbox"
              title="Neil Life Foundation donation form"
              allow="payment *"
              className="h-[900px] w-full min-w-[250px] max-w-[520px] border-0"
            />
          </div>
        </>
      )}
    </div>
  );
}
