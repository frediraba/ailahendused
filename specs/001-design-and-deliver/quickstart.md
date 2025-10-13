# Quickstart: AI Lahendused Marketing Landing Page

## Purpose
Guide contributors through verifying the landing page experience for Estonian small-business prospects and validating consultation routing.

## Prerequisites
- Node.js 20 LTS installed locally.
- Repository dependencies installed via `npm install`.
- Access to CRM webhook secrets stored in `.env.local` (`CRM_WEBHOOK_URL`, `CRM_WEBHOOK_TOKEN`).
- Estonian marketing copy package delivered under `src/app/(marketing)/ai-lahendused/strings.ts`.

## Environment Setup
1. Duplicate `.env.local.example` to `.env.local` if present; otherwise create `.env.local` with required CRM values.
2. Run `npm run dev` from project root. Turbopack serves the app at `http://localhost:3000`.
3. Navigate to `http://localhost:3000/` (landing page path determined during implementation; update anchor if nested route is used).

## Smoke Test Checklist
- **Hero clarity**: Confirm localized headline, supporting copy (<60 words), and both CTAs appear above the fold on desktop and mobile.
- **CTA behavior**: Click "Küsi tasuta konsultatsiooni" and verify smooth scroll + focus on the contact form. Repeat on mobile simulator.
- **Services grid**: Ensure four service cards render with consistent styling and Tailwind tokens (check dark mode toggle if enabled).
- **Testimonial**: Verify testimonial text, attribution, and outcome value display without overflow; follow "Loe case-studyt" if provided.
- **Accessibility**: Use keyboard navigation to tab through interactive elements, confirming visible focus states and Estonian aria labels.
- **Performance budget**: Run Lighthouse mobile audit; confirm First Contentful Paint ≤ 2s and no critical accessibility regressions.

## Consultation Form Verification
1. Fill the form with valid sample data and submit.
2. Observe inline confirmation message and network request to `/api/contact-request` returning HTTP 202.
3. Inspect CRM webhook logs (or mocked endpoint) to ensure payload matches contract schema and timestamp recorded.
4. Attempt a duplicate submission using the same email within 24h window; expect duplicate warning and 409 response.
5. Test failure handling by temporarily disabling CRM webhook URL; confirm user-facing error guidance appears and no success state triggers.

## Handoff Notes
- Capture manual test notes (success/failure) and attach to PR per Deployment Feedback Loop principle.
- Document any copy or asset gaps in `specs/001-design-and-deliver/research.md` if new information emerges.
- Before requesting review, run `npm run build` followed by `npm run start` to ensure production parity.
