"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const stats = [
  { value: "70%", label: "Reduction in data team dependency" },
  { value: "70%", label: "Reduction in data team dependency" },
  { value: "70%", label: "Reduction in data team dependency" },
];

export default function Testimonial() {
  return (
    <section
      style={{
        background: "#EBF5FF",
        paddingTop: "96px",
        paddingBottom: "96px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        {/* Top row — quote left, stats right */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: "64px",
          }}
        >
          {/* Left — quote block */}
          <div
            style={{
              maxWidth: "540px",
              display: "flex",
              flexDirection: "column",
              gap: "24px",
            }}
          >
            {/* Logo */}
            <div style={{ display: "flex", alignItems: "center", height: "36px" }}>
              <Image
                src="/illustrations/vianetlogo.png"
                alt="Vianet"
                width={140}
                height={36}
                style={{ height: "100%", width: "auto", objectFit: "contain" }}
              />
            </div>

            {/* Quote */}
            <blockquote
              style={{
                fontFamily: "var(--font-geist-sans, system-ui)",
                fontWeight: 400,
                fontSize: "18px",
                lineHeight: 1.6,
                color: "#111827",
                margin: 0,
              }}
            >
              &ldquo;ThirdFactor has become the backbone of our digital
              onboarding. It lets our risk and compliance teams catch forged
              documents instantly while giving customers a verification
              experience that feels effortless and genuinely built for
              Nepal&rdquo;
            </blockquote>

            {/* Attribution */}
            <p
              style={{
                fontFamily: "var(--font-geist-sans, system-ui)",
                fontWeight: 400,
                fontSize: "15px",
                color: "#6b7280",
                margin: 0,
              }}
            >
              Khemraj Bhujel, CEO
            </p>
          </div>

          {/* Right — stat cards */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              flexShrink: 0,
            }}
          >
            {stats.map((s, i) => (
              <div
                key={i}
                style={{
                  background: "#fff",
                  borderRadius: "12px",
                  padding: "24px 32px",
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                  minWidth: "380px",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-geist-sans, system-ui)",
                    fontWeight: 500,
                    fontSize: "32px",
                    letterSpacing: "-0.5px",
                    color: "#111827",
                    flexShrink: 0,
                  }}
                >
                  {s.value}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-geist-sans, system-ui)",
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: 1.4,
                    color: "#6b7280",
                  }}
                >
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Read Case Study button */}
        <div style={{ marginTop: "48px" }}>
          <Link
            href="#"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "14px 28px",
              borderRadius: "100px",
              border: "1px solid #d1d5db",
              background: "#fff",
              color: "#111827",
              fontSize: "14px",
              fontWeight: 500,
              fontFamily: "var(--font-geist-sans, system-ui)",
              textDecoration: "none",
              transition: "background 150ms, border-color 150ms",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#f9fafb";
              e.currentTarget.style.borderColor = "#9ca3af";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#fff";
              e.currentTarget.style.borderColor = "#d1d5db";
            }}
          >
            Read Case Study
          </Link>
        </div>

        {/* Bottom separator with arrow */}
        <div
          style={{
            marginTop: "48px",
            borderTop: "1px solid #c7d2e0",
            paddingTop: "16px",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <ArrowRight size={20} color="#374151" />
        </div>
      </div>
    </section>
  );
}
