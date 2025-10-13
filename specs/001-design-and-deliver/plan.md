# Implementation Plan: AI Lahendused Marketing Landing Page

**Branch**: `001-design-and-deliver` | **Date**: 2025-10-13 | **Spec**: [spec.md](./spec.md)
**Input**: Feature specification from `/specs/001-design-and-deliver/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command. See `.specify/templates/commands/plan.md` for the execution workflow.

## Summary

Deliver a localized marketing landing page for AI Lahendused that converts Estonian small-business visitors into consultation leads. Work concentrates on a high-clarity hero with dual CTAs, a four-card services overview, trust-building testimonial content, and a contact form that routes submissions to the existing CRM webhook while meeting accessibility and performance budgets established in the spec and research.

## Technical Context

**Language/Version**: TypeScript 5.x with Next.js 15 App Router  
**Primary Dependencies**: React 19, Next.js 15, Tailwind CSS 4 (theme tokens), Vercel server actions  
**Storage**: None (CRM webhook acts as downstream system of record)  
**Testing**: Manual exploratory runs plus lint; plan for @testing-library/react smoke tests in a follow-up iteration  
**Target Platform**: Modern browsers (desktop and mobile) served via Node.js LTS / Vercel SSR  
**Project Type**: Web single-project (App Router structure)  
**Performance Goals**: First Contentful Paint <= 2 s on mobile; 90% submissions delivered < 5 min; >= 3% form conversion  
**Constraints**: WCAG 2.1 AA focus and contrast, Tailwind token fidelity, hero clarity in <= 30 s, no additional runtimes beyond Next.js defaults  
**Scale/Scope**: Single marketing page supporting roughly 5k monthly visitors with spikes around campaign launches

## Constitution Check

- **PASS - App Router Cohesion**: All new routes and components reside under `src/app/(marketing)/ai-lahendused`; shared layout hooks into existing `layout.tsx` utilities.
- **PASS - TypeSafe React Delivery**: Components typed via TSX modules; form schema validated with typed helper; `npm run lint` enforced before PR approval.
- **PASS - Tailwind Token Fidelity**: Styling derives from `globals.css` theme tokens; no inline hex values permitted.
- **PASS - Deployment Feedback Loop**: Plan requires `npm run lint`, `npm run build`, `npm run start`, a Lighthouse snapshot, and documented manual test notes before review.
- **PASS - Plan-Led Iteration**: This plan completes Phase 0 and Phase 1 outputs; Phase 2 tasks will be generated via `/speckit.tasks` to keep user stories independently shippable.
- **Implementation Constraints Alignment**: Next.js 15 with Turbopack honored; assets sourced from `public/branding/`; server-only APIs limited to Node.js LTS environment.

## Project Structure

### Documentation (this feature)

```
specs/001-design-and-deliver/
├── plan.md              # Implementation plan (this file)
├── research.md          # Phase 0 decisions and alternatives
├── data-model.md        # Phase 1 domain model
├── quickstart.md        # Phase 1 validation guide
├── contracts/
│   └── contact-request.yaml
└── tasks.md             # Phase 2 output (/speckit.tasks)
```

### Source Code (repository root)

```
src/
├── app/
│   ├── layout.tsx
│   ├── globals.css
│   ├── (marketing)/
│   │   └── ai-lahendused/
│   │       ├── page.tsx
│   │       ├── components/
│   │       │   ├── HeroSection.tsx
│   │       │   ├── ServicesSection.tsx
│   │       │   ├── TestimonialSection.tsx
│   │       │   ├── ConsultationForm.tsx
│   │       │   └── SectionNav.tsx
│   │       ├── strings.ts
│   │       └── schema.ts
│   └── api/
│       └── contact-request/route.ts
├── lib/
│   ├── contact/
│   │   └── submitRequest.ts
│   └── validation/
│       └── matchers.ts
public/
├── branding/
│   ├── conversational-agents.svg
│   ├── automation.svg
│   ├── marketing.svg
│   └── custom-solutions.svg
└── testimonials/
    └── sample-client.jpg

# Tests scaffolded in Phase 2
src/__tests__/
└── accessibility/
    └── ai-lahendused.spec.ts
```

**Structure Decision**: Maintain a single Next.js App Router project. The marketing page lives under `(marketing)/ai-lahendused`, reusing shared layout utilities while isolating feature-specific components and schemas for clarity and testing.

## Complexity Tracking

No constitution violations identified; table intentionally left empty. If future iterations introduce deviations, populate this section with justifications.

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
