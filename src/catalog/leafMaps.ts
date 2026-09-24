import {
  CanvasTexture,
  LinearFilter,
  LinearMipmapLinearFilter,
  RepeatWrapping,
  SRGBColorSpace,
  Texture,
} from "three";

const SIZE = 512;

function canvasTex(
  draw: (ctx: CanvasRenderingContext2D, w: number, h: number) => void,
  srgb = true,
): CanvasTexture {
  const canvas = document.createElement("canvas");
  canvas.width = SIZE;
  canvas.height = SIZE;
  const ctx = canvas.getContext("2d")!;
  ctx.clearRect(0, 0, SIZE, SIZE);
  draw(ctx, SIZE, SIZE);
  const tex = new CanvasTexture(canvas);
  if (srgb) tex.colorSpace = SRGBColorSpace;
  tex.minFilter = LinearMipmapLinearFilter;
  tex.magFilter = LinearFilter;
  tex.generateMipmaps = true;
  tex.anisotropy = 8;
  tex.needsUpdate = true;
  return tex;
}

function heightToNormal(
  paintHeight: (ctx: CanvasRenderingContext2D, w: number, h: number) => void,
  strength = 3.2,
): CanvasTexture {
  const hCanvas = document.createElement("canvas");
  hCanvas.width = SIZE;
  hCanvas.height = SIZE;
  const hctx = hCanvas.getContext("2d")!;
  hctx.fillStyle = "#808080";
  hctx.fillRect(0, 0, SIZE, SIZE);
  paintHeight(hctx, SIZE, SIZE);
  const src = hctx.getImageData(0, 0, SIZE, SIZE).data;
  const nCanvas = document.createElement("canvas");
  nCanvas.width = SIZE;
  nCanvas.height = SIZE;
  const nctx = nCanvas.getContext("2d")!;
  const out = nctx.createImageData(SIZE, SIZE);
  const at = (x: number, y: number) => {
    const xx = Math.max(0, Math.min(SIZE - 1, x));
    const yy = Math.max(0, Math.min(SIZE - 1, y));
    return src[(yy * SIZE + xx) * 4]! / 255;
  };
  for (let y = 0; y < SIZE; y += 1) {
    for (let x = 0; x < SIZE; x += 1) {
      const dx = (at(x + 1, y) - at(x - 1, y)) * strength;
      const dy = (at(x, y + 1) - at(x, y - 1)) * strength;
      const len = Math.hypot(dx, dy, 1) || 1;
      const i = (y * SIZE + x) * 4;
      out.data[i] = Math.floor(((-dx / len) * 0.5 + 0.5) * 255);
      out.data[i + 1] = Math.floor(((-dy / len) * 0.5 + 0.5) * 255);
      out.data[i + 2] = Math.floor((1 / len) * 0.5 * 255 + 128);
      out.data[i + 3] = 255;
    }
  }
  nctx.putImageData(out, 0, 0);
  const tex = new CanvasTexture(nCanvas);
  tex.minFilter = LinearMipmapLinearFilter;
  tex.generateMipmaps = true;
  tex.needsUpdate = true;
  return tex;
}

export interface LeafMaps {
  map: Texture;
  normalMap: Texture;
}

export function cassiaShape(ctx: CanvasRenderingContext2D, s: number): void {
  ctx.beginPath();
  ctx.moveTo(0, -s * 0.46);
  ctx.bezierCurveTo(s * 0.07, -s * 0.43, s * 0.125, -s * 0.16, s * 0.118, s * 0.04);
  ctx.bezierCurveTo(s * 0.11, s * 0.27, s * 0.047, s * 0.44, 0, s * 0.48);
  ctx.bezierCurveTo(-s * 0.047, s * 0.44, -s * 0.11, s * 0.27, -s * 0.118, s * 0.04);
  ctx.bezierCurveTo(-s * 0.125, -s * 0.16, -s * 0.07, -s * 0.43, 0, -s * 0.46);
}

