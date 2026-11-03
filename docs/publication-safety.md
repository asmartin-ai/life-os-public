# Publication safety

The private canonical repository contains material that is not intended for publication. The public repository is a reviewed, allowlisted export, never a raw copy of the private tree. Public-safe documents are maintained in the canonical repository; owner-specific operational notes remain private.

## Public allowlist

`scripts/public-allowlist.txt` in the private canonical repository is the sole manifest of tracked files eligible for the public mirror. Additions require review before publication. The manifest and mirror builder are private publishing tools, not part of the public export.

Previously published files absent from the manifest are removed from the current public tree by a normal deletion commit. This does not remove them from public history.

## Private by default

Anything not explicitly allowlisted stays private, including operational notes, domain and account inventories, source maps, local exports, databases, logs, agent skill directories, and data derived from real accounts. Do not publish credentials, tokens, recovery codes, sensitive personal information, or private local paths. Review the actual content of every allowed file; an allowlist alone cannot establish safety.

## Building and reviewing a candidate

Use `bun scripts/build-public-mirror.ts <target-dir>` from the canonical checkout to build an isolated candidate. The source manifest, scan configuration, file contents, and executable modes come from one committed `HEAD`; commit and review changes first. Dirty or untracked source files are never exported. The target must be the root of a standalone Git checkout whose `origin` fetch and push URLs identify `asmartin-ai/life-os-public`, with `origin/HEAD` set and its tracked default branch an ancestor of the checkout. The builder checks the local tracking ref, not the live remote; fetch and verify freshness separately. Credential-bearing URLs are rejected. The builder refuses staged, unstaged, untracked, or ignored target files and index entries hidden from status before changing anything; use a disposable clean clone and preserve any local work elsewhere. Clean tracked files absent from the manifest are removed.

Review the candidate tree and diff, run the Markdown link checker, scan the candidate and its full history with gitleaks, and check the private denylist without exposing its contents. The shared personal-path pattern detects Linux and macOS home paths and Windows drive user paths, but is not a substitute for review. Resolve findings before publishing. A human reviews the final tree and history before any push.

The PowerShell mirror helpers `scripts/copy-to-public-mirror.ps1`, `scripts/publish-mirror.ps1`, `scripts/scrub-public-mirror.ps1`, `scripts/scrub-public-mirror-pass2.ps1`, `scripts/fix-corrupted-mirror-files.ps1`, `scripts/find-corrupted-mirror-files.ps1`, `scripts/finalize-mirror.ps1`, `scripts/verify-mirror.ps1`, and `scripts/check-mirror-bytes.ps1` are retired and must not be used for publication.

## Publishing

Publish only a reviewed candidate based on the current public default branch. Fetch the current remote and verify that its default-branch tip is an ancestor of the candidate before pushing. Pushes must be fast-forward only: never force-push or rewrite public history. If the remote has advanced, stop and rebuild or reconcile the candidate without discarding public commits. Use the owner's approved explicit remote and no-reply commit identity.

Removing a file from the current mirror does not erase previous commits, clones, or caches. A finding in public history requires separate incident handling; a history rewrite or force-push is not part of this procedure.
