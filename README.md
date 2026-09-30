# Chouayeethao Cherching — Portfolio

Personal portfolio built with **React 19 + TypeScript + Vite** and **Framer Motion**.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build -> dist/
npm run preview  # serve the build locally
```

## Edit content

All text (profile, experience, projects, skills, credentials) lives in
[`src/data/profile.ts`](src/data/profile.ts). Components only render that data.

- Photo: `src/assets/profile.jpg`
- Downloadable CV: `public/Chouayeethao_CV.pdf`

## Features

- Animated node-network canvas background that reacts to the cursor
- Cursor spotlight, 3D tilt cards with pointer glow, scroll progress bar
- Typewriter role, count-up stats, scroll reveals, parallax hero
- `⌘K` / `Ctrl+K` command palette (jump to sections, open projects, copy email, download CV)
- Filterable projects grid with animated layout and detail modal
- Tabbed experience timeline and skills panel
- Light / dark theme (remembers choice, follows system by default)
- Fully responsive, keyboard accessible, respects `prefers-reduced-motion`

## Deploy

`npm run build` outputs static files to `dist/` — deploy to Vercel, Netlify,
GitHub Pages, Cloudflare Pages, or any static host.
