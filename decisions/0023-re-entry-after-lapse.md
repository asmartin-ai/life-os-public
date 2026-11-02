# 0023 — Re-entry after lapse: logbook, one card, one-tap amnesty, no counts

Date: 2026-07-07

## Status

Proposed — the owner will revisit (2026-07-28).

## Context

Pass 10 G.3 + Pass 08 §2.7/§4.4 (the 2026-07-07 dark-patterns research pass). Lapse
is a normal stage of behavior change (Prochaska & DiClemente, Verified); ADHD relapse rate
is 100% (Pass 01) — dormancy-return is a normal flow, not an error. Pass 08 calls the
welcome-back message "the highest-stakes ADHD design moment."

## Decision

- The re-entry surface shows: (1) accomplishments from before the lapse (Things 3 Logbook
  pattern), (2) ONE card from current state, (3) a one-tap amnesty: "release everything from
  the lapse period" — reversible, per the release-first-class principle. (4) NEVER a count
  of accumulated items, NEVER "you haven't been here in N days."
- The lapse (gap between sessions) and any amnesty are logged in `ledger_event` for offline
  analysis but are invisible to the user during re-entry. No lapse counter exists as a
  user-facing concept.
- The welcome-back copy is written and reviewed BEFORE any surface ships (Pass 08 Do-first
  #3): shows past accomplishment, offers one next action, zero guilt signals,
  curiosity-framed ("here's something from where you left off").
- SR re-entry: FSRS recalculates stability silently; the session is time-boxed, the overdue
  total is never shown; return-to-position, not return-to-count (Pass 01 S3).

## Alternatives considered

- Anki-style accumulated due count on re-entry (documented paralysis trigger, Pass 10 B.6)
  — rejected.
- Absence-triggered "we miss you" re-engagement notifications — banned guilt mechanic
  (Pass 08 §1.9).
- Auto-amnesty without user tap — rejected: release stays a user gesture, reversibility
  preserved.

## Consequences

- Re-entry is a distinct surface with its own rules, designed before the today-view.
- The amnesty gesture needs an undo path.
- The empty-state reward message ("empty states = rewards") is Hypothesis-grade (Pass 10
  E.5) — implement and observe.

## Reactivation condition

Revisit amnesty granularity (all vs per-channel) after first real lapse experience.

## Follow-up

⏱ Size: Small

▶ Next action: Draft 3 candidate welcome-back messages in `docs/re-entry-copy.md` before
the first fixture surface.

✓ Done when: The copy exists and the fixture renders it. (The 0026 red-line gate was superseded by 0035.)
