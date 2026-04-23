"use client";
import { useState } from "react";
import { Plus } from "lucide-react";

const faqSections = [
  {
    title: "Product & Integration",
    items: [
      {
        q: "How quickly can we integrate ThirdFactor?",
        a: "Most teams complete a production rollout in 3-5 business days. We provide SDKs, API references, and direct support during implementation.",
      },
      {
        q: "Do you support both web and mobile onboarding?",
        a: "Yes. You can use web components, native mobile SDKs, or API-first integration depending on your onboarding stack.",
      },
      {
        q: "Can we keep our own branding and UI?",
        a: "Yes. ThirdFactor supports white-label experiences so your users stay in your brand throughout verification.",
      },
    ],
  },
  {
    title: "Security & Compliance",
    items: [
      {
        q: "Is zero-retention deployment available?",
        a: "Yes. We support zero-retention and deployment options that align with strict data residency and governance requirements.",
      },
      {
        q: "How does ThirdFactor prevent spoofing attacks?",
        a: "Our liveness and anti-spoofing models are built to detect replay, printed image, and mask-based fraud attempts in real time.",
      },
      {
        q: "Do you provide audit-ready records?",
        a: "Yes. Session events, consent logs, and verification traces are available for compliance and review workflows.",
      },
    ],
  },
  {
    title: "Pricing & Support",
    items: [
      {
        q: "Do you offer enterprise pricing?",
        a: "Yes. Enterprise plans include volume pricing, tailored SLA options, and dedicated technical support.",
      },
      {
        q: "Can we start with a pilot?",
        a: "Absolutely. Most teams begin in sandbox or pilot mode and then move to production once flows are validated.",
      },
      {
        q: "What support channels are available?",
        a: "We provide onboarding guidance, implementation support, and priority channels for active production customers.",
      },
    ],
  },
];

function FAQItem({
  q,
  a,
  defaultOpen,
}: {
  q: string;
  a: string;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen ?? false);

  return (
    <div
      style={{
        borderBottom: "1px solid #e5e7eb",
        paddingBottom: open ? "24px" : "0",
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        style={{
          width: "100%",
          height: "64px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          padding: 0,
          textAlign: "left",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-geist-sans, system-ui)",
            fontWeight: open ? 600 : 400,
            fontSize: "16px",
            lineHeight: 1.4,
            color: "#111827",
          }}
        >
          {q}
        </span>
        <Plus
          size={18}
          style={{
            flexShrink: 0,
            color: "#374151",
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
            transition: "transform 200ms ease",
          }}
        />
      </button>

      {open && (
        <p
          style={{
            fontFamily: "var(--font-geist-sans, system-ui)",
            fontWeight: 400,
            fontSize: "14px",
            lineHeight: 1.7,
            color: "#6b7280",
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
      style={{
        background: "#fff",
        paddingTop: "96px",
        paddingBottom: "96px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          flexDirection: "column",
          gap: "64px",
        }}
      >
        {/* Heading */}
        <h2
          style={{
            fontFamily: "var(--font-geist-sans, system-ui)",
            fontWeight: 400,
            fontSize: "40px",
            lineHeight: "90%",
            letterSpacing: "-2px",
            color: "#111827",
            margin: 0,
          }}
        >
          Frequently Asked Questions
        </h2>

        {/* Sectioned accordions */}
        <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
          {faqSections.map((section, sectionIndex) => (
            <div key={section.title} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <h3
                style={{
                  fontFamily: "var(--font-geist-sans, system-ui)",
                  fontWeight: 500,
                  fontSize: "22px",
                  lineHeight: 1.3,
                  letterSpacing: "-0.01em",
                  color: "#00274A",
                  margin: 0,
                }}
              >
                {section.title}
              </h3>
              <div style={{ display: "flex", flexDirection: "column" }}>
                {section.items.map((f, itemIndex) => (
                  <FAQItem
                    key={`${section.title}-${itemIndex}`}
                    q={f.q}
                    a={f.a}
                    defaultOpen={sectionIndex === 0 && itemIndex === 0}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
