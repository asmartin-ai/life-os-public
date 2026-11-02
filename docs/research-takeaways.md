# Research takeaways

Cross-pass synthesis of what the research added to life-os's operating notes. Updated through Pass 10 (2026-07-07).

Earlier entries (§1–§9) summarize the 2026-06-30 `life-os.zip` exploration. Later entries (§Pass map onward) summarize the ten numbered research passes filed under `docs/research/`.

---

## Pass map

| Pass | Topic | Filed at | Quality |
|---|---|---|---|
| 01 | Learning tool (reader + SR + daily guidance) | `2026-07-06-learning-tool.md` | Strong — primary sources, honesty appendix, decision gates |
| 02 | Health & lifestyle (meds, exercise, medical LLM) | `2026-07-06-health-lifestyle.md` | Strong — verbatim model-card quotes; folded into vision doc |
| 03 | Ecosystem mesh & agent orchestration | `2026-07-06-ecosystem-mesh.md` | Directional — URLs missing, Reddit skipped, 2 sections absent |
| 04 | Accounts, subscriptions & password manager | `2026-07-06-accounts-management.md` | Directional — red/yellow/green model strong; ADHD sweep missing |
| 05 | Car assistant & Android Auto | `2026-07-06-car-assistant.md` | Directional — privacy solid; no independent analysis, no iOS side |
| 06 | Email onramp to PKMS | `2026-07-06-email-onramp.md` | Directional — provenance envelope strong; Reddit missing |
| 07 | Finance integration | `2026-07-06-finance-integration.md` | Directional — best synthesis of 3–7; ADHD+finance uncited |
| 08 | Dark patterns & ethical engagement | `2026-07-07-dark-patterns-ethics.md` | Strong — 5 sections, red-line definition, honesty appendix |
| 09 | AI substrate (JEPA, world models, RAG, mesh) | `2026-07-06-ai-substrate-architectures.md` | Strong — 7+ source convergence on MCP as mesh contract |
| 10 | Resurfacing & ranking applied (S1) | `2026-07-07-resurfacing-ranking-applied.md` | Strong — all 7 tracks + synthesis; closes Pass 9 G3/G4/Q3/Q7 |

**Quality note on passes 03–07:** a gap analysis (`prompts/research/2026-07-06-gap-analysis-passes-3-7.md`) documented five systematic failures: URLs missing, honesty vocab non-standard, Reddit under-mined, prompt-named items silently dropped, GitHub/academic under-used. The safety-critical boundaries in these passes rest on official docs and remain sound; the community-evidence layers should be re-run before any ADR cites them as load-bearing.

---

## What the zip research established (2026-06-30, still load-bearing)

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

The UI recommendation is not "pick React" or "build dashboard." Start with static HTML/CSS/JS fixtures for reusable cards: action, source span, why-this, receipt, capture box. Add Playwright screenshots before calling a UI slice done.

### 8. Logistics-style intake is a better metaphor than backlog management

Treat incoming items as freight: collect, cross-dock, route to shelves, show finite active slices, release/reheat stale items. This matches the ADHD design language better than review-everything dashboards.

### 9. Deployment should be local/private first

Sensitive Life-OS core should run on a local/private host first. VPS/Discord/Hermes/Slack-style agents can be edge relays, but should not hold broad email/calendar/filesystem credentials unless there is a strong reason.

---

## What the numbered passes added

### From Pass 01 — Learning tool

