---
name: Bishal Karki — Backend Systems Report
description: A personal portfolio rendered as a continuous-feed line-printer report from the mainframe era.
colors:
  paper: "#F3EFE3"
  greenbar: "#C7D4B2"
  ink: "#1E1C16"
  ink-soft: "#57523F"
  ledger-red: "#A83A2B"
  blueprint-blue: "#2C5B75"
typography:
  banner:
    fontFamily: "'Courier Prime', 'Courier New', monospace"
    fontSize: "clamp(2.5rem, 9vw, 6rem)"
    fontWeight: 700
    lineHeight: 0.95
    letterSpacing: "-0.02em"
  heading:
    fontFamily: "'Courier Prime', 'Courier New', monospace"
    fontSize: "clamp(1.5rem, 4vw, 2.5rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "0em"
  body:
    fontFamily: "'Courier Prime', 'Courier New', monospace"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "0em"
  label:
    fontFamily: "'Courier Prime', 'Courier New', monospace"
    fontSize: "0.75rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.12em"
  caption:
    fontFamily: "'Courier Prime', 'Courier New', monospace"
    fontSize: "0.6875rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.12em"
rounded:
  none: "0"
  terminator: "999px"
spacing:
  row: "0.5rem"
  block: "1.5rem"
  section: "6rem"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "14px 28px"
    typography: "{typography.label}"
  button-primary-hover:
    backgroundColor: "{colors.ledger-red}"
    textColor: "{colors.paper}"
  button-secondary:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "13px 27px"
  field:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "12px 14px"
---

# Design System: Bishal Karki — Backend Systems Report

## Overview

**Creative North Star: "The Line-Printer Report"**

The surface is one long, continuous-feed report printed by a mainframe line printer and torn from the fanfold stack. It is the pre-web ancestor of what Bishal actually does for a living — data models, batch jobs, run logs, capability listings — rendered in impact ink on green-bar paper. Everything on the page is *printed*, never *displayed*: there is no glass, no glow, no dark screen, no gradient. The visitor is reading a physical document about a systems engineer, produced by the kind of system he builds.

The register is warm, precise, and quietly confident. Density is high where the content is data (skills, experience, projects read as tabular listings) and open at the seams, where perforated tear-lines and fold banners let the report breathe between segments. The one dramatic gesture is the paper itself: alternating green bars, sprocket-hole margins down both edges, and content that strikes onto the page line by line as if the platen were advancing.

This world is a deliberate rejection of the default developer-portfolio look. It is the anti-reference: the incumbent build was near-black with an emerald→amber gradient on every heading, glassmorphism cards, blurred glow blobs, and fade-up-on-everything motion — the median "AI-built" site. None of that survives here.

**Key Characteristics:**
- Green-bar fanfold paper as the literal page material, sprocket margins on both edges
- Courier Prime impact type only — no second typeface family
- Zero border-radius (except canonical flowchart stencils), zero shadows, zero gradients
- Flowchart-stencil shapes (terminator, process, decision, I/O) as real navigation and markers
- One authored motion: the line-printer "print-on" as content advances into view

## Colors

A four-ink print palette on warm paper: black impact ink for text, ledger red for emphasis and stamps, a single process blue for interaction, over two ground tones (paper and green bar).

