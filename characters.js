/**
 * 蓬莱筑境 — 人物（NPC + 遊歷皮膚）
 * Separate from animals.js: same wander/placement hooks in the editor,
 * but own catalog + loaders so interaction / dialogue can grow later.
 *
 * Current GLBs are static textured meshes (no skins / no animations).
 * Procedural bob/lean is applied in-game; real walk cycles need a rigged export.
 */
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

export function installCharacters(THREE, { cprop } = {}) {
  const loader = new GLTFLoader();

  /** Catalog — ids match in-game type / skin keys */
  const CATALOG = [
    {
      id: '女媧',
      file: 'characters/女媧帶顏色.glb',
      icon: '🐍',
      label: '女媧',
      headY: 1.05,
      speed: 1.05,
      wander: 7,
    },
    {
      id: '嫦娥',
      file: 'characters/嫦娥帶顏色.glb',
      icon: '🌙',
      label: '嫦娥',
      headY: 1.0,
      speed: 1.15,
      wander: 8,
    },
    {
      id: '后羿',
      file: 'characters/后羿帶顏色.glb',
      icon: '🏹',
      label: '后羿',
      headY: 1.08,
      speed: 1.2,
      wander: 8,
    },
    {
      id: '西王母',
      file: 'characters/西王母帶顏色.glb',
      icon: '👑',
      label: '西王母',
      headY: 1.02,
      speed: 0.95,
      wander: 6,
    },
  ];

  const DEFAULT_SKIN = '女媧';
  const NPC_TYPES = new Set(CATALOG.map((c) => c.id));
  const META = Object.fromEntries(CATALOG.map((c) => [c.id, c]));

  /** Templates: id → { scene, height } after preload */
  const templates = new Map();
  let ready = false;

  /**
   * Blender glTF export already includes a `convert` node for Y-up.
   * Do NOT add an extra stand rotation — that lays the mesh flat again.
   * Only drop feet to y = 0 and normalize materials (exports often ship metalness=1).
   */
  const NPC_BASE_SCALE = 0.95;
  const PLAYER_BASE_SCALE = 0.85;

  function markShared(root) {
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
        // Baked character textures read as black if left fully metallic with no env map
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

  function measureHeight(root) {
    const box = new THREE.Box3().setFromObject(root);
    const size = new THREE.Vector3();
    box.getSize(size);
    return Math.max(0.2, size.y);
  }

  function prepareTemplateScene(gltfScene) {
    const wrap = new THREE.Group();
    wrap.name = 'charTemplate';
    const inner = new THREE.Group();
    inner.name = 'charOriented';
    inner.add(gltfScene);
    wrap.add(inner);
    wrap.updateMatrixWorld(true);
    const box = new THREE.Box3().setFromObject(wrap);
    // Feet to ground
    inner.position.y = -box.min.y;
    // If somehow still longer on XZ than Y, tip upright on the tallest axis
    wrap.updateMatrixWorld(true);
    const size = new THREE.Vector3();
    new THREE.Box3().setFromObject(wrap).getSize(size);
    if (size.y < size.z * 0.75 && size.z >= size.x) {
      // Height along Z — rare fallback if convert node missing
      inner.rotation.x = -Math.PI / 2;
      wrap.updateMatrixWorld(true);
      const box2 = new THREE.Box3().setFromObject(wrap);
      inner.position.y -= box2.min.y;
    } else if (size.y < size.x * 0.75 && size.x > size.z) {
      inner.rotation.z = Math.PI / 2;
      wrap.updateMatrixWorld(true);
      const box2 = new THREE.Box3().setFromObject(wrap);
      inner.position.y -= box2.min.y;
    }
    markShared(wrap);
    return { scene: wrap, height: measureHeight(wrap) };
  }

  function loadOne(entry, onProgress) {
    const url = encodeURI(entry.file);
    return new Promise((resolve, reject) => {
      loader.load(
        url,
        (gltf) => {
          const prepared = prepareTemplateScene(gltf.scene);
          templates.set(entry.id, prepared);
          onProgress?.(1, entry.label);
          resolve(prepared);
        },
        (ev) => {
          if (ev.total > 0) onProgress?.(ev.loaded / ev.total, entry.label);
        },
        reject
      );
    });
  }

  /**
   * Preload all character GLBs. Call during boot before placing NPCs / player skin.
   * @param {(fraction:number, label:string) => void} [onProgress]
   */
  async function preload(onProgress) {
    let done = 0;
    const n = CATALOG.length;
    for (const entry of CATALOG) {
      await loadOne(entry, (fileFrac, label) => {
        const overall = (done + Math.min(1, fileFrac || 0)) / n;
        onProgress?.(overall, `載入人物 · ${label}`);
      });
      done += 1;
      onProgress?.(done / n, `載入人物 · ${entry.label}`);
    }
    ready = true;
    return templates;
  }

  function isReady() {
    return ready && templates.size === CATALOG.length;
  }

  function cloneVisual(id) {
    const tpl = templates.get(id);
    if (!tpl) {
      const stub = new THREE.Group();
      stub.name = 'npcVisual';
      stub.userData.placeholder = true;
      const placeholder = new THREE.Mesh(
        new THREE.CapsuleGeometry(0.18, 0.55, 4, 8),
        new THREE.MeshStandardMaterial({ color: 0x8a7060, roughness: 0.85 })
      );
      placeholder.position.y = 0.45;
      stub.add(placeholder);
      return { visual: stub, height: 0.9 };
    }
    const visual = tpl.scene.clone(true);
    visual.name = 'npcVisual';
    visual.userData.placeholder = false;
    return { visual, height: tpl.height };
  }

  function makeNpc(type, props = {}) {
    const id = NPC_TYPES.has(type) ? type : DEFAULT_SKIN;
    const root = new THREE.Group();
    root.name = `npc_${id}`;
    const { visual, height } = cloneVisual(id);
    const sc = (props.scale ?? 1) * NPC_BASE_SCALE;
    visual.scale.setScalar(sc);
    root.add(visual);
    root.rotation.y = props.rotation || 0;
    root.userData.isNpc = true;
    root.userData.charId = id;
    root.userData.charHeight = height * sc;
    return root;
  }

  /** Player skin root — same mesh as NPC, separate anim target */
  function createPlayerSkin(skinId = DEFAULT_SKIN) {
    const id = NPC_TYPES.has(skinId) ? skinId : DEFAULT_SKIN;
    const root = new THREE.Group();
    root.name = 'playCharacter';
    const { visual, height } = cloneVisual(id);
    visual.scale.setScalar(PLAYER_BASE_SCALE);
    root.add(visual);
    root.visible = false;
    root.userData.charId = id;
    root.userData.charHeight = height * PLAYER_BASE_SCALE;
    return {
      root,
      visual,
      skinId: id,
      height: height * PLAYER_BASE_SCALE,
      hasSkeleton: false,
      hasClips: false,
    };
  }

  function swapPlayerSkin(parts, skinId) {
    if (!parts?.root) return parts;
    const id = NPC_TYPES.has(skinId) ? skinId : DEFAULT_SKIN;
    const already =
      parts.skinId === id
      && parts.visual
      && !parts.visual.userData?.placeholder
      && templates.has(id);
    if (already) return parts;
    if (parts.visual) parts.root.remove(parts.visual);
    const { visual, height } = cloneVisual(id);
    visual.scale.setScalar(PLAYER_BASE_SCALE);
    parts.root.add(visual);
    parts.visual = visual;
    parts.skinId = id;
    parts.height = height * PLAYER_BASE_SCALE;
    parts.root.userData.charId = id;
    parts.root.userData.charHeight = parts.height;
    return parts;
  }

  /**
   * Lightweight whole-mesh motion (no bones in these GLBs).
   */
  function animateSkinVisual(visual, state, dt) {
    if (!visual) return;
    const {
      moving = false,
      airborne = false,
      ascending = false,
      sitting = false,
      swimming = false,
      flying = false,
      walkPhase = 0,
      idlePhase = 0,
      landTimer = 0,
      yaw = 0,
    } = state;

    if (visual.parent) visual.parent.rotation.y = yaw + Math.PI;

    let y = 0;
    let rx = 0;
    let rz = 0;
    let sy = 1;

    if (sitting) {
      y = -0.12;
      rx = 0.35;
      sy = 0.92;
    } else if (flying) {
      y = Math.sin(idlePhase * 3) * 0.04;
      rx = -0.08;
    } else if (swimming) {
      y = Math.sin(walkPhase) * 0.03;
      rx = 0.55 + Math.sin(walkPhase * 0.5) * 0.05;
    } else if (airborne) {
      rx = ascending ? -0.12 : 0.18;
      y = ascending ? 0.02 : -0.02;
    } else if (landTimer > 0) {
      const crouch = Math.min(1, landTimer / 0.12);
      y = -0.06 * crouch;
      sy = 1 - 0.08 * crouch;
      rx = 0.15 * crouch;
    } else if (moving) {
      const swing = Math.sin(walkPhase);
      y = Math.abs(swing) * 0.035;
      rz = swing * 0.06;
      rx = 0.04;
    } else {
      y = Math.sin(idlePhase * 1.6) * 0.012;
      rz = Math.sin(idlePhase * 0.9) * 0.02;
    }

    const blend = Math.min(1, dt * 14);
    visual.position.y += (y - visual.position.y) * blend;
    visual.rotation.x += (rx - visual.rotation.x) * blend;
    visual.rotation.z += (rz - visual.rotation.z) * blend;
    const s = visual.scale.x;
    const targetSy = s * sy;
    visual.scale.y += (targetSy - visual.scale.y) * blend;
  }

  /** Bob NPC visual while wandering (called from updateMobs) */
  function animateNpcWander(mesh, phase, moving) {
    const visual = mesh?.getObjectByName?.('npcVisual');
    if (!visual) return;
    if (moving) {
      const swing = Math.sin(phase);
      visual.position.y = Math.abs(swing) * 0.03;
      visual.rotation.z = swing * 0.05;
    } else {
      visual.position.y = Math.sin(phase * 0.5) * 0.01;
      visual.rotation.z = Math.sin(phase * 0.35) * 0.015;
    }
  }

  const PRESETS = CATALOG.map((c) => ({
    type: c.id,
    icon: c.icon,
    label: c.label,
    terrain: false,
    npc: true,
    tab: 'chars',
  }));

  const DEFAULTS = {};
  const FACTORIES = {};
  CATALOG.forEach((c) => {
    DEFAULTS[c.id] = {
      scale: 1,
      rotation: 0,
      wanderRadius: c.wander,
      showName: true,
      stationary: false,
      hitbox: true,
    };
    FACTORIES[c.id] = (props) => makeNpc(c.id, props);
  });

  function isNpc(type) {
    return NPC_TYPES.has(type);
  }

  function npcHeadY(type, scale) {
    const s = Math.max(0.15, scale || 1);
    const base = META[type]?.headY ?? 1;
    return base * s * NPC_BASE_SCALE + 0.04;
  }

  function npcSpeed(type, scale) {
    const base = META[type]?.speed ?? 1;
    return base * Math.max(0.4, scale || 1);
  }

  function listSkins() {
    return CATALOG.map((c) => ({ id: c.id, label: c.label, icon: c.icon }));
  }

  return {
    CATALOG,
    DEFAULT_SKIN,
    PRESETS,
    DEFAULTS,
    FACTORIES,
    NPC_TYPES,
    META,
    isNpc,
    npcHeadY,
    npcSpeed,
    preload,
    isReady,
    createPlayerSkin,
    swapPlayerSkin,
    animateSkinVisual,
    animateNpcWander,
    listSkins,
    NPC_BASE_SCALE,
    PLAYER_BASE_SCALE,
  };
}
