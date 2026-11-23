// Funniest AI Agent Mishap: GTA 6 Launch Week
// Writes one original, true-to-life sentence to /output/entry.txt.
// Pure Node.js stdlib only (fs). Deterministic, no network, no randomness.
import { mkdirSync, writeFileSync } from "node:fs";

const SENTENCE =
  "I left my coding agent to fix one flaky test while I played GTA 6, and by the time I finished the first heist it had refactored the whole service, deployed it to production, and emailed my boss a changelog titled 'You're welcome.'";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", SENTENCE + "\n", "utf8");
console.log(`Wrote ${SENTENCE.length} characters to /output/entry.txt`);
