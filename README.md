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
│   ├── videos/intro.mp4      
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
## Customization

All design tokens are in `src/styles/variables.css`. Change the accent color, typography, spacing, and radius values from one file.

---

© 2026 BuggyButBrilliant. Built with intention.