- **The SR queue is a cognitive prosthesis for prospective memory, not a productivity optimizer.** Six sources converge on externalized prospective memory as the core intervention. Capture must be <2s, zero decisions.
- **ADHD relapse rate is 100%.** A streak is structurally a lapse-punishment system; for a 100%-relapse population it manufactures failure every cycle. This is the clinical anchor for no-streaks.
- **FSRS > SM-2 for ADHD users.** FSRS recalibrates after a gap rather than producing a debt; SM-2's ease hell compounds a bad week into a 3–5× load spike. Single tunable knob (desired retention, default 90%).
- **The due-count is the #1 avoidable churn source.** Cap visible queue ≤10, never display a missed-day counter. Reeder removed unread count in favor of timeline-position sync.
- **Variable reward is ethical iff paired with a stopping cue and an honest reason line.** Without the stopping cue it's the "machine zone." Solo tools have no legitimate Tribe lever.
- **Ripe ADRs:** adopt FSRS; SR-without-streaks; card-generation with human approval + per-card provenance; daily-guidance ranking (one next action, machine-selected).

### From Pass 02 — Health & lifestyle

- **Medical LLMs are NOT validated for direct clinical use — by the models' own authors.** 4-source convergence from model cards. Design answer: provenance + refusal (cite a source or refuse).
- **Medical-LLM hallucination is measured and non-zero** (Med-PaLM 5.9% harm rate; web MedGPT 25–30% low accuracy). Refusal path is load-bearing.
- **FHIR R4 `Medication` is the patient-access interchange schema** (Cures Act). Local record = Markdown with FHIR-aligned fields; FHIR sync is a deferred P2.
- **No new contract needed for the health node.** Existing `source_span`/`ledger_event`/`resurface_card`/`commitment`/`capability_grant` cover it.
- **Ripe ADRs:** FHIR-R4 Markdown prescription record; no-streak exercise-log surface; clinician-handoff artifact; health `capability_grant` schema; medical-LLM safety boundary S1–S5.

### From Pass 03 — Ecosystem mesh

- **Do NOT start with a message bus, registry service, or agent swarm.** MCP, A2A, Home Assistant, n8n, OTel, W3C PROV, Android perms, AWS IAM, K8s RBAC, Syncthing all converge on: small nodes, explicit contracts, append-only receipts, revocable capabilities, manual conflict surfacing.
- **P1 mesh = boring: files in, proposed patches out, receipts always appended, approval before mutation.** File-native actor/filter pattern with `preimage_sha256` compare-and-swap.
- **Read/propose/write is the right capability taxonomy; `propose` is first-class.** Most agents never need more than `read + propose`. Forbidden: `money_movement`, `clinical_claim`, `credential_access`, `delete`.
- **Provenance needs causal chains** (trace IDs + PROV nouns), not just logs. Limit propagated receipt metadata to 5–8 stable fields.
- **Ripe ADRs:** P1 mesh architecture (file-native actor/filter); capability model (deny-by-default); receipt schema with trace IDs; defer MCP/A2A/Consul/etcd.

### From Pass 04 — Accounts & password manager

- **The accounts node is a file-canonical index, NOT an aggregator.** Hard boundary: store account identity metadata and references; NEVER passwords, OTP seeds, recovery codes, OAuth tokens, or exported vaults.
- **Gmail cannot enumerate all accounts a person owns.** Each Gmail account must be manually registered and individually authorized.
- **Gmail labels expose summary counts WITHOUT reading message bodies.** Default adapter mode = profile + labels only; body reads are explicit, receipt-producing, expiring.
- **A password-manager export is NOT a safe integration primitive.** No official consumer API. Safest integration = manual reference + optional metadata-only index. The vault-reference pattern used by password managers is the aspiration.
- **Red/yellow/green zone data classification** is the template for every domain's safety boundary.
- **Ripe ADRs:** accounts node architecture (3 primitives); red/yellow/green classification; Gmail capability cards (expiring, account-scoped).

### From Pass 05 — Car assistant

