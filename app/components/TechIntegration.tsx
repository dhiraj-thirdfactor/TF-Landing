"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

/* ── Design tokens ─────────────────────────────────────────────── */
// H2: 48px, weight 400, lh 1.15, ls -0.025em
// H4: 32px, weight 400, lh 1.25, ls -0.015em
// H6: 18px, weight 400, lh 1.35, ls 0
// Body-1: 16px, weight 400, lh 1.5, ls 0

// Tab icon SVGs — pixel-style to match ThirdFactor brand
const TabIcons: Record<string, React.ReactNode> = {
  selfie: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <rect x="1" y="1" width="4" height="4" rx="1" fill="currentColor" opacity="0.8"/>
      <rect x="11" y="1" width="4" height="4" rx="1" fill="currentColor" opacity="0.8"/>
      <rect x="1" y="11" width="4" height="4" rx="1" fill="currentColor" opacity="0.8"/>
      <rect x="11" y="11" width="4" height="4" rx="1" fill="currentColor" opacity="0.8"/>
      <rect x="6" y="5" width="4" height="6" rx="2" fill="currentColor"/>
    </svg>
  ),
  gesture: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <rect x="2" y="2" width="3" height="3" rx="0.5" fill="currentColor"/>
      <rect x="7" y="2" width="3" height="3" rx="0.5" fill="currentColor"/>
      <rect x="2" y="7" width="3" height="7" rx="0.5" fill="currentColor"/>
      <rect x="7" y="7" width="3" height="7" rx="0.5" fill="currentColor"/>
      <rect x="12" y="7" width="3" height="7" rx="0.5" fill="currentColor" opacity="0.6"/>
    </svg>
  ),
  upload: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <rect x="2" y="4" width="12" height="10" rx="1" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M8 2v6M5.5 4.5 8 2l2.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="4" y="9" width="8" height="1.5" rx="0.75" fill="currentColor" opacity="0.5"/>
    </svg>
  ),
  video: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <rect x="1" y="4" width="10" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M11 7l4-2v6l-4-2V7z" fill="currentColor"/>
    </svg>
  ),
};

const tabs = [
  {
    id: "selfie",
    iconKey: "selfie",
    label: "Selfie Capture",
    heading: "Passive AI confirms the user is physically present.",
    subtext: "Works in seconds, requires no extra actions, and prevents automated bots.",
    img: "/illustrations/facedetection.png",
  },
  {
    id: "gesture",
    iconKey: "gesture",
    label: "Active Gesture",
    heading: "Challenge-response liveness prevents any replay or injection attack.",
    subtext: "Random gesture prompts ensure the user is live and in-frame in real time.",
    img: "/illustrations/facedetection.png",
  },
  {
    id: "upload",
    iconKey: "upload",
    label: "Upload Document",
    heading: "OCR reads and validates any government-issued ID in real time.",
    subtext: "Supports 200+ document types. MRZ, barcode, and NFC chip extraction — all in one pass.",
    img: "/illustrations/facedetection.png",
  },
  {
    id: "video",
    iconKey: "video",
    label: "Video KYC",
    heading: "Agent-assisted video verification for high-value or complex onboarding.",
    subtext: "Encrypted session recording, consent capture, and audit-ready transcripts built in.",
    img: "/illustrations/facedetection.png",
  },
];

export default function TechIntegration() {
  const [active, setActive] = useState("selfie");
  const tab = tabs.find((t) => t.id === active)!;

  return (
    <section className="bg-white py-16 md:py-20 border-t border-neutral-200 overflow-hidden">
      <div className="max-w-[1441px] mx-auto px-6 md:px-[140px]">
        {/* ── Section header ─────────────────────────────── */}
        <div className="mb-10 md:mb-16">
          <h2 className="font-sans font-normal text-[32px] md:text-[48px] leading-[1.15] tracking-[-0.025em] text-[#00274A] mb-3">
            Technical Integration Made Simple
          </h2>
          <p className="font-sans font-normal text-[16px] leading-[1.5] text-[#525252] m-0">
            Flexible APIs, SDKs, and fast implementation
          </p>
        </div>

        {/* ── Tab bar ── */}
        <div className="flex flex-row lg:flex-row w-full gap-2 lg:gap-3 overflow-x-auto scrollbar-hide pb-4 lg:pb-0 mb-8 md:mb-12">
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              className="flex-shrink-0 lg:flex-1 h-[48px] px-6 lg:px-4 flex items-center justify-center gap-2.5 rounded-[100px] border text-[14px] font-sans transition-all duration-150"
              style={{
                borderColor: active === t.id ? "#A9D5F5" : "#D4D4D4",
                fontWeight: active === t.id ? 500 : 400,
                background: active === t.id
                  ? "linear-gradient(90deg, rgba(169,213,245,0.2) 0%, rgba(169,213,245,0.2) 57.35%, rgba(255,255,255,0.2) 57.83%), #FFFFFF"
                  : "#FFFFFF",
                color: active === t.id ? "#00274A" : "#737373",
              }}
            >
              <span className="shrink-0" style={{ color: active === t.id ? "#007BE5" : "#A3A3A3" }}>
                {TabIcons[t.iconKey]}
              </span>
              <span className="whitespace-nowrap">{t.label}</span>
            </button>
          ))}
        </div>

        {/* ── Two columns ────────────────────────────────── */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-[41px] items-start w-full">
          
          {/* Left */}
          <div className="w-full lg:w-[495px] shrink-0 flex flex-col gap-4 lg:gap-[17px]">
            <h3 className="font-sans font-normal text-[24px] md:text-[32px] leading-[1.25] tracking-[-0.015em] text-[#00274A] m-0">
              {tab.heading}
            </h3>

            <p className="font-sans font-normal text-[16px] md:text-[18px] leading-[1.35] text-[#525252] m-0 w-full lg:max-w-[438px]">
              {tab.subtext}
            </p>

            <Link
              href="#"
              className="inline-flex items-center justify-center gap-2 h-[60px] px-7 mt-2 md:mt-4 rounded-[100px] bg-[#007BE5] hover:bg-[#0069C2] text-white text-[15px] font-medium font-sans transition-colors w-full sm:w-auto sm:self-start"
            >
              Experience Center
            </Link>
          </div>

          {/* Right */}
          <div className="w-full h-[300px] md:h-[400px] lg:h-[678px] rounded-2xl lg:rounded-[24px] overflow-hidden shrink-0 bg-[#F5F9FF] relative">
            <Image
              src={tab.img}
              alt="Integration interface"
              fill
              style={{ objectFit: "contain", padding: "40px" }}
              sizes="(max-width: 1024px) 100vw, 626px"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