export function lobedMulberry(ctx: CanvasRenderingContext2D, s: number): void {
  ctx.beginPath();
  ctx.moveTo(0, -s * 0.43);
  ctx.bezierCurveTo(s * 0.09, -s * 0.39, s * 0.11, -s * 0.28, s * 0.09, -s * 0.2);
  ctx.bezierCurveTo(s * 0.3, -s * 0.19, s * 0.4, s * 0.03, s * 0.23, s * 0.12);
  ctx.bezierCurveTo(s * 0.36, s * 0.19, s * 0.27, s * 0.34, s * 0.11, s * 0.37);
  ctx.bezierCurveTo(s * 0.19, s * 0.46, s * 0.06, s * 0.48, 0, s * 0.48);
  ctx.bezierCurveTo(-s * 0.06, s * 0.48, -s * 0.19, s * 0.46, -s * 0.11, s * 0.37);
  ctx.bezierCurveTo(-s * 0.27, s * 0.34, -s * 0.36, s * 0.19, -s * 0.23, s * 0.12);
  ctx.bezierCurveTo(-s * 0.4, s * 0.03, -s * 0.3, -s * 0.19, -s * 0.09, -s * 0.2);
  ctx.bezierCurveTo(-s * 0.11, -s * 0.28, -s * 0.09, -s * 0.39, 0, -s * 0.43);
}

export function mulberrySimpleShape(ctx: CanvasRenderingContext2D, s: number): void {
  ctx.beginPath();
  ctx.moveTo(0, -s * 0.44);
  ctx.bezierCurveTo(s * 0.19, -s * 0.31, s * 0.24, 0.04 * s, s * 0.16, s * 0.27);
  ctx.bezierCurveTo(s * 0.11, s * 0.43, s * 0.03, s * 0.47, 0, s * 0.48);
  ctx.bezierCurveTo(-s * 0.03, s * 0.47, -s * 0.11, s * 0.43, -s * 0.16, s * 0.27);
  ctx.bezierCurveTo(-s * 0.24, 0.04 * s, -s * 0.19, -s * 0.31, 0, -s * 0.44);
}

export function datePlumShape(ctx: CanvasRenderingContext2D, s: number): void {
  ctx.beginPath();
  ctx.ellipse(0, 0, s * 0.17, s * 0.41, 0, 0, Math.PI * 2);
}

export function ophiopogonShape(ctx: CanvasRenderingContext2D, s: number): void {
  const w = s * 0.035;
  ctx.beginPath();
  ctx.moveTo(0, -s * 0.48);
  ctx.bezierCurveTo(w, -s * 0.31, w * 1.3, s * 0.08, w * 0.85, s * 0.35);
  ctx.bezierCurveTo(w * 0.45, s * 0.46, 0, s * 0.48, 0, s * 0.48);
  ctx.bezierCurveTo(0, s * 0.48, -w * 0.45, s * 0.46, -w * 0.85, s * 0.35);
  ctx.bezierCurveTo(-w * 1.3, s * 0.08, -w, -s * 0.31, 0, -s * 0.48);
}

function luminanceNormal(src: ImageData, strength = 2.4): CanvasTexture {
  const w = src.width;
  const h = src.height;
  const data = src.data;
  const nCanvas = document.createElement("canvas");
  nCanvas.width = w;
  nCanvas.height = h;
  const nctx = nCanvas.getContext("2d")!;
  const out = nctx.createImageData(w, h);
  const at = (x: number, y: number) => {
    const xx = Math.max(0, Math.min(w - 1, x));
    const yy = Math.max(0, Math.min(h - 1, y));
    const i = (yy * w + xx) * 4;
    return (data[i]! * 0.3 + data[i + 1]! * 0.59 + data[i + 2]! * 0.11) / 255;
  };
  for (let y = 0; y < h; y += 1) {
    for (let x = 0; x < w; x += 1) {
      const dx = (at(x + 1, y) - at(x - 1, y)) * strength;
      const dy = (at(x, y + 1) - at(x, y - 1)) * strength;
      const len = Math.hypot(dx, dy, 1) || 1;
      const i = (y * w + x) * 4;
      out.data[i] = Math.floor(((-dx / len) * 0.5 + 0.5) * 255);
      out.data[i + 1] = Math.floor(((-dy / len) * 0.5 + 0.5) * 255);
      out.data[i + 2] = Math.floor((1 / len) * 0.5 * 255 + 128);
      out.data[i + 3] = data[i + 3]!;
    }
  }
  nctx.putImageData(out, 0, 0);
  const tex = new CanvasTexture(nCanvas);
  tex.minFilter = LinearMipmapLinearFilter;
  tex.generateMipmaps = true;
  tex.needsUpdate = true;
  return tex;
}