- **Capture-first is feasible today, but NOT as a first-party "generic voice note" API.** Start with phone-side capture triggered by Assistant/App Actions/Tasker, sync to markdown.
- **Google Conversational Actions are dead (sunset June 2023).** Don't build on the old webhook model. App Actions (built-in intents) are the current path; max 2 text parameters per query.
- **In-car capture must be single-turn: speak → "Saved" → classify later.** Multi-turn converts capture into filing and raises driving risk. Only choice is save vs cancel.
- **Assume Assistant/Gemini voice content transits Google servers.** Exclude health/finance/accounts/credentials/private-journal from car retrieval by default (`car_access: false`).
- **Ripe ADRs:** P1 car capture architecture (phone-side app + markdown inbox); mark Conversational Actions deprecated; car-mode privacy boundary; P2 voice query contract.

### From Pass 06 — Email onramp

- **Email works best as a dumb inbox, not a filing interface.** Evernote's subject-line syntax is powerful but violates "no filing at capture."
- **Every inbound email = raw `.eml` (source of truth) + Markdown capture note.** Store both. Forwarded emails obscure original sender — provenance needs separate `apparent_original_from` + confidence.
- **Attachments go in a content-addressed blob store OUTSIDE the vault.** Markdown stores only references + hashes. Tika + Tesseract for extraction, async.
- **Email is convenient transport, NOT safe transport.** Not end-to-end encrypted by default. PGP too high-friction for MVP. Use high-entropy ingest address + sender allowlist; don't rely on address secrecy alone.
- **Ripe ADRs:** email onramp as capture-only provenance-first service; attachment storage layout; provenance envelope schema; dedicated IMAP mailbox as MVP.

### From Pass 07 — Finance

- **Tracking-first, execution-never.** Ingest + normalize + propose small review actions + trace every recommendation to a source row. Execute (move money, pay bills, trade, cancel) = forbidden in life-os.
- **Spreadsheet-canonical + SQLite operational ledger + Markdown receipts.** Plain-text accounting (hledger/Beancount) is cleanest but not ADHD-friendly by default — generate as optional export.
- **"Good enough" categorization; "unknown" is a normal intermediate state, not a shame bucket.** Never show "47 transactions need review."
- **Local vs cloud LLM is a privacy boundary.** Cloud LLM only on minimized, redacted snippets; never full account history. Spreadsheet-leak research observed 165 accesses to leaked fake-bank Sheets in 72 days.
- **Ripe ADRs:** finance-arm architecture (CSV + SQLite + receipts); money-action safety boundary (permanently forbidden list); minimal data model (transactions + recurring_obligations + receipts); price-change detection (neutral copy).

### From Pass 08 — Dark patterns & ethical engagement

