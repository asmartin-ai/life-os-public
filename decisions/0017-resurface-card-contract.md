# 0017 — `resurface_card` carries a mandatory transparent reason, distinct provenance, and a decay direction

Date: 2026-07-07

## Status

Accepted (2026-07-20 — promotion-card fixture click-test passed: reason inline, source_span on drill-down, decay_direction decreasing)

## Context

`resurface_card` is the substrate every surface renders. Pass 10 Tracks E/F ground its shape
in Barkley's four-deficit model (E.3) and recsys explainability (Tintarev & Masthoff, F.1).
Pass 08 Synthesis rank 3: the reason field is the difference between ethical surfacing
(transparent discovery) and manipulative surfacing (opaque variable reward).

## Decision

- `reason` is mandatory. No reason = manipulative surfacing (Pass 08). Reason is inline,
  short, neutral, guilt-free — always visible (compensates for the self-motivation deficit,
  E.3).
- Adopt the 10-type reason vocabulary from Pass 10 F.5: `due_now`, `deadline_approaching`,
  `waiting_on_you`, `model_surprise`, `related_to_current`, `recently_added`,
  `decay_warning`, `gap_analysis`, `user_requested`, `energy_match`, `random_rediscovery`.
  The three risky types ship in their rephrased forms BY DEFAULT: `waiting_on_you` →
  "Alice's email is next in your commitment queue" (no time-shaming); `decay_warning` →
  "This item is resting — archive it, or tap to keep?" (do-nothing = comfortable archive);
  `gap_analysis` → "Your [domain] brief hasn't been updated recently. Review or mark as
  stable?" (offers "stable" as a positive outcome). `random_rediscovery` used sparingly
  (~1/week delight, low actionability).
- Provenance and explanation are DISTINCT fields (Pass 10 F.4): `reason` = why surfacing
  now, always shown; `source_span` ref = where the content came from, shown on drill-down.
- Transparent explanations only (F.1). If confidence is low, say so. Persuasive
  explanations banned. Contrastive explanations ("why this and not that") banned on the
  primary surface (F.3 — introduces a second item, decision paralysis); allowed only in
  `ledger_event` for offline debugging.
- `decay_direction` per item type (Pass 10 G.5): content = decreasing (staleness lowers
  priority, eventual silent release); commitment = increasing (staleness raises priority up
  to a cap, then release is offered). One flag, two ranking behaviors.
- Card is self-contained (all context to act is on the card — working-memory deficit, E.3)
  and channel-agnostic; rendering adapts per channel (G.2).
- Full ranking-weight breakdown logged per surfaced card in `ledger_event` (F.2) for
  offline re-tuning.

## Alternatives considered

- Opaque ranking with no reason (Siri Suggestions / Clay anti-model, A.1/A.8) — rejected.
- Contrastive explanations on the primary surface — rejected per F.3.
- Collaborative-filtering reasons ("people like you") — irrelevant at personal scale (F.1).

## Consequences

- Every ranking signal must map to a reason type.
- The risky-type rephrasings are untested hypotheses (F.5) — ship as defaults, user-test
  later.
- Ledger logging feeds the S2 operational-ledger spec.

## Reactivation condition

Revisit the contrastive ban only with ADHD-cohort evidence. Revisit the risky-type
phrasings after user testing.

## Follow-up

⏱ Size: Small

▶ Next action: The content-hoarder promotion-card fixture uses reason types
`related_to_current` and `random_rediscovery` with `decay_direction: decreasing`.

✓ Done when: The fixture card renders `reason` inline and `source_span` on drill-down.