export function photoLeafMaps(
  img: CanvasImageSource,
  shape: (ctx: CanvasRenderingContext2D, s: number) => void,
  size = 1024,
): LeafMaps {
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d")!;
  ctx.clearRect(0, 0, size, size);
  ctx.save();
  ctx.translate(size / 2, size / 2);
  shape(ctx, size);
  ctx.clip();
  ctx.translate(-size / 2, -size / 2);
  ctx.drawImage(img, 0, 0, size, size);
  ctx.restore();
  const albedo = ctx.getImageData(0, 0, size, size);
  const map = new CanvasTexture(canvas);
  map.colorSpace = SRGBColorSpace;
  map.minFilter = LinearMipmapLinearFilter;
  map.magFilter = LinearFilter;
  map.generateMipmaps = true;
  map.anisotropy = 8;
  map.needsUpdate = true;
  return { map, normalMap: luminanceNormal(albedo) };
}

export function pbrBark(
  map: Texture,
  normalMap?: Texture,
  roughnessMap?: Texture,
): { map: Texture; normalMap?: Texture; roughnessMap?: Texture } {
  map.wrapS = map.wrapT = RepeatWrapping;
  map.repeat.set(2, 4);
  if (normalMap) {
    normalMap.wrapS = normalMap.wrapT = RepeatWrapping;
    normalMap.repeat.set(2, 4);
  }
  if (roughnessMap) {
    roughnessMap.wrapS = roughnessMap.wrapT = RepeatWrapping;
    roughnessMap.repeat.set(2, 4);
  }
  return { map, normalMap, roughnessMap };
}

function leafPair(
  albedo: (ctx: CanvasRenderingContext2D, w: number, h: number) => void,
  height: (ctx: CanvasRenderingContext2D, w: number, h: number) => void,
): LeafMaps {
  return { map: canvasTex(albedo), normalMap: heightToNormal(height) };
}

