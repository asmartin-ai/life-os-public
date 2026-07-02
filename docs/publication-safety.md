# Publication safety

Status: draft safety gate for making a public or shared remote version of `life-os`.

## Policy

The private working repo may contain local source maps and planning notes. A public repo must be a sanitized mirror or allowlisted export, not a raw push of the private working tree.

## Recommended repo model

```text
private canonical GitHub repo
  -> automated local safety checks
  -> generated public sanitized mirror, if desired
```

A private GitHub repo is the simplest password/auth-accessible clone option. GitHub repositories are public or private; private repositories are accessible only to the owner and explicitly shared collaborators. A generic "password-protected public repo" is not a normal GitHub visibility mode.

## Public allowlist

These are candidates for public mirror inclusion after review:

- `README.md`
- `docs/architecture.md`
- `docs/design-takeaways.md`
- `docs/contracts.md`
- `docs/implementation-roadmap.md`
- `docs/roadmap.md`
- `docs/research-takeaways.md`
- `docs/research/2026-06-30-*.md` after scrub
- `decisions/*.md` after scrub
- `templates/*.md`
- selected `prompts/**/*.md` after scrub

## Private by default

Do not publish without explicit review:

- `DUMP.md`
- `inbox/`
- `logs/`
- `domains/identity-access.md`
- source maps mentioning private documents or accounts
- any private account inventory
- raw email/calendar/finance/travel fixtures derived from real data
- local exports, databases, screenshots, archives, or tool output

## Denylist patterns

A public mirror fails if it includes:

- raw email addresses
- phone numbers or mailing addresses
- account recovery codes
- API keys, tokens, cookies, `.env`, OAuth credentials
- database files: `.db`, `.sqlite`, `.sqlite3`
- finance exports, spreadsheets, transaction CSVs
- personal document filenames if sensitive
- private local paths that reveal sensitive folders
- names of private people where not needed for public research

## Validation commands

Run from the generated public mirror/export root when possible. Running these against the private working repo will intentionally flag private-only notes, local source maps, and this safety file's own examples. These are starting checks, not a complete guarantee.

```sh
git --no-pager status --short
find . -type f | grep -Ei '\.(env|db|sqlite|sqlite3|pem|key|p12|csv|xlsx|zip)$|secret|cookie|token|credential|recovery'
grep -RInE '[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}' .
grep -RInE 'api[_-]?key|token|secret|password|credential|cookie|recovery code|oauth|client_secret' .
grep -RInE '(/home/|~/Documents|~/Projects|[A-Za-z]:\\)' .
```

For a real public push, also scan history:

```sh
git log --all --diff-filter=A --name-only --pretty=format:
git log --all --format='%H %s%n%b'
```

## Done-when for public mirror

- Public export is generated from an allowlist, not from `git add -A`.
- Denylist scan returns no actionable findings.
- History scan has no sensitive additions.
- A human reviews the final mirror tree before push.
- Remote starts private until the first safety pass is proven.
