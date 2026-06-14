"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, ChevronDown, Plus, ShieldCheck } from "lucide-react";
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import CTABanner from "../components/CTABanner";
import Footer from "../components/Footer";

const capabilityRates = [
  { feature: "Face Liveness", unit: "Per check", price: "Rs. 2.0" },
  { feature: "Face Match (1:1)", unit: "Per check", price: "Rs. 1.5" },
  { feature: "Document OCR", unit: "Per document", price: "Rs. 3.0" },
  { feature: "Video KYC Session", unit: "Per session", price: "Rs. 25.0" },
  { feature: "AML / PEP Screening", unit: "Per user", price: "Rs. 1.2" },
];

const enterpriseModules = [
  { module: "NID Verification API", commercial: "Usage based", availability: "On request" },
  { module: "Workflow Builder", commercial: "Included", availability: "Production plans" },
  { module: "On-premise Deployment", commercial: "Custom", availability: "Enterprise" },
  { module: "Zero-retention Mode", commercial: "Custom", availability: "Enterprise" },
];

const pricingFaqs = [
  {
    q: "What billing model do you follow?",
    a: "Billing is usage based. You pay for the verification events your organization runs each month.",
  },
  {
    q: "Can we negotiate pricing for large volume?",
    a: "Yes. Annual enterprise agreements include volume bands, committed-use pricing, and tailored service levels.",
  },
  {
    q: "Is there a minimum commitment?",
    a: "The sandbox has no commitment. Production and enterprise agreements are scoped around expected volume and deployment requirements.",
  },
  {
    q: "Do setup and onboarding cost extra?",
    a: "Standard onboarding is included. Dedicated infrastructure, migration, and custom policy work are scoped transparently before rollout.",
  },
];

const useCases = {
  "Identity verification": 5,
  "Document verification": 3,
  "Video KYC": 25,
  "Complete identity suite": 9,
};

