"use client";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function AutomationSection() {
  return (
    <section
      className="bg-white border-t border-neutral-200 overflow-hidden"
      style={{ paddingTop: "96px", paddingBottom: "96px" }}
    >
      <div
        className="max-w-[1441px] mx-auto"
        style={{ paddingLeft: "140px", paddingRight: "140px" }}
      >
        <div style={{ display: "flex", gap: "72px", alignItems: "flex-start" }}>

          {/* ── Left — copy ─────────────────────────────── */}
          <div
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "column",
              gap: "24px",
              paddingTop: "32px",
            }}
          >
            {/* Eyebrow */}
            <p
              style={{
                fontFamily: "var(--font-geist-sans, system-ui)",
                fontWeight: 400,
                fontSize: "14px",
                lineHeight: "1.5",
                letterSpacing: "0.04em",
                color: "#007BE5",
                margin: 0,
                textTransform: "uppercase",
              }}
            >
              Automation
            </p>

            {/* H2 — 40px, weight 400, -1.2px ls, 48px lh */}
            <h2
              style={{
                fontFamily: "var(--font-geist-sans, system-ui)",
                fontWeight: 400,
                fontSize: "40px",
                lineHeight: "48px",
                letterSpacing: "-1.2px",
                color: "#00274A",
                margin: 0,
                maxWidth: "460px",
              }}
            >
              Compliance workflows that run themselves
            </h2>

            {/* Body */}
            <p
              style={{
                fontFamily: "var(--font-geist-sans, system-ui)",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "1.5",
                color: "#525252",
                margin: 0,
                maxWidth: "440px",
              }}
            >
              Automate every step — from identity capture to risk scoring and regulator reporting — without building custom pipelines.
            </p>

            {/* Feature bullets */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginTop: "8px" }}>
              {[
                "Automated risk scoring and decisioning",
                "Pre-built compliance report generation",
                "Real-time alerts and case management",
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      background: "#007BE5",
                      flexShrink: 0,
                    }}
                  />
                  <p
                    style={{
                      fontFamily: "var(--font-geist-sans, system-ui)",
                      fontWeight: 400,
                      fontSize: "15px",
                      lineHeight: "1.4",
                      color: "#404040",
                      margin: 0,
                    }}
                  >
                    {item}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Link
              href="#"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                width: "180px",
                height: "56px",
                borderRadius: "100px",
                background: "#007BE5",
                color: "#ffffff",
                fontSize: "15px",
                fontWeight: 500,
                fontFamily: "var(--font-geist-sans, system-ui)",
                textDecoration: "none",
                marginTop: "8px",
                transition: "background 150ms",
              }}
              onMouseEnter={e => (e.currentTarget.style.background = "#0069C2")}
              onMouseLeave={e => (e.currentTarget.style.background = "#007BE5")}
            >
              See it in action
              <ChevronRight size={16} />
            </Link>
          </div>

          {/* ── Right — automation.png illustration ────── */}
          <div
            style={{
              width: "620px",
              height: "560px",
              borderRadius: "24px",
              overflow: "hidden",
              flexShrink: 0,
              background: "#F0F7FF",
              position: "relative",
            }}
          >
            <Image
              src="/illustrations/automation.png"
              alt="ThirdFactor automation workflow"
              fill
              style={{ objectFit: "contain", padding: "40px" }}
              sizes="620px"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
