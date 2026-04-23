"use client";
import Image from "next/image";
import Link from "next/link";
import { GeistPixelCircle } from "geist/font/pixel";

export default function CTABanner() {
  return (
    <section className="bg-white flex justify-center py-20 px-6">
      {/* Card — 1160 × 454.4 */}
      <div
        style={{
          position: "relative",
          width: "1160px",
          maxWidth: "100%",
          height: "454.4px",
          borderRadius: "20px",
          overflow: "hidden",
          background: "#2563EB",
          display: "flex",
          alignItems: "center",
        }}
      >
        {/* ── Left content block — 516 × 217, gap 24 ── */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            marginLeft: "72px",
            width: "516px",
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          {/* Headline */}
          <div
            style={{
              height: "217px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
            }}
          >
            <h2
              style={{
                fontFamily: "var(--font-geist-sans, system-ui)",
                fontWeight: 400,
                fontSize: "48px",
                lineHeight: "52.8px",
                letterSpacing: "-1px",
                color: "#fff",
                margin: 0,
              }}
            >
              Start Verifying
            </h2>
            <h2
              style={{
                margin: 0,
                fontSize: "48px",
                lineHeight: "52.8px",
                letterSpacing: "-1px",
                color: "#fff",
                display: "flex",
                gap: "14px",
                alignItems: "baseline",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-geist-sans, system-ui)",
                  fontWeight: 400,
                }}
              >
                with
              </span>
              <span
                className={GeistPixelCircle.className}
                style={{
                  fontWeight: 400,
                  fontSize: "48px",
                  lineHeight: "52.8px",
                  letterSpacing: "-1px",
                }}
              >
                Confidence
              </span>
            </h2>
            <p
              style={{
                fontFamily: "var(--font-geist-sans, system-ui)",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "24px",
                color: "rgba(255,255,255,0.75)",
                margin: "16px 0 0",
                maxWidth: "420px",
              }}
            >
              Join organizations across Nepal that trust Third Factor to secure
              and scale their digital interactions.
            </p>
          </div>

          {/* Book Demo button — 153 × 60, gap 16 */}
          <Link
            href="#"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "16px",
              width: "153px",
              height: "60px",
              borderRadius: "100px",
              background: "#fff",
              color: "#1e3a5f",
              fontSize: "15px",
              fontWeight: 500,
              fontFamily: "var(--font-geist-sans, system-ui)",
              textDecoration: "none",
              flexShrink: 0,
              transition: "background 150ms",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "#f0f4ff")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "#fff")
            }
          >
            Book Demo
          </Link>
        </div>

        {/* ── Right: dot-grid pattern ── */}
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            width: "58%",
            height: "100%",
            pointerEvents: "none",
          }}
        >
          <Image
            src="/illustrations/background.png"
            alt=""
            fill
            style={{ objectFit: "cover", objectPosition: "left top" }}
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
}
