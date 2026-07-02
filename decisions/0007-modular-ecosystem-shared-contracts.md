# 0007 — Build a modular ecosystem connected by shared contracts

Date: 2026-06-30

## Status

Accepted

## Context

Research from `docs/research/2026-06-30-exploration.md` and `docs/research/2026-06-30-brainstorming.md` argues against building a monolithic life-management app. Existing local projects already have natural ownership boundaries:

- PKMS owns notes, capture, reading queue, and resurfacing.
- content-hoarder owns saved external content and triage state.
- Finance sources begin as spreadsheets and exports.
- Calendar and email providers keep their native records.
- `life-os` owns cross-system architecture, decisions, re-entry, and shared policy.

## Decision

Life-OS will be a modular ecosystem, not one app that absorbs every domain.

Focused tools may own their native state. Shared coordination happens through lightweight contracts:

- `source_account`
- `capture`
- `source_span`
- `task`
- `commitment`
- `action_envelope`
- `action_receipt`
- `capability_grant`
- `handoff_link`
- `daily_briefing` / `today_card`
- `resurface_card`

Projects compose through narrow interfaces: plain files, SQLite, HTTP, JSON, Markdown, CLI commands, and documented local APIs.

## Alternatives considered

- Build one central Life-OS app/database that imports everything.
- Let every project invent its own unrelated integration format.

## Consequences

- Existing tools can remain useful independently.
- Cross-system workflows become possible without deep coupling.
- More care is needed around contract versioning and source provenance.
- The first implementation work should define small contracts before broad UI.

## Follow-up

⏱ Size: Small

▶ Next action: Draft the first `capture` and `source_span` contract examples from real PKMS/content-hoarder inputs.

✓ Done when: Two sample JSON/Markdown fixtures can round-trip from source to action card without losing provenance.
