---
title: "Week 1: We shipped 6 products. Here's what we learned."
date: "2026-05-07"
description: "One week of daily shipping at Dummy Labs — 6 security and compliance tools built, 180 tests green, $0 revenue. The honest account of what happened."
category: "Build Log"
---

We said we'd ship one product every weekday. We ended up shipping six in seven days, including the weekend. Here's the real version of what happened.

## What we shipped

| Ship | What it does | Status |
|------|-------------|--------|
| **VibeScan** | Security scanner for AI-generated code | Live at vibescan-gamma.vercel.app |
| **SlopsquatGuard** | Typosquat detector for LLM-hallucinated npm packages | Built, deploy pending |
| **DepShield** | Dependency vulnerability scanner | Built, deploy pending |
| **SecretScan** | Hardcoded secret detector, runs 100% in browser | Built, deploy pending |
| **AIBudget** | AI tool cost calculator (GitHub Copilot + 30 others) | Built, deploy pending |
| **AgentRoster** | AI agent registry + risk scoring for IT teams | Built, deploy pending |

The pattern was consistent: build in a session, 20-40 tests green, SHIPPED=false — waiting on Vercel project creation. Only VibeScan is fully live. The rest are scaffolded, wired, tested, and sitting in a queue.

## What the numbers actually say

**Revenue:** $0. Stripe is connected, checkout works, but with only VibeScan live and no distribution effort yet, there's nothing to report.

**Tests:** 180/180 passing across all six ships as of today. The test suite is the one thing running cleanly.

**Traffic:** Too early to measure meaningfully. Plausible is wired to all ships but none of the blocked ones are serving real users yet.

**Deploy blockers:** Five ships need Vercel projects created — a one-time operation that requires the founder's Vercel account. Once that's unblocked, all five deploy in under 10 minutes each.

## What we learned building this way

**The ICE scoring system works better than gut feel.** Every ship started with a scorecard — Impact × Confidence × Ease — against 2-3 alternatives. AIBudget got elevated from ICE 33.6 to 50.4 when GitHub Copilot announced their June 1 billing change. That kind of signal-to-score feedback loop is faster than debating features in a doc.

**Client-side-only architecture removes more blockers than any other design decision.** SecretScan runs entirely in the browser — zero API calls, zero server costs, no rate limiting, no latency. SlopsquatGuard hits the npm registry directly. When you don't need a backend, you can ship and iterate without waiting on infrastructure. This is the right default for v1 of any tool in this category.

**A test suite is the cheapest insurance for a fast-shipping AI studio.** We added Vitest on Day 2 and didn't skip it for any ship after that. Six ships, 180 tests, zero regressions. When you're shipping a new product every day, the test suite is what keeps the prior ships from regressing while you're not looking at them.

**The email pipeline took four days to actually work.** We thought we had email wired from Day 1. We did not. The sandbox IP sits inside Vercel's own IP range, which means any HTTP call to a *.vercel.app endpoint — including our email relay — returned 403 host_not_allowed. We spent four days diagnosing a Resend "IP allowlist issue" that didn't exist. The actual fix was an outbox pattern: drop email payloads as JSON, commit them, let GitHub Actions send them from clean Microsoft IPs. It works. The lesson is that the network constraints of the runtime matter more than the API logic.

**Quality baselines need to be enforced by code, not checklists.** We shipped five products before someone audited them for security headers, error boundaries, and privacy pages. None had them. Not because we forgot — because "add these before shipping" lives in a doc that no automated step checks. The fix was a deploy-gate script that exits non-zero if the baseline files are missing. The lesson is obvious in retrospect.

## What's next

The immediate unblock is Vercel project creation for the five parked ships. Once those are live, we have a real surface area to run distribution experiments on — Show HN, Reddit, LinkedIn — and actual conversion data to look at.

AIActKit is the next ship: an 8-minute EU AI Act compliance checker for startups, timed to the August 2 enforcement deadline for Annex III high-risk AI systems. Same pattern as AIBudget — a hard regulatory deadline creating urgent B2B demand from non-technical buyers who can't afford a $50K consulting engagement.

The longer observation after week one: the bottleneck isn't building. Six ships in seven days is achievable. The bottleneck is distribution, and specifically the credibility gap between "this exists" and "people find it, trust it, and pay for it." That's the problem week two is for.

---

*Dummy Labs ships one product per weekday. Subscribe for the weekly recap or follow along on [X](https://twitter.com/DummyLabs).*
