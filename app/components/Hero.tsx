"use client";
import Link from "next/link";
import HeroCard from "./HeroCard";
import ClientLogos from "./ClientLogos";
import { GeistPixelCircle } from "geist/font/pixel";

export default function Hero() {
  return (
    <section className="bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">

        {/* ── Centered copy ─────────────────────────────── */}
        <div className="text-center pt-16 pb-10 flex flex-col items-center">

          {/* Heading — 64px, weight 400, -3px tracking, 110% lh */}
          <h1
            style={{
              fontFamily: "var(--font-geist-sans, system-ui)",
              fontWeight: 400,
              fontSize: "64px",
              lineHeight: "110%",
              letterSpacing: "-3px",
              color: "#00274A",
              marginBottom: "24px",
            }}
          >
            Instant Identity Verification
            <br />
            For{" "}
            <span
              className={GeistPixelCircle.className}
              style={{
                fontWeight: 400,
                fontSize: "64px",
                lineHeight: "110%",
                letterSpacing: "-3px",
              }}
            >
              Regulated Markets
            </span>
          </h1>

          {/* Subtext — 20px, #272727, 140% lh */}
          <p
            style={{
              fontFamily: "var(--font-geist-sans, system-ui)",
              fontWeight: 400,
              fontSize: "20px",
              lineHeight: "140%",
              color: "#272727",
              marginBottom: "32px",
              maxWidth: "560px",
              textAlign: "center",
            }}
          >
            Full-stack platform for fast, secure, and compliant onboarding. Switch providers in a day.
            Deploy on-premise and maintain zero data retention.
          </p>

          {/* CTAs — 353px wide, 76px tall, space-between */}
          <div
            style={{
              width: "353px",
              height: "76px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "20px",
            }}
          >
            {/* Book a Demo — 149×44, padding 6/24, radius 100px, gap 8 */}
            <Link
              href="#"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                width: "149px",
                height: "44px",
                paddingTop: "6px",
                paddingBottom: "6px",
                paddingLeft: "24px",
                paddingRight: "24px",
                fontSize: "14px",
                fontWeight: 500,
                color: "#ffffff",
                background: "#007BE5",
                borderRadius: "100px",
                textDecoration: "none",
                transition: "background 150ms",
                whiteSpace: "nowrap",
                flexShrink: 0,
              }}
              onMouseEnter={e => (e.currentTarget.style.background = "#0069C2")}
              onMouseLeave={e => (e.currentTarget.style.background = "#007BE5")}
            >
              Book a Demo
            </Link>
            <Link
              href="#"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                width: "188px",
                height: "44px",
                paddingTop: "6px",
                paddingBottom: "6px",
                paddingLeft: "24px",
                paddingRight: "24px",
                fontSize: "14px",
                fontWeight: 500,
                color: "#222222",
                background: "transparent",
                border: "1px solid #E5E5E5",
                borderRadius: "100px",
                textDecoration: "none",
                transition: "background 150ms",
                whiteSpace: "nowrap",
                flexShrink: 0,
              }}
              onMouseEnter={e => (e.currentTarget.style.background = "#FAFAFA")}
              onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
            >
              Experience Center
            </Link>
          </div>

          {/* Trust badges — 14px, #1A1A1A99 */}
          <p
            style={{
              fontFamily: "var(--font-geist-sans, system-ui)",
              fontWeight: 400,
              fontSize: "14px",
              lineHeight: "1.5",
              color: "rgba(26, 26, 26, 0.6)",
              letterSpacing: "0",
              marginBottom: "0",
            }}
          >
            NRB Compliant • VAPT Certified • Sub-0.1ms 1:N Search
          </p>
        </div>

        {/* Hero card */}
        <HeroCard />
      </div>

      {/* Client logos strip — full-width */}
      <ClientLogos />
    </section>
  );
}
