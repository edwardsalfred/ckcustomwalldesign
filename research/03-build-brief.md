# Website Build Brief — CK Custom Wall Design

**Version:** 1.0
**Date:** 2026-04-17
**Status:** Awaiting approval

---

## 1. Positioning

> **CK Custom Wall Design turns ordinary walls into the heart of a home** — a founder-led Houston studio where Clinton's artistry and Kerry's design eye produce bespoke wainscoting, geometric panels, Fine Paints of Europe custom finishes, and specialty feature walls that most remodelers can't touch.

The rebuild moves the brand from "local Wix business" → "Texas's editorial-grade custom wall studio." Pricing, founder story, and Fine Paints of Europe pedigree are already that tier; only the site is holding them back.

---

## 2. Design Direction

### Color Palette

| Token | Hex | Use |
|-------|-----|-----|
| `--ink` | `#0A0A0A` | Primary text, headlines, dark sections |
| `--paper` | `#F6F1EA` | Body background — warm ivory |
| `--card` | `#FFFEFA` | Elevated surfaces |
| `--gold` | `#C9A961` | Accents, hairlines, key dividers |
| `--terracotta` | `#C45D3E` | Reactive accent (hovers, highlights, kicker text) |
| `--muted` | `#5C564E` | Body text |
| `--rule` | `#E7E1D6` | Borders, dashed rules |

Keep CK's existing gold/black/ivory identity, extend with terracotta so we are not a black-and-gold carbon copy of Oakmond or Lively.

### Typography

- **Display:** Instrument Serif — for H1/H2, hero statement, pull quotes
- **Body / UI:** DM Sans — for paragraphs, nav, buttons, metadata
- **Italic feature:** Instrument Serif Italic — used sparingly as a rhythmic hook in display type (`Walls that make <em>the house.</em>`)

Loaded via Google Fonts with `display=swap` and preconnect hints.

### Motion & Animation

- GSAP + ScrollTrigger for all scroll choreography
- Hero: 3D asset placeholder (`<!-- 3D SCROLL ASSET HERE -->`, 1200×800) with parallax depth
- Section entrances: split-text fade + slide
- Portfolio grid: images scale-in on scroll
- CTA buttons: magnetic hover + underline reveal
- Horizontal technique-scroller for portfolio categories
- `prefers-reduced-motion` fully respected — animations collapse to plain fades

### Photography / Asset Style

- Warm, naturally lit interior shots
- Editorial crop ratios (4:5, 5:7) alongside widescreen hero
- A dedicated "founder portrait" placeholder in the About section
- Every image gets alt text + lazy loading
- Portfolio images referenced from CK's existing Wix CDN for launch, with instructions to self-host for production

### Avoid

- Generic stock photography
- Template carousels with autoplay
- Gradient-heavy buttons and drop-shadow overload
- Competing CTAs in the same viewport
- Multi-line headlines longer than 8 words

---

## 3. Site Architecture

### Pages to build (Phase 1)

| Page | Purpose | Primary CTA | Secondary |
|------|---------|-------------|-----------|
| **/** Home | Position + convert | Book Consultation | View Portfolio |
| **/about** | Founder story, trust signals | Book Consultation | Read Press |
| **/portfolio** | Browse work by technique + room | Book Consultation | Inquire about a project |
| **/services** | Full technique catalog + FPE | Book Consultation | View relevant work |
| **/courses** | Course signup (separate track) | Enroll | Contact |
| **/contact** | Contact form, phone, address, hours | Submit | Call directly |

(404, privacy stub, sitemap.xml, robots.txt included.)

### Homepage Section Order

1. **Sticky Nav** — logo · services · portfolio · about · courses · `Book Consultation` (solid CTA)
2. **Hero** — headline + one-line sub + primary CTA + 3D asset placeholder
3. **Trust Bar** — Fine Paints of Europe · Founder-Led · Houston + Travel · Press-ready slot
4. **What We Do** — 8 technique cards (Wainscoting, Geometric, Shiplap, Board & Batten, Herringbone, Ceiling, Glitter, FPE Custom Paint)
5. **The CK Method** — 3-step horizontal scroll: Consult · Design · Install
6. **Selected Work** — masonry portfolio preview (9 tiles)
7. **Founders' Story** — Clinton + Kerry portrait-style section with pull quote
8. **Pricing Transparency** — Base / Standard / Custom / Travel tiers
9. **Testimonial** — large editorial quote block
10. **Press / As Seen In** — slot, empty-but-ready
11. **Final CTA** — full-bleed, single action
12. **Footer** — nav · social · address · phone · legal

---

## 4. Content Framework

### Hero Headline — 3 options (pick one)

