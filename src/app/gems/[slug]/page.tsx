import { notFound } from "next/navigation";
import { gems } from "../../../data/gems";

type Props = {
  params: { slug: string };
};

export default function GemDetailPage({ params }: Props) {
  const gem = gems.find((g) => g.slug === params.slug);
  if (!gem) return notFound();

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 space-y-10">
      <header className="space-y-3">
        <p className="text-xs tracking-[0.35em] uppercase text-slate-400">
          Extraordinary Gems · Founders Series
        </p>
        <h1 className="text-2xl md:text-3xl font-light text-slate-50">
          {gem.name}
        </h1>
        <p className="text-sm text-slate-300 max-w-2xl">{gem.tagline}</p>
      </header>

      <div className="grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
        <div className="space-y-6">
          <div className="h-72 rounded-3xl bg-gradient-to-br from-sky-500/25 via-indigo-500/25 to-emerald-400/25 border border-slate-700/80 shadow-[0_0_80px_rgba(56,189,248,0.35)]" />
          <div className="space-y-3 text-sm text-slate-200">
            <p className="text-slate-100">{gem.heroCopy}</p>
            <p className="text-xs text-slate-400">
              All energetic language is descriptive, metaphorical, and non‑medical.
              No claims of diagnosis or treatment are made.
            </p>
          </div>
        </div>

        <aside className="space-y-6 text-sm text-slate-200">
          <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4 space-y-3">
            <h2 className="text-xs tracking-[0.25em] uppercase text-slate-400">
              Build
            </h2>
            <dl className="space-y-2 text-xs">
              <div className="flex justify-between gap-4">
                <dt className="text-slate-500">Stone stack</dt>
                <dd>Tanzanite · Painite · Moldavite</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-slate-500">Carat band</dt>
                <dd>{gem.caratBand}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-slate-500">Cut profile</dt>
                <dd>{gem.cut}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-slate-500">Metal</dt>
                <dd>{gem.metal}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-slate-500">Edition</dt>
                <dd>{gem.edition}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-slate-500">Status</dt>
                <dd>
                  <span
                    className={
                      gem.status === "available"
                        ? "text-emerald-400"
                        : gem.status === "reserved"
                        ? "text-amber-400"
                        : "text-slate-500"
                    }
                  >
                    {gem.status.toUpperCase()}
                  </span>
                </dd>
              </div>
            </dl>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4 space-y-3">
            <h2 className="text-xs tracking-[0.25em] uppercase text-slate-400">
              Energetic framing
            </h2>
            <p className="text-xs text-slate-300">
              Chakra focus: <span className="text-sky-200">{gem.chakra}</span>
            </p>
            <ul className="text-xs list-disc list-inside space-y-1 text-slate-300">
              {gem.energy.map((e) => (
                <li key={e}>{e}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-black/80 p-4 space-y-3 text-xs text-slate-300">
            <h2 className="text-[0.7rem] tracking-[0.25em] uppercase text-slate-400">
              Reservation
            </h2>
            <p>
              To reserve this piece, reference:{" "}
              <span className="font-mono text-sky-300">
                {gem.slug.toUpperCase()}
              </span>{" "}
              in your message on the contact page or via your advisor.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
