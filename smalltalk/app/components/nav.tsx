"use client";

import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        background: "rgba(13,13,15,0.85)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
      }}
    >
      <nav
        style={{
          maxWidth: "1120px",
          margin: "0 auto",
          padding: "0 1.5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "60px",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.5rem",
            textDecoration: "none",
          }}
        >
          <span
            style={{
              width: "28px",
              height: "28px",
              borderRadius: "8px",
              background: "#F5A623",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "14px",
            }}
          >
            ST
          </span>
          <span
            style={{
              fontWeight: 700,
              fontSize: "1.0625rem",
              color: "#FFFFFF",
              letterSpacing: "-0.01em",
            }}
          >
            SmallTalk
          </span>
        </Link>

        {/* Desktop nav */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.25rem",
          }}
          className="desktop-nav"
        >
          <Link
            href="/#how-it-works"
            style={{
              color: "rgba(255,255,255,0.55)",
              fontSize: "0.9rem",
              fontWeight: 500,
              padding: "0.5rem 0.75rem",
              borderRadius: "8px",
              textDecoration: "none",
              transition: "color 0.15s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}
          >
            How it works
          </Link>
          <Link
            href="/#features"
            style={{
              color: "rgba(255,255,255,0.55)",
              fontSize: "0.9rem",
              fontWeight: 500,
              padding: "0.5rem 0.75rem",
              borderRadius: "8px",
              textDecoration: "none",
              transition: "color 0.15s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}
          >
            Features
          </Link>
          <Link
            href="/app"
            style={{
              color: "rgba(255,255,255,0.55)",
              fontSize: "0.9rem",
              fontWeight: 500,
              padding: "0.5rem 0.75rem",
              borderRadius: "8px",
              textDecoration: "none",
              transition: "color 0.15s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#fff")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.55)")}
          >
            Demo
          </Link>
        </div>

        {/* CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <Link
            href="/waitlist"
            className="btn-primary"
            style={{ padding: "0.5rem 1.125rem", fontSize: "0.875rem" }}
          >
            Join waitlist
          </Link>
        </div>
      </nav>
    </header>
  );
}
