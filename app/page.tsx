import Link from 'next/link'
import Image from 'next/image'

const LINKEDIN_DM = 'https://www.linkedin.com/in/leeisac/'

export default function Home() {
  return (
    <>
      <Header />
      <main id="main" className="flex-1">
        <article className="mx-auto max-w-[640px] px-6 py-20 sm:py-28">
          <Hero />
          <Manifesto />
          <Interview />
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
            href="/interview"
            className="text-muted hover:text-foreground transition-colors underline decoration-rule hover:decoration-foreground underline-offset-4"
          >
            Be interviewed
          </Link>
        </nav>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="mb-20 sm:mb-28">
      <p className="eyebrow rise mb-6">Dummy Labs · June 2026</p>
      <h1 className="display rise-2 text-foreground" style={{ fontSize: 'clamp(4.5rem, 14vw, 9rem)' }}>
        Build<br />
        <em className="serif italic">anyway.</em>
      </h1>
      <p className="rise-3 mt-10 text-lg sm:text-xl text-muted max-w-[480px] leading-relaxed">
        A community and media project for the non-technical professionals
        quietly building with AI. By one of them.
      </p>
    </section>
  )
}

function Manifesto() {
  return (
    <section className="mb-20 sm:mb-28">
      <p className="eyebrow mb-6">What this is</p>

      <div className="prose-essay">
        <p>
          Dummy Labs belongs to people with heavy domain expertise and a
          backlog of product ideas who still feel sidelined because they never
          picked up code. The premise stays sharp: AI dropped the barrier, the
          desire to build remains.
        </p>

        <p>
          The name comes from that familiar pit-in-the-stomach moment —
          walking into a room fluent in APIs and frameworks and feeling like
          the dummy in the corner. I&rsquo;m not interested in pretending that
          feeling isn&rsquo;t real; I&rsquo;m interested in turning it into an
          identity for people who build anyway.
        </p>

        <p>
          Litigators, brand leads, operations chiefs, controllers — anyone who
          knows their craft cold and still gets told they need an engineer in
          the room. I&rsquo;m one of you. I sit in finance and tax. I&rsquo;ve
          been quietly stitching together AI tools at my day job, learning as
          I go, and I want to sit with others doing the same.
        </p>

        <p>
          Phase 1 is an interview series. I talk with people about the prompts
          they fought to perfect, the scrappy tooling they assembled, the
          choices they made when the off-the-shelf option fell short. No
          pitch. No service. Just the story of how they work.
        </p>

        <p>
          Later comes a hackathon for builders without engineering titles.
          Further out, something closer to a YC for non-technical founders — a
          place where someone with an idea and no engineering background can
          bring it to life with AI.
        </p>

        <p>
          For now I&rsquo;m listening. <strong>Build anyway.</strong>
        </p>
      </div>
    </section>
  )
}

function Interview() {
  return (
    <section className="border-t border-rule pt-16 sm:pt-20">
      <p className="eyebrow mb-6">Be interviewed</p>
      <h2 className="display-md text-foreground mb-6" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}>
        Using AI in interesting ways at your day job?
      </h2>
      <p className="prose-essay">
        I&rsquo;d love to talk to you. 30 minutes, on a call, recorded with
        your sign-off. I publish the conversation as a written piece so others
        in the same boat can learn from how you work.
      </p>
      <p className="prose-essay mt-6">
        The easiest way to reach me is to{' '}
        <a href={LINKEDIN_DM} target="_blank" rel="noopener noreferrer">
          DM me on LinkedIn
        </a>
        . Or email{' '}
        <a href="mailto:hello@dummy-labs.com">hello@dummy-labs.com</a>.
      </p>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-rule">
      <div className="mx-auto max-w-[640px] px-6 py-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <p className="text-sm text-muted">© 2026 Dummy Labs</p>
        <nav className="text-sm flex items-center gap-6">
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
          <Link href="/privacy" className="text-muted hover:text-foreground transition-colors">
            Privacy
          </Link>
        </nav>
      </div>
    </footer>
  )
}
