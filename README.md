# my_portfolio

Personal portfolio built with Next.js (App Router). This repo contains the source for a responsive portfolio website showcasing projects, skills and contact form built with React, Next.js, Tailwind CSS and a small set of components.

## Highlights

- React + Next.js (App Router)
- Tailwind CSS for styling
- Small component library under `src/components` (Landing page, Contact form, UI primitives)
- AOS for scroll animations and Typed.js for typewriter effect

## Quick start (development)

1. Install dependencies

```powershell
npm install
```

2. Start development server

```powershell
npm run dev
```

3. Open the site in your browser:

<http://localhost:3000>

Edit files in `src/` (for example `src/app/page.tsx` and `src/components`) and the dev server will hot-reload.

## Scripts

- `npm run dev` — start development server
- `npm run build` — build for production
- `npm run start` — run the production build locally

(See `package.json` for the exact scripts in this project.)

## Project structure (important files)

- `src/app` — Next.js app entry and routes
- `src/components` — React components used across the site (Landingpage, ContactForm, UI folder)
- `public/` — static assets (images, resume, icons)
- `next.config.ts`, `tsconfig.json` — project config

## Deployment

This project deploys easily to Vercel. Create a new project in Vercel and point it to this repository. Vercel will detect Next.js and set the appropriate build settings.

## Notes / Troubleshooting

- Ensure Node.js (LTS >= 18 recommended) is installed.
- If styles don't load, confirm `tailwind` is configured and `globals.css` is imported in the layout.
- If you change env-specific behavior, add instructions here for environment variables.

## Contributing

Small personal project — PRs are welcome if you want to suggest improvements. Keep changes focused and add a brief description of intent.

## Author / Contact

Ramesh Bojanapu — <bramesh101020@gmail.com>

---

Generated/updated README for improved clarity on running and deploying this project.
