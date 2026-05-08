import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Donate",
  description: "Support Neil Life Foundation's inclusion, advocacy, and empowerment work.",
  alternates: {
    canonical: "/donate",
  },
};

export default function Page() {
  return (
    <div className="page-shell flex flex-col items-center">
      <Script src="https://donorbox.org/widget.js" strategy="lazyOnload" data-paypal-express="true" />
      <div className="my-2 w-full max-w-[560px] rounded-xl border border-slate-200 bg-white p-3 shadow-sm md:p-4">
        <iframe
          src="https://donorbox.org/embed/project-support-4?language=en-us"
          name="donorbox"
          title="Neil Life Foundation donation form"
          allow="payment *"
          className="h-[900px] w-full min-w-[250px] max-w-[520px] border-0"
        />
      </div>
    </div>
  );
}
