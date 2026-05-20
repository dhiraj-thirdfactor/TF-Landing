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
    <section className=" overflow-hidden">
      <LayoutWrapper>
        {/* ── Centered copy ─────────────────────────────── */}
        <div className="text-center pt-16 pb-10 flex flex-col items-center  md:gap-[16px] gap-[24px] lg:gap-[36px]">
          {/* Heading */}
          <h1 className="font-sans font-normal text-[32px] max-w-[330px] md:max-w-[700px]  lg:max-w-[760px] leading-[1.1] md:text-[56px] tracking-[-2px] md:tracking-[-3px] text-[#00274A] mx-auto lg:text-[64px]">
            <HoverPixelText text="Instant Identity Verification " />
            <HoverPixelText text="For " />

            <HoverPixelText text="Regulated Markets" />
          </h1>

          {/* Subtext */}
          <p className="text-[#272727] lg:max-w-[709px]  text-center px-4 sm:px-0 text-body-s md:text-body-l">
            Full-stack platform for fast, secure, and compliant onboarding.
            Switch providers in a day. Deploy on-premise and maintain zero data
            retention.
          </p>
          <div className="flex flex-col gap-4">
            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full px-6 sm:px-0 sm:w-auto">
              <BookADemoButton
                variant="primary"
                text="Book a Demo"
                href="/demo"
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

      {/* Hero card */}
      <div className=" w-full  flex flex-col   -mt-[20vw]">
        <DotGridVideo
          videoSource="/illustrations/video.mp4"
          enableMask
          loopAt={0}
          baseFPS={60}
          className=" relative w-full h-[80vh]"
        />

        {/* Client logos strip — full-width */}
        <ClientLogos />
      </div>
    </section>
  );
}
