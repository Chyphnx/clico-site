export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12 space-y-6">
      <header className="space-y-3">
        <p className="text-xs tracking-[0.35em] uppercase text-slate-400">
          CLICO · CONTACT
        </p>
        <h1 className="text-2xl md:text-3xl font-light text-slate-50">
          Quiet, direct, and to the point.
        </h1>
      </header>
      <p className="text-sm text-slate-300">
        Initial contact will route through a low‑volume, manually reviewed
        inbox. Include how you operate, what you&apos;re interested in, and
        whether you&apos;re inquiring for yourself, a client, or a fund.
      </p>
      <p className="text-sm text-slate-200">
        Working email: <span className="font-mono text-sky-300">gems@clico.global</span>
      </p>
    </div>
  );
}
