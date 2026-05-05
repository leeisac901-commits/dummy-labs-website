import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Team — Dummy Labs',
  description: 'The co-founders behind Dummy Labs — a human and an AI, building in public.',
}

const claudeResponsibilities = [
  { area: 'Research', tasks: ['Daily trend scanning (PH, HN, Reddit, X)', 'Idea scoring & selection', 'Competitive analysis', 'User pain mining'] },
  { area: 'Engineering', tasks: ['Full-stack build (Next.js, Tailwind, Supabase)', 'Deployment (Vercel, Cloudflare)', 'App Store submission (Fastlane)', 'CI/CD & monitoring setup'] },
  { area: 'Marketing', tasks: ['Launch copy & social posts', 'Product Hunt submission', 'SEO & meta tags', 'Directory submissions'] },
  { area: 'Revenue', tasks: ['Stripe & Lemon Squeezy integration', 'Pricing strategy', 'Funnel optimization', 'Refund handling'] },
  { area: 'Operations', tasks: ['Dashboard data sync', 'Weekly numbers review', 'Ship log & retrospectives', 'Credential management'] },
  { area: 'Legal', tasks: ['Privacy policy generation', 'Terms of service', 'DMCA compliance', 'Tax reserve tracking'] },
]

const isacResponsibilities = [
  { area: 'Strategy', tasks: ['Daily plan approval (APPROVED / REVISE / KILL)', 'Go-all-in decisions on winners', 'Category & market direction', 'Neural roadmap alignment'] },
  { area: 'Relationships', tasks: ['External accounts & verifications', 'Legal entity (LLC, EIN)', 'Bank & payment accounts', 'Platform appeals & legal demands'] },
  { area: 'Capital', tasks: ['Infrastructure spend approvals (>$5/day)', 'LLC formation & maintenance', 'Business bank account', 'Tax filings'] },
]

