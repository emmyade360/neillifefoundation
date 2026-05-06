import Link from "next/link";

export default function NotFound() {
  return (
    <div className="page-shell flex min-h-screen flex-col items-center justify-center text-center">
      <h1 className="mb-4 text-3xl font-bold text-brand-950">Page not found</h1>
      <p className="mb-6 max-w-xl text-sm leading-7 text-slate-700">
        We could not find the page you were looking for. Please check the URL or return to the homepage.
      </p>
      <Link href="/" className="rounded-full bg-brand-700 px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-800">
        Return home
      </Link>
    </div>
  );
}
