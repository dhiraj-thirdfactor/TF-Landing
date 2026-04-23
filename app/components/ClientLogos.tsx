"use client";

// Logo wordmarks — displayed at 24px height, ~70px wide each
const clients = [
  "NMB",
  "NABIL",
  "vianet",
  "NIC ASIA",
  "PRABHU",
  "HBL",
  "LAXMI",
  "CITIZENS",
  "MEGA",
  "SUNRISE",
];

const all = [...clients, ...clients];

export default function ClientLogos() {
  return (
    <div
      className="w-full border-t border-neutral-200 overflow-hidden bg-white"
      style={{ height: "110px" }}
    >
      <div
        className="max-w-[1440px] mx-auto h-full flex items-center px-10"
        style={{ gap: "80px" }}
      >
        {/* "Trusted by teams at:" label — 151×21 */}
        <p
          style={{
            fontFamily: "var(--font-geist-sans, system-ui)",
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "21px",
            color: "rgba(26,26,26,0.5)",
            whiteSpace: "nowrap",
            flexShrink: 0,
            width: "151px",
          }}
        >
          Trusted by teams at:
        </p>

        {/* Logos — scrolling ticker strip, height 24px */}
        <div className="flex-1 overflow-hidden relative" style={{ height: "24px" }}>
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="flex items-center animate-logos-scroll" style={{ gap: "39.99px", height: "24px" }}>
            {all.map((name, i) => (
              <span
                key={i}
                style={{
                  fontFamily: "var(--font-geist-sans, system-ui)",
                  fontWeight: 600,
                  fontSize: "13px",
                  letterSpacing: "0.05em",
                  color: "#A3A3A3",
                  userSelect: "none",
                  flexShrink: 0,
                  lineHeight: "24px",
                }}
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes logos-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-logos-scroll {
          animation: logos-scroll 24s linear infinite;
          display: flex;
          width: max-content;
        }
        .animate-logos-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
