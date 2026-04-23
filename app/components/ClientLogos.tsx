"use client";

import Image from "next/image";

// Logo image objects
const logos = [
  { src: "/illustrations/vianetlogo.png", alt: "Vianet", width: 90, height: 30 },
  { src: "/illustrations/khalti.png", alt: "Khalti", width: 90, height: 30 },
  { src: "/illustrations/gon.png", alt: "Government of Nepal", width: 40, height: 40 },
  { src: "/illustrations/nmb.png", alt: "NMB Bank", width: 80, height: 30 },
  { src: "/illustrations/dishhome.png", alt: "DishHome", width: 100, height: 30 },
];

const all = [...logos, ...logos, ...logos, ...logos];

export default function ClientLogos() {
  return (
    <div
      className="w-full border-t border-neutral-200 overflow-hidden bg-white"
      style={{ height: "110px" }}
    >
      <div
        className="max-w-[1440px] mx-auto h-full flex flex-col md:flex-row items-center justify-center md:justify-start px-6 md:px-10 gap-4 md:gap-[80px]"
      >
        {/* "Trusted by teams at:" label */}
        <p className="hidden md:block shrink-0 w-auto font-sans font-normal text-[14px] leading-[21px] text-[#1a1a1a]/50 whitespace-nowrap m-0">
          Trusted by teams at:
        </p>

        {/* Logos — scrolling ticker strip */}
        <div className="w-full flex-1 overflow-hidden relative" style={{ height: "50px", display: "flex", alignItems: "center" }}>
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="flex items-center animate-logos-scroll" style={{ gap: "80px", height: "50px" }}>
            {all.map((logo, i) => (
              <div key={i} style={{ flexShrink: 0, opacity: 0.6, filter: "grayscale(100%)", transition: "all 200ms cursor-pointer", display: "flex", alignItems: "center" }} onMouseEnter={(e) => { e.currentTarget.style.opacity = "1"; e.currentTarget.style.filter = "grayscale(0%)" }} onMouseLeave={(e) => { e.currentTarget.style.opacity = "0.6"; e.currentTarget.style.filter = "grayscale(100%)" }}>
                <Image src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} style={{ objectFit: "contain" }} />
              </div>
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
