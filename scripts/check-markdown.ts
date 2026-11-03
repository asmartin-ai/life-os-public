import { existsSync } from "node:fs";
import { dirname, resolve } from "node:path";

const LINK_RE = /\]\(([^)]+)\)/g;

const SKIP_TARGETS = [
  "#",
  "http://",
  "https://",
  "mailto:",
  "skill://",
  "rule://",
  "mcp://",
  "artifact://",
  "agent://",
  "history://",
];

function trackedMdFiles(root: string): string[] {
  const proc = Bun.spawnSync(["git", "ls-files", "*.md"], {
    cwd: root,
    stdout: "pipe",
    stderr: "pipe",
  });

  if (proc.exitCode !== 0) {
    throw new Error("git ls-files failed; run this inside the repository");
  }

  return proc.stdout
    .toString()
    .split("\n")
    .filter((line) => line.length > 0)
    .map((line) => resolve(root, line));
}



function checkLinks(path: string, text: string): string[] {
  const problems: string[] = [];

  for (const match of text.matchAll(LINK_RE)) {
    const target = match[1]?.trim() ?? "";

    if (target === "" || SKIP_TARGETS.some((prefix) => target.startsWith(prefix))) {
      continue;
    }

    const frag = target.split("#", 1)[0] ?? "";

    if (frag === "") {
      continue;
    }

    const resolved = resolve(dirname(path), frag);

    if (!existsSync(resolved)) {
      problems.push(`  broken link -> ${target} (${path})`);
    }
  }

  return problems;
}

async function main(): Promise<number> {
  const root = process.cwd();
  const args = process.argv.slice(2);
  const paths = args.length > 0 ? args : trackedMdFiles(root);
  const linkErrors: string[] = [];

  for (const path of paths) {
    if (!existsSync(path)) {
      console.log(`ERROR: ${path} does not exist`);
      linkErrors.push(path);
      continue;
    }

    const text = await Bun.file(path).text();
    linkErrors.push(...checkLinks(path, text));
  }

  if (linkErrors.length > 0) {
    console.log(`\nBROKEN LINKS (${linkErrors.length}):`);

    for (const error of linkErrors) {
      console.log(error);
    }

    console.log("\nFAILED");

    return 1;
  }

  console.log("OK: markdown links resolve.");

  return 0;
}

process.exit(await main());
