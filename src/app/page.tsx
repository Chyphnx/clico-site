const highlights = [
  { label: "Cut", value: "Precision faceted" },
  { label: "Metal", value: ".925 SILV23 & 18K gold" },
  { label: "Edition", value: "Numbered & certificate-backed" },
];

const stones = [
  {
    name: "Tanzanite",
    tag: "Electric violet-blue",
    copy:
      "The cornerstone of the Kingmaker Trinity — saturated violet-blue with a shifting inner fire.",
    note: "Perfect for the hero pendant and matching stud/earring set.",
  },
  {
    name: "Painite",
    tag: "Once the rarest gem",
    copy:
      "Deep, complex reds and browns with a history of being one of the rarest minerals on earth.",
    note: "Build ultra-limited runs with low double-digit piece counts.",
  },
  {
    name: "Moldavite",
    tag: "Impact-born glass",
    copy:
      "Formed by ancient impact — raw, powerful, and instantly recognizable to collectors.",
    note: "Anchor bracelets, amulets, and more 'charged' pieces here.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-50">
      <section className="relative isolate overflow-hidden border-b border-slate-800 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        <div className="pointer-events-none absolute inset-0 opacity-40 [background:radial-gradient(circle_at_top,_#1e293b,_transparent_55%),radial-gradient(circle_at_bottom,_#020617,_transparent_55%)]" />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 py-16 lg:flex-row lg:items-center lg:py-24">
          <div className="flex-1 space-y-8">
            <p className="inline-flex items-center gap-2 rounded-full border border-slate-700/70 bg-slate-900/60 px-3 py-1 text-xs font-medium uppercase tracking-[0.25em] text-slate-300/80 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              CLICo · Extraordinary Gems
            </p>
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-slate-50 sm:text-5xl lg:text-6xl">
              Rare stones.
              <span className="block text-slate-300">
                Designed for the{" "}
                <span className="underline decoration-emerald-400/70 decoration-2 underline-offset-4">
                  one in thirteen
                </span>
                .
              </span>
            </h1>
            <p className="max-w-xl text-base leading-relaxed text-slate-300/90 sm:text-lg">
              Tanzanite, Painite, Moldavite &amp; other extraordinary materials — cut, set, and
              authenticated under the CLICo standard. Every piece is numbered, documented, and
              built to outlive trends.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#collections"
                className="inline-flex items-center justify-center rounded-full bg-emerald-400 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-300"
              >
                View first release
              </a>
              <a
                href="#provenance"
                className="inline-flex items-center justify-center rounded-full border border-slate-600/80 bg-slate-900/60 px-6 py-2.5 text-sm font-medium text-slate-100/90 backdrop-blur hover:border-slate-400/90"
              >
                Learn the CLICo standard
              </a>
            </div>
            <div className="grid max-w-xl grid-cols-3 gap-4 text-xs text-slate-300/80 sm:text-sm">
              {highlights.map((item) => (
                <div key={item.label} className="space-y-1">
                  <p className="text-[0.65rem] uppercase tracking-[0.18em] text-slate-500 sm:text-[0.7rem]">
                    {item.label}
                  </p>
                  <p className="font-medium text-slate-100">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex-1">
            <div className="relative mx-auto max-w-md rounded-3xl border border-slate-700/80 bg-slate-900/70 p-5 shadow-[0_24px_80px_rgba(15,23,42,0.85)] backdrop-blur">
              <div className="mb-4 flex items-center justify-between text-xs text-slate-300/80">
                <span className="font-medium tracking-[0.16em] uppercase">
                  Launch Capsule · 01
                </span>
                <span className="rounded-full border border-slate-600/80 px-3 py-0.5 text-[0.65rem] uppercase tracking-[0.18em]">
                  Limited run
                </span>
              </div>
              <div className="relative mb-5 aspect-[4/5] overflow-hidden rounded-2xl border border-slate-700/80 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
                <div className="pointer-events-none absolute inset-0 opacity-70 [background:radial-gradient(circle_at_20%_10%,_rgba(52,211,153,0.18),_transparent_55%),radial-gradient(circle_at_80%_90%,_rgba(129,140,248,0.22),_transparent_55%)]" />
                <div className="relative flex h-full flex-col items-center justify-center gap-3 px-6 text-center">
                  <p className="text-[0.7rem] uppercase tracking-[0.2em] text-slate-300/80">
                    Signature Pendant Mock
                  </p>
                  <p className="max-w-xs text-sm text-slate-200/95">
                    Drop in your hero render here: Tanzanite, Painite, Moldavite or your halo piece.
                  </p>
                  <div className="mt-2 rounded-full border border-emerald-400/70 bg-slate-900/80 px-4 py-1 text-[0.7rem] font-medium text-emerald-300/95">
                    Serialized · QR-linked provenance
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between text-xs text-slate-300/90">
                <div className="space-y-1">
                  <p className="text-[0.65rem] uppercase tracking-[0.18em] text-slate-500">
                    Collection
                  </p>
                  <p className="font-medium text-slate-100">Kingmaker Trinity · 01–07</p>
                </div>
                <div className="space-y-1 text-right">
                  <p className="text-[0.65rem] uppercase tracking-[0.18em] text-slate-500">
                    Status
                  </p>
                  <p className="font-medium text-emerald-300">Pre-launch · Private list</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="collections" className="border-b border-slate-800 bg-slate-950/95">
        <div className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
          <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
                Signature stones in the first capsule
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-slate-300/90">
                Start lean with a focused set of pieces built around three extraordinary materials.
                You can expand the grid later — the structure is ready.
              </p>
            </div>
            <p className="text-xs text-slate-500">
              Fully controlled by GX-13 / CLICo · All rights reserved
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {stones.map((stone) => (
              <article
                key={stone.name}
                className="group flex flex-col justify-between rounded-2xl border border-slate-800/90 bg-slate-900/70 p-5 shadow-[0_14px_40px_rgba(15,23,42,0.7)] backdrop-blur transition hover:border-emerald-400/70 hover:shadow-[0_18px_55px_rgba(16,185,129,0.35)]"
              >
                <header className="mb-4 space-y-2">
                  <p className="text-[0.65rem] uppercase tracking-[0.2em] text-emerald-300/90">
                    {stone.tag}
                  </p>
                  <h3 className="text-lg font-semibold text-slate-50">{stone.name}</h3>
                </header>
                <p className="mb-4 text-sm leading-relaxed text-slate-300/90">
                  {stone.copy}
                </p>
                <footer className="mt-auto pt-3 text-xs text-slate-400/90">
                  {stone.note}
                </footer>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="provenance"
        className="border-t border-slate-800 bg-[radial-gradient(circle_at_top,_#1e293b,_#020617)]"
      >
        <div className="mx-auto max-w-6xl px-6 py-10 sm:py-14">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold tracking-tight text-slate-50 sm:text-2xl">
                A stricter standard than “fine jewelry”
              </h2>
              <p className="text-sm leading-relaxed text-slate-300/90">
                CLICo pieces are treated as micro-collections, not mass SKUs. Every item is tracked
                from stone selection through final polish with QR-linked documentation, making it
                trivial to prove authenticity and trace the full story later.
              </p>
            </div>
            <div className="grid gap-4 text-sm text-slate-300/90 sm:grid-cols-2">
              <div className="space-y-1">
                <p className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-500">
                  Documentation
                </p>
                <p>Serialized COAs, high-res imagery, and digital provenance for each piece.</p>
              </div>
              <div className="space-y-1">
                <p className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-500">
                  Future-proof
                </p>
                <p>
                  Built to plug into future CLICo apps, AR try-on, and GX-13 vault infrastructure.
                </p>
              </div>
            </div>
          </div>
          <p className="mt-8 text-[0.7rem] text-slate-500/80">
            This is a working v1 shell. As you lock stones, SKUs, and photography, we’ll wire each
            collection tile to real product detail pages and live inventory.
          </p>
        </div>
      </section>
    </main>
  );
}
