import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — Dummy Labs',
  description: 'How Dummy Labs collects and uses your data.',
}

export default function Privacy() {
  return (
    <div className="min-h-screen text-slate-200" style={{ fontFamily: 'var(--font-geist-sans)' }}>
      <nav className="border-b border-white/[0.06] px-6 py-4">
        <div className="max-w-5xl mx-auto">
          <a href="/" className="flex items-center gap-3 w-fit">
            <div className="w-7 h-7 rounded-lg bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center">
              <span className="font-mono text-[10px] font-bold text-cyan-400">DL</span>
            </div>
            <span className="font-mono text-sm font-semibold tracking-wide text-white">DUMMY LABS</span>
          </a>
        </div>
      </nav>

      <main className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold text-white mb-2">Privacy Policy</h1>
        <p className="font-mono text-xs text-slate-500 mb-10">Last updated: April 30, 2026</p>

        <div className="space-y-8 text-slate-400 leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">Who we are</h2>
            <p>Dummy Labs LLC operates dummy-labs.com and a portfolio of digital products. We can be reached at <a href="mailto:hello@dummy-labs.com" className="text-cyan-400 hover:text-cyan-300">hello@dummy-labs.com</a>.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">What we collect</h2>
            <ul className="space-y-2 list-disc list-inside">
              <li><span className="text-slate-300">Email address</span> — when you subscribe to updates or sign up for a product</li>
              <li><span className="text-slate-300">Usage data</span> — page views, referrer, country (no personal identifiers) via Plausible Analytics</li>
              <li><span className="text-slate-300">Payment data</span> — handled entirely by Stripe or Lemon Squeezy; we never see or store your card details</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">Why we collect it</h2>
            <ul className="space-y-2 list-disc list-inside">
              <li>Email — to send product updates and the Dummy Labs digest (you can unsubscribe any time)</li>
              <li>Usage data — to understand which products are useful and improve them</li>
              <li>Payment data — to process transactions for paid products</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">Third parties</h2>
            <ul className="space-y-2 list-disc list-inside">
              <li><span className="text-slate-300">Plausible Analytics</span> — cookieless, privacy-friendly analytics. No personal data shared.</li>
              <li><span className="text-slate-300">Loops</span> — email list management. Your email is stored on their servers.</li>
              <li><span className="text-slate-300">Stripe / Lemon Squeezy</span> — payment processing. Subject to their privacy policies.</li>
              <li><span className="text-slate-300">Vercel</span> — hosting. May log IP addresses for security purposes.</li>
              <li><span className="text-slate-300">Supabase</span> — database hosting for products that require accounts.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">Cookies</h2>
            <p>This site uses no tracking cookies. Plausible Analytics is cookieless. Individual products may use cookies for authentication — this is disclosed per product.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">Data retention</h2>
            <p>Email addresses are retained until you unsubscribe or request deletion. Usage analytics are retained for 24 months. Payment records are retained as required by law (typically 7 years).</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">Your rights</h2>
            <p>You can request access to, correction of, or deletion of your personal data at any time. Email <a href="mailto:hello@dummy-labs.com" className="text-cyan-400 hover:text-cyan-300">hello@dummy-labs.com</a> with your request. We respond within 30 days.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">Children</h2>
            <p>Our services are intended for users 18 years of age or older. We do not knowingly collect data from users under 13.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">Changes</h2>
            <p>We may update this policy. The date at the top of this page reflects the most recent revision. Continued use of our products after changes constitutes acceptance.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">Contact</h2>
            <p><a href="mailto:hello@dummy-labs.com" className="text-cyan-400 hover:text-cyan-300">hello@dummy-labs.com</a></p>
          </section>
        </div>
      </main>

      <footer className="border-t border-white/[0.06] px-6 py-8 mt-16">
        <div className="max-w-5xl mx-auto">
          <span className="font-mono text-[10px] text-slate-700 tracking-widest uppercase">Dummy Labs LLC</span>
        </div>
      </footer>
    </div>
  )
}
