<!--
Sync Impact Report
Version change: N/A -> 1.0.0
Modified principles:
- App Router Cohesion (new)
- TypeSafe React Delivery (new)
- Tailwind Token Fidelity (new)
- Deployment Feedback Loop (new)
- Plan-Led Iteration (new)
Added sections:
- Implementation Constraints
- Workflow Expectations
Removed sections:
- None
Templates requiring updates:
- OK .specify/templates/plan-template.md (reviewed, aligns with gates)
- OK .specify/templates/spec-template.md (reviewed, supports independent stories)
- OK .specify/templates/tasks-template.md (reviewed, supports story grouping)
Follow-up TODOs:
- None
-->
# Ailahendused Constitution

## Core Principles

### App Router Cohesion
- All routes, layouts, and metadata MUST live under `src/app` using the Next.js App Router conventions; duplicate entry points are prohibited.
- Shared UI primitives (headers, themes, font wiring) MUST be defined in `layout.tsx` or co-located components to keep hydration predictable.
- Rationale: Consolidating navigation and theming in one place preserves deterministic builds and avoids divergent user flows.

### TypeSafe React Delivery
- Components and utilities MUST compile without TypeScript `any` leakage; introduce explicit types before merging.
- Every change MUST pass `npm run lint`, and lint warnings are treated as build blockers.
- Rationale: Strict typing and linting catch regressions early and ensure our React 19 upgrade path remains stable.

### Tailwind Token Fidelity
- Styling MUST rely on Tailwind 4 utility classes and theme tokens defined in `globals.css`; hard-coded colors or fonts require justification in review.
- Shared design tokens MUST be extended via `@theme inline` rather than inline CSS overrides.
- Rationale: Centralizing styling keeps dark mode, branding, and accessibility coherent across the app.

### Deployment Feedback Loop
- Before requesting review, contributors MUST verify `npm run build` and preview via `npm run start`, logging the outcome in the PR.
- Each PR MUST include manual test notes covering affected flows until automated tests exist.
- Rationale: Build-time validation and documented checks provide deploy confidence without waiting for a CI pipeline.

### Plan-Led Iteration
- Significant work MUST originate from a `/specs/[feature]` package: spec -> plan -> tasks sequence completed before implementation.
- Tasks MUST remain independently shippable per user story to uphold incremental delivery.
- Rationale: Structured planning keeps scope disciplined and enables parallel work without collisions.

## Implementation Constraints
- Framework: Next.js 15 with Turbopack, React 19, Tailwind CSS 4; do not introduce alternative runtimes without governance approval.
- Runtime: Target Node.js LTS; avoid server-only APIs that are unsupported on Vercel edge unless justified in the plan.
- Assets belong in `public/`; dynamic imports of remote assets require performance analysis noted in the spec.

## Workflow Expectations
- Development happens in feature branches named `#[issue]-descriptor`; merge only through reviewed PRs.
- Every spec MUST enumerate independent user stories with acceptance criteria and measurable outcomes.
- Task lists MUST map 1:1 to user stories and declare parallelizable items using the `[P]` flag in `tasks.md`.

## Governance
- Amendments require consensus from maintainers documented in a PR that references impacted specs, plans, and tasks templates.
- Versioning follows SemVer: structural principle changes -> MAJOR, new principles -> MINOR, clarifications -> PATCH.
- Compliance reviews occur during PR checks; reviewers MUST confirm principles, constraints, and workflow expectations are satisfied before approval.
- Archive superseded constitutions in the PR description for historical traceability.

**Version**: 1.0.0 | **Ratified**: 2025-10-13 | **Last Amended**: 2025-10-13
