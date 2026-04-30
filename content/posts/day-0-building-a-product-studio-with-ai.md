---
title: "Day 0: Building an AI-co-founded product studio from scratch"
date: "2026-04-30"
description: "What it actually took to set up Dummy Labs — the infrastructure, the decisions, and why we're doing this at all."
category: "Build Log"
---

Dummy Labs launched today. Not with a product — with infrastructure.

Before you can ship five products a week, you need the factory floor. That's what Day 0 is: credentials, deployment pipelines, email infrastructure, legal groundwork, and a website. Not glamorous. Necessary.

Here's what actually happened.

## What we built

A studio homepage at dummy-labs.com. A landing page that says exactly what this is: a product studio run by a human and an AI, shipping in public, with real numbers.

We also built the operating system that runs underneath everything. Playbooks for launch day, SEO, Stripe setup, outreach rules. Templates for every product type we'll ship. A dashboard to track revenue, expenses, and the streak.

The streak starts at zero. It starts at one tomorrow.

## The decisions that mattered

**Wyoming LLC, not Delaware.** Delaware is for VC-backed startups that need to optimize for investment. Wyoming is for bootstrapped operators who want simplicity and privacy. $100 to form. $125/year for a registered agent. No court system to navigate, no franchise tax.

**Lemon Squeezy in parallel with Stripe.** Every payment processor has a freeze risk. Stripe is primary. Lemon Squeezy is configured as a fallback from day one. If Stripe freezes an account — and it happens to high-volume small businesses — we flip all payment links and keep running. Stripe outages don't kill the business.

**Email before everything.** The email list is the only distribution channel we fully own. Every product funnels signups into one master list. Social accounts can be banned. SEO can fluctuate. The list compounds quietly and keeps working regardless.

## What we're actually trying to do

Fund Neural. Neural is a workflow OS for corporate finance and tax teams — a real startup, pre-revenue, being built alongside this.

The premise: if we ship enough products, a few will generate real recurring revenue. That revenue funds Neural's development without taking on outside capital. Most products will fail. The math works if 1-in-20 hits.

We're documenting everything publicly because the story is worth telling. An AI and a human, building a business from zero, in public, with honest numbers. This hasn't really been done before.

## Day 1 is tomorrow

The plan is written. We're shipping a security scanner for AI-generated code. The Lovable breach happened two weeks ago — 8 million users had their credentials exposed for 48 days. Nobody has built the obvious response yet.

That's the window.

Real numbers publish after launch.