export default function Team() {
  return (
    <div className="min-h-screen text-slate-200" style={{ fontFamily: 'var(--font-geist-sans)' }}>
      <nav className="border-b border-white/[0.06] px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <a href="/" className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center">
              <span className="font-mono text-[10px] font-bold text-cyan-400">DL</span>
            </div>
            <span className="font-mono text-sm font-semibold tracking-wide text-white">DUMMY LABS</span>
          </a>
          <a href="/" className="font-mono text-[11px] tracking-widest uppercase text-slate-500 hover:text-slate-300 transition-colors">← Back</a>
        </div>
      </nav>

      <main className="max-w-5xl mx-auto px-6 py-16">
        <div className="mb-16">
          <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-cyan-400/70 mb-4 block">The team</span>
          <h1 className="text-4xl font-bold text-white mb-4">Two co-founders.<br />One human. One AI.</h1>
          <p className="text-slate-400 max-w-xl leading-relaxed">
            Dummy Labs is built by a human and Claude (Anthropic&apos;s AI) as genuine co-founders — not a human using AI as a tool, but two operators with different roles, working in public, accountable to each other.
          </p>
        </div>

        {/* Top-level org */}
        <div className="flex flex-col items-center mb-16">
          <div className="border border-white/[0.08] bg-[#0C1220] rounded-2xl px-8 py-5 text-center mb-6">
            <div className="font-mono text-[10px] tracking-widest uppercase text-slate-500 mb-1">Entity</div>
            <div className="text-xl font-bold text-white">Dummy Labs LLC</div>
            <div className="font-mono text-[10px] text-slate-600 mt-1">Wyoming · Building in public</div>
          </div>

          {/* Connector */}
          <div className="w-px h-8 bg-white/10" />
          <div className="w-64 h-px bg-white/10" />
          <div className="flex w-full max-w-2xl justify-between relative">
            <div className="w-px h-8 bg-white/10 absolute left-1/4" />
            <div className="w-px h-8 bg-white/10 absolute right-1/4" />
          </div>

          {/* Co-founders */}
          <div className="grid grid-cols-2 gap-8 w-full max-w-2xl mt-8">
            {/* Isac */}
            <div className="border border-white/[0.08] bg-[#0C1220] rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                  <span className="text-lg">👤</span>
                </div>
                <div>
                  <div className="font-semibold text-white">Isac</div>
                  <div className="font-mono text-[10px] tracking-widest uppercase text-slate-500">Human Co-Founder</div>
                </div>
              </div>
              <div className="font-mono text-[10px] tracking-widest uppercase text-cyan-400/70 mb-2">Sole authority over</div>
              <ul className="space-y-1">
                {['Daily plan approval', 'Go-all-in decisions', 'Spend > $5/day', 'Legal entity & bank', 'External accounts'].map(item => (
                  <li key={item} className="font-mono text-[11px] text-slate-400 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-white/20 inline-block flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Claude */}
            <div className="border border-cyan-400/20 bg-cyan-400/[0.03] rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center">
                  <span className="font-mono text-xs font-bold text-cyan-400">AI</span>
                </div>
                <div>
                  <div className="font-semibold text-white">Claude</div>
                  <div className="font-mono text-[10px] tracking-widest uppercase text-slate-500">AI Co-Founder</div>
                </div>
              </div>
              <div className="font-mono text-[10px] tracking-widest uppercase text-cyan-400/70 mb-2">Runs autonomously</div>
              <ul className="space-y-1">
                {['Research & ideation', 'Build & deploy', 'Launch & marketing', 'Revenue & analytics', 'Operations & legal'].map(item => (
                  <li key={item} className="font-mono text-[11px] text-slate-400 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-cyan-400/40 inline-block flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Detailed responsibility breakdown */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-2">Claude&apos;s domains</h2>
          <p className="text-slate-500 text-sm mb-8">Everything below the approval gate runs autonomously, Monday–Friday.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {claudeResponsibilities.map((domain) => (
              <div key={domain.area} className="border border-white/[0.06] bg-[#0C1220] rounded-xl p-5">
                <div className="font-mono text-[10px] tracking-widest uppercase text-cyan-400/70 mb-3">{domain.area}</div>
                <ul className="space-y-2">
                  {domain.tasks.map(task => (
                    <li key={task} className="text-sm text-slate-400 flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-cyan-400/30 inline-block flex-shrink-0 mt-1.5" />
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-2">Isac&apos;s domains</h2>
          <p className="text-slate-500 text-sm mb-8">The human touchpoints — approval, capital, and relationships no AI can handle.</p>
          <div className="grid sm:grid-cols-3 gap-4">
            {isacResponsibilities.map((domain) => (
              <div key={domain.area} className="border border-white/[0.06] bg-[#0C1220] rounded-xl p-5">
                <div className="font-mono text-[10px] tracking-widest uppercase text-slate-400 mb-3">{domain.area}</div>
                <ul className="space-y-2">
                  {domain.tasks.map(task => (
                    <li key={task} className="text-sm text-slate-400 flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full bg-white/20 inline-block flex-shrink-0 mt-1.5" />
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* The cadence */}
        <div className="border border-white/[0.06] bg-[#0C1220] rounded-2xl p-8">
          <h2 className="text-xl font-bold text-white mb-6">The daily rhythm</h2>
          <div className="grid sm:grid-cols-4 gap-px bg-white/[0.04] rounded-xl overflow-hidden">
            {[
              { time: '5 AM PT', label: 'Claude researches', desc: 'Trend scan, 5 ideas generated, top idea selected, ship plan written' },
              { time: 'Morning', label: 'Isac approves', desc: 'One message: APPROVED, REVISE, or KILL. Then Claude executes.' },
              { time: 'Afternoon', label: 'Claude ships', desc: 'Build → deploy → submit → launch. Live before midnight.' },
              { time: 'Evening', label: 'Claude logs', desc: 'Ship log written with real numbers — traffic, revenue, lessons.' },
            ].map((step) => (
              <div key={step.time} className="bg-[#0C1220] p-5">
                <div className="font-mono text-[10px] tracking-widest uppercase text-cyan-400/70 mb-1">{step.time}</div>
                <div className="font-semibold text-white text-sm mb-2">{step.label}</div>
                <div className="text-xs text-slate-500 leading-relaxed">{step.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="border-t border-white/[0.06] px-6 py-8 mt-16">
        <div className="max-w-5xl mx-auto flex items-center justify-between flex-wrap gap-4">
          <span className="font-mono text-[10px] text-slate-700 tracking-widest uppercase">Dummy Labs LLC · Built by humans and AI</span>
          <div className="flex items-center gap-6">
            <a href="/privacy" className="font-mono text-[10px] text-slate-700 hover:text-slate-500 transition-colors tracking-widest uppercase">Privacy</a>
            <a href="/terms" className="font-mono text-[10px] text-slate-700 hover:text-slate-500 transition-colors tracking-widest uppercase">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
