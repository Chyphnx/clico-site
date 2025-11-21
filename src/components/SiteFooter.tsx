export function SiteFooter() {
  return (
    <footer className="border-t border-slate-900/80 bg-black/80 mt-16">
      <div className="mx-auto max-w-6xl px-4 py-8 text-xs text-slate-500 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
        <div>
          © {new Date().getFullYear()} CLICo · Extraordinary Gems · All rights reserved.
        </div>
        <div className="flex gap-4">
          <span className="text-slate-600">Ethical · Traceable · Finite</span>
        </div>
      </div>
    </footer>
  );
}
