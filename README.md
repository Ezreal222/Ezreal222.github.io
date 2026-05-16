# Portfolio — Yang Zheng

Personal portfolio site, deployed at **[ezreal222.github.io](https://ezreal222.github.io/)**.

Built with React 19 + TypeScript + Vite, styled with Tailwind, animated with Framer Motion.

## Local development

```bash
npm install
npm run dev      # http://localhost:5173
```

## Build

```bash
npm run build    # type-checks with tsc, bundles with Vite into dist/
npm run preview  # serve the production build locally
```

## Deployment

Deployed to GitHub Pages via `.github/workflows/deploy.yml` — every push to `main` triggers a build and publishes the `dist/` artifact. The repo's Pages source must be set to **GitHub Actions** (Settings → Pages → Source).

Because this is a user site hosted at the root of `ezreal222.github.io`, `vite.config.ts` sets `base: '/'`. If this ever moves to a project repo, change `base` to `'/<repo-name>/'`.

## Structure

```
src/
├── components/      # Navbar, Hero, About, Experience, Projects, Skills, Contact, Footer, AuroraBackground
├── data/
│   └── portfolioData.ts   # single source of truth for bio, education, experience, projects, skills
├── hooks/
│   └── animations.ts      # shared Framer Motion variants + useMagneticHover
├── App.tsx
├── main.tsx
└── index.css
```

To update content (projects, experience, skills, bio), edit `src/data/portfolioData.ts` — no component changes needed.

## Stack

- React 19, TypeScript, Vite 8
- Tailwind CSS 3
- Framer Motion, react-intersection-observer, react-simple-typewriter, react-scroll
- ESLint (typescript-eslint, react-hooks, react-refresh)
