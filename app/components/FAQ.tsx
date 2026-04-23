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
    <div className="border-b border-neutral-200">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="w-full h-16 flex items-center justify-between bg-transparent border-none cursor-pointer p-0 text-left group"
      >
        <span className={`font-sans text-[16px] leading-[1.4] transition-colors ${open ? 'font-semibold text-neutral-900' : 'font-normal text-neutral-800 group-hover:text-neutral-900'}`}>
          {q}
        </span>
        <Plus
          size={18}
          className={`shrink-0 text-neutral-500 transition-transform duration-300 ease-in-out ${open ? 'rotate-45 text-neutral-900' : 'rotate-0'}`}
        />
      </button>

      <div 
        className={`grid transition-all duration-300 ease-in-out ${open ? 'grid-rows-[1fr] opacity-100 pb-6' : 'grid-rows-[0fr] opacity-0 pb-0'}`}
      >
        <div className="overflow-hidden">
          <p className="font-sans font-normal text-[15px] leading-[1.7] text-neutral-500 m-0 max-w-[820px]">
            {a}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-[1200px] mx-auto px-6 flex flex-col gap-16">
        
        {/* Heading */}
        <h2 className="font-sans font-medium text-[40px] leading-[0.9] tracking-[-0.05em] text-neutral-900 m-0">
          Frequently Asked Questions
        </h2>

        {/* Sectioned accordions */}
        <div className="flex flex-col gap-10">
          {faqSections.map((section, sectionIndex) => (
            <div key={section.title} className="flex flex-col gap-3">
              <h3 className="font-sans font-medium text-[22px] leading-[1.3] tracking-[-0.01em] text-[#00274A] m-0 mb-2">
                {section.title}
              </h3>
              <div className="flex flex-col">
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
