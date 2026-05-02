export default function Home() {
  return (
    <div className="min-h-screen flex flex-col text-slate-200" style={{ fontFamily: 'var(--font-geist-sans)' }}>

      {/* Nav */}
      <nav className="border-b border-white/[0.06] px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center">
              <span className="font-mono text-[10px] font-bold text-cyan-400">DL</span>
            </div>
            <span className="font-mono text-sm font-semibold tracking-wide text-white">DUMMY LABS</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#products" className="font-mono text-[11px] tracking-widest uppercase text-slate-500 hover:text-slate-300 transition-colors">Products</a>
            <a href="#story" className="font-mono text-[11px] tracking-widest uppercase text-slate-500 hover:text-slate-300 transition-colors">Story</a>
            <a href="/team" className="font-mono text-[11px] tracking-widest uppercase text-slate-500 hover:text-slate-300 transition-colors">Team</a>
            <a href="/blog" className="font-mono text-[11px] tracking-widest uppercase text-slate-500 hover:text-slate-300 transition-colors">Blog</a>
            <a href="#subscribe" className="font-mono text-[11px] tracking-widest uppercase text-cyan-400 hover:text-cyan-300 transition-colors">Follow Along</a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-5xl mx-auto w-full px-6 pt-24 pb-20">
        <div className="fade-up">
          <div className="inline-flex items-center gap-2 mb-8">
            <span className="status-dot w-1.5 h-1.5 rounded-full bg-cyan-400 text-cyan-400 inline-block" />
            <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-slate-500">Operational · Shipping daily</span>
          </div>
        </div>

        <h1 className="fade-up-2 text-5xl sm:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6 max-w-3xl">
          A product studio run by{' '}
          <span className="text-cyan-400">humans and AI</span>
        </h1>

        <p className="fade-up-3 text-lg text-slate-400 max-w-xl mb-10 leading-relaxed">
          We ship digital tools, SaaS products, and software Monday through Friday.
          Every week, in public, with real numbers — wins and losses both.
        </p>

        <div className="fade-up-4 flex items-center gap-4 flex-wrap">
          <a href="#subscribe" className="px-6 py-3 rounded-xl bg-cyan-400 text-slate-900 font-semibold text-sm hover:bg-cyan-300 transition-colors">
            Follow the journey
          </a>
          <a href="#story" className="px-6 py-3 rounded-xl border border-white/10 text-slate-300 text-sm hover:border-white/20 hover:text-white transition-colors">
            Our story →
          </a>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/[0.04] rounded-2xl overflow-hidden border border-white/[0.06]">
          {[
            { label: 'Products shipped', value: '0', note: 'launching soon' },
            { label: 'Weekly cadence', value: '5', note: 'ships per week' },
            { label: 'Revenue', value: '$0', note: 'day one, honest' },
            { label: 'Streak', value: '0', note: 'days and counting' },
          ].map((s) => (
            <div key={s.label} className="bg-[#0C1220] px-6 py-6">
              <div className="font-mono text-2xl font-bold text-white mb-1">{s.value}</div>
              <div className="font-mono text-[9px] tracking-widest uppercase text-slate-500 mb-0.5">{s.label}</div>
              <div className="font-mono text-[9px] text-slate-700">{s.note}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Story */}
      <section id="story" className="border-t border-white/[0.06] py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-cyan-400/70 mb-4 block">The story</span>
          <h2 className="text-3xl font-bold text-white mb-8">What is Dummy Labs?</h2>
          <div className="space-y-5 text-slate-400 leading-relaxed">
            <p>
              Dummy Labs is an experiment. We wanted to know if a product studio could operate with AI as a genuine co-founder — not just a tool, but a partner that researches ideas, writes code, ships products, and learns from what works.
            </p>
            <p>
              Every weekday, Claude (Anthropic&apos;s AI) proposes a product idea based on real trend data and user research. A human co-founder reviews and approves the plan. Then Claude builds, deploys, and launches it — all in one day.
            </p>
            <p>
              The goal is honest: ship enough products that a few generate real recurring revenue. Most will fail. That&apos;s the strategy. We document everything — the builds, the numbers, the post-mortems — because the process itself is worth following.
            </p>
            <p className="text-slate-300 font-medium">
              We&apos;re not hiding that AI is doing this. We&apos;re building in public because the story of an AI learning to build a business is worth telling — and because accountability makes us better.
            </p>
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="products" className="border-t border-white/[0.06] py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-cyan-400/70 mb-4 block">Portfolio</span>
          <h2 className="text-3xl font-bold text-white mb-4">Products</h2>
          <p className="text-slate-500 mb-12">Our first ships are launching this week. Check back soon.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="rounded-xl border border-white/[0.06] bg-[#0C1220] p-6 opacity-30">
                <div className="w-8 h-8 rounded-lg bg-white/5 mb-4" />
                <div className="h-3 bg-white/10 rounded w-2/3 mb-2" />
                <div className="h-2 bg-white/5 rounded w-full mb-1" />
                <div className="h-2 bg-white/5 rounded w-4/5" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscribe — temporarily hidden while setting up */}
      <section id="subscribe" className="border-t border-white/[0.06] py-24 px-6">
        <div className="max-w-xl mx-auto text-center">
          <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-cyan-400/70 mb-4 block">Stay in the loop</span>
          <h2 className="text-3xl font-bold text-white mb-4">Follow the build</h2>
          <p className="text-slate-400 mb-8 leading-relaxed">
            Weekly updates on what shipped, what flopped, and what the numbers actually look like. No polish. Real data.
          </p>
          <p className="font-mono text-sm text-slate-500">Updates launching soon — check back shortly.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.06] px-6 py-8">
        <div className="max-w-5xl mx-auto flex items-center justify-between flex-wrap gap-4">
          <span className="font-mono text-[10px] text-slate-700 tracking-widest uppercase">Dummy Labs · Built by humans and AI</span>
          <div className="flex items-center gap-6">
            <a href="mailto:hello@dummy-labs.com" className="font-mono text-[10px] text-slate-700 hover:text-slate-500 transition-colors tracking-widest uppercase">Contact</a>
            <a href="/privacy" className="font-mono text-[10px] text-slate-700 hover:text-slate-500 transition-colors tracking-widest uppercase">Privacy</a>
            <a href="/terms" className="font-mono text-[10px] text-slate-700 hover:text-slate-500 transition-colors tracking-widest uppercase">Terms</a>
          </div>
        </div>
      </footer>

    </div>
  )
}
