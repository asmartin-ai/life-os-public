# 0008 — Use Markdown for human artifacts and SQLite for operational ledgers

Date: 2026-06-30

## Status

Accepted

## Context

Decision 0001 established plain files as the source of truth for human-readable planning. The 2026-06-30 research adds that connectors, account identities, sync cursors, action receipts, and agent permissions need a stronger operational ledger than Markdown alone.

PKMS already proves the useful pattern: Markdown is canonical for notes, while SQLite is derived and rebuildable for query/search.

## Decision

Use a hybrid storage model:

- Markdown/plain files for human artifacts: decisions, domain maps, re-entry notes, handoffs, daily notes, source summaries.
- SQLite for operational ledgers: normalized objects, connector state, sync cursors, audit trails, action receipts, capability grants, and derived query indexes.
- Raw external payload snapshots only when needed for repair/debugging, privacy-reviewed by domain.

SQLite databases are implementation artifacts unless explicitly declared canonical for a module's operational ledger.

## Alternatives considered

- Markdown-only for all Life-OS state.
- One central cloud database.
- One mandatory monorepo with a global schema for everything.

## Consequences

- Human-facing architecture stays inspectable.
- Automation can still maintain reliable audit trails and sync state.
- Derived indexes must be rebuildable or clearly labeled as operational canonical ledgers.
- Backups and privacy boundaries become part of module design.

## Follow-up

⏱ Size: Small

▶ Next action: Sketch a minimal `action_receipt` table and matching Markdown receipt example.

✓ Done when: One approved action can be represented both as machine-queryable SQLite data and a human-readable receipt.
