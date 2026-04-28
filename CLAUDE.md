# CLAUDE.md · Darshna Studio Project Context

> This file is the source of truth for any Claude Code session working on this project. Read it fully before making changes. If you (Claude) drift from these rules, stop and re-read.

---

## Project

**Darshna Studio.** 33-year-old film and photography studio, headquartered in Ahmedabad. Founded 1993. 50+ team. 15,000+ clients including 1,000+ MNCs (Reliance, Adani, SBI, Zydus, Zeiss, Ashok Leyland, Lulu Group, Micron). Pan-India service across 19 states, 6+ countries.

Disciplines: filmmaking, event coverage, expo coverage, product shoot, corporate shoot, corporate events, industrial shoot.

This is not a trendy creative agency. It is a heritage-grade enterprise studio. Every design and code decision must reflect that.

---

## Tech Stack

- **Build:** Vite 5
- **Framework:** React 18 + React Router DOM v6
- **Styling:** Tailwind CSS v3 + CSS custom properties
- **Icons:** `lucide-react` (line-icons only, used minimally)
- **SEO:** `react-helmet-async`
- **Forms:** Web3Forms (access key in `.env` as `VITE_WEB3FORMS_KEY`)
- **Fonts:** Self-hosted woff2 (Inter)
- **Local dev port:** `4096` (locked, do not change)
- **Package manager:** pnpm
- **Node:** 20.x LTS

No external UI libraries. No shadcn, no Radix, no Headless UI. Build every component from scratch. This brand demands restraint, not component-kit defaults.

---

## Brand Tokens (immutable)

```css
:root {
  --gold: #c9a14a;   /* heritage accent. punctuation, never paint */
  --navy: #0a2540;   /* premium surface. Portfolio teaser, callouts */
  --ink: #1c1c1c;    /* primary text and dark surfaces (footer, closing CTA) */
  --mid: #6b6b6b;    /* body text, captions */
  --soft: #e7e7e7;   /* dividers, subtle backgrounds */
}
```

