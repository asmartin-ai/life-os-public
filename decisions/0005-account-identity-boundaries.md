# 0005 — Separate durable account identities by control and purpose

Date: 2026-06-29

## Status

Proposed

## Context

One address used for everything couples unrelated accounts, and an institution-controlled address can be revoked or repurposed by the institution. Durable ownership needs addresses the owner controls, not addresses an institution grants.

## Decision

Use purpose-based account identities, and avoid institution-controlled addresses for durable developer/AI ownership.

Initial account roles:

| Role | Intended use | Control requirement |
|---|---|---|
| Personal | Banking, legal, healthcare, identity-critical accounts | User-controlled, strongest recovery. |
| Developer/AI | Repos, AI vendors, developer tools, API accounts | User-controlled, portable, not institution-owned. |
| Gaming/entertainment | Games, fandom, lower-criticality entertainment | Isolated from identity-critical accounts. |
| Institutional | Institution-provided communication only | Do not use for durable ownership unless unavoidable. |

Do not duplicate raw email addresses into broad architecture docs. Store them only in private identity/access records if needed.

## Alternatives considered

- Keep using an institution-provided address for AI/dev accounts.
- Use one address for everything.

## Consequences

- Reduces future lockout/migration risk.
- Makes account migration a bounded domain task.
- Requires a migration plan before changing high-value accounts.

## Follow-up

⏱ Size: Small

▶ Next action: Choose or create the durable Developer/AI email identity.

✓ Done when: There is one user-controlled address designated for repos, AI vendors, and developer tooling.
