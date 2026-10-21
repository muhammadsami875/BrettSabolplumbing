// Prepares the client's real photos and logo for the site.
// Source files live in assets/originals (downloaded from the client's own site
// and the client-supplied folder). Nothing here invents or retouches content:
// photos are re-encoded at their native size, never upscaled.
//
// Run: npm run images
import sharp from "sharp";
import { readdir, mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const src = path.join(root, "assets", "originals");
const photosOut = path.join(root, "src", "assets", "photos");
const brandOut = path.join(root, "src", "assets", "brand");
const appDir = path.join(root, "src", "app");
const publicDir = path.join(root, "public");

await mkdir(photosOut, { recursive: true });
await mkdir(brandOut, { recursive: true });
await mkdir(path.join(publicDir, "og"), { recursive: true });

// The logo's blue square, measured from logo-full.png. Rows 0 to 8 carry a
// cyan fade from the source file and x 496+ blends into the white panel, so
// the clean square is x 0 to 495, y 9 to 667.
const MARK_CROP = { left: 0, top: 9, width: 496, height: 659 };

const files = (await readdir(src)).filter((f) => /\.(png|jpe?g)$/i.test(f));

for (const file of files) {
  const name = file.replace(/\.(png|jpe?g)$/i, "");
  if (name === "logo-full") continue;
  const out = path.join(photosOut, `${name}.jpg`);
  const info = await sharp(path.join(src, file))
    .rotate()
    .flatten({ background: "#ffffff" })
    .jpeg({ quality: 88, mozjpeg: true, chromaSubsampling: "4:4:4" })
    .toFile(out);
  console.log(`photo  ${name}.jpg  ${info.width}x${info.height}`);
}

// Logo: full lockup and the square mark, kept pixel-identical to the original.
const logo = path.join(src, "logo-full.png");
await sharp(logo).png({ compressionLevel: 9 }).toFile(path.join(brandOut, "logo-full.png"));
await sharp(logo).extract(MARK_CROP).png({ compressionLevel: 9 }).toFile(path.join(brandOut, "logo-mark.png"));

// Sample the square's own blue so icon padding matches it exactly.
const { data } = await sharp(logo).extract({ left: 6, top: 300, width: 1, height: 1 }).raw().toBuffer({ resolveWithObject: true });
const blue = { r: data[0], g: data[1], b: data[2], alpha: 1 };
console.log(`logo blue sample rgb(${blue.r}, ${blue.g}, ${blue.b})`);

const markBuffer = await sharp(logo).extract(MARK_CROP).toBuffer();
const iconAt = (size) =>
  sharp(markBuffer)
    .resize(size, size, { fit: "contain", background: blue, kernel: "lanczos3" })
    .flatten({ background: blue })
    .ensureAlpha() // ICO frames must be RGBA PNGs
    .png({ compressionLevel: 9 })
    .toBuffer();

await writeFile(path.join(appDir, "icon.png"), await iconAt(512));
await writeFile(path.join(appDir, "apple-icon.png"), await iconAt(180));

// favicon.ico holding 16, 32 and 48 px PNG frames.
const sizes = [16, 32, 48];
const frames = await Promise.all(sizes.map(iconAt));
const header = Buffer.alloc(6);
header.writeUInt16LE(0, 0);
header.writeUInt16LE(1, 2);
header.writeUInt16LE(sizes.length, 4);
const dir = Buffer.alloc(16 * sizes.length);
let offset = 6 + dir.length;
sizes.forEach((size, i) => {
  const o = i * 16;
  dir.writeUInt8(size, o);
  dir.writeUInt8(size, o + 1);
  dir.writeUInt8(0, o + 2);
  dir.writeUInt8(0, o + 3);
  dir.writeUInt16LE(1, o + 4);
  dir.writeUInt16LE(32, o + 6);
  dir.writeUInt32LE(frames[i].length, o + 8);
  dir.writeUInt32LE(offset, o + 12);
  offset += frames[i].length;
});
await writeFile(path.join(appDir, "favicon.ico"), Buffer.concat([header, dir, ...frames]));
console.log("icons  icon.png, apple-icon.png, favicon.ico");

// Social share image: the real van, cropped to 1.91:1 around the lettering.
await sharp(path.join(src, "truck-van-side.png"))
  .extract({ left: 0, top: 30, width: 1125, height: 590 })
  .resize(1200, 630, { kernel: "lanczos3" })
  .flatten({ background: "#ffffff" })
  .jpeg({ quality: 86, mozjpeg: true })
  .toFile(path.join(publicDir, "og", "brett-sabol-plumbing.jpg"));
console.log("og     public/og/brett-sabol-plumbing.jpg 1200x630");
