"use client";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

export default function TopBar() {
  return (
    <div 
      className="relative text-white text-sm py-2.5 px-4 flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#007BE5" }}
    >
      {/* Background Texture with Fade Mask */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          maskImage: "linear-gradient(to right, black 0%, black calc(50% - 350px), transparent calc(50% - 220px), transparent calc(50% + 220px), black calc(50% + 350px), black 100%)",
          WebkitMaskImage: "linear-gradient(to right, black 0%, black calc(50% - 350px), transparent calc(50% - 220px), transparent calc(50% + 220px), black calc(50% + 350px), black 100%)"
        }}
      >
        <Image
          src="/illustrations/textures.png"
          alt=""
          fill
          style={{ objectFit: "cover", objectPosition: "center", opacity: 0.8 }}
          priority
          aria-hidden="true"
        />
      </div>

      {/* Content */}
      <a
        href="#"
        className="relative z-10 flex items-center gap-1.5 font-medium hover:underline underline-offset-2 text-center"
        style={{ fontFamily: "var(--font-geist-sans, system-ui)" }}
      >
        Third Factor AI raises $25.4M and opens a new chapter
        <ChevronRight size={14} className="shrink-0" />
      </a>
    </div>
  );
}
