export default function Loading() {
  return (
    <div className="min-h-screen bg-slate-50 px-4 py-24 text-slate-900">
      <div className="mx-auto flex max-w-6xl flex-col gap-6">
        <div className="h-80 rounded-[2rem] bg-slate-200/90 shadow-inner animate-pulse" />
        <div className="space-y-4">
          <div className="h-10 w-3/4 rounded-3xl bg-slate-200 animate-pulse" />
          <div className="h-6 w-1/2 rounded-full bg-slate-200 animate-pulse" />
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="h-64 rounded-[1.5rem] bg-slate-200 animate-pulse" />
          <div className="h-64 rounded-[1.5rem] bg-slate-200 animate-pulse" />
          <div className="h-64 rounded-[1.5rem] bg-slate-200 animate-pulse" />
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="h-48 rounded-[1.5rem] bg-slate-200 animate-pulse" />
          <div className="h-48 rounded-[1.5rem] bg-slate-200 animate-pulse" />
        </div>
      </div>
    </div>
  );
}
