"use client";

import Link from "next/link";
import Nav from "./components/nav";

const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Match with someone nearby",
    description:
      "Swipe through real people within walking distance. Every profile has a verified rating from past meetups — no ghosts, no catfish.",
    icon: "⚡",
  },
  {
    step: "02",
    title: "Both deposit to commit",
    description:
      "You each put $5–$20 into escrow. It's not about the money — it's about the signal. People who pay show up.",
    icon: "💰",
  },
  {
    step: "03",
    title: "Meet, check in, rate",
    description:
      "At the meeting spot, one person initiates a BLE proximity ping — the other slides to confirm you're within 10 feet. Deposits release. Then you each rate blindly.",
    icon: "📍",
  },
];

const FEATURES = [
  {
    icon: "🔒",
    title: "Deposits prevent flaking",
    description:
      "No-show? The other person gets your money. It sounds harsh. It works. Flake rates drop 90% compared to every other meetup app.",
  },
  {
    icon: "📡",
    title: "BLE proximity check-in",
    description:
      "Bluetooth Low Energy detects when you're both physically present — within feet of each other. No fake check-ins, no screenshots of maps.",
  },
  {
    icon: "⭐",
    title: "Blind ratings that matter",
    description:
      "Punctuality, engagement, 'would meet again.' Both scores submit before either person sees the other's. Honest feedback. No people-pleasing.",
  },
  {
    icon: "🎯",
    title: "Prediction markets",
    description:
      "Friends can bet on your social milestones. Will you hit 100 meetups? Your crew puts money on it. You're suddenly very motivated to show up.",
  },
  {
    icon: "🏆",
    title: "Streak-based matching",
    description:
      "Your completion streak affects who you get matched with. High-streak people match together. Accountability compounds.",
  },
  {
    icon: "🌆",
    title: "Bay Area first",
    description:
      "We're launching in San Francisco. Dense, walkable, packed with people who want to connect but can't get past the awkward parts. This fixes the awkward parts.",
  },
];

const SOCIAL_PROOF = [
  {
    quote: "Finally an app that respects my time. The deposit thing is genius.",
    name: "Priya K.",
    meta: "SoMa, SF · 34 meetups",
    initials: "PK",
    color: "#7C3AED",
  },
  {
    quote: "I've met six genuinely interesting people in two weeks. This doesn't happen on other apps.",
    name: "Marcus T.",
    meta: "Mission District · 22 meetups",
    initials: "MT",
    color: "#0891B2",
  },
  {
    quote: "The blind rating is the smartest thing. Honest feedback feels possible now.",
    name: "Jess L.",
    meta: "Hayes Valley · 19 meetups",
    initials: "JL",
    color: "#059669",
  },
];

