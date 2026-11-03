# Shared contracts

Status: draft contract inventory extracted from 2026-06-30 research.

Life-OS modules should coordinate through narrow shared contracts instead of merging into one monolithic app.

## Early contracts

| Contract | Purpose | First used by |
|---|---|---|
| `source_account` | Identifies which account/source an item came from and what role that account has. | Email, calendar, content-hoarder, PKMS. |
| `capture` | Append-only raw intake envelope with source/context metadata. | PKMS, Android share, hotkey, Discord, Keep. |
| `source_span` | Evidence pointer or quote explaining where an extracted item came from. | Email commitment card, PKMS promotion. |
| `commitment` | An extracted promise/request/obligation that may become work. | Email, calendar, meetings, notes. |
| `task` | A shaped next action with size and done-when. | Today view, domains, PKMS. |
| `action_envelope` | Proposed agent/tool action before execution. | Calendar proposal, email draft, note edit. |
| `action_receipt` | Human and machine-readable record of an executed/released/refused action. | All approved actions. |
| `capability_grant` | Scoped permission for an agent/tool/action class. | Agent host, connectors. |
| `resurface_card` | Rationed reminder/recognition card with a visible reason. | PKMS, content-hoarder, today view. |
| `ledger_event` | Audit event for generated/changed objects, including parser/model/source state. | Operational SQLite ledger. |
| `intake_route` | Routing decision from raw inbox item to shelf/domain/next action. | Capture shaper, today view. |
| `attention_budget` | Per-channel interruption limits and notification policy. | Notifications, Discord/Hermes, today view. |
| `calendar_proposal` | Intent artifact for a possible calendar write. | Calendar ops, email commitments. |

## Draft object sketches

These are not final schemas. Treat field names as placeholders until fixtures are created and validated.

### `capture`

```json
{
  "id": "capture_...",
  "captured_at": "2026-06-30T12:00:00-05:00",
  "source": "win_hotkey|android_share|discord|pkms|keep|manual",
  "source_account_id": "acct_...",
  "raw_text": "...",
  "raw_ref": "optional external pointer",
  "context": {
    "device": "desktop|phone",
    "app": "optional"
  }
}
```

### `source_account`

```json
{
  "id": "acct_...",
  "provider": "gmail|calendar|discord|github|local_file|manual",
  "account_role": "personal|developer_ai|gaming|alumni|finance|travel|unknown",
  "display_label": "Human-safe label",
  "control_status": "user_controlled|institution_controlled|third_party|unknown",
  "sensitivity": "low|private|sensitive",
  "active": true
}
```

### `source_span`

```json
{
  "id": "span_...",
  "source_type": "email|note|calendar|file|url",
  "source_ref": "provider-specific stable reference",
  "quote": "short visible evidence",
  "location_hint": "thread/date/file path/url fragment",
  "confidence": 0.0
}
```

### `commitment`

```json
{
  "id": "commitment_...",
  "source_span_ids": ["span_..."],
  "source_account_id": "acct_...",
  "summary": "Reply to Alex about Friday logistics",
  "owner": "me|other|unclear",
  "status": "proposed|accepted|scheduled|released|done",
  "suggested_next_action": "Open the thread and draft a two-sentence reply",
  "why_this": "Requested directly in email; blocks travel planning",
  "size": "small",
  "confidence": 0.0
}
```

### `action_envelope`

```json
{
  "id": "env_...",
  "actor": "agent|user|tool",
  "tool_name": "calendar.create_event|email.draft|note.edit|task.complete",
  "side_effect_class": "read_only|draft_propose|confirmed_write|external_destructive",
  "input_hash": "...",
  "preview_diff": "human-readable preview or structured diff",
  "risk_radius": "single_item|account|domain|global",
  "reversibility": "reversible|partially_reversible|external_irreversible",
  "status": "proposed|approved|executed|refused|failed",
  "source_span_ids": ["span_..."]
}
```

### `action_receipt`

```json
{
  "id": "receipt_...",
  "action_envelope_id": "env_...",
  "actor": "user|agent|tool",
  "result": "approved|executed|released|refused|failed",
  "occurred_at": "2026-06-30T12:00:00-05:00",
  "reason": "why this action happened",
  "source_span_ids": ["span_..."],
  "reversibility": "reversible|partially_reversible|external_irreversible",
  "human_summary": "One-line receipt text."
}
```

### `external_item`

First exercised by `fixtures/content-hoarder/item-001.json` (ADR 0013).

```json
{
  "id": "ext_...",
  "origin_system": "content-hoarder|email|calendar|…",
  "origin_ref": "stable pointer in the origin system",
  "source": "reddit|youtube|hackernews|…",
  "source_id": "provider id",
  "kind": "post|video|story|…",
  "title": "…",
  "summary": "short neutral blurb",
  "url": "https://…",
  "author": "optional",
  "created_at": "ISO-8601 or null",
  "captured_at": "ISO-8601",
  "status_at_origin": "inbox|keep|…",
  "processing_cost": {
    "size": "small|medium|large",
    "estimate": "~8 min read",
    "effort": "read|watch|think"
  },
  "content_class": "interesting_reading|reference_research|meme|…",
  "tags_hint": ["optional", "non-binding"]
}
```

### `resurface_card`

See ADR 0017. Provenance (`source_span`) and explanation (`reason`) are distinct.

```json
{
  "id": "card_...",
  "channel": "content_resurface|commitment_tracker|sr_review|…",
  "external_item_id": "ext_...",
  "source_span_id": "span_...",
  "reason_type": "related_to_current|random_rediscovery|due_now|…",
  "reason": "short neutral inline why-this (mandatory)",
  "decay_direction": "decreasing|increasing",
  "suggested_next_action": "one self-contained next step",
  "primary_actions": ["promote", "release"],
  "secondary_actions": ["snooze", "open_source"],
  "working_memory_load": "low|medium|high",
  "confidence": 0.0,
  "ranked_at": "ISO-8601"
}
```

### `attention_budget`

See ADR 0016. Policy document, not an ML score. Default caps are 0 (opt-in).

```json
{
  "id": "budget_...",
  "channel": "content_resurface",
  "max_cards_per_day": 1,
  "quiet_hours": { "start": "22:00", "end": "08:00", "tz": "America/Chicago" },
  "no_renag_until": null,
  "breakpoint_policy": "coarse_only|medium_ok|any_transition",
  "vacation_until": null,
  "snooze_behavior": "push_to_next_breakpoint|push_to_tomorrow|push_to_next_week",
  "decay_on_snooze": true
}
```

## Contract rules

- Every generated action must be able to answer `Why this?`.
- Every extracted commitment needs a source span.
- Every external write needs an action receipt.
- Agents start read-only or draft/propose.
- Contract examples should be tested as fixtures before implementation.
- Email/calendar/finance/travel objects must preserve provider/source identity instead of pretending all obligations are the same.
- Calendar proposals are intent artifacts until approved; scraped events and email commitments must not auto-write calendar state.

## Fixture-first rule

Before connecting live services, build static fixtures for:

- **content-hoarder saved item** → `external_item` + `source_span` + `resurface_card` + `attention_budget` + `action_receipt` — **present**: `fixtures/content-hoarder/` (static UI in `promotion-card/`)
- one email thread -> one `commitment` -> one `action_envelope` -> one `action_receipt`
- one calendar event -> one prep/follow-up card
- one finance spreadsheet row -> one subscription/bill review card
- one travel event candidate -> one itinerary/calendar proposal card

Fixtures should render in the action-card UI before any connector is trusted.
