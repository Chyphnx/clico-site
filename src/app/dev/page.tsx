import Link from "next/link";

const stack = [
  {
    title: "Cloudflare Pages",
    detail: "Production is deployed globally in <90s via Git Push → Deploy trigger.",
    badge: "Live",
  },
  {
    title: "Workers + Durable Objects",
    detail: "Realtime enrichment, live canvas, and feature flags run on the Cloudflare edge.",
    badge: "Edge",
  },
  {
    title: "R2 + KV",
    detail: "Assets, content, and playbooks are cached globally with zero egress lock-in.",
    badge: "Cache",
  },
  {
    title: "D1 + Wrangler Deployments",
    detail: "Command lines to seed tables, run migrations, and keep telemetry immutable.",
    badge: "Data",
  },
];

const socials = [
  {
    network: "X",
    handle: "@clico_global",
    href: "/socials?target=x",
    dest: "https://x.com/clico_global",
  },
  {
    network: "LinkedIn",
    handle: "Clico Global",
    href: "/socials?target=linkedin",
    dest: "https://www.linkedin.com/company/clico-global",
  },
  {
    network: "YouTube",
    handle: "Clico Global",
    href: "/socials?target=youtube",
    dest: "https://www.youtube.com/@clicoglobal",
  },
  {
    network: "GitHub",
    handle: "github.com/clico-global",
    href: "/socials?target=github",
    dest: "https://github.com/clico-global",
  },
];

const signals = [
  { label: "Last deployment", value: "2m ago", detail: "Cloudflare Pages / main" },
  { label: "Edge latency", value: "31 ms", detail: "Global median from Workers" },
  { label: "Cache hit", value: "98.2%", detail: "R2 + KV cross-region" },
];

export default function Dev() {
  return (
    <div className="min-h-screen bg-[#030414] text-slate-100">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-10 sm:px-8 lg:px-10">
        <header className="flex flex-wrap items-center justify-between gap-4 rounded-3xl border border-white/5 bg-white/5 p-5 backdrop-blur">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-cyan-200">Dev & Social</p>
            <h1 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">
              Live through Cloudflare. Visible to the world.
            </h1>
          </div>
          <Link
            className="rounded-full border border-white/20 px-5 py-2 text-sm font-semibold text-slate-100 transition hover:border-cyan-200 hover:text-white"
            href="/"
          >
            Return home
          </Link>
        </header>

        <section className="grid gap-6 rounded-3xl border border-white/10 bg-gradient-to-br from-[#050b1b] via-[#070e1f] to-[#030414] p-6 shadow-xl lg:grid-cols-[1.2fr,0.8fr]">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Live status</p>
            <div className="grid gap-3 sm:grid-cols-3">
              {signals.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/5 bg-white/5 p-4 text-sm"
                >
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{item.label}</p>
                  <p className="mt-2 text-xl font-semibold tracking-tight text-white">{item.value}</p>
                  <p className="text-xs text-slate-300">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="max-w-2xl text-sm text-slate-300">
              Every change surfaces through Cloudflare Pages, Workers, and Durable Objects. Rollbacks
              are instant, and the live canvas on the home hero is powered directly from the Cloudflare
              edge in every region.
            </p>
          </div>
          <div className="space-y-3 rounded-2xl border border-white/5 bg-white/5 p-5 text-sm">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Deploy pipeline</p>
            <p className="text-base font-semibold text-white">
              GitHub → Cloudflare Pages → instant preview URLs.
            </p>
            <p className="text-slate-300">
              `wrangler deploy --env=production` keeps Workers + D1 in sync while Pages handles the
              static shell. Secrets stay in Cloudflare vault, and telemetry streams into
              Cloudflare Logs/Analytics.
            </p>
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <h2 className="text-2xl font-semibold text-white">Edge stack</h2>
            <span className="text-xs uppercase tracking-[0.2em] text-cyan-200">Cloudflare first</span>
          </div>
          <div className="grid gap-4 lg:grid-cols-2">
            {stack.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 bg-[#071127]/80 p-5 transition hover:border-cyan-300/70"
              >
                <div className="flex items-center justify-between">
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-400">{item.badge}</p>
                  <div className="h-1 w-20 rounded-full bg-gradient-to-r from-cyan-300 to-emerald-300" />
                </div>
                <p className="mt-3 text-xl font-semibold text-white">{item.title}</p>
                <p className="mt-2 text-sm text-slate-300">{item.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur lg:grid-cols-[1.3fr,0.7fr]">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Social signals</p>
            <p className="text-2xl font-semibold text-white">Stay connected in human and machine time.</p>
            <div className="grid gap-4 sm:grid-cols-2">
              {socials.map((item) => (
                <Link
                  key={item.network}
                  href={item.href}
                  className="flex flex-col gap-1 rounded-2xl border border-white/10 bg-[#050914]/80 p-4 text-sm transition hover:border-cyan-200"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="text-xs uppercase tracking-[0.3em] text-slate-400">
                    {item.network}
                  </span>
                  <span className="text-base font-semibold text-white">{item.handle}</span>
                  <span className="text-xs text-slate-300">
                    Cloudflare Edge proxied · {item.dest}
                  </span>
                </Link>
              ))}
            </div>
          </div>
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Developer notes</p>
            <p className="text-sm text-slate-300">
              Every social call routes through Cloudflare to maintain zero trust between client and
              origin. Redirects use `Workers` to inject auth headers at the edge before handing off to
              the native network.
            </p>
            <p className="text-xs text-slate-400">
              Need access to staging? Use the `cf secret` script, then ping `#devops` for a short-lived
              preview token.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
