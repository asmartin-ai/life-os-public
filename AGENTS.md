# AGENTS.md — life-os

## Project intent

- Treat Markdown and plain files as the source of truth; apps, indexes, agents, and views are derived layers.
- Optimize for re-entry after lapses, not perfect organization.
- Keep contracts and architecture in `docs/contracts.md` and `docs/architecture.md`.

## Safety

- Keep secrets, private account details, and personal data out of public material.
- Respect the publication boundary in `docs/publication-safety.md`.
- In the private canonical workspace, read `docs/ops/agent-workspace.md` before any work; it contains additional mandatory safety and workflow rules. That file is not part of the public mirror.

## Conventions

- When adding an action item, include its size, the literal next action, and an observable completion criterion.
- Preserve provenance and require approval for sensitive side effects.

## Checks

- Install dependencies with `bun install --frozen-lockfile` where the full workspace is available.
- Run `bun run check` for the full workspace, or `bun scripts/check-markdown.ts` for Markdown links in the public mirror.
