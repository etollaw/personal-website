"use client";

import { useEffect, useRef, useState } from "react";
import createGlobe from "cobe";

/**
 * Interactive 3D globe of places Eldad has studied and worked (cobe, WebGL).
 *
 * - Drag in any direction to spin; release with momentum
 * - Click a location chip to glide the globe to it
 * - Auto-rotates when idle (off for prefers-reduced-motion)
 */

interface LocationMarker {
  label: string;
  place: string;
  lat: number;
  lng: number;
}

const locations: LocationMarker[] = [
  { label: "Columbia University", place: "New York", lat: 40.8075, lng: -73.9626 },
  { label: "AArete", place: "Chicago", lat: 41.8781, lng: -87.6298 },
  { label: "TACC @ UT Austin", place: "Austin", lat: 30.2849, lng: -97.7341 },
  { label: "Randolph College", place: "Lynchburg", lat: 37.4138, lng: -79.1422 },
];

const ACCENT: [number, number, number] = [0, 0.898, 0.749]; // --accent (#00e5bf)
const HIGHLIGHT: [number, number, number] = [1, 0.8, 0.2];
const AUTO_SPEED = 0.0025; // radians per frame when idle
const THETA_MIN = -0.5;
const THETA_MAX = 0.9;
const TWO_PI = Math.PI * 2;

/** cobe angles that put a lat/lng at the center of the globe. */
function anglesFor(lat: number, lng: number) {
  return {
    phi: Math.PI - ((lng * Math.PI) / 180 - Math.PI / 2),
    theta: (lat * Math.PI) / 180,
  };
}

/** Smallest signed difference between two angles, in (-π, π]. */
function angleDiff(from: number, to: number) {
  const d = (((to - from) % TWO_PI) + TWO_PI) % TWO_PI;
  return d > Math.PI ? d - TWO_PI : d;
}

const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v));

function hasWebGL() {
  if (typeof window === "undefined") return true;
  try {
    const canvas = document.createElement("canvas");
    return !!(canvas.getContext("webgl") || canvas.getContext("experimental-webgl"));
  } catch {
    return false;
  }
}

