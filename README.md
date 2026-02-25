# BuggyButBrilliant

> Real products start buggy. The brilliance is in refining them.

A builder-first digital studio website. Production-grade, mobile-first, performance-optimized.

---

## Stack

- **Framework:** React 18 + Vite
- **Styling:** Plain CSS (no Tailwind, no CSS-in-JS)
- **Animations:** CSS transforms & transitions only
- **Fonts:** Syne (display) + DM Sans (body) via Google Fonts

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

---

## Build for Production

```bash
npm run build
npm run preview
```

---

## Project Structure

```
buggybutbrilliant/
├── public/
│   ├── videos/intro.mp4        ← Drop your hero video here
│   ├── images/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Hero/
│   │   ├── Services/
│   │   ├── Buttons/
│   │   └── Layout/
│   ├── styles/
│   │   ├── globals.css
│   │   ├── variables.css
│   │   └── animations.css
│   ├── utils/
│   │   └── performanceHelpers.js
│   ├── App.jsx
│   └── main.jsx
└── index.html
```

---

## Adding Your Hero Video

Place your intro video at:
```
public/videos/intro.mp4
```

Recommended specs:
- Format: MP4 (H.264)
- Duration: 10–30 seconds
- Resolution: 1920×1080 or 1280×720
- Bitrate: 2–4 Mbps (keep under 10MB for fast loading)
- Loop-friendly: start and end frames should match

---

## Deployment

Works out of the box on:
- **Vercel** — `vercel deploy`
- **Netlify** — drag the `dist/` folder or connect repo

---

## Customization

All design tokens are in `src/styles/variables.css`. Change the accent color, typography, spacing, and radius values from one file.

---

© 2025 BuggyButBrilliant. Built with intention.
