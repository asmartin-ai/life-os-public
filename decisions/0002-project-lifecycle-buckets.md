# 0002 — Use lifecycle buckets for projects

Date: 2026-06-29

## Status

Accepted

## Context

`/path/to/projects/PROJECTS.md` already defines a useful project registry with an Active cap, live infrastructure, paused/icebox projects, done projects, reference clones, and a cleanup queue. This matches the design-language principle that pause beats delete and backlogs should not become guilt surfaces.

## Decision

`life-os` will treat `/path/to/projects/PROJECTS.md` as the canonical project registry for code/project lifecycle status.

`life-os` domain files may summarize or link to projects, but should not create a competing status taxonomy.

The lifecycle buckets are:

- Active
- Live infrastructure
- Paused / icebox, with reactivation condition
- Done
- Reference / third-party clone
- Cleanup decision queue

## Alternatives considered

- Rebuild the project registry inside `life-os`.
- Let every domain maintain its own project status list.

## Consequences

- Project state stays close to the project root.
- `life-os` can focus on cross-domain architecture and re-entry.
- Dashboards can derive from `PROJECTS.md` without becoming canonical.

## Follow-up

⏱ Size: Small

▶ Next action: Add `/path/to/projects/PROJECTS.md` as the project registry source in `docs/project-map.md`.

✓ Done when: `life-os` points at the registry instead of duplicating it.
