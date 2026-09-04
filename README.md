# KIM®

An editorial portfolio built around visual illusion and spatial storytelling.
Clean and usable when still — cinematic in motion.

Built with [Vite](https://vitejs.dev/), TypeScript, [GSAP](https://gsap.com/) +
ScrollTrigger, [Lenis](https://lenis.darkroom.engineering/) smooth scroll, and a
single [Three.js](https://threejs.org/) canvas reserved for the KIM signature
effect.

## Architecture

The whole page is mounted from `src/main.ts`. Each visual illusion is a
self-contained module under `src/illusions/` that renders its own markup and
returns a cleanup function, so effects can be added, removed, or disabled (for
reduced-motion / touch) without touching the rest of the site.

```
src/
  main.ts              # entry: mounts sections, boots the scroll + animation core
  core/
    scroll.ts          # Lenis + GSAP ScrollTrigger wiring
    motion.ts          # reduced-motion gate, RAF loop, pointer state
    cursor.ts          # contextual cursor labels
  illusions/           # one file per illusion (self-mounting, self-cleaning)
  styles/              # design system + per-section styles
public/                # static assets copied as-is
```

## Requirements

Node **18–22** (the build tooling needs modern JS features; Node 10 will not
work). This repo pins Node 20 for CI and Netlify. If you use `nvm`:

```bash
nvm use   # reads .nvmrc
```

On Windows, if `node --version` shows an old version, point your shell at a
newer install for the session, e.g.:

```powershell
$env:Path = "C:\tools\nodejs\node-v22.23.2-win-x64;" + $env:Path
```

## Local development

```bash
npm install
npm run dev      # http://localhost:5173
```

## Build

```bash
npm run build    # type-checks, then outputs static site to dist/
npm run preview  # serve the production build locally
```

## Deploy

The build output in `dist/` is a plain static site — no server needed.

### Netlify (primary)

`netlify.toml` is committed, so deployment is zero-config:

1. Push this repo to GitHub.
2. In Netlify: **Add new site → Import from Git** and pick the repo.
3. Netlify reads `netlify.toml` (build `npm run build`, publish `dist`).
   Nothing else to configure.

Or from the CLI:

```bash
npm i -g netlify-cli
netlify deploy --build --prod
```

### GitHub Pages (optional)

A workflow is included at `.github/workflows/deploy-pages.yml`. Enable Pages in
the repo settings with **GitHub Actions** as the source, then push to `main`.
`vite.config.ts` uses `base: "./"` so the same build works from a subpath.

## Accessibility & performance

- Honors `prefers-reduced-motion`: illusions fall back to a clean static layout.
- Touch devices get scroll/touch-driven alternatives instead of pointer effects.
- Vendor libs are code-split; heavy assets lazy-load; GSAP contexts are disposed
  on teardown.