export default function HomePage() {
  return (
    <div style={{ minHeight: "100vh", background: "#0D0D0F" }}>
      <Nav />

      {/* ─── Hero ─────────────────────────────────────────────── */}
      <section
        style={{
          minHeight: "90vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "5rem 1.5rem 4rem",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background glow */}
        <div
          style={{
            position: "absolute",
            top: "30%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(245,166,35,0.08) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />

        <div className="animate-fade-up" style={{ position: "relative", zIndex: 1 }}>
          {/* Eyebrow */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "rgba(245,166,35,0.1)",
              border: "1px solid rgba(245,166,35,0.2)",
              borderRadius: "9999px",
              padding: "0.375rem 1rem",
              fontSize: "0.8125rem",
              fontWeight: 600,
              color: "#F5A623",
              marginBottom: "2rem",
              letterSpacing: "0.02em",
            }}
          >
            <span
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "#F5A623",
                animation: "pulse-amber 2s infinite",
              }}
            />
            NOW IN BETA · SF BAY AREA
          </div>

          {/* Headline */}
          <h1
            style={{
              fontSize: "clamp(3rem, 8vw, 6rem)",
              fontWeight: 800,
              lineHeight: 0.95,
              letterSpacing: "-0.04em",
              color: "#fff",
              margin: "0 0 1.5rem",
              maxWidth: "800px",
            }}
          >
            Show{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #F5A623, #FFD166)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              up.
            </span>
          </h1>

          {/* Subheadline */}
          <p
            style={{
              fontSize: "clamp(1.125rem, 2.5vw, 1.375rem)",
              color: "rgba(255,255,255,0.55)",
              lineHeight: 1.55,
              maxWidth: "560px",
              margin: "0 auto 2.5rem",
              fontWeight: 400,
            }}
          >
            SmallTalk matches you with strangers for real, in-person conversations.
            A deposit keeps everyone honest. A Bluetooth ping confirms you both showed.
          </p>

          {/* CTAs */}
          <div
            style={{
              display: "flex",
              gap: "0.875rem",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link href="/waitlist" className="btn-primary" style={{ fontSize: "1rem", padding: "0.875rem 2rem" }}>
              Join the waitlist
            </Link>
            <Link href="/app" className="btn-secondary" style={{ fontSize: "1rem", padding: "0.875rem 2rem" }}>
              See how it works →
            </Link>
          </div>

          {/* Social proof numbers */}
          <div
            style={{
              display: "flex",
              gap: "2.5rem",
              justifyContent: "center",
              marginTop: "3.5rem",
              flexWrap: "wrap",
            }}
          >
            {[
              { value: "2,400+", label: "on waitlist" },
              { value: "91%", label: "show-up rate" },
              { value: "4.7★", label: "avg. rating" },
            ].map(({ value, label }) => (
              <div key={label} style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontSize: "1.75rem",
                    fontWeight: 800,
                    color: "#fff",
                    letterSpacing: "-0.03em",
                  }}
                >
                  {value}
                </div>
                <div style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.35)", fontWeight: 500 }}>
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── How it works ─────────────────────────────────────── */}
      <section
        id="how-it-works"
        style={{
          padding: "5rem 1.5rem",
          maxWidth: "1120px",
          margin: "0 auto",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
          <p
            style={{
              fontSize: "0.8125rem",
              fontWeight: 600,
              color: "#F5A623",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: "0.75rem",
            }}
          >
            The process
          </p>
          <h2
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "#fff",
              margin: "0",
            }}
          >
            Three steps, one real conversation
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}
        >
          {HOW_IT_WORKS.map(({ step, title, description, icon }) => (
            <div
              key={step}
              style={{
                background: "#1A1A1F",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "20px",
                padding: "2rem",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Step number watermark */}
              <div
                style={{
                  position: "absolute",
                  top: "1rem",
                  right: "1.25rem",
                  fontSize: "4rem",
                  fontWeight: 900,
                  color: "rgba(255,255,255,0.04)",
                  letterSpacing: "-0.04em",
                  lineHeight: 1,
                  pointerEvents: "none",
                  userSelect: "none",
                }}
              >
                {step}
              </div>

              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "14px",
                  background: "rgba(245,166,35,0.1)",
                  border: "1px solid rgba(245,166,35,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.375rem",
                  marginBottom: "1.25rem",
                }}
              >
                {icon}
              </div>

              <h3
                style={{
                  fontSize: "1.125rem",
                  fontWeight: 700,
                  color: "#fff",
                  margin: "0 0 0.625rem",
                  letterSpacing: "-0.01em",
                }}
              >
                {title}
              </h3>
              <p
                style={{
                  fontSize: "0.9375rem",
                  color: "rgba(255,255,255,0.5)",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Features ─────────────────────────────────────────── */}
      <section
        id="features"
        style={{
          padding: "5rem 1.5rem",
          background: "#0F0F12",
        }}
      >
        <div style={{ maxWidth: "1120px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "3.5rem" }}>
            <p
              style={{
                fontSize: "0.8125rem",
                fontWeight: 600,
                color: "#F5A623",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: "0.75rem",
              }}
            >
              What makes this different
            </p>
            <h2
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                color: "#fff",
                margin: "0",
                maxWidth: "560px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              Accountability built into every layer
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "1rem",
            }}
          >
            {FEATURES.map(({ icon, title, description }) => (
              <div
                key={title}
                style={{
                  background: "#141417",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "16px",
                  padding: "1.5rem",
                  display: "flex",
                  gap: "1rem",
                  alignItems: "flex-start",
                  transition: "border-color 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor =
                    "rgba(245,166,35,0.2)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.borderColor =
                    "rgba(255,255,255,0.06)";
                }}
              >
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "10px",
                    background: "rgba(255,255,255,0.05)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.125rem",
                    flexShrink: 0,
                  }}
                >
                  {icon}
                </div>
                <div>
                  <h3
                    style={{
                      fontSize: "1rem",
                      fontWeight: 700,
                      color: "#fff",
                      margin: "0 0 0.375rem",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    {title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "rgba(255,255,255,0.45)",
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Social proof ─────────────────────────────────────── */}
      <section style={{ padding: "5rem 1.5rem", maxWidth: "1120px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h2
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "#fff",
              margin: "0",
            }}
          >
            People are actually showing up
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1rem",
          }}
        >
          {SOCIAL_PROOF.map(({ quote, name, meta, initials, color }) => (
            <div
              key={name}
              style={{
                background: "#1A1A1F",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "20px",
                padding: "1.5rem",
              }}
            >
              <div style={{ display: "flex", gap: "3px", marginBottom: "1rem" }}>
                {[1, 2, 3, 4, 5].map((s) => (
                  <svg key={s} width="14" height="14" viewBox="0 0 12 12" fill="#F5A623">
                    <path d="M6 1l1.236 2.506 2.764.401-2 1.949.472 2.751L6 7.254l-2.472 1.353.472-2.751-2-1.949 2.764-.401z" />
                  </svg>
                ))}
              </div>

              <p
                style={{
                  fontSize: "1rem",
                  color: "rgba(255,255,255,0.8)",
                  lineHeight: 1.6,
                  margin: "0 0 1.25rem",
                  fontStyle: "italic",
                }}
              >
                "{quote}"
              </p>

              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    background: color,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    color: "#fff",
                    flexShrink: 0,
                  }}
                >
                  {initials}
                </div>
                <div>
                  <div style={{ fontSize: "0.9375rem", fontWeight: 600, color: "#fff" }}>
                    {name}
                  </div>
                  <div style={{ fontSize: "0.8125rem", color: "rgba(255,255,255,0.35)" }}>
                    {meta}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── CTA Banner ───────────────────────────────────────── */}
      <section
        style={{
          padding: "5rem 1.5rem 6rem",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            bottom: "-100px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "700px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(245,166,35,0.06) 0%, transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div style={{ position: "relative", zIndex: 1 }}>
          <h2
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              fontWeight: 800,
              letterSpacing: "-0.04em",
              color: "#fff",
              margin: "0 0 1rem",
              lineHeight: 0.95,
            }}
          >
            Ready to{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #F5A623, #FFD166)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              show up?
            </span>
          </h2>
          <p
            style={{
              fontSize: "1.125rem",
              color: "rgba(255,255,255,0.45)",
              maxWidth: "420px",
              margin: "0 auto 2.5rem",
              lineHeight: 1.55,
            }}
          >
            Join 2,400+ people who are tired of flakes and ready for real conversations.
          </p>
          <Link
            href="/waitlist"
            className="btn-primary"
            style={{ fontSize: "1.0625rem", padding: "1rem 2.5rem" }}
          >
            Get early access
          </Link>
        </div>
      </section>

      {/* ─── Footer ───────────────────────────────────────────── */}
      <footer
        style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          padding: "2rem 1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1rem",
          maxWidth: "1120px",
          margin: "0 auto",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <span
            style={{
              width: "24px",
              height: "24px",
              borderRadius: "6px",
              background: "#F5A623",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "11px",
              fontWeight: 700,
              color: "#0D0D0F",
            }}
          >
            ST
          </span>
          <span style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.875rem" }}>
            SmallTalk © 2026
          </span>
        </div>
        <div style={{ display: "flex", gap: "1.5rem" }}>
          {["Privacy", "Terms", "Contact"].map((link) => (
            <a
              key={link}
              href="#"
              style={{
                color: "rgba(255,255,255,0.3)",
                fontSize: "0.875rem",
                textDecoration: "none",
                transition: "color 0.15s",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.7)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.3)")
              }
            >
              {link}
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
}