export default function PricingPage() {
  const [useCase, setUseCase] = useState<keyof typeof useCases>("Identity verification");
  const [monthlyVolume, setMonthlyVolume] = useState(5000);
  const [openFaq, setOpenFaq] = useState(0);

  const estimatedMonthly = useCases[useCase] * monthlyVolume;
  const enterpriseVolume = monthlyVolume >= 25000;
  const sliderPercent = (monthlyVolume / 50000) * 100;

  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Navbar />

      <main>
        <section className="border-b border-[#D9E8F7] bg-white py-16 md:py-20 lg:py-24">
          <div className="mx-auto grid max-w-[1440px] gap-12 px-4 md:px-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(520px,1.1fr)] lg:items-end lg:px-[140px]">
            <div>
              <p className="mb-5 w-fit rounded border border-[#D9E8F7] bg-[#F7FBFF] px-2 py-1 font-mono text-[11px] uppercase tracking-[0.08em] text-[#64748B]">
                Usage-based pricing
              </p>
              <h1 className="max-w-[620px] text-[42px] font-normal leading-[1.05] tracking-normal text-[#00274A] md:text-[56px]">
                Predictable economics for identity at scale.
              </h1>
              <p className="mt-6 max-w-[590px] text-[17px] leading-[1.65] text-[#475569] md:text-[18px]">
                Start in sandbox, move to production when ready, and receive volume pricing as your verification workload grows.
              </p>
            </div>

            <div className="grid grid-cols-2 overflow-hidden border border-[#D9E8F7] bg-[#F7FBFF] sm:grid-cols-4">
              {[
                ["No setup fee", "Standard cloud"],
                ["500", "Monthly sandbox credits"],
                ["3-5 days", "Typical integration"],
                ["Custom", "On-premise and SLA"],
              ].map(([value, label]) => (
                <div key={label} className="border-b border-r border-[#D9E8F7] p-5 last:border-r-0 sm:border-b-0">
                  <p className="text-[20px] font-medium text-[#00274A]">{value}</p>
                  <p className="mt-2 text-[11px] leading-[1.45] text-[#64748B]">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 lg:py-24">
          <div className="mx-auto max-w-[1440px] px-4 md:px-8 lg:px-[140px]">
            <div className="mb-10 max-w-[680px]">
              <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.08em] text-[#007BE5]">
                Estimate your workload
              </p>
              <h2 className="text-[32px] font-normal leading-[1.12] text-[#00274A] md:text-[44px]">
                Model cost before you integrate.
              </h2>
            </div>

            <div className="grid overflow-hidden border border-[#D9E8F7] lg:grid-cols-[1.08fr_0.92fr]">
              <div className="p-6 md:p-9 lg:p-12">
                <div className="grid gap-7">
                  <label>
                    <span className="mb-2 block text-[13px] font-medium text-[#334155]">
                      Primary workflow
                    </span>
                    <span className="relative block">
                      <select
                        value={useCase}
                        onChange={(event) => setUseCase(event.target.value as keyof typeof useCases)}
                        className="h-12 w-full appearance-none border border-[#D9E8F7] bg-white px-4 text-[14px] text-[#00274A] outline-none transition focus:border-[#007BE5]"
                      >
                        {Object.keys(useCases).map((item) => (
                          <option key={item}>{item}</option>
                        ))}
                      </select>
                      <ChevronDown size={15} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#64748B]" />
                    </span>
                  </label>

                  <label>
                    <span className="mb-4 flex items-center justify-between gap-4">
                      <span className="text-[13px] font-medium text-[#334155]">
                        Monthly checks
                      </span>
                      <span className="font-mono text-[12px] text-[#007BE5]">
                        {monthlyVolume.toLocaleString()}
                      </span>
                    </span>
                    <input
                      type="range"
                      min={1000}
                      max={50000}
                      step={1000}
                      value={monthlyVolume}
                      onChange={(event) => setMonthlyVolume(Number(event.target.value))}
                      className="brand-slider w-full"
                      style={{
                        background: `linear-gradient(90deg,#007BE5 0%,#007BE5 ${sliderPercent}%,#D9E8F7 ${sliderPercent}%,#D9E8F7 100%)`,
                      }}
                    />
                    <span className="mt-3 flex justify-between font-mono text-[10px] text-[#94A3B8]">
                      <span>1K</span>
                      <span>25K</span>
                      <span>50K+</span>
                    </span>
                  </label>

                  <div className="flex items-start gap-3 border border-[#D9E8F7] bg-[#F7FBFF] p-4">
                    <ShieldCheck size={18} className="mt-0.5 shrink-0 text-[#007BE5]" />
                    <p className="text-[13px] leading-[1.55] text-[#475569]">
                      Estimates exclude taxes, custom data sources, dedicated infrastructure, and negotiated enterprise discounts.
                    </p>
                  </div>
                </div>
              </div>

              <div className="relative flex flex-col justify-between overflow-hidden border-t border-[#D9E8F7] bg-[#00274A] p-6 text-white md:p-9 lg:border-l lg:border-t-0 lg:p-12">
                <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(#54AFFF_1px,transparent_1px),linear-gradient(90deg,#54AFFF_1px,transparent_1px)] [background-size:32px_32px]" />
                <div className="relative z-10">
                  <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#BDE5FF]">
                    Indicative monthly estimate
                  </p>
                  <div className="mt-6 flex items-end gap-2">
                    <span className="text-[44px] font-normal leading-none md:text-[54px]">
                      {enterpriseVolume ? "Custom" : `Rs. ${estimatedMonthly.toLocaleString()}`}
                    </span>
                    {!enterpriseVolume && <span className="pb-1 text-[13px] text-white/55">/ month</span>}
                  </div>
                  <p className="mt-5 max-w-[420px] text-[14px] leading-[1.65] text-white/65">
                    {enterpriseVolume
                      ? "This workload qualifies for volume pricing, dedicated service levels, and architecture review."
                      : `${monthlyVolume.toLocaleString()} ${useCase.toLowerCase()} events at the public usage rate.`}
                  </p>
                </div>

                <Link
                  href="/book-demo"
                  className="relative z-10 mt-12 flex h-12 w-full items-center justify-between bg-white px-5 text-[14px] font-medium text-[#00274A] transition-colors hover:bg-[#BDE5FF]"
                >
                  {enterpriseVolume ? "Request enterprise pricing" : "Validate this estimate"}
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-[#D9E8F7] bg-[#F7FBFF] py-16 md:py-20 lg:py-24">
          <div className="mx-auto max-w-[1440px] px-4 md:px-8 lg:px-[140px]">
            <div className="mb-10 max-w-[680px]">
              <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.08em] text-[#007BE5]">
                Deployment paths
              </p>
              <h2 className="text-[32px] font-normal leading-[1.12] text-[#00274A] md:text-[44px]">
                Start small. Govern for production.
              </h2>
            </div>

            <div className="grid overflow-hidden border border-[#D9E8F7] bg-white lg:grid-cols-3">
              <Plan
                name="Sandbox"
                eyebrow="Build and test"
                description="For engineering teams validating capture flows, APIs, and decision logic."
                features={["500 monthly test credits", "API and SDK access", "Developer documentation", "Community support"]}
                cta="Start building"
                href="/dev"
              />
              <Plan
                name="Production"
                eyebrow="Usage based"
                description="For live identity workflows with predictable event pricing and implementation support."
                features={["Production API access", "Usage-based billing", "Workflow builder", "Email and chat support"]}
                cta="Talk to our team"
                href="/book-demo"
                highlighted
              />
              <Plan
                name="Enterprise"
                eyebrow="Governed infrastructure"
                description="For regulated organizations requiring data residency, controls, and contractual service levels."
                features={["Volume pricing", "Dedicated SLA", "On-premise deployment", "Zero-retention options"]}
                cta="Design your deployment"
                href="/book-demo"
              />
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 lg:py-24">
          <div className="mx-auto max-w-[1160px] px-4 md:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-20">
              <div>
                <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.08em] text-[#007BE5]">
                  Rate card
                </p>
                <h2 className="text-[32px] font-normal leading-[1.12] text-[#00274A] md:text-[40px]">
                  Transparent capability pricing.
                </h2>
                <p className="mt-5 text-[16px] leading-[1.65] text-[#64748B]">
                  Public rates provide a planning baseline. Committed enterprise volume receives tailored commercial terms.
                </p>
              </div>

              <div className="space-y-10">
                <PricingTable
                  columns={["Capability", "Billing unit", "Public rate"]}
                  rows={capabilityRates.map((row) => [row.feature, row.unit, row.price])}
                />
                <PricingTable
                  columns={["Enterprise module", "Commercial model", "Availability"]}
                  rows={enterpriseModules.map((row) => [row.module, row.commercial, row.availability])}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-[#D9E8F7] bg-white py-16 md:py-20">
          <div className="mx-auto max-w-[980px] px-4 md:px-8">
            <h2 className="text-[32px] font-normal text-[#00274A] md:text-[40px]">
              Pricing questions
            </h2>
            <div className="mt-8 border-t border-[#D9E8F7]">
              {pricingFaqs.map((faq, index) => {
                const open = openFaq === index;
                return (
                  <div key={faq.q} className="border-b border-[#D9E8F7]">
                    <button
                      type="button"
                      onClick={() => setOpenFaq(open ? -1 : index)}
                      className="flex min-h-16 w-full items-center justify-between gap-6 py-4 text-left"
                      aria-expanded={open}
                    >
                      <span className="text-[16px] font-medium text-[#00274A]">{faq.q}</span>
                      <Plus size={18} className={`shrink-0 text-[#64748B] transition-transform ${open ? "rotate-45" : ""}`} />
                    </button>
                    <div className={`grid transition-all ${open ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                      <div className="overflow-hidden">
                        <p className="max-w-[760px] text-[15px] leading-[1.7] text-[#64748B]">{faq.a}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <CTABanner />
      </main>

      <style>{`
        .brand-slider {
          appearance: none;
          height: 4px;
          outline: none;
        }
        .brand-slider::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 999px;
          background: #007BE5;
          border: 4px solid #ffffff;
          box-shadow: 0 0 0 1px #9CCAF4;
          cursor: pointer;
        }
        .brand-slider::-moz-range-thumb {
          width: 14px;
          height: 14px;
          border-radius: 999px;
          background: #007BE5;
          border: 4px solid #ffffff;
          box-shadow: 0 0 0 1px #9CCAF4;
          cursor: pointer;
        }
      `}</style>

      <Footer />
    </div>
  );
}

function Plan({
  name,
  eyebrow,
  description,
  features,
  cta,
  href,
  highlighted = false,
}: {
  name: string;
  eyebrow: string;
  description: string;
  features: string[];
  cta: string;
  href: string;
  highlighted?: boolean;
}) {
  return (
    <article className={`flex min-h-[430px] flex-col border-b border-[#D9E8F7] p-7 last:border-b-0 lg:border-b-0 lg:border-r lg:last:border-r-0 md:p-8 ${highlighted ? "bg-[#EBF5FF]" : "bg-white"}`}>
      <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#007BE5]">{eyebrow}</p>
      <h3 className="mt-4 text-[28px] font-normal text-[#00274A]">{name}</h3>
      <p className="mt-4 text-[14px] leading-[1.65] text-[#64748B]">{description}</p>
      <ul className="mt-8 space-y-4">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-[14px] text-[#334155]">
            <Check size={16} className="mt-0.5 shrink-0 text-[#007BE5]" />
            {feature}
          </li>
        ))}
      </ul>
      <Link href={href} className={`mt-auto flex h-11 items-center justify-between px-4 text-[14px] font-medium ${highlighted ? "bg-[#007BE5] text-white" : "border border-[#D9E8F7] text-[#00274A] hover:bg-[#F7FBFF]"}`}>
        {cta}
        <ArrowRight size={15} />
      </Link>
    </article>
  );
}

function PricingTable({ columns, rows }: { columns: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto border border-[#D9E8F7]">
      <table className="w-full min-w-[620px] border-collapse text-left">
        <thead>
          <tr className="border-b border-[#D9E8F7] bg-[#F7FBFF]">
            {columns.map((column) => (
              <th key={column} className="px-5 py-3.5 font-mono text-[10px] font-medium uppercase tracking-[0.08em] text-[#64748B]">
                {column}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row[0]} className="border-b border-[#E7EDF3] last:border-b-0">
              {row.map((cell, index) => (
                <td key={cell} className={`px-5 py-4 text-[14px] ${index === 0 ? "font-medium text-[#00274A]" : "text-[#64748B]"}`}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
