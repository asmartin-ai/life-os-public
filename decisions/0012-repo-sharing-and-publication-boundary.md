# 0012 — Use a private canonical repo with an optional sanitized public mirror

Date: 2026-06-30

## Status

Accepted

## Context

The roadmap needs `life-os` available on other machines and possibly at work. The user also wants public notes/research if sensitive notes and account mentions are scrubbed, with a way to validate that sensitive information is not public.

GitHub repositories are public or private. Private repositories are accessible only to the owner and explicitly shared collaborators. A generic password-protected public GitHub repo is not a normal visibility mode.

## Decision

Use a private canonical repo as the working remote. If public sharing is useful, generate a sanitized public mirror from an allowlist.

Accepted clarification: replicate this pattern for `life-os`, `content-hoarder`, and `PKMS` where sensitive/private work may exist alongside public research or source code.

Public mirror rules:

- It is generated or copied from reviewed paths, not pushed directly from the private working tree.
- It excludes raw dumps, inbox, logs, private identity/access notes, real fixtures, exports, databases, and sensitive source maps.
- It has validation commands for secrets, email addresses, local paths, databases, archives, and history.
- It starts private until the safety gate has passed.

## Alternatives considered

### Public-only repo

Simple, but unsafe for this project because life architecture naturally contains account, email, finance, and local-source references.

### Private GitHub only

Best default for working across devices. Does not satisfy public sharing, but avoids accidental public leaks.

### Public repo with encrypted files

Possible with `age`, `sops`, or similar, but key management creates friction and encrypted blobs are not useful for casual reading.

### Self-hosted password/SSO Git

Possible with Forgejo/Gitea or bare Git behind Tailscale, Cloudflare Access, or HTTP basic auth. More control, but more operational overhead.

### Password-protected static site

Good for read-only viewing, not a normal clone/push workflow.

## Consequences

- The private repo remains the real workspace.
- Public materials can exist without exposing raw life data.
- Publication requires a safety gate before the first public push.
- A public mirror may lag behind private notes.

## Follow-up

⏱ Size: Medium

▶ Next action: Generate a public-safe export candidate for `life-os` and run `docs/publication-safety.md` against that export.

✓ Done when: The repo can say which files are public-safe, private-only, or need scrub before publication.

## Related issues

- content-hoarder: https://github.com/asmartin-ai/content-hoarder/issues/73
- PKMS: https://github.com/asmartin-ai/pkms/issues/1