- **The red line:** an engagement mechanic crosses from ethical to manipulative when it exploits a cognitive bias to override reflective preference, conceals its mechanism, serves the system at the user's expense, or uses punishment as the lever.
- **Variable-ratio schedules are the most potent driver of compulsive behavior** (Skinner; Alter's *Irresistible*). No version is ethical in a life-os surface.
- **Streaks are loss-aversion + shame.** Broken streak triggers RSD; the mechanism requires the threat of loss to function — remove the threat and it stops being a streak.
- **Ethical repurposings exist for most dark patterns** (variable reward → novelty surfacing; loss aversion → gentle awareness; streaks → sprint framing; infinite scroll → finite batches). The repurposing preserves the legitimate need, changes the mechanism.
- **Do-first:** define the red line as a testable constraint; finite batches as default surface; write the re-entry "welcome back" message now (highest-stakes ADHD design moment); replace counters with narrative summaries; define `resurface_card.reason` vocabulary.

### From Pass 09 — AI substrate

- **MCP is the de facto mesh contract layer** (7-source convergence). Don't re-research; use as given.
- **`source_span` is a structured record** `{passage_id, retriever, confidence, retrieved_at, query, model_version}` (4-source convergence).
- **`resurface_card` ≈ FERNme's bounded card** (~25-token flat profile, class-targeted volatility, `record_outcome`).
- **Hybrid retrieval: structured queries + adaptive retriever (Self-RAG/HyDE) + memoized cards.** Lost-in-the-middle (Liu et al. 2023) = ration context, order by relevance.
- **JEPA-over-tabular as a derived materialized view over the ledger**, not a replacement for file-canonical truth.
- **Nominated ripe ADRs:** 0016 (`attention_budget`), 0017 (`resurface_card`), 0020 (mesh contract layer).

### From Pass 10 — Resurfacing & ranking applied

- **The ADHD design language maps 1:1 to Barkley's four-deficit model** (inhibition, working memory, emotional self-regulation, self-motivation). Each design principle compensates for a specific deficit. The design language is clinical accessibility, not preference.
- **The predict-then-policy split resolves Pass 9 G3.** At personal scale, the ML layer is thin (calendar heuristics). The heavy lifting is policy. `attention_budget` is a policy document, not an ML output.
- **Highlights resurface, not articles** (Readwise). The durable artifact is the `source_span`, not the parent document. Save ≠ resurface.
- **Bounded queues beat infinite lists** (Matter "queue of 5," Things 3 "Up Next"). Spatial bounding (no room) is less guilt-inducing than temporal bounding (overdue).
- **Content decay and relationship decay run in opposite directions.** Content gets less urgent with age; commitments get more urgent. The ranker needs a `decay_direction` per item type.
- **No "unread" or "overdue" state.** Items are "resting," "surfaced," "released," or "completed."
- **`resurface_card.reason` must be transparent, inline, short, guilt-free.** Ten reason types enumerated; three risky types (`waiting_on_you`, `decay_warning`, `gap_analysis`) have safe rephrasings. No contrastive or persuasive explanations on the primary surface.
- **Closes Pass 9 G3 (attention ML/policy), G4 (doom-surface, partially), Q3 (JEPA-vs-FSRS, framed), Q7 (daemon vs cron → cron + on-demand).**
- **Ripe ADRs:** 0016 (`attention_budget` field set), 0017 (`resurface_card` + reason vocabulary), 0020 (mesh contract), 0021 (SR scheduler = FSRS), 0022 (state vocabulary), 0023 (re-entry flow), 0024 (background consolidation), 0025 (contrastive explanations banned).

---

## Cross-cutting decisions now ripe

Aggregated across all passes, the ripe ADR clusters are:

1. **Card/budget/vocabulary trio** (Pass 10 0016/0017/0022 + Pass 08 red line) — the substrate every surface needs. Highest priority; unblocks all UI work.
2. **Health safety boundary** (Pass 02 S1–S5 + capability grant + prescription record) — the highest-stakes domain; safety ADR should land before any health surface.
3. **Finance safety boundary** (Pass 07 money-action forbidden list + data model) — parallel to health; safety-critical.
4. **Accounts red/yellow/green zones** (Pass 04) — credential safety; template for all domains.
5. **Mesh architecture** (Pass 03 P1 file-native pattern + Pass 09 MCP + Pass 10 0024 background consolidation) — deferrable until two real nodes exist, but the contract shape is settled.
6. **Learning tool SR pillar** (Pass 01 FSRS + Pass 10 0021 + card-generation workflow) — depends on the card/budget trio.
7. **Car/email/finance capture ramps** (Passes 05/06/07) — each is a capture-only provenance-first ingest service; pattern is uniform.

---

## What mostly reinforced existing direction

- Do not build a monolithic productivity app.
- Avoid raw backlog counts and dashboard walls.
- Capture must stay zero-decision.
- PKMS should be important but should not own all Life-OS concepts.
- content-hoarder should integrate by promotion/resurfacing, not processing the whole archive.
- Finance APIs should wait; spreadsheets/exports are enough for early cards.
- Travel/event scrapers should create candidates, not automatic calendar writes.

---

## Where these findings landed

The findings above were folded into this repo's architecture, contracts, and decision records. The research passes themselves, the domain briefs, and the project maps are private by default and are not part of this public mirror; the conclusions that survived are in `docs/architecture.md`, `docs/contracts.md`, `docs/design-takeaways.md`, and `decisions/`.
