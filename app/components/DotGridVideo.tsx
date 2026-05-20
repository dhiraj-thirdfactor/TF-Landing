"use client";

import { useEffect, useRef } from "react";

interface DotGridVideoProps {
  videoSource: string;
  enableMask?: boolean;
  loopAt?: number;
  baseFPS?: number;
  className?: string;
}

// Base values (used for scaling)
const DOT_GAP = 10;
const MAX_RADIUS = 4;
const MOUSE_RADIUS = 100;
const BLOOM_STRENGTH = 2.5;

export default function DotGridVideo({
  videoSource,

  enableMask = false,
  loopAt = 0,
  baseFPS = 30,
  className = "",
}: DotGridVideoProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const offscreenRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number>(0);
  const lastTsRef = useRef<number>(0);

  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const canvas = canvasRef.current;
    if (!wrapper || !canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const oc = document.createElement("canvas");
    offscreenRef.current = oc;
    const offCtx = oc.getContext("2d", { willReadFrequently: true });
    if (!offCtx) return;

    const video = document.createElement("video");
    videoRef.current = video;
    video.src = videoSource;
    video.autoplay = true;
    video.muted = true;

    video.loop = loopAt === 0;
    video.playsInline = true;
    video.style.cssText =
      "position:absolute;opacity:0;pointer-events:none;width:1px;height:1px;";
    wrapper.appendChild(video);
    video.play().catch(() => {});

    // Resize sync
    const syncSize = () => {
      const w = wrapper.offsetWidth;
      const h = wrapper.offsetHeight;
      if (!w || !h) return;

      canvas.width = w;
      canvas.height = h;
      oc.width = w;
      oc.height = h;
    };

    syncSize();
    const ro = new ResizeObserver(syncSize);
    ro.observe(wrapper);

    const DOT_COLOR = "#007DED";
    const INTERVAL = 1000 / baseFPS;

    const draw = (ts: number) => {
      rafRef.current = requestAnimationFrame(draw);
      if (ts - lastTsRef.current < INTERVAL) return;
      lastTsRef.current = ts;

      if (video.readyState < 2) return;

      const cw = canvas.width;
      const ch = canvas.height;

      // 🔥 Responsive scaling
      const baseWidth = 1200;
      const scale = Math.min(Math.max(cw / baseWidth, 0.6), 1.8);

      const gap = DOT_GAP * scale;
      const maxRadius = MAX_RADIUS * scale;
      const mouseRadius = MOUSE_RADIUS * scale;

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      offCtx.drawImage(video, 0, 0, cw, ch);
      const pixelData = offCtx.getImageData(0, 0, cw, ch).data;

      ctx.clearRect(0, 0, cw, ch);
      ctx.fillStyle = DOT_COLOR;

      for (let y = 0; y < ch; y += gap) {
        for (let x = 0; x < cw; x += gap) {
          const px = Math.floor(x);
          const py = Math.floor(y);
          const i = (py * cw + px) * 4;

          const r = pixelData[i];
          const g = pixelData[i + 1];
          const b = pixelData[i + 2];
          const brightness = (r + g + b) / 3;

          if (brightness < 15) continue;

          let radius = (brightness / 255) * maxRadius;

          // Mouse bloom effect
          const dx = x - mx;
          const dy = y - my;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouseRadius) {
            const proximity = 1 - dist / mouseRadius;
            radius *= 1 + proximity * BLOOM_STRENGTH;
          }

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
      if (video.parentNode) video.parentNode.removeChild(video);
    };
  }, [videoSource, loopAt, baseFPS]);

  const maskStyle: React.CSSProperties = enableMask
    ? {
        maskImage:
          "radial-gradient(circle at 50% 50%, black 30%, transparent 90%)",
        WebkitMaskImage:
          "radial-gradient(circle at 50% 50%, black 30%, transparent 90%)",
      }
    : {};

  return (
    <div
      ref={wrapperRef}
      className={className}
      style={{
        position: "relative",
        overflow: "hidden",
      }}
    >
      <canvas
        ref={canvasRef}
        className="w-full h-auto max-w-[1440px]  mx-auto"
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          ...maskStyle,
        }}
      />
    </div>
  );
}
