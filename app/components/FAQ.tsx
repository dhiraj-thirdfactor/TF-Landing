"use client";
import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit and debit cards, bank transfers, and digital wallets. Enterprise customers can be invoiced on net-30 terms.",
  },
  {
    q: "How long does integration take?",
    a: "Most teams complete a production integration in 3–5 business days using our REST API and prebuilt SDKs. Our integration team provides dedicated Slack support and a sandbox environment throughout.",
  },
  {
    q: "Which documents can ThirdFactor verify?",
    a: "We support 200+ document types across 190+ countries — including passports, national IDs, driving licences, and residency cards. Nepalese documents (Citizenship, Passport, Driving Licence) are supported with enhanced accuracy.",
  },
  {
    q: "Is ThirdFactor compliant with NRB and NTA regulations?",
    a: "Yes. ThirdFactor is designed to meet Nepal Rastra Bank digital KYC guidelines and Nepal Telecommunications Authority requirements for telecom subscriber verification.",
  },
  {
    q: "Where is biometric data stored?",
    a: "By default, biometric templates are processed in-memory and not persisted. Customers can configure data residency to keep all verification data within their own cloud infrastructure or on-premise.",
  },
];

function FAQItem({ q, a, defaultOpen }: { q: string; a: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen ?? false);

  return (
    /* Closed: 1161×61 — Open: 1161×126, gap 21px between items */
    <div
      style={{
        width: "1161px",
        borderBottom: "1px solid #E5E5E5",
        paddingBottom: open ? "21px" : "0",
      }}
    >
      {/* Row — always 61px tall */}
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        style={{
          width: "1161px",
          height: "61px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "21px",
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
            fontWeight: open ? 500 : 400,
            fontSize: "15px",
            lineHeight: "1.4",
            color: open ? "#00274A" : "#404040",
            transition: "color 150ms, font-weight 150ms",
          }}
        >
          {q}
        </span>
        <div
          style={{
            width: "28px",
            height: "28px",
            borderRadius: "50%",
            border: "1px solid #E5E5E5",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            background: open ? "#00274A" : "#FFFFFF",
            transition: "background 150ms, border-color 150ms",
          }}
        >
          <Plus
            size={14}
            style={{
              color: open ? "#FFFFFF" : "#A3A3A3",
              transform: open ? "rotate(45deg)" : "rotate(0deg)",
              transition: "transform 200ms, color 150ms",
            }}
          />
        </div>
      </button>

      {/* Answer — visible when open, height makes total ~126px */}
      {open && (
        <p
          style={{
            fontFamily: "var(--font-geist-sans, system-ui)",
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: "1.6",
            color: "#525252",
            margin: 0,
            maxWidth: "820px",
          }}
        >
          {a}
        </p>
      )}
    </div>
  );
}

export default function FAQ() {
  return (
    <section
      className="bg-white border-t border-neutral-200 overflow-hidden"
      style={{ paddingTop: "96px", paddingBottom: "96px" }}
    >
      <div
        className="max-w-[1441px] mx-auto"
        style={{ paddingLeft: "140px", paddingRight: "140px" }}
      >
        {/* Container — 1160×657, gap 76px */}
        <div
          style={{
            width: "1160px",
            display: "flex",
            flexDirection: "column",
            gap: "76px",
          }}
        >
          {/* Heading — 40px, weight 400, lh 90% (36px), ls -2.29px */}
          <h2
            style={{
              fontFamily: "var(--font-geist-sans, system-ui)",
              fontWeight: 400,
              fontSize: "40px",
              lineHeight: "90%",
              letterSpacing: "-2.29px",
              color: "#00274A",
              margin: 0,
            }}
          >
            Frequently Asked Questions
          </h2>

          {/* List — 1161×530, gap 40px */}
          <div
            style={{
              width: "1161px",
              display: "flex",
              flexDirection: "column",
              gap: "40px",
            }}
          >
            {faqs.map((f, i) => (
              <FAQItem key={f.q} q={f.q} a={f.a} defaultOpen={i === 0} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
