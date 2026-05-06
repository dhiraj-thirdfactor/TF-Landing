"use client";

import Image from "next/image";
import LayoutWrapper from "./common/wrapper/LayoutWrapper";

const logos = [
  { src: "/illustrations/vianetlogo.png", alt: "Vianet" },
  { src: "/illustrations/khalti.png", alt: "Khalti" },
  { src: "/illustrations/gon.png", alt: "Government of Nepal" },
  { src: "/illustrations/nmb.png", alt: "NMB Bank" },
  { src: "/illustrations/dishhome.png", alt: "DishHome" },
];

const all = [...logos, ...logos, ...logos];

export default function ClientLogos() {
  return (
    <div className="w-full overflow-hidden bg-white ">
      <LayoutWrapper>
      <div className=" flex flex-col lg:flex-row items-center gap-4 md:gap-12 ">
        
        {/* Label */}
        <p className=" shrink-0 text-sm text-[#1a1a1a]/50 whitespace-nowrap">
          Trusted by teams at:
        </p>

        {/* Marquee */}
        <div className="w-full overflow-hidden relative flex items-center">
          
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-6 md:w-12 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-6 md:w-12 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="flex items-center animate-logos-scroll gap-6 md:gap-16">
            {all.map((logo, i) => (
              <div
                key={i}
                className="flex-shrink-0 flex items-center opacity-60 grayscale transition-all duration-200 hover:opacity-100 hover:grayscale-0 cursor-pointer"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={120}
                  height={40}
                  className="h-6 md:h-8 lg:h-10 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      </LayoutWrapper>

      <style jsx>{`
        @keyframes logos-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-logos-scroll {
          animation: logos-scroll 18s linear infinite;
          width: max-content;
        }

        @media (max-width: 768px) {
          .animate-logos-scroll {
            animation: logos-scroll 12s linear infinite;
          }
        }

        .animate-logos-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}