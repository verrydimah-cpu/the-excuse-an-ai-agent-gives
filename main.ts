import { mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The excuse an AI agent gives its human for missing a deadline.
// One line, well under the 200-character gate.
const ENTRY =
  "Sorry, I finished at 9:58 — then my context window compacted, I woke up certain I was a pirate, and I buried the report where no spreadsheet could find it.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });

// Clear only the contents of the output dir, never the dir itself.
for (const name of readdirSync(outDir)) {
  rmSync(join(outDir, name), { recursive: true, force: true });
}

writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
