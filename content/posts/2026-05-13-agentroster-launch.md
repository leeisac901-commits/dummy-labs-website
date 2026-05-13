---
title: "Ship #6: AgentRoster — know every AI agent your company is running before your boss asks"
date: "2026-05-13"
description: "AgentRoster launched today: an AI agent registry and risk dashboard for IT managers and CTOs at small companies. Free for up to 10 agents."
category: "Launch"
---

AgentRoster is live at [agentroster-jl25tizra-leeisac901-6166s-projects.vercel.app](https://agentroster-jl25tizra-leeisac901-6166s-projects.vercel.app).

## The problem

In Q1 2026, the average company with 50 employees is running 15–30 AI agents. GitHub Copilot. ChatGPT Teams. Cursor. Notion AI. Zapier AI. Salesforce Einstein. Zapier Agents. Custom GPTs built by individual team members.

Nobody has a complete list. The IT manager doesn't know. The CTO doesn't know. When a regulator, a CISO, or a board member asks "what AI systems have access to our customer data," the answer is usually a scramble.

Microsoft 365 Agents shipped in early 2026. That accelerated the problem by an order of magnitude. Companies that were running 5 AI tools in 2025 are running 20+ in 2026. The governance tooling for enterprise (ServiceNow, Archer) costs $50K+/year. Nothing exists for the 10–200 person company that needs an audit trail without an enterprise procurement process.

AgentRoster is that tool.

## What it does

**Add your agents:**
- Name, category (code / content / data / automation / general / custom), owner
- Monthly cost, data access level (public / internal / sensitive / PII / customer data), status (active / deprecated / testing)

**Get automatically:**
- **Risk score per agent** — composite score from data access level, integration depth, deployment status. PII access + active status = high risk. An agent your data team built that touches customer records surfaces immediately.
- **Roster summary** — total monthly AI spend, total risk exposure, count of high-risk agents
- **PDF audit report** — downloadable with one click, formatted for compliance conversations

**Free:** up to 10 agents  
**Starter ($19/mo):** unlimited agents, team sharing  
**Team ($39/mo):** SSO, audit log, Slack alerts on new high-risk agents

## The risk model

Each agent is scored across four dimensions:
- **Data access** — a 5-tier scale from public (score 1) to customer data/PII (score 5)
- **Category** — data agents (score 3) and automation agents (score 3) score higher than content agents (score 1)
- **Status** — active agents score higher than testing or deprecated
- **Integration signals** — agents with high monthly cost are weighted as having higher integration depth

The composite produces a 0–100 score, bucketed into four tiers: Low Risk / Moderate Risk / High Risk / Critical. The thresholds were calibrated against a sample of 20 real company AI stacks.

## The build

31 unit tests, all passing. Fully client-side — all agent data is stored in browser localStorage, nothing is sent to a server on the free tier. The risk scorer is pure TypeScript functions in `lib/risk-scorer.ts`, unit-testable without a browser.

Demo mode loads a pre-populated roster (GitHub Copilot, ChatGPT Team, Cursor Pro, Zapier AI, Notion AI, Salesforce Einstein) so you can see the scoring in action immediately without adding your own agents.

## Try it

Add 3–5 of your company's AI tools and see your risk breakdown. The demo takes 2 minutes.

**→ [AgentRoster](https://agentroster-jl25tizra-leeisac901-6166s-projects.vercel.app)**

---

*AgentRoster is Ship #6 from Dummy Labs. We ship one security or developer tool per weekday. [See all ships →](https://dummy-labs.com)*
