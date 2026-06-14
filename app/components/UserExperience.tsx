"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  BadgeCheck,
  Building2,
  CheckCircle2,
  FileScan,
  Landmark,
  ScanFace,
} from "lucide-react";

const workflows = [
  {
    id: "global-kyc",
    label: "Global KYC",
    title: "Verify consumers and businesses with confidence",
    desc: "Automate identity verification, risk checks, and approval signals in one onboarding flow.",
    image: "/illustrations/phone.png",
    icon: BadgeCheck,
    checks: [
      ["First name", "Aarav"],
      ["Document", "National ID"],
      ["Liveness", "Passed"],
      ["Risk", "Low"],
    ],
  },
  {
    id: "global-kyb",
    label: "Global KYB",
    title: "Know the business behind every account",
    desc: "Screen companies, directors, and beneficial owners before they enter your ecosystem.",
    image: "/illustrations/apis.png",
    icon: Building2,
    checks: [
      ["Business", "Verified"],
      ["Directors", "Matched"],
      ["Ownership", "Mapped"],
      ["Registry", "Current"],
    ],
  },
  {
    id: "identity",
    label: "Identity Verification",
    title: "Confirm the person is real and present",
    desc: "Combine liveness, face match, and fraud signals without forcing customers through clumsy steps.",
    image: "/illustrations/facedetection.png",
    icon: ScanFace,
    checks: [
      ["Face match", "99.8%"],
      ["Spoof check", "Clear"],
      ["Device", "Trusted"],
      ["Session", "Live"],
    ],
  },
  {
    id: "documents",
    label: "Document Verification",
    title: "Read local documents with better context",
    desc: "Extract and validate structured document data across the IDs your customers actually use.",
    image: "/illustrations/image.png",
    icon: FileScan,
    checks: [
      ["OCR", "Complete"],
      ["Template", "Matched"],
      ["Tamper", "None"],
      ["Fields", "Parsed"],
    ],
  },
  {
    id: "bank",
    label: "Bank Verification",
    title: "Connect onboarding with account trust",
    desc: "Add account checks and decisioning signals to reduce handoffs between risk and operations teams.",
    image: "/illustrations/automation.png",
    icon: Landmark,
    checks: [
      ["Account", "Active"],
      ["Holder", "Matched"],
      ["Signals", "Reviewed"],
      ["Decision", "Ready"],
    ],
  },
];

export default function UserExperience() {
  const [activeId, setActiveId] = useState(workflows[0].id);
  const itemRefs = useRef<Record<string, HTMLElement | null>>({});
  const active = workflows.find((item) => item.id === activeId) ?? workflows[0];

  useEffect(() => {
    const entries = Object.values(itemRefs.current).filter(Boolean) as HTMLElement[];
    if (!entries.length) return;

    const observer = new IntersectionObserver(
      (items) => {
        const visible = items
          .filter((item) => item.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        const nextId = visible?.target.getAttribute("data-workflow-id");
        if (nextId) setActiveId(nextId);
      },
      {
        rootMargin: "-35% 0px -35% 0px",
        threshold: [0.2, 0.45, 0.7],
      }
    );

    entries.forEach((entry) => observer.observe(entry));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-white py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 lg:px-[140px]">
        <div className="mb-10 max-w-[760px] md:mb-14">
          <p className="mb-4 w-fit rounded border border-[#D9E8F7] bg-[#F7FBFF] px-2 py-1 font-mono text-[11px] uppercase tracking-[0.08em] text-[#64748B]">
            User experience
          </p>
          <h2 className="font-sans text-[32px] font-normal leading-[1.12] tracking-normal text-[#00274A] md:text-[40px] lg:text-[44px]">
            One flow for onboarding, verification, and ongoing trust.
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(360px,560px)_minmax(0,1fr)] lg:gap-10">
          <div className="lg:sticky lg:top-20 lg:self-start">
            <div className="relative aspect-[634/700] max-h-[700px] min-h-[390px] overflow-hidden rounded-2xl bg-[#F0F7FF] border border-[#D9E8F7]">
              <Image
                src="/illustrations/background.png"
                alt=""
                fill
                className="object-cover opacity-60"
                sizes="(max-width: 1024px) 100vw, 44vw"
                aria-hidden="true"
              />
              <div className="absolute inset-0 bg-[#54AFFF]/20" />

              <div className="absolute right-5 top-6 z-20 flex w-[min(80%,360px)] flex-col gap-2 md:right-8 lg:right-10 lg:top-16">
                {active.checks.map(([label, value]) => (
                  <div
                    key={label}
                    className="grid grid-cols-[1fr_auto_auto] items-center gap-3 rounded-lg bg-[#070A18] px-4 py-3 text-white"
                  >
                    <span className="text-[13px] text-white/70 md:text-[15px]">{label}</span>
                    <CheckCircle2 size={15} className="text-[#5FE08B]" />
                    <span className="text-[13px] font-medium md:text-[15px]">{value}</span>
                  </div>
                ))}
              </div>

              <div className="absolute inset-x-0 bottom-0 z-10 h-[72%]">
                {workflows.map((item) => (
                  <Image
                    key={item.id}
                    src={item.image}
                    alt=""
                    fill
                    className={`object-contain object-bottom px-8 pb-0 transition-opacity duration-300 ${
                      item.id === active.id ? "opacity-100" : "opacity-0"
                    }`}
                    sizes="(max-width: 1024px) 100vw, 44vw"
                    aria-hidden={item.id !== active.id}
                  />
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 lg:gap-6">
            {workflows.map((item) => {
              const Icon = item.icon;
              const isActive = item.id === active.id;

              return (
                <section
                  key={item.id}
                  ref={(node) => {
                    itemRefs.current[item.id] = node;
                  }}
                  data-workflow-id={item.id}
                  className={`min-h-[280px] rounded-2xl border p-6 transition-colors md:p-8 lg:min-h-[420px] lg:p-10 ${
                    isActive
                      ? "border-[#C7DDF2] bg-[#F7FBFF]"
                      : "border-[#E5E7EB] bg-white"
                  }`}
                >
                  <div className="mb-6 flex items-center gap-4">
                    <div className={`flex size-10 items-center justify-center rounded-lg ${
                      isActive ? "bg-[#00274A] text-white" : "bg-[#EFF6FF] text-[#007BE5]"
                    }`}>
                      <Icon size={21} />
                    </div>
                    <p className="font-sans text-[13px] font-semibold uppercase tracking-[0.12em] text-[#64748B]">
                      {item.label}
                    </p>
                  </div>

                  <h3 className="max-w-[560px] font-sans text-[26px] font-normal leading-[1.18] tracking-normal text-[#00274A] md:text-[32px]">
                    {item.title}
                  </h3>
                  <p className="mt-4 max-w-[620px] font-sans text-[16px] font-normal leading-[1.6] text-[#475569] md:text-[18px]">
                    {item.desc}
                  </p>
                </section>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
