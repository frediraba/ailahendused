# Repository Guidelines

## Project Structure & Module Organization
- `src/app` uses Next.js App Router; `layout.tsx` defines shared markup; `page.tsx` is the landing view; `globals.css` wires Tailwind 4 theme tokens and custom fonts.
- `public/` contains static SVGs referenced by the home page.
- Config lives at the repo root: `next.config.ts`, `tsconfig.json`, `eslint.config.mjs`, and `postcss.config.mjs`. `.next/` and `node_modules/` are generated; do not commit them.

## Build, Test, and Development Commands
- `npm run dev` launches the Turbopack dev server at `http://localhost:3000`; hot reloads `src/app` changes.
- `npm run build` creates an optimized production bundle inside `.next/`.
- `npm run start` serves the production build; use it for preview testing.
- `npm run lint` runs ESLint with the `next/core-web-vitals` and TypeScript rules; resolve findings before pushing.

## Coding Style & Naming Conventions
- Use 2-space indentation, semicolons, and double quotes (matching existing files) unless escaping requires otherwise.
- Export React components as PascalCase functions; hooks and utilities use camelCase; constants that never change may use SCREAMING_SNAKE.
- Favor Tailwind utility classes for styling; add shared design tokens in `globals.css` instead of duplicating inline values.
- Prefer functional components with hooks; avoid default exports for helpers to simplify refactors and tree-shaking.

## Testing Guidelines
- Automated testing is not yet configured. Document manual verification steps in each PR until a harness exists.
- When introducing tests, scaffold `src/__tests__/` with `@testing-library/react` plus `vitest`; add an `npm test` script in `package.json` alongside the new tooling.
- Call out which user flows are covered by tests versus manual QA to keep reviewers aligned on remaining risk.

## Commit & Pull Request Guidelines
- Keep commit subjects short (<72 chars) and in present tense (e.g., `Add hero CTA copy`); include optional body detail if context helps future readers.
- Reference issues with `#123` where relevant and group related file updates together.
- PRs should include intent summary, screenshots or screen recordings for UI changes, manual test notes, and any follow-up tasks.
- Request review only after lint passes and both `npm run build` and `npm run start` succeed locally; surface known limitations up front.

## Environment & Configuration Tips
- Store secrets in `.env.local` and exclude them from version control; document required keys in the PR introducing them.
- Update `next.config.ts` cautiously—describe breaking changes in the PR summary and verify via `npm run start`.
- Tailwind 4 is imported globally; keep utility usage aligned with the generated design tokens to maintain consistency.

# AGENTS.md – AI jaoks projekti kontekst

Sa oled arendusagent, kelle eesmärk on aidata luua koduleht firmale **AI Lahendused**.

Firma info:
- Missioon: tuua AI agendid väikestele ettevõtetele Eestis, automatiseerida rutiinid, parandada kliendikogemust.
- Teenused: vestlusrobotid, automatiseerimine, turundusabi, kohandatud lahendused.
- Sihtrühm: Eesti väikeettevõtted, kes tahavad optimeerida protsesse ja vähendada töökoormust.
- Tooni stiil: professionaalne, selge, abivalmis, usaldusväärne.
- Bränd: põhitoonid must/sinine/valgus (võid määratleda värvikoodi, logo, font).  
- Peatüübid, CTA: “Küsi tasuta konsultatsiooni”, “Loe case-studyt”, “Broneeri demo”.  

Võta see teave kaasa iga genereerimise sessiooni ja kasuta seda kõigi komponentide ja lehtede kontekstina.