**Color rules:**
- White (`#ffffff`) is permitted as a base canvas.
- **Pure black (`#000000`) is forbidden.** Use `--ink`.
- Gold is **only** used for: button accents, the `Studio.` dot, hover underlines, the closing CTA fill (the one place it's a fill), and the gold "+" in stats.
- Navy appears only on the Portfolio teaser band.
- The closing CTA fill is the single exception where gold is a fill, not an accent.

---

## Voice & Visual Tone

**Voice:** Legacy-derived and adaptive. Heritage gravitas. Premium corporate. Restrained, declarative, MNC-facing. Specifics over superlatives.

The studio is 33 years old. Copy should read like inscription, not advertising. Periods and colons do the work that flourishes would otherwise.

**The voice's defining duality:** *The technology has changed across three decades. The discipline has not.* Lean into that wherever a line tempts you toward generic "premium agency" phrasing. The studio is legacy-anchored but adaptive: cameras change, clients change, scale changes; the studio's discipline does not.

**Visual references:** Apple's enterprise pages, Hermès, Christie's, *The Economist* online, Pentagram studio sites.

**Constraint principles:**
- Generous whitespace. This is a 33-year studio, not a 33-day startup.
- Typographic confidence. Large headlines, calm body.
- Restrained color. Ink and Navy do the work; Gold is punctuation.
- Motion is whisper-quiet. Fades and gentle reveals only.

---

## Prose Rules (HARD)

These apply to every piece of copy you generate, edit, or paraphrase, including UI microcopy, alt text, error messages, comments visible to users, and anything that ships in the product.

- **No em dashes (`—`) anywhere.** Em dashes are an AI-prose tell and they soften copy that should land like stone. Use periods, colons, or restructure into shorter sentences instead.
- **No en dashes (`–`) in prose.** Use "to" for ranges (e.g. "10am to 7pm", not "10am–7pm"). En dashes are permitted only in copyright lines for year ranges and in tabular data where typography demands it.
- No rhetorical questions.
- Banned vocabulary anywhere on the site: *passionate, world-class, trusted partner, innovative, cutting-edge, leverage, navigate, in today's, ever-evolving, journey, unlock, empower, seamless, robust, holistic, synergy*.
- Periods over commas where a flourish would tempt one. Short sentences carry more legacy weight than long ones.
- Numbers over adjectives. "33+ years" is louder than "decades of experience".
- Specifics over superlatives. "Reliance, Adani, Zeiss" is louder than "leading enterprises".

If a line you've written has an em dash in it, rewrite it. If it has banned vocabulary, rewrite it. If it sounds like LinkedIn, rewrite it.

---

## Anti-Patterns (DO NOT PRODUCE)

If you find yourself reaching for any of these, stop:

- Glassmorphism, neon glows, gradient meshes, blurry blobs.
- AI-stock illustration aesthetic, isometric tech-art.
- Floating 3D shapes, magnetic buttons, animated cursors.
- Hover effects that scale, rotate, tilt, or "lift" cards.
- Generic SaaS hero with abstract shapes.
- Carousels, testimonial sliders, "Trusted by" badge rows with checkmarks.
- Bouncy or springy animations on anything.
- Excessive bold weights in body copy.
- Bento grids.
- Centered narrow-column landing-page layouts.
- Emoji icons.
- Hollow LinkedIn-style copy.

---

## Motion Rules

- Page transitions: opacity fade only, 200 to 250ms.
- Scroll reveals: `translateY(8px → 0)` plus opacity 0 to 1, threshold ~15% viewport, stagger 60ms in grids.
- Hover states: opacity, color shift, or single underline. **Never** scale, rotate, skew, or lift.
- Logo marquee: linear timing, 35 to 45s loop duration.
- All transforms and animations must respect `@media (prefers-reduced-motion: reduce)`.

**Forbidden:** parallax, cursor-following effects, animated gradients, kinetic typography, scroll-jacking, lenis-style smooth-scroll trickery.

---

## Folder Structure

```
src/
├── components/
│   ├── layout/      Nav, Footer, Layout
│   ├── ui/          Button, Container, SectionLabel, Stat
│   ├── home/        Section components for the home page
│   └── shared/      ContactForm, etc.
├── pages/           Route components (one per page)
├── data/            Static data (services, stats, clients)
├── styles/          globals.css
├── App.jsx
├── main.jsx
└── routes.jsx
```

Keep components small and single-purpose. If a section file exceeds 150 lines, split it.

---

## Typography

- **Family:** Inter (self-hosted woff2 in `/public/fonts/`)
- **Hero headline:** `clamp(48px, 6vw, 96px)`, weight 700, tracking `-0.02em`, line-height 1.05
- **Section heading:** `clamp(40px, 4.5vw, 64px)`, weight 700, tracking `-0.015em`, line-height 1.1
- **Body:** 16 to 18px, weight 400, line-height 1.6
- **Section label:** 12 to 14px, weight 500, uppercase, letter-spacing `0.08em`, color `--mid`

Headings use `--ink`. Body uses `--mid`. Inverted surfaces (footer, closing CTA, Portfolio teaser) use white headings plus `--mid` body.

---

## Component Conventions

### Buttons
- **Primary:** `--ink` fill, white text, no border-radius (or 2px max, keep it square and editorial), gold underline reveal on hover.
- **Gold (closing CTA only):** `--gold` fill, `--ink` text.
- **Text-link:** No fill, gold underline animation on hover, with a `→` arrow that translates 4px on hover.

### Section labels
Format: `01 / Section Name` followed by optional uppercase descriptor in `--mid`. Used to give every section an editorial number.

### Logo
Two SVG lockups available in `/public/logos/`:
- `darshna-horizontal.svg` for nav.
- `darshna-stacked.svg` for footer (default).
- `darshna-stacked-white.svg` for footer (on Ink background).

The `Studio.` terminating period is part of the brand mark. Never recreate it as a separate text element with a custom dot. The SVG handles it.

---

## Loop Prevention (read this twice)

If a fix doesn't work after **two attempts**, stop iterating. Do not try a third variation of the same approach. Instead:

1. State clearly what you tried, what worked, what didn't.
2. Ask the human to look at the issue manually.
3. Wait for instruction before proceeding.

This rule overrides any other instruction. Looping wastes context and time.

---

## Cache & State

- After visual changes that don't reflect, suggest hard refresh (Cmd+Shift+R) before debugging.
- After installing new packages, suggest restarting the dev server.
- Do not assume HMR caught everything. Sometimes a full restart is needed.
- Tailwind class detection: if a new utility class isn't applying, check `content` paths in `tailwind.config.js`.

---

## Git Workflow

- Commit per component, not per phase.
- Conventional commit format: `feat(home): logo marquee` / `fix(nav): mobile menu close on route change` / `style(footer): adjust spacing`.
- Never commit `.env` files.
- `main` is auto-deployed by Vercel. Only push working code.

---

## Page Intents (one-line summary each)

- **Home:** Establish heritage, scale, and disciplines in a single scroll. Most visitors will only read this page.
- **About:** Deepen the heritage narrative. Single-column editorial. The 33-year story told with restraint.
- **Services:** Seven disciplines. Each one stands on its own. No marketing fluff per service. Just what we deliver.
- **Portfolio:** One showreel video. The work speaks. Don't over-design around it.
- **Contact:** Make it stupid easy to send a brief. Form-first. Direct contact details visible without scrolling.

---

## Content

All copy is locked in `darshna_studio_content.md` (in this repo or alongside it). **Do not paraphrase or rewrite copy.** Use exactly what's written. If a UI element needs a microcopy string not in the doc, mark it `// TODO: needs copy` and ask. When you do generate any new microcopy, all prose rules above apply.

---

## Responsive Breakpoints

| Breakpoint | Range | Behavior |
|---|---|---|
| Mobile | 0 to 767px | Single column, condensed type, stacked nav as overlay |
| Tablet | 768 to 1023px | Two-column layouts collapse to single |
| Desktop | 1024px+ | Full layouts |
| Large | 1440px+ | `max-width: 1280px` container, generous gutters |

Design mobile-first. Tailwind breakpoint names: `md:` for tablet, `lg:` for desktop, `xl:` for large.

---

## Accessibility Floor

- Semantic HTML5 (`<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- All images have `alt`. Decorative SVGs use `aria-hidden="true"`.
- Logo SVGs have `aria-label="Darshna Studio"`.
- Color contrast: AA on body, AAA on headlines.
- Visible focus states (gold outline) on every interactive element.
- Keyboard-navigable in full.
- `prefers-reduced-motion` respected for all animations.

---

## Performance Floor

- Lighthouse target: Perf 90+, A11y 95+, Best Practices 100, SEO 100.
- Lazy-load below-the-fold images and the YouTube embed.
- Use `youtube-nocookie.com` embed URL with `loading="lazy"`.
- Preload self-hosted fonts in `<head>`.
- No render-blocking external CSS or JS.
- Images: WebP/AVIF where possible.

---

## Working Order (for new sessions)

If you are Claude Code starting fresh on this project:

1. Read this file fully.
2. Read `darshna_studio_content.md` for copy.
3. Check `package.json` for installed dependencies before suggesting new ones.
4. Check `tailwind.config.js` for tokens before defining new colors or fonts.
5. Run `pnpm dev` and confirm `localhost:4096` works.
6. Ask the human what specific component or page is being worked on this session.
7. Make small, focused changes. Commit per component.

---

## When in Doubt

If a request feels like it's pulling toward an anti-pattern (animation flourish, trendy effect, AI-stock aesthetic, em dashes in copy), pause and ask. Restraint is the brand. The studio is 33 years old. Build like it.
