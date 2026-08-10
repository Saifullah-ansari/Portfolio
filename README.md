# Mohammad Saifullah Ansari — Portfolio

A React portfolio built around a "shipping manifest / logistics tracker" concept —
fitting since the real work (dispatch dashboards, vehicle tracking, logistics systems)
is what it's showcasing.

## Quick preview (no install needed)

Open `dist/index.html` via a local server (double-clicking it won't work because of
JS module security rules). Easiest options:

```bash
cd dist
python3 -m http.server 4173
# then open http://localhost:4173
```

or, if you have Node:

```bash
npx serve dist
```

## Development

```bash
npm install
npm run dev       # local dev server with hot reload
npm run build     # production build -> dist/
```

## Before you publish

Open `src/data.js` and:
- Swap `contact.linkedin` and `contact.github` for your real profile URLs
  (the resume didn't include them, so placeholders are in there now).
- Double check all dates, metrics, and project details match what you want public.

## Stack

- React + Vite
- Tailwind CSS v4 (theme tokens in `src/index.css`)
- Framer Motion for the scroll-linked timeline and entrance animations
- Fonts: Space Grotesk (display), Inter (body), JetBrains Mono (labels/data) — loaded from Google Fonts in `index.html`

## Structure

```
src/
  data.js              <- all resume content lives here, edit freely
  App.jsx              <- assembles the page + scroll progress bar
  components/
    Header.jsx          <- sticky nav
    Hero.jsx             <- shipping-label hero
    Manifest.jsx         <- about/summary
    Cargo.jsx            <- skills as crates
    Route.jsx            <- animated timeline (education, certs, experience)
    Shipments.jsx        <- projects as tracked packages
    Dispatch.jsx          <- contact / footer
    Barcode.jsx           <- decorative animated barcode SVG
```
