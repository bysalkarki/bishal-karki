# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary visitor: a peer, recruiter, collaborator, or prospective client who has arrived
from Bishal Karki's LinkedIn, GitHub, resume, or a search, and is spending a minute or two
deciding whether he is a credible backend engineer worth remembering or contacting.

The site's job is **credibility and presence** — establishing Bishal as a serious
backend/AI engineer through passive networking, not actively selling a service. Success is
the visitor leaving with a clear, favorable impression of his expertise (and, secondarily,
having an easy path to reach him). It is not a lead-generation funnel; conversion pressure
should stay light.

## Product Purpose

A single-page personal portfolio for **Bishal Karki**, a backend developer based in
Kathmandu, Nepal. It presents who he is, what he builds, where he has worked, and how to
reach him, in one scrollable narrative: Hero → Skills → Experience → Projects → About →
Contact. It exists to represent him professionally online and to consolidate his
credibility in one link.

## Positioning

Bishal is a **backend specialist in PHP (Laravel) and Node.js** with real production
experience in high-traffic and security-sensitive domains — travel booking engines
(Bookmundi) and GRC / compliance-automation platforms (Cyberarrow) — and a growing,
hands-on interest in AI integration (chatbots, RAG, LLM tooling). The distinguishing note
is depth on the *engine room* of applications: scalable architecture, APIs, performance,
and security, rather than front-end or generalist framing.

## Operating Context

- Single long-scroll page; navigation jumps between in-page sections (`#home`, `#skills`,
  `#experience`, `#projects`, `#about`, `#contact`).
- Visitors typically arrive from an external profile link and skim top-to-bottom.
- Available actions: view work, download resume (hosted on Google Drive), open the AI chat
  assistant, and reach out via email, phone, LinkedIn, GitHub, or the contact form.
- Canonical domain: `bishal-karki.com.np`. Deployed as a static site (Netlify; originally
  scaffolded in Lovable).

## Capabilities and Constraints

- Static single-page app: Vite + React 18 + TypeScript, shadcn/ui (Radix) + Tailwind CSS,
  Framer Motion, plus AOS (loaded via CDN) for scroll animations. No application backend.
- **AI chat assistant** (Hero): calls the Google Gemini API (`gemini-2.5-flash`) directly
  from the browser. Currently a prototype — the API key is empty and must be injected at
  runtime, and a browser-exposed key is a real constraint if it ships. Treated as an
  **experiment that may be removed**, not a load-bearing part of the positioning.
- **Contact form** (Contact): presentational only — no submit handler or backend wired up.
- Experience data lives in `src/data/experiences.ts`; skills, projects, stats, and contact
  details are hard-coded in their components.
- Resume link and developer photo (`/developer-photo.jpg`, with `/placeholder.svg`
  fallback) are externally sourced assets.

## Brand Commitments

- Name: **Bishal Karki**; initials **BK**.
- Voice today is confident and energetic (bold uppercase display copy, e.g. "I build the
  engines that power apps"). This is the incumbent tone, recorded as observed — not a
  binding constraint on future work.
- No fixed logo, palette, or typographic system is a stated commitment; the current dark /
  emerald+amber / heavy-display look is incumbent design evidence, not a pinned brand rule.

## Evidence on Hand

Real, verified content that future work should preserve:

- **Work history** (`src/data/experiences.ts`): Cyberarrow — Software Engineer, Apr 2025 –
  present (GRC / compliance automation, PHP/Laravel); Bookmundi Aps — Oct 2022 – Apr 2025
  (travel booking engines); Proshore — Jun – Sep 2022; self-employed full-stack, 2018–2022.
- **Contact**: `bishalkarki201@gmail.com`, `+977 9860463168`, Kathmandu, Nepal;
  GitHub `github.com/bysalkarki`, LinkedIn `bishal-karki-817a8a187`.
- **Resume**: hosted PDF (Google Drive link in About).
- **Projects** listed in `src/components/Projects.tsx` (GRC app in Nest.js, stock/inventory
  systems). Note: several `github`/`live` links are `#` placeholders, not live URLs.

Do NOT treat as fact / do not fabricate around:

- The About stats — **"30+ Projects Completed", "20+ Happy Clients", "1000+ Cups of
  Coffee" are placeholders**, illustrative only. Do not present them as verified metrics or
  invent similar numeric claims, testimonials, or client names.
- Specific performance figures in experience highlights (e.g. "40%", "25%", "99.9%") are
  self-reported; keep them only as-is, don't extrapolate new benchmarks.

## Product Principles

- **Credibility over conversion.** Lead with real work and real depth; keep any "hire me"
  pressure light and honest.
- **Backend depth is the story.** Favor evidence of architecture, scale, and security over
  generalist or front-end framing.
- **Never fabricate proof.** Placeholder stats stay clearly non-committal until Bishal
  supplies real numbers; no invented clients, testimonials, or benchmarks.
- **One coherent scroll.** The value is a single, well-paced narrative from Hero to
  Contact — every section earns its place in that story.

## Accessibility & Inclusion

No product-specific accessibility standard has been established. General good practice
applies (the codebase already uses some ARIA labelling in Skills); worth revisiting given
the heavy motion and low-contrast-on-dark patterns in the incumbent design.
