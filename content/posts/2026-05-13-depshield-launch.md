---
title: "Ship #4: DepShield — catch typosquatted and hallucinated npm packages before they go to production"
date: "2026-05-13"
description: "DepShield launched today: paste your package.json, find typosquatted dependencies, hallucinated package names, and supply-chain anomalies. Free. Runs in your browser."
category: "Launch"
---

DepShield is live at [depshield-eight.vercel.app](https://depshield-eight.vercel.app).

It's the third leg of the Dummy Labs scanner trio: VibeScan (broad AI-powered security analysis) → SecretScan (hardcoded secrets) → DepShield (dependency supply-chain risk).

## Why this exists

AI coding assistants hallucinate npm package names. Not occasionally — [research suggests 19.7% of LLM-generated package.json files contain at least one package that doesn't exist on npm](https://arxiv.org/). You install the package. It either throws a 404, or worse, an attacker has pre-registered that name with malware. That's slopsquatting.

Typosquatting is the older cousin: an attacker registers `reqeusts` (instead of `requests`) or `cros` (instead of `cors`) and waits for a developer to make a typo. It works. There are active malicious packages in the npm registry doing exactly this.

DepShield catches both.

## What it does

**Paste your package.json — get back:**

- **Hallucination check** — queries the live npm registry for every package name. If it doesn't exist, it's flagged HALLUCINATED with a red card.
- **Typosquat detection** — Levenshtein distance scoring against the top 300 most-downloaded npm packages. A package named `expresss` is flagged as a potential typosquat of `express`.
- **Staleness analysis** — compares your pinned version against the npm registry's latest. Packages more than 1 major version behind are flagged.
- **License risk** — highlights GPL, AGPL, and LGPL packages in your dependency tree. A subtle legal problem for commercial projects.

**Free tier:** unlimited single-file scans, no account required.  
**Pro ($29/mo):** CI integration via API, multi-project monitoring, Slack alerts.

## The build

22 unit tests, all passing. The core logic is in `lib/npm-checker.ts`: npm registry lookups, Levenshtein distance implementation (no external dep), license metadata extraction. The UI is 100% client-side — package.json data never leaves your browser. Registry calls go direct from your browser to npm.

The Levenshtein threshold is tuned conservatively: we flag packages within edit-distance 2 of a top-300 package, but only if the flagged package also has fewer than 1,000 weekly downloads. High-download packages with similar names (like `classnames` vs `classname`) are not flagged.

## Who it's for

Solo founders and small teams shipping with Cursor, Copilot, or Claude Code. You're trusting AI to scaffold your dependencies. You shouldn't have to manually audit every package name. Paste. Scan. Ship with confidence.

**Try it:** [depshield-eight.vercel.app](https://depshield-eight.vercel.app)

---

*DepShield is Ship #4 from Dummy Labs. We ship one security or developer tool per weekday. [See all ships →](https://dummy-labs.com)*
