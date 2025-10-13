---
description: "Task list for AI Lahendused marketing landing page"
---

# Tasks: AI Lahendused Marketing Landing Page

**Input**: Design documents from `/specs/001-design-and-deliver/`
**Prerequisites**: plan.md (required), spec.md (required for user stories), research.md, data-model.md, quickstart.md, contracts/

**Tests**: Tests are optional for this feature. Manual verification via quickstart.md is required per Deployment Feedback Loop.

**Organization**: Tasks are grouped by user story to enable independent implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`
- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions
- Marketing feature lives under `src/app/(marketing)/ai-lahendused/`
- Shared helpers stored in `src/lib/`
- Assets placed in `public/`

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Prepare environment secrets and assets consumed by all stories.

- [x] T001 Update `.env.local.example` with `CRM_WEBHOOK_URL` and `CRM_WEBHOOK_TOKEN` placeholders plus guidance comments for contributors.
- [x] T002 [P] Add branded SVG icons and testimonial placeholder image to `public/branding/` and `public/testimonials/`, matching filenames referenced in design documents.

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Create shared page scaffold and localization resources before story work.

- [x] T003 Scaffold `src/app/(marketing)/ai-lahendused/page.tsx` with section placeholders (hero, services, testimonial, form) and exported anchor IDs.
- [x] T004 [P] Create `src/app/(marketing)/ai-lahendused/strings.ts` exporting typed Estonian copy placeholders for hero, services, testimonial, CTAs referenced by all components.

**Checkpoint**: Base route and localization module ready – user story implementation can now begin in parallel where dependencies allow.

---

## Phase 3: User Story 1 - Submit consultation request (Priority: P1)

**Goal**: Visitors submit the consultation form from hero CTA and receive inline confirmation.

**Independent Test**: From the landing page, click the hero CTA, complete the form, submit, and observe confirmation plus CRM delivery (or duplicate warning) without relying on other sections.

### Implementation for User Story 1

- [x] T005 [US1] Implement consultation schema in `src/app/(marketing)/ai-lahendused/schema.ts` (Zod types, default values, field limits, consent enforcement).
- [x] T006 [P] [US1] Build CRM submission helper `src/lib/contact/submitRequest.ts` that posts payloads defined in `contracts/contact-request.yaml` and returns structured statuses.
- [x] T007 [US1] Create `/api/contact-request/route.ts` server action wrapping the helper, adding duplicate detection (24h window) and mapping CRM failures to API responses.
- [x] T008 [US1] Develop `ConsultationForm.tsx` with controlled inputs, client-side validation, inline success/error states, and offline retry messaging.
- [x] T009 [US1] Integrate form into `page.tsx`, wiring hero CTA anchors to smooth scroll and focus the first form field; include placeholder hero block so CTA remains visible pending US2.

**Checkpoint**: Consultation flow fully functional; capture manual results in PR per quickstart instructions before moving on.

---

## Phase 4: User Story 2 - Understand AI Lahendused value (Priority: P2)

**Goal**: Hero communicates value proposition and next step in under 30 seconds on desktop and mobile.

**Independent Test**: Show only the hero on multiple viewports; participant can explain offering and identify CTAs without scrolling.

### Implementation for User Story 2

- [x] T010 [US2] Populate hero copy constants in `strings.ts` (headline, subtext ≤60 words, CTA labels) following tone guidelines.
- [x] T011 [US2] Implement `HeroSection.tsx` with responsive grid, illustration slot tied to `public/branding/`, accessible CTA hierarchy, and Tailwind token usage.
- [x] T012 [US2] Update `page.tsx` to render the finalized hero component above the fold, ensuring CTA anchors still target the consultation form and mobile layout keeps one CTA visible initially.

**Checkpoint**: Hero communicates value clearly across breakpoints while preserving consultation flow wiring.

---

## Phase 5: User Story 3 - Explore services and proof points (Priority: P3)

**Goal**: Visitors review services and testimonial content, using sticky navigation to browse without losing context.

**Independent Test**: Scroll through services and testimonial sections, confirm understanding of each service plus a proof point, and navigate using section links without implementing other stories.

### Implementation for User Story 3

- [x] T013 [US3] Extend `strings.ts` (or dedicated content module) with service card data, testimonial copy, anchors, and fallback messaging.
- [x] T014 [US3] Build `ServicesSection.tsx` rendering four cards with icons, benefit statements, and example use cases using Tailwind tokens.
- [x] T015 [US3] Create `TestimonialSection.tsx` showcasing highlighted outcome, attribution, optional “Loe case-studyt” link, and placeholder state when content unavailable.
- [x] T016 [P] [US3] Implement sticky `SectionNav.tsx` that reads anchor definitions, supports keyboard navigation, and respects WCAG focus states.
- [x] T017 [US3] Compose final page layout in `page.tsx`, inserting services, testimonial, and section nav components; ensure smooth scrolling and anchor targets meet FR-007.

**Checkpoint**: Services overview, testimonial, and navigation operate independently; story-ready for validation per quickstart checklist.

---

## Phase N: Polish & Cross-Cutting Concerns

**Purpose**: Uphold accessibility, performance, and documentation expectations across all sections.

- [x] T018 Audit hero, services, testimonial, and form components for WCAG 2.1 AA focus/contrast; adjust Tailwind classes and alt text as needed.
- [x] T019 Run Lighthouse mobile audit; append performance summary and action items to `specs/001-design-and-deliver/research.md` under a new “Verification” heading.
- [x] T020 Create `specs/001-design-and-deliver/qa-notes.md` logging quickstart smoke test outcomes (hero clarity, CTA behavior, form submission, duplicate handling, CRM failure simulation).

---

## Dependencies & Execution Order

- **Setup (Phase 1)** → **Foundational (Phase 2)** → unlocks user story work.
- **US1 (P1)** must complete before deploying MVP; US2 and US3 can proceed in priority order once foundational tasks are finished.
- Polish tasks run after all targeted user stories are feature-complete.

## Parallel Opportunities

- Phase 1: T001 and T002 touch separate resources and can run concurrently.
- Phase 2: T003 and T004 operate on different files and can proceed in parallel.
- US1: T005 and T006 can run in parallel; T006 must finish before T007, and T008 waits on T007.
- US3: T014 and T016 modify separate components and may be executed concurrently after T013.

## Implementation Strategy

1. Deliver MVP by finishing User Story 1 (consultation form + CTA flow).
2. Layer in hero clarity (User Story 2) to improve conversion messaging.
3. Add trust-building sections (User Story 3) and final polish for accessibility/performance.
4. Document validation artifacts (qa-notes, Lighthouse results) before requesting review.