/** 肉桂：狹橢圓革質、三出脈、緣反卷。郭璞葉似枇杷 */
export function cassiaLeafMaps(): LeafMaps {
  return leafPair(
    (ctx, w, h) => {
      ctx.translate(w / 2, h / 2);
      cassiaShape(ctx, w);
      const g = ctx.createLinearGradient(0, -h * 0.45, 0, h * 0.48);
      g.addColorStop(0, "#16351c");
      g.addColorStop(0.35, "#1f5a2c");
      g.addColorStop(0.7, "#245a32");
      g.addColorStop(1, "#142a18");
      ctx.fillStyle = g;
      ctx.fill();
      const spec = ctx.createRadialGradient(-w * 0.08, -h * 0.12, 4, -w * 0.04, -h * 0.08, w * 0.22);
      spec.addColorStop(0, "rgba(210, 230, 170, 0.32)");
      spec.addColorStop(1, "rgba(210, 230, 170, 0)");
      ctx.fillStyle = spec;
      ctx.fill();
      ctx.save();
      cassiaShape(ctx, w);
      ctx.clip();
      ctx.strokeStyle = "rgba(12, 28, 14, 0.55)";
      ctx.lineWidth = 10;
      ctx.stroke();
      ctx.restore();
      ctx.strokeStyle = "#c4a35a";
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(0, -h * 0.43);
      ctx.lineTo(0, h * 0.46);
      ctx.stroke();
      ctx.strokeStyle = "#3d7a48";
      ctx.lineWidth = 2.2;
      ctx.beginPath();
      ctx.moveTo(0, -h * 0.28);
      ctx.quadraticCurveTo(w * 0.09, -h * 0.12, w * 0.1, h * 0.04);
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(0, -h * 0.28);
      ctx.quadraticCurveTo(-w * 0.09, -h * 0.12, -w * 0.1, h * 0.04);
      ctx.stroke();
      ctx.strokeStyle = "rgba(55, 110, 62, 0.85)";
      ctx.lineWidth = 1.4;
      for (let i = -4; i <= 6; i += 1) {
        ctx.beginPath();
        ctx.moveTo(0, i * 18);
        ctx.quadraticCurveTo(18, i * 18 + 10, 48, i * 20);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(0, i * 18);
        ctx.quadraticCurveTo(-18, i * 18 + 10, -48, i * 20);
        ctx.stroke();
      }
    },
    (ctx, w, h) => {
      ctx.translate(w / 2, h / 2);
      cassiaShape(ctx, w);
      ctx.fillStyle = "#9a9a9a";
      ctx.fill();
      ctx.strokeStyle = "#dedede";
      ctx.lineWidth = 6;
      ctx.beginPath();
      ctx.moveTo(0, -h * 0.43);
      ctx.lineTo(0, h * 0.46);
      ctx.stroke();
      ctx.lineWidth = 2.4;
      ctx.strokeStyle = "#c8c8c8";
      for (let i = -4; i <= 6; i += 1) {
        ctx.beginPath();
        ctx.moveTo(0, i * 18);
        ctx.quadraticCurveTo(18, i * 18 + 10, 48, i * 20);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(0, i * 18);
        ctx.quadraticCurveTo(-18, i * 18 + 10, -48, i * 20);
        ctx.stroke();
      }
    },
  );
}

/** 構樹：同一樹上可有全緣與 3–5 裂葉 */
export function mulberryLeafMaps(): LeafMaps {
  return leafPair(
    (ctx, w, h) => {
      ctx.translate(w / 2, h / 2 + 8);
      lobedMulberry(ctx, w);
      const g = ctx.createLinearGradient(0, -h * 0.4, 0, h * 0.45);
      g.addColorStop(0, "#4a5e30");
      g.addColorStop(0.5, "#3a4f28");
      g.addColorStop(1, "#2a3818");
      ctx.fillStyle = g;
      ctx.fill();
      ctx.strokeStyle = "#1a1410";
      ctx.lineWidth = 5;
      ctx.stroke();
      ctx.strokeStyle = "#2a2018";
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(0, -h * 0.38);
      ctx.lineTo(0, h * 0.45);
      ctx.stroke();
      ctx.strokeStyle = "#2a3820";
      ctx.lineWidth = 2;
      for (const s of [-1, 1]) {
        ctx.beginPath();
        ctx.moveTo(0, -80);
        ctx.quadraticCurveTo(s * 80, -20, s * 104, 48);
        ctx.stroke();
      }
    },
    (ctx, w, h) => {
      ctx.translate(w / 2, h / 2 + 8);
      lobedMulberry(ctx, w);
      ctx.fillStyle = "#8e8e8e";
      ctx.fill();
      ctx.strokeStyle = "#d0d0d0";
      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.moveTo(0, -h * 0.38);
      ctx.lineTo(0, h * 0.45);
      ctx.stroke();
    },
  );
}

