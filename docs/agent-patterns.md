# Agent patterns

Agent behavior for `life-os` should follow the shared ADHD design language.

## Default response shape

1. Reflect the current state briefly.
2. Surface any decision gate.
3. Offer 2–4 concrete options when choice is needed.
4. Ask at most one question.
5. End with one next action.

## Action item shape

```md
⏱ Size: Small / Medium / Large

▶ Next action: The literal next click, command, or 10-minute move.

✓ Done when: Observable completion criterion.
```

## Re-entry command concept

When helping someone re-enter a domain or project, use the relevant, user-authorized context and produce:

- current state
- one blocker or decision gate, if present
- one next action
- optional icebox items only if they matter now

## Capture shaping command concept

When processing captures, the agent should:

- preserve raw captures unless explicitly moved
- group by recognition-friendly themes
- suggest destinations
- avoid requiring a taxonomy decision up front
- leave ambiguous items paused or iceboxed, not deleted
- preserve source account, source app/device, timestamp, and raw reference when available

## Commitment extraction pattern

When extracting work from email, calendar, notes, chats, or documents, the agent should produce a proposed commitment rather than silently creating a task.

Output shape:

```md
Source: account/thread/file/event
Evidence: short quote or source span
Proposed commitment: ...
Why this: ...
Suggested next action: ...
Options: approve / schedule / split smaller / snooze / release
```

## Capability-gated action pattern

Agent side effects follow:

```text
observe -> propose -> approve -> execute -> receipt
```

Rules:

- Read-only and draft/propose actions may be scoped broadly.
- Writes need preview and approval.
- External/destructive/money/account actions need explicit confirmation and a receipt.
- Every executed or refused action should leave an `action_receipt`.
