// Liquid background — full-screen WebGL fragment shader with
// domain-warped noise driven by time + cursor + scroll. Vanilla WebGL
// (no three.js, no ogl): single quad, ~3 KB minified, idempotent mount.
//
// Refuses init on reduced-motion or no-WebGL. Pauses when off-screen.
// Multiple instances allowed (per-section backgrounds).

export interface LiquidBgHandle {
  destroy: () => void;
}

export interface LiquidBgConfig {
  /** Color stops (RGB 0..1) — order: deep, mid, accent */
  colors?: [
    [number, number, number],
    [number, number, number],
    [number, number, number],
  ];
  /** Noise frequency (lower = smoother, larger blobs) */
  freq?: number;
  /** Animation speed multiplier */
  speed?: number;
  /** Cursor displacement strength */
  cursor?: number;
  /** Output intensity (0..1) — keep dark for hero */
  intensity?: number;
}

const VERT = `
attribute vec2 a_pos;
varying vec2 v_uv;
void main() {
  v_uv = (a_pos + 1.0) * 0.5;
  gl_Position = vec4(a_pos, 0.0, 1.0);
}
`;

// Fragment: 4-octave domain-warped value noise. Cyan→amber gradient.
// Vec2 hash + noise are public-domain (IQ-style).
const FRAG = `
precision highp float;
varying vec2 v_uv;

uniform vec2  u_res;
uniform float u_time;
uniform vec2  u_mouse;
uniform float u_scroll;
uniform vec3  u_c0;
uniform vec3  u_c1;
uniform vec3  u_c2;
uniform float u_freq;
uniform float u_cursor;
uniform float u_intensity;

float hash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

float vnoise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
}

float fbm(vec2 p) {
  float v = 0.0;
  float amp = 0.5;
  for (int i = 0; i < 4; i++) {
    v += amp * vnoise(p);
    p *= 2.0;
    amp *= 0.5;
  }
  return v;
}

void main() {
  // Aspect-correct UV centered at viewport center
  vec2 uv = (gl_FragCoord.xy - 0.5 * u_res) / min(u_res.x, u_res.y);

  // Slow time drift
  float t = u_time * 0.06;

  // Domain warp — first noise field warps the next sample position
  vec2 q = vec2(
    fbm(uv * u_freq + vec2(0.0, t)),
    fbm(uv * u_freq + vec2(5.2, t * 0.8 + 1.3))
  );

  // Cursor lensing: displacement vector from mouse adds to warp center
  vec2 toMouse = uv - u_mouse;
  float mouseDist = length(toMouse);
  vec2 mouseWarp = -toMouse * exp(-mouseDist * 4.0) * u_cursor;

  vec2 r = vec2(
    fbm(uv * u_freq + 4.0 * q + vec2(1.7, 9.2) + mouseWarp + vec2(0.0, t)),
    fbm(uv * u_freq + 4.0 * q + vec2(8.3, 2.8) + mouseWarp + vec2(t * 0.6, 0.0))
  );

  float f = fbm(uv * u_freq + 3.0 * r + vec2(t * 0.3, -t * 0.4) + u_scroll * 0.2);

  // Color: deep base, mid blend, accent highlight
  vec3 col = mix(u_c0, u_c1, smoothstep(0.0, 0.7, f));
  col = mix(col, u_c2, smoothstep(0.55, 1.05, length(r)));

  // Vignette — dim corners
  float vig = smoothstep(1.2, 0.25, length(uv));
  col *= vig;

  // Mouse highlight (subtle warm halo around cursor)
  col += vec3(0.05, 0.12, 0.18) * exp(-mouseDist * 5.5);

  // Output intensity clamp
  col *= u_intensity;

  gl_FragColor = vec4(col, 1.0);
}
`;

const DEFAULTS: Required<LiquidBgConfig> = {
  colors: [
    [0.005, 0.010, 0.035], // deep ink
    [0.000, 0.180, 0.310], // mid teal-blue
    [0.345, 0.875, 1.000], // accent cyan
  ],
  freq: 1.6,
  speed: 1.0,
  cursor: 0.12,
  intensity: 0.95,
};

