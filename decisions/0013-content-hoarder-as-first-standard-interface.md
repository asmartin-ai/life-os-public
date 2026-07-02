# 0013 — Use content-hoarder as the first standard interface testbed

Date: 2026-06-30

## Status

Accepted

## Context

content-hoarder is stable enough to consider as a 1.0 project. It already contains working ADHD-friendly patterns for capture, triage, decay, resurfacing, and saved-content processing. It also has a database that can reveal durable interest signals and candidate recommendation features.

The roadmap proposes using it before email/PKMS dashboard work as the first point of a standard Life-OS ecosystem interface.

## Decision

Use content-hoarder as the first standard-interface testbed.

Accepted clarification: start with read-only integration/interface/fixtures. Do not begin with write-back, LLM mining, or triage extraction.

Start with read-only integration and fixtures:

- `external_item`
- `source_span`
- `interest_signal`
- `resurface_card`
- `action_envelope`
- `action_receipt`

Do not move content-hoarder's database ownership into `life-os`. The first interface should expose selected items and signals with provenance, not the whole archive.

## Modularization questions

- Triage standalone rework is deferred. Current leaning: clone/generalize the triage surface later, then eventually deprecate the content-hoarder-native version if the clone proves better.
- Keep/Obsidian ingestion should move toward PKMS as PKMS matures.
- Interest signals are broadly fair game except NSFW content. Do not mine NSFW content.
- Finish content-hoarder backlog items related to input surfaces before beginning LLM interest-signal mining.
- What parts of the triage surface map cleanly to email, calendar, finance, travel, and learning cards?

## Constraints

- No raw archive counts as primary UI.
- No processing-the-whole-archive workflow.
- No silent LLM mining that cannot answer `why this?`.
- No NSFW content mining.
- No interest-signal mining until content-hoarder input-surface backlog items are finished.
- No writing back to content-hoarder without an action envelope and receipt.
- Synthetic fixtures before live DB adapters.

## Follow-up

⏱ Size: Medium

▶ Next action: Draft the first read-only fixture shape for content-hoarder.

✓ Done when: The fixture captures `external_item`, `source_span`, `interest_signal`, `resurface_card`, and `action_receipt` scope.

## Related issue

- content-hoarder: https://github.com/asmartin-ai/content-hoarder/issues/72
