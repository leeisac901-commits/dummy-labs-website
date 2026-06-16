import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

const LINKEDIN_DM = 'https://www.linkedin.com/in/leeisac/'

export const metadata: Metadata = {
  title: 'Be interviewed — Dummy Labs',
  description:
    'A 30-minute conversation about how you actually use AI in your work. No pitch, no sales. Just listening.',
}

export default function Interview() {
  return (
    <>
      <Header />
      <main id="main" className="flex-1">
        <article className="mx-auto max-w-[640px] px-6 py-20 sm:py-28">
          <Hero />
          <What />
          <Format />
          <Reach />
        </article>
      </main>
      <Footer />
    </>
  )
}

function Header() {
  return (
    <header className="border-b border-rule">
      <div className="mx-auto max-w-[640px] px-6 py-5 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group" aria-label="Dummy Labs">
          <span className="mark">
            <Image src="/brand/dummy-labs-icon.png" alt="" width={36} height={36} className="w-full h-full object-cover" />
          </span>
          <span className="serif text-xl tracking-tight text-foreground">Dummy Labs</span>
        </Link>
        <nav className="text-sm">
          <Link
            href="/blog"
            className="text-muted hover:text-foreground transition-colors underline decoration-rule hover:decoration-foreground underline-offset-4"
          >
            Writing
          </Link>
        </nav>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="mb-16 sm:mb-20">
      <p className="eyebrow rise mb-6">Be interviewed</p>
      <h1 className="display-md rise-2 text-foreground" style={{ fontSize: 'clamp(2.5rem, 7vw, 4rem)' }}>
        <em className="serif italic">Thirty minutes</em>{' '}
        on the systems you rigged with AI.
      </h1>
    </section>
  )
}

function What() {
  return (
    <section className="mb-16 sm:mb-20">
      <div className="prose-essay">
        <p>
          If you&rsquo;re a lawyer, marketer, operator, finance lead — or any
          other specialist who never learned to ship production code — and
          you&rsquo;re quietly bending AI to fit your work, I want to hear it.
        </p>
        <p>
          I care about the prompts you rewrote seven times, the spreadsheet
          glue you hacked together, the way you keep the wheels turning
          without a product team.
        </p>
      </div>
    </section>
  )
}

function Format() {
  return (
    <section className="mb-16 sm:mb-20">
      <p className="eyebrow mb-6">What the conversation looks like</p>
      <div className="prose-essay">
        <p>
          We&rsquo;ll take a 30-minute call, recorded only with your sign-off.
          We&rsquo;ll trace when AI started making sense for you, what
          you&rsquo;ve cobbled together since, and what you still wish
          existed.
        </p>
        <p>
          Afterward I write the piece in your voice — anonymized if you
          prefer, attributed if you don&rsquo;t — and you review before
          anything goes live.
        </p>
        <blockquote className="pull-quote">
          No pitch. No service. Just listening.
        </blockquote>
        <p>
          Phase 1 of Dummy Labs is genuinely about learning alongside the
          people figuring this out in public.
        </p>
      </div>
    </section>
  )
}

function Reach() {
  return (
    <section className="border-t border-rule pt-16 sm:pt-20">
      <p className="eyebrow mb-6">Get in touch</p>
      <div className="prose-essay">
        <p>
          The easiest way is to{' '}
          <a href={LINKEDIN_DM} target="_blank" rel="noopener noreferrer">
            DM me on LinkedIn
          </a>
          . Or email{' '}
          <a href="mailto:hello@dummy-labs.com">hello@dummy-labs.com</a>{' '}
          if that&rsquo;s easier.
        </p>
        <p className="text-muted">
          A single line is enough: who you are, what you do, one sentence on
          how you bring AI into the job. I&rsquo;ll reply.
        </p>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-rule">
      <div className="mx-auto max-w-[640px] px-6 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-sm text-muted">© 2026 Dummy Labs</p>
        <nav className="text-sm flex items-center gap-6">
          <Link href="/" className="text-muted hover:text-foreground transition-colors">
            Home
          </Link>
          <a
            href="https://twitter.com/DummyLabsHQ"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-foreground transition-colors"
          >
            X
          </a>
          <a
            href={LINKEDIN_DM}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-foreground transition-colors"
          >
            LinkedIn
          </a>
        </nav>
      </div>
    </footer>
  )
}