### Primary
- **Impact Ink** (#1E1C16): Warm near-black, the color of every body character, heading, rule, and stencil outline. Never pure black — it is ink pressed into fibrous paper.

### Secondary
- **Ledger Red** (#A83A2B): Muted oxide/vermilion. Reserved for what a red pen or rubber stamp would mark: the active nav node, the "NOW RUNNING" flag, form-field errors, key totals, and one or two banner accents. Its scarcity is the point.
- **Blueprint Blue** (#2C5B75): The one interactive ink. Links and in-progress/hover states resolve to this blue so red stays reserved for emphasis, not navigation.

### Neutral
- **Report Paper** (#F3EFE3): Warm ivory ground of the "white" fanfold bands and the default page.
- **Green Bar** (#C7D4B2): The desaturated sage band that alternates with paper on data-dense listings, giving printed rows their read-across rhythm.
- **Ink Soft** (#57523F): Warm taupe derived from the ink, for secondary/meta text (dates, run stamps, column captions). Never a neutral gray.

### Named Rules
**The Four-Ink Rule.** The page is printed with exactly four inks (ink, ledger-red, blueprint-blue) on two grounds (paper, green-bar). No fifth color, no gradient, no tint outside this set. Emphasis comes from weight, case, rule-lines, and the green bars — not from new hues.

**The Red-Pen Rule.** Ledger red never navigates and never fills a large area; it marks. If red is doing more than a stamp, a total, an error, or a single live-status flag would do, it is overused. Interaction and hover states resolve to **Blueprint Blue**, not red — routing hover to red would make it "navigate" and dilute its scarcity.

**The Single-Scheme Rule.** This is a printed-paper world: one light scheme only, no dark mode. The page declares `color-scheme: light` (`:root` in `index.css`, `<meta>` in `index.html`) so the browser/OS never inverts the paper to black and hides the ink. There is no `.dark` variant.

## Typography

**Display / Body / Label Font:** Courier Prime (with 'Courier New', monospace fallback) — one family, every role.

**Character:** Courier Prime is the actual impact-printer / Selectric letterform, not a "techy monospace" costume: here the monospace is the literal type of the medium, and it carries real data — dates, stacks, log lines, form fields — in fixed columns the way a printout does. Hierarchy is built from size, weight (400/700), case, and letterspacing, never from a second family.

### Hierarchy
- **Banner** (700, clamp 2.5–6rem, lh 0.95, tracking -0.02em, UPPERCASE): The name and top-of-report title block; the fanfold "banner page."
- **Heading** (700, clamp 1.5–2.5rem, lh 1.1): Section report titles, often prefixed with a segment code (e.g. `SEC 03`).
- **Body** (400, 1rem, lh 1.65, measure 62–72ch): Bio, descriptions, log lines.
- **Label** (700, 0.75rem, tracking 0.12em, UPPERCASE): Column captions, field labels, meta stamps.
- **Caption** (700, 0.6875rem, tracking 0.12em+, UPPERCASE): The smallest step — tech-stack chips, fold labels, meta stamps. The floor of the ramp; nothing prints smaller.

### Named Rules
**The One-Family Rule.** Courier Prime is the only typeface. A second family (a grotesque for headings, a serif for warmth) would break the "single printout" fiction. Weight and case do the work a second family usually does.

## Layout

The page is a single printout column (max-width ~1180px) centered between two persistent **sprocket margins** — narrow vertical tracks of evenly spaced punch holes, as on tractor-feed paper. Sections are segments of the one continuous sheet, divided by **perforated tear-lines**: a dashed rule with a centered fold label (`▽ FOLD ▽ · PAGE n OF 7`).

Within a section, data-dense content (skills, experience, projects) is laid out as printed **listings**: full-width rows with alternating green-bar / paper backgrounds and hairline column rules, tabular and scannable. Prose blocks hold a 62–72ch measure. Vertical rhythm: tight inside a listing (row spacing), generous at section seams (`section` spacing), always more space above a heading than below it.

Responsive: sprocket margins narrow then drop on small screens; two-up listings collapse to stacked rows that keep their green-bar banding; the banner name scales down but stays one line where it can. Container padding tightens on mobile but the fanfold identity (bands, perforations, labels) is preserved, not stripped.

## Elevation & Depth

**Flat by print.** There are no drop shadows anywhere — paper is not lit, it is printed. Depth and separation come entirely from: the alternating green bars, hairline ink rules (1px), the perforation dashes, and the sprocket-hole margins reading as the sheet's physical edge. State changes (hover, active) shift ink/ground or reveal a rule, never a shadow or glow.

### Named Rules
**The No-Shadow Rule.** If a surface needs separating, use a rule-line, a green bar, or whitespace — never a `box-shadow`. A glow or soft-shadowed card is the discarded world leaking back in.

## Shapes

Rectilinear by default: **0px radius** on every panel, field, button, and chip — cut edges, like paper and rules. The single sanctioned exception is the **flowchart-stencil family**, drawn in its canonical geometry: terminator (stadium / full-radius), process (rectangle), decision (diamond), input/output (parallelogram). These shapes are functional wayfinding, not decoration, and their native geometry overrides the 0-radius default *only* for stencil nodes. Borders are 1–2px solid ink hairlines; no dashed borders except the perforation tear-line.

## Components

### Buttons
- **Shape:** Hard rectangle (0 radius), 1–2px ink border; reads as a form/console button.
- **Primary:** Solid Impact Ink fill, Report Paper text, uppercase Label type, padding 14×28px.
- **Hover / Focus:** Fill shifts to Ledger Red; on secondary buttons, the ground inverts to ink. Transition is a fast, unblurred ink swap (~120ms). Focus-visible draws a 2px blueprint-blue outline offset from the edge.
- **Secondary:** Paper ground, ink border and text; hover inverts to ink ground / paper text.

### Chips (tech stack)
- **Style:** Uppercase Label type, 1px ink hairline box, paper or green-bar ground, no radius. Reads as a stamped tag.
- **State:** On row hover the chip border resolves to blueprint-blue.

### Cards / Containers (listing rows & record panels)
- **Corner Style:** 0 radius.
- **Background:** Alternating Green Bar / Report Paper for listing rows; plain paper with a top hairline for record panels.
- **Shadow Strategy:** None (see Elevation).
- **Border:** Hairline ink rules top/bottom on rows; full 1px box on record panels.
- **Internal Padding:** `block` (1.5rem) desktop, tightened on mobile.

### Inputs / Fields
- **Style:** Underlined or boxed with a 1px ink rule, paper ground, Courier body text, 0 radius; label in uppercase Label type above.
- **Focus:** Rule thickens to 2px blueprint-blue; no glow.
- **Error:** Rule and label switch to Ledger Red with a plain-language message; error names the problem and the fix.

### Navigation
- **Style:** A top job-header bar carrying the report title (`BISHAL KARKI`) and a horizontal **flowchart** of section links rendered as stencil nodes. Default nodes are ink outline on paper; the active section's node fills Ledger Red (paper text). Mobile collapses the flow into a stacked stencil list behind a process-box menu button.

### Signature Component — The Fanfold Page
The whole document: persistent sprocket-hole margins on both edges (hidden below `md`), green-bar banding on listings, and perforated tear-line dividers with fold labels (`▽ FOLD ▽ · PAGE n OF 7`) between sections. This is the recurring device that makes every section read as one continuous printout.

### Signature Motion — Print-On
On first scroll into a section, its lines strike in top-to-bottom via a downward clip-reveal with a slight settle (exponential ease-out, ~450ms, staggered by line), as if the platen advanced and the hammers struck. It runs **once** per section, from an already-legible default, and is fully disabled under `prefers-reduced-motion` (content simply present). No other entrance animation exists.

## Do's and Don'ts

### Do:
- **Do** keep the four-ink palette on paper/green-bar grounds; build emphasis from weight, case, rules, and bands.
- **Do** set everything in Courier Prime; let size/weight/case carry hierarchy.
- **Do** render data (skills, experience, projects) as printed listings with green-bar banding and hairline column rules.
- **Do** use flowchart stencils (terminator/process/decision/I/O) in their true geometry for navigation and markers.
- **Do** keep 0 radius on panels, fields, buttons, and chips.
- **Do** confine motion to the single print-on reveal; honor `prefers-reduced-motion`.

### Don't:
- **Don't** use any `box-shadow`, blur, backdrop-filter, or glow — the No-Shadow Rule.
- **Don't** use gradients, gradient text, or a neon/dark-screen ground — that is the discarded AI-slop world.
- **Don't** introduce a second typeface family — the One-Family Rule.
- **Don't** let Ledger Red navigate or fill large areas — the Red-Pen Rule.
- **Don't** present fabricated metrics as verified facts (per PRODUCT.md); illustrative counts must read as self-authored, not audited.
