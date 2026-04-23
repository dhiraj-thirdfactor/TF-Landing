"use client";
import Image from "next/image";

const cards = [
  {
    title: "White-Label Mobile SDK",
    desc: "Native SDK for iOS and Android. Embed liveness and document capture directly into your branded app with no WebView.",
    img: "/illustrations/image.png",
    imgAlt: "Mobile SDK illustration",
  },
  {
    title: "White-Label Web Components",
    desc: "Drop-in verification iFrame or headless React components. Full styling control for browser-first onboarding flows.",
    img: "/illustrations/image3.png",
    imgAlt: "Web components illustration",
  },
  {
    title: "White-Label Data Layer",
    desc: "Backend API with full data ownership. Raw biometric scores, document data, and audit logs stay in your infrastructure.",
    img: "/illustrations/image2.png",
    imgAlt: "Database illustration",
  },
  {
    title: "REST API & Webhooks",
    desc: "Every verification capability exposed as a clean REST endpoint with real-time webhooks and streaming callback support.",
    img: "/illustrations/image.png",
    imgAlt: "API illustration",
  },
  {
    title: "Multi-Channel Orchestration",
    desc: "Route verification through any channel — branch kiosk, mobile app, or web portal — from a single integration point.",
    img: "/illustrations/image3.png",
    imgAlt: "Multi-channel illustration",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-20 md:py-28 bg-white border-t border-neutral-200 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">

        {/* Header */}
        <div className="px-6 md:px-[140px] flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div className="max-w-2xl">
            <p
              style={{
                fontFamily: "var(--font-geist-sans, system-ui)",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "1.5",
                color: "#525252",
                marginBottom: "12px",
              }}
            >
              One Platform for Every Identity Workflow
            </p>
            <h2
              style={{
                fontFamily: "var(--font-geist-sans, system-ui)",
                fontWeight: 400,
                fontSize: "40px",
                lineHeight: "1.25",
                letterSpacing: "-0.02em",
                color: "#00274A",
                margin: 0,
              }}
            >
              Verify users, read documents, and manage compliance from a single dashboard
            </h2>
          </div>
          <a
            href="#"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              height: "44px",
              padding: "6px 24px",
              fontSize: "14px",
              fontWeight: 500,
              color: "#ffffff",
              background: "#007BE5",
              borderRadius: "100px",
              textDecoration: "none",
              whiteSpace: "nowrap",
              flexShrink: 0,
            }}
          >
            Book a Demo
          </a>
        </div>

        {/* Cards — horizontal scroll, total 1831px, 36px gaps */}
        <div
          className="overflow-x-auto scrollbar-hide px-6 md:px-[140px]"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          <div style={{ display: "flex", gap: "36px", width: "max-content", paddingBottom: "8px" }}>
            {cards.map((c, i) => (
              <div
                key={i}
                style={{
                  width: "370px",
                  height: "452px",
                  borderRadius: "16px",
                  border: "1px solid #E5E5E5",
                  padding: "32px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "32px",
                  background: "white",
                  flexShrink: 0,
                }}
              >
                {/* Illustration — 157.94×200, blue border */}
                <div
                  style={{
                    width: "157.94px",
                    height: "200px",
                    border: "2.06px solid #2563EB",
                    borderRadius: "12px",
                    overflow: "hidden",
                    background: "#EFF6FF",
                    flexShrink: 0,
                    alignSelf: "center",
                    position: "relative",
                  }}
                >
                  <Image
                    src={c.img}
                    alt={c.imgAlt}
                    fill
                    style={{ objectFit: "contain", padding: "12px" }}
                    sizes="158px"
                  />
                </div>

                {/* Text block — 306×136, gap 12 */}
                <div style={{ width: "306px", display: "flex", flexDirection: "column", gap: "12px" }}>
                  <p
                    style={{
                      fontFamily: "var(--font-geist-sans, system-ui)",
                      fontWeight: 600,
                      fontSize: "18px",
                      lineHeight: "1.3",
                      letterSpacing: "-0.01em",
                      color: "#00274A",
                      margin: 0,
                    }}
                  >
                    {c.title}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-geist-sans, system-ui)",
                      fontWeight: 400,
                      fontSize: "14px",
                      lineHeight: "1.5",
                      color: "#525252",
                      margin: 0,
                    }}
                  >
                    {c.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}
