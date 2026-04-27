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
    <section className="bg-[#FAE8FF] py-16 md:py-20 border-t border-neutral-200 overflow-hidden">
      <div className="max-w-[1441px] mx-auto px-6 md:px-[140px]">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-[72px] items-start w-full">

          {/* ── Left ─────────────── */}
          <div className="w-full lg:w-[485px] min-h-[auto] lg:h-[771px] flex flex-col justify-between shrink-0 gap-8 lg:gap-0">
            {/* Heading */}
            <div className="flex flex-col gap-10">
            <h2 className=" text-[32px] md:text-[40px] leading-[1.2] tracking-[-1.2px] text-[#00274A] m-0">
              What your users see
            </h2>

            {/* Dropdown */}
            <div ref={dropRef} className="relative w-full">
              <button
                onClick={() => setOpen(!open)}
                className="w-full h-[60px] md:h-[71px] flex items-center justify-between px-6 md:px-[32px] rounded-[100px] border border-[#E5E5E5] bg-white cursor-pointer font-sans text-[14px] md:text-[15px] font-medium text-[#00274A] transition-colors hover:bg-[#FAFAFA] outline-none"
              >
                {selected.label}
                <ChevronDown
                  size={18}
                  className="text-[#A3A3A3] shrink-0 transition-transform duration-150"
                  style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
                />
              </button>

              {/* Dropdown menu */}
              {open && (
                <div className="absolute top-[calc(100%+8px)] left-0 w-full bg-white border border-[#E5E5E5] rounded-[16px] overflow-hidden z-20 shadow-[0_4px_24px_rgba(0,0,0,0.06)]">
                  {flows.map((f) => (
                    <button
                      key={f.id}
                      onClick={() => { setSelected(f); setOpen(false); }}
                      className="w-full h-[56px] flex items-center px-6 md:px-[32px] bg-transparent border-none cursor-pointer font-sans text-[14px] text-left transition-colors outline-none"
                      style={{
                        background: selected.id === f.id ? "#F5F9FF" : "transparent",
                        fontWeight: selected.id === f.id ? 500 : 400,
                        color: selected.id === f.id ? "#007BE5" : "#404040",
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
            </div>

            {/* Text block */}
            <div className="w-full flex flex-col gap-6 md:gap-[40px] divide-amber-50 divide-y-2 ">
              {selected.items.map((item, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <p className="font-sans font-medium text-[15px] leading-[1.4] text-[#00274A] m-0">
                    {item.title}
                  </p>
                  <p className="font-sans font-normal text-[14px] leading-[1.6] text-[#525252] m-0">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right — background.png + phone.png ─────────── */}
          <div className="w-full lg:flex-1 h-[500px] lg:h-[771px] rounded-2xl md:rounded-[24px] overflow-hidden relative flex items-center justify-center shrink-0">
            {/* Background texture */}
            <Image
              src="/illustrations/background.png"
              alt=""
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 1024px) 100vw, 600px"
              aria-hidden="true"
            />

            {/* Phone on top */}
            <div className="relative z-10 w-[240px] md:w-[320px] h-[480px] md:h-[660px]" style={{ filter: "drop-shadow(0 32px 64px rgba(0,0,0,0.22))" }}>
              <Image
                src="/illustrations/phone.png"
                alt="ThirdFactor face verification on iPhone"
                fill
                style={{ objectFit: "contain" }}
                sizes="(max-width: 768px) 240px, 320px"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
