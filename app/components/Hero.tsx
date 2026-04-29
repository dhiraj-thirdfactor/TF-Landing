"use client";
import Link from "next/link";
import HeroCard from "./HeroCard";
import ClientLogos from "./ClientLogos";
import { GeistPixelCircle } from "geist/font/pixel";

export default function Hero() {
  return (
    <section className="bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* ── Centered copy ─────────────────────────────── */}
        <div className="text-center pt-16 pb-10 flex flex-col items-center  md:gap-[16px] gap-[24px] lg:gap-[36px]">
          {/* Heading */}
          <h1 className="font-sans font-normal text-[32px] max-w-[330px] md:max-w-[700px] lg:max-w-[709px] leading-[1.1] md:text-[56px] tracking-[-2px] md:tracking-[-3px] text-[#00274A]  mx-auto lg:text-[64px]">
            Instant Identity Verification
            <br />
            For{" "}
            <span
              className={`${GeistPixelCircle.className} text-[32px] md:text-[56px] lg:text-[64px]`}
            >
              Regulated Markets
            </span>
          </h1>

          {/* Subtext */}
          <p className="font-normal text-body-l text-[16px] leading-[140%] md:text-[20px] text-[#272727] lg:max-w-[709px] font-geist-sans text-center px-4 sm:px-0">
            Full-stack platform for fast, secure, and compliant onboarding.
            Switch providers in a day. Deploy on-premise and maintain zero data
            retention.
          </p>
          <div className="flex flex-col gap-4">
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full px-6 sm:px-0 sm:w-auto">
              <Link
                href="/book-demo"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-[149px] h-[44px] px-6 text-[14px] font-medium text-white bg-[#007BE5] rounded-[100px] hover:bg-[#0069C2] transition-colors whitespace-nowrap shrink-0"
              >
                Book a Demo
              </Link>
              <Link
                href="#"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-[188px] h-[44px] px-6 text-[14px] font-medium text-[#222222] bg-transparent border border-[#E5E5E5] rounded-[100px] hover:bg-[#FAFAFA] transition-colors whitespace-nowrap shrink-0"
              >
                Experience Center
              </Link>
            </div>

            {/* Trust badges */}
            <p className="font-sans font-normal text-[12px] md:text-[14px] leading-[1.5] text-[#1A1A1A]/60 m-0">
              NRB Compliant • VAPT Certified • Sub-0.1ms 1:N Search
            </p>
          </div>
        </div>

        {/* Hero card */}
        <HeroCard />
      </div>

      {/* Client logos strip — full-width */}
      <ClientLogos />
    </section>
  );
}
