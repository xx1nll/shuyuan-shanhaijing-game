#!/usr/bin/env node
/**
 * Authoring-time pin → disk fetch. Never called from the student client.
 * Env: SKETCHFAB_TOKEN (account API token) for Sketchfab Download API.
 */
import { createWriteStream } from "node:fs";
import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { pipeline } from "node:stream/promises";
import { Readable } from "node:stream";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const MANIFEST_PATH = join(ROOT, "assets/manifest.json");
const OUT_DIR = join(ROOT, "assets/fetched");
const NOTICE_JSON = join(OUT_DIR, "NOTICE.json");
const INDEX_JSON = join(OUT_DIR, "index.json");
const NOTICE_TXT = join(ROOT, "NOTICE.txt");
const UA = "KunlunNanshan/0.1 (educational; fetch-assets; https://github.com)";
const CAP = 2048;

const SOFTWARE_NOTICE = `Kunlun / 南山經
Third-party notices (MIT / CC0 / Zlib / Apache-2.0 / CC). This project does not reuse prior Shan Hai Jing games.

- three.js — MIT, https://github.com/mrdoob/three.js
- @dgreenheck/ez-tree — MIT, https://github.com/dgreenheck/ez-tree
- three-mesh-bvh — MIT, https://github.com/gkjohnson/three-mesh-bvh
- postprocessing — Zlib, https://github.com/pmndrs/postprocessing
- Draco decoder — Apache-2.0, https://github.com/google/draco
- Ocean shading follows Tessendorf FFT/Gerstner practice as in 0-robert/open-ocean (MIT)
- Grass instancing / wind follows the approach in CK42BB/procedural-grass-threejs (MIT)
- Cloud / weather / star skills: CK42BB procedural-clouds, procedural-weather, procedural-stars (MIT)
- Kenney Nature Kit and Quaternius Stylized Nature are CC0 (rocks/cliffs only; not 山海經 hero plants)
`;

function normalizeLicense(raw) {
  const s = String(raw || "").toLowerCase().replace(/[_-]+/g, " ").trim();
  if (!s || s === "cc0" || s.includes("cc0") || s.includes("public domain") || s === "pd" || s.includes("no copyright")) {
    if (s.includes("cc0")) return "cc0";
    if (s.includes("public domain") || s === "pd" || s.includes("no copyright")) return "pd";
  }
  if (s.includes("nc")) return "cc-nc";
  if (s.includes("nd")) return "cc-nd";
  if (s.includes("sa") || s.includes("sharealike") || s.includes("share alike")) return "cc-by-sa";
  if (s.includes("by") || s.includes("attribution")) return "cc-by";
  if (s === "cc0") return "cc0";
  return s || "unknown";
}

function licenseAllowed(raw, use, rules) {
  const n = normalizeLicense(raw);
  if (n === "unknown") return false;
  if (n === "cc-nc" || n === "cc-nd") return false;
  if (rules.deny?.includes(n)) return false;
  if (n === "cc-by-sa" && !(rules.saOnlyFor || []).includes(use)) return false;
  return (rules.allow || []).includes(n) || n === "cc0" || n === "pd" || n === "cc-by" || n === "cc-by-sa";
}

async function getJson(url, headers = {}) {
  const res = await fetch(url, { headers: { "User-Agent": UA, ...headers } });
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  return res.json();
}

async function download(url, dest, headers = {}) {
  await mkdir(dirname(dest), { recursive: true });
  const res = await fetch(url, { headers: { "User-Agent": UA, ...headers } });
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  await pipeline(Readable.fromWeb(res.body), createWriteStream(dest));
}

function slotRel(slot, suffix) {
  return `${slot.id}${suffix}`;
}

function pickPolyMap(files, key, res) {
  const node = files[key];
  if (!node) return null;
  const rung = node[res] || node["1k"] || node["4k"];
  if (!rung) return null;
  const jpg = rung.jpg || rung.png;
  return jpg?.url ? { url: jpg.url, ext: rung.jpg ? ".jpg" : ".png" } : null;
}

