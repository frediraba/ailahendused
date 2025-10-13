# Feature Specification: AI Lahendused Marketing Landing Page

**Feature Branch**: `001-design-and-deliver`  
**Created**: 2025-10-13  
**Status**: Draft  
**Input**: User description: "Design and deliver the AI Lahendused marketing landing page for Estonian small businesses, including a hero section with clear value proposition and CTA buttons (\"Küsi tasuta konsultatsiooni\", \"Broneeri demo\"), service overviews for conversational agents, automation, marketing assistance, and custom solutions, a customer testimonial or case study preview, and a contact form that routes consultation requests. Tone must stay professional, clear, and trustworthy, using the brand palette (black/blue/light accents) and typography consistent with the Tailwind token setup, with copy localized for the Estonian audience."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - Submit consultation request (Priority: P1)

A small business decision-maker visits the landing page, understands the offer, and submits the consultation form after clicking a CTA.

**Why this priority**: Capturing consultation leads is the primary conversion goal of the landing experience.

**Independent Test**: Tester completes the form from the hero CTA and receives confirmation that the request was sent without needing other sections.

**Acceptance Scenarios**:

1. **Given** the visitor opens the landing page, **When** they click "Küsi tasuta konsultatsiooni" in the hero, **Then** the page reveals the contact form without reloading and focuses the first field.
2. **Given** the visitor fills required fields with valid data, **When** they submit, **Then** the system confirms receipt within the page and routes the request to the designated sales channel.
3. **Given** the visitor leaves a required field empty, **When** they attempt to submit, **Then** the form blocks submission and highlights missing inputs with Estonian guidance.

---

### User Story 2 - Understand AI Lahendused value (Priority: P2)

A prospective client scans the hero section to grasp the value proposition, key benefits, and next action in under 30 seconds.

**Why this priority**: Clear messaging ensures visitors stay engaged long enough to explore services and convert.

**Independent Test**: User research participant reviews only the hero content and correctly explains the offering and next step without scrolling.

**Acceptance Scenarios**:

1. **Given** the visitor lands on the page, **When** they view the hero, **Then** they see a concise headline, supporting copy in Estonian, and two CTAs with distinguishable styling.
2. **Given** the visitor is on a mobile viewport, **When** they view the hero, **Then** the layout preserves readability, maintains brand palette usage, and surfaces at least one CTA above the fold.

---

### User Story 3 - Explore services and proof points (Priority: P3)

A prospective client scrolls to the services overview and testimonial to validate offerings before deciding whether to contact the team.

**Why this priority**: Trust-building details reduce friction for audiences unfamiliar with AI agents.

**Independent Test**: Tester scrolls through services and testimonial sections and can articulate each service category plus a proof point without engaging the form.

**Acceptance Scenarios**:

1. **Given** the visitor reaches the services section, **When** they review each card, **Then** they see plain-language descriptions for conversational agents, automation, marketing assistance, and custom solutions with localized copy.
2. **Given** the visitor views the testimonial or case study preview, **When** they read it, **Then** they learn a tangible outcome (e.g., saved time or increased leads) and see attribution (client name or industry).
3. **Given** service content is longer than one screen, **When** the visitor scrolls, **Then** section-level sticky anchors or nav cues help them jump between sections without losing place.

---

### Edge Cases

- Contact form submission with intermittent connectivity must retry gracefully and show guidance if the request cannot be sent.
- If testimonial or case study content is unavailable, the section must show a placeholder statement that invites the visitor to request references.
- Duplicate submissions from the same email within 24 hours must show a friendly warning and confirm the existing request without resubmitting.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: Landing page MUST present a hero section with localized headline, supporting paragraph (<=60 words), and two CTA buttons labelled "Küsi tasuta konsultatsiooni" and "Broneeri demo".
- **FR-002**: CTA buttons MUST either scroll to or open the consultation form without leaving the page and be distinguishable by hierarchy (primary vs secondary styling).
- **FR-003**: Page MUST include a services overview with separate blocks for conversational agents, automation, marketing assistance, and custom solutions, each with one-sentence benefit and one example use case.
- **FR-004**: Page MUST display at least one testimonial or case study summary featuring client identifier, challenge, solution highlight, and quantitative or qualitative outcome.
- **FR-005**: Consultation form MUST collect name, company, email, preferred contact method, and a short project description, require consent to contact, and confirm submission inline with Estonian messaging.
- **FR-006**: Consultation form submissions MUST reach the AI Lahendused sales inbox or CRM within 5 minutes and store a timestamp for follow-up tracking.
- **FR-007**: Page MUST provide navigation aids (e.g., sticky dots or section links) once the user scrolls past the hero to support quick jumps between sections.
- **FR-008**: Page MUST provide accessible focus states, alt text, and Estonian-language labels for all interactive elements, meeting WCAG 2.1 AA contrast thresholds.

### Key Entities *(include if feature involves data)*

- **Consultation Request**: Includes visitor name, company, email, preferred contact method (phone/email), message, consent flag, submission timestamp, and delivery status.
- **Service Offering**: Represents a category (conversational agents, automation, marketing assistance, custom solutions) with localized title, benefit statement, example use case, and icon descriptor.
- **Testimonial Preview**: Contains client name or industry, summary of challenge, delivered solution note, measurable outcome, and optional link to full story.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: 80% of surveyed test participants can describe AI Lahendused' primary value and next step after viewing the hero for under 30 seconds.
- **SC-002**: Consultation form completion rate reaches at least 3% of unique landing-page visitors within the first month post-launch.
- **SC-003**: 90% of valid form submissions are delivered to the sales channel within 5 minutes of user submission.
- **SC-004**: At least 70% of moderated usability test participants rate the service descriptions as "clear" or better on a 5-point clarity scale.
- **SC-005**: Mobile layout maintains a First Contentful Paint under 2 seconds in synthetic tests for Estonian traffic profiles.

## Assumptions

- Marketing team will supply localized copy, testimonial details, and brand palette specifics before implementation starts.
- CRM or email routing endpoint is already available and can receive consultation requests without additional authentication work in this feature.
- Analytics instrumentation for measuring conversion metrics will be handled during planning/implementation and is out of scope for this specification.

