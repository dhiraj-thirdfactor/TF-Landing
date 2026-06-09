"use client";
import Link from "next/link";
import HeroCard from "./HeroCard";
import ClientLogos from "./ClientLogos";
import { GeistPixelCircle } from "geist/font/pixel";
import Button from "../ui/components/Button";
import BookADemoButton from "../ui/components/BookADemoButton";
import DotGridVideo from "./DotGridVideo";
import { HoverPixelText } from "./common/anim/ScrambleText";
import LayoutWrapper from "./common/wrapper/LayoutWrapper";

export default function Hero() {
  return (
    <section className=" overflow-hidden min-h-[700px] relative flex items-end">
      <LayoutWrapper>
        {/* ── Centered copy ─────────────────────────────── */}
        <div className="  flex lg:flex-row flex-col lg:items-end lg:justify-center gap-[40px] w-full ">
        <div className="  flex flex-col    md:gap-[16px] gap-[24px] lg:gap-[36px] ">
          {/* Heading */}
          <h1 className="font-sans font-normal text-[32px] max-w-[350px] md:max-w-[650px]  lg:max-w-[760px] leading-[1.1] md:text-[56px] tracking-[-2px] md:tracking-[-3px] text-[#00274A]  lg:text-[64px]">
            <HoverPixelText text="Instant Identity Verification " />
            <HoverPixelText text="For " />

            <HoverPixelText text="Regulated Markets" />
          </h1>

          {/* Subtext */}
          <p className="text-[#272727] max-w-[680px]  lg:px-4 sm:px-0 text-body-s md:text-body-l">
            Full-stack platform for fast, secure, and compliant onboarding.
            Switch providers in a day. Deploy on-premise and maintain zero data
            retention.
          </p>
        </div>
          <div className="flex  flex-col gap-4">
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row  gap-4 w-full lg:px-6 sm:px-0 sm:w-auto">
              <BookADemoButton
                variant="primary"
                text="Book a Demo"
                href="/book-demo"
              />
              <BookADemoButton
                variant="secondary"
                text="Experience Center"
                href="/experience"
              />
            </div>

            {/* Trust badges */}
            <p className="font-sans font-normal text-[12px] md:text-[14px] leading-[1.5] text-[#1A1A1A]/60 m-0">
              NRB Compliant • VAPT Certified • Sub-0.1ms 1:N Search
            </p>
          </div>
        </div>
      </LayoutWrapper>

   
    </section>
  );
}