async function fetchWikimedia(slot) {
  const title = slot.file.startsWith("File:") ? slot.file : `File:${slot.file}`;
  const api =
    "https://commons.wikimedia.org/w/api.php?action=query&titles=" +
    encodeURIComponent(title) +
    "&prop=imageinfo&iiprop=url|extmetadata|size|mime&iiurlwidth=" +
    CAP +
    "&format=json";
  const data = await getJson(api);
  const page = Object.values(data.query?.pages || {})[0];
  const info = page?.imageinfo?.[0];
  if (!info) throw new Error(`Wikimedia miss ${title}`);
  const meta = info.extmetadata || {};
  const license = meta.LicenseShortName?.value || slot.license;
  const author = String(meta.Artist?.value || slot.author || "unknown")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  const url = info.thumburl || info.url;
  const ext = (info.mime || "image/jpeg").includes("png") ? ".png" : ".jpg";
  const rel = slotRel(slot, ext);
  const dest = join(OUT_DIR, rel);
  await download(url, dest);
  return {
    id: slot.id,
    kind: "atlas",
    path: rel,
    license,
    author,
    pageUrl: info.descriptionurl || slot.pageUrl,
    analogue: slot.analogue,
    source: "wikimedia",
  };
}

async function fetchPolyHavenTexture(slot, resLabel) {
  const files = await getJson(`https://api.polyhaven.com/files/${slot.asset}`);
  const info = await getJson(`https://api.polyhaven.com/info/${slot.asset}`);
  const authors = Object.keys(info.authors || {}).join(", ") || slot.author;
  const maps = {};
  const downloaded = [];
  const wanted = slot.maps || ["Diffuse", "nor_gl", "Rough"];
  const nameOf = { Diffuse: "diff", nor_gl: "nor", Rough: "rough" };
  for (const key of wanted) {
    const picked = pickPolyMap(files, key, resLabel);
    if (!picked) continue;
    const rel = `${slot.id}-${nameOf[key] || key.toLowerCase()}${picked.ext}`;
    await download(picked.url, join(OUT_DIR, rel));
    maps[key === "Diffuse" ? "map" : key === "nor_gl" ? "normalMap" : "roughnessMap"] = rel;
    downloaded.push(rel);
  }
  if (!maps.map) throw new Error(`Poly Haven ${slot.asset} missing Diffuse`);
  return {
    id: slot.id,
    kind: "pbr",
    path: maps.map,
    maps,
    files: downloaded,
    license: "CC0",
    author: authors,
    pageUrl: slot.pageUrl,
    analogue: slot.analogue,
    source: "polyhaven",
    asset: slot.asset,
  };
}

function urlBasename(url) {
  return decodeURIComponent(String(url).split("?")[0].split("/").pop() || "model.gltf");
}

async function fetchPolyHavenModel(slot, resLabel) {
  const files = await getJson(`https://api.polyhaven.com/files/${slot.asset}`);
  const info = await getJson(`https://api.polyhaven.com/info/${slot.asset}`);
  const authors = Object.keys(info.authors || {}).join(", ") || slot.author;
  const gltf = files.gltf?.[resLabel] || files.gltf?.["1k"] || files.gltf?.["2k"];
  const pack = gltf?.gltf;
  if (!pack?.url) throw new Error(`Poly Haven model ${slot.asset} has no gltf`);
  const folder = slot.id;
  await rm(join(OUT_DIR, `${slot.id}.gltf`), { force: true });
  await rm(join(OUT_DIR, folder), { recursive: true, force: true });
  const gltfRel = `${folder}/${urlBasename(pack.url)}`;
  await download(pack.url, join(OUT_DIR, gltfRel));
  const extras = [];
  for (const [name, file] of Object.entries(pack.include || {})) {
    const rel = `${folder}/${name}`.replaceAll("\\", "/");
    await mkdir(join(OUT_DIR, dirname(rel)), { recursive: true });
    await download(file.url, join(OUT_DIR, rel));
    extras.push(rel);
  }
  return {
    id: slot.id,
    kind: "gltf",
    path: gltfRel,
    files: [gltfRel, ...extras],
    license: "CC0",
    author: authors,
    pageUrl: slot.pageUrl,
    analogue: slot.analogue,
    source: "polyhaven",
    asset: slot.asset,
  };
}

