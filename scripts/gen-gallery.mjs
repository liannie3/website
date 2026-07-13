import sharp from "sharp";
import { execSync, execFileSync } from "node:child_process";
import { readdirSync, writeFileSync, readFileSync, existsSync } from "node:fs";
import path from "node:path";

const root = execSync("git rev-parse --show-toplevel").toString().trim();
const dir = path.join(root, "public/gallery");
const outFile = path.join(root, "components/gallery.json");

const prev = existsSync(outFile)
  ? JSON.parse(readFileSync(outFile, "utf8"))
  : [];
const prevBySrc = new Map(prev.map((e) => [e.src, e]));

function videoDims(abs) {
  try {
    const out = execFileSync("ffprobe", [
      "-v", "error",
      "-select_streams", "v:0",
      "-show_entries", "stream=width,height",
      "-of", "csv=s=x:p=0",
      abs,
    ]).toString().trim();
    const [w, h] = out.split("x").map(Number);
    if (w && h) return { w, h };
  } catch {}
  return null;
}

const files = readdirSync(dir)
  .filter((f) => /\.(webp|mp4)$/i.test(f))
  .sort();

const manifest = [];
for (const f of files) {
  const src = "/gallery/" + f;
  const abs = path.join(dir, f);
  if (/\.webp$/i.test(f)) {
    const m = await sharp(abs).metadata();
    manifest.push({ src, w: m.width, h: m.height });
  } else {
    const cached = prevBySrc.get(src);
    const dims = videoDims(abs) || (cached ? { w: cached.w, h: cached.h } : null);
    if (!dims) {
      console.error(`gen-gallery: no dimensions for ${f} (ffprobe missing?), skipping.`);
      continue;
    }
    manifest.push({ src, w: dims.w, h: dims.h });
  }
}

writeFileSync(outFile, JSON.stringify(manifest, null, 2) + "\n");
console.log(`gen-gallery: wrote ${manifest.length} entries to components/gallery.json`);
