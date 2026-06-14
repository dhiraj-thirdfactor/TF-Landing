import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Shield,
  Zap,
  Box,
  Lock,
  Fingerprint,
  Activity,
  Server,
  FileText,
  Database,
  type LucideIcon,
} from "lucide-react";

import TopBar from "../../components/TopBar";
import Navbar from "../../components/Navbar";
import CTABanner from "../../components/CTABanner";
import Footer from "../../components/Footer";
import Testimonial from "../../components/Testimonial";

type ProductBenefit = {
  title: string;
  desc: string;
  icon: LucideIcon;
};

type ProductData = {
  name: string;
  label: string;
  tagline: string;
  desc: string;
  img: string;
  benefits: ProductBenefit[];
};

const productsData: Record<string, ProductData> = {
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
  access: {
    name: "ThirdFactor Access",
    label: "AUTHENTICATION & ACCESS",
    tagline: "Let trusted users move without friction.",
    desc: "Step-up authentication and secure account access flows for high-risk sessions, password resets, and sensitive actions.",
    img: "/illustrations/image.png",
    benefits: [
      { title: "Adaptive Step-Up", desc: "Trigger liveness, document, or OTP challenges only when risk signals require extra assurance.", icon: Lock },
      { title: "Account Recovery", desc: "Recover users safely with identity proofing flows that reduce support tickets and social engineering risk.", icon: Fingerprint },
      { title: "Session Risk Signals", desc: "Combine device, location, and biometric checks before users perform sensitive actions.", icon: Activity },
    ]
  },
  lens: {
    name: "ThirdFactor Lens",
    label: "RISK INTELLIGENCE",
    tagline: "See risk patterns before they become losses.",
    desc: "Analytics and risk scoring for identity operations, fraud teams, and compliance leaders who need clear decisions, not noisy dashboards.",
    img: "/illustrations/image2.png",
    benefits: [
      { title: "Risk Scoring", desc: "Unify document, biometric, device, and behavioral signals into explainable customer-level scores.", icon: Activity },
      { title: "Operations Visibility", desc: "Monitor approval rates, rejection reasons, review queues, and fraud trends from one place.", icon: Database },
      { title: "Decision Insights", desc: "Trace every decision back to the signals and policies that shaped it for faster review.", icon: FileText },
    ]
  },
  charter: {
    name: "ThirdFactor Charter",
    label: "POLICY ORCHESTRATION",
    tagline: "Turn compliance rules into live workflows.",
    desc: "A policy builder for identity teams that need to change onboarding logic, review paths, and risk thresholds without long engineering cycles.",
    img: "/illustrations/image3.png",
    benefits: [
      { title: "Workflow Rules", desc: "Define document, liveness, KYB, AML, and manual review paths with clear policy controls.", icon: Box },
      { title: "Change Control", desc: "Version policies, test changes, and keep an audit trail for regulators and internal governance.", icon: Shield },
      { title: "Role-Based Review", desc: "Route exceptions to the right operations or compliance team based on risk, region, and account type.", icon: Server },
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

export function generateStaticParams() {
  return Object.keys(productsData).map((slug) => ({ slug }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const resolvedParams = await params;
  const slugId = resolvedParams.slug?.toLowerCase() || "verify";
  const product = productsData[slugId] || productsData.verify;

  return (
    <div className="bg-white min-h-screen">
      <TopBar />
      <Navbar />

      <main>
        {/* HERO */}
        <section className="py-20 lg:py-28 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              {/* LEFT */}
              <div className="flex-1 space-y-6">
                <div>
                  <span className="text-xs font-semibold tracking-widest text-gray-400 uppercase">
                    {product.label}
                  </span>

                  <h1 className="text-4xl md:text-5xl lg:text-6xl leading-tight tracking-tight text-[#00274A] mt-4">
                    {product.name}
                  </h1>

                  <p className="text-lg md:text-xl text-[#00274A] mt-3">
                    {product.tagline}
                  </p>

                  <p className="text-base text-gray-600 mt-2 max-w-lg">
                    {product.desc}
                  </p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <Link
                    href="/contact"
                    className="h-14 px-8 rounded-full bg-[#007BE5] text-white flex items-center justify-center text-sm font-medium hover:bg-blue-600 transition"
                  >
                    Contact Sales
                  </Link>

                  <Link
                    href="/dev"
                    className="h-14 px-8 rounded-full border border-gray-200 text-[#00274A] flex items-center gap-2 text-sm font-medium hover:bg-gray-50 transition"
                  >
                    Read Documentation <ArrowRight size={16} />
                  </Link>
                </div>
              </div>

              {/* RIGHT IMAGE */}
              <div className="w-full max-w-xl h-[400px] md:h-[500px] bg-gray-100 rounded-2xl border border-gray-200 relative flex items-center justify-center overflow-hidden">
                <Image
                  src={product.img}
                  alt={product.name}
                  fill
                  className="object-contain p-10 mix-blend-multiply"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="py-20 lg:py-28 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
            <div className="mb-16 max-w-xl">
              <h2 className="text-3xl md:text-4xl text-[#00274A] tracking-tight">
                Engineered for absolute reliability.
              </h2>
              <p className="text-gray-600 mt-4">
                Our infrastructure is built from the ground up to ensure high
                availability, local data sovereignty, and uncompromised
                compliance standards.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {product.benefits.map((benefit, idx) => {
                const Icon = benefit.icon;

                return (
                  <div key={idx}>
                    <div className="w-12 h-12 bg-blue-50 border border-blue-100 rounded-lg flex items-center justify-center mb-6">
                      <Icon
                        className="text-[#007BE5]"
                        strokeWidth={1.5}
                        size={24}
                      />
                    </div>

                    <h3 className="text-lg font-medium text-[#00274A] mb-2">
                      {benefit.title}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed">
                      {benefit.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* API SECTION */}
        <section className="py-20 lg:py-28 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              {/* CODE BLOCK */}
              <div className="w-full lg:max-w-xl bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm">
                <div className="flex gap-2 p-4 border-b bg-gray-50">
                  <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                  <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                  <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                </div>

                <div className="p-6 overflow-x-auto text-sm font-mono text-[#00274A]">
                  <pre>
                    {`import { ThirdFactor } from 'thirdfactor-node';

const tf = new ThirdFactor('sk_live_...');

const session = await tf.sessions.create({
  type: '${product.name.toLowerCase().replace("thirdfactor ", "")}',
  user_id: 'usr_12345',
  return_url: 'https://app.com/callback'
});

// Returns an instant, secure flow URL
console.log(session.url);`}
                  </pre>
                </div>
              </div>

              {/* RIGHT TEXT */}
              <div className="flex-1 space-y-6">
                <h2 className="text-3xl md:text-4xl text-[#00274A]">
                  Integrate in minutes,
                  <br />
                  not months.
                </h2>

                <p className="text-gray-600">
                  {product.name} is built developer-first. Our unified API
                  allows you to initialize complex workflows with just a few
                  lines of code.
                </p>

                <div className="space-y-4">
                  {[
                    "RESTful APIs and Native SDKs for iOS, Android, and Web",
                    "Comprehensive Webhooks for instant state updates",
                    "Fully customizable UI themes to match your brand",
                  ].map((item, i) => (
                    <div key={i} className="flex gap-3">
                      <CheckCircle2 className="text-[#007BE5] mt-1" size={18} />
                      <span className="text-gray-600 text-sm">{item}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/dev"
                  className="inline-flex items-center gap-2 text-[#007BE5] font-medium mt-4"
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
