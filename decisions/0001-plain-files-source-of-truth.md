# 0001 — Plain files are the source of truth

Date: 2026-06-29

## Status

Accepted

## Context

`life-os` needs to coordinate multiple projects and life domains without becoming a fragile app silo. The ADHD design language states that plain files should be canonical and derived layers should be regenerable.

## Decision

Use Markdown/plain files as the canonical substrate for `life-os`.

Apps, agents, dashboards, indexes, and automations may be built later, but they must read from and write back to plain files or clearly mark their outputs as derived.

## Consequences

- The repo is immediately useful without building an app.
- Future tools can be replaced without losing the system.
- Structure can evolve gradually.
- Some consistency will be maintained by conventions and agents rather than a database schema.

## Follow-up

⏱ Size: Small

▶ Next action: Choose one domain and fill in its `Source-of-truth files` section.

✓ Done when: One domain file can orient a returning session without opening every related project.
