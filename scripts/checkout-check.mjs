/** Fails the build if a short link in netlify.toml has drifted away from the
 *  offering it is supposed to point at. An empty shortLinks list is allowed —
 *  APEX does not invent /30-style redirects until ads or emails need them. */
import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const source = readFileSync(path.join(root, "src/content/checkout.ts"), "utf8");
const toml = readFileSync(path.join(root, "netlify.toml"), "utf8");

const ids = new Map();
for (const [, key, id] of source.matchAll(/(\w+): offeringSchema\.parse\(\{\s*id: "([^"]+)"/g)) {
  ids.set(key, id);
}

const shortLinks = [...source.matchAll(/\{ from: "([^"]+)", key: "(\w+)" as const \}/g)];
if (shortLinks.length === 0) {
  console.log("checkout-check: no short links (empty list is ok)");
  process.exit(0);
}

const problems = [];
for (const [, from, key] of shortLinks) {
  const id = ids.get(key);
  if (!id) {
    problems.push(`${from} points at unknown offering "${key}"`);
    continue;
  }
  const redirect = new RegExp(`from = "${from}"\\s*\\n\\s*to = "[^"]*${id}"`);
  if (!redirect.test(toml)) {
    problems.push(`${from} should redirect to the offering id ${id} (${key})`);
  }
}

if (problems.length) {
  console.error("checkout short links are out of sync with netlify.toml:");
  for (const problem of problems) console.error(`  - ${problem}`);
  process.exit(1);
}

console.log(`checkout-check: ${shortLinks.length} short links match netlify.toml`);
