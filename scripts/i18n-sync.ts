// scripts/i18n-sync.ts
import fs from "fs";
import path from "path";

type Change =
  | { type: "added"; locale: string; key: string; valuePreview: string }
  | { type: "removed"; locale: string; key: string };

const args = process.argv.slice(2);
const flags: Record<string, string | boolean> = {};
for (let i = 0; i < args.length; i++) {
  const a = args[i];
  if (a.startsWith("--")) {
    const k = a.replace(/^--/, "");
    const v = args[i + 1] && !args[i + 1].startsWith("--") ? (args[++i] as string) : true;
    flags[k] = v;
  }
}

const BASE = (flags["base"] as string) || "en";
const LOCALES = ["en", "zh-CN", "zh-TW"];
const DIR = path.join(process.cwd(), "src/i18n/messages");
const DRY = !!flags["dry"];
const REMOVE_ORPHANS = !!flags["remove-orphans"];
const REPORT_KIND = (flags["report"] as string) || "";
const OUT = (flags["out"] as string) || "";

function load(locale: string) {
  const p = path.join(DIR, `${locale}.json`);
  return JSON.parse(fs.readFileSync(p, "utf8"));
}
function save(locale: string, data: any) {
  const p = path.join(DIR, `${locale}.json`);
  fs.writeFileSync(p, JSON.stringify(data, null, 2) + "\n", "utf8");
}
function isObject(x: any) {
  return x && typeof x === "object" && !Array.isArray(x);
}
function deepSync(base: any, target: any, locale: string, prefix = "", changes: Change[] = []) {
  for (const key of Object.keys(base)) {
    const full = prefix ? `${prefix}.${key}` : key;
    if (!(key in target)) {
      target[key] = base[key];
      changes.push({ type: "added", locale, key: full, valuePreview: String(isObject(base[key]) ? "{...}" : base[key]).slice(0, 80) });
    } else if (isObject(base[key]) && isObject(target[key])) {
      deepSync(base[key], target[key], locale, full, changes);
    }
  }
  if (REMOVE_ORPHANS) {
    for (const key of Object.keys(target)) {
      if (!(key in base)) {
        const full = prefix ? `${prefix}.${key}` : key;
        delete target[key];
        changes.push({ type: "removed", locale, key: full });
      }
    }
  }
  return changes;
}

const baseObj = load(BASE);
const changesAll: Change[] = [];

for (const locale of LOCALES) {
  if (locale === BASE) continue;
  const obj = load(locale);
  const changes = deepSync(baseObj, obj, locale);
  changesAll.push(...changes);
  if (!DRY) save(locale, obj);
}

const added = changesAll.filter((c) => c.type === "added").length;
const removed = changesAll.filter((c) => c.type === "removed").length;

if (DRY) console.log("🔍 Dry-run mode. No files were modified.");
console.log(`✅ Sync finished. Added: ${added}, Removed: ${removed}`);

// 報告
if (REPORT_KIND) {
  if (REPORT_KIND === "json") {
    const json = JSON.stringify({ base: BASE, changes: changesAll }, null, 2);
    if (OUT) {
      fs.mkdirSync(path.dirname(OUT), { recursive: true });
      fs.writeFileSync(OUT, json, "utf8");
      console.log(`📝 JSON report written to ${OUT}`);
    } else {
      console.log("\n" + json);
    }
  } else if (REPORT_KIND === "md") {
    const lines = [
      `# i18n Sync Report`,
      ``,
      `- Base locale: \`${BASE}\``,
      `- Added: **${added}**, Removed: **${removed}**`,
      ``,
      `| Type | Locale | Key | Preview |`,
      `|---|---|---|---|`
    ];
    for (const c of changesAll.slice(0, 200)) {
      lines.push(`| ${c.type} | ${c.locale} | \`${c.key}\` | ${"valuePreview" in c ? c.valuePreview : ""} |`);
    }
    const md = lines.join("\n");
    if (OUT) {
      fs.mkdirSync(path.dirname(OUT), { recursive: true });
      fs.writeFileSync(OUT, md, "utf8");
      console.log(`📝 Markdown report written to ${OUT}`);
    } else {
      console.log("\n" + md);
    }
  }
}

// GitHub 摘要
const stepSummary = process.env.GITHUB_STEP_SUMMARY;
if (stepSummary) {
  const top = changesAll.slice(0, 50);
  const md = [
    `## i18n Sync Summary`,
    ``,
    `Base: \`${BASE}\`  |  Added: **${added}**  |  Removed: **${removed}**`,
    ``,
    `| Type | Locale | Key |`,
    `|---|---|---|`
  ]
    .concat(top.map((c) => `| ${c.type} | ${c.locale} | \`${c.key}\` |`))
    .join("\n");
  fs.appendFileSync(stepSummary, md + "\n", "utf8");
  console.log(`🧾 Wrote summary to GITHUB_STEP_SUMMARY`);
}

