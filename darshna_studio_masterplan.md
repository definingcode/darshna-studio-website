# Darshna Studio — Build Masterplan

> **Status:** Content locked. Home page UI prototyped in Claude design. Now moving to local build in Claude Code via Antigravity, GitHub push, Vercel deploy, GoDaddy DNS.

---

## 0. What I Need From You Before Starting

### Blocking (need before init)
1. **Logo SVG files** — horizontal lockup, stacked lockup (Ink version), stacked lockup (white version for footer). If you only have the PDF logobook, export these as SVG first.
2. **Domain confirmation** — is it `darshnastudio.in`, `darshnastudio.com`, or something else? Lock the spelling now so meta tags and sitemap are correct.
3. **GitHub destination** — personal account or org? Repo name suggestion: `darshna-studio-web`.
4. **Vercel account** — confirm it exists, or create now (free, GitHub login works).

### Can placeholder, fill before deploy
5. **Phone number** — Darshna Studio's primary contact number
6. **Email** — `hello@darshnastudio.in` or whatever they use
7. **Studio address** — exact Ahmedabad office address, including pincode
8. **Social URLs** — Instagram, YouTube, LinkedIn handles
9. **YouTube showreel video ID** — for the Portfolio page embed
10. **Form backend** — recommend Web3Forms (unlimited free, no signup beyond email). I'll wire it; you'll just paste the access key.
11. **Client logos** — 17 SVG/PNG files for the marquee. If unavailable in time, we ship with the wordmark fallback already designed (text-style logos like `LULU`, `Amneal`, `JSL`, `Royal Arm`)
12. **Heritage About photograph** — the placeholder is too good to remove right away; either deliver a 1990s archive photo or keep the placeholder pattern as a deliberate aesthetic choice (it actually works)

### Nice to have
13. Favicon preference — recommend the `Studio.` dot in gold on Ink, or just the bold `S.`
14. Analytics — Plausible (paid, privacy-first), GA4 (free, intrusive), or none?

---

## 1. Stack & Conventions (locked)

- **Build tool:** Vite 5
- **Framework:** React 18
- **Routing:** React Router DOM v6
- **Styling:** Tailwind CSS v3 + CSS variables for brand tokens
- **Icons:** `lucide-react` (line-style only, used minimally)
- **SEO:** `react-helmet-async` (per-page meta)
- **Forms:** Web3Forms (free, unlimited, no rate limits for brochure sites)
- **Fonts:** Self-hosted woff2 (Inter or Geist) — avoids Google Fonts CLS
- **Deployment:** Vercel (free plan), auto-deploy from GitHub `main`
- **Local dev port:** 4096 (locked in `vite.config.js`)
- **Node version:** 20.x LTS
- **Package manager:** pnpm (faster, cleaner than npm)

---

## 2. Phase-by-Phase Plan

### Phase 0 — Init (15 min)
1. `pnpm create vite@latest darshna-studio-web --template react`
2. Install Tailwind, React Router, Helmet, Lucide
3. Configure `vite.config.js` with port 4096
4. Tailwind config with CSS variable tokens
5. Drop in `CLAUDE.md`, `MEMORY.md`, `README.md`
6. Drop logo SVGs and fonts into `/public`
7. `git init`, push to GitHub

### Phase 1 — Foundation (30 min)
1. `Layout.jsx` shell with `<Nav />`, `<Outlet />`, `<Footer />`
2. Routing for all 5 pages (skeleton components)
3. Global styles, font loading, CSS variables, base typography
4. Build `Nav` and `Footer` (these are global, do them once)
5. Reusable primitives: `Button`, `Container`, `SectionLabel`, `Stat`
6. Verify the dev server runs on port 4096 and routes work

### Phase 2 — Home Page Migration (45 min)
Migrate the Claude design artifact into real componentized React. Order:
1. `Hero` — typographic, off-white background (locked from your toggle)
2. `StatsStrip` — six cells, gold `+` punctuation
3. `LogoMarquee` — CSS keyframe scroll, pause on hover, edge-fade masks
4. `ServicesTeaser` — sticky left + numbered grid right
5. `AboutPreview` — two-column with placeholder slot
6. `PortfolioTeaser` — navy band
7. `ClosingCTA` — ink band with gold button

