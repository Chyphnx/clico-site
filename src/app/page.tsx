const navLinks = [
  { label: "Platform", href: "#platform" },
  { label: "Telemetry", href: "#telemetry" },
  { label: "Flows", href: "#flows" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
  { label: "Dev & Social", href: "/dev" },
];

const stats = [
  { label: "Conversion delta", value: "+18.4%", detail: "avg lift at 45 days" },
  { label: "Markets launched", value: "32", detail: "localized playbooks" },
  { label: "Escalations", value: "<0.04%", detail: "with active guardrails" },
];

const modules = [
  {
    title: "Adaptive Checkout OS",
    copy: "Routes payments, risk, tax, and wallets by signal, not by country file or guesswork.",
    tag: "Adaptive",
  },
  {
    title: "Signal Lab",
    copy: "Unify product, ops, and fraud data into live scorecards with auto-alerts and versioned playbooks.",
    tag: "Observability",
  },
  {
    title: "Launch Studio",
    copy: "Spin up a new market or flow in days with signed changes, previews, and reversible deploys.",
    tag: "Speed",
  },
];

const flows = [
  {
    title: "Onboarding",
    detail: "ID, KYB, sanctions, and trust heuristics tuned to each market.",
    status: "Deployed",
  },
  {
    title: "Checkout",
    detail: "Adaptive routing, fraud levers, wallet expansion without code churn.",
    status: "Live",
  },
  {
    title: "Support",
    detail: "Guided ops, automated make-good logic, and SLA-aware escalations.",
    status: "In motion",
  },
];

const timeline = [
  {
    name: "Calibrate",
    detail: "Map drop-off, pull your stack with one CLI, baseline the next 90 days.",
  },
  {
    name: "Orchestrate",
    detail: "Design flows, version guardrails, simulate risk impact before you ship.",
  },
  {
    name: "Launch",
    detail: "Promote with signed playbooks, live monitors, and reversible switches.",
  },
];

const faqs = [
  {
    q: "Why Clico now?",
    a: "Commerce stacks are brittle. Clico makes your most visible flows adaptive without risking core code.",
  },
  {
    q: "How fast to first market?",
    a: "Teams typically calibrate and ship their first market in weeks with signed guardrails and alerting.",
  },
  {
    q: "Does it work globally?",
    a: "Yes. Localized playbooks, tax logic, fraud controls, and change history are built in.",
  },
  {
    q: "How do we engage?",
    a: "Book a session. We bring a tailored playbook and launch plan to the first call.",
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#05060b] text-slate-100">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-20%] top-[-10%] h-[26rem] w-[26rem] rounded-full bg-[radial-gradient(circle_at_center,_rgba(56,189,248,0.12),_transparent_55%)] blur-3xl" />
        <div className="absolute right-[-18%] top-[10%] h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle_at_center,_rgba(14,165,233,0.15),_transparent_60%)] blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(255,255,255,0.08),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(59,130,246,0.06),transparent_26%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6 py-8 sm:px-8 lg:px-10 lg:py-12">
        <header className="flex items-center justify-between rounded-full border border-white/10 bg-white/5 px-5 py-4 backdrop-blur">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-300 via-cyan-400 to-emerald-300 text-slate-950 text-lg font-semibold shadow-[0_10px_40px_rgba(56,189,248,0.35)]">
              CL
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-cyan-200">Clico Global</p>
              <p className="text-sm text-slate-200">Operating system for revenue-critical flows</p>
            </div>
          </div>
          <div className="hidden items-center gap-4 text-sm font-medium text-slate-200 sm:flex">
            {navLinks.map((item) => (
              <a key={item.label} className="transition hover:text-white" href={item.href}>
                {item.label}
              </a>
            ))}
            <a
              className="rounded-full border border-white/20 px-4 py-2 text-cyan-50 transition hover:-translate-y-[1px] hover:border-cyan-100 hover:text-white"
              href="#contact"
            >
              Talk with us
            </a>
          </div>
        </header>

        <main className="mt-14 space-y-24 sm:mt-18 lg:mt-20">
          <section className="grid items-center gap-12 lg:grid-cols-[1.05fr,0.95fr]">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-cyan-100">
                <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-300" />
                Live orchestration / Global grade
              </div>
              <div className="space-y-5">
                <h1 className="text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl">
                  Commerce without doubt. Everything adapts the moment the customer shows up.
                </h1>
                <p className="max-w-2xl text-lg text-slate-300">
                  Clico is the control plane for onboarding, checkout, and support. Precision-grade
                  flows with Apple-level polish and Tesla-level responsiveness—without rewriting
                  your stack.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  className="rounded-full bg-gradient-to-r from-white via-cyan-100 to-sky-300 px-6 py-3 text-slate-950 font-semibold shadow-lg shadow-cyan-500/25 transition hover:-translate-y-[1px]"
                  href="#contact"
                >
                  Book a studio session
                </a>
                <a
                  className="rounded-full border border-white/15 px-6 py-3 font-semibold text-slate-100 transition hover:-translate-y-[1px] hover:border-cyan-100"
                  href="#platform"
                >
                  See the platform
                </a>
              </div>
              <div className="grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur sm:grid-cols-3">
                {stats.map((item) => (
                  <div key={item.label} className="space-y-1">
                    <p className="text-xs uppercase tracking-[0.1em] text-slate-400">{item.label}</p>
                    <p className="text-3xl font-semibold text-white">{item.value}</p>
                    <p className="text-sm text-slate-300">{item.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-12 -top-8 h-28 w-28 rounded-full bg-gradient-to-br from-sky-400/50 via-cyan-400/50 to-emerald-300/50 blur-3xl" />
              <div className="absolute -right-6 -bottom-10 h-28 w-28 rounded-full bg-gradient-to-br from-cyan-400/40 to-emerald-400/40 blur-2xl" />
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#070a12]/80 p-6 shadow-[0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur">
                <div className="flex items-center justify-between">
                  <p className="text-xs uppercase tracking-[0.16em] text-slate-400">Live canvas</p>
                  <div className="flex gap-2">
                    <span className="h-3 w-3 rounded-full bg-emerald-400" />
                    <span className="h-3 w-3 rounded-full bg-amber-300" />
                    <span className="h-3 w-3 rounded-full bg-rose-400" />
                  </div>
                </div>
                <div className="mt-6 grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="flex items-center justify-between rounded-xl border border-white/5 bg-gradient-to-r from-sky-500/15 via-cyan-400/10 to-emerald-300/10 p-4">
                    <div>
                      <p className="text-sm text-slate-300">Flow: Checkout / North America</p>
                      <p className="text-xl font-semibold text-white">Adaptive routing engaged</p>
                    </div>
                    <div className="rounded-full bg-emerald-400/20 px-3 py-1 text-xs font-semibold text-emerald-100">
                      Healthy
                    </div>
                  </div>
                  <div className="grid gap-3 rounded-xl border border-white/5 bg-slate-900/60 p-4">
                    <p className="text-sm text-slate-300">Signal board</p>
                    <div className="grid grid-cols-3 gap-3 text-sm">
                      {[
                        { name: "Latency", value: "138 ms", accent: "from-cyan-400 to-sky-300" },
                        { name: "Approval", value: "98.7%", accent: "from-emerald-400 to-teal-300" },
                        { name: "Risk", value: "0.02%", accent: "from-amber-300 to-orange-300" },
                      ].map((item) => (
                        <div
                          key={item.name}
                          className="relative overflow-hidden rounded-lg border border-white/5 bg-[#0a0f18]/80 p-3"
                        >
                          <div
                            className={`absolute inset-x-2 top-0 h-px bg-gradient-to-r ${item.accent}`}
                          />
                          <p className="text-xs uppercase tracking-[0.14em] text-slate-400">
                            {item.name}
                          </p>
                          <p className="mt-2 text-lg font-semibold text-white">{item.value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-gradient-to-r from-white/10 to-cyan-500/10 p-4 text-sm text-cyan-50">
                    “We shipped a new market in eight days without rewriting payments or risk logic.”
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="platform" className="space-y-10">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">Platform</p>
                <h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">
                  An operating system that feels crafted, not cobbled together.
                </h2>
              </div>
              <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200">
                Built for executives, operators, and engineers
              </div>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {modules.map((module) => (
                <div
                  key={module.title}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#0a0f18]/80 p-6 shadow-lg transition hover:-translate-y-1"
                >
                  <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-40" />
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.14em] text-cyan-200">
                      {module.tag}
                    </span>
                    <span className="text-xs text-slate-300">Live</span>
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold text-white">{module.title}</h3>
                  <p className="mt-3 text-slate-300">{module.copy}</p>
                  <div className="mt-6 flex items-center justify-between text-sm text-cyan-100">
                    <span>See how it adapts →</span>
                    <span className="h-px w-12 bg-gradient-to-r from-cyan-200/0 via-cyan-200 to-cyan-200/0" />
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section
            id="telemetry"
            className="space-y-6 rounded-3xl border border-white/10 bg-gradient-to-br from-[#0a0f18] via-[#0c1320] to-[#0a0f18] p-8 shadow-xl"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">Telemetry</p>
                <h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">
                  Signal packs that forecast, not just report.
                </h2>
              </div>
              <div className="rounded-full bg-white/10 px-4 py-2 text-sm text-slate-100">
                Latency · Approvals · Risk · Ops workload
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-[1.2fr,0.8fr]">
              <div className="grid gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-slate-300">Live dashboards</p>
                  <div className="flex gap-2 text-xs font-semibold text-emerald-200">
                    <span className="rounded-full bg-emerald-500/20 px-2 py-1">Auto-alerts</span>
                    <span className="rounded-full bg-cyan-500/15 px-2 py-1">Exports</span>
                  </div>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    { title: "Checkout health", value: "98.7%", sub: "approval rate today" },
                    { title: "Ops backlog", value: "8 tickets", sub: "SLA under 12m" },
                    { title: "Fraud threshold", value: "0.02%", sub: "auto-tuned, stable" },
                    { title: "Time to patch", value: "6 min", sub: "avg past 24h" },
                  ].map((signal) => (
                    <div
                      key={signal.title}
                      className="rounded-xl border border-white/5 bg-[#0a0f18]/70 p-4"
                    >
                      <p className="text-xs uppercase tracking-[0.14em] text-slate-400">
                        {signal.title}
                      </p>
                      <p className="mt-2 text-2xl font-semibold text-white">{signal.value}</p>
                      <p className="text-sm text-slate-300">{signal.sub}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-4 rounded-2xl border border-white/10 bg-[#0b111d]/80 p-5">
                <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">Teams in the loop</p>
                <div className="grid gap-3">
                  {["Linea", "PeakNorth", "Fieldset", "Orion Commerce", "Caro"].map((logo) => (
                    <div
                      key={logo}
                      className="flex items-center justify-between rounded-xl border border-white/5 bg-white/5 px-4 py-3 text-sm text-slate-100"
                    >
                      <span>{logo}</span>
                      <span className="text-xs text-emerald-200">Staying online</span>
                    </div>
                  ))}
                </div>
                <div className="rounded-xl border border-emerald-400/30 bg-emerald-400/10 p-4 text-sm text-emerald-50">
                  “We replaced three internal tools with Clico and now ship new markets without
                  waking up risk or finance.”
                </div>
              </div>
            </div>
          </section>

          <section id="flows" className="space-y-6">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">Signature flows</p>
                <h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">
                  Precision experiences that feel inevitable.
                </h2>
              </div>
              <div className="hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-100 sm:block">
                Designed with product, ops, and risk at the same table
              </div>
            </div>
            <div className="grid gap-4 lg:grid-cols-3">
              {flows.map((flow) => (
                <div
                  key={flow.title}
                  className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0a0f18]/80 p-5 shadow-lg"
                >
                  <div className="absolute inset-x-4 top-0 h-[1px] bg-gradient-to-r from-cyan-300/0 via-cyan-200/70 to-cyan-300/0" />
                  <p className="text-xs uppercase tracking-[0.18em] text-slate-400">{flow.status}</p>
                  <p className="mt-3 text-xl font-semibold text-white">{flow.title}</p>
                  <p className="mt-2 text-slate-300">{flow.detail}</p>
                  <div className="mt-6 h-10 rounded-xl border border-white/5 bg-gradient-to-r from-white/5 via-cyan-300/10 to-sky-400/10" />
                </div>
              ))}
            </div>
          </section>

          <section id="process" className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">How we launch</p>
                <h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">
                  A path from audit to go-live with zero drama.
                </h2>
              </div>
              <div className="hidden rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-100 sm:block">
                Signed change history and reversible switches
              </div>
            </div>

            <div className="grid gap-4 lg:grid-cols-3">
              {timeline.map((step, index) => (
                <div
                  key={step.name}
                  className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0a0f18]/80 p-5 shadow-lg"
                >
                  <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-cyan-300/0 via-cyan-300/50 to-cyan-300/0" />
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.18em] text-cyan-200">
                    <span>{step.name}</span>
                    <span className="text-slate-400">0{index + 1}</span>
                  </div>
                  <p className="mt-3 text-lg font-semibold text-white">{step.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section
            id="contact"
            className="rounded-3xl border border-white/10 bg-gradient-to-r from-white/10 via-cyan-500/10 to-emerald-400/10 px-6 py-10 sm:px-10"
          >
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="space-y-3">
                <p className="text-xs uppercase tracking-[0.22em] text-slate-100">Ready when you are</p>
                <h3 className="text-3xl font-semibold text-white sm:text-4xl">
                  Let&apos;s design the next flow together.
                </h3>
                <p className="max-w-2xl text-slate-100">
                  Share the flow you want to fix first—onboarding, checkout, or support—and we will
                  bring a tailored playbook to the first call.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  className="rounded-full bg-white px-5 py-3 text-slate-950 font-semibold transition hover:-translate-y-[1px]"
                  href="mailto:hello@clico.dev"
                >
                  hello@clico.dev
                </a>
                <a
                  className="rounded-full border border-white/30 px-5 py-3 text-white transition hover:-translate-y-[1px] hover:border-cyan-200"
                  href="#platform"
                >
                  View platform
                </a>
              </div>
            </div>
          </section>

          <section id="faq" className="rounded-3xl border border-white/10 bg-[#0a0f18]/80 p-8 shadow-lg">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-cyan-200">FAQ</p>
                <h2 className="mt-2 text-3xl font-semibold text-white sm:text-4xl">
                  Answers, without the runaround.
                </h2>
              </div>
              <a
                className="rounded-full border border-white/20 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:border-cyan-200"
                href="mailto:hello@clico.dev"
              >
                Email us directly
              </a>
            </div>
            <div className="mt-6 grid gap-4 lg:grid-cols-2">
              {faqs.map((item) => (
                <div key={item.q} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="text-sm uppercase tracking-[0.12em] text-cyan-200">{item.q}</p>
                  <p className="mt-2 text-slate-200">{item.a}</p>
                </div>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
