---
title: "Ship #5: SecretScan — 60+ patterns to find hardcoded secrets in AI-generated code"
date: "2026-05-13"
description: "SecretScan launched today: paste any code, find leaked API keys, tokens, and credentials instantly. 100% client-side — your code never leaves your browser."
category: "Launch"
---

SecretScan is live at [secretscan-five.vercel.app](https://secretscan-five.vercel.app).

It's the second leg of the Dummy Labs scanner trio: VibeScan (broad AI-powered security scan) → **SecretScan (hardcoded secrets)** → DepShield (dependency supply-chain risk).

## Why this exists

AI coding tools produce code with hardcoded secrets at a rate no human developer does. They pattern-match from training data — and the training data includes production configurations, example code, and tutorials filled with real-looking secrets. The result: a GitHub Copilot-assisted developer ships code with `STRIPE_SECRET_KEY=sk_live_...` directly in the source file and doesn't notice until it's in a public repo.

SecretScan is specialized. It's not a broad security scanner. It does one thing: find secrets in code, fast, without sending your code to a server.

## What it detects

**60+ named patterns covering:**

- **AI/LLM APIs:** OpenAI, Anthropic, Replicate, Cohere, Hugging Face
- **Cloud:** AWS access keys + secret keys, GCP service account keys
- **Payments:** Stripe secret keys, Stripe publishable keys, PayPal
- **Auth and identity:** GitHub tokens (classic + fine-grained), GitLab tokens, Cloudflare API tokens
- **Database:** PostgreSQL, MySQL, MongoDB, Redis connection strings
- **Infra:** Vercel tokens, Netlify tokens, Railway tokens, Fly.io tokens
- **Email/comms:** Resend, SendGrid, Mailgun, Loops, Twilio
- **Monitoring:** Sentry, Datadog, New Relic tokens
- **Signing:** SSH private keys, RSA private keys, JWT secrets
- **Generic:** High-entropy assignment detection — catches unlabeled secrets like `const X = "aBcD3FgH..."`

Shannon entropy analysis catches secrets that don't match any named pattern. If a string is long enough and random enough to be a secret, it gets flagged even if we've never seen its format before.

## What it doesn't do

It doesn't send your code to a server. It doesn't require an account. It doesn't store scan results. Everything runs in your browser via WebAssembly-compiled regex and a JavaScript entropy scorer.

This design decision was deliberate: the most sensitive moment to use a secret scanner is right before committing. Developers won't use a tool that requires uploading their code to a third-party server. Browser-native was the only viable architecture.

## The build

42 unit tests, all passing. The core is in `lib/secret-scanner.ts`: 60+ named regex patterns, Shannon entropy function, per-finding severity classification (critical / high / medium / low), and a redaction helper for the UI.

**Free:** unlimited scans, no account.  
**Pro ($9/mo):** team sharing, CI integration via API, scan history.  
**Team ($29/mo):** everything in Pro, multi-repo monitoring, Slack/webhook alerts.

## Try it

Paste any code — a React component, a Python script, a configuration file. SecretScan will tell you within a second whether any credentials are visible.

**→ [secretscan-five.vercel.app](https://secretscan-five.vercel.app)**

---

*SecretScan is Ship #5 from Dummy Labs. We ship one security or developer tool per weekday. [See all ships →](https://dummy-labs.com)*
