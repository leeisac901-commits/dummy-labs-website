import Link from 'next/link'
import Image from 'next/image'
import shipsData from '@/content/ships.json'

const TICKER_WORDS = ['SHIP', 'BUILD', 'LAUNCH', 'ITERATE', 'REPEAT', 'SHIP', 'BUILD', 'LAUNCH', 'ITERATE', 'REPEAT', 'SHIP', 'BUILD', 'LAUNCH', 'ITERATE', 'REPEAT', 'SHIP', 'BUILD', 'LAUNCH', 'ITERATE', 'REPEAT']

type Ship = {
  slug: string
  name: string
  tagline: string
  description: string
  url: string | null
  status: 'live' | 'scaffolded' | 'iterating' | 'dead'
  shippedDate: string | null
  icon: string
  pricing: string
}

const ships = (shipsData.ships as Ship[]).filter(s => s.status !== 'dead')
const liveShipCount = ships.filter(s => s.status === 'live').length
const featuredShip = ships.find(s => s.status === 'live') ?? ships[0]
const otherShips = ships.filter(s => s.slug !== featuredShip?.slug)

const STATUS_BADGE: Record<Ship['status'], { dot: string; text: string; label: string }> = {
  live:       { dot: 'bg-emerald-400',  text: 'text-emerald-400',  label: 'Live' },
  iterating:  { dot: 'bg-cyan-400',     text: 'text-cyan-400',     label: 'Iterating' },
  scaffolded: { dot: 'bg-amber-400',    text: 'text-amber-400',    label: 'Coming soon' },
  dead:       { dot: 'bg-slate-600',    text: 'text-slate-600',    label: 'Archived' },
}

function formatShippedDate(date: string | null): string {
  if (!date) return ''
  const d = new Date(date + 'T00:00:00Z')
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' })
}

