# 0004 — Classify note purpose after capture

Date: 2026-06-29

## Status

Accepted

## Context

The dump proposes automatically categorizing note purpose:

- Task/TODO item
- Random thought dump
- Personal/emotional
- Reference/research
- Meme/funny
- Interesting reading link

The design language says humans dump and machines structure. Capture-time classification would add friction; post-capture classification can support routing and resurfacing.

## Decision

Classify note purpose after capture, never before capture.

Use these initial classes as routing hints, not permanent identity:

| Class | Default fate | Canonical home |
|---|---|---|
| Task/TODO item | Shape into one next action or not-now | a domain brief, project file, or PKMS task surface |
| Random thought dump | Keep raw, cluster later | workspace capture file or PKMS inbox |
| Personal/emotional | Private by default; no resurfacing as work | Private journal/source chosen by user |
| Reference/research | Persist and resurface by relevance | PKMS |
| Meme/funny | Preserve/search-only or content-hoarder decay | content-hoarder |
| Interesting reading link | Save/triage; may become PKMS knowledge | content-hoarder, then PKMS if promoted |

## Alternatives considered

- Require users to choose category at capture time.
- Let every capture ramp invent its own labels.

## Consequences

- Capture stays fast.
- Routing can become consistent across Google Keep, Discord, Obsidian, PWA, and desktop shortcuts.
- Sensitive/personal notes need explicit privacy rules before automated processing.

## Follow-up

⏱ Size: Small

▶ Next action: Create 10 sample captures and manually label them with the table above.

✓ Done when: The classes feel sufficient or one missing class is obvious from real examples.
