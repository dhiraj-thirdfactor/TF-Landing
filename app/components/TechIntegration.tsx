
"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Lottie from "lottie-react";

import anim1 from "@/public/microInteraction/anim1.json";
import anim2 from "@/public/microInteraction/anim2.json";
import anim3 from "@/public/microInteraction/anim3.json";
/* ── Tab icon SVGs ─────────────────────────────────────────────── */

const TabIcons: Record<string, React.ReactNode> = {
  selfie:<Lottie
      animationData={anim1}
      loop
      className="w-5 h-5"
    />,

  gesture: <Lottie
      animationData={anim2}
      loop
      className="w-5 h-5"
    />,

  upload:<Lottie
      animationData={anim3}
      loop
      className="w-5 h-5"
    />,

  video: <Lottie
      animationData={anim1}
      loop
      className="w-5 h-5"
    />,
};

const tabs = [
  {
    id: "selfie",
    iconKey: "selfie",
    label: "Selfie Capture",
    heading: "Passive AI confirms the user is physically present.",
    subtext:
      "Works in seconds, requires no extra actions, and prevents automated bots.",
    img: "/techIntegration-video/1.mp4",
  },
  {
    id: "gesture",
    iconKey: "gesture",
    label: "Active Gesture",
    heading:
      "Challenge-response liveness prevents any replay or injection attack.",
    subtext:
      "Random gesture prompts ensure the user is live and in-frame in real time.",
    img: "/techIntegration-video/Comp 1.mp4",
  },
  {
    id: "upload",
    iconKey: "upload",
    label: "Upload Document",
    heading:
      "OCR reads and validates any government-issued ID in real time.",
    subtext:
      "Supports 200+ document types. MRZ, barcode, and NFC chip extraction — all in one pass.",
    img: "/techIntegration-video/Comp 2.mp4",
  },
  {
    id: "video",  
    iconKey: "video",
    label: "Video KYC",
    heading:
      "Agent-assisted video verification for high-value or complex onboarding.",
    subtext:
      "Encrypted session recording, consent capture, and audit-ready transcripts built in.",
    img: "/techIntegration-video/Comp 2.mp4",
  },
];

const AUTO_CYCLE_TIME = 5000;

export default function TechIntegration() {
  const [active, setActive] = useState("selfie");
  const [progress, setProgress] = useState(0);

  const tab = tabs.find((t) => t.id === active)!;

  const activeIndex = tabs.findIndex((t) => t.id === active);

  // ✅ FIXED TYPES
  const timerRef = useRef<number | null>(null);
  const progressRef = useRef<number | null>(null);

  const handleTabClick = (id: string) => {
    setActive(id);
    setProgress(0);
  };

  useEffect(() => {
    setProgress(0);

    const startTime = Date.now();

    progressRef.current = window.setInterval(() => {
      const elapsed = Date.now() - startTime;

      const percentage = Math.min(
        (elapsed / AUTO_CYCLE_TIME) * 100,
        100
      );

      setProgress(percentage);
    }, 30);

    timerRef.current = window.setTimeout(() => {
      const nextIndex = (activeIndex + 1) % tabs.length;

      setActive(tabs[nextIndex].id);
    }, AUTO_CYCLE_TIME);

    return () => {
      if (timerRef.current !== null) {
        window.clearTimeout(timerRef.current);
      }

      if (progressRef.current !== null) {
        window.clearInterval(progressRef.current);
      }
    };
  }, [active, activeIndex]);

  return (
    <section className="bg-white py-16 md:py-20 border-t border-neutral-200 overflow-hidden md:block hidden">
      <div className="max-w-[1440px] mx-auto lg:px-[140px] md:px-[34px] flex flex-col lg:gap-10 gap-6">

        {/* Header */}
        <div>
          <h2 className="font-sans font-normal md:text-[36px] lg:text-[48px] leading-[1.15] tracking-[-0.025em] text-[#000000] mb-3">
            Technical Integration Made Simple
          </h2>

          <p className="font-normal text-[16px] leading-[1.5] text-[#000000] m-0">
            Flexible APIs, SDKs, and fast implementation
          </p>
        </div>

        {/* Tabs */}
        <div className="flex w-full gap-2 lg:gap-3 overflow-x-auto scrollbar-hidden pb-4 lg:pb-0">
          {tabs.map((t) => {
            const isCurrent = active === t.id;

            return (
              <button
                key={t.id}
                onClick={() => handleTabClick(t.id)}
                className="flex-shrink-0 lg:flex-1 h-[48px] px-6 lg:px-4 flex items-center justify-start gap-2.5 border text-[14px] font-sans transition-all duration-150 relative overflow-hidden"
                style={{
                  borderColor: isCurrent ? "#A9D5F5" : "#D4D4D4",
                  fontWeight: isCurrent ? 500 : 400,
                  color: isCurrent ? "#00274A" : "#737373",
                  background: isCurrent
                    ? `linear-gradient(
                        90deg,
                        rgba(169,213,245,0.2) 0%,
                        rgba(169,213,245,0.2) ${progress}%,
                        rgba(255,255,255,1) ${progress + 0.1}%
                      )`
                    : "#FFFFFF",
                }}
              >
                <span
                  className="shrink-0 relative z-10"
                  style={{
                    color: isCurrent ? "#007BE5" : "#A3A3A3",
                  }}
                >
                  {TabIcons[t.iconKey]}
                </span>

                <span className="whitespace-nowrap relative z-10">
                  {t.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Content */}
        <div className="flex gap-10 lg:gap-[40px] md:items-center lg:items-start lg:h-[678px]">

          {/* Left */}
          <div className="md:w-[324px] lg:w-[495px] shrink-0 flex flex-col gap-4 lg:gap-[17px] items-start lg:justify-center lg:h-full">

            <h3 className="font-sans font-normal md:text-[24px] lg:text-[32px] leading-[1.25] tracking-[-0.015em] text-[#00274A] m-0">
              {tab.heading}
            </h3>

            <p className="font-sans font-normal text-[16px] md:text-[18px] leading-[1.35] text-[#525252] m-0 w-full lg:max-w-[438px]">
              {tab.subtext}
            </p>

            <Link
              href="#"
              className="inline-flex items-center justify-center gap-2 h-[60px] px-7 mt-2 md:mt-4 rounded-[100px] bg-[#F2F2F7] hover:bg-[#0069C2] hover:text-white transition-all duration-300 text-black lg:text-[14px] md:text-[12px] font-medium font-sans w-full sm:w-auto sm:self-start"
            >
              Experience Center
            </Link>
          </div>

          {/* Right */}
          <div className="lg:w-full lg:h-full md:w-[336px] md:h-[364px]">
            <video
              src={tab.img}
              
              width={625}
              height={678}
              className="lg:w-[625px] h-full rounded-[22px]"
              autoPlay loop muted
              style={{ objectFit: "cover" }}
              
            />
          </div>
        </div>
      </div>
    </section>
  );
}