export function mulberrySimpleLeafMaps(): LeafMaps {
  return leafPair(
    (ctx, w, h) => {
      ctx.translate(w / 2, h / 2);
      ctx.beginPath();
      ctx.moveTo(0, -h * 0.44);
      ctx.bezierCurveTo(w * 0.19, -h * 0.31, w * 0.24, 0.04 * h, w * 0.16, h * 0.27);
      ctx.bezierCurveTo(w * 0.11, h * 0.43, w * 0.03, h * 0.47, 0, h * 0.48);
      ctx.bezierCurveTo(-w * 0.03, h * 0.47, -w * 0.11, h * 0.43, -w * 0.16, h * 0.27);
      ctx.bezierCurveTo(-w * 0.24, 0.04 * h, -w * 0.19, -h * 0.31, 0, -h * 0.44);
      ctx.fillStyle = "#445828";
      ctx.fill();
      const spec = ctx.createRadialGradient(-40, -40, 8, 0, 0, 140);
      spec.addColorStop(0, "rgba(180, 190, 120, 0.18)");
      spec.addColorStop(1, "rgba(180, 190, 120, 0)");
      ctx.fillStyle = spec;
      ctx.fill();
      ctx.strokeStyle = "#1a1410";
      ctx.lineWidth = 4;
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(0, -h * 0.4);
      ctx.lineTo(0, h * 0.45);
      ctx.strokeStyle = "#2a2018";
      ctx.lineWidth = 3;
      ctx.stroke();
    },
    (ctx, w, h) => {
      ctx.translate(w / 2, h / 2);
      ctx.beginPath();
      ctx.ellipse(0, 8, 92, 210, 0, 0, Math.PI * 2);
      ctx.fillStyle = "#909090";
      ctx.fill();
      ctx.strokeStyle = "#d4d4d4";
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(0, -h * 0.4);
      ctx.lineTo(0, h * 0.45);
      ctx.stroke();
    },
  );
}

/** 君遷子：較小全緣卵狀橢圓葉，側脈密 */
export function datePlumLeafMaps(): LeafMaps {
  return leafPair(
    (ctx, w, h) => {
      ctx.translate(w / 2, h / 2);
      ctx.beginPath();
      ctx.ellipse(0, 8, 88, 210, 0, 0, Math.PI * 2);
      const g = ctx.createLinearGradient(0, -200, 0, 220);
      g.addColorStop(0, "#4a6a38");
      g.addColorStop(0.45, "#3d5a30");
      g.addColorStop(1, "#2a3c1c");
      ctx.fillStyle = g;
      ctx.fill();
      const spec = ctx.createRadialGradient(-30, -50, 6, 0, 0, 160);
      spec.addColorStop(0, "rgba(200, 210, 140, 0.22)");
      spec.addColorStop(1, "rgba(200, 210, 140, 0)");
      ctx.fillStyle = spec;
      ctx.fill();
      ctx.strokeStyle = "#243c20";
      ctx.lineWidth = 4;
      ctx.stroke();
      ctx.beginPath();
      ctx.moveTo(0, -196);
      ctx.lineTo(0, 214);
      ctx.strokeStyle = "#6a7a38";
      ctx.lineWidth = 3;
      ctx.stroke();
      ctx.strokeStyle = "#4a6230";
      ctx.lineWidth = 1.6;
      for (let i = -6; i <= 7; i += 1) {
        ctx.beginPath();
        ctx.moveTo(0, i * 22);
        ctx.quadraticCurveTo(28, i * 22 + 10, 72, i * 18);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(0, i * 22);
        ctx.quadraticCurveTo(-28, i * 22 + 10, -72, i * 18);
        ctx.stroke();
      }
    },
    (ctx, w, h) => {
      ctx.translate(w / 2, h / 2);
      ctx.beginPath();
      ctx.ellipse(0, 8, 88, 210, 0, 0, Math.PI * 2);
      ctx.fillStyle = "#949494";
      ctx.fill();
      ctx.strokeStyle = "#e0e0e0";
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.moveTo(0, -196);
      ctx.lineTo(0, 214);
      ctx.stroke();
      ctx.lineWidth = 1.8;
      ctx.strokeStyle = "#c8c8c8";
      for (let i = -6; i <= 7; i += 1) {
        ctx.beginPath();
        ctx.moveTo(0, i * 22);
        ctx.quadraticCurveTo(28, i * 22 + 10, 72, i * 18);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(0, i * 22);
        ctx.quadraticCurveTo(-28, i * 22 + 10, -72, i * 18);
        ctx.stroke();
      }
    },
  );
}

