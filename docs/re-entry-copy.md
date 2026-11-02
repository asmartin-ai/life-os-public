# Welcome-back / re-entry copy candidates

Status: draft for ADR 0023. Written before more surfaces ship (Pass 08 Do-first #3).
Gate: none since 2026-10-07. ADR 0026 (engagement red line) was superseded by ADR 0035; the checks below are a record of the earlier gate.

## Hard constraints (from 0023 + 0026)

Must:

- Name a past accomplishment (logbook, not scoreboard).
- Offer **one** next action (or one card).
- Stay curiosity-framed: "where you left off," not "you failed."
- Keep amnesty as an optional one-tap, reversible gesture — never auto.

Must not:

- Count the pile, overdue total, or "N days away."
- "We miss you" / absence-triggered guilt.
- Streaks, loss framing, social comparison.
- Conceal the mechanism (user would not endorse it if explained).

ADHD addendum (0026): no exploit of RSD, time-blindness guilt, or dopamine variable reward.

## Candidate A — quiet logbook (recommended default)

> Welcome back.
> Last time you promoted a reading takeaway and cleared a small batch.
> Here's one thing from where you left off — or release the gap and start fresh.

**Primary CTA:** Show one card  
**Secondary CTA:** Release everything from the gap (undoable)

### Red-line check (0026)

| Question | Answer |
|---|---|
| User would endorse if fully explained? | Yes — transparent, optional amnesty, one card. |
| Exploits ADHD dopamine / RSD / time blindness? | No — no day-count, no shame, no variable drip. |
| Conceals mechanism? | No — both paths named. |
| System goal over user goal? | No — rationed re-entry, not retention bait. |
| Punishment lever? | No. |

**Verdict:** PASS — default.

## Candidate B — domain-tinted (content-hoarder / promotion)

> Welcome back.
> You already kept a few things that were worth keeping.
> One saved item is ready if you want it — promote, release, or not now.

**Primary CTA:** Open one promotion card  
**Secondary CTA:** Not now (closes; no pile shown)

### Red-line check

| Question | Answer |
|---|---|
| Endorse if explained? | Yes — finite, reason will show on the card. |
| ADHD exploit? | No — "if you want it"; no overdue. |
| Conceal? | No. |
| System over user? | No. |
| Punishment? | No. |

**Verdict:** PASS — use when re-entry lands on the content_resurface channel.

## Candidate C — rejected foil (do not ship)

> You haven't been here in 12 days. 47 items are waiting. Don't break your streak.

### Red-line check

| Question | Answer |
|---|---|
| Endorse if explained? | **No** — manufactured urgency + guilt. |
| ADHD exploit? | **Yes** — time-blindness count, RSD, streak loss. |
| Conceal? | Mechanism is engagement, not care. |
| System over user? | **Yes** — retention. |
| Punishment? | **Yes** — shame + loss. |

**Verdict:** FAIL — kept only as a regression foil for copy review.

## Fixture wiring note

The content-hoarder promotion-card fixture can show Candidate B as an optional
re-entry strip above the first card (lamp mode). It must never show Candidate C
patterns (raw counts, day gaps, streaks).

Amnesty: "Release everything from the gap" stamps a single reversible
`action_receipt` stub in the fixture; it does not touch live systems.

## Open

- Prefer A vs B per channel after first real dormancy return.
- Amnesty granularity (all channels vs current channel) deferred per 0023.
