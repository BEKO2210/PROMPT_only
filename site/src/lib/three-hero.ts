// Three.js Audit-Core-Orb — cinematic hero centerpiece.
//
// Renders an icosahedron sphere with:
// - Custom vertex shader: time-driven 3D simplex noise displacement
// - Custom fragment shader: Fresnel rim glow + chrome highlight + cyan core
// - Slow auto-rotation + subtle cursor-driven look-at
// - Additive-blended outer glow halo
//
// Design goals:
// - Lazy: dynamic-imported only when hero is visible
// - Cheap: stops rendering when off-screen; respects DPR cap
// - Safe: refuses to init on reduced-motion or small viewports
// - Disposable: clean teardown removes WebGL context + listeners

import type {
  Mesh,
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  ShaderMaterial,
  Clock,
} from 'three';

export interface HeroCoreHandle {
  destroy: () => void;
}

// 3D simplex noise (Ashima / Ian McEwan / Stefan Gustavson) — public domain.
// Embedded in vertex shader for procedural displacement.
const SIMPLEX_3D = /* glsl */ `
  vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
  vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}
  float snoise(vec3 v){
    const vec2 C = vec2(1.0/6.0, 1.0/3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
    vec3 i  = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);
    vec3 x1 = x0 - i1 + 1.0 * C.xxx;
    vec3 x2 = x0 - i2 + 2.0 * C.xxx;
    vec3 x3 = x0 - 1.0 + 3.0 * C.xxx;
    i = mod(i, 289.0);
    vec4 p = permute(permute(permute(
              i.z + vec4(0.0, i1.z, i2.z, 1.0))
            + i.y + vec4(0.0, i1.y, i2.y, 1.0))
            + i.x + vec4(0.0, i1.x, i2.x, 1.0));
    float n_ = 1.0/7.0;
    vec3 ns = n_ * D.wyz - D.xzx;
    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);
    vec4 x = x_ * ns.x + ns.yyyy;
    vec4 y = y_ * ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);
    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);
    vec4 s0 = floor(b0)*2.0 + 1.0;
    vec4 s1 = floor(b1)*2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));
    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
    vec3 p0 = vec3(a0.xy, h.x);
    vec3 p1 = vec3(a0.zw, h.y);
    vec3 p2 = vec3(a1.xy, h.z);
    vec3 p3 = vec3(a1.zw, h.w);
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
    p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
  }
`;

const VERT = /* glsl */ `
  uniform float uTime;
  uniform float uAmp;
  uniform float uFreq;
  uniform vec2  uMouse;

  varying vec3 vNormal;
  varying vec3 vViewDir;
  varying float vNoise;

  ${SIMPLEX_3D}

  void main() {
    vec3 pos = position;
    vec3 n   = normalize(position);

    // Time-driven noise displacement (organic surface motion)
    float t = uTime * 0.35;
    float noise = snoise(n * uFreq + vec3(t, t * 0.7, -t * 0.5));

    // Mouse warps locally: stronger displacement where cursor "looks"
    float mouseInfluence = clamp(
      dot(n, normalize(vec3(uMouse * 1.5, 0.6))) * 0.5 + 0.5, 0.0, 1.0
    );
    float mouseBoost = pow(mouseInfluence, 4.0) * 0.04;

    pos += n * (noise * uAmp + mouseBoost);

    vec4 mvPos = modelViewMatrix * vec4(pos, 1.0);
    vNormal  = normalize(normalMatrix * n);
    vViewDir = normalize(-mvPos.xyz);
    vNoise   = noise;

    gl_Position = projectionMatrix * mvPos;
  }
`;

const FRAG = /* glsl */ `
  precision highp float;

  uniform vec3  uColorCore;
  uniform vec3  uColorRim;
  uniform vec3  uColorAccent;
  uniform float uTime;

  varying vec3 vNormal;
  varying vec3 vViewDir;
  varying float vNoise;

  void main() {
    // Virtual light source — sits above-left-front of the sphere.
    // Gives the orb proper 3D shading (not a flat circle).
    vec3 lightDir = normalize(vec3(-0.45, 0.65, 0.85));
    float diffuse = max(dot(vNormal, lightDir), 0.0);

    // Specular highlight — Phong-style, tight glossy hotspot
    vec3 reflectDir = reflect(-lightDir, vNormal);
    float spec = pow(max(dot(reflectDir, vViewDir), 0.0), 24.0);

    // Fresnel — bright at grazing angles
    float fres = pow(1.0 - max(dot(vNormal, vViewDir), 0.0), 2.5);

    // Deep core color modulated by noise (gives volume feel)
    vec3 core = mix(uColorCore, uColorAccent, smoothstep(-0.4, 0.6, vNoise));

    // Apply diffuse shading: high ambient + soft lit (sphere reads as
    // a glowing planet, not a half-shadowed rock)
    core = core * (0.65 + 0.55 * diffuse);

    // Add fresnel rim in cyan-white
    vec3 rim = uColorRim * fres * 1.8;

    // Subtle chrome highlight — sweeps based on view direction + time
    float chromeAngle = vNormal.y * 0.5 + 0.5;
    float chromeSweep = smoothstep(0.6, 1.0,
      sin(chromeAngle * 5.0 + uTime * 0.4) * 0.5 + 0.5);
    vec3 chrome = vec3(0.7, 0.9, 1.0) * chromeSweep * 0.25;

    // Phong specular hotspot — bright white-cyan dot where light hits
    vec3 specular = vec3(1.0, 1.0, 1.1) * spec * 0.85;

    vec3 col = core + rim + chrome + specular;

    // Slight gamma lift
    col = pow(col, vec3(0.92));

    gl_FragColor = vec4(col, 1.0);
  }
`;

