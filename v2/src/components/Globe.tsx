"use client";

import { useEffect, useRef, useCallback, useState } from "react";
import createGlobe from "cobe";

/**
 * Interactive 3D globe showing locations where Eldad has studied and worked.
 * Built with cobe (5KB WebGL globe — same library Vercel uses).
 *
 * Features:
 * - Auto-rotation that pauses on pointer interaction
 * - Click a location label to rotate the globe to face it
 * - Brighter globe for dark backgrounds
 * - Graceful degradation if WebGL unavailable
 * - Responsive canvas sizing
 */

interface LocationMarker {
  label: string;
  lat: number;
  lng: number;
}

const locations: LocationMarker[] = [
  { label: "Columbia University", lat: 40.8075, lng: -73.9626 },
  { label: "TACC @ UT Austin", lat: 30.2672, lng: -97.7431 },
  { label: "Randolph College", lat: 37.4138, lng: -79.1422 },
];

/**
 * Convert latitude/longitude to cobe's phi/theta (radians) so that the location is at the front (phi=0, theta=0).
 * cobe expects phi=0 to be the front (center), so phi = -lng in radians, theta = lat in radians.
 * To bring a location to the front, set phi = -lng * (π/180), theta = lat * (π/180).
 */
function latLngToPhi(lat: number, lng: number) {
  const phi = -lng * (Math.PI / 180);
  const theta = lat * (Math.PI / 180);
  return { phi, theta };
}

