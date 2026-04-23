import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Shield, Zap, Box, Lock, Fingerprint, Activity, Server, FileText, Database } from "lucide-react";
import TopBar from "../../components/TopBar";
import Navbar from "../../components/Navbar";
import CTABanner from "../../components/CTABanner";
import Footer from "../../components/Footer";

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
    label: "IDENTITY VERIFICATION",
    tagline: "Instant. Accurate. Unbiased.",
    desc: "The core identity and document verification engine built specifically for emerging market demographics and complex local ID formats.",
    color: "#007BE5",
    bgColor: "#E6F2FF",
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
    tagline: "Absolute Fraud Prevention.",
    desc: "Enterprise-grade 3D liveness detection and deepfake prevention. Stop sophisticated presentation attacks before they enter your system.",
    color: "#00274A",
    bgColor: "#E6E9EC",
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
    tagline: "Stay ahead of regulations.",
    desc: "Automated AML screening and ongoing transaction monitoring designed to keep your financial institution compliant with evolving local and global laws.",
    color: "#00B050",
    bgColor: "#E6F7ED",
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
    color: "#222222",
    bgColor: "#E9E9E9",
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
    <div className="bg-white min-h-screen">
      <TopBar />
      <Navbar />

      <main>
        {/* Product Hero Section */}
        <section className="px-6 py-24 max-w-[1200px] mx-auto grid lg:grid-cols-[1fr_500px] gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-8" style={{ backgroundColor: product.bgColor }}>
              <div className="w-2 h-2 rounded-full" style={{ backgroundColor: product.color }}></div>
              <span className="text-[12px] font-semibold tracking-widest uppercase" style={{ color: product.color }}>
                {product.label}
              </span>
            </div>
            
            <h1 
              className="text-[44px] md:text-[64px] text-[#00274A] tracking-[-0.03em] leading-[1.05] mb-6 font-medium"
              style={{ fontFamily: "var(--font-geist-sans, system-ui)" }}
            >
              {product.name}
            </h1>
            
            <p className="text-[24px] text-[#007BE5] mb-4 tracking-[-0.01em]" style={{ fontFamily: "var(--font-geist-sans, system-ui)", fontWeight: 400 }}>
              {product.tagline}
            </p>
            
            <p className="text-[18px] text-[#525252] leading-relaxed max-w-[540px] mb-10">
              {product.desc}
            </p>
            
            <div className="flex flex-wrap items-center gap-4">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-white text-[15px] font-medium transition-all shadow-sm hover:shadow-md"
                style={{ backgroundColor: product.color }}
              >
                Request Access
              </Link>
              <Link 
                href="/dev" 
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-white border border-[#E5E5E5] text-[#00274A] text-[15px] font-medium hover:bg-neutral-50 transition-colors"
              >
                Read Documentation
              </Link>
            </div>
          </div>
          
          <div className="w-full aspect-square rounded-3xl relative flex items-center justify-center p-8 bg-[#FAFAFA] border border-[#E5E5E5]">
            <div className="absolute inset-0 opacity-20 rounded-3xl" style={{ backgroundImage: `radial-gradient(${product.color} 1px, transparent 1px)`, backgroundSize: '24px 24px' }}></div>
            <div className="relative w-full h-full max-w-[400px] max-h-[400px]">
              <Image 
                src={product.img} 
                alt={product.name} 
                fill 
                className="object-contain mix-blend-multiply drop-shadow-xl"
                priority
              />
            </div>
          </div>
        </section>

        {/* Feature Highlights Grid */}
        <section className="bg-[#FAFAFA] border-y border-[#E5E5E5] py-24 px-6">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-[32px] text-[#00274A] tracking-[-0.02em] mb-16 text-center" style={{ fontFamily: "var(--font-geist-sans, system-ui)", fontWeight: 400 }}>
              Engineered for absolute reliability.
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {product.benefits.map((benefit: any, idx: number) => {
                const Icon = benefit.icon;
                return (
                  <div key={idx} className="bg-white p-8 rounded-2xl border border-[#E5E5E5] shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-full h-1 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" style={{ backgroundColor: product.color }}></div>
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6" style={{ backgroundColor: product.bgColor, color: product.color }}>
                      <Icon strokeWidth={1.5} size={28} />
                    </div>
                    <h3 className="text-[20px] text-[#00274A] font-medium mb-3 tracking-tight">{benefit.title}</h3>
                    <p className="text-[15px] text-[#525252] leading-relaxed">
                      {benefit.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* API Integration Snippet */}
        <section className="py-24 px-6">
          <div className="max-w-[1200px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <div className="bg-[#0A0D12] rounded-2xl p-6 shadow-2xl border border-[#222]">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
                <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
              </div>
              <pre className="text-sm font-mono text-gray-300 overflow-x-auto">
                <code className="text-[#54AFFF]">import</code> {`{ ThirdFactor }`} <code className="text-[#54AFFF]">from</code> <code className="text-[#BDE5FF]">'thirdfactor-node'</code>;{`\n\n`}
                <code className="text-[#54AFFF]">const</code> tf = <code className="text-[#54AFFF]">new</code> ThirdFactor(<code className="text-[#BDE5FF]">'sk_live_...'</code>);{`\n\n`}
                <code className="text-[#54AFFF]">const</code> session = <code className="text-[#54AFFF]">await</code> tf.sessions.create({`{\n`}
                {`  `}type: <code className="text-[#BDE5FF]">'${product.name.toLowerCase().replace('thirdfactor ', '')}'</code>,{`\n`}
                {`  `}user_id: <code className="text-[#BDE5FF]">'usr_12345'</code>,{`\n`}
                {`  `}return_url: <code className="text-[#BDE5FF]">'https://app.com/callback'</code>{`\n`}
                {`}`});{`\n\n`}
                <span className="text-gray-500">// Returns an instant, secure flow URL</span>{`\n`}
                console.log(session.url);
              </pre>
            </div>
            
            <div>
              <h2 className="text-[32px] text-[#00274A] tracking-[-0.02em] mb-6" style={{ fontFamily: "var(--font-geist-sans, system-ui)", fontWeight: 400 }}>
                Integrate in minutes, not months.
              </h2>
              <p className="text-[16px] text-[#525252] leading-relaxed mb-8">
                {product.name} is built developer-first. Our unified API allows you to initialize highly complex biometric and document workflows with just a few lines of code. We handle the heavy lifting, edge-case fallbacks, and local compliance.
              </p>
              
              <ul className="flex flex-col gap-4 mb-8">
                {[
                  "RESTful APIs and Native SDKs for iOS, Android, and Web",
                  "Comprehensive Webhooks for instant state updates",
                  "Fully customizable UI themes to match your brand"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-[#00B050]" size={20} />
                    <span className="text-[15px] text-[#525252]">{item}</span>
                  </li>
                ))}
              </ul>
              
              <Link href="/dev" className="inline-flex items-center gap-2 text-[15px] font-medium hover:underline" style={{ color: product.color }}>
                View Full API Reference <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>

        <CTABanner />
      </main>

      <Footer />
    </div>
  );
}
