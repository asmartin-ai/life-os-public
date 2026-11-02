# Publication safety

Status: current policy for the public mirror `asmartin-ai/life-os-public`.

## Policy

The private canonical repo is the working workspace. The public mirror is a sanitized, **docs-only** export built from the reviewed allowlist below — never a push of the private tree, and never `git add -A`.

The GitHub remote is already public. The gate below is therefore not a visibility switch; it must pass for every refresh, and the force-push is the last step. A push cannot recall clones or previously published commits; GitHub keeps old commits reachable by SHA until its own expiry runs.

Refreshing the mirror means:

1. Copy only the allowlisted paths from private `main`.
2. Genericize the owner and machine paths (see below).
3. If a path leaves the allowlist, rewrite history so no commit in the mirror still contains it.
4. Run the validation commands, then force-push.

## Public allowlist

Repo hygiene and entry points:

```text
.gitattributes
.gitignore
AGENTS.md
CONTEXT.md
GLOSSARY.md
LICENSE
README.md
templates/*.md
decisions/*.md        (reviewed individually, current and still-referenced ADRs only)
docs/agent-patterns.md
docs/architecture.md
docs/charter.md
docs/contracts.md
docs/design-takeaways.md
docs/modules.md
docs/onramps.md
docs/publication-safety.md
docs/re-entry-copy.md
docs/research-takeaways.md
docs/roadmap.md
docs/triage-surface-map.md
.github/workflows/leak-scan.yml
```

Private by default — never published:

- `domains/` (life-domain briefs, including career, travel, finance, accounts, identity/access)
- `docs/source-inventory.md`, `docs/project-map.md`
- `prompts/`
- `docs/research/` (dated research passes, brainstorms, and session notes)
- `inbox/`, `logs/`, `DUMP.md`, `NEXT.md`
- `fixtures/`, `scripts/`, `tools/`, `ui/`, `package.json`, `bun.lock`, `tsconfig.json`, linter config and other workflows (`.github/workflows/leak-scan.yml` is the only published workflow)
- raw email/calendar/finance/travel captures, source maps, account inventories, credentials, exports, databases, screenshots, archives

`docs/roadmap.md` is a public rewrite of the private roadmap: internal ticket numbers, hardware purchases, subscription costs, and private repo names are removed. Keep it that way when refreshing.

## Genericization rules

- Personal name and handle → "the owner" / "owner".
- Linux home and project paths → `/path/to/…`.
- Drive-letter paths → `/path/to/…`.
- References to private sibling repos stay as project names (PKMS, content-hoarder), not as absolute paths.
- The owner's purchases, prices, and account choices → generic wording: "a low-cost VPS", "an off-site object store", "a password manager", "local GPUs". Keep the decision; drop the vendor, the amount, and the personal account story.

## Denylist patterns

A mirror fails if any ref, blob, or commit message contains:

- the owner's name or handle (case-insensitive), or the real name behind any old commit identity
- personal email addresses, phone numbers, mailing addresses
- account recovery codes, API keys, tokens, cookies, `.env`, OAuth credentials
- database files (`.db`, `.sqlite`, `.sqlite3`), finance exports, spreadsheets, transaction CSVs
- home paths (`/home/<user>`, `~/Documents`, `~/Projects`) or drive-letter paths
- Tailscale/CGNAT addresses or private hostnames
- personal document filenames, private people's names where not needed for public research

## Validation commands

Run from the mirror root. These are starting checks, not a complete guarantee.

```sh
git status --porcelain -uall
git ls-files
git ls-files | grep -Ei '\.(env|db|sqlite3?|pem|key|p12|csv|xlsx|zip)$'
git log --all --format='%an|%ae|%cn|%ce' | sort -u
git log --all --format='%B' | grep -iE '<owner-name>|<owner-handle>|@'
git grep -nIiE '(/home/|~/Documents|~/Projects|[A-Za-z]:\\)'
git grep -nIiE '(100\.[0-9]+\.[0-9]+\.[0-9]+|\.ts\.net)'
```

History, including deleted blobs:

```sh
git rev-list --objects --all | cut -d' ' -f1 | while read -r o; do
  git cat-file -p "$o" 2>/dev/null
done | grep -iE '<owner-name>|<owner-handle>|(/home/|~/Documents|~/Projects|[A-Za-z]:\\)|100\.[0-9]+\.[0-9]+\.[0-9]+'
```

The validation block above contains the patterns themselves; those lines are the only expected matches in a clean scan.

## Publishing

The only publish path is: build the candidate in `/tmp` → scan its full history → push with an
explicit URL. This checkout is a clone of the published mirror, so its `origin` push URL is
disabled (`DISABLED-use-publish-mirror`); refreshes arrive as new candidates built from the
allowlist.

```sh
git clone https://github.com/asmartin-ai/life-os-public.git /tmp/lo-public   # candidate base
# apply the allowlisted edits in /tmp/lo-public, then scan and push:
cd /tmp/lo-public
git log --all --format='%an|%ae|%cn|%ce' | sort -u      # no-reply identity only
gitleaks git --redact                                   # full history; expect no leaks
git fetch origin main
git merge-base --is-ancestor origin/main HEAD || { echo "not a fast-forward"; exit 1; }
git push https://x-access-token:"$(GH_TOKEN= gh auth token -u asmartin-ai)"@github.com/asmartin-ai/life-os-public.git HEAD:main
```

The scan set is fixed: the checks above, `gitleaks git` over the full history, and the private
denylist at `~/.config/git/publish-denylist.txt`. Never publish with findings. A non-fast-forward
means the candidate lost commits — stop and investigate instead of forcing.

`.github/workflows/leak-scan.yml` repeats the scan on every push and PR: gitleaks over full
history plus a tracked-file scan for personal machine paths and Tailscale/CGNAT addresses.

## Done-when for a public refresh

- The mirror tree equals the allowlist plus reviewed rewrites; nothing else.
- No excluded path exists in any commit in the mirror history.
- Every author and committer is the GitHub no-reply identity.
- The denylist scan returns zero hits outside detector patterns, on every ref that will exist after the push (`refs/heads/*`; delete stale local remote-tracking refs before scanning).
- A human reviews the final tree and the scan before the push. The remote is public throughout, so the gate must pass on every refresh; the push is the last step.
