"use client";
import { ChevronRight } from "lucide-react";

export default function TopBar() {
  return (
    <div className="bg-[#007BE5] text-white text-sm py-2.5 px-4 flex items-center justify-center">
      <a
        href="#"
        className="flex items-center gap-1.5 font-medium hover:underline underline-offset-2 text-center"
        style={{ fontFamily: "var(--font-geist-sans, system-ui)" }}
      >
        Third Factor AI raises $25.4M and opens a new chapter
        <ChevronRight size={14} className="shrink-0" />
      </a>
    </div>
  );
}
