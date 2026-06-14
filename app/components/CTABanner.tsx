"use client";
import Link from "next/link";
import { GeistPixelCircle } from "geist/font/pixel";

export default function CTABanner() {
  return (
    <section className="bg-white flex justify-center py-12 px-4 md:py-20 md:px-6">
      {/* Card */}
      <div className="relative w-full max-w-[1160px] min-h-[360px] md:h-[454px] overflow-hidden bg-[#2563EB] flex flex-col md:flex-row items-start md:items-center py-12 px-6 sm:px-10 md:py-[72px] md:px-[60px]">
        
        {/* ── Left content block ── */}
        <div className="relative z-10 w-full max-w-[516px] flex flex-col  gap-[32px] text-center md:text-start items-center md:items-start">
          
          {/* Headline */}
          <div className="flex flex-col justify-start gap-[16px] md:gap-[24px]">
            <h2 className="md:text-[48px] text-[28px] leading-[1.05] text-[#EEEDED] tracking-normal">
              Start Verifying <span className={`${GeistPixelCircle.className}`}>
                 with
                </span> <span className={`${GeistPixelCircle.className}`}>
                  Confidence
                </span>
            </h2>
            <p className="text-[#FDFCFBB2] md:max-w-[432px] text-[14px] md:text-[20px] md:leading-[28px] leading-[1.45] font-normal">Join organizations across Nepal that trust Third Factor to secure and scale their digital interactions.</p>

          </div>

          {/* Book Demo button */}
          <Link
            href="/book-demo"
            className="flex items-center justify-center gap-4 md:w-[106px] w-[114px] h-[38px] rounded-[100px] bg-white text-[#1e3a5f] text-[15px] font-medium font-sans shrink-0 transition-colors hover:bg-[#f0f4ff]  "
          >
            Book Demo
          </Link>
        </div>

        {/* ── Right: dot-grid pattern ── */}
      
      </div>
    </section>
  );
}