export function mountLiquidBg(
  canvas: HTMLCanvasElement,
  config: LiquidBgConfig = {}
): LiquidBgHandle | null {
  if (typeof window === 'undefined') return null;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return null;

  const gl = canvas.getContext('webgl', {
    alpha: false,
    antialias: false,
    depth: false,
    stencil: false,
    powerPreference: 'high-performance',
    premultipliedAlpha: false,
  });
  if (!gl) return null;

  const cfg: Required<LiquidBgConfig> = { ...DEFAULTS, ...config };

  // Compile shader helper
  const compile = (type: number, src: string): WebGLShader | null => {
    const s = gl.createShader(type);
    if (!s) return null;
    gl.shaderSource(s, src);
    gl.compileShader(s);
    if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
      gl.deleteShader(s);
      return null;
    }
    return s;
  };

  const vs = compile(gl.VERTEX_SHADER, VERT);
  const fs = compile(gl.FRAGMENT_SHADER, FRAG);
  if (!vs || !fs) return null;

  const program = gl.createProgram();
  if (!program) return null;
  gl.attachShader(program, vs);
  gl.attachShader(program, fs);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    gl.deleteProgram(program);
    return null;
  }
  gl.useProgram(program);

  // Full-screen quad
  const buf = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
    gl.STATIC_DRAW
  );
  const aPos = gl.getAttribLocation(program, 'a_pos');
  gl.enableVertexAttribArray(aPos);
  gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

  // Uniform locations
  const uRes      = gl.getUniformLocation(program, 'u_res');
  const uTime     = gl.getUniformLocation(program, 'u_time');
  const uMouse    = gl.getUniformLocation(program, 'u_mouse');
  const uScroll   = gl.getUniformLocation(program, 'u_scroll');
  const uC0       = gl.getUniformLocation(program, 'u_c0');
  const uC1       = gl.getUniformLocation(program, 'u_c1');
  const uC2       = gl.getUniformLocation(program, 'u_c2');
  const uFreq     = gl.getUniformLocation(program, 'u_freq');
  const uCursor   = gl.getUniformLocation(program, 'u_cursor');
  const uInten    = gl.getUniformLocation(program, 'u_intensity');

  gl.uniform3f(uC0, ...cfg.colors[0]);
  gl.uniform3f(uC1, ...cfg.colors[1]);
  gl.uniform3f(uC2, ...cfg.colors[2]);
  gl.uniform1f(uFreq,   cfg.freq);
  gl.uniform1f(uCursor, cfg.cursor);
  gl.uniform1f(uInten,  cfg.intensity);

  // Track size + mouse + scroll
  let dpr = Math.min(window.devicePixelRatio || 1, 1.5); // cap DPR for shader cost
  const resize = () => {
    const w = canvas.clientWidth;
    const h = canvas.clientHeight;
    if (w === 0 || h === 0) return;
    canvas.width  = Math.floor(w * dpr);
    canvas.height = Math.floor(h * dpr);
    gl.viewport(0, 0, canvas.width, canvas.height);
    gl.uniform2f(uRes, canvas.width, canvas.height);
  };
  resize();

  // Mouse normalized to NDC (-1..1)
  let mx = 0;
  let my = 0;
  let tmx = 0;
  let tmy = 0;
  const onPointer = (e: PointerEvent) => {
    const r = canvas.getBoundingClientRect();
    tmx = ((e.clientX - r.left) / r.width) * 2 - 1;
    tmy = -(((e.clientY - r.top) / r.height) * 2 - 1);
  };
  window.addEventListener('pointermove', onPointer, { passive: true });
  const ro = new ResizeObserver(resize);
  ro.observe(canvas);

  let scrollY = 0;
  const onScroll = () => { scrollY = window.scrollY * 0.0008; };
  window.addEventListener('scroll', onScroll, { passive: true });

  // Pause off-screen
  let visible = true;
  const io = new IntersectionObserver(
    (entries) => entries.forEach((e) => (visible = e.isIntersecting)),
    { rootMargin: '64px' }
  );
  io.observe(canvas);

  let running = true;
  const t0 = performance.now();
  const tick = () => {
    if (!running) return;
    if (visible) {
      const t = ((performance.now() - t0) / 1000) * cfg.speed;
      mx += (tmx - mx) * 0.05;
      my += (tmy - my) * 0.05;
      gl.uniform1f(uTime, t);
      gl.uniform2f(uMouse, mx, my);
      gl.uniform1f(uScroll, scrollY);
      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    }
    requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);

  return {
    destroy() {
      running = false;
      io.disconnect();
      ro.disconnect();
      window.removeEventListener('pointermove', onPointer);
      window.removeEventListener('scroll', onScroll);
      gl.deleteBuffer(buf);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
      gl.deleteProgram(program);
      const lose = gl.getExtension('WEBGL_lose_context');
      lose?.loseContext();
    },
  };
}
