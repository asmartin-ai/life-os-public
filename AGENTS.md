# AGENTS.md — life-os

This repo is a planning and architecture workspace for the author's personal systems.

## Project intent

- Treat Markdown/plain files as the source of truth.
- Keep apps, dashboards, agents, indexes, and generated views as derived layers.
- Prefer small, reversible edits over reorganizing the whole system.
- Optimize for re-entry after lapses, not perfect organization.

## Design reference

Before designing a workflow, surface, agent response, capture path, task mechanic, or decay/resurfacing behavior, reference:

- `/path/to/projects/adhd-design-language/DESIGN-LANGUAGE.md`

Use that repo as the shared behavioral source of truth. Do not vendor or duplicate its full rules here.

## Local conventions

- New raw thoughts go in `inbox/capture.md` unless a more specific target is obvious.
- Architectural choices go in `decisions/` using `templates/decision.md`.
- New life areas go in `domains/` using `templates/domain.md`.
- When adding action items, include:
  - `⏱ Size`
  - `▶ Next action`
  - `✓ Done when`
- Avoid raw backlog counts, streaks, overdue copy, or guilt-framed language.
- Pause or icebox ambiguous work; do not delete it just to make the system look clean.