export default function Globe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  const phiRef = useRef(0);
  const thetaRef = useRef(0.3);
  const targetPhiRef = useRef<number | null>(null);
  const targetThetaRef = useRef<number | null>(null);
  const widthRef = useRef(0);
  const [focusedIdx, setFocusedIdx] = useState<number | null>(null);
  const focusedIdxRef = useRef<number | null>(null);

  // Keep ref in sync with state for the render loop
  useEffect(() => {
    focusedIdxRef.current = focusedIdx;
  }, [focusedIdx]);

  // Detect WebGL support synchronously (lazy state initializer, no effect needed)
  const [webGLSupported] = useState(() => {
    if (typeof window === "undefined") return true; // SSR — assume supported
    try {
      const canvas = document.createElement("canvas");
      const gl =
        canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
      return !!gl;
    } catch {
      return false;
    }
  });

  const onResize = useCallback(() => {
    if (canvasRef.current) {
      widthRef.current = canvasRef.current.offsetWidth;
    }
  }, []);

  /** Smoothly rotate globe to face a location */
  const focusLocation = useCallback((idx: number) => {
    const loc = locations[idx];
    const { phi, theta } = latLngToPhi(loc.lat, loc.lng);
    // Normalize target phi relative to current phi to find shortest rotation
    const currentPhi = phiRef.current + pointerInteractionMovement.current;
    const diff = phi - (currentPhi % (2 * Math.PI));
    const normalizedDiff =
      ((diff + Math.PI) % (2 * Math.PI)) - Math.PI;
    targetPhiRef.current = currentPhi + normalizedDiff;
    targetThetaRef.current = theta;
    // Reset interaction offset since we're taking over phi
    pointerInteractionMovement.current = 0;
    setFocusedIdx(idx);
  }, []);

  useEffect(() => {
    if (!webGLSupported || !canvasRef.current) return;

    window.addEventListener("resize", onResize);
    onResize();

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: widthRef.current * 2,
      height: widthRef.current * 2,
      phi: 0,
      theta: 0.3,
      dark: 1,
      diffuse: 1.8,
      mapSamples: 16000,
      mapBrightness: 8,
      baseColor: [0.15, 0.15, 0.22],
      markerColor: [0, 0.898, 0.749], // matches --accent (#00e5bf)
      glowColor: [0.08, 0.12, 0.2],
      markers: locations.map((loc, i) => ({
        location: [loc.lat, loc.lng], // cobe expects [lat, lng]
        color: focusedIdxRef.current === i ? [1, 0.8, 0.2] : [0, 0.898, 0.749], // highlight color
        size: focusedIdxRef.current === i ? 0.14 : 0.07,
      })),
      onRender: (state) => {
        // If animating to a target location
        if (targetPhiRef.current !== null) {
          const dphi = targetPhiRef.current - phiRef.current;
          if (Math.abs(dphi) < 0.01) {
            phiRef.current = targetPhiRef.current;
            targetPhiRef.current = null;
          } else {
            phiRef.current += dphi * 0.08;
          }
        } else if (!pointerInteracting.current) {
          // Auto-rotate unless user is interacting
          phiRef.current += 0.003;
        }

        if (targetThetaRef.current !== null) {
          const dtheta = targetThetaRef.current - thetaRef.current;
          if (Math.abs(dtheta) < 0.01) {
            thetaRef.current = targetThetaRef.current;
            targetThetaRef.current = null;
          } else {
            thetaRef.current += dtheta * 0.08;
          }
        }

        state.phi = phiRef.current + pointerInteractionMovement.current;
        state.theta = thetaRef.current;
        state.width = widthRef.current * 2;
        state.height = widthRef.current * 2;

        // Update marker sizes — focused marker pulses larger
        state.markers = locations.map((loc, i) => ({
          location: [loc.lat, loc.lng],
          color: focusedIdxRef.current === i ? [1, 0.8, 0.2] : [0, 0.898, 0.749],
          size: focusedIdxRef.current === i ? 0.14 : 0.07,
        }));
      },
    });

    // Fade in the canvas
    if (canvasRef.current) {
      canvasRef.current.style.opacity = "0";
      requestAnimationFrame(() => {
        if (canvasRef.current) {
          canvasRef.current.style.opacity = "1";
        }
      });
    }

    return () => {
      globe.destroy();
      window.removeEventListener("resize", onResize);
    };
  }, [webGLSupported, onResize]);

  // Pointer handlers for drag-to-rotate
  const onPointerDown = useCallback(
    (e: React.PointerEvent<HTMLCanvasElement>) => {
      pointerInteracting.current = e.clientX - pointerInteractionMovement.current;
      targetPhiRef.current = null; // cancel any auto-rotation-to-target
      targetThetaRef.current = null;
      if (canvasRef.current) canvasRef.current.style.cursor = "grabbing";
    },
    []
  );

  const onPointerUp = useCallback(() => {
    pointerInteracting.current = null;
    if (canvasRef.current) canvasRef.current.style.cursor = "grab";
  }, []);

  const onPointerOut = useCallback(() => {
    pointerInteracting.current = null;
    if (canvasRef.current) canvasRef.current.style.cursor = "grab";
  }, []);

  const onMouseMove = useCallback(
    (e: React.PointerEvent<HTMLCanvasElement>) => {
      if (pointerInteracting.current !== null) {
        const delta = e.clientX - pointerInteracting.current;
        pointerInteractionMovement.current = delta / 100;
      }
    },
    []
  );

  const onTouchMove = useCallback(
    (e: React.TouchEvent<HTMLCanvasElement>) => {
      if (pointerInteracting.current !== null && e.touches[0]) {
        const delta = e.touches[0].clientX - pointerInteracting.current;
        pointerInteractionMovement.current = delta / 100;
      }
    },
    []
  );

  // Fallback for no WebGL
  if (!webGLSupported) {
    return (
      <div className="p-6 rounded-2xl border border-border bg-surface">
        <h3 className="text-sm font-medium tracking-widest uppercase text-accent mb-4">
          Where I&apos;ve Worked & Studied
        </h3>
        <div className="space-y-3">
          {locations.map((loc) => (
            <div
              key={loc.label}
              className="flex items-center gap-3 text-sm"
            >
              <span className="w-2 h-2 rounded-full bg-accent shrink-0" />
              <span className="text-foreground">{loc.label}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <h3 className="text-sm font-medium tracking-widest uppercase text-accent mb-4">
        Where I&apos;ve Worked & Studied
      </h3>

      <div className="relative aspect-square max-w-[400px] mx-auto">
        <canvas
          ref={canvasRef}
          onPointerDown={onPointerDown}
          onPointerUp={onPointerUp}
          onPointerOut={onPointerOut}
          onPointerMove={onMouseMove}
          onTouchMove={onTouchMove}
          className="w-full h-full cursor-grab transition-opacity duration-700"
          style={{
            contain: "layout paint size",
            maxWidth: "100%",
          }}
        />
      </div>

      {/* Location labels — click to rotate globe */}
      <div className="mt-4 flex flex-wrap justify-center gap-3">
        {locations.map((loc, idx) => (
          <button
            key={loc.label}
            onClick={() => focusLocation(idx)}
            onMouseEnter={() => setFocusedIdx(idx)}
            onMouseLeave={() => setFocusedIdx(null)}
            className={`flex items-center gap-2 px-3 py-1.5 text-xs rounded-full border transition-all duration-200 ${
              focusedIdx === idx
                ? "border-accent/40 bg-accent-light text-accent scale-105"
                : "border-border bg-surface text-muted hover:text-foreground"
            }`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full shrink-0 transition-all duration-200 ${
                focusedIdx === idx ? "bg-accent w-2 h-2" : "bg-accent"
              }`}
            />
            {loc.label}
          </button>
        ))}
      </div>
    </div>
  );
}
