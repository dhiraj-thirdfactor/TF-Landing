"use client";
import { GeistPixelCircle } from "geist/font/pixel";

// Halftone dot face — larger, denser, matches reference
function Halftoneface() {
  const dots: { cx: number; cy: number; r: number }[] = [];

  const W = 560;
  const H = 580;
  const cx = W / 2;
  const cy = H / 2 - 20;
  const fw = 280;
  const fh = 340;
  const spacing = 13;

  for (let row = 0; row * spacing < H; row++) {
    for (let col = 0; col * spacing < W; col++) {
      const x = col * spacing + (row % 2 === 0 ? 0 : spacing / 2) + 10;
      const y = row * spacing + 10;

      const nx = (x - cx) / (fw / 2);
      const ny = (y - cy) / (fh / 2);
      const dist = nx * nx + ny * ny;

      // Only render within face ellipse (a bit wider for hair)
      if (ny < -1.05 && dist > 1.3) continue;
      if (dist > 1.15 && ny > -0.9) continue;
      if (dist > 1.4) continue;

      let density = 0;

      // ── Hair ──────────────────────────────────────────
      if (ny < -0.72) {
        density = 0.92;
      }
      // ── Hairline / forehead top ──
      else if (ny < -0.45) {
        density = 0.18 + 0.12 * Math.abs(nx);
      }
      // ── Eyebrows ──────────────────────────────────────
      else if (ny > -0.46 && ny < -0.32 && Math.abs(Math.abs(nx) - 0.38) < 0.22) {
        density = 0.88;
      }
      // ── Eyes (dark orbs) ──────────────────────────────
      else if (ny > -0.32 && ny < -0.08 && Math.abs(Math.abs(nx) - 0.38) < 0.20) {
        const eyeDist = (Math.abs(nx) - 0.38) ** 2 + ((ny + 0.20) / 0.12) ** 2;
        density = eyeDist < 1 ? 0.95 : 0.55;
      }
      // ── Nose bridge ───────────────────────────────────
      else if (ny > -0.08 && ny < 0.28 && Math.abs(nx) < 0.10) {
        density = 0.35 + 0.15 * (1 - Math.abs(nx) / 0.10);
      }
      // ── Nose tip ──────────────────────────────────────
      else if (ny > 0.18 && ny < 0.44 && Math.abs(nx) < 0.30) {
        const noseDist = (nx / 0.28) ** 2 + ((ny - 0.30) / 0.14) ** 2;
        density = noseDist < 1 ? 0.72 : 0.3;
      }
      // ── Nostrils ──────────────────────────────────────
      else if (ny > 0.32 && ny < 0.52 && Math.abs(Math.abs(nx) - 0.22) < 0.10) {
        density = 0.78;
      }
      // ── Upper lip / philtrum ──────────────────────────
      else if (ny > 0.45 && ny < 0.60 && Math.abs(nx) < 0.32) {
        density = 0.62;
      }
      // ── Mouth / lips ──────────────────────────────────
      else if (ny > 0.56 && ny < 0.78 && Math.abs(nx) < 0.42) {
        const lipDist = (nx / 0.40) ** 2 + ((ny - 0.66) / 0.11) ** 2;
        density = lipDist < 1 ? 0.85 : 0.42;
      }
      // ── Chin ──────────────────────────────────────────
      else if (ny > 0.74 && ny < 1.05) {
        density = 0.28 - 0.10 * ((ny - 0.74) / 0.30);
        density += 0.10 * (1 - Math.abs(nx) / 0.6);
      }
      // ── Cheeks & jaw shadow ───────────────────────────
      else if (Math.abs(nx) > 0.62 && ny > -0.20 && ny < 0.65) {
        density = 0.30 + 0.15 * (1 - (Math.abs(nx) - 0.62) / 0.38);
      }
      // ── General skin fill ─────────────────────────────
      else {
        density = 0.10 + 0.06 * dist;
      }

      density = Math.min(1, Math.max(0, density));

      // Deterministic pseudo-random gate
      const pseudo = ((Math.floor(x) * 17 + Math.floor(y) * 31) % 97) / 97;
      if (pseudo > density) continue;

      // Dot radius: larger for denser areas
      const r = 2.2 + density * 2.8;
      dots.push({ cx: x, cy: y, r });
    }
  }

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      width={W}
      height={H}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className="mx-auto block"
      style={{ maxWidth: "100%", maxHeight: "480px" }}
    >
      {dots.map((d, i) => (
        <circle key={i} cx={d.cx} cy={d.cy} r={d.r} fill="#111111" />
      ))}
    </svg>
  );
}

export default function HeroCard() {
  return (
    <div
      className="relative w-full rounded-2xl overflow-hidden"
      style={{ background: "#C77DFF", minHeight: "480px" }}
    >
      {/* Top-left text */}
      <div
        className={`${GeistPixelCircle.className} absolute top-9 left-8 sm:top-11 sm:left-12 text-white leading-none z-10`}
        style={{
          fontSize: "clamp(32px, 5.5vw, 72px)",
          fontWeight: 400,
        }}
      >
        What if identity
      </div>

      {/* Bottom-right text */}
      <div
        className={`${GeistPixelCircle.className} absolute bottom-9 right-8 sm:bottom-11 sm:right-12 text-white leading-none text-right z-10`}
        style={{
          fontSize: "clamp(32px, 5.5vw, 72px)",
          fontWeight: 400,
        }}
      >
        meant more?
      </div>

      {/* Face centered */}
      <div
        className="flex items-center justify-center w-full"
        style={{ minHeight: "480px", paddingTop: "20px" }}
      >
        <HalftoneF />
      </div>
    </div>
  );
}

// Alias so the component name doesn't clash with function declarations
const HalftoneF = Halftoneface;
