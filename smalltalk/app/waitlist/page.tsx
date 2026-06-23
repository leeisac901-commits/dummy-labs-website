"use client";

import { useState } from "react";
import Link from "next/link";

const CITIES = [
  { value: "sf", label: "San Francisco / Bay Area" },
  { value: "nyc", label: "New York City" },
  { value: "la", label: "Los Angeles" },
  { value: "chicago", label: "Chicago" },
  { value: "seattle", label: "Seattle" },
  { value: "austin", label: "Austin" },
  { value: "boston", label: "Boston" },
  { value: "miami", label: "Miami" },
  { value: "other", label: "Somewhere else" },
];

export default function WaitlistPage() {
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("sf");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), city }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMsg("Something went wrong. Try again.");
    }
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0D0D0F",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem 1.5rem",
      }}
    >
      {/* Back link */}
      <div style={{ width: "100%", maxWidth: "440px", marginBottom: "2rem" }}>
        <Link
          href="/"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.375rem",
            color: "rgba(255,255,255,0.35)",
            fontSize: "0.875rem",
            textDecoration: "none",
            transition: "color 0.15s",
          }}
          onMouseEnter={(e) =>
            ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.7)")
          }
          onMouseLeave={(e) =>
            ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(255,255,255,0.35)")
          }
        >
          ← SmallTalk
        </Link>
      </div>

      <div
        style={{
          width: "100%",
          maxWidth: "440px",
          background: "#141417",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "24px",
          padding: "2.5rem 2rem",
        }}
      >
        {status === "success" ? (
          /* Success state */
          <div className="animate-scale-in" style={{ textAlign: "center" }}>
            <div
              style={{
                width: "72px",
                height: "72px",
                borderRadius: "50%",
                background: "rgba(34,197,94,0.1)",
                border: "2px solid rgba(34,197,94,0.25)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "2rem",
                margin: "0 auto 1.5rem",
              }}
            >
              ✓
            </div>

            <h1
              style={{
                fontSize: "1.75rem",
                fontWeight: 800,
                color: "#fff",
                letterSpacing: "-0.02em",
                margin: "0 0 0.75rem",
              }}
            >
              You&apos;re on the list.
            </h1>
            <p
              style={{
                fontSize: "1rem",
                color: "rgba(255,255,255,0.5)",
                lineHeight: 1.55,
                margin: "0 0 2rem",
              }}
            >
              We&apos;ll hit you up when SmallTalk opens in your area. No spam, one email.
            </p>

            <div
              style={{
                background: "rgba(245,166,35,0.07)",
                border: "1px solid rgba(245,166,35,0.15)",
                borderRadius: "12px",
                padding: "1rem",
                marginBottom: "1.5rem",
              }}
            >
              <p
                style={{
                  fontSize: "0.875rem",
                  color: "rgba(255,255,255,0.55)",
                  margin: 0,
                  lineHeight: 1.5,
                }}
              >
                Want to move up the list? Share SmallTalk with a friend who&apos;d actually show up.
              </p>
            </div>

            <button
              onClick={() => {
                if (navigator.share) {
                  navigator.share({
                    title: "SmallTalk",
                    text: "An app that actually makes strangers meet IRL. The deposit mechanic is genius.",
                    url: "https://smalltalk.app/waitlist",
                  });
                }
              }}
              className="btn-secondary"
              style={{ width: "100%" }}
            >
              Share with a friend
            </button>
          </div>
        ) : (
          /* Form state */
          <>
            {/* Logo */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                marginBottom: "2rem",
              }}
            >
              <span
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "9px",
                  background: "#F5A623",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "#0D0D0F",
                }}
              >
                ST
              </span>
              <span style={{ fontWeight: 700, fontSize: "1.0625rem", color: "#fff" }}>
                SmallTalk
              </span>
            </div>

            <h1
              style={{
                fontSize: "1.875rem",
                fontWeight: 800,
                color: "#fff",
                letterSpacing: "-0.03em",
                margin: "0 0 0.625rem",
                lineHeight: 1.1,
              }}
            >
              Get early access
            </h1>
            <p
              style={{
                fontSize: "0.9375rem",
                color: "rgba(255,255,255,0.45)",
                lineHeight: 1.5,
                margin: "0 0 2rem",
              }}
            >
              We&apos;re starting in the Bay Area and expanding fast. Drop your email — we&apos;ll
              let you know when you&apos;re in.
            </p>

            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: "0.875rem" }}>
                <label
                  style={{
                    display: "block",
                    fontSize: "0.8125rem",
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.5)",
                    marginBottom: "0.5rem",
                    letterSpacing: "0.01em",
                  }}
                >
                  Email address
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                  className="input"
                  style={{ fontSize: "1rem" }}
                />
              </div>

              <div style={{ marginBottom: "1.5rem" }}>
                <label
                  style={{
                    display: "block",
                    fontSize: "0.8125rem",
                    fontWeight: 600,
                    color: "rgba(255,255,255,0.5)",
                    marginBottom: "0.5rem",
                    letterSpacing: "0.01em",
                  }}
                >
                  Your city
                </label>
                <div style={{ position: "relative" }}>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="select"
                  >
                    {CITIES.map(({ value, label }) => (
                      <option key={value} value={value}>
                        {label}
                      </option>
                    ))}
                  </select>
                  <span
                    style={{
                      position: "absolute",
                      right: "1rem",
                      top: "50%",
                      transform: "translateY(-50%)",
                      color: "rgba(255,255,255,0.35)",
                      pointerEvents: "none",
                      fontSize: "0.75rem",
                    }}
                  >
                    ▾
                  </span>
                </div>
              </div>

              {errorMsg && (
                <p
                  style={{
                    color: "#EF4444",
                    fontSize: "0.875rem",
                    margin: "-0.5rem 0 1rem",
                  }}
                >
                  {errorMsg}
                </p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="btn-primary"
                style={{ width: "100%", padding: "0.875rem", fontSize: "1rem" }}
              >
                {status === "loading" ? "Sending..." : "I'm in"}
              </button>
            </form>

            <p
              style={{
                marginTop: "1.25rem",
                fontSize: "0.8125rem",
                color: "rgba(255,255,255,0.25)",
                textAlign: "center",
              }}
            >
              No spam. Unsubscribe any time.
            </p>
          </>
        )}
      </div>

      {/* Stats below form */}
      <div
        style={{
          display: "flex",
          gap: "2rem",
          marginTop: "2rem",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {[
          { value: "2,400+", label: "on the list" },
          { value: "SF first", label: "launching soon" },
          { value: "0 spam", label: "guaranteed" },
        ].map(({ value, label }) => (
          <div key={label} style={{ textAlign: "center" }}>
            <div style={{ fontWeight: 700, fontSize: "1rem", color: "rgba(255,255,255,0.6)" }}>
              {value}
            </div>
            <div style={{ fontSize: "0.75rem", color: "rgba(255,255,255,0.25)" }}>{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
