# 0006 — Source-map Documents, do not bulk-import

Date: 2026-06-29

## Status

Accepted

## Context

Personal document collections can contain sensitive information, including sensitive filenames and account-related material.

The design language favors plain files and retrieval by recognition, but automation must not silently grow a larger pile or mishandle sensitive material.

## Decision

`life-os` will maintain a source map of important folders, but will not bulk-import or summarize `Documents` by default.

Rules:

1. Filename/folder-level mapping is allowed.
2. File contents are read only for a specific user-approved task.
3. Sensitive folders are private by default.
4. Legacy notes are migrated by small batches, not all at once.
5. Derived indexes must mark themselves as derived and regenerable.

## Alternatives considered

- Import all documents into PKMS immediately.
- Ignore `Documents` and only track project repos.

## Consequences

- `life-os` can orient across life areas without turning into a data swamp.
- Sensitive identity documents stay out of routine agent context.
- Migration can be driven by actual use, not taxonomy perfection.

## Follow-up

⏱ Size: Small

▶ Next action: Choose one source folder and create a one-page source map for it.

✓ Done when: One domain file lists the source folder, what it owns, and what not to ingest automatically.
