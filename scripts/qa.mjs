// Site QA against a running server (default http://localhost:3218, `npm run start -- -p 3218`).
// Checks status codes, redirects, metadata, headings, JSON-LD, internal links,
// image alt text, the agency's copy rules and word counts. Exits 1 on failure.
//
// Usage: node scripts/qa.mjs [baseUrl]
const BASE = process.argv[2] || "http://localhost:3218";
const CANONICAL_HOST = "https://www.brettsabolplumbing.com";

const routes = [
  "/",
  "/about",
  "/residential-plumbing",
  "/commercial",
  "/jet-drain-cleaning",
  "/sewer-line-repair",
  "/heating",
  "/backflow-testing",
  "/service-areas",
  "/service-areas/bucks-county",
  "/service-areas/montgomery-county",
  "/service-areas/philadelphia",
  "/gallery",
  "/contact",
  "/privacy-policy",
  "/terms",
];

const failures = [];
const warn = [];
const fail = (msg) => failures.push(msg);

const decode = (s) =>
  s
    .replace(/&amp;/g, "&")
    .replace(/&#x27;|&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ");

function visibleText(html) {
  return decode(
    html
      .replace(/<script[\s\S]*?<\/script>/gi, " ")
      .replace(/<style[\s\S]*?<\/style>/gi, " ")
      .replace(/<svg[\s\S]*?<\/svg>/gi, " ")
      .replace(/<!--[\s\S]*?-->/g, " ")
      .replace(/<[^>]+>/g, " "),
  )
    .replace(/\s+/g, " ")
    .trim();
}

// Verbatim customer quotes are exempt from copy rules (never edit reviews).
const QUOTES = [
  ["We had an excellent experience", "attention to detail!"],
  ["Called Brett in a panic", "Highly recommend!"],
];

function stripQuotes(text) {
  let t = text;
  for (const [start, end] of QUOTES) {
    let i = t.indexOf(start);
    while (i >= 0) {
      const j = t.indexOf(end, i);
      if (j < 0) break;
      t = t.slice(0, i) + t.slice(j + end.length);
      i = t.indexOf(start);
    }
  }
  return t;
}

function copyRuleViolations(text) {
  const t = stripQuotes(text);
  const issues = [];
  const rules = [
    [/—/, "em dash"],
    [/\s–\s/, "en dash used as punctuation"],
    [/;/, "semicolon"],
    [/…|\.\.\./, "ellipsis"],
    [/\bvs\./i, '"vs."'],
    [/[A-Za-z]\/[A-Za-z]/, "slash in running text"],
  ];
  for (const [re, name] of rules) {
    const m = t.match(re);
    if (m) {
      const at = t.indexOf(m[0]);
      issues.push(`${name}: "...${t.slice(Math.max(0, at - 40), at + 40)}..."`);
    }
  }
  return issues;
}

const titles = new Map();
const descs = new Map();
const internalLinks = new Set();

for (const path of routes) {
  const res = await fetch(BASE + path, { redirect: "manual" });
  if (res.status !== 200) {
    fail(`${path}: HTTP ${res.status}`);
    continue;
  }
  const html = await res.text();

  const title = decode(html.match(/<title>([\s\S]*?)<\/title>/)?.[1] ?? "");
  const desc = decode(html.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? "");
  const canonical = html.match(/<link rel="canonical" href="([^"]*)"/)?.[1];
  const ogImage = html.match(/<meta property="og:image" content="([^"]*)"/)?.[1];
  const h1s = html.match(/<h1[\s>]/g) ?? [];

  if (!title) fail(`${path}: missing <title>`);
  if (title.length > 65) warn.push(`${path}: title ${title.length} chars: ${title}`);
  if (titles.has(title)) fail(`${path}: duplicate title with ${titles.get(title)}`);
  titles.set(title, path);

  if (!desc) fail(`${path}: missing meta description`);
  if (desc.length < 110 || desc.length > 170) warn.push(`${path}: description ${desc.length} chars`);
  if (descs.has(desc)) fail(`${path}: duplicate description with ${descs.get(desc)}`);
  descs.set(desc, path);

  const expected = CANONICAL_HOST + (path === "/" ? "" : path);
  if (canonical !== expected && canonical !== expected + "/") fail(`${path}: canonical ${canonical} (expected ${expected})`);
  if (!ogImage) fail(`${path}: missing og:image`);
  if (h1s.length !== 1) fail(`${path}: ${h1s.length} <h1> elements`);

  for (const m of html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try {
      JSON.parse(m[1]);
    } catch {
      fail(`${path}: JSON-LD does not parse`);
    }
  }

  for (const img of html.matchAll(/<img\b[^>]*>/g)) {
    if (!/\balt="/.test(img[0])) fail(`${path}: <img> without alt: ${img[0].slice(0, 90)}`);
  }

  for (const a of html.matchAll(/<a\b[^>]*href="([^"]+)"/g)) {
    const href = a[1];
    if (href.startsWith("/") && !href.startsWith("//") && !href.startsWith("/_next")) internalLinks.add(href.split("#")[0] || "/");
  }

  const text = visibleText(html.replace(/<head>[\s\S]*?<\/head>/, ""));
  for (const issue of copyRuleViolations(text)) fail(`${path}: copy rule, ${issue}`);
  if (/made with/i.test(text) && /\b(ai|lovable|duda|wix)\b/i.test(text)) fail(`${path}: "Made with" badge text found`);

  const mainHtml = html.match(/<main[\s\S]*?<\/main>/)?.[0] ?? "";
  const words = visibleText(mainHtml).split(" ").filter(Boolean).length;
  console.log(`${String(res.status)}  ${path.padEnd(22)} words ${String(words).padStart(5)}  title ${String(title.length).padStart(2)}  desc ${String(desc.length).padStart(3)}`);
}

