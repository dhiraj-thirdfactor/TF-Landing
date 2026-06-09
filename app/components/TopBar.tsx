"use client";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import PromoBanner from "./PromoBanner";
import UnicornScene from "unicornstudio-react";


export default function TopBar() {
  return (
    <div 
      className="relative text-white text-sm py-2.5 px-4 flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: "#007BE5" }}
    >
      {/* Background Texture with Fade Mask */}

     <div className=" absolute inset-0">
       <UnicornScene
      projectId="bF7EQH0irJwl3ENDEVhw"
      
      sdkUrl="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.2.1/dist/unicornStudio.umd.js"
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