Each section is its own file in `src/components/home/`. The `Home.jsx` page just composes them.

### Phase 3 — Remaining Pages (90 min, ~20–25 min each)
1. **About** — hero, founding narrative, philosophy, scale & reach grid, team paragraph, closing line
2. **Services** — hero, 7 horizontal service blocks with `01–07` numbering, closing CTA
3. **Portfolio** — hero, intro, YouTube embed (lazy-loaded `youtube-nocookie.com`), CTA
4. **Contact** — hero, two-column form + details, map embed

Reuse `Hero` primitive across all four pages — same scaffolding, different content.

### Phase 4 — Polish (30 min)
1. Mobile responsive sweep at 375px, 768px, 1024px, 1440px
2. Accessibility: focus states (gold outline), `aria-labels`, semantic HTML, `prefers-reduced-motion`
3. SEO meta tags per page (use copy from content doc)
4. Favicon + OG image
5. 404 page (`This frame doesn't exist.`)
6. Form submission tested end-to-end (Web3Forms key wired)

### Phase 5 — Deploy (30 min)
1. Push final commit to GitHub `main`
2. Connect Vercel to repo, deploy to default `*.vercel.app` URL
3. Test live site (forms, links, video embed, mobile)
4. Add custom domain in Vercel dashboard
5. GoDaddy DNS:
   - A record `@` → `76.76.21.21`
   - CNAME `www` → `cname.vercel-dns.com`
6. Wait for SSL provisioning (~5–10 min on Vercel)
7. Verify HTTPS, redirects, all routes

### Buffer (last 30 min)
There's always one last fix. Reserve this hard. Don't fill it with new features.

---

## 3. Folder Structure

```
darshna-studio-web/
├── public/
│   ├── logos/
│   │   ├── darshna-horizontal.svg
│   │   ├── darshna-stacked.svg
│   │   ├── darshna-stacked-white.svg
│   │   └── clients/
│   │       └── *.svg (17 client logos)
│   ├── fonts/
│   │   └── *.woff2
│   ├── favicon.svg
│   └── og-image.jpg
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Nav.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── Layout.jsx
│   │   ├── ui/
│   │   │   ├── Button.jsx
│   │   │   ├── Container.jsx
│   │   │   ├── SectionLabel.jsx
│   │   │   └── Stat.jsx
│   │   ├── home/
│   │   │   ├── Hero.jsx
│   │   │   ├── StatsStrip.jsx
│   │   │   ├── LogoMarquee.jsx
│   │   │   ├── ServicesTeaser.jsx
│   │   │   ├── AboutPreview.jsx
│   │   │   ├── PortfolioTeaser.jsx
│   │   │   └── ClosingCTA.jsx
│   │   └── shared/
│   │       └── ContactForm.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Portfolio.jsx
│   │   ├── Contact.jsx
│   │   └── NotFound.jsx
│   ├── data/
│   │   ├── services.js
│   │   ├── stats.js
│   │   └── clients.js
│   ├── styles/
│   │   └── globals.css
│   ├── App.jsx
│   ├── main.jsx
│   └── routes.jsx
├── CLAUDE.md
├── MEMORY.md
├── README.md
├── tailwind.config.js
├── vite.config.js
├── postcss.config.js
├── package.json
└── .env (Web3Forms access key)
```

---

## 4. Run Commands

```bash
# Install
pnpm install

# Develop (locked to port 4096)
pnpm dev

# Build
pnpm build

# Preview prod build locally
pnpm preview

# Deploy (auto-triggers on git push)
git push origin main
```

---

## 5. vite.config.js — Port 4096 Lock

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 4096,
    strictPort: true, // fails loudly if 4096 is taken instead of silently picking another
    open: true,
  },
})
```

---

## 6. Tailwind Token Config

```js
// tailwind.config.js
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        gold: 'var(--gold)',
        navy: 'var(--navy)',
        ink: 'var(--ink)',
        mid: 'var(--mid)',
        soft: 'var(--soft)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
