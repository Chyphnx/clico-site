export default function PawsAndClawsPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 space-y-8">
      <header className="space-y-3">
        <p className="text-xs tracking-[0.35em] uppercase text-slate-400">
          CLICO · PAWS &amp; CLAWS
        </p>
        <h1 className="text-2xl md:text-3xl font-light text-slate-50">
          Paws &amp; Claws · Rescue Allocation Stack
        </h1>
        <p className="text-sm text-slate-300 max-w-2xl">
          A fixed slice of every Paws &amp; Claws flagged piece routes directly
          to animal rescue, shelter support, and frontline veterinary care.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-2 text-sm text-slate-200">
        <div className="space-y-3">
          <h2 className="text-xs tracking-[0.25em] uppercase text-slate-400">
            How it works
          </h2>
          <p>
            Selected pieces in the CLICO line carry a{" "}
            <span className="text-emerald-300 font-medium">Paws &amp; Claws</span>{" "}
            mark. A non‑negotiable percentage of net proceeds from those pieces
            is ring‑fenced and allocated to verified animal‑centric partners.
          </p>
          <ul className="list-disc list-inside text-xs space-y-1 text-slate-300">
            <li>Rescue shelters &amp; foster networks</li>
            <li>Emergency vet bills for at‑risk owners</li>
            <li>Food, medicine, and transport for rescues</li>
          </ul>
        </div>
        <div className="space-y-3">
          <h2 className="text-xs tracking-[0.25em] uppercase text-slate-400">
            Receipts, not vibes
          </h2>
          <p>
            Allocation summaries, receipts, and proof of impact are stored
            alongside the collection ledger. As the platform matures, owners
            will be able to see which pieces helped fund which rescues.
          </p>
          <p className="text-xs text-slate-400">
            Early phase: reporting is manual but verifiable. Later phases move
            to on‑chain / auditor‑ready transparency.
          </p>
        </div>
      </section>
    </div>
  );
}
