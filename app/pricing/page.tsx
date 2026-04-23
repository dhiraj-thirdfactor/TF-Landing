"use client";

import { useState } from "react";
import { Box, ChevronDown, Link2, Plus, ScanFace, Shield, Upload, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import CTABanner from "../components/CTABanner";
import Footer from "../components/Footer";

const featureRows = [
  { feature: "Face Liveness", unit: "Per check", price: "Rs. 2.0" },
  { feature: "Face Match (1:1)", unit: "Per check", price: "Rs. 1.5" },
  { feature: "Document OCR", unit: "Per document", price: "Rs. 3.0" },
  { feature: "Video KYC Session", unit: "Per session", price: "Rs. 25.0" },
  { feature: "AML / PEP Screening", unit: "Per user", price: "Rs. 1.2" },
];

const addOnRows = [
  { module: "NID Verification API", setup: "Rs. 0", notes: "On request" },
  { module: "Workflow Builder", setup: "Rs. 0", notes: "Included" },
  { module: "On-Prem Deployment", setup: "Rs. 0", notes: "Custom quote" },
];

const storageRows = [
  { volume: "1-10K records", retention: "30 days", rate: "Free" },
  { volume: "10K-100K records", retention: "90 days", rate: "Rs. 3,000 / month" },
  { volume: "100K+ records", retention: "180 days", rate: "Custom" },
];

const pricingFaqs = [
  {
    q: "What billing model do you follow?",
    a: "Billing is usage based. You only pay for the verification events you run each month.",
  },
  {
    q: "Can we negotiate pricing for large volume?",
    a: "Yes. We support tiered enterprise discounts and annual contracts for larger workloads.",
  },
  {
    q: "Is there a minimum commitment?",
    a: "No strict minimum for standard plans. Enterprise deployments may include a monthly baseline.",
  },
  {
    q: "Do setup and onboarding cost extra?",
    a: "Standard onboarding is included. Complex workflows or custom infrastructure can be scoped separately.",
  },
];

function FAQRow({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-neutral-200">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="w-full h-16 bg-transparent border-none p-0 flex items-center justify-between text-left cursor-pointer group"
      >
        <span className={`font-sans text-[16px] leading-[1.4] transition-colors ${open ? 'font-semibold text-[#00274A]' : 'font-normal text-[#00274A]'}`}>
          {q}
        </span>
        <Plus
          size={18}
          className={`shrink-0 text-neutral-500 transition-transform duration-300 ease-in-out ${open ? "rotate-45 text-neutral-900" : "rotate-0"}`}
        />
      </button>
      <div className={`grid transition-all duration-300 ease-in-out ${open ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0 pb-0"}`}>
        <div className="overflow-hidden">
          <p className="font-sans font-normal text-[15px] leading-[1.7] text-[#525252] m-0 max-w-[820px]">
            {a}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function PricingPage() {
  const [need, setNeed] = useState("Identity Verification");
  const [extraFeatures, setExtraFeatures] = useState("No extra features");
  const [monthlyVolume, setMonthlyVolume] = useState(3200);
  const needs = ["Identity Verification", "Document Verification", "Video KYC", "Complete Suite"];
  const extras = ["No extra features", "Activeness + IP Analysis", "Proof of Address", "White Label"];
  const requiresSales = monthlyVolume > 6000;
  const sliderPercent = (monthlyVolume / 10000) * 100;

  return (
    <div className="bg-white min-h-screen">
      <TopBar />
      <Navbar />
      
      <main className="pb-0">
        {/* Header Section */}
        <section className="pt-24 pb-16 px-6 bg-white">
          <div className="max-w-[760px] mx-auto text-center flex flex-col items-center">
            <span className="text-[12px] font-semibold tracking-wider text-[#007BE5] uppercase bg-[#F0F7FF] px-3 py-1 rounded-full mb-6">
              Pricing Plans
            </span>
            <h1 
              className="text-[48px] md:text-[56px] text-[#00274A] tracking-[-0.02em] leading-[1.1] mb-6"
              style={{ fontFamily: "var(--font-geist-sans, system-ui)", fontWeight: 400 }}
            >
              Simple, Transparent Pricing
            </h1>
            <p 
              className="text-[18px] text-[#525252] leading-relaxed max-w-[600px]"
              style={{ fontFamily: "var(--font-geist-sans, system-ui)", fontWeight: 400 }}
            >
              Build your verification stack one capability at a time. Pay only for what you use, with zero hidden fees.
            </p>
          </div>
        </section>

        {/* Pricing Calculator & Cards */}
        <section className="px-6 mb-24 bg-white">
          <div className="max-w-[1200px] mx-auto">
            <div className="grid gap-6 lg:grid-cols-[1.2fr_1fr_1fr] items-stretch">
              
              {/* Calculator Panel */}
              <div className="bg-white border border-[#E5E5E5] rounded-[16px] p-8 flex flex-col h-full relative">
                <h3 
                  className="text-[18px] text-[#00274A] mb-8 tracking-tight"
                  style={{ fontFamily: "var(--font-geist-sans, system-ui)", fontWeight: 500 }}
                >
                  Customize your estimate
                </h3>
                
                <div className="flex flex-col gap-6 flex-1">
                  {/* Select 1 */}
                  <div>
                    <label className="block text-[14px] font-medium text-[#00274A] mb-2" style={{ fontFamily: "var(--font-geist-sans, system-ui)" }}>
                      What do you need?
                    </label>
                    <div className="relative">
                      <select
                        value={need}
                        onChange={(e) => setNeed(e.target.value)}
                        className="w-full h-[48px] bg-white border border-[#E5E5E5] rounded-xl px-4 text-[14px] text-[#272727] appearance-none focus:outline-none focus:ring-1 focus:ring-[#007BE5] focus:border-[#007BE5] transition-all cursor-pointer shadow-sm"
                      >
                        {needs.map((item) => (
                          <option key={item} value={item}>{item}</option>
                        ))}
                      </select>
                      <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none" />
                    </div>
                  </div>

                  {/* Select 2 */}
                  <div>
                    <label className="block text-[14px] font-medium text-[#00274A] mb-2" style={{ fontFamily: "var(--font-geist-sans, system-ui)" }}>
                      Do you require extra features?
                    </label>
                    <div className="relative">
                      <select
                        value={extraFeatures}
                        onChange={(e) => setExtraFeatures(e.target.value)}
                        className="w-full h-[48px] bg-white border border-[#E5E5E5] rounded-xl px-4 text-[14px] text-[#272727] appearance-none focus:outline-none focus:ring-1 focus:ring-[#007BE5] focus:border-[#007BE5] transition-all cursor-pointer shadow-sm"
                      >
                        {extras.map((item) => (
                          <option key={item} value={item}>{item}</option>
                        ))}
                      </select>
                      <ChevronDown size={16} className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none" />
                    </div>
                  </div>

                  {/* Slider */}
                  <div className="mt-4">
                    <div className="flex justify-between items-end mb-4">
                      <label className="block text-[14px] font-medium text-[#00274A]" style={{ fontFamily: "var(--font-geist-sans, system-ui)" }}>
                        Monthly volume of checks
                      </label>
                      <span className={`text-[12px] font-semibold px-2 py-1 rounded-md ${requiresSales ? 'bg-[#F0F7FF] text-[#007BE5]' : 'bg-neutral-100 text-[#525252]'}`}>
                        {requiresSales ? "6k+ checks" : `${monthlyVolume} checks`}
                      </span>
                    </div>
                    
                    <div className="relative pt-2 pb-6">
                      <input
                        className="brand-slider w-full"
                        type="range"
                        min={0}
                        max={10000}
                        step={100}
                        value={monthlyVolume}
                        onChange={(e) => setMonthlyVolume(Number(e.target.value))}
                        style={{
                          background: `linear-gradient(90deg, #007BE5 0%, #007BE5 ${sliderPercent}%, #E5E5E5 ${sliderPercent}%, #E5E5E5 100%)`,
                        }}
                      />
                      <div className="flex justify-between text-[11px] text-[#A3A3A3] font-medium mt-3 px-1">
                        <span>0</span>
                        <span>5k</span>
                        <span>10k+</span>
                      </div>
                    </div>
                    
                    {requiresSales && (
                      <div className="bg-[#F0F7FF] border border-[#A9D5F5] rounded-lg p-3 flex items-start gap-2">
                        <Shield size={16} className="text-[#007BE5] shrink-0 mt-0.5" />
                        <p className="text-[13px] text-[#00274A] leading-tight">
                          Volume above 6,000 requires a dedicated enterprise plan. Please contact our sales team.
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Free Plan Card */}
              <div className="bg-[#FAFAFA] border border-[#E5E5E5] rounded-[16px] p-8 flex flex-col h-full relative hover:border-[#D4D4D4] transition-colors">
                <h3 className="text-[18px] text-[#00274A] mb-2" style={{ fontFamily: "var(--font-geist-sans, system-ui)", fontWeight: 500 }}>Sandbox</h3>
                <div className="flex items-baseline gap-1 mb-8">
                  <span className="text-[48px] text-[#00274A] tracking-[-0.02em] leading-none" style={{ fontFamily: "var(--font-geist-sans, system-ui)", fontWeight: 500 }}>$0</span>
                  <span className="text-[14px] text-[#525252]">/forever</span>
                </div>
                
                <div className="flex-1">
                  <p className="text-[14px] text-[#00274A] mb-4" style={{ fontFamily: "var(--font-geist-sans, system-ui)", fontWeight: 500 }}>Included Features</p>
                  <ul className="flex flex-col gap-4">
                    <li className="flex items-start gap-3 text-[15px] text-[#525252]">
                      <CheckCircle2 size={18} className="text-[#007BE5] shrink-0" />
                      <span><strong>500 credits</strong> per month</span>
                    </li>
                    <li className="flex items-start gap-3 text-[15px] text-[#525252]">
                      <CheckCircle2 size={18} className="text-[#007BE5] shrink-0" />
                      <span>Access to testing environments</span>
                    </li>
                    <li className="flex items-start gap-3 text-[15px] text-[#525252]">
                      <CheckCircle2 size={18} className="text-[#007BE5] shrink-0" />
                      <span>Community support via Slack</span>
                    </li>
                  </ul>
                </div>
                
                <button className="w-full mt-8 h-[48px] rounded-[100px] border border-[#E5E5E5] bg-transparent hover:bg-white text-[#222222] text-[14px] font-medium transition-colors">
                  Start Building Free
                </button>
              </div>

              {/* Pro Plan Card */}
              <div className="bg-[#2563EB] rounded-[16px] p-8 flex flex-col h-full relative overflow-hidden shadow-sm">
                
                <Image
                  src="/illustrations/pricingblob.png"
                  alt=""
                  width={790}
                  height={175}
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    left: "50%",
                    bottom: 0,
                    transform: "translateX(-50%) rotate(0deg)",
                    width: "789.95px",
                    height: "175.29px",
                    opacity: 0.15,
                    pointerEvents: "none",
                  }}
                />

                <div className="flex justify-between items-center mb-2 relative z-10">
                  <h3 className="text-[18px] font-medium text-white" style={{ fontFamily: "var(--font-geist-sans, system-ui)" }}>Business</h3>
                  <span className="text-[10px] font-bold tracking-wider text-[#007BE5] bg-white px-2 py-1 rounded-[4px] uppercase">
                    Most Popular
                  </span>
                </div>
                
                <div className="flex items-baseline gap-1 mb-8 relative z-10">
                  <span className="text-[48px] text-white tracking-[-0.02em] leading-none" style={{ fontFamily: "var(--font-geist-sans, system-ui)", fontWeight: 500 }}>
                    {requiresSales ? "Custom" : "Rs. 50"}
                  </span>
                  {!requiresSales && <span className="text-[14px] text-blue-200">/verify</span>}
                </div>
                
                <div className="flex-1 relative z-10">
                  <p className="text-[14px] text-white mb-4" style={{ fontFamily: "var(--font-geist-sans, system-ui)", fontWeight: 500 }}>Everything in Free, plus</p>
                  <ul className="flex flex-col gap-4">
                    <li className="flex items-start gap-3 text-[15px] text-white">
                      <CheckCircle2 size={18} className="text-white shrink-0" />
                      <span>{requiresSales ? "Volume discounts & SLAs" : "Rs. 50 per verification up to 6k"}</span>
                    </li>
                    <li className="flex items-start gap-3 text-[15px] text-white">
                      <CheckCircle2 size={18} className="text-white shrink-0" />
                      <span>Full production API access</span>
                    </li>
                    <li className="flex items-start gap-3 text-[15px] text-white">
                      <CheckCircle2 size={18} className="text-white shrink-0" />
                      <span>Dedicated email & chat support</span>
                    </li>
                  </ul>
                </div>
                
                <button className={`w-full mt-8 h-[48px] rounded-[100px] text-[14px] font-medium transition-colors relative z-10 ${
                  requiresSales 
                    ? "bg-white text-[#2563EB] hover:bg-neutral-50" 
                    : "bg-[#007BE5] text-white hover:bg-[#0069C2] border border-[#007BE5]"
                }`}>
                  {requiresSales ? "Talk to Sales" : "Upgrade to Business"}
                </button>
              </div>

            </div>
          </div>
        </section>

        {/* Detailed Data Tables */}
        <section className="px-6 py-24 bg-white border-t border-[#E5E5E5]">
          <div className="max-w-[980px] mx-auto flex flex-col gap-16">
            
            {/* Table 1 */}
            <div>
              <h2 className="text-[24px] text-[#00274A] mb-6 tracking-tight" style={{ fontFamily: "var(--font-geist-sans, system-ui)", fontWeight: 500 }}>Per-Feature Pricing</h2>
              <div className="border border-[#E5E5E5] rounded-[12px] overflow-hidden">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#FAFAFA] border-b border-[#E5E5E5]">
                      <th className="px-6 py-4 text-[13px] font-medium text-[#525252] uppercase tracking-wide">Feature</th>
                      <th className="px-6 py-4 text-[13px] font-medium text-[#525252] uppercase tracking-wide">Unit</th>
                      <th className="px-6 py-4 text-[13px] font-medium text-[#525252] uppercase tracking-wide">Price</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E5E5E5] bg-white">
                    {featureRows.map((row) => (
                      <tr key={row.feature} className="hover:bg-[#FAFAFA] transition-colors">
                        <td className="px-6 py-4 text-[15px] text-[#00274A] font-medium">{row.feature}</td>
                        <td className="px-6 py-4 text-[15px] text-[#525252]">{row.unit}</td>
                        <td className="px-6 py-4 text-[15px] text-[#00274A]">{row.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Table 2 */}
            <div>
              <h2 className="text-[24px] text-[#00274A] mb-6 tracking-tight" style={{ fontFamily: "var(--font-geist-sans, system-ui)", fontWeight: 500 }}>Premium Add-On Modules</h2>
              <div className="border border-[#E5E5E5] rounded-[12px] overflow-hidden">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#FAFAFA] border-b border-[#E5E5E5]">
                      <th className="px-6 py-4 text-[13px] font-medium text-[#525252] uppercase tracking-wide">Module</th>
                      <th className="px-6 py-4 text-[13px] font-medium text-[#525252] uppercase tracking-wide">Setup</th>
                      <th className="px-6 py-4 text-[13px] font-medium text-[#525252] uppercase tracking-wide">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E5E5E5] bg-white">
                    {addOnRows.map((row) => (
                      <tr key={row.module} className="hover:bg-[#FAFAFA] transition-colors">
                        <td className="px-6 py-4 text-[15px] text-[#00274A] font-medium">{row.module}</td>
                        <td className="px-6 py-4 text-[15px] text-[#525252]">{row.setup}</td>
                        <td className="px-6 py-4 text-[15px] text-[#00274A]">{row.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Table 3 */}
            <div>
              <h2 className="text-[24px] text-[#00274A] mb-6 tracking-tight" style={{ fontFamily: "var(--font-geist-sans, system-ui)", fontWeight: 500 }}>Reverse Face Search Storage</h2>
              <div className="border border-[#E5E5E5] rounded-[12px] overflow-hidden">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#FAFAFA] border-b border-[#E5E5E5]">
                      <th className="px-6 py-4 text-[13px] font-medium text-[#525252] uppercase tracking-wide">Volume</th>
                      <th className="px-6 py-4 text-[13px] font-medium text-[#525252] uppercase tracking-wide">Retention</th>
                      <th className="px-6 py-4 text-[13px] font-medium text-[#525252] uppercase tracking-wide">Rate</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E5E5E5] bg-white">
                    {storageRows.map((row) => (
                      <tr key={row.volume} className="hover:bg-[#FAFAFA] transition-colors">
                        <td className="px-6 py-4 text-[15px] text-[#00274A] font-medium">{row.volume}</td>
                        <td className="px-6 py-4 text-[15px] text-[#525252]">{row.retention}</td>
                        <td className="px-6 py-4 text-[15px] text-[#00274A]">{row.rate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* FAQs */}
            <div className="pt-8">
              <h2 className="text-[32px] text-[#00274A] tracking-tight mb-2" style={{ fontFamily: "var(--font-geist-sans, system-ui)", fontWeight: 400 }}>Frequently Asked Questions</h2>
              <p className="text-[16px] text-[#525252] mb-8" style={{ fontFamily: "var(--font-geist-sans, system-ui)" }}>
                Pricing questions from teams evaluating production rollout.
              </p>
              <div className="border-t border-[#E5E5E5]">
                {pricingFaqs.map((faq) => (
                  <FAQRow key={faq.q} q={faq.q} a={faq.a} />
                ))}
              </div>
            </div>

          </div>
        </section>

        <CTABanner />

      </main>

      {/* Global styles for the custom slider */}
      <style>{`
        .brand-slider {
          -webkit-appearance: none;
          appearance: none;
          height: 4px;
          border-radius: 999px;
          outline: none;
          background: #E5E5E5;
        }
        .brand-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 999px;
          background: #007BE5;
          border: 3px solid #ffffff;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          cursor: pointer;
          transition: transform 0.1s;
        }
        .brand-slider::-webkit-slider-thumb:hover {
          transform: scale(1.1);
        }
        .brand-slider::-moz-range-track {
          height: 4px;
          border-radius: 999px;
          background: #E5E5E5;
        }
        .brand-slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 999px;
          background: #007BE5;
          border: 3px solid #ffffff;
          box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          cursor: pointer;
          transition: transform 0.1s;
        }
        .brand-slider::-moz-range-thumb:hover {
          transform: scale(1.1);
        }
      `}</style>
      
      <Footer />
    </div>
  );
}
