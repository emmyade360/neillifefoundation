"use client"

import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="page-shell flex min-h-screen flex-col items-center justify-center text-center">
      <h1 className="mb-4 text-3xl font-bold text-blue-950">Something went wrong</h1>
      <p className="mb-6 max-w-xl text-sm leading-7 text-slate-700">
        The application encountered an error. Please refresh the page or try again later.
      </p>
      <button
        type="button"
        onClick={() => reset()}
        className="rounded-full bg-blue-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
      >
        Try again
      </button>
    </div>
  );
}
