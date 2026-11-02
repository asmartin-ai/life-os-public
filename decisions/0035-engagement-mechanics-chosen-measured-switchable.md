# 0035 — Engagement mechanics are chosen by the owner, measured, and switchable

Date: 2026-10-07

## Status

Accepted (2026-10-07). Supersedes [0026](0026-engagement-red-line.md).

## Context

0026 made a red line a mandatory gate and rejected streaks, loss framing, variable reward,
leaderboards and escalating nudges. The owner decided on 2026-10-07 to drop engagement bans from
the design language and to let agents propose mechanics that the owner picks. The research
menu is a private PKMS research note §6. The owner picked
if–then prompts, streak with freezes, goal-gradient progress bars, proactive Discord pings and
fresh-start resets (a tracked PKMS work order). The owner also said they may not help and may add friction.

## Decision

- Agents may propose any engagement mechanic, including ones 0026 rejected. the owner decides
  which ones ship.
- Every shipped mechanic has its own `enabled` switch and knobs in PKMS `tuning.json`.
- No mechanic adds a step to capture. Prompts appear after a capture is saved, and each one can
  be skipped with one tap.
- Every mechanic emits events to `.ledger/events.db`. A weekly analysis reports on each one.
  It switches a mechanic **off** when the skip/dismiss rate is above 70% over at least 10 shows
  in each of two weeks in a row. The change is reversible and logged in `tuning-changes.jsonl`.
  The analysis never switches a mechanic on.
- Notifications: the today view plus Discord DM pings. No phone push and no email.

## Consequences

- 0026's red-line test and its substitution table are no longer gates. They stay in git
  history, and an agent may still offer them as options.
- Fixtures and docs that cite 0026 as a gate should cite this ADR instead.
