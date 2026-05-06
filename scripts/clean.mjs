import { rmSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const targets = [
  ".next",
  "dev-out.log",
  "dev-err.log",
  "dev-out-3000.log",
  "dev-err-3000.log",
];

for (const target of targets) {
  const absolutePath = resolve(process.cwd(), target);
  if (!existsSync(absolutePath)) {
    continue;
  }

  try {
    rmSync(absolutePath, { recursive: true, force: true });
  } catch {
    // Keep cleanup resilient even when a local process still holds a file lock.
  }
}
