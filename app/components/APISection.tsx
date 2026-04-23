"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ChevronRight } from "lucide-react";

const items = [
  {
    id: "rest",
    label: "REST API & SDKs",
    content:
      "Full REST API with OpenAPI 3.0 spec. Native SDKs for Flutter, React Native, iOS (Swift), and Android (Kotlin). All endpoints return structured JSON with consistent error codes.",
  },
  {
    id: "fusion",
    label: "Fusion Components",
    content:
      "Pre-built, embeddable UI components for face capture, document scan, and consent flow. Drop into any web or mobile app with a single import.",
  },
  {
    id: "webhook",
    label: "Webhooks & Real-Time Events",
    content:
      "Subscribe to session lifecycle events via signed webhooks. Supports retries, dead-letter queues, and per-event filtering.",
  },
  {
    id: "integration",
    label: "Integration Timeline",
    content:
      "Most teams ship a production integration in 3–5 business days. Our integration team provides a dedicated Slack channel and sandbox environment.",
  },
];

export default function APISection() {
  const [openId, setOpenId] = useState<string | null>("rest");

  return (
    <section
      className="bg-white py-20 border-t border-neutral-200"
    >
      <div
        className="max-w-[1441px] mx-auto"
        style={{ paddingLeft: "140px", paddingRight: "140px" }}
      >
        <div style={{ display: "flex", gap: "72px", alignItems: "flex-start" }}>

          {/* ── Left: apis.png illustration — 575.84×559.55 ── */}
          <div
            style={{
              width: "575.84px",
              height: "559.55px",
              borderRadius: "16px",
              overflow: "hidden",
              flexShrink: 0,
              background: "#F0F7FF",
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              src="/illustrations/apis.png"
              alt="ThirdFactor API infrastructure"
              fill
              style={{ objectFit: "contain", padding: "32px" }}
              sizes="576px"
              priority
            />
          </div>

          {/* ── Right: copy + accordion — 513 wide ─────────── */}
          <div
            style={{
              width: "513px",
              display: "flex",
              flexDirection: "column",
              gap: "32px",
              flexShrink: 0,
            }}
          >
            {/* Heading — 40px, weight 400, -2px tracking, 48px lh */}
            <div>
              <h2
                style={{
                  fontFamily: "var(--font-geist-sans, system-ui)",
                  fontWeight: 400,
                  fontSize: "40px",
                  lineHeight: "48px",
                  letterSpacing: "-2px",
                  color: "#00274A",
                  margin: "0 0 16px 0",
                }}
              >
                Build anything with
                <br />a powerful host of APIs
              </h2>
              <p
                style={{
                  fontFamily: "var(--font-geist-sans, system-ui)",
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "1.5",
                  color: "#525252",
                  margin: 0,
                }}
              >
                Every verification capability is exposed as a clean REST endpoint. Ship production integrations in days, not months.
              </p>
            </div>

            {/* View Documentation — 227×60, gap 16 */}
            <Link
              href="#"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "16px",
                width: "227px",
                height: "60px",
                borderRadius: "100px",
                background: "#007BE5",
                color: "#ffffff",
                fontSize: "15px",
                fontWeight: 500,
                fontFamily: "var(--font-geist-sans, system-ui)",
                textDecoration: "none",
                flexShrink: 0,
                transition: "background 150ms",
              }}
              onMouseEnter={e => (e.currentTarget.style.background = "#0069C2")}
              onMouseLeave={e => (e.currentTarget.style.background = "#007BE5")}
            >
              View Documentation
              <ChevronRight size={16} />
            </Link>

            {/* Expandable rows — each 513×69, gap via borders */}
            <div style={{ display: "flex", flexDirection: "column" }}>
              {items.map((item, idx) => {
                const isOpen = openId === item.id;
                return (
                  <div
                    key={item.id}
                    style={{
                      borderTop: idx === 0 ? "1px solid #E5E5E5" : "none",
                      borderBottom: "1px solid #E5E5E5",
                    }}
                  >
                    <button
                      onClick={() => setOpenId(isOpen ? null : item.id)}
                      style={{
                        width: "513px",
                        height: "69px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "32px",
                        background: "transparent",
                        border: "none",
                        cursor: "pointer",
                        padding: "0",
                        textAlign: "left",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "var(--font-geist-sans, system-ui)",
                          fontWeight: isOpen ? 500 : 400,
                          fontSize: "15px",
                          color: isOpen ? "#00274A" : "#404040",
                          transition: "color 150ms",
                        }}
                      >
                        {item.label}
                      </span>
                      <ChevronDown
                        size={16}
                        style={{
                          color: "#A3A3A3",
                          flexShrink: 0,
                          transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                          transition: "transform 200ms",
                        }}
                      />
                    </button>
                    {isOpen && (
                      <div style={{ paddingBottom: "20px" }}>
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
                          {item.content}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