export default function Globe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [webGLSupported] = useState(hasWebGL);
  const [selected, setSelected] = useState<number | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);
  const [dragging, setDragging] = useState(false);

  // Animation state lives in refs so the render loop never re-subscribes.
  const s = useRef({
    phi: anglesFor(40, -80).phi, // start facing the eastern US
    theta: 0.35,
    velPhi: 0,
    velTheta: 0,
    targetPhi: null as number | null,
    targetTheta: null as number | null,
    drag: null as { x: number; y: number; t: number; pointerId: number; vertical: boolean } | null,
    highlight: null as number | null,
    reducedMotion: false,
    width: 0,
  });

  // Keep the render loop's highlighted marker in sync (hover wins over selection).
  useEffect(() => {
    s.current.highlight = hovered ?? selected;
  }, [hovered, selected]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!webGLSupported || !canvas) return;
    const state = s.current;
    state.reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    state.width = canvas.offsetWidth;
    const ro = new ResizeObserver(() => {
      state.width = canvas.offsetWidth;
    });
    ro.observe(canvas);

    const markers = () =>
      locations.map((loc, i) => ({
        location: [loc.lat, loc.lng] as [number, number],
        size: state.highlight === i ? 0.12 : 0.06,
        color: state.highlight === i ? HIGHLIGHT : ACCENT,
      }));

    const globe = createGlobe(canvas, {
      devicePixelRatio: dpr,
      width: state.width * dpr,
      height: state.width * dpr,
      phi: state.phi,
      theta: state.theta,
      dark: 1,
      diffuse: 2.2,
      mapSamples: 20000,
      mapBrightness: 9,
      mapBaseBrightness: 0.05,
      baseColor: [0.3, 0.32, 0.42],
      markerColor: ACCENT,
      glowColor: [0.1, 0.14, 0.22],
      markers: markers(),
      onRender: (r) => {
        if (state.targetPhi !== null && state.targetTheta !== null) {
          // Glide to the selected location (ease-out)
          state.phi += (state.targetPhi - state.phi) * 0.1;
          state.theta += (state.targetTheta - state.theta) * 0.1;
          if (Math.abs(state.targetPhi - state.phi) < 0.001 && Math.abs(state.targetTheta - state.theta) < 0.001) {
            state.phi = state.targetPhi;
            state.theta = state.targetTheta;
            state.targetPhi = state.targetTheta = null;
          }
        } else if (!state.drag) {
          // Momentum after release, easing back to the idle spin
          const idle = state.reducedMotion || state.highlight !== null ? 0 : AUTO_SPEED;
          state.velPhi += (idle - state.velPhi) * 0.04;
          state.velTheta *= 0.9;
          state.phi += state.velPhi;
          state.theta = clamp(state.theta + state.velTheta, THETA_MIN, THETA_MAX);
        }

        r.phi = state.phi;
        r.theta = state.theta;
        r.width = state.width * dpr;
        r.height = state.width * dpr;
        r.markers = markers();
      },
    });

    canvas.style.opacity = "1";

    return () => {
      globe.destroy();
      ro.disconnect();
    };
  }, [webGLSupported]);

  // ── Drag handling (pointer capture keeps the drag alive off-canvas) ──

  const onPointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const state = s.current;
    e.currentTarget.setPointerCapture(e.pointerId);
    state.drag = {
      x: e.clientX,
      y: e.clientY,
      t: performance.now(),
      pointerId: e.pointerId,
      // On touch, vertical swipes scroll the page (touch-action: pan-y)
      vertical: e.pointerType !== "touch",
    };
    state.targetPhi = state.targetTheta = null;
    state.velPhi = state.velTheta = 0;
    setSelected(null);
    setDragging(true);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const state = s.current;
    const drag = state.drag;
    if (!drag || drag.pointerId !== e.pointerId) return;
    const now = performance.now();
    const dt = Math.max(now - drag.t, 1);
    // Scale by canvas size so one full drag across ≈ half a turn
    const k = Math.PI / Math.max(state.width, 1);
    const dPhi = (e.clientX - drag.x) * k;
    const dTheta = drag.vertical ? (e.clientY - drag.y) * k : 0;
    state.phi += dPhi;
    state.theta = clamp(state.theta + dTheta, THETA_MIN, THETA_MAX);
    // Velocity per ~16ms frame, smoothed, for release momentum
    state.velPhi = state.velPhi * 0.5 + (dPhi / dt) * 16 * 0.5;
    state.velTheta = state.velTheta * 0.5 + (dTheta / dt) * 16 * 0.5;
    drag.x = e.clientX;
    drag.y = e.clientY;
    drag.t = now;
  };

  const endDrag = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const state = s.current;
    if (!state.drag || state.drag.pointerId !== e.pointerId) return;
    // Ignore stale velocity if the pointer paused before release
    if (performance.now() - state.drag.t > 80) state.velPhi = state.velTheta = 0;
    state.velPhi = clamp(state.velPhi, -0.15, 0.15);
    state.velTheta = clamp(state.velTheta, -0.08, 0.08);
    state.drag = null;
    setDragging(false);
  };

  const focusLocation = (idx: number) => {
    const state = s.current;
    if (selected === idx) {
      setSelected(null);
      return;
    }
    const { phi, theta } = anglesFor(locations[idx].lat, locations[idx].lng);
    state.targetPhi = state.phi + angleDiff(state.phi, phi);
    state.targetTheta = clamp(theta, THETA_MIN, THETA_MAX);
    state.velPhi = state.velTheta = 0;
    setSelected(idx);
  };

  const heading = (
    <h3 className="text-sm font-medium tracking-widest uppercase text-accent mb-4">
      Where I&apos;ve Worked & Studied
    </h3>
  );

  if (!webGLSupported) {
    return (
      <div className="p-6 rounded-2xl border border-border bg-surface">
        {heading}
        <ul className="space-y-3">
          {locations.map((loc) => (
            <li key={loc.label} className="flex items-center gap-3 text-sm">
              <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
              <span className="text-foreground">{loc.label}</span>
              <span className="text-muted">{loc.place}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  const active = hovered ?? selected;

  return (
    <div className="relative">
      {heading}

      <div className="relative aspect-square max-w-[400px] mx-auto select-none">
        <canvas
          ref={canvasRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          onLostPointerCapture={endDrag}
          aria-label="Interactive globe of places I've worked and studied. Drag to rotate."
          role="img"
          className={`w-full h-full opacity-0 transition-opacity duration-700 ${
            dragging ? "cursor-grabbing" : "cursor-grab"
          }`}
          style={{ contain: "layout paint size", touchAction: "pan-y" }}
        />
        <p
          className={`pointer-events-none absolute bottom-1 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-widest text-muted transition-opacity duration-300 ${
            dragging || active !== null ? "opacity-0" : "opacity-70"
          }`}
        >
          Drag to spin
        </p>
      </div>

      {/* Location chips — click to glide the globe there */}
      <div className="mt-4 grid grid-cols-2 gap-2">
        {locations.map((loc, idx) => {
          const isActive = active === idx;
          return (
            <button
              key={loc.label}
              type="button"
              onClick={() => focusLocation(idx)}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
              onFocus={() => setHovered(idx)}
              onBlur={() => setHovered(null)}
              aria-pressed={selected === idx}
              className={`flex items-start gap-2 px-3 py-2 text-left rounded-xl border transition-colors duration-200 ${
                isActive
                  ? "border-accent/40 bg-accent-light"
                  : "border-border bg-surface hover:border-accent/20"
              }`}
            >
              <span
                className={`mt-1.5 w-1.5 h-1.5 rounded-full shrink-0 transition-colors ${
                  isActive ? "bg-[#ffcc33]" : "bg-accent"
                }`}
              />
              <span className="min-w-0">
                <span className={`block text-xs font-medium truncate ${isActive ? "text-accent" : "text-foreground"}`}>
                  {loc.label}
                </span>
                <span className="block text-[11px] text-muted">{loc.place}</span>
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