```

```css
/* globals.css */
:root {
  --gold: #c9a14a;
  --navy: #0a2540;
  --ink: #1c1c1c;
  --mid: #6b6b6b;
  --soft: #e7e7e7;
}
```

---

## 7. GitHub + Vercel + GoDaddy Workflow

### GitHub
1. Create repo: `darshna-studio-web` (private until launch)
2. Initial push: `git remote add origin … && git push -u origin main`

### Vercel
1. New Project → Import from GitHub → select repo
2. Framework preset auto-detects Vite
3. No env vars needed except `VITE_WEB3FORMS_KEY` (paste from Web3Forms dashboard)
4. Deploy — Vercel gives you `darshna-studio-web.vercel.app`

### GoDaddy DNS (when ready to switch)
In GoDaddy DNS Management for the domain:

| Type | Name | Value | TTL |
|---|---|---|---|
| A | @ | 76.76.21.21 | 600 |
| CNAME | www | cname.vercel-dns.com | 600 |

In Vercel → Project → Settings → Domains: add `darshnastudio.in` and `www.darshnastudio.in`. Vercel will verify and issue SSL automatically (Let's Encrypt). Propagation: usually under 30 min, can take up to 24 hours.

---

## 8. Post-Launch Checklist

- [ ] All 5 routes load on production
- [ ] Mobile, tablet, desktop tested on real devices (not just browser resize)
- [ ] Contact form submits successfully and email arrives
- [ ] YouTube embed plays without autoplay
- [ ] Logo marquee loops seamlessly without jump
- [ ] All hover states work on desktop, no broken transitions on mobile
- [ ] 404 page renders for invalid routes
- [ ] Lighthouse: Perf 90+, A11y 95+, Best Practices 100, SEO 100
- [ ] OG image preview works on WhatsApp / LinkedIn / Twitter share
- [ ] Favicon shows in browser tab
- [ ] HTTPS enforced (no HTTP fallback)
- [ ] `www.darshnastudio.in` redirects to `darshnastudio.in` (or vice versa, pick one canonical)
- [ ] Client walkthrough done, sign-off received

---

## 9. Risks That Will Eat Time

- **Custom animations beyond fades.** Don't.
- **Sourcing client logos mid-build.** Have these ready Phase 0 or placeholder cleanly.
- **Heritage About photograph.** Decide upfront: real photo or keep the placeholder as design.
- **Form backend custom build.** Use Web3Forms. Don't roll your own.
- **DNS propagation delays.** Switch DNS in Phase 5, not at the very end. Gives buffer.
- **Antigravity / Claude Code looping on the same fix.** Trust the loop-prevention rules in CLAUDE.md. If stuck on the same error twice, stop, manual-fix, and explain to Claude what you did.

---

## 10. Working Loop Inside Antigravity

Once project is initialized, the loop is:

1. Open Antigravity, point Claude Code at the repo
2. Feed it `CLAUDE.md` (it should auto-read)
3. For each section/page: paste the relevant sub-prompt, let Claude generate, review in browser at `localhost:4096`, refine, commit
4. After each phase, commit with a clear message: `feat(home): stats strip` etc.
5. Don't accumulate uncommitted changes — commit per component, not per phase

---

## 11. Sections You'll Likely Want to Iterate On

You said you don't love a few sections. Most likely candidates from the home design:

- The **coordinate flourish** (`N 23.0225° · E 72.5714°`) — clever but might feel try-hard. Easy to remove.
- The **`Darshna Studio · Est. 1993`** label above the headline — slightly redundant with the navigation.
- The **About preview placeholder pattern** — works as a developer-aesthetic, but might feel unfinished to the client.
- The **`What we shoot.` typography break** — the line break "What we / shoot." is unusual; might want to keep on one line.

We'll handle these inline as we migrate. They're 5-minute tweaks.

---

Ready when you are.
