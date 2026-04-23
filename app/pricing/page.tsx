"use client";

import { useState } from "react";
import { Box, ChevronDown, Link2, Plus, ScanFace, Shield, Upload } from "lucide-react";
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
    <div style={{ borderBottom: "1px solid #e5e7eb" }}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        style={{
          width: "100%",
          background: "transparent",
          border: "none",
          padding: "18px 0",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          textAlign: "left",
          cursor: "pointer",
        }}
      >
        <span style={{ fontSize: "15px", color: "#1f2937", fontWeight: 500 }}>{q}</span>
        <Plus
          size={17}
          style={{
            color: "#374151",
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
            transition: "transform 180ms ease",
          }}
        />
      </button>
      {open && (
        <p
          style={{
            margin: "0 0 18px",
            fontSize: "14px",
            lineHeight: 1.6,
            color: "#6b7280",
            maxWidth: "820px",
          }}
        >
          {a}
        </p>
      )}
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
    <>
      <TopBar />
      <Navbar />
      <main>
        <section className="section-block bg-white">
          <div className="content-wrap">
            <div
              style={{
                maxWidth: "1080px",
                width: "100%",
                margin: "0 auto",
                display: "flex",
                flexDirection: "column",
                gap: "44px",
                paddingTop: "24px",
              }}
            >
            <div style={{ textAlign: "center", maxWidth: "760px", margin: "0 auto" }}>
              <h1 style={{ margin: 0, fontSize: "46px", color: "#111827", fontWeight: 400, letterSpacing: "-0.02em" }}>
                Simple, Transparent Pricing
              </h1>
              <p style={{ margin: "14px 0 0", fontSize: "16px", lineHeight: 1.6, color: "#6b7280" }}>
                Build your verification stack one capability at a time. Pay only for what you use.
              </p>
            </div>

            <div className="grid gap-4 lg:grid-cols-[1.35fr_1fr_1fr]" style={{ alignItems: "stretch" }}>
              <div
                style={{
                  borderRadius: "14px",
                  padding: "26px 22px",
                  minHeight: "500px",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <label style={{ margin: 0, fontSize: "14px", color: "#374151", fontWeight: 500 }}>
                  What do you need?
                </label>
                <div style={{ position: "relative", marginTop: "10px" }}>
                  <select
                    value={need}
                    onChange={(e) => setNeed(e.target.value)}
                    style={{
                      width: "100%",
                      height: "44px",
                      borderRadius: "10px",
                      border: "none",
                      background: "#fff",
                      padding: "0 36px 0 12px",
                      fontSize: "14px",
                      color: "#111827",
                      appearance: "none",
                    }}
                  >
                    {needs.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                  <ChevronDown size={16} style={{ position: "absolute", right: "12px", top: "14px", color: "#6b7280", pointerEvents: "none" }} />
                </div>

                <label style={{ margin: "20px 0 0", fontSize: "14px", color: "#374151", fontWeight: 500 }}>
                  Do you require extra features?
                </label>
                <div style={{ position: "relative", marginTop: "10px" }}>
                  <select
                    value={extraFeatures}
                    onChange={(e) => setExtraFeatures(e.target.value)}
                    style={{
                      width: "100%",
                      height: "44px",
                      borderRadius: "10px",
                      border: "none",
                      background: "#fff",
                      padding: "0 36px 0 12px",
                      fontSize: "14px",
                      color: "#111827",
                      appearance: "none",
                    }}
                  >
                    {extras.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                  <ChevronDown size={16} style={{ position: "absolute", right: "12px", top: "14px", color: "#6b7280", pointerEvents: "none" }} />
                </div>

                <div style={{ marginTop: "22px" }}>
                  <p style={{ margin: 0, fontSize: "14px", color: "#374151", fontWeight: 500 }}>
                    What is your monthly volume of checks?
                  </p>
                  <p style={{ margin: "6px 0 0", fontSize: "13px", color: "#6b7280" }}>
                    {requiresSales ? "6k+ checks/month" : `0-6000 range (${monthlyVolume} selected)`}
                  </p>
                </div>
                <div style={{ marginTop: "12px", paddingTop: "6px" }}>
                  <input
                    className="premium-slider"
                    type="range"
                    min={0}
                    max={10000}
                    step={100}
                    value={monthlyVolume}
                    onChange={(e) => setMonthlyVolume(Number(e.target.value))}
                    style={{
                      width: "100%",
                      background: `linear-gradient(90deg, #2563eb 0%, #3b82f6 ${sliderPercent}%, #d1d5db ${sliderPercent}%, #d1d5db 100%)`,
                    }}
                  />
                </div>
                {requiresSales && (
                  <p style={{ margin: "8px 0 0", fontSize: "13px", color: "#1d4ed8", fontWeight: 500 }}>
                    Volume above 6,000 requires a sales plan.
                  </p>
                )}
              </div>

              <div
                style={{
                  borderRadius: "14px",
                  padding: "24px",
                  minHeight: "500px",
                  background: "#FAFAFA",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <p
                  style={{
                    margin: 0,
                    fontFamily: "var(--font-geist-sans, system-ui)",
                    fontWeight: 400,
                    fontSize: "18px",
                    lineHeight: "28px",
                    letterSpacing: "0",
                    color: "#111827",
                  }}
                >
                  Free
                </p>
                <p style={{ margin: "4px 0 0", fontSize: "48px", color: "#030712", lineHeight: 1, fontWeight: 600 }}>$0</p>
                <div style={{ marginTop: "44px" }}>
                  <p style={{ margin: "0 0 14px", color: "#374151", fontSize: "18px", fontWeight: 500 }}>Features</p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                    <p
                      style={{
                        margin: 0,
                        color: "#374151",
                        fontFamily: "var(--font-geist-sans, system-ui)",
                        fontWeight: 400,
                        fontSize: "14px",
                        lineHeight: "20px",
                        letterSpacing: "0",
                        display: "flex",
                        gap: "9px",
                      }}
                    >
                      <Box size={16} />500 credits/month
                    </p>
                    <p style={{ margin: 0, color: "#374151", fontSize: "14px", lineHeight: "20px", display: "flex", gap: "9px" }}><Upload size={16} />Auto-publish to package manager</p>
                    <p style={{ margin: 0, color: "#374151", fontSize: "14px", lineHeight: "20px", display: "flex", gap: "9px" }}><Link2 size={16} />Access to our OpenAPI toolchain</p>
                  </div>
                </div>
                <button style={{ marginTop: "auto", height: "46px", borderRadius: "999px", border: "1px solid #d1d5db", background: "#f9fafb", color: "#111827", fontWeight: 500, cursor: "pointer" }}>
                  Book a demo
                </button>
              </div>

              <div
                style={{
                  background: "#2563EB",
                  color: "#fff",
                  borderRadius: "14px",
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  position: "relative",
                  overflow: "hidden",
                  minHeight: "500px",
                }}
              >
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
                    width: "789.9578857421875px",
                    height: "175.29344177246094px",
                    opacity: 0.2,
                    pointerEvents: "none",
                  }}
                />
                <div style={{ position: "relative", zIndex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <p style={{ margin: 0, fontSize: "31px", opacity: 0.96, fontWeight: 500 }}>Business</p>
                    <span
                      style={{
                        fontSize: "11px",
                        color: "#1f2937",
                        background: "#FFF",
                        borderRadius: "6px",
                        padding: "3px 7px",
                        fontWeight: 600,
                      }}
                    >
                      MOST POPULAR
                    </span>
                  </div>
                  <p
                    style={{
                      margin: "10px 0 6px",
                      fontFamily: "var(--font-geist-sans, system-ui)",
                      fontWeight: 600,
                      fontSize: "40px",
                      lineHeight: "48px",
                      letterSpacing: "-1.2px",
                    }}
                  >
                    {requiresSales ? "Custom" : "Rs. 50"}
                  </p>
                  <p style={{ margin: 0, fontSize: "19px", lineHeight: 1.4, opacity: 0.9 }}>
                    {requiresSales ? "Talk to sales" : "/per verification"}
                  </p>
                  <div style={{ marginTop: "42px" }}>
                    <p style={{ margin: "0 0 14px", color: "#dbeafe", fontSize: "18px", fontWeight: 500 }}>Features</p>
                    <p style={{ margin: "0 0 12px", color: "#eff6ff", fontSize: "15px", display: "flex", gap: "9px" }}>
                      <Shield size={16} />Rs. 50 per verification up to 6,000 credits
                    </p>
                    <p style={{ margin: 0, color: "#eff6ff", fontSize: "15px", display: "flex", gap: "9px" }}>
                      <ScanFace size={16} />Includes access to all standard features
                    </p>
                  </div>
                </div>
                <button
                  style={{
                    marginTop: "18px",
                    height: "46px",
                    borderRadius: "999px",
                    border: "none",
                    background: "#fff",
                    color: "#1d4ed8",
                    fontWeight: 600,
                    cursor: "pointer",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  {requiresSales ? "Talk to sales" : "Book a demo"}
                </button>
              </div>
            </div>
            <style>{`
              .premium-slider {
                -webkit-appearance: none;
                appearance: none;
                height: 4px;
                border-radius: 999px;
                outline: none;
              }
              .premium-slider::-webkit-slider-thumb {
                -webkit-appearance: none;
                appearance: none;
                width: 18px;
                height: 18px;
                border-radius: 999px;
                background: #2563eb;
                border: 3px solid #ffffff;
                box-shadow: 0 2px 8px rgba(37, 99, 235, 0.28);
                cursor: pointer;
              }
              .premium-slider::-moz-range-track {
                height: 4px;
                border-radius: 999px;
                background: #d1d5db;
              }
              .premium-slider::-moz-range-thumb {
                width: 18px;
                height: 18px;
                border-radius: 999px;
                background: #2563eb;
                border: 3px solid #ffffff;
                box-shadow: 0 2px 8px rgba(37, 99, 235, 0.28);
                cursor: pointer;
              }
            `}</style>

            <section style={{ maxWidth: "980px" }}>
              <h2 style={{ margin: "0 0 14px", fontSize: "24px", fontWeight: 500, color: "#111827" }}>Per-Feature Pricing</h2>
              <div style={{ border: "1px solid #e5e7eb", borderRadius: "12px", overflow: "hidden" }}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1.4fr 1fr 1fr",
                    gap: "12px",
                    padding: "12px 16px",
                    background: "#f8fafc",
                    borderBottom: "1px solid #e5e7eb",
                  }}
                >
                  <span style={{ fontSize: "12px", color: "#64748b", fontWeight: 600 }}>Feature</span>
                  <span style={{ fontSize: "12px", color: "#64748b", fontWeight: 600 }}>Unit</span>
                  <span style={{ fontSize: "12px", color: "#64748b", fontWeight: 600 }}>Price</span>
                </div>
                {featureRows.map((row, idx) => (
                  <div
                    key={row.feature}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1.4fr 1fr 1fr",
                      gap: "12px",
                      padding: "14px 16px",
                      borderTop: idx === 0 ? "none" : "1px solid #f1f5f9",
                      background: idx % 2 === 0 ? "#fff" : "#fcfdff",
                    }}
                  >
                    <span style={{ fontSize: "14px", color: "#111827", fontWeight: 500 }}>{row.feature}</span>
                    <span style={{ fontSize: "14px", color: "#6b7280" }}>{row.unit}</span>
                    <span style={{ fontSize: "14px", color: "#111827" }}>{row.price}</span>
                  </div>
                ))}
              </div>
            </section>

            <section style={{ maxWidth: "980px" }}>
              <h2 style={{ margin: "0 0 14px", fontSize: "24px", fontWeight: 500, color: "#111827" }}>Premium Add-On Modules</h2>
              <div style={{ border: "1px solid #e5e7eb", borderRadius: "12px", overflow: "hidden" }}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1.4fr 1fr 1fr",
                    gap: "12px",
                    padding: "12px 16px",
                    background: "#f8fafc",
                    borderBottom: "1px solid #e5e7eb",
                  }}
                >
                  <span style={{ fontSize: "12px", color: "#64748b", fontWeight: 600 }}>Module</span>
                  <span style={{ fontSize: "12px", color: "#64748b", fontWeight: 600 }}>Setup</span>
                  <span style={{ fontSize: "12px", color: "#64748b", fontWeight: 600 }}>Notes</span>
                </div>
                {addOnRows.map((row, idx) => (
                  <div
                    key={row.module}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1.4fr 1fr 1fr",
                      gap: "12px",
                      padding: "14px 16px",
                      borderTop: idx === 0 ? "none" : "1px solid #f1f5f9",
                      background: idx % 2 === 0 ? "#fff" : "#fcfdff",
                    }}
                  >
                    <span style={{ fontSize: "14px", color: "#111827", fontWeight: 500 }}>{row.module}</span>
                    <span style={{ fontSize: "14px", color: "#6b7280" }}>{row.setup}</span>
                    <span style={{ fontSize: "14px", color: "#111827" }}>{row.notes}</span>
                  </div>
                ))}
              </div>
            </section>

            <section style={{ maxWidth: "980px" }}>
              <h2 style={{ margin: "0 0 14px", fontSize: "24px", fontWeight: 500, color: "#111827" }}>Reverse Face Search Storage</h2>
              <div style={{ border: "1px solid #e5e7eb", borderRadius: "12px", overflow: "hidden" }}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1.2fr 1fr 1fr",
                    gap: "12px",
                    padding: "12px 16px",
                    background: "#f8fafc",
                    borderBottom: "1px solid #e5e7eb",
                  }}
                >
                  <span style={{ fontSize: "12px", color: "#64748b", fontWeight: 600 }}>Volume</span>
                  <span style={{ fontSize: "12px", color: "#64748b", fontWeight: 600 }}>Retention</span>
                  <span style={{ fontSize: "12px", color: "#64748b", fontWeight: 600 }}>Rate</span>
                </div>
                {storageRows.map((row, idx) => (
                  <div
                    key={row.volume}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1.2fr 1fr 1fr",
                      gap: "12px",
                      padding: "14px 16px",
                      borderTop: idx === 0 ? "none" : "1px solid #f1f5f9",
                      background: idx % 2 === 0 ? "#fff" : "#fcfdff",
                    }}
                  >
                    <span style={{ fontSize: "14px", color: "#111827", fontWeight: 500 }}>{row.volume}</span>
                    <span style={{ fontSize: "14px", color: "#6b7280" }}>{row.retention}</span>
                    <span style={{ fontSize: "14px", color: "#111827" }}>{row.rate}</span>
                  </div>
                ))}
              </div>
            </section>

            <section style={{ maxWidth: "980px" }}>
              <h2 style={{ margin: "0 0 10px", fontSize: "24px", fontWeight: 500, color: "#111827" }}>Frequently Asked Questions</h2>
              <p style={{ margin: "0 0 12px", fontSize: "14px", color: "#6b7280" }}>
                Pricing questions from teams evaluating production rollout.
              </p>
              <div style={{ borderTop: "1px solid #e5e7eb" }}>
                {pricingFaqs.map((faq) => (
                  <FAQRow key={faq.q} q={faq.q} a={faq.a} />
                ))}
              </div>
            </section>
          </div>
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