/** 麥冬：線形葉、平行脈 */
export function ophiopogonLeafMaps(): LeafMaps {
  return leafPair(
    (ctx, w, h) => {
      ctx.translate(w / 2, h / 2);
      ctx.beginPath();
      ctx.moveTo(0, -h * 0.48);
      ctx.bezierCurveTo(16, -h * 0.31, 22, h * 0.08, 14, h * 0.35);
      ctx.bezierCurveTo(8, h * 0.46, 0, h * 0.48, 0, h * 0.48);
      ctx.bezierCurveTo(0, h * 0.48, -8, h * 0.46, -14, h * 0.35);
      ctx.bezierCurveTo(-22, h * 0.08, -16, -h * 0.31, 0, -h * 0.48);
      const g = ctx.createLinearGradient(-20, 0, 20, 0);
      g.addColorStop(0, "#1a3c22");
      g.addColorStop(0.5, "#2f6a3c");
      g.addColorStop(1, "#1a3c22");
      ctx.fillStyle = g;
      ctx.fill();
      ctx.strokeStyle = "#3d7a48";
      ctx.lineWidth = 1.8;
      for (const x of [-8, 0, 8]) {
        ctx.beginPath();
        ctx.moveTo(x * 0.4, -h * 0.46);
        ctx.lineTo(x, h * 0.46);
        ctx.stroke();
      }
    },
    (ctx, w, h) => {
      ctx.translate(w / 2, h / 2);
      ctx.fillStyle = "#888";
      ctx.fillRect(-16, -h * 0.48, 32, h * 0.96);
      ctx.strokeStyle = "#ddd";
      ctx.lineWidth = 2;
      for (const x of [-8, 0, 8]) {
        ctx.beginPath();
        ctx.moveTo(x, -h * 0.46);
        ctx.lineTo(x, h * 0.46);
        ctx.stroke();
      }
    },
  );
}

export function cassiaPetalMap(): CanvasTexture {
  return canvasTex((ctx, w, h) => {
    ctx.translate(w / 2, h / 2);
    ctx.beginPath();
    ctx.moveTo(0, -h * 0.42);
    ctx.bezierCurveTo(w * 0.16, -h * 0.2, w * 0.14, h * 0.18, 0, h * 0.42);
    ctx.bezierCurveTo(-w * 0.14, h * 0.18, -w * 0.16, -h * 0.2, 0, -h * 0.42);
    const g = ctx.createLinearGradient(0, -h * 0.4, 0, h * 0.4);
    g.addColorStop(0, "#fff8e4");
    g.addColorStop(0.5, "#f0e0b0");
    g.addColorStop(1, "#d4c48a");
    ctx.fillStyle = g;
    ctx.fill();
    ctx.strokeStyle = "#c4b078";
    ctx.lineWidth = 3;
    ctx.stroke();
    ctx.strokeStyle = "rgba(180, 140, 70, 0.45)";
    ctx.beginPath();
    ctx.moveTo(0, -h * 0.36);
    ctx.lineTo(0, h * 0.36);
    ctx.stroke();
  });
}

export function glowDiskMap(): CanvasTexture {
  return canvasTex((ctx, w, h) => {
    const g = ctx.createRadialGradient(w / 2, h / 2, 8, w / 2, h / 2, w * 0.48);
    g.addColorStop(0, "#fff6c8");
    g.addColorStop(0.45, "#ffe07a");
    g.addColorStop(1, "rgba(255, 200, 80, 0)");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, w, h);
  });
}

export function sepalMap(): CanvasTexture {
  return canvasTex((ctx, w, h) => {
    ctx.translate(w / 2, h / 2);
    ctx.beginPath();
    ctx.moveTo(0, -h * 0.4);
    ctx.bezierCurveTo(w * 0.12, -h * 0.1, w * 0.1, h * 0.2, 0, h * 0.42);
    ctx.bezierCurveTo(-w * 0.1, h * 0.2, -w * 0.12, -h * 0.1, 0, -h * 0.4);
    ctx.fillStyle = "#3a5428";
    ctx.fill();
    ctx.strokeStyle = "#243818";
    ctx.lineWidth = 3;
    ctx.stroke();
  });
}

