# 0016 — `attention_budget` is a policy document with the eight-field minimal set

Date: 2026-07-07

## Status

Accepted (2026-07-20 — fixture click-test: card held at 1/1 cap, admitted at breakpoint release)

## Context

Every surfacing channel needs a rationing layer. Pass 10 Track D (verified, peer-reviewed
HCI: Fogarty 2005, Iqbal & Bailey 2010, Pielot 2014) converged on a predict-then-policy
split (D.4): at personal scale without sensors, the ML "predict interruptibility" layer
collapses to calendar/time heuristics; the heavy lifting is policy. This closes Pass 9 G3.

## Decision

`attention_budget` is a per-channel policy document, not an ML output. Minimal field set
(Pass 10 D.5, each field grounded in at least one verified source):

| Field | Note |
|---|---|
| `channel` | e.g. `sr_review`, `commitment_tracker`, `reading_resurface` |
| `max_cards_per_day` | Per-channel daily cap. **Default 0 — opt-in, never opt-out** (D.3) |
| `quiet_hours` | No surfacing in this window |
| `no_renag_until` | Declared focus-period end; hold all cards until then (D.2) |
| `breakpoint_policy` | `coarse_only` / `medium_ok` / `any_transition` — surface at transitions, not during deep work (D.1) |
| `vacation_until` | Zero surfacing until this time; overrides everything |
| `snooze_behavior` | `push_to_next_breakpoint` / `push_to_tomorrow` / `push_to_next_week` |
| `decay_on_snooze` | Default true — snoozed items lose priority silently (no guilt pile) |

Division of labor: the ranking score decides *what* surfaces; the attention budget decides
*when* and *how many*. Extensions (energy matching, location, total active-item cap — Pass 10
Q18) are extensions, not requirements.

## Alternatives considered

- Learned interruptibility model — rejected for now: no sensor data at personal scale;
  calendar heuristics suffice (D.4). Revisit if car/wearable sensors join the mesh.
- Non-zero default caps ("helpful out of the box") — rejected: opt-out is notification
  creep (D.3); Pielot's explicit-opt-in finding is the grounding.
- No budget layer (let the ranker decide everything) — rejected: conflates relevance with
  interruption cost; the two are independently grounded.

## Consequences

- A fresh install surfaces nothing until the user raises a cap — the first-run experience
  needs a deliberate consent moment where channels are enabled one at a time.
- Interaction logic between fields (cap vs breakpoint conflicts) is design work for the
  fixture stage, flagged Moderate in D.5.
- Per-channel rendering constraints (watch/car/email, Pass 10 G.2) compose naturally with
  per-channel budgets.

## Reactivation condition

Revisit the thin-ML stance when a sensor-bearing node (car assistant, wearable) ships.

## Follow-up

⏱ Size: Small

▶ Next action: Include one `attention_budget` instance (channel `content_resurface`,
`max_cards_per_day: 1`) in the content-hoarder promotion-card fixture set.

✓ Done when: The fixture demonstrates a card held back by the budget (cap reached) and
released at a declared breakpoint.
