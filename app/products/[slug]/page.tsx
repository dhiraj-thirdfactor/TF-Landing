import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Shield, Zap, Box, Lock, Fingerprint, Activity, Server, FileText, Database } from "lucide-react";
import TopBar from "../../components/TopBar";
import Navbar from "../../components/Navbar";
import CTABanner from "../../components/CTABanner";
import Footer from "../../components/Footer";
import Testimonial from "../../components/Testimonial";

export function generateStaticParams() {
  return [
    { slug: 'verify' },
    { slug: 'shield' },
    { slug: 'comply' },
    { slug: 'access' },
    { slug: 'lens' },
    { slug: 'charter' },
    { slug: 'bedrock' }
  ];
}

const productsData: Record<string, any> = {
  verify: {
    name: "ThirdFactor Verify",
    label: "IDENTITY & DOCUMENT VERIFICATION",
    tagline: "Instant. Accurate. Built for emerging markets.",
    desc: "The core identity engine built specifically to understand complex local ID formats, unstructured documents, and diverse demographics at enterprise scale.",
    img: "/illustrations/image.png",
    benefits: [
      { title: "Optical Character Recognition", desc: "Proprietary OCR optimized specifically for Nepali, Hindi, and regional scripts with 99.8% accuracy.", icon: FileText },
      { title: "Multi-Document Support", desc: "Process citizenship cards, passports, driver's licenses, and voter IDs effortlessly.", icon: Database },
      { title: "Sub-second Latency", desc: "Verify users in under 800ms leveraging our localized edge computing infrastructure.", icon: Zap },
    ]
  },
  shield: {
    name: "ThirdFactor Shield",
    label: "FRAUD PREVENTION",
    tagline: "Stop presentation attacks instantly.",
    desc: "Enterprise-grade 3D liveness detection and deepfake prevention. Identify and stop sophisticated synthetic identity attacks before they enter your system.",
    img: "/illustrations/image2.png",
    benefits: [
      { title: "Passive 3D Liveness Check", desc: "Frictionless liveness detection that requires zero user action or complex head movements.", icon: Fingerprint },
      { title: "Deepfake & Injection Defense", desc: "Identify AI-generated synthetic faces, video injections, and sophisticated mask attacks.", icon: Shield },
      { title: "Device Fingerprinting", desc: "Block emulators, rooted devices, and suspicious network patterns at the very first touchpoint.", icon: Lock },
    ]
  },
  comply: {
    name: "ThirdFactor Comply",
    label: "COMPLIANCE & AML",
    tagline: "Stay ahead of regulatory shifts.",
    desc: "Automated AML screening and ongoing transaction monitoring designed to keep your financial institution compliant with evolving local and global laws.",
    img: "/illustrations/image3.png",
    benefits: [
      { title: "Global Watchlists", desc: "Screen instantly against OFAC, UN, Interpol, and localized PEP (Politically Exposed Persons) databases.", icon: Database },
      { title: "Ongoing Monitoring", desc: "Continuous risk scoring of your user base, updating profiles whenever global watchlists change.", icon: Activity },
      { title: "Automated Audits & Reporting", desc: "Generate exhaustive compliance reports and audit trails with a single click for regulators.", icon: FileText },
    ]
  },
  bedrock: {
    name: "ThirdFactor Bedrock",
    label: "INFRASTRUCTURE",
    tagline: "The foundation of identity.",
    desc: "Scalable foundational infrastructure designed to run global identity systems with absolute data sovereignty and enterprise-grade reliability.",
    img: "/illustrations/herosection.png",
    benefits: [
      { title: "On-Premise Deployment", desc: "Deploy entirely within your firewall. Keep 100% of your data on your own physical servers.", icon: Server },
      { title: "High Availability SLA", desc: "99.99% guaranteed uptime SLA built specifically for mission-critical financial onboarding pipelines.", icon: Activity },
      { title: "Microservices Architecture", desc: "Modular deployment allowing complete architectural flexibility and horizontal scalability.", icon: Box },
    ]
  }
};

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const slugId = resolvedParams.slug?.toLowerCase() || "verify";
  
  // Fallback to verify if product is not explicitly defined in our data store
  const product = productsData[slugId] || productsData.verify;

  return (
    <div style={{ background: "#ffffff", minHeight: "100vh" }}>
      <TopBar />
      <Navbar />

      <main>
        {/* Enterprise Hero Section */}
        <section style={{ background: "#ffffff", paddingTop: "120px", paddingBottom: "120px", borderBottom: "1px solid #E5E5E5" }}>
          <div style={{ maxWidth: "1441px", margin: "0 auto", paddingLeft: "140px", paddingRight: "140px" }}>
            <div style={{ display: "flex", gap: "72px", alignItems: "center" }}>
              
              {/* Left Copy */}
              <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "24px" }}>
                <div>
                  <span style={{ fontSize: "12px", fontWeight: 600, letterSpacing: "0.08em", color: "#A3A3A3", textTransform: "uppercase" }}>
                    {product.label}
                  </span>
                  <h1 style={{ fontFamily: "var(--font-geist-sans, system-ui)", fontSize: "56px", lineHeight: "1.1", letterSpacing: "-2px", color: "#00274A", margin: "16px 0", fontWeight: 400 }}>
                    {product.name}
                  </h1>
                  <p style={{ fontFamily: "var(--font-geist-sans, system-ui)", fontSize: "20px", color: "#00274A", margin: "0 0 8px 0", fontWeight: 400 }}>
                    {product.tagline}
                  </p>
                  <p style={{ fontFamily: "var(--font-geist-sans, system-ui)", fontSize: "16px", lineHeight: "1.6", color: "#525252", margin: 0, maxWidth: "480px" }}>
                    {product.desc}
                  </p>
                </div>
                
                <div style={{ display: "flex", gap: "16px", marginTop: "16px" }}>
                  <Link
                    href="/contact"
                    style={{
                      display: "inline-flex", alignItems: "center", justifyContent: "center",
                      height: "60px", padding: "0 32px", borderRadius: "100px",
                      background: "#007BE5", color: "#ffffff", fontSize: "15px", fontWeight: 500,
                      fontFamily: "var(--font-geist-sans, system-ui)", textDecoration: "none",
                      transition: "background 150ms"
                    }}
                  >
                    Contact Sales
                  </Link>
                  <Link
                    href="/dev"
                    style={{
                      display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "8px",
                      height: "60px", padding: "0 32px", borderRadius: "100px",
                      background: "#ffffff", border: "1px solid #E5E5E5", color: "#00274A",
                      fontSize: "15px", fontWeight: 500, fontFamily: "var(--font-geist-sans, system-ui)",
                      textDecoration: "none", transition: "background 150ms"
                    }}
                  >
                    Read Documentation <ArrowRight size={16} />
                  </Link>
                </div>
              </div>

              {/* Right Image Container */}
              <div style={{ width: "576px", height: "560px", background: "#F5F5F5", borderRadius: "16px", position: "relative", flexShrink: 0, overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #E5E5E5" }}>
                <Image src={product.img} alt={product.name} fill style={{ objectFit: "contain", padding: "40px", mixBlendMode: "multiply" }} priority />
              </div>
            </div>
          </div>
        </section>

        {/* Structured Features Grid */}
        <section style={{ background: "#ffffff", paddingTop: "120px", paddingBottom: "120px", borderBottom: "1px solid #E5E5E5" }}>
          <div style={{ maxWidth: "1441px", margin: "0 auto", paddingLeft: "140px", paddingRight: "140px" }}>
            <div style={{ marginBottom: "64px", maxWidth: "600px" }}>
              <h2 style={{ fontFamily: "var(--font-geist-sans, system-ui)", fontSize: "40px", lineHeight: "48px", letterSpacing: "-1.2px", color: "#00274A", margin: "0 0 16px 0", fontWeight: 400 }}>
                Engineered for absolute reliability.
              </h2>
              <p style={{ fontFamily: "var(--font-geist-sans, system-ui)", fontSize: "16px", lineHeight: "1.5", color: "#525252", margin: 0 }}>
                Our infrastructure is built from the ground up to ensure high availability, local data sovereignty, and uncompromised compliance standards.
              </p>
            </div>
            
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "48px" }}>
              {product.benefits.map((benefit: any, idx: number) => {
                const Icon = benefit.icon;
                return (
                  <div key={idx} style={{ display: "flex", flexDirection: "column" }}>
                    <div style={{ width: "48px", height: "48px", background: "#F0F7FF", border: "1px solid #EBF5FF", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "24px" }}>
                      <Icon color="#007BE5" strokeWidth={1.5} size={24} />
                    </div>
                    <h3 style={{ fontFamily: "var(--font-geist-sans, system-ui)", fontSize: "18px", color: "#00274A", fontWeight: 500, margin: "0 0 12px 0", letterSpacing: "-0.01em" }}>
                      {benefit.title}
                    </h3>
                    <p style={{ fontFamily: "var(--font-geist-sans, system-ui)", fontSize: "15px", lineHeight: "1.6", color: "#525252", margin: 0 }}>
                      {benefit.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Clean API Integration Section */}
        <section style={{ background: "#ffffff", paddingTop: "120px", paddingBottom: "120px", borderBottom: "1px solid #E5E5E5" }}>
          <div style={{ maxWidth: "1441px", margin: "0 auto", paddingLeft: "140px", paddingRight: "140px" }}>
            <div style={{ display: "flex", gap: "72px", alignItems: "center" }}>
              
              {/* White-mode clean code snippet UI */}
              <div style={{ width: "576px", flexShrink: 0, background: "#ffffff", border: "1px solid #E5E5E5", borderRadius: "16px", overflow: "hidden", boxShadow: "0 4px 24px rgba(0,0,0,0.02)" }}>
                <div style={{ display: "flex", gap: "8px", padding: "16px", borderBottom: "1px solid #E5E5E5", background: "#F9FAFB" }}>
                  <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#E5E5E5" }}></div>
                  <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#E5E5E5" }}></div>
                  <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: "#E5E5E5" }}></div>
                </div>
                <div style={{ padding: "32px", overflowX: "auto" }}>
                  <pre style={{ fontFamily: "monospace", fontSize: "13px", lineHeight: "1.6", color: "#00274A", margin: 0 }}>
                    <code style={{ color: "#007BE5" }}>import</code> {`{ ThirdFactor }`} <code style={{ color: "#007BE5" }}>from</code> <code style={{ color: "#00B050" }}>'thirdfactor-node'</code>;{`\n\n`}
                    <code style={{ color: "#007BE5" }}>const</code> tf = <code style={{ color: "#007BE5" }}>new</code> ThirdFactor(<code style={{ color: "#00B050" }}>'sk_live_...'</code>);{`\n\n`}
                    <code style={{ color: "#007BE5" }}>const</code> session = <code style={{ color: "#007BE5" }}>await</code> tf.sessions.create({`{\n`}
                    {`  `}type: <code style={{ color: "#00B050" }}>'${product.name.toLowerCase().replace('thirdfactor ', '')}'</code>,{`\n`}
                    {`  `}user_id: <code style={{ color: "#00B050" }}>'usr_12345'</code>,{`\n`}
                    {`  `}return_url: <code style={{ color: "#00B050" }}>'https://app.com/callback'</code>{`\n`}
                    {`}`});{`\n\n`}
                    <span style={{ color: "#A3A3A3" }}>// Returns an instant, secure flow URL</span>{`\n`}
                    console.log(session.url);
                  </pre>
                </div>
              </div>

              {/* Right Copy */}
              <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "24px" }}>
                <h2 style={{ fontFamily: "var(--font-geist-sans, system-ui)", fontSize: "40px", lineHeight: "48px", letterSpacing: "-1.2px", color: "#00274A", margin: 0, fontWeight: 400 }}>
                  Integrate in minutes,
                  <br />not months.
                </h2>
                <p style={{ fontFamily: "var(--font-geist-sans, system-ui)", fontSize: "16px", lineHeight: "1.6", color: "#525252", margin: 0 }}>
                  {product.name} is built developer-first. Our unified API allows you to initialize highly complex biometric and document workflows with just a few lines of code. We handle the heavy lifting, edge-case fallbacks, and local compliance.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginTop: "8px" }}>
                  {[
                    "RESTful APIs and Native SDKs for iOS, Android, and Web",
                    "Comprehensive Webhooks for instant state updates",
                    "Fully customizable UI themes to match your brand"
                  ].map((item, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                      <CheckCircle2 color="#007BE5" size={20} style={{ flexShrink: 0, marginTop: "2px" }} />
                      <span style={{ fontFamily: "var(--font-geist-sans, system-ui)", fontSize: "15px", color: "#525252", lineHeight: "1.4" }}>{item}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/dev"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "12px", marginTop: "16px",
                    color: "#007BE5", fontSize: "15px", fontWeight: 500, fontFamily: "var(--font-geist-sans, system-ui)", textDecoration: "none"
                  }}
                >
                  View API Documentation <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Testimonial />
        <CTABanner />
      </main>

      <Footer />
    </div>
  );
}
