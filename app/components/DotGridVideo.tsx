"use client";

import { useEffect, useRef } from "react";

interface DotGridVideoProps {
  videoSource: string;
  enableMask?: boolean;
  loopAt?: number;    // frame count; 0 = native full loop
  baseFPS?: number;
  dotTheme?: "light" | "dark";
  className?: string;
}

const DOT_GAP    = 16;  // px between dot centers
const MAX_RADIUS = 6;   // px — fully bright pixel

export default function DotGridVideo({
  videoSource,
  enableMask = false,
  loopAt     = 0,
  baseFPS    = 30,
  dotTheme   = "light",
  className  = "",
}: DotGridVideoProps) {
  const wrapperRef    = useRef<HTMLDivElement>(null);
  const canvasRef     = useRef<HTMLCanvasElement>(null);
  const videoRef      = useRef<HTMLVideoElement | null>(null);
  const offscreenRef  = useRef<OffscreenCanvas | HTMLCanvasElement | null>(null);
  const rafRef        = useRef<number>(0);
  const lastTsRef     = useRef<number>(0);
  const frameCountRef = useRef<number>(0);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const canvas  = canvasRef.current;
    if (!wrapper || !canvas) return;

    const ctx = canvas.getContext("2d", { willReadFrequently: false, alpha: true });
    if (!ctx) return;

    // ── Offscreen canvas (for pixel reads) ───────────────────────────
    let offCtx: CanvasRenderingContext2D | OffscreenCanvasRenderingContext2D | null = null;

    if (typeof OffscreenCanvas !== "undefined") {
      const oc = new OffscreenCanvas(1, 1);
      offscreenRef.current = oc;
      offCtx = oc.getContext("2d", { willReadFrequently: true }) as OffscreenCanvasRenderingContext2D;
    } else {
      const oc = document.createElement("canvas");
      offscreenRef.current = oc;
      offCtx = oc.getContext("2d", { willReadFrequently: true });
    }
    if (!offCtx) return;

    // ── Hidden video element ─────────────────────────────────────────
    const video = document.createElement("video");
    videoRef.current = video;
    video.src         = videoSource;
    video.autoplay    = true;
    video.muted       = true;
    video.loop        = loopAt === 0;
    video.playsInline = true;
    video.style.cssText = "position:absolute;opacity:0;pointer-events:none;width:1px;height:1px;";
    wrapper.appendChild(video);
    video.play().catch(() => { /* autoplay may be blocked until user interaction */ });

    // ── Sync canvas/offscreen size to wrapper ────────────────────────
    const syncSize = () => {
      const w = wrapper.offsetWidth;
      const h = wrapper.offsetHeight;
      if (w === 0 || h === 0) return;

      canvas.width  = w;
      canvas.height = h;

      const oc = offscreenRef.current;
      if (!oc) return;
      if (oc instanceof OffscreenCanvas) {
        oc.width  = w;
        oc.height = h;
      } else {
        oc.width  = w;
        oc.height = h;
      }
    };
    syncSize();

    const ro = new ResizeObserver(syncSize);
    ro.observe(wrapper);

    // ── Precompute dot color ─────────────────────────────────────────
    const DOT_COLOR = dotTheme === "dark" ? "#ffffff" : "#d4b896";

    const INTERVAL = 1000 / baseFPS;

    // ── Draw loop ────────────────────────────────────────────────────
    const draw = (ts: number) => {
      rafRef.current = requestAnimationFrame(draw);

      // Throttle to baseFPS
      if (ts - lastTsRef.current < INTERVAL) return;
      lastTsRef.current = ts;

      // Need at least HAVE_CURRENT_DATA
      if (video.readyState < 2) return;

      const cw = canvas.width;
      const ch = canvas.height;
      if (cw === 0 || ch === 0) return;

      // loopAt: manual seek when frame count is reached
      if (loopAt > 0) {
        frameCountRef.current += 1;
        if (frameCountRef.current >= loopAt) {
          frameCountRef.current = 0;
          video.currentTime = 0;
          return;
        }
      }

      // ── Blit video → offscreen (cover-fit) ──────────────────────
      const vw = video.videoWidth  || cw;
      const vh = video.videoHeight || ch;
      const vr = vw / vh;
      const cr = cw / ch;

      let sx = 0, sy = 0, sw = vw, sh = vh;
      if (vr > cr) {
        sw = vh * cr;
        sx = (vw - sw) / 2;
      } else {
        sh = vw / cr;
        sy = (vh - sh) / 2;
      }

      (offCtx as CanvasRenderingContext2D).drawImage(video, sx, sy, sw, sh, 0, 0, cw, ch);

      // ── Render dot grid ──────────────────────────────────────────
      ctx.clearRect(0, 0, cw, ch);
      ctx.fillStyle = DOT_COLOR;

      const cols = Math.floor(cw / DOT_GAP) + 1;
      const rows = Math.floor(ch / DOT_GAP) + 1;

      // Read one horizontal strip at a time to minimise getImageData calls
      for (let row = 0; row < rows; row++) {
        const y = Math.round(row * DOT_GAP + DOT_GAP / 2);
        if (y >= ch) continue;

        let strip: ImageData | null = null;
        try {
          strip = (offCtx as CanvasRenderingContext2D).getImageData(0, y, cw, 1);
        } catch {
          continue;
        }
        const px = strip.data;

        for (let col = 0; col < cols; col++) {
          const x = Math.round(col * DOT_GAP + DOT_GAP / 2);
          if (x >= cw) continue;

          const i = x * 4;
          const r = px[i];
          const g = px[i + 1];
          const b = px[i + 2];
          const L = 0.299 * r + 0.587 * g + 0.114 * b;

          // Pure black → skip (background shows through)
          if (L < 10) continue;

          const radius = (L / 255) * MAX_RADIUS;

          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);
          ctx.fill();
        }
      }
    };

    rafRef.current = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(rafRef.current);
      ro.disconnect();
      video.pause();
      video.src = "";
      if (video.parentNode) video.parentNode.removeChild(video);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [videoSource, loopAt, baseFPS, dotTheme]);

  const maskStyle: React.CSSProperties = enableMask
    ? {
        maskImage:
          "radial-gradient(ellipse 75% 55% at 50% 50%, black 20%, transparent 100%)",
        WebkitMaskImage:
          "radial-gradient(ellipse 75% 55% at 50% 50%, black 20%, transparent 100%)",
      }
    : {};

  return (
    <div
      ref={wrapperRef}
      className={className}
      style={{ position: "relative", overflow: "hidden" }}
    >
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          display: "block",
          ...maskStyle,
        }}
      />
    </div>
  );
}
