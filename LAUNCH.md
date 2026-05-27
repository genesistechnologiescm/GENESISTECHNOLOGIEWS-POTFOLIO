# Genesis Site — Local Launch & Deploy

## Prerequisites
- Node.js 20+ installed → https://nodejs.org
- A terminal (PowerShell, Terminal, or VSCode terminal)

---

## Run locally (takes ~2 minutes first time)

```bash
# 1. Open this folder in your terminal
cd "Genesis Technologies/Website/genesis-site"

# 2. Install dependencies (one-time, ~2 min)
npm install

# 3. Start the dev server
npm run dev
```

Then open → **http://localhost:3000**

---

## Build for production

```bash
npm run build
npm run start
```

---

## Deploy to Vercel (recommended — free)

```bash
# Install Vercel CLI once
npm install -g vercel

# Deploy from the genesis-site folder
vercel --prod
```

Vercel will give you a live URL instantly.
For a custom domain, connect it in the Vercel dashboard.

---

## What's inside

| File | Purpose |
|------|---------|
| `app/layout.tsx` | Root layout, fonts, SEO metadata |
| `app/page.tsx` | Page assembly — all sections |
| `components/HeroCanvas.tsx` | Three.js 3D animated Origin Mark |
| `components/Nav.tsx` | Fixed nav with mobile drawer |
| `components/sections/` | All 9 page sections |
| `lib/constants.ts` | Brand data, services, copy — edit here |

---

## Customise content

All editable copy lives in `lib/constants.ts`:
- `BRAND` — company name, email, tagline
- `SERVICES` — all 4 services, descriptions, tiers
- `PROCESS_STEPS` — the 4-step process
- `CAPABILITIES` — capability grid
- `WHY_POINTS` — differentiator cards

---

*Built with Next.js 16 · TypeScript · Tailwind v4 · Framer Motion · Three.js*
