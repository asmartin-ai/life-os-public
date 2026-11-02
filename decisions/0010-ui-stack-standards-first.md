# 0010 — Use a standards-first UI stack until complexity earns a framework

Date: 2026-06-30

## Status

Accepted

## Context

The 2026-06-30 UI stack research (private canonical repo) recommends avoiding frontend-tooling sprawl. Life-OS needs small coherent surfaces: capture, action cards, receipt viewers, source inspectors, triage cards, and local admin screens.

## Decision

Default to a boring standards-first stack for initial Life-OS surfaces:

- HTML
- CSS with custom properties/tokens
- small JavaScript modules
- local JSON fixtures
- optional server-rendered HTML
- optional htmx for partial updates
- Playwright for browser and screenshot checks

React/Vite/Tailwind/shadcn/Radix remain escalation paths only when a surface becomes sufficiently stateful or component-heavy.

## Alternatives considered

- Start with React/Vite/Tailwind/shadcn as the default.
- Avoid web UI and use only Markdown/CLI.

## Consequences

- Small tools stay easy to inspect and debug.
- UI consistency must come from shared tokens/components, not a large framework.
- Future framework adoption remains possible when requirements justify it.

## Follow-up

⏱ Size: Small

▶ Next action: Build static fixtures for `ActionCard`, `SourceSpan`, `WhyThis`, `ReceiptToast`, and `CaptureBox` before any full app.

✓ Done when: One HTML fixture page shows default, low-energy, pending-approval, completed, released, and error states.
