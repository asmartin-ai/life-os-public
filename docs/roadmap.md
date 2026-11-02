# Roadmap

Updated 2026-10-21. Public view of the current plan: what runs today, what is deliberately off, and what comes next. Internal ticket numbers and private repo names are omitted; the working tracker lives in the private canonical workspace.

The runtime picture is in [architecture.md](architecture.md#runtime-and-deployment-2026-10-07). The deployment decision is [0037](../decisions/0037-vps-home-systemd-creds-mvp.md).

**Owner gate** marks steps that need the owner: accounts, credentials, money, live device actions, and product calls. Everything else is agent work with a review before merge.

## Live now

- **Keep ramp** (10-minute timer): archive everything, route deterministically, and learn from what is kept or dismissed.
- **WhatsApp ramp** (`wacli`, 5-minute timer): self chat and one working thread; paired 2026-10-17.
- **Event ledger and reversible tuning**: every ingestion and routing change is recorded, and tuning changes are replayable.

## Deliberately off since 2026-10-17

- **Gmail ramp** — disabled; its secrets are parked.
- **LLM router stage** — disabled; the router runs deterministic rules only.
- Re-enabling either is a switch plus a shadow week, not a rewrite.

## Deployment in progress

Decision 0037 (2026-10-21) moves the Khaos home to a small Debian VPS:

- Vault, ledger, index, and secrets move to the box; the desktop and phone become clients.
- Secrets use systemd user-scope encrypted credentials, with plaintext only in the password manager.
- WhatsApp re-pairs once on the box.
- Off-site backup is deferred by owner choice; the mitigation is a one-time desktop copy plus a vault push before the destructive sweep.

## Next

1. **Phone capture without a tailnet login** — the PWA share target is the first on-device proof; the existing PWA and capture tile are built but off until it lands.
2. **Discord ramp** — DM capture and the small command set, gated on the owner creating a bot token.
3. **One real promote batch** — content-hoarder to PKMS with a capture envelope and a receipt.
4. **Hermes chat channel** — a separate Discord bot or a dedicated WhatsApp number; never a second session on the owner's number.
5. **Keep Takeout import**, then the Keep sweep with `--apply` last.
6. **Module review** — align on the desk/closure, decision-support, learning, and car-capture proposal in [modules.md](modules.md).

## Later

| Item | Depends on |
|---|---|
| Off-site backups: restic to an off-site object store | Owner-created account and key |
| Local inference on the home AI rig; hosted routing stays the fallback | Rig acceptance |
| Voice query over a private tunnel | Local inference |
| Home Assistant through the Hermes plugin | A Home Assistant instance |
| Credential sandboxing before any cloud-hosted ramp | Security review |
| Learning loop and resurface scheduler | Attention-budget and resurface-card contracts in real use |
| Per-ramp revoke and source weighting | Capability grants |

## Open owner decisions

- Which areas get vault area notes.
- Notification questions; partly answered by ADR 0035.
- Whether stray Keep saves route to content-hoarder now that Keep archives and routes.
- Tag schema and the empty-tag surface.
- Rig operating system.

## Separate tracks

The AI-stack tooling and the automation backlog run on their own cadence in their own private repos. They are not part of this architecture layer.
