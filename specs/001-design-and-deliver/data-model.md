# Data Model: AI Lahendused Marketing Landing Page

## Entities

### Consultation Request
| Field | Type | Rules / Notes |
|-------|------|---------------|
| id | UUID | Generated server-side for deduping and CRM reference |
| fullName | string | Required; 2-80 chars; Estonian characters supported |
| company | string | Required; 2-120 chars |
| email | string | Required; RFC 5322 compliant; lowercase stored |
| phone | string | Optional; E.164 format if provided |
| preferredContact | enum("email","phone") | Required; drives follow-up channel |
| projectSummary | string | Required; 20-600 chars; HTML disallowed |
| consentGranted | boolean | Required; must be true to submit |
| submittedAt | datetime | UTC timestamp recorded on server |
| deliveryStatus | enum("queued","delivered","failed","duplicate") | Defaults to `queued`; updated after CRM webhook response |
| duplicateOf | UUID | Nullable; references existing request when deduped |

**Relationships**: None; each request is standalone but dedupe logic references prior submissions by email within 24h.

### Service Offering
| Field | Type | Rules / Notes |
|-------|------|---------------|
| slug | string | Required; kebab-case identifier (e.g., `conversational-agents`) |
| title | string | Required; localized Estonian label |
| benefit | string | Required; <=120 chars describing value |
| exampleUseCase | string | Required; <=140 chars; plain text |
| icon | string | Required; file path in `public/branding/` |
| order | number | Required; determines display ordering |

**Relationships**: Display-only collection in services section; no cross-entity dependencies.

### Testimonial Preview
| Field | Type | Rules / Notes |
|-------|------|---------------|
| id | string | Required; slug for referencing full case study |
| clientName | string | Required; may use industry if anonymized |
| challenge | string | Required; <=160 chars |
| solution | string | Required; <=160 chars |
| outcome | string | Required; includes qualitative or quantitative metric |
| ctaLabel | string | Optional; default "Loe case-studyt" |
| ctaHref | string | Optional; if absent, CTA hidden |
| image | string | Optional; accessible alt text required when provided |

**Relationships**: Optionally links to expanded case study page when available.

### Navigation Aid (Scroll Anchor)
| Field | Type | Rules / Notes |
|-------|------|---------------|
| id | string | Required; matches section element id |
| label | string | Required; localized text shown in sticky nav |
| target | string | Required; same-page hash link |
| sequence | number | Required; controls order in nav component |

**Relationships**: Each anchor targets hero, services, testimonial, or contact form sections.

## State Transitions
- **Consultation Request**: `queued` → `delivered` after successful CRM POST; `queued` → `failed` when webhook returns non-2xx; `duplicate` when same email within 24h referencing prior request.

## Validation Summary
- All user-facing strings must pass Estonian diacritic support tests.
- Consent checkbox must be true before submission; enforce on client and server.
- Deduplication compares normalized email + 24h window to satisfy edge case requirement.
