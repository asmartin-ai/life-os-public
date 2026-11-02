# AGENTS.md — life-os

This repository is the public documentation mirror of a private planning and architecture workspace. Treat it as a docs-only repo: Markdown files are the source of truth, and nothing here is runnable.

## Project intent

- Treat Markdown/plain files as the source of truth.
- Keep apps, dashboards, agents, indexes, and generated views as derived layers.
- Prefer small, reversible edits over reorganizing the whole system.
- Optimize for re-entry after lapses, not perfect organization.

## Safety

- Never push, merge, or touch the remote from an agent session without explicit owner approval.
- Keep secrets out of the repo (no `.env`, tokens, keys, or credentials).
- Do not add personal names, personal email addresses, machine paths, or private hostnames. Use `/path/to/…` and "the owner".
- Life-domain briefs, source inventories, prompts, dated research notes, inbox captures, and logs are private by default. Do not add them here.

## Design reference

Before designing a workflow, surface, agent response, capture path, task mechanic, or decay/resurfacing behavior, apply the shared ADHD-friendly design language. The private workspace holds the full rules; the rules actually applied to this system are summarized in `docs/design-takeaways.md`.

Do not vendor or duplicate the full design language here.

## Local conventions

- Architectural choices go in `decisions/` using `templates/decision.md`.
- System-level documents live in `docs/`; the vocabulary is `CONTEXT.md` and `GLOSSARY.md`.
- When adding action items, include:
  - `⏱ Size`
  - `▶ Next action`
  - `✓ Done when`
- Avoid raw backlog counts, streaks, overdue copy, or guilt-framed language.
- Pause or icebox ambiguous work; do not delete it just to make the system look clean.

## Publication

The public mirror is built from an allowlist. Run the validation commands in `docs/publication-safety.md` before any push, and keep the history free of excluded files.
