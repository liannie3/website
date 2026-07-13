import sharp from "sharp";
import { execSync } from "node:child_process";
import { readFileSync, writeFileSync, existsSync, statSync } from "node:fs";
import path from "node:path";

const MAX = 2000;
const QUALITY = 82;

const root = execSync("git rev-parse --show-toplevel").toString().trim();
const q = (s) => JSON.stringify(s);

function stagedImages() {
  const out = execSync(
    "git diff --cached --name-only --diff-filter=ACMR",
  ).toString();
  return out
    .split("\n")
    .map((s) => s.trim())
    .filter((f) => f.startsWith("public/") && /\.(png|jpe?g)$/i.test(f));
}

const images = stagedImages();
if (images.length === 0) process.exit(0);

const sourceExts = /\.(tsx?|jsx?|mjs|cjs|css|scss|mdx?|html|json)$/i;
const trackedText = execSync("git ls-files")
  .toString()
  .split("\n")
  .map((s) => s.trim())
  .filter((f) => sourceExts.test(f));

function rewriteRefs(oldUrl, newUrl) {
  const esc = oldUrl.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp(`(["'\`(=\\s,])${esc}(["'\`)\\s,?#])`, "g");
  for (const tf of trackedText) {
    const abs = path.join(root, tf);
    if (!existsSync(abs)) continue;
    const content = readFileSync(abs, "utf8");
    if (!re.test(content)) continue;
    re.lastIndex = 0;
    writeFileSync(abs, content.replace(re, (_, a, b) => `${a}${newUrl}${b}`));
    execSync(`git add ${q(tf)}`, { cwd: root });
  }
}

let count = 0;
for (const rel of images) {
  const abs = path.join(root, rel);
  if (!existsSync(abs)) continue;

  const webpRel = rel.replace(/\.[^.]+$/, ".webp");
  const webpAbs = path.join(root, webpRel);
  const before = statSync(abs).size;

  try {
    await sharp(abs)
      .rotate()
      .resize({ width: MAX, height: MAX, fit: "inside", withoutEnlargement: true })
      .webp({ quality: QUALITY, effort: 6 })
      .toFile(webpAbs);
  } catch (err) {
    console.error(`sharp pre-commit: failed to convert ${rel}: ${err.message}`);
    continue;
  }

  const after = statSync(webpAbs).size;
  const oldUrl = "/" + rel.replace(/^public\//, "");
  const newUrl = "/" + webpRel.replace(/^public\//, "");
  rewriteRefs(oldUrl, newUrl);

  execSync(`git rm -f -q ${q(rel)}`, { cwd: root });
  execSync(`git add ${q(webpRel)}`, { cwd: root });
  count++;
  console.log(
    `  ${rel} -> ${webpRel}  (${Math.round(before / 1024)}KB -> ${Math.round(after / 1024)}KB)`,
  );
}

if (count > 0) {
  console.log(`sharp pre-commit: converted ${count} image(s) to WebP and updated references.`);
}
process.exit(0);
