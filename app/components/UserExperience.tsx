"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

const flows = [
  {
    id: "biometric",
    label: "Biometric Authentication",
    items: [
      {
        title: "Passive liveness — no user action needed",
        desc: "Our AI confirms presence in the background. No head turns, no blinking prompts, no frustrating retries.",
      },
      {
        title: "Spoof-proof at every attack class",
        desc: "Blocks printed photos, screen replays, 3D masks, and injection attacks — certified to ISO 30107-3 PAD Level 2.",
      },
      {
        title: "Sub-second results on any device",
        desc: "Face match and liveness complete in under 800ms on mid-range Android and iOS, with no native app required.",
      },
    ],
  },
  {
    id: "document",
    label: "Document Verification",
    items: [
      {
        title: "200+ document types, 190+ countries",
        desc: "Passports, national IDs, driving licences. MRZ, barcode, and NFC chip extraction all in a single capture.",
      },
      {
        title: "Tampering and forgery detection",
        desc: "Font analysis, microprint checks, and UV-pattern models flag doctored documents before they reach review.",
      },
      {
        title: "Instant data extraction",
        desc: "All fields returned as structured JSON — no manual re-keying, no OCR errors downstream.",
      },
    ],
  },
  {
    id: "video",
    label: "Video KYC",
    items: [
      {
        title: "Agent-assisted high-value onboarding",
        desc: "Live video session with a compliance officer for regulated accounts requiring enhanced due diligence.",
      },
      {
        title: "Encrypted recording and audit trail",
        desc: "Every session is encrypted at rest, timestamped, and exportable for regulator review.",
      },
      {
        title: "Consent capture built in",
        desc: "Verbal and on-screen consent captured and logged automatically — no additional integration required.",
      },
    ],
  },
];

export default function UserExperience() {
  const [selected, setSelected] = useState(flows[0]);
  const [open, setOpen] = useState(false);
  const dropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <section
      className="bg-white py-20 border-t border-neutral-200 overflow-hidden"
    >
      <div
        className="max-w-[1441px] mx-auto"
        style={{ paddingLeft: "140px", paddingRight: "140px" }}
      >
        <div style={{ display: "flex", gap: "72px", alignItems: "flex-start" }}>

          {/* ── Left — 485×771, space-between ─────────────── */}
          <div
            style={{
              width: "485px",
              height: "771px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              flexShrink: 0,
            }}
          >
            {/* Heading — 40px, weight 400, 48px lh, -3% ls */}
            <h2
              style={{
                fontFamily: "var(--font-geist-sans, system-ui)",
                fontWeight: 400,
                fontSize: "40px",
                lineHeight: "48px",
                letterSpacing: "-1.2px", // -3% of 40px
                color: "#00274A",
                margin: 0,
              }}
            >
              What your users see
            </h2>

            {/* Dropdown — 485×71, padding 20/32, radius 100px */}
            <div ref={dropRef} style={{ position: "relative", width: "485px" }}>
              <button
                onClick={() => setOpen(!open)}
                style={{
                  width: "485px",
                  height: "71px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingTop: "20px",
                  paddingBottom: "20px",
                  paddingLeft: "32px",
                  paddingRight: "32px",
                  borderRadius: "100px",
                  border: "1px solid #E5E5E5",
                  background: "#FFFFFF",
                  cursor: "pointer",
                  fontFamily: "var(--font-geist-sans, system-ui)",
                  fontSize: "15px",
                  fontWeight: 500,
                  color: "#00274A",
                  transition: "background 150ms",
                }}
                onMouseEnter={e => (e.currentTarget.style.background = "#FAFAFA")}
                onMouseLeave={e => (e.currentTarget.style.background = "#FFFFFF")}
              >
                {selected.label}
                <ChevronDown
                  size={18}
                  style={{
                    color: "#A3A3A3",
                    transition: "transform 150ms",
                    transform: open ? "rotate(180deg)" : "rotate(0deg)",
                    flexShrink: 0,
                  }}
                />
              </button>

              {/* Dropdown menu */}
              {open && (
                <div
                  style={{
                    position: "absolute",
                    top: "calc(100% + 8px)",
                    left: 0,
                    width: "485px",
                    background: "#FFFFFF",
                    border: "1px solid #E5E5E5",
                    borderRadius: "16px",
                    overflow: "hidden",
                    zIndex: 20,
                    boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
                  }}
                >
                  {flows.map((f) => (
                    <button
                      key={f.id}
                      onClick={() => { setSelected(f); setOpen(false); }}
                      style={{
                        width: "100%",
                        height: "56px",
                        display: "flex",
                        alignItems: "center",
                        padding: "0 32px",
                        background: selected.id === f.id ? "#F5F9FF" : "transparent",
                        border: "none",
                        cursor: "pointer",
                        fontFamily: "var(--font-geist-sans, system-ui)",
                        fontSize: "14px",
                        fontWeight: selected.id === f.id ? 500 : 400,
                        color: selected.id === f.id ? "#007BE5" : "#404040",
                        textAlign: "left",
                        transition: "background 150ms",
                      }}
                      onMouseEnter={e => { if (selected.id !== f.id) e.currentTarget.style.background = "#FAFAFA"; }}
                      onMouseLeave={e => { if (selected.id !== f.id) e.currentTarget.style.background = "transparent"; }}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Text block — 485×309, gap 40px, 3 items */}
            <div
              style={{
                width: "485px",
                height: "309px",
                display: "flex",
                flexDirection: "column",
                gap: "40px",
              }}
            >
              {selected.items.map((item, i) => (
                <div key={i} style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <p
                    style={{
                      fontFamily: "var(--font-geist-sans, system-ui)",
                      fontWeight: 500,
                      fontSize: "15px",
                      lineHeight: "1.4",
                      color: "#00274A",
                      margin: 0,
                    }}
                  >
                    {item.title}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-geist-sans, system-ui)",
                      fontWeight: 400,
                      fontSize: "14px",
                      lineHeight: "1.6",
                      color: "#525252",
                      margin: 0,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right — background.png + phone.png ─────────── */}
          <div
            style={{
              flex: 1,
              height: "771px",
              borderRadius: "24px",
              overflow: "hidden",
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Background texture */}
            <Image
              src="/illustrations/background.png"
              alt=""
              fill
              style={{ objectFit: "cover" }}
              sizes="600px"
              aria-hidden="true"
            />

            {/* Phone on top — centered */}
            <div
              style={{
                position: "relative",
                zIndex: 2,
                width: "320px",
                height: "660px",
                filter: "drop-shadow(0 32px 64px rgba(0,0,0,0.22))",
              }}
            >
              <Image
                src="/illustrations/phone.png"
                alt="ThirdFactor face verification on iPhone"
                fill
                style={{ objectFit: "contain" }}
                sizes="320px"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
