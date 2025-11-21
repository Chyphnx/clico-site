import Link from "next/link";
import { gems } from "../../data/gems";

export default function GemsIndexPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-12 space-y-8">
      <header className="space-y-3">
        <p className="text-xs tracking-[0.35em] uppercase text-slate-400">
          Collection · Founders Series
        </p>
        <h1 className="text-2xl md:text-3xl font-light text-slate-50">
          Extraordinary Gems · Kingmaker Trinity Stack
        </h1>
        <p className="text-sm text-slate-300 max-w-2xl">
          First‑run pieces in the CLICO Kingmaker Trinity stack. All pieces share
          the Tanzanite · Painite · Moldavite triad in varying ratios and
          calibrations.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-3">
        {gems.map((gem) => (
          <Link
            key={gem.slug}
            href={`/gems/${gem.slug}`}
            className="group rounded-2xl border border-slate-800 bg-slate-950/60 p-4 flex flex-col gap-3 hover:border-sky-500/70 hover:shadow-[0_0_40px_rgba(56,189,248,0.25)] transition-all"
          >
            <div className="h-32 rounded-xl bg-gradient-to-br from-sky-500/20 via-indigo-500/10 to-emerald-400/15 group-hover:from-sky-500/35 group-hover:to-emerald-400/25" />
            <div className="space-y-1">
              <h2 className="text-sm font-medium text-slate-50">{gem.name}</h2>
              <p className="text-[0.75rem] text-slate-400">{gem.tagline}</p>
              <p className="text-[0.7rem] text-slate-500">
                {gem.caratBand} · {gem.metal}
              </p>
            </div>
            <div className="mt-auto flex items-center justify-between text-[0.7rem]">
              <span className="rounded-full border border-slate-700 px-2 py-0.5 text-slate-300">
                {gem.edition}
              </span>
              <span
                className={`uppercase tracking-wide ${
                  gem.status === "available"
                    ? "text-emerald-400"
                    : gem.status === "reserved"
                    ? "text-amber-400"
                    : "text-slate-500"
                }`}
              >
                {gem.status}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
