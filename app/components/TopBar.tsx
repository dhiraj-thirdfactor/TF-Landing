"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function TopBar() {
  return (
    <div className="relative flex min-h-9 items-center justify-center overflow-hidden bg-[#007BE5] px-3 py-2 text-white md:min-h-10 md:px-4 md:py-2.5">
      <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-[38%] overflow-hidden sm:block">
        <Image
          src="/illustrations/textures.png"
          alt=""
          fill
          sizes="38vw"
          priority
          className="object-cover opacity-35"
        />
      </div>
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-[38%] overflow-hidden sm:block">
        <Image
          src="/illustrations/textures.png"
          alt=""
          fill
          sizes="38vw"
          priority
          className="object-cover opacity-35 [transform:scaleX(-1)]"
        />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[#007BE5]/85" />

      <Link
        href="/blogs"
        className="relative z-10 flex min-w-0 items-center gap-2 text-center font-medium hover:underline underline-offset-2"
        style={{ fontFamily: "var(--font-geist-sans, system-ui)" }}
      >
        <span className="rounded-sm bg-white/15 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.08em] sm:text-[10px]">
          News
        </span>
        <span className="text-[12px] sm:hidden">ThirdFactor raises $25.4M</span>
        <span className="hidden text-[13px] sm:inline md:text-[14px]">
          Third Factor AI raises $25.4M and opens a new chapter
        </span>
        <ChevronRight size={13} className="shrink-0" />
      </Link>
    </div>
  );
}
