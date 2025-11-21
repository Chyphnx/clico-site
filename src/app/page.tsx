import Link from "next/link";
import { gems } from "../data/gems";

export default function HomePage() {
  const hero = gems[0];

  return (
    <div className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.16),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(129,140,248,0.18),_transparent_55%)]" />
      <section className="relative mx-auto max-w-6xl px-4 pt-16 pb-20 flex flex-col md:flex-row gap-12 items-center">
        <div className="md:w-1/2 space-y-6">
          <p className="text-xs tracking-[0.35em] uppercase text-slate-400">
            CLICO · EXTRAORDINARY GEMS
          </p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-slate-50">
            Rare stones,{" "}
            <span className="font-semibold text-sky-300">
              built for the next 100 years.
            </span>
          </h1>
          <p className="text-sm md:text-base text-slate-300 leading-relaxed">
            Tanzanite. Painite. Moldavite. Finite‑supply stones, precision‑set in
            SILV23 sterling and serialized from day one. Every piece is tracked,
            documented, and designed to outlive trends, cycles, and hype.
          </p>
          <div className="flex flex-wrap gap-3 text-xs text-slate-300">
            <span className="rounded-full border border-sky-500/60 px-3 py-1 bg-slate-900/60">
              Serialized &amp; ledger‑ready
            </span>
            <span className="rounded-full border border-emerald-500/60 px-3 py-1 bg-slate-900/60">
              Ethical &amp; traceable
            </span>
            <span className="rounded-full border border-indigo-500/60 px-3 py-1 bg-slate-900/60">
              Designed for founders &amp; operators
            </span>
          </div>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="/gems"
              className="inline-flex items-center justify-center rounded-full bg-sky-500 px-6 py-2 text-sm font-medium text-slate-950 shadow-lg shadow-sky-500/40 hover:bg-sky-400 transition-colors"
            >
              View the Founders Series
            </Link>
            <Link
              href="/gems/paws-and-claws"
              className="inline-flex items-center justify-center rounded-full border border-slate-700 px-5 py-2 text-sm font-medium text-slate-200 hover:border-sky-400 hover:text-sky-100 transition-colors"
            >
              Paws &amp; Claws · Giveback
            </Link>
          </div>
          <div className="pt-4 text-xs text-slate-400 space-y-1">
            <p>
              Founders flagship:{" "}
              <span className="text-slate-100">{hero.name}</span> —{" "}
              {hero.tagline}
            </p>
            <p>
              Edition: {hero.edition} · Status:{" "}
              <span
                className={
                  hero.status === "available" ? "text-emerald-400" : "text-amber-400"
                }
              >
                {hero.status.toUpperCase()}
              </span>
            </p>
          </div>
        </div>
        <div className="md:w-1/2 flex items-center justify-center">
          <div className="relative h-80 w-80 rounded-full bg-slate-950/80 border border-slate-700/80 shadow-[0_0_80px_rgba(56,189,248,0.35)] overflow-hidden">
            <div className="absolute inset-[-40%] bg-[conic-gradient(from_210deg,_rgba(56,189,248,0.18),_rgba(129,140,248,0.6),_rgba(45,212,191,0.4),_rgba(56,189,248,0.18))] animate-[spin_18s_linear_infinite]" />
            <div className="absolute inset-[18%] rounded-full bg-slate-950/95 border border-slate-700/70 backdrop-blur">
              <div className="h-full w-full flex flex-col items-center justify-center gap-2 px-6 text-center">
                <p className="text-[0.65rem] tracking-[0.22em] uppercase text-slate-400">
                  Kingmaker Trinity Stack
                </p>
                <p className="text-sm text-slate-200">
                  Tanzanite · Painite · Moldavite
                </p>
                <p className="text-[0.7rem] text-slate-400 leading-relaxed">
                  Calibrated for founders, fund architects, and operators who
                  live at the edge of risk, reward, and responsibility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative border-t border-slate-900/80 bg-black/40">
        <div className="mx-auto max-w-6xl px-4 py-12 grid gap-8 md:grid-cols-3 text-xs text-slate-300">
          <div>
            <p className="text-slate-400 uppercase tracking-[0.22em] text-[0.65rem] mb-2">
              Gem Stack
            </p>
            <p className="text-slate-100 text-sm">
              Tanzanite for high‑signal insight. Painite for disciplined
              aggression. Moldavite for timeline shifts and bold moves.
            </p>
          </div>
          <div>
            <p className="text-slate-400 uppercase tracking-[0.22em] text-[0.65rem] mb-2">
              Documentation
            </p>
            <p>
              Each piece ships with serialized COA, imaging, and ledger‑ready
              metadata for future vaulting, insurance, or transfer.
            </p>
          </div>
          <div>
            <p className="text-slate-400 uppercase tracking-[0.22em] text-[0.65rem] mb-2">
              Paws &amp; Claws
            </p>
            <p>
              A fixed slice of the collection routes directly into animal
              rescue, shelters, and frontline veterinary support.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
