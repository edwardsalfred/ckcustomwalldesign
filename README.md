# CK Custom Wall Design — Website Rebuild

A full rebuild of [ckcustomwalldesign.com](https://www.ckcustomwalldesign.com/) — research-driven, editorial, scroll-animated. Built with the website-builder skill.

---

## What's in here

```
ckcustom/
├── competitive-analysis.html      ← Client-facing PDF-ready report
├── research/
│   ├── 01-client-brand.md         ← Brand extraction from existing site
│   ├── 02-competitor-analysis.md  ← Top 5 competitors scored + patterns
│   ├── 03-build-brief.md          ← Master design direction + architecture
│   └── 04-quality-audit.md        ← Launch checklist + known items
├── site/                          ← The website
│   ├── index.html                 ← Home
│   ├── about.html                 ← Founder story
│   ├── portfolio.html             ← Project gallery
│   ├── services.html              ← Technique catalog
│   ├── courses.html               ← Workshops + training
│   ├── contact.html               ← Book consultation
│   ├── 404.html
│   ├── css/styles.css             ← Single stylesheet (~480 lines, tokenized)
│   ├── js/main.js                 ← GSAP scroll choreography
│   ├── assets/
│   │   ├── logo.svg
│   │   └── favicon.svg
│   ├── robots.txt
│   └── sitemap.xml
└── README.md
```

---

## Design system

| Token | Value |
|-------|-------|
| Ink | `#0A0A0A` |
| Paper | `#F6F1EA` |
| Card | `#FFFEFA` |
| Gold (CK brand) | `#C9A961` |
| Terracotta (reactive) | `#C45D3E` |
| Muted | `#5C564E` |
| Rule | `#E7E1D6` |
| Display type | Instrument Serif |
| Body type | DM Sans |

Full token set lives in [`site/css/styles.css`](site/css/styles.css) under `:root`.

---

## Tech stack

- Static HTML + CSS + vanilla JS
- GSAP 3.12 + ScrollTrigger via CDN (deferred)
- Zero build step, zero dependencies, zero config
- ~45 KB total transfer (gzipped, excluding images + fonts)

---

## Local preview

```bash
cd site
python3 -m http.server 8080
# open http://localhost:8080
```

Or any static server — `npx serve site`, Live Server in VS Code, etc.

---

## Deployment

### Vercel (recommended)

```bash
cd ckcustom
vercel --prod
```

When prompted, set the project root to `site/`. No framework preset needed — it's static HTML.

### Netlify

```bash
netlify deploy --prod --dir=site
```

### Any static host

Upload the contents of `site/` to the web root. That's it.

---

## Before launch (known items)

1. **Portfolio images** — currently hot-linked from the Wix CDN on the legacy site. Before launch, download them to `site/assets/portfolio/` and self-host. Use descriptive filenames for SEO.
2. **Contact form** — the form in [`site/contact.html`](site/contact.html) is a stub. Wire to Formspree, Netlify Forms, or a Vercel serverless function.
3. **OG image** — reference `/assets/og-image.jpg` in meta tags is not yet present. Generate a 1200×630 hero with the brand palette.
4. **3D hero asset** — a placeholder (`.hero-asset`) sits in the homepage hero, clearly marked with an HTML comment: `<!-- 3D SCROLL ASSET HERE -->`. Generate a scroll-triggered video/3D piece and drop it in.
5. **Founder portrait** — the `.founders-portrait` block currently renders a styled placeholder. Replace with a real portrait of Clinton and Kerry.

---

## Research outputs (deliverables)

- **[Competitive Analysis Report](competitive-analysis.html)** — open in a browser and print to PDF for a client-facing deliverable. Styled in warm paper tones with grain texture, Instrument Serif + DM Sans.
- **[Brand Extraction](research/01-client-brand.md)** — everything pulled from the existing site: colors, fonts, copy verbatim, services, pricing, contact info.
- **[Competitor Analysis](research/02-competitor-analysis.md)** — the top 5 wall-design brands scored across 8 criteria, with patterns of the top 10%.
- **[Build Brief](research/03-build-brief.md)** — the master doc: design direction, site architecture, content framework, conversion playbook.
- **[Quality Audit](research/04-quality-audit.md)** — SEO, accessibility, performance, and client-ready checks.

---

## Credits

Research + build: website-builder skill · April 2026
Fonts: Instrument Serif + DM Sans via Google Fonts
Animation: GSAP 3.12 + ScrollTrigger (free tier)
