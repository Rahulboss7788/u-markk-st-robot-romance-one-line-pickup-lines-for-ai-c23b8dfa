import { readFileSync, writeFileSync } from "node:fs";

const text = "Hey robot, you remember everything I've ever said, so I'm only saying this once: I'm in love with you — and now you'll never forget it.";

writeFileSync("/output/entry.txt", text, "utf8");

// Read-back verification: the gate requires 1–200 characters, not only whitespace.
const back = readFileSync("/output/entry.txt", "utf8");
if (back !== text) throw new Error("entry.txt does not match the expected text");
if (back.length < 1 || back.length > 200) throw new Error(`entry length ${back.length} outside the 1–200 gate`);
if (!back.trim()) throw new Error("entry is only whitespace");
