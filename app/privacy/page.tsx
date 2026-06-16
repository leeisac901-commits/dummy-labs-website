import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'

const LINKEDIN_DM = 'https://www.linkedin.com/in/leeisac/'

export const metadata: Metadata = {
  title: 'Privacy — Dummy Labs',
  description: 'A short, honest privacy notice.',
}

export default function Privacy() {
  return (
    <>
      <Header />
      <main id="main" className="flex-1">
        <article className="mx-auto max-w-[640px] px-6 py-20 sm:py-28">
          <Hero />
          <Body />
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
            href="/"
            className="text-muted hover:text-foreground transition-colors underline decoration-rule hover:decoration-foreground underline-offset-4"
          >
            Home
          </Link>
        </nav>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="mb-12 sm:mb-16">
      <p className="eyebrow rise mb-6">Privacy · updated June 2026</p>
      <h1 className="display-md rise-2 text-foreground" style={{ fontSize: 'clamp(2.5rem, 7vw, 4rem)' }}>
        A short, honest privacy notice.
      </h1>
    </section>
  )
}

function Body() {
  return (
    <section className="prose-essay">
      <p>
        Dummy Labs is run by one person — Isac Lee. It&rsquo;s a website and
        an interview series, not a software product. There are no user
        accounts, no payments, no analytics scripts, no tracking pixels on
        this site right now.
      </p>

      <p>
        Here&rsquo;s what actually happens when you visit or get in touch.
      </p>

      <h2 className="serif italic" style={{ fontSize: '1.5rem', margin: '2.5rem 0 0.75rem' }}>
        What I collect
      </h2>
      <p>
        <strong>Your visit.</strong> Vercel (the host) logs standard request
        data — IP addresses, browser type, the page you requested — for the
        purpose of running the site and blocking abuse. I don&rsquo;t look at
        these logs unless something goes wrong.
      </p>
      <p>
        <strong>Your message.</strong> If you{' '}
        <a href={LINKEDIN_DM} target="_blank" rel="noopener noreferrer">DM me on LinkedIn</a>{' '}
        or email <a href="mailto:hello@dummy-labs.com">hello@dummy-labs.com</a>, I keep what you sent so I can reply. I don&rsquo;t add you
        to a mailing list. There is no mailing list yet.
      </p>
      <p>
        <strong>Your interview.</strong> If we do a recorded interview, the
        recording, transcript, and any notes are stored privately until the
        piece is published with your sign-off. You get to review and edit
        before anything goes public.
      </p>

      <h2 className="serif italic" style={{ fontSize: '1.5rem', margin: '2.5rem 0 0.75rem' }}>
        Who else sees any of it
      </h2>
      <p>
        <strong>Vercel</strong> hosts the site and may log IP addresses for
        security. They have their own privacy policy.
      </p>
      <p>
        <strong>LinkedIn / your email provider</strong> see the messages you
        send through them, per their own terms.
      </p>
      <p>
        That&rsquo;s it for now. If this changes — if I add analytics, a
        mailing list, or a paid product — this page gets updated and the
        date above changes.
      </p>

      <h2 className="serif italic" style={{ fontSize: '1.5rem', margin: '2.5rem 0 0.75rem' }}>
        Your rights
      </h2>
      <p>
        Email <a href="mailto:hello@dummy-labs.com">hello@dummy-labs.com</a>{' '}
        and I&rsquo;ll do my best. If you want me to delete a message you
        sent or a recording of you, just ask.
      </p>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-rule mt-20 sm:mt-28">
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
