"use client";
import Link from "next/link";

const stats = [
  { value: "3×", label: "Faster onboarding — average time-to-account-open cut from 9 days to under 3" },
  { value: "68%", label: "Reduction in manual review cases since deploying passive liveness" },
  { value: "99.2%", label: "First-attempt verification success rate across mobile and web channels" },
];

export default function Testimonial() {
  return (
    <section
      className="bg-white border-t border-neutral-200 overflow-hidden"
      style={{ paddingTop: "96px", paddingBottom: "96px" }}
    >
      <div
        className="max-w-[1441px] mx-auto"
        style={{ paddingLeft: "140px", paddingRight: "140px" }}
      >
        {/* Outer box — 1160×549, gap 64px */}
        <div
          style={{
            width: "1160px",
            display: "flex",
            flexDirection: "column",
            gap: "64px",
          }}
        >
          {/* Top row — 1160×322, space-between */}
          <div
            style={{
              width: "1160px",
              height: "322px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
            }}
          >
            {/* Left — 668×298, gap 40px */}
            <div
              style={{
                width: "668px",
                height: "298px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              {/* Logo / brand */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "36px",
                  padding: "0 16px",
                  borderRadius: "6px",
                  background: "#00274A",
                  width: "fit-content",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-geist-sans, system-ui)",
                    fontWeight: 700,
                    fontSize: "14px",
                    letterSpacing: "0.08em",
                    color: "#ffffff",
                    textTransform: "uppercase",
                  }}
                >
                  vianet
                </span>
              </div>

              {/* Quote — part of the 298px height, gap 40 from logo */}
              <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
                {/* Blockquote */}
                <blockquote
                  style={{
                    fontFamily: "var(--font-geist-sans, system-ui)",
                    fontWeight: 400,
                    fontSize: "20px",
                    lineHeight: "1.5",
                    letterSpacing: "-0.01em",
                    color: "#00274A",
                    margin: 0,
                  }}
                >
                  &ldquo;ThirdFactor has become the backbone of our digital onboarding. We&apos;ve eliminated forged document fraud entirely while giving customers a verification experience that feels effortless and genuinely built for Nepal.&rdquo;
                </blockquote>

                {/* Attribution */}
                <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      background: "#BDE5FF",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-geist-sans, system-ui)",
                        fontWeight: 700,
                        fontSize: "12px",
                        color: "#007BE5",
                      }}
                    >
                      SR
                    </span>
                  </div>
                  <div>
                    <p
                      style={{
                        fontFamily: "var(--font-geist-sans, system-ui)",
                        fontWeight: 500,
                        fontSize: "14px",
                        lineHeight: "1.4",
                        color: "#00274A",
                        margin: 0,
                      }}
                    >
                      Sudhir Regmi
                    </p>
                    <p
                      style={{
                        fontFamily: "var(--font-geist-sans, system-ui)",
                        fontWeight: 400,
                        fontSize: "13px",
                        lineHeight: "1.4",
                        color: "#737373",
                        margin: 0,
                      }}
                    >
                      CEO, Vianet Communications
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — 466×322, space-between (3 stat boxes) */}
            <div
              style={{
                width: "466px",
                height: "322px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              {stats.map((s, i) => (
                <div
                  key={i}
                  style={{
                    width: "466px",
                    height: "82px",
                    padding: "20px 24px",
                    borderRadius: "8px",
                    background: "#00274A",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    gap: "4px",
                    boxSizing: "border-box",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "var(--font-geist-sans, system-ui)",
                      fontWeight: 600,
                      fontSize: "22px",
                      lineHeight: "1.1",
                      letterSpacing: "-0.02em",
                      color: "#BDE5FF",
                      margin: 0,
                    }}
                  >
                    {s.value}
                  </p>
                  <p
                    style={{
                      fontFamily: "var(--font-geist-sans, system-ui)",
                      fontWeight: 400,
                      fontSize: "13px",
                      lineHeight: "1.4",
                      color: "rgba(255,255,255,0.65)",
                      margin: 0,
                    }}
                  >
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom — button + attribution line */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "32px",
            }}
          >
            {/* View Case Study button — 198×60, padding 16/28, radius 100px */}
            <Link
              href="#"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "198px",
                height: "60px",
                paddingTop: "16px",
                paddingBottom: "16px",
                paddingLeft: "28px",
                paddingRight: "28px",
                borderRadius: "100px",
                border: "1px solid #E5E5E5",
                background: "#FFFFFF",
                color: "#00274A",
                fontSize: "15px",
                fontWeight: 500,
                fontFamily: "var(--font-geist-sans, system-ui)",
                textDecoration: "none",
                transition: "background 150ms, border-color 150ms",
                boxSizing: "border-box",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = "#FAFAFA";
                e.currentTarget.style.borderColor = "#D4D4D4";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "#FFFFFF";
                e.currentTarget.style.borderColor = "#E5E5E5";
              }}
            >
              View Case Study
            </Link>

            {/* Bottom line — 1160×39.82, gap 32px */}
            <div
              style={{
                width: "1160px",
                height: "39.82px",
                display: "flex",
                alignItems: "center",
                gap: "32px",
                borderTop: "1px solid #E5E5E5",
                paddingTop: "16px",
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "28px",
                  padding: "0 12px",
                  borderRadius: "4px",
                  background: "#00274A",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-geist-sans, system-ui)",
                    fontWeight: 700,
                    fontSize: "11px",
                    letterSpacing: "0.08em",
                    color: "#ffffff",
                    textTransform: "uppercase",
                  }}
                >
                  vianet
                </span>
              </div>
              <p
                style={{
                  fontFamily: "var(--font-geist-sans, system-ui)",
                  fontWeight: 400,
                  fontSize: "13px",
                  lineHeight: "1.4",
                  color: "#737373",
                  margin: 0,
                }}
              >
                Vianet Communications · ISP & IPTV provider, Nepal · Est. 1999
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
