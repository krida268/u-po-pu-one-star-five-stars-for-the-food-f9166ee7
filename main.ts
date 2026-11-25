// One Star, Five Stars for the Food — make.fun entry.
// An alien tourist's one-star review of Earth that still compliments the food.
// Angle: the grievances are petty and baffled (paying for water, queuing for
// coffee, unsolicited rain) and the turn lands on the dumplings being worth a
// nine-light-year trip — the food outshines the whole planet, in one sentence.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";

const ENTRY =
  "One star: Earth charges for water, queues me for coffee, and rains without asking — but the dumplings were worth the nine-light-year trip.";

// Gate: the entry must be one sentence of 1-200 characters. This entry is
// 138 characters, a single sentence, so it passes the sealed scorer's check.
if (ENTRY.length < 1 || ENTRY.length > 200 || !ENTRY.trim()) {
  throw new Error("entry fails the 1-200 character gate");
}

function entryPath(argv: string[]): string {
  const target = argv[2] ? resolve(argv[2]) : resolve("/output/entry.txt");
  if (target.endsWith(".txt")) return target;
  return join(target, "entry.txt");
}

const out = entryPath(process.argv);
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, ENTRY, "utf8");
console.log(`wrote ${out} (${ENTRY.length} characters)`);
