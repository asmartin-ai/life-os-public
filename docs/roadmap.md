# Roadmap

Status: working roadmap from 2026-06-30 planning.

This roadmap prioritizes making `life-os` safe to work on anywhere, then using content-hoarder as the first real integration point before email and PKMS surfaces.

## Phase 0 — Safe portable repo

Goal: make the planning/research repo available from other machines without leaking sensitive notes, account identities, local paths, or private source maps.

Related replication issues:

- content-hoarder: https://github.com/asmartin-ai/content-hoarder/issues/73
- PKMS: https://github.com/asmartin-ai/pkms/issues/1

Recommended shape:

```text
private canonical repo
  -> scrub/allowlist/export gate
  -> public sanitized mirror OR private collaborator repo
```

### Options

| Option | What it means | Pros | Risks / costs | Current fit |
|---|---|---|---|---|
| Public sanitized GitHub repo | Public repo contains only scrubbed notes/research/decisions. | Works anywhere, easy cloning, easy sharing, public accountability. | Requires strict scrub gate; public history is hard to undo if something leaks. | Good as a mirror, not raw canonical. |
| Private GitHub repo | GitHub auth controls view/clone. | Easiest on-the-go/work access; no public leak by default. | Still hosted by GitHub; work policies may matter; secrets still should not be committed. | Best default for canonical remote. |
| Public repo with encrypted files | Sensitive files encrypted with `age`, `sops`, or similar. | Public shell with private sections. | Key management friction; bad mobile/work UX; encrypted blobs are not useful for casual viewing. | Useful only for rare sensitive appendices. |
| Self-hosted Git with password/SSO | Forgejo/Gitea/bare Git behind Tailscale, Cloudflare Access, or basic auth. | Password/SSO-style access; more control. | More ops; less convenient; must secure backups/TLS/auth. | Later option if GitHub private is not acceptable. |
| Password-protected static site | Publish rendered notes behind auth. | Good for reading. | Not a normal clone/push workflow. | Optional read-only companion, not repo replacement. |

### Safety gate

Before any public mirror:

- No raw email addresses or account IDs.
- No personal documents or private source content.
- No `.env`, DBs, tokens, cookies, keys, exports, or data dumps.
- No sensitive local paths beyond intentional public examples.
- No private account inventory.
- History scan passes, not just working tree scan.
- Public mirror generated from an allowlist, not `git add -A` from the private repo.

⏱ Size: Medium

▶ Next action: Run `docs/publication-safety.md` against a generated public-safe export and classify findings.

✓ Done when: The export has a repeatable pass/fail check for whether it is safe to publish.

## Phase 1 — content-hoarder integration and modularization

Goal: use content-hoarder as the first real ecosystem boundary because it is stable enough and already embodies capture/triage/decay patterns.

Related issue: https://github.com/asmartin-ai/content-hoarder/issues/72

Accepted scope: start read-only with interface contracts and fixtures. Defer triage standalone rework for now.

Workstreams:

1. Define a read-only standard interface over content-hoarder data.
2. Prototype a `content-hoarder promotion card` fixture.
3. Map the triage surface before reworking it. Current leaning: clone/generalize it later, then eventually deprecate the content-hoarder-native version if the clone proves better.
4. Re-evaluate Obsidian/Keep ingestion: these should move toward PKMS as PKMS matures.
5. Finish content-hoarder input-surface backlog items before LLM interest-signal mining.
6. Explore LLM mining of interest/taste signals from the content database without exposing archive counts, creating shame surfaces, or using NSFW content.

⏱ Size: Medium

▶ Next action: Draft the standard interface for one content-hoarder item: `external_item`, `source_span`, `interest_signal`, `resurface_card`, and `action_receipt`.

✓ Done when: A fixture can show one saved item as a Life-OS card with source, why-this, reading/processing cost, and release/promote actions.

## Phase 2 — shared action-card / triage surface

Goal: generalize the useful content-hoarder triage mechanics into reusable Life-OS surfaces. Start by elaborating `docs/triage-surface-map.md` before cloning or splitting anything.

Candidate surfaces:

- rapid content triage
- learning-material review
- Anki-like learning prompts
- email commitment cards
- calendar prep/follow-up cards
- finance review cards
- travel candidate cards

Constraint: start as fixtures and component patterns before splitting apps.

⏱ Size: Medium

▶ Next action: Build static `ActionCard` fixtures for content, email, calendar, finance, and travel cards.

✓ Done when: The same card pattern supports approve/promote/schedule/split/snooze/release across at least three domains.

## Phase 3 — email management and interface

Goal: turn email into commitments with provenance, not a new task inbox.

This is still the strongest first full commitment workflow:

```text
email thread -> source_span -> proposed commitment -> action card -> approval -> receipt
```

⏱ Size: Medium

▶ Next action: Create a synthetic email commitment fixture.

✓ Done when: One email-derived card can be approved, scheduled, split, snoozed, or released without live Gmail access.

## Phase 4 — PKMS capture and Life-OS state surface

Goal: make PKMS the capture/re-entry front door without making PKMS own every Life-OS concept.

Workstreams:

- PKMS capture surface: new-tab, PWA, `Win + N`, Android share, Discord, or Keep side-door.
- Life-OS today/re-entry surface: one next action, quick capture, source evidence, one resurfaced card.
- General dashboard only as a derived view; avoid raw backlog/status wall.

⏱ Size: Medium

▶ Next action: Decide which capture ramp gets prototyped first.

✓ Done when: One ramp appends a provenance-preserving capture with zero filing decisions.

## Phase 5 — domain modules

Only after the standard interface and action-card pattern work:

- calendar ops
- finance ops
- travel ops
- account migration map
- agent host / receipt browser

## Icebox

- Full public docs site.
- Self-hosted Forgejo/Gitea behind auth.
- Finance API connectors.
- VPS-hosted Hermes/Discord automation with broad credentials.
- Rich React app shell.
