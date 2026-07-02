# 0009 — Gate agent actions by capability, preview, approval, and receipt

Date: 2026-06-30

## Status

Accepted

## Context

Life-OS will eventually touch email, calendar, finance, files, agents, and external services. These include high-friction or irreversible actions. The research recommends agent actions flow through explicit typed envelopes and receipts.

This aligns with the existing safety posture: agents should default to observe/propose, not silently write.

## Decision

All agent-driven side effects must follow this boundary:

```text
observe -> propose -> approve -> execute -> receipt
```

Actions are categorized by side-effect class:

| Tier | Examples | Default policy |
|---|---|---|
| Read-only | search, summarize, inspect, list agenda | Allowed when scoped. |
| Draft/propose | draft email, propose task, extract commitment, propose event | Allowed with visible source/reason. |
| Confirmed write | create event, send email, edit note, complete task | Requires preview and approval. |
| Destructive/external | delete, cancel, grant access, spend money, broad send | Requires explicit confirmation, dry run where possible, and receipt. |

Every executed action writes an `action_receipt` with source, reason, actor, time, scope, and result.

## Alternatives considered

- Give a trusted personal agent broad write access.
- Rely on tool-specific confirmation prompts only.

## Consequences

- Slower early automation, but much higher trust.
- Receipts become a first-class Life-OS artifact.
- Capability grants can be narrowed per source/account/domain.
- Rejected or unsafe actions can become regression fixtures.

## Follow-up

⏱ Size: Small

▶ Next action: Define the minimum fields for `capability_grant`, `action_envelope`, and `action_receipt`.

✓ Done when: A calendar-block proposal can be represented without granting general calendar write access.