for (const link of internalLinks) {
  const known = routes.includes(link) || ["/icon.png", "/apple-icon.png", "/favicon.ico", "/sitemap.xml", "/robots.txt"].includes(link);
  if (!known) {
    const r = await fetch(BASE + link, { redirect: "manual" });
    if (r.status !== 200) fail(`broken internal link ${link} (HTTP ${r.status})`);
  }
}

// Redirects and special files.
const legacy = await fetch(BASE + "/residential", { redirect: "manual" });
if (![301, 308].includes(legacy.status) || !legacy.headers.get("location")?.endsWith("/residential-plumbing")) {
  fail(`/residential should permanently redirect to /residential-plumbing (got ${legacy.status} ${legacy.headers.get("location")})`);
}
const missing = await fetch(BASE + "/this-page-does-not-exist");
if (missing.status !== 404) fail(`unknown URL returned ${missing.status}, expected 404`);

const sitemap = await (await fetch(BASE + "/sitemap.xml")).text();
for (const r of routes) {
  const loc = CANONICAL_HOST + (r === "/" ? "" : r);
  if (!sitemap.includes(`<loc>${loc}</loc>`)) fail(`sitemap missing ${loc}`);
}
const robots = await (await fetch(BASE + "/robots.txt")).text();
if (!robots.includes("Sitemap: " + CANONICAL_HOST + "/sitemap.xml")) fail("robots.txt does not point at the sitemap");
for (const f of ["/favicon.ico", "/icon.png", "/apple-icon.png", "/og/brett-sabol-plumbing.jpg"]) {
  const r = await fetch(BASE + f);
  if (r.status !== 200) fail(`${f} returned ${r.status}`);
}

console.log(`\nChecked ${routes.length} pages and ${internalLinks.size} internal link targets.`);
if (warn.length) console.log("\nWarnings:\n- " + warn.join("\n- "));
if (failures.length) {
  console.log("\nFAILURES:\n- " + failures.join("\n- "));
  process.exit(1);
}
console.log("\nAll checks passed.");
