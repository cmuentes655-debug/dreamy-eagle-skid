import { useEffect, useRef } from "react";

import { useDocumentVisible } from "@/hooks/use-document-visible";

interface Blob {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  color: string;
  alpha: number;
}

const COLOR_TEAL = "0,179,152";
const COLOR_DEEP = "0,122,104";
const COLOR_MINT = "95,227,204";
const COLOR_ABYSS = "0,51,44";

function createBlobs(width: number, height: number): Blob[] {
  const max = Math.max(width, height);
  return [
    { x: width * 0.24, y: height * 0.28, vx: 11, vy: 6, r: max * 0.55, color: COLOR_TEAL, alpha: 0.55 },
    { x: width * 0.78, y: height * 0.68, vx: -8, vy: 5, r: max * 0.5, color: COLOR_DEEP, alpha: 0.6 },
    { x: width * 0.55, y: height * 0.12, vx: 6, vy: -7, r: max * 0.42, color: COLOR_MINT, alpha: 0.26 },
    { x: width * 0.12, y: height * 0.86, vx: 5, vy: -4, r: max * 0.6, color: COLOR_ABYSS, alpha: 0.72 },
  ];
}

/**
 * Slowly drifting turquoise mesh-gradient painted on a canvas.
 * - Freezes after one frame under `prefers-reduced-motion`.
 * - Pauses via `requestAnimationFrame` when the tab is hidden.
 */
export function AuroraCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const blobsRef = useRef<Blob[] | null>(null);
  const visible = useDocumentVisible();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    let width = 0;
    let height = 0;
    let raf = 0;
    let last = 0;

    ctx.globalCompositeOperation = "lighter";

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      if (!blobsRef.current) {
        blobsRef.current = createBlobs(width, height);
      }
    };

    const paint = (dt: number) => {
      const blobs = blobsRef.current;
      if (!blobs) return;
      ctx.clearRect(0, 0, width, height);
      for (const b of blobs) {
        b.x += b.vx * dt;
        b.y += b.vy * dt;
        if (b.x < -b.r) b.x = width + b.r;
        if (b.x > width + b.r) b.x = -b.r;
        if (b.y < -b.r) b.y = height + b.r;
        if (b.y > height + b.r) b.y = -b.r;

        const g = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r);
        g.addColorStop(0, `rgba(${b.color},${b.alpha})`);
        g.addColorStop(0.55, `rgba(${b.color},${b.alpha * 0.4})`);
        g.addColorStop(1, `rgba(${b.color},0)`);
        ctx.fillStyle = g;
        ctx.fillRect(b.x - b.r, b.y - b.r, b.r * 2, b.r * 2);
      }
    };

    const frame = (t: number) => {
      const dt = last ? Math.min((t - last) / 1000, 0.05) : 0;
      last = t;
      paint(dt);
      raf = requestAnimationFrame(frame);
    };

    resize();
    window.addEventListener("resize", resize);

    if (reduce) {
      paint(0);
    } else if (visible) {
      raf = requestAnimationFrame(frame);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [visible]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="holo-ambient pointer-events-none fixed inset-0 -z-20 h-full w-full"
      // Blend the drifting mesh with the duotone photo below. The backdrop is
      // very dark, so `soft-light`/`overlay` would nearly extinguish the aurora
      // — `screen` keeps it vivid while letting the photo show through.
      // Single place to tune: opacity is the only other knob.
      style={{ mixBlendMode: "screen", opacity: 0.7 }}
    />
  );
}
