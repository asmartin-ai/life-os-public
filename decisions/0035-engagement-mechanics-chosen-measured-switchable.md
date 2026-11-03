# 0035 — Engagement mechanics are user-chosen, measured, and switchable

Date: 2026-10-07

## Status

Accepted (2026-10-07). Supersedes [0026](0026-engagement-red-line.md).

## Context

Decision 0026 made a red line a mandatory gate and rejected streaks, loss framing, variable reward, leaderboards, and escalating nudges. This decision replaces blanket bans with user choice: agents may propose mechanics, but a user decides whether to adopt them. Any mechanic may add friction rather than help, so its effects need to be measured.

## Decision

- Agents may propose engagement mechanics, including those rejected by 0026; the user decides which to enable.
- Each mechanic has an independent switch and configurable settings.
- Capture never gains an extra step. Prompts appear only after capture is saved and can be skipped.
- Measure each mechanic separately. A mechanic with sustained high dismissal rates can be switched off automatically; changes are logged and reversible. Analysis never enables a mechanic on the user's behalf.
- Notification channels are selected by the user and should be easy to disable.

## Consequences

- 0026's red-line test and its substitution table are no longer gates. They stay in git
  history, and an agent may still offer them as options.
- Fixtures and docs that cite 0026 as a gate should cite this ADR instead.