export function zhuyuFloretMap(): CanvasTexture {
  return canvasTex((ctx, w, h) => {
    ctx.translate(w / 2, h / 2);
    ctx.beginPath();
    ctx.moveTo(0, -h * 0.42);
    ctx.bezierCurveTo(w * 0.14, -h * 0.1, w * 0.1, h * 0.22, 0, h * 0.4);
    ctx.bezierCurveTo(-w * 0.1, h * 0.22, -w * 0.14, -h * 0.1, 0, -h * 0.42);
    const g = ctx.createLinearGradient(0, -h * 0.4, 0, h * 0.4);
    g.addColorStop(0, "#f4fffb");
    g.addColorStop(0.6, "#d7ebe4");
    g.addColorStop(1, "#9ec4b4");
    ctx.fillStyle = g;
    ctx.fill();
  });
}

function barkWrap(tex: CanvasTexture): CanvasTexture {
  tex.wrapS = tex.wrapT = RepeatWrapping;
  tex.repeat.set(2, 4);
  return tex;
}

export function cinnamonBarkMap(): CanvasTexture {
  return barkWrap(
    canvasTex((ctx, w, h) => {
      ctx.fillStyle = "#6a5344";
      ctx.fillRect(0, 0, w, h);
      for (let i = 0; i < 28; i += 1) {
        ctx.fillStyle = i % 2 ? "#5a4638" : "#7a5a40";
        ctx.fillRect(0, i * 18, w, 14);
      }
      ctx.strokeStyle = "rgba(120, 70, 36, 0.45)";
      ctx.lineWidth = 8;
      for (let i = 0; i < 10; i += 1) {
        ctx.beginPath();
        ctx.moveTo(i * 52, 0);
        ctx.bezierCurveTo(i * 52 + 14, 160, i * 52 - 12, 320, i * 52, 512);
        ctx.stroke();
      }
    }),
  );
}

export function blackGrainBarkMap(): CanvasTexture {
  return barkWrap(
    canvasTex((ctx, w, h) => {
      ctx.fillStyle = "#1a1410";
      ctx.fillRect(0, 0, w, h);
      ctx.strokeStyle = "#0a0806";
      ctx.lineWidth = 6;
      for (let i = 0; i < 18; i += 1) {
        ctx.beginPath();
        ctx.moveTo(i * 30, 0);
        ctx.bezierCurveTo(i * 30 + 14, 170, i * 30 - 10, 330, i * 30, 512);
        ctx.stroke();
      }
      ctx.strokeStyle = "rgba(80, 70, 60, 0.25)";
      ctx.lineWidth = 2;
      for (let i = 0; i < 40; i += 1) {
        ctx.fillStyle = `rgba(0,0,0,${0.08 + Math.random() * 0.12})`;
        ctx.fillRect(Math.random() * w, Math.random() * h, 2, 8 + Math.random() * 16);
      }
    }),
  );
}

export function redLacquerBarkMap(): CanvasTexture {
  return barkWrap(
    canvasTex((ctx, w, h) => {
      ctx.fillStyle = "#6a3228";
      ctx.fillRect(0, 0, w, h);
      ctx.strokeStyle = "#3a1812";
      ctx.lineWidth = 5;
      for (let i = 0; i < 14; i += 1) {
        ctx.beginPath();
        ctx.moveTo(i * 40, 0);
        ctx.bezierCurveTo(i * 40 + 12, 150, i * 40 - 8, 310, i * 40, 512);
        ctx.stroke();
      }
      ctx.fillStyle = "rgba(12, 6, 4, 0.65)";
      for (let i = 0; i < 8; i += 1) {
        ctx.beginPath();
        ctx.ellipse(70 + (i % 3) * 120, 40 + i * 56, 10, 44, 0.15, 0, Math.PI * 2);
        ctx.fill();
      }
    }),
  );
}
