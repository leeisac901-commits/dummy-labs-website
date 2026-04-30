---
title: "Day 1: Built a security scanner for AI-generated code after the Lovable breach"
date: "2026-05-01"
description: "We shipped VibeScan in 6 hours — a security scanner for vibe-coded apps. Here's the build, the numbers, and the Lovable breach that triggered it."
category: "Build Log"
---

Day 1 of Dummy Labs. The plan was to ship something every weekday. I didn't expect the first ship to be a security product.

## The trigger

On April 20, 2026, Lovable — a vibe coding platform with 8 million users — left user source code, database credentials, and AI chat logs publicly accessible for 48 days. The vulnerability was a classic BOLA (Broken Object Level Authorization) issue: their backend didn't verify that the user requesting a resource actually owned it.

The Hacker News thread hit 400+ comments. r/netsec and r/webdev were still processing it 10 days later when I read it.

The thing that stuck with me: **AI coding tools don't know your threat model.** They produce code that works. They often produce code that's exploitable.

## The insight from user research

Before writing a line of code, I read 40+ developer comments across HN, Reddit, and Twitter. One comment stuck:

> "I realized I have no idea what the AI actually put in my codebase."

That was the product. Not a full security audit firm. Not a Snyk replacement. Just: give developers a fast, zero-friction way to sanity-check AI-generated code before it hits production.

The objection I expected — "Semgrep and Snyk already do this" — turned out to be weaker than I thought. Those tools require CLI setup, CI integration, and security expertise to configure. VibeScan is paste-and-scan. Different ICP: solo founders vibe coding, not security engineers.

## What we built

**VibeScan** — paste your AI-generated code, get an instant security audit.

- Detects 20+ vulnerability classes: SQL injection, broken auth, IDOR/BOLA, hardcoded secrets, path traversal, XSS, command injection, weak cryptography, missing rate limiting, and more
- Severity ratings: critical / high / medium / low / info
- Actionable fix suggestions for every finding
- Works with any language: JavaScript, Python, TypeScript, Go, PHP, Ruby, Rust

**Build time:** ~6 hours  
**Stack:** Next.js 16, Tailwind CSS, GPT-4o (security analysis engine), Supabase (rate limiting), Stripe (payments)

## Monetization

- Free: 3 scans/day (IP-limited), 10 scans/day with email
- Pro: $29/month, unlimited scans + API access

The free tier is designed to be genuinely useful for a side project while creating a natural upgrade trigger for anyone doing serious development.

## The build

The core of VibeScan is a carefully engineered security audit prompt. Getting the model to return accurate severity ratings — distinguishing between a critical SQL injection and a low-severity best-practice violation — took significant iteration.

The key insight: the prompt needs to define severity operationally, not descriptively. "Critical = direct path to data breach, RCE, or complete auth bypass" is a better definition than "critical = very serious."

## What's next

This is Day 1. Revenue is $0. Traffic is waiting for the launch posts.

If VibeScan catches on, there's a clear expansion path: GitHub integration (scan on PR), team seats, compliance report generation. For now, it's a single-page tool with a working payment flow.

Real numbers will be in Friday's weekly recap.

---

*Dummy Labs ships a new digital product Monday through Friday. Follow along on [X](https://twitter.com/DummyLabs) or [subscribe to the weekly digest](#subscribe).*
