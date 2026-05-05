import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service — Dummy Labs',
  description: 'Terms governing use of Dummy Labs products.',
}

export default function Terms() {
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
        <h1 className="text-3xl font-bold text-white mb-2">Terms of Service</h1>
        <p className="font-mono text-xs text-slate-500 mb-10">Last updated: April 30, 2026</p>

        <div className="space-y-8 text-slate-400 leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">Agreement</h2>
            <p>By using any Dummy Labs product or website, you agree to these terms. If you do not agree, do not use our products. These terms are between you and Dummy Labs LLC.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">Eligibility</h2>
            <p>You must be at least 18 years old to use our services. By using our products, you represent that you meet this requirement.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">Products and availability</h2>
            <p>Dummy Labs ships new digital products regularly. Products may be modified, discontinued, or removed at any time. We will provide reasonable notice before shutting down any product with active paying subscribers.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">Payments and refunds</h2>
            <ul className="space-y-3 list-disc list-inside">
              <li><span className="text-slate-300">One-time purchases:</span> 30-day refund, no questions asked. Email hello@dummy-labs.com.</li>
              <li><span className="text-slate-300">Subscriptions:</span> Cancel any time. You retain access until the end of your billing period. Pro-rated refund available within 7 days of billing if you haven&apos;t used the product.</li>
              <li><span className="text-slate-300">App Store purchases:</span> Subject to Apple&apos;s or Google&apos;s refund policies.</li>
              <li><span className="text-slate-300">Digital products (Gumroad):</span> Subject to Gumroad&apos;s 30-day refund policy.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">Acceptable use</h2>
            <p className="mb-3">You agree not to:</p>
            <ul className="space-y-2 list-disc list-inside">
              <li>Use our products for any illegal purpose</li>
              <li>Attempt to reverse engineer, copy, or resell our products without permission</li>
              <li>Abuse or overload our infrastructure (including automated scraping or API abuse)</li>
              <li>Share accounts or credentials for subscription products</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">AI-generated content</h2>
            <p>Some Dummy Labs products use AI to generate output. AI output may contain errors. It is not professional advice. For products involving finance, legal, or health topics, a disclaimer is shown in-product — please read it. You are responsible for verifying AI output before acting on it.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">Intellectual property</h2>
            <p>Dummy Labs owns all intellectual property in its products, brand, and code. You retain ownership of any content you create using our tools. By subscribing to updates, you grant us permission to send you email communications.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">Disclaimer of warranties</h2>
            <p>Our products are provided &quot;as is&quot; without warranty of any kind. We do not guarantee uptime, accuracy of results, or fitness for any particular purpose. Use our products at your own risk.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">Limitation of liability</h2>
            <p>Dummy Labs LLC&apos;s total liability to you for any claim arising from use of our products is limited to the amount you paid us in the 12 months preceding the claim. We are not liable for indirect, incidental, or consequential damages.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">Governing law</h2>
            <p>These terms are governed by the laws of the State of Wyoming, USA, without regard to conflict of law principles.</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">Changes</h2>
            <p>We may update these terms. The date at the top reflects the most recent revision. Continued use of our products after changes constitutes acceptance.</p>
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
