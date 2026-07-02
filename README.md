# life-os

A plain-file architecture and planning workspace for coordinating personal systems: PKMS, content-hoarder, future tools, and life-domain workflows.

This repo is intentionally boring at the data layer. Markdown files are the source of truth; apps, agents, dashboards, and automations should be regenerable layers over these files.

## About this repo

This is the **public mirror** of `life-os`. It is built from an allowlisted subset of the private canonical repo with machine paths, account identifiers, and personal captures scrubbed. It exists so the architecture notes and research are readable from anywhere.

- Private-by-default files (`DUMP.md`, the original `inbox/` and `logs/` contents, `domains/identity-access.md`) are not copied here.
- Local paths are genericized to `/path/to/projects/…` and `/path/to/documents/…`.
- The `inbox/`, `logs/`, and `templates/` directories in this mirror are empty templates, not the live capture/log files.
- See `docs/publication-safety.md` for the allowlist and denylist this mirror is checked against.

## Purpose

`life-os` exists to answer:

- What life domains does the system support?
- Which projects own which capabilities?
- What should be captured, resurfaced, decayed, or ignored?
- Where are decision gates blocking progress?
- What is the next concrete action after a lapse?

## Design source

Shared ADHD-friendly design principles are referenced from:

- `/path/to/projects/adhd-design-language/DESIGN-LANGUAGE.md`

Do not copy those rules into this repo as a fork. This repo applies them to the life-management architecture and records project-specific exceptions only when necessary.

## Start here

1. Read `docs/charter.md` for the operating intent.
2. Read `docs/architecture.md` for the system map.
3. Read `docs/roadmap.md` for the current sequence.
4. Read `docs/research-takeaways.md` for what the 2026-06-30 research changed.
5. Add raw thoughts to `inbox/capture.md` with no filing decisions.
6. Convert stable ideas into `domains/*.md` or `decisions/*.md` when useful.

## Current structure

| Path | Purpose |
|---|---|
| `inbox/` | Zero-friction dump zone. No filing, tagging, or prioritizing required. |
| `docs/` | System-level architecture, principles, contracts, roadmap, publication safety, research takeaways, and maps. |
| `domains/` | Life-domain briefs: goals, source files, tools, next actions. |
| `decisions/` | Architectural decision records and unresolved gates. |
| `templates/` | Reusable Markdown templates for future domains and decisions. |
| `logs/` | Done logs, re-entry notes, and session breadcrumbs. |

## Core rule

One next action beats a complete plan. Every actionable item should carry:

- `⏱ Size`
- `▶ Next action`
- `✓ Done when`

## License

MIT — see `LICENSE`. Architecture notes, research, and decision records are provided as-is for reference.
