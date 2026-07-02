# 0011 — First implementation slice is one traceable email commitment card

Date: 2026-06-30

## Status

Proposed — competing with `decisions/0013-content-hoarder-as-first-standard-interface.md` for first implementation slice

## Context

The research recommends not starting by integrating every service. A useful first vertical slice should prove the Life-OS conversion layer: source evidence becomes a proposed next action, the user approves or releases it, and the system writes a receipt.

The later roadmap proposes content-hoarder as the first standard-interface testbed before email because it is stable enough and already has working triage/decay surfaces. This decision remains the proposed first full commitment-management slice, but may not be the first integration slice.

## Decision

The first implementation slice should be:

1. Use PKMS/new-tab/PWA as the visible today/capture surface.
2. Add a shared intake/provenance ledger for captures, source accounts, and receipts.
3. Read or reference PKMS inbox items.
4. Add Gmail read-only extraction for one account.
5. Convert one email into one proposed commitment card.
6. Let the user approve one next action.
7. Optionally propose a Google Calendar block, but do not auto-write.
8. Write a receipt for every accepted/released action.

## Done-when

- A real email becomes a traceable proposed next action.
- The source email/account is visible.
- The action appears in the today/new-tab surface or fixture.
- The user can schedule, snooze, split, or release it.
- The system can explain why it was shown.
- No external write happens without approval.

## Alternatives considered

- Start with a general dashboard.
- Start with finance APIs.
- Start with a Discord/Hermes bot.
- Start with broad PKMS capture only.

## Consequences

- Proves source spans, account identity, commitment extraction, action card UX, and receipts in one narrow flow.
- Requires careful handling of email account identity and privacy.
- Calendar write integration remains approval-gated and optional.

## Follow-up

⏱ Size: Medium

▶ Next action: Decide whether email or content-hoarder is the first implementation slice.

✓ Done when: Either this decision becomes Accepted, or `0013` becomes Accepted and this decision is re-scoped as the first email module slice.