1. **"Walls that make the house."** — short, editorial, memorable. Recommended.
2. **"The wall is the room."** — designer-literate, confident, claim-style.
3. **"Bespoke walls, built in Houston."** — direct and local; strongest SEO play.

### Hero Sub (pairs with #1)
> Custom wainscoting, geometric panels, and Fine Paints of Europe finishes — handcrafted in Houston by Clinton and Kerry.

### Section copy direction

- **Trust Bar:** four short badges. No paragraphs.
- **Services:** Each technique gets a one-line promise + 2–3 specifics. Example — *"Wainscoting. Measured, mitred, and painted on-site. Board-and-batten, panel-moulded, board-framed, and full-wall classic profiles."*
- **The CK Method:**
  1. **Consult** — 30-minute call, 3D sketch, firm quote.
  2. **Design** — material selection, Fine Paints palette, final schematic.
  3. **Install** — on-site build, finished in 1–5 days, walkthrough before we leave.
- **Founders:** keep existing copy but tighten. Lead with the phrase *"Two registered nurses, one shared obsession with how a wall can change a room."*
- **Pricing:** keep the four tiers CK already uses. Add a one-line "What's included" under each.
- **Final CTA:** one sentence, one button. *"If the wall matters, so does who builds it."*

### SEO Keyword Targets

Primary focus (own these):
- Fine Paints of Europe Houston
- Wainscoting installer Houston
- Custom feature wall Houston
- Accent wall design workshop Houston
- Glitter accent wall Houston

Secondary (compete):
- Custom accent wall Texas
- Luxury feature wall Houston
- Shiplap installer Houston
- Geometric wall design

---

## 5. Conversion Playbook

- **Primary conversion goal:** Book Consultation (Acuity/Calendly-ready link or simple form)
- **Secondary conversion:** Course enrollment (routed to `/courses`)
- **Tertiary conversion:** Phone call (346-538-1119 surfaced in nav + footer)
- **Lead capture:** single-step form — name, email, phone, project description, preferred date
- **Social proof strategy:**
  - Sherre Khan testimonial as the main editorial quote
  - Press-ready slot visible immediately (invites PR mentions)
  - Instagram feed embed (@ckwalldesigns) in footer
  - 25+ project photos surfaced from portfolio
- **Trust signal checklist:**
  - Fine Paints of Europe partnership badge ✓
  - Founder photo + names ✓
  - Transparent pricing tiers ✓
  - Houston address + phone ✓
  - Instagram handle + post preview ✓
  - Press/"As seen in" slot ready ✓

---

## 6. Tech Stack & Performance

- **Stack:** Static HTML + CSS + vanilla JS + GSAP (CDN)
- **No frameworks.** Ships in minutes, easy to deploy anywhere (Vercel-ready).
- **Performance targets:** Lighthouse 90+ across the board
- **Accessibility:** WCAG AA, keyboard nav, reduced-motion support
- **SEO:** per-page title/meta, OG tags, JSON-LD LocalBusiness schema, sitemap.xml, robots.txt
- **Responsive:** mobile-first, breakpoints at 640 / 960 / 1200

---

## 7. Deliverables

```
ckcustom/
├── competitive-analysis.html        ✅ (done)
├── research/
│   ├── 01-client-brand.md           ✅
│   ├── 02-competitor-analysis.md    ✅
│   ├── 03-build-brief.md            ← this file
│   └── 04-quality-audit.md          (after build)
├── site/
│   ├── index.html                   (home)
│   ├── about.html
│   ├── portfolio.html
│   ├── services.html
│   ├── courses.html
│   ├── contact.html
│   ├── 404.html
│   ├── css/styles.css
│   ├── js/main.js
│   └── assets/ (logo SVG, og-image.jpg, favicon, sitemap.xml, robots.txt)
└── README.md
```

---

## APPROVAL CHECKPOINT

**Key decisions to confirm before I start building:**

1. ✅ / ✎  **Hero headline:** go with *"Walls that make the house."* — or pick option 2 or 3.
2. ✅ / ✎  **Palette:** keep ink + gold + ivory and add **terracotta** as reactive accent — or stay pure black/gold.
3. ✅ / ✎  **Primary CTA everywhere:** "Book a Consultation." Courses demoted to secondary nav + own page.
4. ✅ / ✎  **Scope:** all six pages above (home, about, portfolio, services, courses, contact) — or home + about + portfolio + contact to start?
5. ✅ / ✎  **3D hero asset:** I'll leave a clearly-marked placeholder for a scroll-triggered video/3D piece you'll generate separately. OK?
6. ✅ / ✎  **Portfolio images:** use existing Wix CDN URLs for launch, or wait for you to supply higher-res files?

**Say "ready to build"** (or give me your edits to the six points above) and I'll ship Phase 5.