const HALO_FRAG = /* glsl */ `
  precision highp float;
  uniform vec3 uColor;
  varying vec3 vNormal;
  varying vec3 vViewDir;
  void main() {
    float fres = pow(1.0 - max(dot(vNormal, vViewDir), 0.0), 3.0);
    gl_FragColor = vec4(uColor * fres, fres * 0.7);
  }
`;

const HALO_VERT = /* glsl */ `
  varying vec3 vNormal;
  varying vec3 vViewDir;
  void main() {
    vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
    vNormal  = normalize(normalMatrix * normal);
    vViewDir = normalize(-mvPos.xyz);
    gl_Position = projectionMatrix * mvPos;
  }
`;

export async function mountHeroCore(
  canvas: HTMLCanvasElement
): Promise<HeroCoreHandle | null> {
  // Hard refuse cases — keep them cheap and explicit
  if (typeof window === 'undefined') return null;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return null;
  if (window.innerWidth < 768) return null;

  // Test WebGL availability before importing three
  const probe = document.createElement('canvas').getContext('webgl2')
              ?? document.createElement('canvas').getContext('webgl');
  if (!probe) return null;

  // Dynamic import — keeps three.js out of the critical bundle
  const THREE = await import('three');

  const scene: Scene = new THREE.Scene();
  const camera: PerspectiveCamera = new THREE.PerspectiveCamera(
    35,
    canvas.clientWidth / canvas.clientHeight,
    0.1,
    100
  );
  camera.position.set(0, 0, 5.2);

  const renderer: WebGLRenderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true,
    antialias: true,
    powerPreference: 'high-performance',
  });
  renderer.setClearColor(0x000000, 0);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(canvas.clientWidth, canvas.clientHeight, false);

  // Core mesh
  // Smooth sphere (widthSegments=64, heightSegments=48) — no visible
  // facets even at large display size. Icosahedron at subdivision 4
  // showed octagonal silhouette on narrow desktops.
  const geometry = new THREE.SphereGeometry(1.4, 64, 48);

  const material: ShaderMaterial = new THREE.ShaderMaterial({
    vertexShader: VERT,
    fragmentShader: FRAG,
    uniforms: {
      uTime:        { value: 0 },
      uAmp:         { value: 0.04 },
      uFreq:        { value: 1.4 },
      uMouse:       { value: new THREE.Vector2(0, 0) },
      uColorCore:   { value: new THREE.Color('#0a3d6a') },
      uColorRim:    { value: new THREE.Color('#7feaff') },
      uColorAccent: { value: new THREE.Color('#1ccaff') },
    },
  });

  const mesh: Mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  // Halo (outer expanded sphere, additive blended)
  const haloGeo = new THREE.SphereGeometry(1.85, 32, 24);
  const haloMat = new THREE.ShaderMaterial({
    vertexShader: HALO_VERT,
    fragmentShader: HALO_FRAG,
    uniforms: {
      uColor: { value: new THREE.Color('#1ccaff') },
    },
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
    side: THREE.BackSide,
  });
  const halo = new THREE.Mesh(haloGeo, haloMat);
  scene.add(halo);

  // Orbiting point light (informs scene depth even though we use unlit shader)
  // Kept for future expansion — minimal cost
  const ambient = new THREE.AmbientLight(0xffffff, 0.4);
  scene.add(ambient);

  // ============ STATE ============
  const clock: Clock = new THREE.Clock();
  const targetMouse = new THREE.Vector2(0, 0);
  const currentMouse = new THREE.Vector2(0, 0);
  let running = true;
  let visible = true;

  // ============ HANDLERS ============
  const onPointerMove = (e: PointerEvent) => {
    const rect = canvas.getBoundingClientRect();
    // Normalize -1..1 relative to canvas center
    targetMouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    targetMouse.y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
  };

  const onResize = () => {
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    if (w === 0 || h === 0) return;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
  };

  // IntersectionObserver — pause rendering when off-screen
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        visible = entry.isIntersecting;
      }
    },
    { rootMargin: '64px' }
  );
  io.observe(canvas);

  window.addEventListener('pointermove', onPointerMove, { passive: true });
  window.addEventListener('resize', onResize, { passive: true });
  // ResizeObserver also covers layout-driven size changes (no window resize)
  const ro = new ResizeObserver(onResize);
  ro.observe(canvas);

  // ============ RENDER LOOP ============
  const tick = () => {
    if (!running) return;
    if (visible) {
      const t = clock.getElapsedTime();

      // Smooth mouse follow (lerp)
      currentMouse.x += (targetMouse.x - currentMouse.x) * 0.06;
      currentMouse.y += (targetMouse.y - currentMouse.y) * 0.06;
      material.uniforms.uMouse.value.set(currentMouse.x, currentMouse.y);
      material.uniforms.uTime.value = t;

      // Subtle auto-rotation
      mesh.rotation.y = t * 0.18;
      mesh.rotation.x = Math.sin(t * 0.27) * 0.12;

      // Mouse-driven look-at (very subtle)
      mesh.rotation.y += currentMouse.x * 0.12;
      mesh.rotation.x += currentMouse.y * 0.08;

      halo.rotation.y = -t * 0.06;
      halo.rotation.x = Math.cos(t * 0.2) * 0.05;

      renderer.render(scene, camera);
    }
    requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);

  return {
    destroy() {
      running = false;
      io.disconnect();
      ro.disconnect();
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('resize', onResize);
      geometry.dispose();
      material.dispose();
      haloGeo.dispose();
      haloMat.dispose();
      renderer.dispose();
    },
  };
}
