// scripts/i18n-lint.ts
import fs from "fs";
import path from "path";

type Issue = {
  type: "missing-key" | "placeholder-mismatch" | "html-fragment";
  locale: string;
  key: string;
  detail?: string;
};

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
const REPORT_KIND = (flags["report"] as string) || ""; // "", "json", "md"
const OUT = (flags["out"] as string) || "";
const CI = !!flags["ci"];

function load(locale: string) {
  const p = path.join(DIR, `${locale}.json`);
  return JSON.parse(fs.readFileSync(p, "utf8"));
}
function flat(obj: any, prefix = ""): Record<string, string> {
  return Object.entries(obj).reduce((acc, [k, v]) => {
    const nk = prefix ? `${prefix}.${k}` : k;
    if (v && typeof v === "object") Object.assign(acc, flat(v, nk));
    else acc[nk] = String(v ?? "");
    return acc;
  }, {} as Record<string, string>);
}

function placeholders(s: string) {
  return (s.match(/\{[^}]+\}/g) || []).map((x) => x.trim()).sort();
}
function htmlFragments(s: string) {
  // 允許最常見的輕量標籤；檢查是否成對
  const allowed = ["b", "strong", "i", "em", "code", "br", "u", "span"];
  const open = [...s.matchAll(/<([a-zA-Z]+)(\s+[^>]*)?>/g)].map((m) => m[1].toLowerCase());
  const close = [...s.matchAll(/<\/([a-zA-Z]+)\s*>/g)].map((m) => m[1].toLowerCase());
  // 過濾非允許標籤
  if (open.concat(close).some((t) => !allowed.includes(t))) return { ok: false, reason: "Contains disallowed tags" };
  // 成對性（忽略單標籤 br）
  const counts: Record<string, number> = {};
  for (const t of open) counts[t] = (counts[t] || 0) + (t === "br" ? 0 : 1);
  for (const t of close) counts[t] = (counts[t] || 0) - 1;
  const unbalanced = Object.entries(counts).filter(([t, c]) => t !== "br" && c !== 0);
  return { ok: unbalanced.length === 0, reason: unbalanced.length ? `Unbalanced tags: ${unbalanced.map(([t,c])=>`${t}(${c})`).join(", ")}` : "" };
}

const baseFlat = flat(load(BASE));
const issues: Issue[] = [];

for (const locale of LOCALES) {
  if (locale === BASE) continue;
  const compareFlat = flat(load(locale));

  // 缺 key
  for (const k of Object.keys(baseFlat)) {
    if (!(k in compareFlat)) {
      issues.push({ type: "missing-key", locale, key: k });
    }
  }

  // 佔位符 / HTML
  for (const [k, val] of Object.entries(compareFlat)) {
    if (!(k in baseFlat)) continue; // 多出的 key 先不視為錯（可交給 sync 清理）
    const phBase = placeholders(baseFlat[k]);
    const phThis = placeholders(val);
    if (phBase.join("|") !== phThis.join("|")) {
      issues.push({
        type: "placeholder-mismatch",
        locale,
        key: k,
        detail: `base=${phBase.join(", ") || "(none)"}, ${locale}=${phThis.join(", ") || "(none)"}`
      });
    }
    const htmlCheck = htmlFragments(val);
    if (!htmlCheck.ok) {
      issues.push({
        type: "html-fragment",
        locale,
        key: k,
        detail: htmlCheck.reason
      });
    }
  }
}

// ---- 輸出：人眼可讀表格 ----
function pad(s: string, len: number) {
  return (s + " ".repeat(len)).slice(0, len);
}
function printTable(rows: { type: string; locale: string; key: string; detail?: string }[]) {
  const header = ["TYPE", "LOCALE", "KEY", "DETAIL"];
  console.log(header.map((h, i) => pad(h, [12, 8, 60, 40][i])).join(" | "));
  console.log("-".repeat(12 + 3 + 8 + 3 + 60 + 3 + 40));
  for (const r of rows) {
    console.log(
      [pad(r.type, 12), pad(r.locale, 8), pad(r.key, 60), pad(r.detail || "", 40)].join(" | ")
    );
  }
}

if (issues.length) {
  console.log(`\n❌ i18n lint found ${issues.length} issue(s)\n`);
  printTable(issues);
} else {
  console.log("✅ i18n lint passed with no issues.");
}

// ---- 報告輸出 ----
if (REPORT_KIND) {
  const data = {
    base: BASE,
    locales: LOCALES,
    counts: {
      total: issues.length,
      byType: issues.reduce((m, i) => ((m[i.type] = (m[i.type] || 0) + 1), m), {} as Record<string, number>),
      byLocale: issues.reduce((m, i) => ((m[i.locale] = (m[i.locale] || 0) + 1), m), {} as Record<string, number>)
    },
    issues
  };

  if (REPORT_KIND === "json") {
    const json = JSON.stringify(data, null, 2);
    if (OUT) {
      fs.mkdirSync(path.dirname(OUT), { recursive: true });
      fs.writeFileSync(OUT, json, "utf8");
      console.log(`\n📝 JSON report written to ${OUT}`);
    } else {
      console.log("\n" + json);
    }
  } else if (REPORT_KIND === "md") {
    const lines = [
      `# i18n Lint Report`,
      ``,
      `- Base locale: \`${BASE}\``,
      `- Total issues: **${issues.length}**`,
      ``,
      `| Type | Locale | Key | Detail |`,
      `|---|---|---|---|`
    ];
    for (const i of issues) {
      lines.push(`| ${i.type} | ${i.locale} | \`${i.key}\` | ${i.detail || ""} |`);
    }
    const md = lines.join("\n");
    if (OUT) {
      fs.mkdirSync(path.dirname(OUT), { recursive: true });
      fs.writeFileSync(OUT, md, "utf8");
      console.log(`\n📝 Markdown report written to ${OUT}`);
    } else {
      console.log("\n" + md);
    }
  }
}

// ---- GitHub Actions 摘要（自動偵測）----
const stepSummary = process.env.GITHUB_STEP_SUMMARY;
if (stepSummary) {
  const mdPath = stepSummary;
  const top5 = issues.slice(0, 20);
  const md = [
    `## i18n Lint Summary`,
    ``,
    `Base: \`${BASE}\`  |  Total: **${issues.length}**`,
    ``,
    `| Type | Locale | Key | Detail |`,
    `|---|---|---|---|`
  ]
    .concat(top5.map((i) => `| ${i.type} | ${i.locale} | \`${i.key}\` | ${i.detail || ""} |`))
    .join("\n");
  fs.appendFileSync(mdPath, md + "\n", "utf8");
  console.log(`\n🧾 Wrote summary to GITHUB_STEP_SUMMARY`);
}

// ---- 退出碼 ----
if (CI && issues.length > 0) process.exit(1);

