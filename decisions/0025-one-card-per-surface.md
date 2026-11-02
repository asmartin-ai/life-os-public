# 0025 — One card per surface is a clinical accessibility constraint (cautious default)

Date: 2026-07-07

## Status

Accepted (2026-07-20 — fixture click-test: exactly one card; "Show me another" disabled until explicit act)

## Context

Pass 10 E.2/E.3/E.5: the ADHD design language maps 1:1 onto Barkley's four-deficit model
(inhibition, working memory, emotional self-regulation, self-motivation) — each principle
compensates for a specific deficit. This elevates "one next action per surface" from design
preference to clinical accessibility requirement. Honesty: the composite claim "one card
beats a feed for ADHD users" is a Hypothesis assembled from verified components (E.4) — no
single controlled study exists.

## Decision

- Primary surfaces render exactly one card. No scrollable list, no feed, ever (inhibition
  deficit: open-ended stimulus streams capture attention disproportionately — Barkley,
  Verified).
- "Show me another" is an explicit user gesture — a deliberate-action gate against the
  inhibition deficit. Wanting more is fine; the system never pre-loads it.
- The card is self-contained: reason inline, one suggested next action, no click-through
  required to understand it (working-memory deficit).
- Framing: this is a *cautious default*, not "evidence-based one-card design" (Pass 10
  Q13/Q14 wrap-up language). The expansion path is cheap: if real usage shows one-item
  feels coercive (Pass 01 Open Q4 — Contested: some users prefer 2–3 curated options with
  one-line reasons), an opt-in "show 3" mode is additive and doesn't break the contract.
- Violating surfaces (walls, dashboards of raw state) remain banned per the existing
  design language; derived dashboards are allowed only as non-primary, deliberately-opened
  views.

## Alternatives considered

- 3–5 card shortlist as default — contested and unproven either way; kept as the
  documented opt-in expansion, not the default.
- Ranked feed — banned (doom-surface dynamic, E.2: clinically grounded mechanism +
  community-observed abandonment).

## Consequences

- Every UI fixture starts from the one-card shape.
- The one-vs-three question is answerable later from `ledger_event` act-on rates without
  contract changes.

## Reactivation condition

Revisit the default (not the ban on feeds) if within-subject evidence or own-usage data
shows the one-card default hurts completion.

## Follow-up

⏱ Size: Small

▶ Next action: The content-hoarder promotion fixture renders exactly one card with a "show
me another" affordance.

✓ Done when: The fixture demonstrates the gate (second card requires the gesture).