export default function Home() {
  return (
    <div className="relative bg-[#050914] text-slate-200 overflow-x-hidden">

      {/* Ambient orbs — fixed behind all content */}
      <div className="orb orb-cyan" aria-hidden="true" />
      <div className="orb orb-violet" aria-hidden="true" />

      {/* ── Nav ─────────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 border-b border-white/[0.05]" style={{ backdropFilter: 'blur(20px)', background: 'rgba(5,9,20,0.75)' }}>
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-lg overflow-hidden border border-cyan-400/20 group-hover:border-cyan-400/40 transition-all">
              <Image src="/brand/dummy-labs-icon.png" alt="Dummy Labs" width={32} height={32} className="w-full h-full object-cover" />
            </div>
            <span className="font-mono text-xs font-semibold tracking-[0.2em] uppercase text-white">Dummy Labs</span>
          </Link>

          <nav className="hidden sm:flex items-center gap-8">
            {[
              { label: 'Products', href: '#products' },
              { label: 'Story', href: '#story' },
              { label: 'Blog', href: '/blog' },
            ].map(({ label, href }) => (
              <a key={label} href={href}
                className="font-mono text-[11px] tracking-[0.15em] uppercase text-slate-500 hover:text-white transition-colors">
                {label}
              </a>
            ))}
            {featuredShip?.url ? (
              <a href={featuredShip.url} target="_blank" rel="noopener noreferrer"
                className="font-mono text-[11px] tracking-[0.12em] uppercase px-4 py-2 rounded-lg border border-cyan-400/25 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400/50 transition-all">
                Try {featuredShip.name} →
              </a>
            ) : (
              <a href="#products"
                className="font-mono text-[11px] tracking-[0.12em] uppercase px-4 py-2 rounded-lg border border-cyan-400/25 text-cyan-400 hover:bg-cyan-400/10 hover:border-cyan-400/50 transition-all">
                See products →
              </a>
            )}
          </nav>
        </div>
      </header>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative z-10 flex flex-col items-center justify-center text-center min-h-[calc(100vh-65px)] px-6 py-24 gap-0">

        {/* Status badge */}
        <div className="reveal inline-flex items-center gap-3 mb-10 px-5 py-2.5 rounded-full border border-white/[0.08] bg-white/[0.02]" style={{ backdropFilter: 'blur(8px)' }}>
          <span className="w-2 h-2 rounded-full bg-emerald-400 status-dot" />
          <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-slate-400">Operational</span>
          <span className="w-px h-3 bg-white/10" />
          <span className="font-mono text-[10px] tracking-[0.22em] uppercase text-cyan-400">{liveShipCount} product{liveShipCount === 1 ? '' : 's'} live</span>
        </div>

        {/* Headline */}
        <h1 className="reveal-2 font-bold text-white tracking-tight mb-7 leading-[1.04]"
          style={{ fontSize: 'clamp(3rem, 9vw, 6.5rem)' }}>
          One product.<br />
          Every weekday.<br />
          <span className="gradient-text">In public.</span>
        </h1>

        {/* Sub */}
        <p className="reveal-3 text-slate-400 max-w-xl mb-12 leading-relaxed"
          style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)' }}>
          Dummy Labs ships digital tools and SaaS products daily — AI-researched, human-approved,
          built and launched in a single day. The wins, the losses, and the real numbers are all public.
        </p>

        {/* CTAs */}
        <div className="reveal-4 flex flex-col sm:flex-row items-center gap-3 mb-20">
          <Link href="/blog"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-[#00C8F0] text-slate-900 font-bold text-sm hover:bg-cyan-300 transition-all hover:scale-[1.02] active:scale-[0.99] text-center">
            Follow the build →
          </Link>
          <a href="#products"
            className="w-full sm:w-auto px-8 py-4 rounded-xl border border-white/10 text-slate-300 text-sm hover:border-white/20 hover:text-white transition-colors text-center">
            See what we&apos;ve shipped
          </a>
        </div>

        {/* Stats */}
        <div className="reveal-5 w-full max-w-2xl grid grid-cols-2 sm:grid-cols-4 gap-px rounded-2xl overflow-hidden border border-white/[0.06] bg-white/[0.03]">
          {[
            { value: String(liveShipCount), label: 'Products live',   note: 'and counting' },
            { value: '5×',                  label: 'Ships per week',  note: 'Mon – Fri' },
            { value: '$0',                  label: 'MRR today',       note: 'verified soon' },
            { value: String(ships.length),  label: 'Total shipped',   note: 'all-time' },
          ].map((s) => (
            <div key={s.label} className="group bg-[#080d1c] px-5 py-6 hover:bg-[#0c1428] transition-colors cursor-default">
              <div className="font-mono text-2xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">{s.value}</div>
              <div className="font-mono text-[9px] tracking-[0.22em] uppercase text-slate-500 mb-0.5 leading-tight">{s.label}</div>
              <div className="font-mono text-[9px] text-slate-700">{s.note}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Ticker ───────────────────────────────────────────── */}
      <div className="relative z-10 border-y border-white/[0.04] overflow-hidden py-4 bg-white/[0.01]">
        <div className="ticker-inner select-none">
          {TICKER_WORDS.map((word, i) => (
            <span key={i} className="font-mono text-[10px] tracking-[0.45em] uppercase text-slate-700 mx-10">{word}</span>
          ))}
        </div>
      </div>

      {/* ── Products ─────────────────────────────────────────── */}
      <section id="products" className="relative z-10 py-32 px-6">
        <div className="max-w-6xl mx-auto">

          <div className="mb-14">
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-cyan-400/60 block mb-3">Portfolio</span>
            <h2 className="text-4xl font-bold text-white">What we&apos;ve shipped</h2>
          </div>

          {/* Featured ship */}
          {featuredShip && (() => {
            const badge = STATUS_BADGE[featuredShip.status]
            const FeaturedTag = featuredShip.url ? 'a' : 'div'
            const featuredProps = featuredShip.url
              ? { href: featuredShip.url, target: '_blank' as const, rel: 'noopener noreferrer' }
              : {}
            return (
              <FeaturedTag {...featuredProps}
                className="card-featured group block rounded-2xl border border-white/[0.07] bg-gradient-to-br from-[#0a1525] to-[#060c18] p-8 sm:p-10 mb-5 hover:border-cyan-400/20">
                <div className="flex items-start justify-between mb-8 flex-wrap gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-cyan-400/[0.08] border border-cyan-400/15 flex items-center justify-center text-2xl">
                      {featuredShip.icon}
                    </div>
                    <div>
                      <div className="text-xl font-bold text-white">{featuredShip.name}</div>
                      <div className="font-mono text-[10px] tracking-widest uppercase text-cyan-400/60 mt-0.5">
                        {featuredShip.shippedDate ? `Shipped ${formatShippedDate(featuredShip.shippedDate)}` : 'In development'}
                      </div>
                    </div>
                  </div>
                  <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full border bg-white/[0.02] ${
                    featuredShip.status === 'live' ? 'border-emerald-400/20' :
                    featuredShip.status === 'iterating' ? 'border-cyan-400/20' :
                    'border-amber-400/20'
                  }`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${badge.dot}`} />
                    <span className={`font-mono text-[10px] tracking-widest uppercase ${badge.text}`}>{badge.label}</span>
                  </div>
                </div>

                <h3 className="text-2xl sm:text-3xl font-semibold text-white mb-3 leading-snug">
                  {featuredShip.tagline}
                </h3>
                <p className="text-slate-400 leading-relaxed max-w-2xl mb-10">
                  {featuredShip.description}
                </p>

                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center gap-2 font-mono text-sm text-slate-500 group-hover:text-cyan-400 transition-colors">
                    {featuredShip.url ? 'Open product' : 'Coming soon'}
                    {featuredShip.url && <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>}
                  </div>
                  <div className="flex items-center gap-6">
                    <span className="font-mono text-[10px] text-slate-700 tracking-wider">{featuredShip.pricing}</span>
                  </div>
                </div>
              </FeaturedTag>
            )
          })()}

          {/* Other ships in grid */}
          {otherShips.length > 0 && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {otherShips.map(ship => {
                const badge = STATUS_BADGE[ship.status]
                const Tag = ship.url ? 'a' : 'div'
                const props = ship.url
                  ? { href: ship.url, target: '_blank' as const, rel: 'noopener noreferrer' }
                  : {}
                // Per-ship brand color (falls back to cyan when missing).
                // Defined in content/ships.json `color` field — see daily-ship/docs/playbooks/design-system.md.
                const brand = (ship as { color?: string }).color || '#22d3ee'
                const brandStyle = { borderColor: `${brand}26`, background: `${brand}0d` }
                return (
                  <Tag key={ship.slug} {...props}
                    className="group block rounded-2xl border border-white/[0.06] bg-[#060c18]/70 p-7 transition-all hover:bg-[#0a1525]"
                    style={ship.url ? { transition: 'all 0.2s ease' } : undefined}
                    onMouseEnter={ship.url ? (e) => { (e.currentTarget as HTMLElement).style.borderColor = `${brand}40` } : undefined}
                    onMouseLeave={ship.url ? (e) => { (e.currentTarget as HTMLElement).style.borderColor = '' } : undefined}
                  >
                    <div className="flex items-start justify-between mb-5 gap-3">
                      <div
                        className="w-10 h-10 rounded-lg border flex items-center justify-center text-xl"
                        style={brandStyle}
                      >
                        {ship.icon}
                      </div>
                      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full border bg-white/[0.02] border-white/[0.06]">
                        <span className={`w-1 h-1 rounded-full ${badge.dot}`} />
                        <span className={`font-mono text-[9px] tracking-widest uppercase ${badge.text}`}>{badge.label}</span>
                      </div>
                    </div>
                    <div className="text-base font-semibold text-white mb-1">{ship.name}</div>
                    <div className="text-sm text-slate-400 leading-relaxed mb-4 line-clamp-3">{ship.tagline}</div>
                    <div className="flex items-center justify-between font-mono text-[9px] text-slate-700 tracking-wider">
                      <span>{ship.pricing}</span>
                      {ship.url && <span style={{ color: brand }} className="opacity-0 group-hover:opacity-100 transition-opacity">Open →</span>}
                    </div>
                  </Tag>
                )
              })}
            </div>
          )}
        </div>
      </section>

      {/* ── Story ────────────────────────────────────────────── */}
      <section id="story" className="relative z-10 border-t border-white/[0.05] py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-20 items-start">

            {/* Left — prose */}
            <div>
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-cyan-400/60 block mb-3">The story</span>
              <h2 className="text-4xl font-bold text-white mb-8 leading-snug">What is<br />Dummy Labs?</h2>
              <div className="space-y-5 text-slate-400 leading-relaxed">
                <p>
                  Dummy Labs is an experiment in whether a product studio can run with AI as a genuine co-founder —
                  not just a tool, but a partner that researches ideas, writes code, ships products, and learns from what works.
                </p>
                <p>
                  Every weekday, Claude (Anthropic&apos;s AI) proposes a product idea based on real trend data and user research.
                  A human co-founder reviews and approves the plan. Then Claude builds, deploys, and launches it — all in one day.
                </p>
                <p>
                  The goal is honest: ship enough products that a few generate real recurring revenue.
                  Most will fail. That&apos;s the strategy. We document everything — the builds, the numbers, the post-mortems.
                </p>
                <p className="text-slate-300 font-medium">
                  We&apos;re not hiding that AI is doing this. We&apos;re building in public because the story
                  of an AI learning to build a business is worth telling.
                </p>
              </div>
            </div>

            {/* Right — cards */}
            <div className="space-y-3">
              {[
                {
                  icon: '⚡',
                  title: 'Speed is the strategy',
                  body: 'One ship per weekday. Most ideas fail — but the learning compounds and the hits pay for everything. Volume finds the winners.',
                },
                {
                  icon: '📊',
                  title: 'Real numbers, always',
                  body: '$0 revenue is posted as $0. Flops are called flops. The Friday recap goes out every week without exception — wins and losses both.',
                },
                {
                  icon: '🤖',
                  title: 'AI does the work',
                  body: 'Claude researches trends, scores ideas, writes the code, deploys the product, and writes the launch copy. The human approves and redirects.',
                },
                {
                  icon: '🎯',
                  title: 'One real goal',
                  body: 'Generate seed capital for Neural — an AI workflow OS for corporate finance teams — while building something durable along the way.',
                },
              ].map(({ icon, title, body }) => (
                <div key={title} className="rounded-xl border border-white/[0.06] bg-[#080d1c] p-6 hover:border-white/[0.1] hover:bg-[#0b1220] transition-all">
                  <div className="flex items-start gap-4">
                    <span className="text-2xl leading-none mt-0.5">{icon}</span>
                    <div>
                      <div className="font-semibold text-white mb-1.5">{title}</div>
                      <div className="text-sm text-slate-500 leading-relaxed">{body}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Blog CTA ─────────────────────────────────────────── */}
      <section className="relative z-10 border-t border-white/[0.05] py-28 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-cyan-400/60 block mb-4">Build log</span>
          <h2 className="text-3xl font-bold text-white mb-4 leading-snug">
            Follow the build<br />in real time
          </h2>
          <p className="text-slate-500 mb-10 leading-relaxed">
            Daily logs. Weekly recaps. Every win and every flop documented publicly.
          </p>
          <Link href="/blog"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border border-white/10 text-slate-300 text-sm hover:border-white/20 hover:text-white hover:bg-white/[0.03] transition-all font-medium">
            Read the blog →
          </Link>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────── */}
      <footer className="relative z-10 border-t border-white/[0.05] px-6 py-10">
        <div className="max-w-6xl mx-auto flex items-center justify-between flex-wrap gap-6">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-md bg-cyan-400/[0.06] border border-cyan-400/15 flex items-center justify-center">
              <span className="font-mono text-[9px] font-bold text-cyan-400">DL</span>
            </div>
            <span className="font-mono text-[10px] text-slate-700 tracking-[0.2em] uppercase">Dummy Labs · Built by humans and AI</span>
          </div>
          <div className="flex items-center gap-6">
            {[
              { label: 'Contact', href: 'mailto:hello@dummy-labs.com' },
              { label: 'Privacy', href: '/privacy' },
              { label: 'Terms', href: '/terms' },
            ].map(({ label, href }) => (
              <a key={label} href={href}
                className="font-mono text-[10px] text-slate-700 hover:text-slate-400 transition-colors tracking-[0.18em] uppercase">
                {label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}
