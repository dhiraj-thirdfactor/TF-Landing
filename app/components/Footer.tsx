"use client";
import Image from "next/image";
import Link from "next/link";
import {
  ExternalLink,
  Share2,
  Globe,
  Play,
} from "lucide-react";

export default function Footer() {
  return (
    <>
      {/* ── Main footer ─────────────────────────────── */}
      <footer style={{ background: "#fff", borderTop: "1px solid #e5e7eb" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "64px 24px 48px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr repeat(3, auto)",
              gap: "48px",
              alignItems: "flex-start",
            }}
          >
            {/* Brand */}
            <div style={{ maxWidth: "260px" }}>
              <Image
                src="/logo.svg"
                alt="ThirdFactor.ai"
                width={140}
                height={28}
                style={{ marginBottom: "16px" }}
              />
              <p
                style={{
                  fontFamily: "var(--font-geist-sans, system-ui)",
                  fontSize: "14px",
                  lineHeight: 1.6,
                  color: "#111827",
                  margin: "0 0 20px",
                  fontWeight: 500,
                }}
              >
                Instant{" "}
                <span style={{ fontStyle: "italic" }}>Identity</span>
                <br />
                Verification for regulated
                <br />
                markets.
              </p>
              <Link
                href="#"
                style={{
                  display: "inline-block",
                  padding: "8px 20px",
                  borderRadius: "100px",
                  border: "1px solid #d1d5db",
                  fontSize: "13px",
                  color: "#111827",
                  fontFamily: "var(--font-geist-sans, system-ui)",
                  textDecoration: "none",
                }}
              >
                Learn More
              </Link>
            </div>

            {/* Products */}
            <FooterCol
              heading="PRODUCTS"
              links={["Documentation", "Blogs", "FAQs", "Contact Us"]}
            />

            {/* Resources */}
            <FooterCol
              heading="RESOURCES"
              links={["Blogs", "Documentation", "FAQs", "Contact Us"]}
            />

            {/* Contact */}
            <div>
              <p
                style={{
                  fontFamily: "var(--font-geist-sans, system-ui)",
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  color: "#6b7280",
                  textTransform: "uppercase",
                  margin: "0 0 16px",
                }}
              >
                CONTACT
              </p>
              <ul
                style={{
                  listStyle: "none",
                  margin: 0,
                  padding: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                {["info@thirdfactor.ai", "9705180020", "Kupondole, Lalitpur"].map(
                  (item) => (
                    <li
                      key={item}
                      style={{
                        fontFamily: "var(--font-geist-sans, system-ui)",
                        fontSize: "14px",
                        color: "#374151",
                      }}
                    >
                      {item}
                    </li>
                  )
                )}
              </ul>

              {/* Social */}
              <div style={{ display: "flex", gap: "12px", marginTop: "20px" }}>
                {[
                  { icon: <ExternalLink size={16} />, label: "Twitter" },
                  { icon: <Share2 size={16} />, label: "LinkedIn" },
                  { icon: <Globe size={16} />, label: "GitHub" },
                  { icon: <Play size={16} />, label: "YouTube" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href="#"
                    aria-label={s.label}
                    style={{
                      color: "#374151",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div
            style={{
              borderTop: "1px solid #e5e7eb",
              marginTop: "48px",
              paddingTop: "24px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-geist-sans, system-ui)",
                fontSize: "14px",
                color: "#111827",
                margin: 0,
              }}
            >
              A{" "}
              <span style={{ fontWeight: 700, letterSpacing: "0.06em" }}>
                PRI<span style={{ fontStyle: "italic" }}>X</span>A
              </span>{" "}
              Company
            </p>
            <Link
              href="#"
              style={{
                fontFamily: "var(--font-geist-sans, system-ui)",
                fontSize: "14px",
                color: "#374151",
                textDecoration: "none",
              }}
            >
              Terms and Conditions
            </Link>
          </div>
        </div>
      </footer>

      {/* ── Dot-grid strip ──────────────────────────── */}
      <div style={{ width: "100%", lineHeight: 0 }}>
        <Image
          src="/illustrations/background.png"
          alt=""
          width={1440}
          height={220}
          style={{ width: "100%", height: "auto", display: "block" }}
          aria-hidden="true"
        />
      </div>
    </>
  );
}

function FooterCol({
  heading,
  links,
}: {
  heading: string;
  links: string[];
}) {
  return (
    <div>
      <p
        style={{
          fontFamily: "var(--font-geist-sans, system-ui)",
          fontSize: "11px",
          fontWeight: 700,
          letterSpacing: "0.08em",
          color: "#6b7280",
          textTransform: "uppercase",
          margin: "0 0 16px",
        }}
      >
        {heading}
      </p>
      <ul
        style={{
          listStyle: "none",
          margin: 0,
          padding: 0,
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        {links.map((l) => (
          <li key={l}>
            <Link
              href="#"
              style={{
                fontFamily: "var(--font-geist-sans, system-ui)",
                fontSize: "14px",
                color: "#374151",
                textDecoration: "none",
              }}
            >
              {l}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
