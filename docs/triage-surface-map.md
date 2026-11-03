# Triage surface map

Status: placeholder map for future elaboration.

Purpose: capture what makes content-hoarder's triage surface useful before deciding whether to clone/generalize it into a Life-OS rapid-processing surface and eventually deprecate the content-hoarder-native version.

## Current stance

- Do not split or clone triage yet.
- Start with read-only interface fixtures.
- Map the existing surface first.
- Current leaning: clone/generalize later, then deprecate the content-hoarder-native triage surface only if the clone proves better.

## Source surface

| Source | Location | Notes |
|---|---|---|
| content-hoarder triage view | content-hoarder repository | Existing ADHD-friendly rapid processing surface. |
| Design language | Shared design language | Gesture pricing, no backlog counts, decay/release rules. |
| Life-OS contracts | `docs/contracts.md` | `external_item`, `source_span`, `resurface_card`, `action_envelope`, `action_receipt`. |

## Surface mechanics to map

### Inputs

- Saved content item.
- Notes/captures currently mixed into content-hoarder.
- Future learning material.
- Future email/calendar/finance/travel cards.

### Card anatomy

- Source identity.
- Title/summary.
- Preview/source span.
- Processing cost: reading time, effort, or confidence.
- Why this?
- Primary action.
- Release/ignore action.
- Snooze/not-now action.
- Promote/save-to-PKMS action.
- Receipt/undo state.

### Gesture pricing

- Cheapest: reduce pile / release / done.
- Middle: snooze/not-now.
- Deliberate: keep/preserve/promote.
- Never default: infinite feed or repeated unchanged nags.

### Batch shape

- Finite sprint, not endless queue.
- Completion/empty state should feel like a reward.
- No raw archive counts in default view.

### Candidate reusable domains

| Domain | Possible card type | Notes |
|---|---|---|
| content-hoarder | Saved item promotion/release | First fixture target. |
| PKMS | Capture shaping / resurfaced note | Keep/Obsidian should move here as PKMS matures. |
| Email | Commitment extraction card | Later full commitment workflow. |
| Calendar | Prep/follow-up card | Approval-gated writes. |
| Finance | Subscription/bill review card | Spreadsheet first, no shame copy. |
| Travel | Event/itinerary candidate card | Scraped events stay candidates. |
| Learning | Review/Anki-like prompt | Explore after input surfaces backlog is done. |

## Deferred questions

- Which content-hoarder triage components are domain-specific versus reusable?
- What state machine does the triage card actually use today?
- Which actions need receipts?
- What would make a cloned triage surface worth maintaining separately?
- What needs to happen before deprecating the content-hoarder-native surface?

## Active next action

⏱ Size: Small

▶ Next action: Inspect the content-hoarder triage UI and fill in the current card anatomy and actions.

✓ Done when: This map can identify what a Life-OS `ActionCard` must preserve from content-hoarder before any clone/split work starts.
