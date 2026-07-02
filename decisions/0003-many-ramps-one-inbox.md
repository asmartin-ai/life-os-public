# 0003 — Many capture ramps, one inbox contract

Date: 2026-06-29

## Status

Accepted

## Context

The dump lists several possible PKMS on-ramps:

- New tab extension
- `Win + N` AutoHotkey shortcut on Windows
- Android PWA
- Google Keep
- Personal Discord server + bot
- Obsidian note

The design language says capture must be under 2 seconds, zero-decision, and context-specific. One ramp per context is allowed, but the machine owns later organization.

## Decision

Support many capture ramps, but require them to obey one inbox contract:

1. Append-only capture.
2. No required tags, project choice, priority, or due date at capture time.
3. Preserve source/context metadata when available.
4. Route into a single shaping queue before anything becomes canonical knowledge or work.
5. Confirm save immediately.

The default local fallback remains `inbox/capture.md` until PKMS capture is ready.

## Alternatives considered

- Pick one universal capture app now.
- Let each capture ramp write directly into final project/domain locations.

## Consequences

- Context-specific capture can be fast without fragmenting the system.
- Later routing/classification becomes the machine's job.
- The architecture can add ramps gradually without redesigning PKMS.

## Follow-up

⏱ Size: Small

▶ Next action: Pick the first capture ramp to wire as a prototype: `Win + N`, Android PWA, or Discord bot.

✓ Done when: One ramp can append a timestamped raw capture to a known inbox without requiring filing.
