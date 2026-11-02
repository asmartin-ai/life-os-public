# 0036 — WhatsApp through wacli; Hermes is the personal agent and reaches khaos only over MCP

Date: 2026-10-12

## Status

Accepted (2026-10-12). Builds on [0003](0003-many-ramps-one-inbox.md). Replaces the S6 Baileys bridge
design (PKMS `bridges/whatsapp/`).

## Context

The owner wants a personal agent (Hermes) with a WhatsApp connection that includes the Instinct AI chat,
and later Home Assistant.

- PKMS merged a custom Baileys bridge (S6) on `baileys@7.0.0-rc14`, a pre-release. It was never
  paired, so nothing depends on it.
- `wacli` 0.21.0 (`openclaw/wacli`, MIT, whatsmeow) is installed on the desktop. It pairs as one
  linked device, mirrors chats into a local SQLite + FTS store, and has `--read-only` and `--json`
  modes. Its docs describe read-only companion tools and an external MCP wrapper with a small
  allowlist of read commands.
- Hermes Agent v0.21.7 is installed (`~/.hermes`, Nous provider). It is an MCP client with messaging
  gateways (Discord, Telegram, WhatsApp, Signal), cron delivery, and an official Home Assistant plugin.
  Its own WhatsApp gateway is a separate Baileys session; its docs recommend a dedicated number.
- Every linked-device session gives full access to the WhatsApp account. WhatsApp allows four
  linked devices.

## Decision

- **One WhatsApp session for the owner's number, owned by wacli.** `wacli sync --follow` keeps the
  store warm as a user service. Every consumer reads it through `wacli --read-only --json`. PKMS does
  not read `session.db` and never writes `wacli.db`.
- **The PKMS WhatsApp ramp reads wacli.** Self-chat messages become inbox notes; the Instinct chat
  becomes the rolling daily note (same semantics as S6). The Baileys bridge, its spool contract and
  the `baileys` dependency are deleted.
- **Hermes is the personal-agent front end and reaches khaos only through the khaos MCP server**
  (`pkms mcp`, stdio, same machine). Tools: `today`, `search`, `capture`, `routed_since`,
  `whatsapp_search`, `instinct_thread`. WhatsApp tools are read-only. Hermes never reads the vault,
  `.secrets/`, or the wacli store directly. Every tool call emits `agent_tool_called`.
- **No send from khaos or Hermes on the owner's number.** Sending, backfill, media download and account
  commands are not exposed. A send path needs its own decision with per-message approval.
- **Hermes chat channel** is an owner decision: a separate Discord bot (no new number), or Hermes'
  WhatsApp gateway on a dedicated number. It never links a second session to the owner's own number.
- **Home Assistant** goes through Hermes' official `homeassistant` plugin once an HA instance exists.
  Event forwarding starts with an explicit `watch_entities` list. Hosting HA is an owner decision.

## Consequences

- The owner pairs once with `wacli auth` (ticket #40) instead of the bridge QR.
- Message text, names and note bodies that reach Hermes are untrusted input. The capture-content
  screen (#32) applies before Hermes acts on them.
- Hermes inference runs on the Nous provider configured in `~/.hermes/config.yaml`, so khaos content
  returned by MCP tools goes to that provider.
- WhatsApp Web is not a published API. wacli tracks whatsmeow upstream; protocol breakage stops the
  ramp until wacli updates. Nothing else in khaos depends on it.
- Tickets: #48 (wacli ramp), #49 (MCP server), #50 (Hermes channel), #51 (Home Assistant).
