# Research: AI Lahendused Marketing Landing Page

## Decision Log

### 1. Hero layout & CTA behavior
- **Decision**: Implement a single full-width hero with responsive grid (text + illustration) and anchor-based CTAs that smooth-scroll to the consultation form.
- **Rationale**: Keeps navigation lightweight, satisfies requirement for CTAs without modals, and maintains App Router cohesion by avoiding duplicate entry points.
- **Alternatives Considered**:
  - Modal contact form: rejected due to added accessibility overhead and potential for blocking mobile scroll.
  - Multi-step hero carousel: rejected to preserve clarity within 30 seconds per success criterion SC-001.

### 2. Services overview structure
- **Decision**: Present four service cards in a two-column responsive grid with icons sourced from `public/` and text capped at ~45 words per card.
- **Rationale**: Aligns with Tailwind token fidelity, keeps localized copy scannable, and fulfills FR-003.
- **Alternatives Considered**:
  - Accordion: rejected because it hides content and reduces quick skimming.
  - Single-column long list: rejected for desktop readability and balance with testimonial section.

### 3. Testimonial / case study content pattern
- **Decision**: Use a featured testimonial component with quote, attribution, and metric callout plus optional "Loe case-studyt" link.
- **Rationale**: Meets FR-004 proof requirements and reinforces trust with quantifiable outcome.
- **Alternatives Considered**:
  - Video embed: deferred due to performance risk and lack of provided assets.
  - Multiple rotating testimonials: rejected to avoid motion distraction and copy overhead.

### 4. Contact form submission pipeline
- **Decision**: Build a Next.js server action (or API route fallback) that posts to the existing CRM webhook endpoint and sends a confirmation email.
- **Rationale**: Keeps submission within App Router conventions, satisfies FR-006 delivery expectations, and supports inline confirmation without navigation.
- **Alternatives Considered**:
  - Direct email via `mailto:`: rejected because it lacks tracking and timestamp requirement.
  - Third-party form embed: rejected to maintain brand control and comply with Tailwind styling rules.

### 5. Localization & tone management
- **Decision**: Store Estonian copy in a dedicated `src/app/(marketing)/ai-lahendused/strings.ts` export consumed by components.
- **Rationale**: Ensures consistent localization, simplifies future translation updates, and prevents `any` leakage by typing the strings.
- **Alternatives Considered**:
  - Hard-coded strings across components: rejected due to duplication risk.
  - JSON translation file + runtime parsing: deemed unnecessary for single-language scope.

### 6. Accessibility & performance safeguards
- **Decision**: Enforce WCAG 2.1 AA contrast through Tailwind tokens and test with Lighthouse, ensuring FCP < 2s via image optimization and lazy loading.
- **Rationale**: Supports FR-008 and SC-005 while honoring Tailwind Token Fidelity.
- **Alternatives Considered**:
  - Ad-hoc inline styles: rejected for violating Tailwind token governance.
  - Ignoring performance budget until post-launch: rejected due to deployment feedback loop principle.

## Outstanding Questions
- None; all spec requirements have actionable implementation guidance.

## Verification

### Lighthouse Mobile Audit – 2025-10-13
- Status: NOT RUN (local CLI unavailable in constrained environment). Use `npm run build` + `npx lighthouse http://localhost:3000 --preset perf --view` before release.
- Target metrics: FCP \<= 2 s, LCP \<= 2.5 s, Accessibility score \>= 95.
- Action items:
  - Compress hero illustration to \<= 40 kB (use SVG already optimized).
  - Lazy-load testimonial image via `loading="lazy"` (implemented in component).
  - Revalidate focus-visible states manually after final copy tweaks.
