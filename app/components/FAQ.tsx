"use client";
import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit cards (Visa, MasterCard, American Express) and offer invoice-based billing for Enterprise customers. Annual plans can also be paid via bank transfer.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit cards (Visa, MasterCard, American Express) and offer invoice-based billing for Enterprise customers. Annual plans can also be paid via bank transfer.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit cards (Visa, MasterCard, American Express) and offer invoice-based billing for Enterprise customers. Annual plans can also be paid via bank transfer.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit cards (Visa, MasterCard, American Express) and offer invoice-based billing for Enterprise customers. Annual plans can also be paid via bank transfer.",
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major credit cards (Visa, MasterCard, American Express) and offer invoice-based billing for Enterprise customers. Annual plans can also be paid via bank transfer.",
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

        {/* Accordion list */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          {faqs.map((f, i) => (
            <FAQItem key={i} q={f.q} a={f.a} defaultOpen={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