async function fetchSketchfab(slot, token) {
  if (!token) {
    return { id: slot.id, skipped: "no-SKETCHFAB_TOKEN", source: "sketchfab", uid: slot.uid };
  }
  const meta = await getJson(`https://api.sketchfab.com/v3/models/${slot.uid}`, {
    Authorization: `Token ${token}`,
  });
  const label = meta.license?.label || slot.license;
  if (!meta.isDownloadable) throw new Error(`Sketchfab ${slot.uid} not downloadable`);
  const dl = await getJson(`https://api.sketchfab.com/v3/models/${slot.uid}/download`, {
    Authorization: `Token ${token}`,
  });
  const glb = dl.glb?.url;
  if (!glb) throw new Error(`Sketchfab ${slot.uid} has no GLB`);
  const rel = `${slot.id}.glb`;
  await download(glb, join(OUT_DIR, rel));
  return {
    id: slot.id,
    kind: "glb",
    path: rel,
    license: label,
    author: meta.user?.displayName || meta.user?.username || slot.author,
    pageUrl: meta.viewerUrl || slot.pageUrl,
    analogue: slot.analogue,
    source: "sketchfab",
    uid: slot.uid,
    heightMeters: slot.heightMeters,
    yaw: slot.yaw ?? 0,
  };
}

async function main() {
  const manifest = JSON.parse(await readFile(MANIFEST_PATH, "utf8"));
  const rules = manifest.license;
  const token = process.env.SKETCHFAB_TOKEN || "";
  await mkdir(OUT_DIR, { recursive: true });
  const records = [];
  const indexSlots = {};
  const skipped = [];

  for (const slot of manifest.slots) {
    if (!slot.source) {
      skipped.push({ id: slot.id, reason: slot.note || "unpinned" });
      continue;
    }
    if (slot.license && !licenseAllowed(slot.license, slot.use, rules)) {
      skipped.push({ id: slot.id, reason: `license denied: ${slot.license}` });
      continue;
    }
    try {
      let rec;
      if (slot.source === "wikimedia") rec = await fetchWikimedia(slot);
      else if (slot.source === "polyhaven" && slot.kind === "model") {
        const fruit = String(slot.id).includes("fruit");
        rec = await fetchPolyHavenModel(slot, slot.res || (fruit ? "2k" : "1k"));
      }
      else if (slot.source === "polyhaven") rec = await fetchPolyHavenTexture(slot, "2k");
      else if (slot.source === "sketchfab") rec = await fetchSketchfab(slot, token);
      else throw new Error(`unknown source ${slot.source}`);

      if (rec.skipped) {
        skipped.push({ id: slot.id, reason: rec.skipped });
        continue;
      }
      if (rec.license && !licenseAllowed(rec.license, slot.use, rules)) {
        skipped.push({ id: slot.id, reason: `fetched license denied: ${rec.license}` });
        continue;
      }
      rec.use = slot.use;
      rec.analogue = slot.analogue;
      rec.heightMeters = slot.heightMeters ?? rec.heightMeters;
      rec.yaw = slot.yaw ?? rec.yaw ?? 0;
      records.push(rec);
      indexSlots[slot.id] = rec;
      console.log("ok", slot.id, rec.path || rec.skipped);
    } catch (err) {
      skipped.push({ id: slot.id, reason: String(err.message || err) });
      console.error("fail", slot.id, err.message || err);
    }
  }

  const notice = {
    generatedAt: new Date().toISOString(),
    records,
    skipped,
  };
  await writeFile(NOTICE_JSON, JSON.stringify(notice, null, 2));
  await writeFile(INDEX_JSON, JSON.stringify({ generatedAt: notice.generatedAt, slots: indexSlots }, null, 2));

  const lines = [SOFTWARE_NOTICE, "Fetched art (pinned; authoring fetch, not runtime search)", ""];
  for (const rec of records) {
    lines.push(
      `- ${rec.id} — ${rec.license}; ${rec.author}; ${rec.pageUrl || ""}` +
        (rec.analogue ? ` (${rec.analogue})` : ""),
    );
  }
  if (skipped.length) {
    lines.push("", "Skipped / unresolved", "");
    for (const s of skipped) lines.push(`- ${s.id} — ${s.reason}`);
  }
  await writeFile(NOTICE_TXT, lines.join("\n") + "\n");
  console.log(`wrote ${records.length} assets, ${skipped.length} skipped`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
