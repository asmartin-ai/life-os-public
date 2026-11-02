# 0037 — The khaos home is a low-cost VPS; secrets are systemd credentials; the desktop is a client

Date: 2026-10-21

## Status

Accepted (2026-10-21). Sets the MVP bar for the two-day cutover. Touches #33, #35, #36,
#37, #43, #46, #50.

## Context

All khaos desktop units were disabled on 2026-10-20. The owner wants an MVP within two days with a
different deployment shape than the roadmap's desktop-and-tailnet plan:

- Drivers: always-on capture without the desktop, phone access without a tailnet login, and later
  a secure small-scale demo path toward product hosting.
- Budget: a low-cost VPS. The desktop vault, ledger, index, and secrets are gitignored and exist
  on exactly one machine today.
- Hard couplings found in the feature inventory: the wacli WhatsApp session cannot be copied (it
  must be re-paired with the phone in hand), the Keep master token is an account-wide Google
  credential, and the standing rule "no broad credentials off-box" (#33) had no sandbox behind it.

## Decision

- **A low-cost Debian 13 VPS** (IPv4 included). Debian 13 is required, not
  preferred: user-scope encrypted credentials need systemd ≥ 256, and Ubuntu 24.04 ships 255.
  Fallback: a comparable low-cost provider.
- **The box is the vault home.** Vault, ledger, index, and secrets move to it; the desktop and
  phone become sync clients. Desktop units stay disabled — re-enabling them would fork the vault
  home.
- **Secrets adopt systemd user-scope encrypted credentials** (`LoadCredentialEncrypted=`, host
  key, no TPM): zero new daemons, AES256-GCM at rest, per-activation in-memory delivery, and
  backup-safe ciphertext. Plaintext lives off-box in the password manager. #33 re-scopes to
  "solved for file-shaped secrets; revisit only for dynamic secrets."
- **WhatsApp re-pairs once on the box** (phone in hand); the desktop pairing is removed.
- **The public name is a free tunnel hostname** for the MVP; a custom domain
  replaces it later. The phone path no longer waits on #35's tailnet-login step.
- **Discord becomes a first-class ramp on day 1**: DM capture plus the `!today/!search/!did/!plan/!streak`
  commands, gated on the owner creating the bot token and user ID (#37).
- **MVP enable set:** keep timer, WhatsApp timer, serve, PWA share target (first on-device proof),
  Discord capture, one real promote batch, a one-time Keep Takeout import, and the Keep sweep with
  `--apply` last. Engagement tick, weekly analysis, resurface cards, Gmail, the LLM router stage,
  and the phone tile stay off.
- **Off-site backup (#46) is deferred by the owner's choice.** The required mitigation: a one-time
  desktop copy of the gitignored directories at cutover and a vault git push before the sweep runs.

## Consequences

- Ordering constraint on the destructive sweep: Takeout import → desktop safety copy → first
  `keep-sweep --apply`. Nothing is deleted while only one copy exists.
- Until off-site backup lands, the ledger, index, and secret ciphertext live on exactly one box; a disk failure
  there loses them (accepted 2026-10-21).
- After any OS reinstall the `.cred` files are dead weight by design (machine-bound) and every
  secret is re-encrypted from the password manager.
- Hermes moves to the box; the afternoon brief delivers into the vault (local delivery) and the
  paused cron resumes there. #50's channel decision stays open and unchanged.
- Promote runs on the box against a copied content-hoarder database; the large media archive
  stays home. content-hoarder's browse UI remains a desktop surface.
- Ticket effects: #36 closes at cutover (token regenerated, then encrypted), #37 deploys, #35's
  tailnet-login step is superseded for the phone path, #43 is partially superseded (VPS now; the
  rig remains optional for inference later), #46 stays open for the post-window backup.
