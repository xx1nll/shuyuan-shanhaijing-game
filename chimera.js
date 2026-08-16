/**
 * 蓬莱筑境 — 異獸造物 (高細節程序部件 · 紋理烘焙 · GLB 可替換)
 *
 * Stripes / face paint are CanvasTextures bound to mesh materials (UV),
 * never floating planes.
 */
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { UnifiedTransformControls } from './unified-gizmo.js';

export function installChimera(THREE, { mat, cprop }) {
  const TYPE = 'chimera';
  const LIMITS = { heads: 3, hands: 0, feet: 6, tails: 9 };
  const FEET_COUNTS = [2, 4, 6]; // 1 / 2 / 3 pairs only
  const HUMAN_HEAD_GLB = 'assets/renmian_game.glb';
  const BIRD_HEAD_GLB = 'assets/niaotou_game.glb';
  const TIANSHI_HEAD_GLB = 'assets/tianshi_game.glb';
  const OX_BODY_GLB = 'assets/niushen_game.glb';
  const FOX_TAIL_GLB = 'assets/huwei_game.glb';
  const OX_TAIL_GLB = 'assets/niuwei_game.glb';
  const TIGER_CLAW_GLB = 'assets/huzhua_game.glb';
  const HORSE_HOOF_GLB = 'assets/mati_game.glb';
  const BIRD_CLAW_GLB = 'assets/niaozhua_game.glb';
  const glbTemplates = new Map(); // url → prepared Group
  const gltfLoader = new GLTFLoader();

  const TRAIT_PRESETS = [
    { id: 'fast', label: '善走', phrase: '善走', speedMul: 1.55 },
    { id: 'jump', label: '善躍', phrase: '善躍', jumpMul: 1.6 },
    { id: 'fly', label: '能飛', phrase: '能飛', fly: true },
    { id: 'swim', label: '善游', phrase: '善游', swim: true },
    { id: 'fierce', label: '性猛', phrase: '性猛' },
    { id: 'wise', label: '有知', phrase: '有知' },
    { id: 'glow', label: '身有光', phrase: '身有光' },
  ];

  const SOUND_PRESETS = [
    { id: 'none', label: '（無）', like: '' },
    { id: 'infant', label: '嬰兒', like: '嬰兒' },
    { id: 'dog', label: '犬', like: '犬' },
    { id: 'bird', label: '鳥', like: '鳥' },
    { id: 'thunder', label: '雷', like: '雷' },
    { id: 'ox', label: '牛', like: '牛' },
    { id: 'flute', label: '磬', like: '磬' },
    { id: 'custom', label: '自訂…', like: '' },
  ];

  const PATTERN_PRESETS = [
    { id: 'none', label: '無紋' },
    { id: 'stripes', label: '斑紋／虎斑' },
    { id: 'spots', label: '點斑' },
    { id: 'scales', label: '鱗紋' },
    { id: 'bands', label: '環帶' },
  ];

  // ── color / noise helpers ────────────────────────────────
  function hexToRgb(hex) {
    const h = String(hex || '#888888').replace('#', '');
    const n = parseInt(h.length === 3 ? h.split('').map((c) => c + c).join('') : h, 16);
    return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
  }
  function rgbToHex(r, g, b) {
    const c = (x) => Math.max(0, Math.min(255, x | 0)).toString(16).padStart(2, '0');
    return `#${c(r)}${c(g)}${c(b)}`;
  }
  function mixHex(a, b, t) {
    const A = hexToRgb(a), B = hexToRgb(b);
    return rgbToHex(A.r + (B.r - A.r) * t, A.g + (B.g - A.g) * t, A.b + (B.b - A.b) * t);
  }
  function shadeHex(hex, amt) {
    const { r, g, b } = hexToRgb(hex);
    return rgbToHex(r + amt * 255, g + amt * 255, b + amt * 255);
  }
  function tint(base, props, soft = false) {
    return soft ? cprop(props, 'color2', base) : cprop(props, 'color', base);
  }
  function hash(i, j = 0) {
    const s = Math.sin(i * 127.1 + j * 311.7) * 43758.5453;
    return s - Math.floor(s);
  }

  function makeTex(draw, size = 256) {
    const canvas = document.createElement('canvas');
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext('2d');
    draw(ctx, size);
    const tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.RepeatWrapping;
    tex.needsUpdate = true;
    tex.userData.canvas = canvas;
    return tex;
  }

  function paintNoise(ctx, size, base, variance = 10) {
    const { r, g, b } = hexToRgb(base);
    const img = ctx.createImageData(size, size);
    const d = img.data;
    for (let y = 0; y < size; y++) {
      for (let x = 0; x < size; x++) {
        const n = (hash(x * 0.37, y * 0.41) - 0.5) * variance;
        const i = (y * size + x) * 4;
        d[i] = Math.max(0, Math.min(255, r + n));
        d[i + 1] = Math.max(0, Math.min(255, g + n));
        d[i + 2] = Math.max(0, Math.min(255, b + n * 0.85));
        d[i + 3] = 255;
      }
    }
    ctx.putImageData(img, 0, 0);
  }

  function paintPattern(ctx, size, pattern, dark, light) {
    if (!pattern || pattern === 'none') return;
    if (pattern === 'stripes') {
      // ink-brush tiger marks — few soft strokes, not melon stripes
      for (let i = 0; i < 7; i++) {
        const x = (0.12 + i / 7 * 0.76) * size + (hash(i, 3) - 0.5) * 10;
        const w = 3 + hash(i, 7) * 5;
        ctx.strokeStyle = dark;
        ctx.globalAlpha = 0.22 + hash(i, 2) * 0.18;
        ctx.lineWidth = w;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(x, size * 0.05);
        ctx.quadraticCurveTo(x + (hash(i, 4) - 0.5) * 18, size * 0.5, x - 6, size * 0.95);
        ctx.stroke();
      }
      ctx.globalAlpha = 1;
    } else if (pattern === 'spots') {
      for (let i = 0; i < 28; i++) {
        const x = hash(i, 1) * size;
        const y = hash(i, 2) * size;
        const r = 3 + hash(i, 3) * 9;
        ctx.fillStyle = dark;
        ctx.globalAlpha = 0.18 + hash(i, 4) * 0.2;
        ctx.beginPath();
        ctx.ellipse(x, y, r, r * (0.65 + hash(i, 5) * 0.4), hash(i, 6) * Math.PI, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    } else if (pattern === 'scales') {
      const rowH = 16;
      const colW = 18;
      ctx.lineWidth = 1;
      for (let row = 0; row < size / rowH + 1; row++) {
        for (let col = 0; col < size / colW + 1; col++) {
          const ox = col * colW + (row % 2 ? colW * 0.5 : 0);
          const oy = row * rowH;
          ctx.strokeStyle = dark;
          ctx.fillStyle = mixHex(light, dark, 0.08 + hash(row, col) * 0.12);
          ctx.globalAlpha = 0.45;
          ctx.beginPath();
          ctx.moveTo(ox, oy + rowH * 0.25);
          ctx.quadraticCurveTo(ox + colW * 0.5, oy + rowH * 0.95, ox + colW, oy + rowH * 0.25);
          ctx.quadraticCurveTo(ox + colW * 0.5, oy + rowH * 0.05, ox, oy + rowH * 0.25);
          ctx.fill();
          ctx.globalAlpha = 0.35;
          ctx.stroke();
        }
      }
      ctx.globalAlpha = 1;
    } else if (pattern === 'bands') {
      for (let i = 0; i < 6; i++) {
        const y = (0.1 + i / 6 * 0.8) * size;
        const h = 4 + hash(i, 1) * 6;
        ctx.fillStyle = dark;
        ctx.globalAlpha = 0.18 + (i % 2) * 0.1;
        ctx.beginPath();
        ctx.ellipse(size * 0.5, y, size * 0.48, h, 0, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
    }
  }

  /** Body / limb fur with optional pattern / uploaded image — bound as material.map */
  function furMap(base, soft, pattern, size = 256, patternImage = '') {
    const dark = shadeHex(base, -0.28);
    const tex = makeTex((ctx, s) => {
      // smooth parchment wash (less noise = cleaner mythic clay look)
      const grad = ctx.createLinearGradient(0, 0, s * 0.2, s);
      grad.addColorStop(0, shadeHex(base, 0.08));
      grad.addColorStop(0.45, base);
      grad.addColorStop(1, shadeHex(base, -0.12));
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, s, s);
      paintNoise(ctx, s, base, 3);
      const g = ctx.createLinearGradient(0, 0, 0, s);
      g.addColorStop(0, 'rgba(0,0,0,0)');
      g.addColorStop(0.5, 'rgba(0,0,0,0)');
      g.addColorStop(1, soft + '88');
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, s, s);
      paintPattern(ctx, s, pattern, dark, soft);
    }, size);
    if (patternImage) {
      const img = new Image();
      img.onload = () => {
        const ctx = tex.userData.canvas.getContext('2d');
        const s = tex.userData.canvas.width;
        ctx.save();
        ctx.globalAlpha = 0.85;
        ctx.drawImage(img, 0, 0, s, s);
        ctx.restore();
        tex.needsUpdate = true;
      };
      img.src = patternImage;
    }
    return tex;
  }

  /**
   * Head skin: base + pattern + optional face drawing composited into
   * the FRONT UV patch of SphereGeometry (u≈0.25–0.75 around +Z).
   */
  function headSkinMap(base, soft, pattern, faceDataUrl, size = 256, patternImage = '') {
    const dark = shadeHex(base, -0.32);
    const tex = makeTex((ctx, s) => {
      const grad = ctx.createRadialGradient(s * 0.5, s * 0.4, 8, s * 0.5, s * 0.5, s * 0.7);
      grad.addColorStop(0, shadeHex(base, 0.1));
      grad.addColorStop(1, shadeHex(base, -0.08));
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, s, s);
      paintNoise(ctx, s, base, 2);
      const rad = ctx.createRadialGradient(s * 0.5, s * 0.42, 4, s * 0.5, s * 0.45, s * 0.42);
      rad.addColorStop(0, soft + '66');
      rad.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = rad;
      ctx.fillRect(0, 0, s, s);
      paintPattern(ctx, s, pattern, dark, soft);
      ctx.fillStyle = shadeHex(base, -0.12) + '55';
      ctx.fillRect(s * 0.28, s * 0.48, s * 0.44, s * 0.28);
    }, size);

    const applyOverlay = (url, clipFace) => {
      if (!url) return;
      const img = new Image();
      img.onload = () => {
        const ctx = tex.userData.canvas.getContext('2d');
        const s = tex.userData.canvas.width;
        ctx.save();
        if (clipFace) {
          const fw = s * 0.42, fh = s * 0.38;
          const fx = s * 0.5 - fw * 0.5, fy = s * 0.32;
          ctx.beginPath();
          ctx.ellipse(s * 0.5, fy + fh * 0.5, fw * 0.5, fh * 0.5, 0, 0, Math.PI * 2);
          ctx.clip();
          ctx.globalAlpha = 0.92;
          ctx.drawImage(img, fx, fy, fw, fh);
        } else {
          ctx.globalAlpha = 0.8;
          ctx.drawImage(img, 0, 0, s, s);
        }
        ctx.restore();
        tex.needsUpdate = true;
      };
      img.src = url;
    };
    applyOverlay(patternImage, false);
    applyOverlay(faceDataUrl, true);
    return tex;
  }

  function matMapped(color, map, opts = {}) {
    // Texture already carries hue — keep material color near-white as multiplier
    const m = mat('#f5efe4', { ...opts, map, roughness: opts.roughness ?? 0.72, metalness: opts.metalness ?? 0.02 });
    if (map) m.map = map;
    return m;
  }

  // ── geometry builders ────────────────────────────────────
  function add(g, mesh, x = 0, y = 0, z = 0, rx = 0, ry = 0, rz = 0) {
    mesh.position.set(x, y, z);
    mesh.rotation.set(rx, ry, rz);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    g.add(mesh);
    return mesh;
  }

  function sphereMesh(r, material, w = 24, h = 18) {
    return new THREE.Mesh(new THREE.SphereGeometry(r, w, h), material);
  }
  function cylMesh(r0, r1, h, material, segs = 12) {
    return new THREE.Mesh(new THREE.CylinderGeometry(r1, r0, h, segs), material);
  }
  function coneMesh(r, h, material, segs = 10) {
    return new THREE.Mesh(new THREE.ConeGeometry(r, h, segs), material);
  }

  /** Organic lathe body (revolved silhouette). */
  function latheBody(profilePts, material, segs = 24) {
    const pts = profilePts.map(([x, y]) => new THREE.Vector2(x, y));
    const geo = new THREE.LatheGeometry(pts, segs);
    geo.rotateZ(-Math.PI / 2); // length along Z
    return new THREE.Mesh(geo, material);
  }

  /** Smooth tube along points (tails, necks, serpents). */
  function tubeAlong(points, radius, material, tubular = 48, radial = 10) {
    const curve = new THREE.CatmullRomCurve3(points.map((p) => new THREE.Vector3(...p)));
    const geo = new THREE.TubeGeometry(curve, tubular, radius, radial, false);
    return new THREE.Mesh(geo, material);
  }

  function deformNoise(mesh, amp = 0.006, scale = 5) {
    const pos = mesh.geometry.attributes.position;
    for (let i = 0; i < pos.count; i++) {
      const x = pos.getX(i), y = pos.getY(i), z = pos.getZ(i);
      const n = (hash(x * scale, y * scale + z * scale) - 0.5) * amp;
      pos.setXYZ(i, x + n, y + n * 0.6, z + n);
    }
    pos.needsUpdate = true;
    mesh.geometry.computeVertexNormals();
    return mesh;
  }

  // ── bodies ───────────────────────────────────────────────
  function makeBodyOx(props) {
    const glb = cloneGlbPart(OX_BODY_GLB);
    if (glb) return glb;
    const g = new THREE.Group();
    g.userData.neck = { center: { x: 0, y: 0.36, z: 0.42 }, left: { x: -0.08, y: 0.36, z: 0.4 }, right: { x: 0.08, y: 0.36, z: 0.4 } };
    g.userData.sockets = { head: [g.userData.neck.center], hand: [], foot: [], tail: [{ x: 0, y: 0.28, z: -0.4 }] };
    return g;
  }

  // ── heads (face baked into material.map) ─────────────────
  function buildHeadCore(props, cfg) {
    const g = new THREE.Group();
    const base = tint(cfg.color, props);
    const soft = tint(cfg.soft || '#e8d8b8', props, true);
    const pattern = props.pattern || cfg.pattern || 'none';
    const skin = headSkinMap(base, soft, pattern, props.faceMap, 256, props.patternImage || '');
    const mHead = matMapped(base, skin, { roughness: 0.72 });
    const mSoft = mat(soft, { roughness: 0.7 });
    const mDark = mat(shadeHex(base, -0.45));
    const mHorn = mat(tint(cfg.horn || '#e8d8a0', props, true), { roughness: 0.55, metalness: 0.08 });
    const mEye = mat(cfg.eye || '#1a1810', { roughness: 0.35, metalness: 0.15 });
    const mEyeWhite = mat('#e8e4d8');

    const skull = deformNoise(sphereMesh(cfg.r || 0.15, mHead, 32, 24), cfg.deform || 0.004, 9);
    if (cfg.skullScale) skull.scale.set(...cfg.skullScale);
    add(g, skull);
    g.userData.headSkin = skin;

    if (cfg.snout) {
      const sn = cfg.snout;
      add(g, deformNoise(cylMesh(sn.r0, sn.r1, sn.len, mSoft, 14), 0.006), 0, sn.y || -0.02, sn.z, Math.PI / 2);
      if (sn.tip) add(g, sphereMesh(sn.tip, mDark, 10, 8), 0, sn.y || -0.02, sn.z + sn.len * 0.55);
    }

    // eyes — inset in mesh, not stickers
    for (const s of [-1, 1]) {
      const ex = s * (cfg.eyeX || 0.07);
      const ey = cfg.eyeY || 0.03;
      const ez = cfg.eyeZ || 0.11;
      add(g, sphereMesh(0.028, mEyeWhite, 10, 8), ex, ey, ez);
      add(g, sphereMesh(0.018, mEye, 8, 6), ex, ey, ez + 0.012);
      if (cfg.brow) {
        const brow = cylMesh(0.008, 0.006, 0.05, mDark, 6);
        add(g, brow, ex, ey + 0.035, ez - 0.01, 0, 0, s * 0.4);
      }
    }

    if (cfg.ears) {
      for (const s of [-1, 1]) {
        const ear = coneMesh(cfg.earR || 0.045, cfg.earH || 0.11, mHead, 8);
        add(g, ear, s * (cfg.earX || 0.1), cfg.earY || 0.12, cfg.earZ || -0.02, 0.15, 0, s * 0.3);
        if (cfg.earInner) add(g, coneMesh((cfg.earR || 0.045) * 0.55, (cfg.earH || 0.11) * 0.7, mSoft, 6), s * (cfg.earX || 0.1), (cfg.earY || 0.12) - 0.01, (cfg.earZ || -0.02) + 0.01, 0.15, 0, s * 0.3);
      }
    }

    if (cfg.horns) {
      for (const s of [-1, 1]) {
        const horn = coneMesh(0.035, cfg.hornH || 0.18, mHorn, 8);
        add(g, horn, s * 0.09, 0.14, -0.02, -0.2, 0, s * 0.15);
        if (cfg.hornCurl) {
          add(g, sphereMesh(0.025, mHorn, 8, 6), s * 0.12, 0.26, -0.04);
        }
      }
    }

    if (cfg.whiskers) {
      for (const s of [-1, 1]) {
        for (let i = 0; i < 3; i++) {
          const w = cylMesh(0.004, 0.002, 0.14 + i * 0.02, mHorn, 5);
          add(g, w, s * 0.08, -0.02 + i * 0.015, 0.12, Math.PI / 2, 0, s * (0.5 + i * 0.15));
        }
      }
    }

    if (cfg.beak) {
      add(g, coneMesh(0.045, 0.16, mat(cfg.beak), 8), 0, -0.02, 0.14, Math.PI / 2);
      add(g, coneMesh(0.03, 0.08, mat(shadeHex(cfg.beak, -0.2)), 6), 0, -0.04, 0.2, Math.PI / 2);
    }

    if (cfg.mane) {
      for (let i = 0; i < 10; i++) {
        const a = (i / 10) * Math.PI * 1.4 - 0.7;
        const tuft = coneMesh(0.04, 0.12, mat(shadeHex(base, -0.2)), 5);
        add(g, tuft, Math.sin(a) * 0.12, 0.08 + Math.cos(a) * 0.06, -0.08 + Math.cos(a) * 0.04, 0.4, 0, 0);
      }
    }

    g.userData.partAnim = 'bob';
    return g;
  }

  function makeHeadHuman(props) {
    const glb = cloneGlbPart(HUMAN_HEAD_GLB);
    if (glb) return glb;
    return buildHeadCore(props, {
      color: '#c4a888', soft: '#e0c8b0', pattern: 'none',
      r: 0.14, mane: true,
      eyeX: 0.05, eyeY: 0.02, eyeZ: 0.115, brow: true,
    });
  }
  function makeHeadBird(props) {
    const glb = cloneGlbPart(BIRD_HEAD_GLB);
    if (glb) return glb;
    return buildHeadCore(props, {
      color: '#5a6858', soft: '#d0c8a8', pattern: 'bands',
      r: 0.12, beak: '#d4a030',
      eyeX: 0.05, eyeY: 0.03, eyeZ: 0.09, eye: '#101008',
    });
  }
  function makeHeadTianshi(props) {
    const glb = cloneGlbPart(TIANSHI_HEAD_GLB);
    if (glb) return glb;
    return makeHeadHuman(props);
  }

  // ── hands / feet / tails ─────────────────────────────────
  /**
   * Hand convention: origin = shoulder attach, limb extends along -Y (hangs down).
   * Wing convention: origin = shoulder, spans +X; left side is mirrored in attachPart.
   */
  function makeHandClaw(props) {
    const glb = cloneGlbPart(TIGER_CLAW_GLB);
    if (glb) {
      glb.userData.partKind = 'hand';
      return glb;
    }
    const g = new THREE.Group();
    const fur = tint('#8a5a38', props);
    const claw = tint('#e8d8b0', props, true);
    const map = furMap(fur, claw, props.pattern || 'none', 64, props.patternImage || '');
    const m = matMapped(fur, map);
    add(g, deformNoise(cylMesh(0.04, 0.05, 0.2, m, 10), 0.005), 0, -0.1, 0);
    add(g, sphereMesh(0.055, m, 12, 10), 0, -0.2, 0.02);
    for (let i = -1; i <= 1; i++) {
      const c = coneMesh(0.014, 0.09, mat(claw, { roughness: 0.4 }), 6);
      add(g, c, i * 0.035, -0.24, 0.05, 1.0, 0, 0);
    }
    g.userData.partKind = 'hand';
    return g;
  }
  function makeHandHoof(props) {
    const glb = cloneGlbPart(HORSE_HOOF_GLB);
    if (glb) {
      glb.userData.partKind = 'hand';
      return glb;
    }
    return makeHandClaw(props);
  }
  function makeHandTalon(props) {
    const glb = cloneGlbPart(BIRD_CLAW_GLB);
    if (glb) {
      glb.userData.partKind = 'hand';
      return glb;
    }
    return makeHandClaw(props);
  }
  function makeHandHuman(props) {
    const g = new THREE.Group();
    const skin = tint('#c4a888', props);
    const m = mat(skin, { roughness: 0.7 });
    add(g, cylMesh(0.032, 0.038, 0.22, m, 10), 0, -0.11, 0);
    add(g, sphereMesh(0.045, m, 12, 10), 0, -0.22, 0.02);
    for (let i = -1.5; i <= 1.5; i++) {
      add(g, cylMesh(0.01, 0.008, 0.07, m, 6), i * 0.022, -0.26, 0.04, Math.PI / 2 * 0.2);
    }
    g.userData.partKind = 'hand';
    return g;
  }
  function makeHandWing(props) {
    const g = new THREE.Group();
    const feather = tint('#6a7068', props);
    const bone = tint('#d8c8a8', props, true);
    const map = furMap(feather, bone, 'bands', 128, props.patternImage || '');
    // span along +X from shoulder
    add(g, cylMesh(0.018, 0.022, 0.34, mat(bone), 8), 0.16, 0.02, 0, 0, 0, Math.PI / 2);
    // span +X, chord along Z, slight thickness in Y — reads as a wing, not a floor disc
    const membrane = deformNoise(sphereMesh(0.2, matMapped(feather, map, { side: THREE.DoubleSide, transparent: true, opacity: 0.9 }), 16, 12), 0.015, 5);
    membrane.scale.set(1.5, 0.22, 0.55);
    add(g, membrane, 0.2, 0.04, -0.02);
    for (let i = 0; i < 5; i++) {
      const f = coneMesh(0.028, 0.16, mat(mixHex(feather, bone, i * 0.1)), 6);
      add(g, f, 0.1 + i * 0.05, 0.02 - i * 0.006, -0.08, 0.7, 0, 0.2);
    }
    g.userData.partAnim = 'wing';
    g.userData.partKind = 'wing';
    return g;
  }
  function makeHandScale(props) {
    const g = new THREE.Group();
    const scale = tint('#3a7a58', props);
    const map = furMap(scale, tint('#c8e0b0', props, true), 'scales', 128, props.patternImage || '');
    const m = matMapped(scale, map);
    add(g, deformNoise(cylMesh(0.042, 0.052, 0.22, m, 12), 0.006), 0, -0.11, 0);
    for (let i = 0; i < 4; i++) {
      add(g, sphereMesh(0.025, m, 8, 6), (i - 1.5) * 0.03, -0.22, 0.01);
    }
    g.userData.partKind = 'hand';
    return g;
  }
  function makeHandTentacle(props) {
    const g = new THREE.Group();
    const col = tint('#6a4a68', props);
    const soft = tint('#c8a0b8', props, true);
    const m = matMapped(col, furMap(col, soft, 'spots', 64, props.patternImage || ''));
    const pts = [];
    for (let i = 0; i <= 8; i++) {
      const t = i / 8;
      pts.push([Math.sin(t * 2) * 0.04, -t * 0.28, t * 0.05]);
    }
    add(g, tubeAlong(pts, 0.028, m, 24, 8));
    g.userData.partKind = 'hand';
    return g;
  }

  function makeFootHoof(props) {
    const glb = cloneGlbPart(HORSE_HOOF_GLB);
    if (glb) return glb;
    const g = new THREE.Group();
    const hide = tint('#6a5038', props);
    const hoof = tint('#2a2218', props, true);
    const m = matMapped(hide, furMap(hide, hoof, 'none', 64, props.patternImage || ''));
    add(g, deformNoise(cylMesh(0.042, 0.05, 0.24, m, 10), 0.005), 0, 0.14, 0);
    const h = cylMesh(0.05, 0.055, 0.06, mat(hoof, { roughness: 0.5 }), 10);
    add(g, h, 0, 0.03, 0.02);
    add(g, sphereMesh(0.04, mat(hoof), 8, 6), 0, 0.02, 0.06);
    return g;
  }
  function makeFootClaw(props) {
    const glb = cloneGlbPart(TIGER_CLAW_GLB);
    if (glb) return glb;
    const g = new THREE.Group();
    const fur = tint('#8a5a38', props);
    const claw = tint('#e8d8b0', props, true);
    const m = matMapped(fur, furMap(fur, claw, props.pattern || 'none', 64, props.patternImage || ''));
    add(g, cylMesh(0.038, 0.045, 0.2, m, 10), 0, 0.12, 0);
    add(g, sphereMesh(0.05, m, 12, 10), 0, 0.02, 0.03);
    for (let i = -1; i <= 1; i++) {
      add(g, coneMesh(0.012, 0.07, mat(claw, { roughness: 0.4 }), 6), i * 0.03, 0.0, 0.06, Math.PI / 2 * 0.9);
    }
    return g;
  }
  function makeFootWeb(props) {
    const g = new THREE.Group();
    const skin = tint('#4a6a48', props);
    const web = tint('#6a8a58', props, true);
    const m = mat(skin);
    add(g, cylMesh(0.032, 0.038, 0.16, m, 10), 0, 0.1, 0);
    // webbed foot as flattened deformed sphere bound to limb
    const pad = deformNoise(sphereMesh(0.09, mat(web, { side: THREE.DoubleSide }), 14, 10), 0.01, 4);
    pad.scale.set(1.2, 0.18, 1.4);
    add(g, pad, 0, 0.02, 0.04);
    for (let i = -1; i <= 1; i++) {
      add(g, coneMesh(0.012, 0.05, m, 5), i * 0.035, 0.02, 0.1, Math.PI / 2 * 0.7);
    }
    return g;
  }
  function makeFootHuman(props) {
    const g = new THREE.Group();
    const skin = tint('#c4a888', props);
    const m = mat(skin, { roughness: 0.7 });
    add(g, cylMesh(0.038, 0.042, 0.24, m, 10), 0, 0.14, 0);
    const foot = deformNoise(sphereMesh(0.06, m, 12, 10), 0.008, 5);
    foot.scale.set(0.9, 0.45, 1.5);
    add(g, foot, 0, 0.03, 0.05);
    return g;
  }
  function makeFootTalon(props) {
    const glb = cloneGlbPart(BIRD_CLAW_GLB);
    if (glb) return glb;
    const g = new THREE.Group();
    const hide = tint('#5a5040', props);
    const claw = tint('#d8c090', props, true);
    const m = mat(hide);
    add(g, cylMesh(0.03, 0.035, 0.14, m, 8), 0, 0.1, 0);
    for (let i = -1; i <= 1; i++) {
      const t = coneMesh(0.015, 0.12, mat(claw, { roughness: 0.35 }), 6);
      add(g, t, i * 0.04, 0.02, 0.02, Math.PI / 2 * 0.7, 0, i * 0.2);
    }
    return g;
  }

  function makeTailStub(props, color = '#c46828') {
    const g = new THREE.Group();
    const col = tint(color, props);
    const pts = [[0, 0, 0], [0, 0.02, -0.2], [0, 0, -0.4]];
    add(g, tubeAlong(pts, 0.04, mat(col), 16, 8));
    g.userData.partAnim = 'tail';
    g.userData.partKind = 'tail';
    return g;
  }
  function makeTailFox(props) {
    const glb = cloneGlbPart(FOX_TAIL_GLB);
    if (glb) return glb;
    return makeTailStub(props, '#c46828');
  }
  function makeTailOx(props) {
    const glb = cloneGlbPart(OX_TAIL_GLB);
    if (glb) return glb;
    return makeTailStub(props, '#5a4030');
  }

  // ── registry ─────────────────────────────────────────────
  const PARTS = {};
  function reg(slot, id, label, like, make, meta = {}) {
    PARTS[id] = {
      id, slot, label, like,
      source: { type: 'proc', make },
      fit: meta.fit || null,
    };
  }

  reg('body', 'body_ox', '牛身', '牛', makeBodyOx);

  // Only modeled heads. seatY>0 lifts; seatY<0 seats into neck.
  reg('head', 'head_human', '人頭', '人', makeHeadHuman, { fit: { seatY: 0, seatZ: 0.02, fanMul: 1.35, yaw: 0 } });
  reg('head', 'head_bird', '鳥頭', '鳥', makeHeadBird, { fit: { seatY: -0.02, seatZ: 0.015, fanMul: 1.05, yaw: 0 } });
  reg('head', 'head_tianshi', '張老師', '張老師', makeHeadTianshi, { fit: { seatY: 0.03, seatZ: 0.02, fanMul: 1.2, yaw: 0 } });

  reg('foot', 'foot_claw', '虎爪', '虎爪', makeFootClaw, { fit: { seatY: 0, seatZ: 0, rx: 0 } });
  reg('foot', 'foot_hoof', '馬蹄', '馬蹄', makeFootHoof, { fit: { seatY: 0, seatZ: 0, rx: 0 } });
  reg('foot', 'foot_talon', '鳥爪', '鳥爪', makeFootTalon, { fit: { seatY: 0, seatZ: 0, rx: 0 } });

  reg('tail', 'tail_fox', '狐尾', '狐', makeTailFox);
  reg('tail', 'tail_ox', '牛尾', '牛', makeTailOx);

  function partsForSlot(slot) {
    return Object.values(PARTS).filter((p) => p.slot === slot);
  }
  function defaultPartId(slot) {
    return partsForSlot(slot)[0]?.id || null;
  }
  function makePart(partId, props) {
    const def = PARTS[partId];
    if (!def) return new THREE.Group();
    if (def.source.type === 'glb' && typeof def.source.make !== 'function') {
      const stub = new THREE.Group();
      stub.userData.pendingGlb = def.source.url;
      return stub;
    }
    return (def.source.make || (() => new THREE.Group()))(props);
  }
  function setPartGlb(partId, url, opts = {}) {
    const def = PARTS[partId];
    if (!def) return false;
    def.source = { type: 'glb', url, make: opts.make || def.source.make };
    return true;
  }

  function markGlbShared(root) {
    root.traverse((c) => {
      if (c.geometry) {
        c.geometry.userData = c.geometry.userData || {};
        c.geometry.userData.shared = true;
      }
      const mats = c.material
        ? (Array.isArray(c.material) ? c.material : [c.material])
        : [];
      mats.forEach((m) => {
        if (!m) return;
        m.userData = m.userData || {};
        m.userData.shared = true;
        if (m.map) m.map.colorSpace = THREE.SRGBColorSpace;
        if (m.metalness != null && m.metalness > 0.35) m.metalness = 0.08;
        if (m.roughness != null && m.roughness < 0.35) m.roughness = 0.65;
        m.needsUpdate = true;
      });
      if (c.isMesh) {
        c.castShadow = true;
        c.receiveShadow = true;
      }
    });
  }

  /** Fit a body GLB: face +Z, belly on y=0, sockets from mesh stubs (per-body). */
  function prepareBodyGlbTemplate(gltfScene, opts = {}) {
    const targetLen = opts.targetLength ?? 0.95;
    const wrap = new THREE.Group();
    const inner = new THREE.Group();
    wrap.add(inner);
    inner.add(gltfScene);

    gltfScene.position.set(0, 0, 0);
    gltfScene.rotation.set(0, 0, 0);
    gltfScene.scale.set(1, 1, 1);

    // Measured on niushen_game.glb (Blender Z-up → Three x,z,-y), before Ry(π).
    // Legs = outboard shoulder/hip stubs only — NOT the medial belly nipple.
    const rawNeck = new THREE.Vector3(0.004, 0.50, -0.493);
    const rawFeet = [
      new THREE.Vector3(-0.18, 0.04, -0.37), // FL
      new THREE.Vector3(0.18, 0.04, -0.376), // FR
      new THREE.Vector3(-0.181, 0.035, 0.212), // RL
      new THREE.Vector3(0.184, 0.035, 0.206), // RR
    ];
    const rawTail = new THREE.Vector3(0.035, 0.48, 0.567);

    inner.rotation.y = Math.PI;

    wrap.updateMatrixWorld(true);
    let box = new THREE.Box3().setFromObject(wrap);
    let size = box.getSize(new THREE.Vector3());
    const sc = targetLen / Math.max(0.01, size.z);
    inner.scale.setScalar(sc);

    for (let i = 0; i < 2; i++) {
      wrap.updateMatrixWorld(true);
      box = new THREE.Box3().setFromObject(wrap);
      inner.position.x -= (box.min.x + box.max.x) * 0.5;
      inner.position.z -= (box.min.z + box.max.z) * 0.5;
      inner.position.y -= box.min.y;
    }

    inner.updateMatrix();
    const mapPt = (v) => v.clone().applyMatrix4(inner.matrix);
    const neck = mapPt(rawNeck);
    // Lift head seat further up the neck stump for this body
    neck.y += opts.headLift != null ? opts.headLift : 0.05 * sc;
    const footPts = rawFeet.map(mapPt);
    const front = footPts.filter((p) => p.z >= 0).sort((a, b) => a.x - b.x);
    const rear = footPts.filter((p) => p.z < 0).sort((a, b) => a.x - b.x);
    while (front.length < 2) front.push(front[0] || new THREE.Vector3(-0.12, 0.06, 0.3));
    while (rear.length < 2) rear.push(rear[0] || new THREE.Vector3(-0.12, 0.06, -0.22));
    const midL = front[0].clone().lerp(rear[0], 0.5);
    const midR = front[1].clone().lerp(rear[1], 0.5);
    const tail = mapPt(rawTail);

    wrap.userData.neck = {
      center: { x: neck.x, y: neck.y, z: neck.z },
      left: { x: neck.x - 0.06 * sc, y: neck.y - 0.01, z: neck.z - 0.02 },
      right: { x: neck.x + 0.06 * sc, y: neck.y - 0.01, z: neck.z - 0.02 },
    };
    const sock = (p) => ({ x: p.x, y: p.y, z: p.z });
    wrap.userData.sockets = {
      head: [wrap.userData.neck.center],
      hand: [],
      foot: [
        sock(front[0]), sock(front[1]),
        sock(rear[0]), sock(rear[1]),
        sock(midL), sock(midR),
      ],
      tail: [sock(tail)],
    };
    // Per-body part sizing (each body mesh dictates head/leg scale)
    wrap.userData.attachFit = {
      headScale: opts.headScale ?? 1.55,
      footScale: opts.footScale ?? 1.45,
      headSeatY: opts.headSeatY ?? 0.01,
      footSeatY: opts.footSeatY ?? 0.09,
      tailSeatY: opts.tailSeatY ?? -0.04,
    };

    markGlbShared(wrap);
    wrap.userData.partKind = 'body';
    wrap.userData.isGlbPart = true;
    return wrap;
  }

  /** Fit a head GLB: neck at y=0, face toward +Z, height ≈ procedural heads. */
  function prepareHeadGlbTemplate(gltfScene, opts = {}) {
    const targetHeight = opts.targetHeight ?? 0.32;
    const yaw = opts.yaw ?? 0;
    const wrap = new THREE.Group();
    const inner = new THREE.Group();
    wrap.add(inner);
    inner.add(gltfScene);

    gltfScene.position.set(0, 0, 0);
    gltfScene.rotation.set(0, 0, 0);
    gltfScene.scale.set(1, 1, 1);
    inner.rotation.y = yaw;

    markGlbShared(wrap);

    // Scale once, then settle origin to neck (bbox bottom) + XZ center
    wrap.updateMatrixWorld(true);
    let box = new THREE.Box3().setFromObject(wrap);
    let size = box.getSize(new THREE.Vector3());
    inner.scale.setScalar(targetHeight / Math.max(0.01, size.y));

    for (let i = 0; i < 2; i++) {
      wrap.updateMatrixWorld(true);
      box = new THREE.Box3().setFromObject(wrap);
      inner.position.x -= (box.min.x + box.max.x) * 0.5;
      inner.position.z -= (box.min.z + box.max.z) * 0.5;
      inner.position.y -= box.min.y;
    }
    // Seat slightly into the body neck socket (avoids a visible float gap)
    inner.position.y -= 0.04;

    wrap.userData.partAnim = 'bob';
    wrap.userData.partKind = 'head';
    wrap.userData.isGlbPart = true;
    return wrap;
  }

  /**
   * Axis-aligned bbox of `root`'s meshes in `root` local space.
   */
  function localMeshBox(root) {
    const box = new THREE.Box3();
    root.updateWorldMatrix(true, true);
    const inv = new THREE.Matrix4().copy(root.matrixWorld).invert();
    const v = new THREE.Vector3();
    const m = new THREE.Matrix4();
    root.traverse((o) => {
      if (!o.isMesh || !o.geometry?.attributes?.position) return;
      const pos = o.geometry.attributes.position;
      m.multiplyMatrices(inv, o.matrixWorld);
      for (let i = 0; i < pos.count; i++) {
        v.fromBufferAttribute(pos, i).applyMatrix4(m);
        box.expandByPoint(v);
      }
    });
    return box;
  }

  /**
   * Fit a tail GLB: hip at origin.
   * Source length is +Y (dense/hip end at min Y, tip at max Y).
   * pitchFromBack: ACW toward face from the creature's right:
   *   0 = back (-Z), π/2 = up (+Y), π = toward face (+Z).
   */
  function prepareTailGlbTemplate(gltfScene, opts = {}) {
    const targetLen = opts.targetLength ?? 0.55;
    const pitchFromBack = opts.pitchFromBack ?? 0;
    const hipAtMaxY = !!opts.hipAtMaxY;
    const wrap = new THREE.Group();
    const inner = new THREE.Group();
    wrap.add(inner);
    inner.add(gltfScene);

    gltfScene.position.set(0, 0, 0);
    gltfScene.rotation.set(0, 0, 0);
    gltfScene.scale.set(1, 1, 1);

    const srcBox = localMeshBox(gltfScene);
    if (srcBox.isEmpty()) {
      wrap.userData.partAnim = 'tail';
      wrap.userData.partKind = 'tail';
      return wrap;
    }
    const srcLen = Math.max(0.01, srcBox.max.y - srcBox.min.y);
    const sc = targetLen / srcLen;

    // Hip in gltfScene / inner local space (gltf at identity under inner)
    const hipLocal = new THREE.Vector3(
      (srcBox.min.x + srcBox.max.x) * 0.5,
      hipAtMaxY ? srcBox.max.y : srcBox.min.y,
      (srcBox.min.z + srcBox.max.z) * 0.5,
    );

    // Orient: +Y (base→tip) → -Z, then pitch ACW toward face
    inner.rotation.order = 'XYZ';
    inner.rotation.set(-Math.PI / 2 + pitchFromBack, opts.yaw || 0, 0);
    inner.scale.setScalar(sc);
    inner.updateMatrix();

    // Rotate/scale hip into wrap space (ignore translation), then negate → hip at origin
    const rotScale = new THREE.Matrix4().compose(
      new THREE.Vector3(0, 0, 0),
      inner.quaternion,
      inner.scale,
    );
    const hipInWrap = hipLocal.clone().applyMatrix4(rotScale);
    inner.position.copy(hipInWrap).multiplyScalar(-1);
    // Optional seat nudge in wrap space (−Z = toward creature rear / away from face)
    if (opts.seatZ) inner.position.z += opts.seatZ;
    if (opts.seatY) inner.position.y += opts.seatY;
    if (opts.seatX) inner.position.x += opts.seatX;

    markGlbShared(wrap);
    wrap.userData.partAnim = 'tail';
    wrap.userData.partKind = 'tail';
    wrap.userData.isGlbPart = true;
    return wrap;
  }

  /**
   * Fit a foot/leg GLB for Three.js / glTF (Y-up).
   * Source: length along +Y (hip near max Y, paw near min Y); sole already faces −Y.
   * Blender’s Z-up view is misleading — there length reads as Z after re-import.
   * Scene: +Y up / −Y down, character faces +Z, back −Z, left −X.
   * Default yaw 0; toes face +Z (forward). Use Math.PI if a mesh faces the wrong way.
   */
  function prepareFootGlbTemplate(gltfScene, opts = {}) {
    const targetLen = opts.targetLength ?? 0.26;
    const hipAtMinY = !!opts.hipAtMinY;
    const wrap = new THREE.Group();
    const inner = new THREE.Group();
    wrap.add(inner);
    inner.add(gltfScene);

    gltfScene.position.set(0, 0, 0);
    gltfScene.rotation.set(0, 0, 0);
    gltfScene.scale.set(1, 1, 1);

    const srcBox = localMeshBox(gltfScene);
    if (srcBox.isEmpty()) {
      wrap.userData.partKind = 'foot';
      return wrap;
    }
    // glTF Y-up: limb length is Y (not Z — that was Blender’s re-import axis)
    const srcLen = Math.max(0.01, srcBox.max.y - srcBox.min.y);
    const sc = targetLen / srcLen;

    const hipLocal = new THREE.Vector3(
      (srcBox.min.x + srcBox.max.x) * 0.5,
      hipAtMinY ? srcBox.min.y : srcBox.max.y,
      (srcBox.min.z + srcBox.max.z) * 0.5,
    );

    // Upright in glTF; 0 (not π) — previous π left toes facing backward
    const yaw = opts.yaw != null ? opts.yaw : 0;
    inner.rotation.order = 'XYZ';
    inner.rotation.set(0, yaw, 0);
    inner.scale.setScalar(sc);
    inner.updateMatrix();

    const rotScale = new THREE.Matrix4().compose(
      new THREE.Vector3(0, 0, 0),
      inner.quaternion,
      inner.scale,
    );
    const hipInWrap = hipLocal.clone().applyMatrix4(rotScale);
    inner.position.copy(hipInWrap).multiplyScalar(-1);
    if (opts.seatZ) inner.position.z += opts.seatZ;
    if (opts.seatY) inner.position.y += opts.seatY;
    if (opts.seatX) inner.position.x += opts.seatX;

    markGlbShared(wrap);
    wrap.userData.partKind = 'foot';
    wrap.userData.isGlbPart = true;
    return wrap;
  }

  function cloneGlbPart(url) {
    const tpl = glbTemplates.get(url);
    if (!tpl) return null;
    const g = tpl.clone(true);
    g.userData.partAnim = tpl.userData.partAnim || null;
    g.userData.partKind = tpl.userData.partKind || null;
    g.userData.isGlbPart = true;
    if (tpl.userData.sockets) g.userData.sockets = tpl.userData.sockets;
    if (tpl.userData.neck) g.userData.neck = tpl.userData.neck;
    if (tpl.userData.attachFit) g.userData.attachFit = { ...tpl.userData.attachFit };
    return g;
  }

  function isPartGlbReady(url = HUMAN_HEAD_GLB) {
    return glbTemplates.has(url);
  }

  /**
   * Preload GLB body parts (人頭 etc). Safe to call during boot.
   * @param {(frac:number, label:string) => void} [onProgress]
   */
  async function preloadParts(onProgress) {
    const jobs = [
      {
        url: OX_BODY_GLB, label: '牛身', partId: 'body_ox',
        prepare: (scene) => prepareBodyGlbTemplate(scene, {
          targetLength: 0.95,
          headScale: 1.55,
          footScale: 1.45,
          headSeatY: 0.01,
          footSeatY: 0.09,
          tailSeatY: -0.04,
          headLift: 0.01,
        }),
      },
      {
        url: HUMAN_HEAD_GLB, label: '人頭', partId: 'head_human',
        prepare: (scene) => prepareHeadGlbTemplate(scene, { targetHeight: 0.32, yaw: 0 }),
      },
      {
        url: BIRD_HEAD_GLB, label: '鳥頭', partId: 'head_bird',
        prepare: (scene) => prepareHeadGlbTemplate(scene, { targetHeight: 0.3, yaw: 0 }),
      },
      {
        url: TIANSHI_HEAD_GLB, label: '張老師', partId: 'head_tianshi',
        prepare: (scene) => prepareHeadGlbTemplate(scene, { targetHeight: 0.22, yaw: 0 }),
      },
      {
        url: FOX_TAIL_GLB, label: '狐尾', partId: 'tail_fox',
        prepare: (scene) => prepareTailGlbTemplate(scene, {
          targetLength: 0.55,
          pitchFromBack: Math.PI / 2,
          seatZ: -0.1,
        }),
      },
      {
        url: OX_TAIL_GLB, label: '牛尾', partId: 'tail_ox',
        prepare: (scene) => prepareTailGlbTemplate(scene, {
          targetLength: 0.5,
          pitchFromBack: Math.PI,
          hipAtMaxY: true,
          seatZ: 0.07,
        }),
      },
      {
        url: TIGER_CLAW_GLB, label: '虎爪', partId: 'foot_claw',
        prepare: (scene) => prepareFootGlbTemplate(scene, { targetLength: 0.34 }),
      },
      {
        url: HORSE_HOOF_GLB, label: '馬蹄', partId: 'foot_hoof',
        prepare: (scene) => prepareFootGlbTemplate(scene, { targetLength: 0.32 }),
      },
      {
        url: BIRD_CLAW_GLB, label: '鳥爪', partId: 'foot_talon',
        prepare: (scene) => prepareFootGlbTemplate(scene, { targetLength: 0.32 }),
      },
    ];
    let done = 0;
    for (const job of jobs) {
      if (glbTemplates.has(job.url)) {
        done += 1;
        onProgress?.(done / jobs.length, `異獸部件 · ${job.label}`);
        continue;
      }
      onProgress?.(done / jobs.length, `載入異獸部件 · ${job.label}`);
      const gltf = await new Promise((resolve, reject) => {
        gltfLoader.load(encodeURI(job.url), resolve, undefined, reject);
      });
      glbTemplates.set(job.url, job.prepare(gltf.scene));
      setPartGlb(job.partId, job.url);
      done += 1;
      onProgress?.(done / jobs.length, `異獸部件 · ${job.label}`);
    }
    return glbTemplates;
  }

  // ── recipe / describe / assemble ─────────────────────────
  function defaultStyle(slot = 'body', raw = {}, legacy = {}) {
    const fallbackPattern = slot === 'body' ? (legacy.pattern || 'stripes')
      : slot === 'head' ? (legacy.pattern || 'none')
      : (legacy.pattern || 'none');
    const pattern = PATTERN_PRESETS.some((p) => p.id === raw.pattern)
      ? raw.pattern
      : (PATTERN_PRESETS.some((p) => p.id === fallbackPattern) ? fallbackPattern : 'none');
    return {
      color: raw.color || legacy.color || '#c4783a',
      color2: raw.color2 || legacy.color2 || '#e8d8b8',
      pattern,
      patternImage: raw.patternImage || '',
      faceMap: raw.faceMap || (slot === 'head' ? (legacy.faceMap || '') : ''),
    };
  }

  function fillStyles(arr, n, slot, legacy) {
    const src = Array.isArray(arr) ? arr.slice() : [];
    while (src.length < n) {
      const prev = src[src.length - 1] || {};
      src.push({ ...prev });
    }
    return src.slice(0, n).map((s) => defaultStyle(slot, s || {}, legacy));
  }

  function normalizeRecipe(raw = {}) {
    const clamp = (n, max, d) => {
      const v = n == null ? d : Math.round(+n);
      return Math.max(0, Math.min(max, Number.isFinite(v) ? v : d));
    };
    const heads = clamp(raw.heads, LIMITS.heads, 1);
    const hands = 0; // no arms — only legs
    const feetRaw = raw.feet == null ? 4 : Math.round(+raw.feet);
    const feet = FEET_COUNTS.includes(feetRaw)
      ? feetRaw
      : FEET_COUNTS.reduce((best, c) => (Math.abs(c - feetRaw) < Math.abs(best - feetRaw) ? c : best), 4);
    const tails = clamp(raw.tails, LIMITS.tails, 1);
    const fill = (arr, n, slot) => {
      const src = Array.isArray(arr) ? arr.slice() : [];
      const def = defaultPartId(slot);
      while (src.length < n) src.push(def);
      return src.slice(0, n).map((id) => (PARTS[id] ? id : def));
    };
    const legacy = {
      color: raw.color || '#c4783a',
      color2: raw.color2 || '#e8d8b8',
      pattern: PATTERN_PRESETS.some((p) => p.id === raw.pattern) ? raw.pattern : 'stripes',
      faceMap: raw.faceMap || '',
    };
    const bodyStyle = defaultStyle('body', raw.bodyStyle || {}, legacy);
    const headStyles = fillStyles(raw.headStyles, heads, 'head', {
      ...legacy,
      faceMap: raw.faceMap || (Array.isArray(raw.headStyles) && raw.headStyles[0]?.faceMap) || '',
    });
    let footParts = fill(raw.footParts, feet, 'foot');
    const footId = PARTS[footParts[0]] ? footParts[0] : defaultPartId('foot');
    footParts = Array.from({ length: feet }, () => footId);

    const sharedLimbStyle = defaultStyle('foot',
      (Array.isArray(raw.footStyles) && raw.footStyles[0]) || {},
      legacy);
    const footStyles = Array.from({ length: feet }, () => ({ ...sharedLimbStyle }));
    const tailStyles = fillStyles(raw.tailStyles, tails, 'tail', legacy);
    return {
      beastName: (raw.beastName || raw.name || '').trim() || '未名異獸',
      heads, hands, feet, tails,
      body: PARTS[raw.body] ? raw.body : defaultPartId('body'),
      headParts: fill(raw.headParts, heads, 'head'),
      handParts: [],
      footParts,
      tailParts: fill(raw.tailParts, tails, 'tail'),
      bodyStyle,
      headStyles,
      handStyles: [],
      footStyles,
      tailStyles,
      // legacy mirrors (body + first head) for older callers / describe
      color: bodyStyle.color,
      color2: bodyStyle.color2,
      pattern: bodyStyle.pattern,
      faceMap: headStyles[0]?.faceMap || '',
      traits: Array.isArray(raw.traits) ? raw.traits.filter((t) => TRAIT_PRESETS.some((p) => p.id === t)) : [],
      sound: SOUND_PRESETS.some((s) => s.id === raw.sound) ? raw.sound : 'none',
      soundCustom: (raw.soundCustom || '').trim(),
      scale: raw.scale ?? 1,
      rotation: raw.rotation ?? 0,
      partTweaks: (raw.partTweaks && typeof raw.partTweaks === 'object') ? { ...raw.partTweaks } : {},
      wanderRadius: raw.wanderRadius ?? 8,
      showName: raw.showName ?? true,
      stationary: raw.stationary ?? false,
      hitbox: raw.hitbox ?? true,
      originX: raw.originX,
      originZ: raw.originZ,
      originY: raw.originY,
    };
  }

  function cnCount(n, noun) {
    const map = { 1: '一', 2: '二', 3: '三', 4: '四', 5: '五', 6: '六', 7: '七', 8: '八', 9: '九' };
    return `${map[n] || n}${noun}`;
  }

  function describeRecipe(recipe) {
    const r = normalizeRecipe(recipe);
    const bits = ['有獸焉'];
    if (r.heads === 0) bits.push('無首');
    else if (r.heads !== 1) bits.push(cnCount(r.heads, '首'));
    if (r.feet === 0) bits.push('無足');
    else if (r.feet !== 2) bits.push(cnCount(r.feet, '足'));
    if (r.tails === 0) bits.push('無尾');
    else if (r.tails !== 1) bits.push(cnCount(r.tails, '尾'));
    const bodyLike = PARTS[r.body]?.like;
    if (bodyLike) bits.push(`其狀如${bodyLike}`);
    const likeClause = (arr, noun) => {
      if (!arr.length) return;
      const likes = [...new Set(arr.map((id) => PARTS[id]?.like).filter(Boolean))];
      if (!likes.length) return;
      bits.push(likes.length === 1 ? `其${noun}如${likes[0]}` : `其${noun}如${likes.join('、')}`);
    };
    likeClause(r.headParts, '首');
    likeClause(r.footParts, '足');
    likeClause(r.tailParts, '尾');
    if (r.headStyles?.some((s) => s.faceMap) || r.faceMap) bits.push('面有紋');
    r.traits.forEach((id) => {
      const t = TRAIT_PRESETS.find((x) => x.id === id);
      if (t?.phrase) bits.push(t.phrase);
    });
    let soundLike = '';
    if (r.sound === 'custom') soundLike = r.soundCustom;
    else if (r.sound && r.sound !== 'none') soundLike = SOUND_PRESETS.find((s) => s.id === r.sound)?.like || '';
    if (soundLike) bits.push(`其音如${soundLike}`);
    bits.push(`其名曰${r.beastName}`);
    return `${bits.join('，')}。`;
  }

  function fanOffsets(n, spread = 0.28) {
    if (n <= 1) return [0];
    return Array.from({ length: n }, (_, i) => -spread / 2 + (spread * i) / (n - 1));
  }

  /**
   * Unique head contact: body neck triad (center/left/right) × head fit (size seat)
   * × head count layout.
   */
  function resolveHeadSocket(body, headId, index, count) {
    const neck = body.userData.neck || {
      center: { x: 0, y: 0.6, z: 0.3 },
      left: { x: -0.14, y: 0.58, z: 0.28 },
      right: { x: 0.14, y: 0.58, z: 0.28 },
    };
    const fit = PARTS[headId]?.fit || { seatY: -0.02, seatZ: 0, fanMul: 1, yaw: 0 };
    const n = Math.max(1, count | 0);
    const i = Math.max(0, index | 0);

    let base;
    if (n <= 1) {
      base = { ...neck.center };
    } else if (n === 2) {
      base = { ...(i === 0 ? neck.left : neck.right) };
    } else {
      // 3+ : left, center, right, then fan extras from center
      const triad = [neck.left, neck.center, neck.right];
      if (i < 3) {
        base = { ...triad[i] };
      } else {
        const extra = i - 2;
        const fan = fanOffsets(n - 2, 0.28 * (fit.fanMul || 1));
        base = {
          x: neck.center.x + (fan[extra] || 0),
          y: neck.center.y + 0.02,
          z: neck.center.z - Math.abs(fan[extra] || 0) * 0.2,
        };
      }
    }

    // Side heads angle slightly outward
    let yaw = fit.yaw || 0;
    if (n >= 2) {
      if (base.x < -0.02) yaw -= 0.28;
      else if (base.x > 0.02) yaw += 0.28;
    }

    return {
      x: base.x,
      y: base.y + (fit.seatY || 0),
      z: base.z + (fit.seatZ || 0),
      ry: yaw,
    };
  }

  /** Per-foot-type seat into the body hip socket. */
  function resolveFootSocket(baseSock, footId) {
    const fit = PARTS[footId]?.fit || {};
    const side = (baseSock.x || 0) >= 0 ? 1 : -1;
    return {
      x: (baseSock.x || 0) + side * (fit.seatX || 0),
      y: (baseSock.y || 0) + (fit.seatY || 0),
      z: (baseSock.z || 0) + (fit.seatZ || 0),
      rx: fit.rx != null ? fit.rx : (baseSock.rx || 0),
      ry: fit.ry != null ? fit.ry : (baseSock.ry || 0),
      rz: fit.rz != null ? fit.rz : (baseSock.rz || 0),
    };
  }

  /** Per-hand-type seat into the body shoulder socket. */
  function resolveHandSocket(baseSock, handId) {
    const fit = PARTS[handId]?.fit || {};
    const side = (baseSock.x || 0) >= 0 ? 1 : -1;
    return {
      x: (baseSock.x || 0) + side * (fit.seatX || 0),
      y: (baseSock.y || 0) + (fit.seatY || 0),
      z: (baseSock.z || 0) + (fit.seatZ || 0),
      rx: fit.rx != null ? fit.rx : (baseSock.rx || 0),
      ry: fit.ry != null ? fit.ry : (baseSock.ry || 0),
      rz: fit.rz != null ? fit.rz : (baseSock.rz || 0),
    };
  }

  function styleToProps(style) {
    return {
      color: style.color,
      color2: style.color2,
      pattern: style.pattern,
      patternImage: style.patternImage || '',
      faceMap: style.faceMap || '',
    };
  }

  function attachPart(parent, part, sock, opts = {}) {
    const pivot = new THREE.Object3D();
    pivot.position.set(sock.x || 0, sock.y || 0, sock.z || 0);
    const kind = part.userData.partKind || part.userData.partAnim || 'hand';
    const side = opts.side != null ? opts.side : ((sock.x || 0) >= 0 ? 1 : -1);

    let rx = 0, ry = 0, rz = 0;
    if (kind === 'wing' || part.userData.partAnim === 'wing') {
      rx = opts.rx != null ? opts.rx : 0;
      ry = opts.ry != null ? opts.ry : 0;
      rz = opts.rz != null ? opts.rz : (side * -0.2);
      if (side < 0) part.scale.x = -Math.abs(part.scale.x || 1);
    } else {
      rx = opts.rx != null ? opts.rx : (sock.rx || 0);
      ry = opts.ry != null ? opts.ry : (sock.ry || 0);
      rz = opts.rz != null ? opts.rz : (sock.rz || 0);
    }

    pivot.rotation.set(rx, ry, rz);
    const anim = opts.anim || part.userData.partAnim || null;
    pivot.userData.anim = anim;
    pivot.userData.animPhase = opts.phase || 0;
    pivot.userData.side = side;
    pivot.userData.rest = { rx, ry, rz };
    pivot.userData.restY = pivot.position.y;
    if (opts.partKey) {
      pivot.userData.partKey = opts.partKey;
      pivot.name = opts.partKey;
    }
    parent.add(pivot);
    pivot.add(part);
    return pivot;
  }

  function applyPartTweak(pivot, tweak) {
    if (!pivot || !tweak) return;
    const rest = pivot.userData.rest || { rx: 0, ry: 0, rz: 0 };
    if (!pivot.userData.tweakBase) {
      pivot.userData.tweakBase = {
        x: pivot.position.x,
        y: pivot.position.y,
        z: pivot.position.z,
        rx: rest.rx,
        ry: rest.ry,
        rz: rest.rz,
        sx: 1, sy: 1, sz: 1,
      };
    }
    const b = pivot.userData.tweakBase;
    pivot.position.set(b.x + (tweak.x || 0), b.y + (tweak.y || 0), b.z + (tweak.z || 0));
    pivot.rotation.set(b.rx + (tweak.rx || 0), b.ry + (tweak.ry || 0), b.rz + (tweak.rz || 0));
    if (tweak.sx != null || tweak.sy != null || tweak.sz != null) {
      pivot.scale.set(
        Math.max(0.05, tweak.sx ?? tweak.s ?? 1),
        Math.max(0.05, tweak.sy ?? tweak.s ?? 1),
        Math.max(0.05, tweak.sz ?? tweak.s ?? 1),
      );
    } else {
      const s = tweak.s != null && tweak.s > 0.05 ? tweak.s : 1;
      pivot.scale.setScalar(s);
    }
    pivot.userData.rest = { rx: pivot.rotation.x, ry: pivot.rotation.y, rz: pivot.rotation.z };
    pivot.userData.restY = pivot.position.y;
  }

  function makeChimera(props) {
    const r = normalizeRecipe(props);
    const root = new THREE.Group();
    const sc = Math.max(0.35, r.scale || 1);
    const body = makePart(r.body, styleToProps(r.bodyStyle));
    const sockets = body.userData.sockets || {
      head: [{ x: 0, y: 0.6, z: 0.3 }], hand: [], foot: [], tail: [{ x: 0, y: 0.42, z: -0.32 }],
    };
    body.userData.partKey = 'body';
    body.name = 'body';
    root.add(body);
    const tweaks = r.partTweaks || {};
    if (tweaks.body) applyPartTweak(body, tweaks.body);

    r.headParts.forEach((id, i) => {
      const part = makePart(id, styleToProps(r.headStyles[i] || r.bodyStyle));
      const bodyFit = body.userData.attachFit || {};
      if (bodyFit.headScale) part.scale.multiplyScalar(bodyFit.headScale);
      const sock = resolveHeadSocket(body, id, i, r.heads);
      if (bodyFit.headSeatY) sock.y += bodyFit.headSeatY;
      const key = `head_${i}`;
      const pivot = attachPart(body, part, sock, { anim: 'bob', phase: i * 0.7, ry: sock.ry || 0, partKey: key });
      part.name = key;
      applyPartTweak(pivot, tweaks[key]);
    });

    r.footParts.forEach((id, i) => {
      const part = makePart(id, styleToProps(r.footStyles[i] || r.bodyStyle));
      const bodyFit = body.userData.attachFit || {};
      if (bodyFit.footScale) part.scale.multiplyScalar(bodyFit.footScale);
      const list = sockets.foot || [];
      const base = list[i] || list[i % Math.max(1, list.length)] || {
        x: (i % 2 ? 1 : -1) * 0.12, y: 0.05, z: i < 2 ? 0.2 : -0.2,
      };
      const sock = resolveFootSocket(base, id);
      if (bodyFit.footSeatY) sock.y += bodyFit.footSeatY;
      const key = `foot_${i}`;
      const pivot = attachPart(body, part, sock, {
        phase: i * 0.3, rx: sock.rx, ry: sock.ry, rz: sock.rz, partKey: key,
      });
      part.name = key;
      applyPartTweak(pivot, tweaks[key]);
    });

    const tailFan = fanOffsets(r.tails, 0.36);
    const tailList = (sockets.tail && sockets.tail.length) ? sockets.tail : [{ x: 0, y: 0.42, z: -0.32 }];
    r.tailParts.forEach((id, i) => {
      const part = makePart(id, styleToProps(r.tailStyles[i] || r.bodyStyle));
      const bodyFit = body.userData.attachFit || {};
      const base = tailList[Math.min(i, tailList.length - 1)];
      const sock = {
        x: base.x + (tailFan[i] || 0),
        y: base.y + (bodyFit.tailSeatY || 0),
        z: base.z,
      };
      const key = `tail_${i}`;
      const pivot = attachPart(body, part, sock, {
        anim: 'tail', phase: i * 0.9, ry: (tailFan[i] || 0) * 1.1, partKey: key,
      });
      part.name = key;
      applyPartTweak(pivot, tweaks[key]);
    });

    root.scale.setScalar(sc);
    root.rotation.y = r.rotation || 0;
    // Settle so the lowest point (usually feet) sits at local y=0 — not the belly.
    // Island placement uses root.position.y = terrain height at the origin.
    root.updateMatrixWorld(true);
    const groundBox = new THREE.Box3().setFromObject(root);
    if (Number.isFinite(groundBox.min.y) && Math.abs(groundBox.min.y) > 1e-6) {
      const dy = -groundBox.min.y;
      root.children.forEach((c) => { c.position.y += dy; });
    }
    root.userData.isMob = true;
    root.userData.chimera = true;
    root.userData.recipe = r;
    root.userData.animRoot = true;
    return root;
  }

  /** Rigid-body part motion: tails sway, wings flap, heads idle-bob. */
  function updateChimeraAnims(root, t) {
    if (!root) return;
    root.traverse((o) => {
      const anim = o.userData?.anim;
      if (!anim) return;
      const rest = o.userData.rest || { rx: 0, ry: 0, rz: 0 };
      const phase = o.userData.animPhase || 0;
      const side = o.userData.side || 1;
      if (anim === 'tail') {
        // Tail extends -Z: sway mainly in yaw/pitch, not roll
        o.rotation.y = rest.ry + Math.sin(t * 1.45 + phase) * 0.28;
        o.rotation.x = rest.rx + Math.sin(t * 1.9 + phase * 0.7) * 0.1;
        o.rotation.z = rest.rz;
      } else if (anim === 'wing') {
        // Wing spans +X (left mirrored via scale.x=-1): flap around Z, same sign both sides
        const flap = Math.sin(t * 5.0 + phase) * 0.55;
        o.rotation.z = rest.rz + flap;
        o.rotation.x = rest.rx + Math.sin(t * 5.0 + phase) * 0.08;
        o.rotation.y = rest.ry;
      } else if (anim === 'bob') {
        o.rotation.x = rest.rx + Math.sin(t * 1.1 + phase) * 0.012;
        o.rotation.y = rest.ry;
        o.rotation.z = rest.rz;
        const baseY = o.userData.restY ?? o.position.y;
        o.position.y = baseY + Math.sin(t * 1.25 + phase) * 0.003;
      }
    });
  }

  function chimeraHeadY(props, scale) {
    const r = normalizeRecipe(props || {});
    const s = Math.max(0.35, scale ?? r.scale ?? 1);
    return (r.heads === 0 ? 0.75 : 1.15) * s + 0.04;
  }
  function chimeraSpeed(props, scale) {
    const r = normalizeRecipe(props || {});
    let spd = 0.95 * Math.max(0.4, scale ?? r.scale ?? 1);
    if (r.traits.includes('fast')) spd *= 1.55;
    return spd;
  }
  function isFlyingChimera(props) { return normalizeRecipe(props).traits.includes('fly'); }
  function isSwimChimera(props) { return normalizeRecipe(props).traits.includes('swim'); }

  /**
   * Live composer preview — large WebGL view that auto-rotates.
   * Call update(recipe) when draft changes; dispose() when leaving tab.
   */
  function createPreview(canvas) {
    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, preserveDrawingBuffer: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x14120f);
    const camera = new THREE.PerspectiveCamera(32, 1, 0.05, 40);
    camera.position.set(1.6, 1.05, 2.1);
    const hemi = new THREE.HemisphereLight(0xffe8c8, 0x2a3028, 0.85);
    scene.add(hemi);
    const key = new THREE.DirectionalLight(0xfff2dc, 1.05);
    key.position.set(2.2, 3.6, 1.8);
    scene.add(key);
    const rim = new THREE.DirectionalLight(0xc8a878, 0.45);
    rim.position.set(-2.5, 1.2, -1.5);
    scene.add(rim);
    const ground = new THREE.Mesh(
      new THREE.CircleGeometry(1.35, 48),
      new THREE.MeshStandardMaterial({ color: 0x1a1814, roughness: 0.98 }),
    );
    ground.rotation.x = -Math.PI / 2;
    ground.position.y = 0;
    scene.add(ground);

    // Same camera / gizmo stack as island placements
    const orbit = new OrbitControls(camera, canvas);
    orbit.enableDamping = true;
    orbit.dampingFactor = 0.08;
    orbit.mouseButtons.LEFT = THREE.MOUSE.ROTATE;
    orbit.mouseButtons.RIGHT = THREE.MOUSE.PAN;
    orbit.mouseButtons.MIDDLE = THREE.MOUSE.DOLLY;
    orbit.maxPolarAngle = Math.PI * 0.49;
    orbit.minDistance = 1.2;
    orbit.maxDistance = 14;
    orbit.target.set(0, 0.45, 0);
    orbit.autoRotate = true;
    orbit.autoRotateSpeed = 1.15;

    const transform = new UnifiedTransformControls(camera, canvas);
    transform.setSpace('world');
    transform.setSize(0.9);
    transform.getGroundY = () => 0;
    transform.enabled = false;
    transform.getHelper().visible = false;
    scene.add(transform.getHelper());

    let root = null;
    let raf = 0;
    let alive = true;
    let unlockMode = false;
    let selected = null;
    let onTweakChange = null;
    let gizmoDragging = false;
    let selectPtr = null;
    const raycaster = new THREE.Raycaster();
    const pointer = new THREE.Vector2();

    transform.addEventListener('dragging-changed', (e) => {
      gizmoDragging = !!e.value;
      orbit.enabled = !e.value;
      orbit.autoRotate = false;
      if (!e.value) {
        commitSelectedTweak();
        transform.invalidateBounds?.();
        transform.refresh?.();
      }
    });
    transform.addEventListener('objectChange', () => {
      transform.refresh?.();
    });

    function resize() {
      const w = canvas.clientWidth || 320;
      const h = canvas.clientHeight || 360;
      renderer.setSize(w, h, false);
      camera.aspect = w / Math.max(1, h);
      camera.updateProjectionMatrix();
    }

    function frameRoot(obj) {
      obj.updateMatrixWorld(true);
      const box = new THREE.Box3().setFromObject(obj);
      const size = new THREE.Vector3();
      const center = new THREE.Vector3();
      box.getSize(size);
      box.getCenter(center);
      const lift = -box.min.y;
      obj.position.y += lift;
      box.translate(new THREE.Vector3(0, lift, 0));
      box.getCenter(center);
      box.getSize(size);
      const lookY = Math.max(0.2, center.y);
      orbit.target.set(0, lookY, 0);
      const maxDim = Math.max(size.x, size.y, size.z, 0.5);
      const dist = maxDim * 2.55;
      const yaw = 0.55;
      const pitch = 0.28;
      const cp = Math.cos(pitch);
      camera.position.set(
        Math.sin(yaw) * cp * dist,
        lookY + Math.sin(pitch) * dist * 0.85,
        Math.cos(yaw) * cp * dist,
      );
      camera.near = Math.max(0.05, dist * 0.02);
      camera.far = Math.max(40, dist * 20);
      camera.updateProjectionMatrix();
      orbit.update();
    }

    function disposeRoot() {
      if (selected) {
        transform.detach();
        selected = null;
      }
      if (!root) return;
      scene.remove(root);
      root.traverse((o) => {
        if (o.geometry && !o.geometry.userData?.shared) o.geometry.dispose?.();
        if (o.material) {
          const mats = Array.isArray(o.material) ? o.material : [o.material];
          mats.forEach((m) => {
            if (m?.userData?.shared) return;
            m.map?.dispose?.();
            m.dispose?.();
          });
        }
      });
      root = null;
    }

    function findPartPivot(obj) {
      let o = obj;
      while (o) {
        if (o.userData?.partKey) return o;
        o = o.parent;
      }
      return null;
    }

    function pickPart(e) {
      if (!root) return null;
      const rect = canvas.getBoundingClientRect();
      pointer.x = ((e.clientX - rect.left) / Math.max(1, rect.width)) * 2 - 1;
      pointer.y = -((e.clientY - rect.top) / Math.max(1, rect.height)) * 2 + 1;
      raycaster.setFromCamera(pointer, camera);
      const hits = raycaster.intersectObject(root, true);
      for (const h of hits) {
        const pivot = findPartPivot(h.object);
        if (pivot) return pivot;
      }
      return null;
    }

    function selectPart(pivot) {
      selected = pivot;
      if (!pivot || !unlockMode) {
        transform.enabled = false;
        transform.detach();
        transform.getHelper().visible = false;
        return;
      }
      if (!pivot.userData.tweakBase) {
        const rest = pivot.userData.rest || { rx: pivot.rotation.x, ry: pivot.rotation.y, rz: pivot.rotation.z };
        pivot.userData.tweakBase = {
          x: pivot.position.x, y: pivot.position.y, z: pivot.position.z,
          rx: rest.rx, ry: rest.ry, rz: rest.rz,
          sx: Math.abs(pivot.scale.x) || 1,
          sy: Math.abs(pivot.scale.y) || 1,
          sz: Math.abs(pivot.scale.z) || 1,
        };
      }
      transform.attach(pivot);
      transform.getHelper().visible = true;
      transform.enabled = true;
      transform.invalidateBounds?.();
      transform.refresh?.();
    }

    function commitSelectedTweak() {
      if (!selected || !onTweakChange) return;
      const b = selected.userData.tweakBase;
      if (!b) return;
      const sx = Math.abs(selected.scale.x);
      const sy = Math.abs(selected.scale.y);
      const sz = Math.abs(selected.scale.z);
      onTweakChange(selected.userData.partKey, {
        x: selected.position.x - b.x,
        y: selected.position.y - b.y,
        z: selected.position.z - b.z,
        rx: selected.rotation.x - b.rx,
        ry: selected.rotation.y - b.ry,
        rz: selected.rotation.z - b.rz,
        sx, sy, sz,
        s: (sx + sy + sz) / 3,
      });
    }

    function update(recipe) {
      const keepKey = selected?.userData?.partKey || null;
      disposeRoot();
      const r = normalizeRecipe({ ...recipe, scale: Math.max(0.8, recipe?.scale || 1), rotation: 0 });
      root = makeChimera(r);
      root.rotation.y = 0;
      scene.add(root);
      frameRoot(root);
      if (unlockMode && keepKey && root) {
        let found = null;
        root.traverse((o) => { if (o.userData?.partKey === keepKey) found = o; });
        if (found) selectPart(found);
      }
    }

    function setUnlockMode(on, opts = {}) {
      const next = !!on;
      if (typeof opts.onTweakChange === 'function') onTweakChange = opts.onTweakChange;
      if (!next && unlockMode) commitSelectedTweak();
      unlockMode = next;
      if (unlockMode) {
        orbit.autoRotate = false;
        transform.enabled = !!selected;
      } else {
        selectPart(null);
        transform.enabled = false;
        onTweakChange = null;
        orbit.autoRotate = true;
      }
      orbit.enabled = true;
      return unlockMode;
    }

    function onPointerDown(e) {
      if (e.button != null && e.button !== 0) return;
      if (gizmoDragging || transform.dragging) return;
      selectPtr = { x: e.clientX, y: e.clientY, moved: false };
      orbit.autoRotate = false;
    }
    function onPointerMove(e) {
      if (!selectPtr) return;
      if (Math.hypot(e.clientX - selectPtr.x, e.clientY - selectPtr.y) > 5) selectPtr.moved = true;
    }
    function onPointerUp(e) {
      if (e.button != null && e.button !== 0) { selectPtr = null; return; }
      const ptr = selectPtr;
      selectPtr = null;
      if (!unlockMode || gizmoDragging || transform.dragging) return;
      if (ptr?.moved) return;
      const hit = pickPart(e);
      if (hit) selectPart(hit);
      else selectPart(null);
    }

    canvas.style.touchAction = 'none';
    canvas.addEventListener('pointerdown', onPointerDown);
    canvas.addEventListener('pointermove', onPointerMove);
    canvas.addEventListener('pointerup', onPointerUp);
    canvas.addEventListener('pointercancel', onPointerUp);

    const clock = { t0: performance.now() };
    function loop() {
      if (!alive) return;
      raf = requestAnimationFrame(loop);
      resize();
      const t = (performance.now() - clock.t0) / 1000;
      if (root && !unlockMode) updateChimeraAnims(root, t);
      orbit.update();
      if (selected && transform.enabled) transform.refresh?.();
      renderer.render(scene, camera);
    }

    function dispose() {
      alive = false;
      cancelAnimationFrame(raf);
      canvas.removeEventListener('pointerdown', onPointerDown);
      canvas.removeEventListener('pointermove', onPointerMove);
      canvas.removeEventListener('pointerup', onPointerUp);
      canvas.removeEventListener('pointercancel', onPointerUp);
      transform.enabled = false;
      transform.detach();
      transform.dispose?.();
      orbit.dispose?.();
      disposeRoot();
      renderer.dispose();
    }

    resize();
    orbit.update();
    loop();
    return {
      update, dispose, resize,
      setUnlockMode,
      isUnlocked: () => unlockMode,
      getSelectedKey: () => selected?.userData?.partKey || null,
    };
  }


  return {
    TYPE,
    LIMITS,
    FEET_COUNTS,
    TRAIT_PRESETS,
    SOUND_PRESETS,
    PATTERN_PRESETS,
    PARTS,
    PRESETS: [],
    DEFAULTS: { [TYPE]: normalizeRecipe({}) },
    FACTORIES: { [TYPE]: makeChimera },
    partsForSlot,
    defaultPartId,
    normalizeRecipe,
    describeRecipe,
    makeChimera,
    makePart,
    setPartGlb,
    preloadParts,
    isPartGlbReady,
    createPreview,
    updateChimeraAnims,
    isChimera: (type) => type === TYPE || (typeof type === 'string' && type.startsWith('chimera_')),
    chimeraHeadY,
    chimeraSpeed,
    isFlyingChimera,
    isSwimChimera,
  };
}
