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
    <section
      className="bg-white border-t border-neutral-200 overflow-hidden"
      style={{
        paddingTop: "96px",
        paddingBottom: "96px",
      }}
    >
      <div
        className="max-w-[1441px] mx-auto"
        style={{ paddingLeft: "140px", paddingRight: "140px" }}
      >
        {/* ── Section header ─────────────────────────────── */}
        <div style={{ marginBottom: "64px" }}>
          {/* H2 — 48px, weight 400, -0.025em, lh 1.15 */}
          <h2
            style={{
              fontFamily: "var(--font-geist-sans, system-ui)",
              fontWeight: 400,
              fontSize: "48px",
              lineHeight: "1.15",
              letterSpacing: "-0.025em",
              color: "#00274A",
              margin: "0 0 12px 0",
            }}
          >
            Technical Integration Made Simple
          </h2>
          {/* Body-1 — 16px, regular */}
          <p
            style={{
              fontFamily: "var(--font-geist-sans, system-ui)",
              fontWeight: 400,
              fontSize: "16px",
              lineHeight: "1.5",
              letterSpacing: "0",
              color: "#525252",
              margin: 0,
            }}
          >
            Flexible APIs, SDKs, and fast implementation
          </p>
        </div>

        {/* ── Tab bar — 1161×48, gap 10px, each tab 282.75×48 ── */}
        <div
          style={{
            width: "1161px",
            height: "48px",
            display: "flex",
            gap: "10px",
            alignItems: "center",
            marginBottom: "48px",
          }}
        >
          {tabs.map((t) => (
            <button
              key={t.id}
              onClick={() => setActive(t.id)}
              style={{
                width: "282.75px",
                height: "48px",
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "10px",
                borderRadius: "100px",
                border: "1px solid",
                borderColor: active === t.id ? "#A9D5F5" : "#D4D4D4",
                fontSize: "14px",
                fontWeight: active === t.id ? 500 : 400,
                fontFamily: "var(--font-geist-sans, system-ui)",
                cursor: "pointer",
                transition: "all 150ms",
                background: active === t.id
                  ? "linear-gradient(90deg, rgba(169,213,245,0.2) 0%, rgba(169,213,245,0.2) 57.35%, rgba(255,255,255,0.2) 57.83%), #FFFFFF"
                  : "#FFFFFF",
                color: active === t.id ? "#00274A" : "#737373",
              }}
            >
              <span style={{ color: active === t.id ? "#007BE5" : "#A3A3A3", flexShrink: 0 }}>
                {TabIcons[t.iconKey]}
              </span>
              {t.label}
            </button>
          ))}
        </div>

        {/* ── Two columns ────────────────────────────────── */}
        <div
          style={{
            display: "flex",
            gap: "41px",
            alignItems: "flex-start",
          }}
        >
          {/* Left — 495.32×522, gap 17px */}
          <div
            style={{
              width: "495.32px",
              flexShrink: 0,
              display: "flex",
              flexDirection: "column",
              gap: "17px",
            }}
          >
            {/* H4 heading — 32px, weight 400, -0.015em, lh 1.25 */}
            <h3
              style={{
                fontFamily: "var(--font-geist-sans, system-ui)",
                fontWeight: 400,
                fontSize: "32px",
                lineHeight: "1.25",
                letterSpacing: "-0.015em",
                color: "#00274A",
                margin: 0,
              }}
            >
              {tab.heading}
            </h3>

            {/* H6 subtext — 18px, weight 400, lh 1.35 — 438.51×48 */}
            <p
              style={{
                fontFamily: "var(--font-geist-sans, system-ui)",
                fontWeight: 400,
                fontSize: "18px",
                lineHeight: "1.35",
                letterSpacing: "0",
                color: "#525252",
                margin: 0,
                width: "438.51px",
                maxWidth: "100%",
              }}
            >
              {tab.subtext}
            </p>

            {/* CTA — 208×60, radius 100px, padding 16/28, gap 8 */}
            <Link
              href="#"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                width: "208px",
                height: "60px",
                paddingTop: "16px",
                paddingBottom: "16px",
                paddingLeft: "28px",
                paddingRight: "28px",
                borderRadius: "100px",
                background: "#007BE5",
                color: "#ffffff",
                fontSize: "15px",
                fontWeight: 500,
                fontFamily: "var(--font-geist-sans, system-ui)",
                textDecoration: "none",
                transition: "background 150ms",
                marginTop: "8px",
              }}
              onMouseEnter={e => (e.currentTarget.style.background = "#0069C2")}
              onMouseLeave={e => (e.currentTarget.style.background = "#007BE5")}
            >
              Experience Center
            </Link>
          </div>

          {/* Right — 625.68×678.7, border-radius 24px */}
          <div
            style={{
              width: "625.68px",
              height: "678.7px",
              borderRadius: "24px",
              overflow: "hidden",
              flexShrink: 0,
              background: "#F5F9FF",
              position: "relative",
            }}
          >
            <Image
              src={tab.img}
              alt="Face detection interface"
              fill
              style={{ objectFit: "contain", padding: "40px" }}
              sizes="626px"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
