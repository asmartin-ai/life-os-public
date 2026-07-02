# Research takeaways

This summarizes what the 2026-06-30 `life-os.zip` research added to the operating notes.

## What was actually new

### 1. Life-OS is a contract/policy layer, not just a planning repo

Earlier notes already said plain files and modular projects. The research sharpened the role of `life-os`: it should define shared contracts and policy boundaries between projects, especially source identity, provenance, action envelopes, capability grants, and receipts.

### 2. Hybrid Markdown + SQLite is the right split

Markdown remains best for human artifacts: decisions, domain maps, handoffs, notes, re-entry. But operational state needs SQLite or equivalent ledgers: connector cursors, receipts, capability grants, sync state, audit history, derived indexes.

### 3. Provenance is a first-class UX feature

`Why this?` is not just ranking explanation. It requires `source_span` evidence: email quote, calendar event, file/source row, URL, account identity, parser/model version when relevant.

### 4. First implementation slice should prove conversion, not capture alone

The strongest proposed slice is: one email thread -> extracted commitment -> action card -> approve/schedule/split/snooze/release -> action receipt. This proves the Life-OS conversion layer and safety boundary.

### 5. Email and calendar need distinct roles

- Email is intake/evidence, not the task system.
- Calendar is execution-time, not the universal plan database.
- Both can produce proposals, but writes should start approval-gated.

### 6. Agent safety needs explicit objects

The research introduced a concrete action flow:

```text
observe -> propose -> approve -> execute -> receipt
```

This implies `capability_grant`, `action_envelope`, and `action_receipt` should exist before broad agent automation.

### 7. Build ActionCard fixtures before an app

The UI recommendation is not â€œpick Reactâ€ or â€œbuild dashboard.â€ Start with static HTML/CSS/JS fixtures for reusable cards: action, source span, why-this, receipt, capture box. Add Playwright screenshots before calling a UI slice done.

### 8. Logistics-style intake is a better metaphor than backlog management

Treat incoming items as freight: collect, cross-dock, route to shelves, show finite active slices, release/reheat stale items. This matches the ADHD design language better than review-everything dashboards.

### 9. Deployment should be local/private first

Sensitive Life-OS core should run on a local/private host first. VPS/Discord/Hermes/Slack-style agents can be edge relays, but should not hold broad email/calendar/filesystem credentials unless there is a strong reason.

## What mostly reinforced existing direction

- Do not build a monolithic productivity app.
- Avoid raw backlog counts and dashboard walls.
- Capture must stay zero-decision.
- PKMS should be important but should not own all Life-OS concepts.
- content-hoarder should integrate by promotion/resurfacing, not processing the whole archive.
- Finance APIs should wait; spreadsheets/exports are enough for early cards.
- Travel/event scrapers should create candidates, not automatic calendar writes.

## Notes updated from this research

- `docs/architecture.md`
- `docs/design-takeaways.md`
- `docs/agent-patterns.md`
- `docs/contracts.md`
- `docs/implementation-roadmap.md`
- `docs/project-map.md`
- `domains/email-commitments.md`
- `domains/calendar-ops.md`
- `domains/agent-host.md`
- `domains/finance.md`
- `domains/travel.md`
- _(identity-access.md is private by default; not included in the public mirror)_
- `domains/pkms.md`
- `domains/content-hoarder.md`
