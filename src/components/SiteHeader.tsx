"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const nav = [
  { href: "/", label: "Home" },
  { href: "/gems", label: "Extraordinary Gems" },
  { href: "/gems/paws-and-claws", label: "Paws & Claws" },
  { href: "/pairlink", label: "Pairlink™" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();
  return (
    <header className="border-b border-slate-800/80 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-sky-400 via-indigo-500 to-emerald-400 shadow-lg shadow-sky-500/40" />
          <div className="leading-tight">
            <div className="text-sm tracking-[0.35em] uppercase text-slate-400">
              CLICO
            </div>
            <div className="text-xs text-slate-500">
              Extraordinary Gems Collection
            </div>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-xs font-medium tracking-wide uppercase text-slate-400">
          {nav.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname?.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`border-b pb-1 transition-all ${
                  active
                    ? "border-sky-400 text-sky-100"
                    : "border-transparent hover:border-sky-500/60 hover:text-slate-100"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
