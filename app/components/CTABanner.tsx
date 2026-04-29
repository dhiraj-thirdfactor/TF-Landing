"use client";
import Image from "next/image";
import Link from "next/link";
import { GeistPixelCircle } from "geist/font/pixel";

export default function CTABanner() {
  return (
    <section className="bg-white flex justify-center py-16 md:py-20 px-6">
      {/* Card */}
      <div className="relative w-full max-w-[1160px] min-h-[400px] md:h-[454px]  overflow-hidden bg-[#2563EB] flex flex-col md:flex-row items-start md:items-center px-[60px] py-[72px]">
        
        {/* ── Left content block ── */}
        <div className="relative z-10 w-full max-w-[516px] flex flex-col  gap-[32px]">
          
          {/* Headline */}
          <div className="flex flex-col justify-start gap-[24px]">
            <h2 className="text-[48px] leading-[52.8px] max-w-[516px] text-[#EEEDED] tracking-[-1px]">
              Start Verifying <span className={`${GeistPixelCircle.className}`}>
                 with
                </span> <span className={`${GeistPixelCircle.className}`}>
                  Confidence
                </span>
            </h2>
            <p className="text-[#EEEDED] max-w-[432px] text-[20px] leading-[28px] font-normal">Join organizations across Nepal that trust Third Factor to secure and scale their digital interactions.</p>

          </div>

          {/* Book Demo button */}
          <Link
            href="/book-demo"
            className="inline-flex items-center justify-center gap-4 w-full sm:w-[153px] h-[60px] rounded-[100px] bg-white text-[#1e3a5f] text-[15px] font-medium font-sans shrink-0 transition-colors hover:bg-[#f0f4ff]  "
          >
            Book Demo
          </Link>
        </div>

        {/* ── Right: dot-grid pattern ── */}
        <div className="absolute right-0 top-0 w-full md:w-[58%] h-full pointer-events-none mix-blend-overlay opacity-30 md:opacity-100 md:mix-blend-normal">
          <Image
            src="/illustrations/background.png"
            alt=""
            fill
            style={{ objectFit: "cover", objectPosition: "left top" }}
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
