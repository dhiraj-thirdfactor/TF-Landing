import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, X } from "lucide-react";
import TopBar from "../../components/TopBar";
import Navbar from "../../components/Navbar";
import CTABanner from "../../components/CTABanner";
import Footer from "../../components/Footer";

export function generateStaticParams() {
  return [
    { competitor: 'sumsub' },
    { competitor: 'onfido' },
    { competitor: 'jumio' }
  ];
}

const competitorsData: Record<string, any> = {
  sumsub: {
    name: "Sumsub",
    logoText: "sumsub",
    textColor: "#3F8CFF",
    logoImage: "/illustrations/sumsub.webp",
  },
  onfido: {
    name: "Onfido",
    logoText: "onfido",
    textColor: "#2B52FF",
    logoImage: "/illustrations/onfido-an-entrust-company-logo.png",
  },
  jumio: {
    name: "Jumio",
    logoText: "jumio",
    textColor: "#00B050",
    logoImage: "/illustrations/jumio.png",
  }
};

const defaultCompetitor = {
  name: "Competitor",
  logoText: "Competitor",
  textColor: "#525252"
};

const commonFeatures = [
  { name: "AI Classification", us: true, them: true },
  { name: "Regional ID Document DB", us: true, them: false },
  { name: "Local On-Premise Server", us: true, them: false },
  { name: "Nepali & Hindi Localisation", us: true, them: false },
  { name: "Clear Pricing, No Hidden Fees", us: true, them: false },
  { name: "API Integration", us: true, them: true },
  { name: "Liveness Check (3D)", us: true, them: true },
  { name: "Face Verification (1:1)", us: true, them: true },
  { name: "Dedicated Support Engineer", us: true, them: false },
  { name: "Data Residency Guarantee", us: true, them: false },
  { name: "Custom SLA", us: true, them: false },
];

export default async function ComparePage({ params }: { params: Promise<{ competitor: string }> }) {
  const resolvedParams = await params;
  const competitorId = resolvedParams.competitor?.toLowerCase() || "competitor";
  const competitor = competitorsData[competitorId] || defaultCompetitor;

  const competitorsList = Object.keys(competitorsData);

  return (
    <div className="bg-white min-h-screen">
      <TopBar />
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="px-6 py-20 max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 
              className="text-[40px] md:text-[56px] text-[#00274A] tracking-[-0.02em] leading-[1.1] mb-6"
              style={{ fontFamily: "var(--font-geist-sans, system-ui)", fontWeight: 400 }}
            >
              Don't Waste Your Budget<br />
              on Failed Verifications.
            </h1>
            <p className="text-[18px] md:text-[20px] text-[#525252] mb-8 leading-relaxed max-w-[480px]" style={{ fontFamily: "var(--font-geist-sans, system-ui)" }}>
              Global KYC tools reject valid Nepali IDs because they don't understand the local context. ThirdFactor.ai delivers 99%+ accuracy on local documents at 1/4th the cost.
            </p>
            <div className="flex items-center gap-4">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#007BE5] text-white text-[15px] font-medium hover:bg-[#0069C2] transition-colors shadow-sm"
              >
                Talk to sales
              </Link>
            </div>
          </div>
          
          <div className="relative w-full aspect-[4/3] flex items-center justify-center">
             <Image src="/illustrations/vspage.png" alt="Infrastructure Comparison" fill className="object-contain mix-blend-multiply scale-110 md:scale-125 md:translate-x-4" />
          </div>
        </section>

        {/* Competitor Links Navigation */}
        <section className="px-6 py-6 border-y border-[#E5E5E5] bg-[#FAFAFA]">
          <div className="max-w-[1200px] mx-auto flex flex-wrap gap-8 justify-center items-center">
            {competitorsList.map((c) => (
              <Link 
                key={c}
                href={`/compare/${c}`}
                className={`text-[15px] font-medium transition-all ${competitorId === c ? "text-[#007BE5] border-b-2 border-[#007BE5] pb-1" : "text-[#A3A3A3] hover:text-[#525252]"}`}
              >
                ThirdFactor vs {competitorsData[c].name}
              </Link>
            ))}
          </div>
        </section>

        {/* Comparison Table */}
        <section className="px-6 py-24 max-w-[1000px] mx-auto">
          <div className="bg-white rounded-2xl border border-[#E5E5E5] overflow-hidden shadow-sm">
            
            {/* Table Header */}
            <div className="grid grid-cols-[1fr_200px_200px] p-6 border-b border-[#E5E5E5] bg-[#FAFAFA] items-center">
              <div className="text-[14px] font-semibold text-[#A3A3A3] uppercase tracking-wider">Features</div>
              
              {/* ThirdFactor Logo */}
              <div className="flex items-center justify-center">
                <Image src="/logo.svg" alt="ThirdFactor.ai" width={140} height={24} className="h-6 w-auto" />
              </div>
              
              {/* Competitor Logo / Name */}
              <div className="flex items-center justify-center h-8 relative w-full px-4">
                {competitor.logoImage ? (
                  <Image src={competitor.logoImage} alt={competitor.name} fill className="object-contain" />
                ) : (
                  <span className="text-[22px] font-bold tracking-tight" style={{ color: competitor.textColor }}>
                    {competitor.logoText}
                  </span>
                )}
              </div>
            </div>

            {/* Table Body */}
            <div className="flex flex-col">
              {commonFeatures.map((feat, idx) => (
                <div key={idx} className={`grid grid-cols-[1fr_200px_200px] px-6 py-5 items-center hover:bg-neutral-50 transition-colors ${idx !== commonFeatures.length - 1 ? 'border-b border-[#F5F5F5]' : ''}`}>
                  <div className="text-[15px] text-[#525252] font-medium">{feat.name}</div>
                  
                  <div className="flex justify-center">
                    {feat.us ? <Check className="text-[#007BE5]" size={22} strokeWidth={2.5} /> : <X className="text-[#A3A3A3]" size={20} />}
                  </div>
                  
                  <div className="flex justify-center">
                    {feat.them ? <Check className="text-[#A3A3A3]" size={20} strokeWidth={2} /> : <X className="text-[#E5E5E5]" size={20} strokeWidth={2} />}
                  </div>
                </div>
              ))}
              
              {/* Manual Row - Implementation */}
              <div className="grid grid-cols-[1fr_200px_200px] px-6 py-5 items-center border-t border-[#E5E5E5] bg-[#FAFAFA]">
                <div className="text-[15px] text-[#525252] font-medium">Implementation Time</div>
                <div className="text-[14px] text-[#00274A] text-center font-medium bg-blue-50 py-1.5 rounded-full">Days (Local Support)</div>
                <div className="text-[14px] text-[#A3A3A3] text-center">Weeks (Global Ticket)</div>
              </div>
              
              {/* Manual Row - Pricing */}
              <div className="grid grid-cols-[1fr_200px_200px] px-6 py-5 items-center border-t border-[#E5E5E5] bg-[#FAFAFA]">
                <div className="text-[15px] text-[#525252] font-medium">Pricing Model</div>
                <div className="text-[14px] text-[#00274A] text-center font-medium bg-blue-50 py-1.5 rounded-full">Flat Fee / Transparent</div>
                <div className="text-[14px] text-[#A3A3A3] text-center">API Requests + Add-ons</div>
              </div>
            </div>
            
          </div>
        </section>

        {/* Benefits Section */}
        <section className="px-6 pb-24 max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-[32px] text-[#00274A] tracking-[-0.02em] mb-4" style={{ fontFamily: "var(--font-geist-sans, system-ui)", fontWeight: 400 }}>
              Stop overpaying for lower conversion.
            </h2>
            <p className="text-[16px] text-[#525252]">We built the engine that understands emerging market documents.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Box 1 */}
            <div className="bg-[#2563EB] rounded-2xl p-10 text-white overflow-hidden relative shadow-sm">
              <h3 className="text-[24px] font-medium mb-4 z-10 relative tracking-tight">Guaranteed Accuracy</h3>
              <p className="text-blue-100 text-[15px] leading-relaxed max-w-[360px] z-10 relative">
                Our models are specifically trained on diverse demographics and local IDs, ensuring valid users are never wrongly rejected.
              </p>
              {/* Abstract element */}
              <div className="absolute right-[-10%] bottom-[-20%] opacity-20 w-[240px] h-[240px]">
                <div className="w-full h-full border-[2px] border-white/40 rounded-xl rotate-12 flex items-center justify-center">
                  <div className="w-[70%] h-[70%] border-[2px] border-white/40 rounded-lg -rotate-6"></div>
                </div>
              </div>
            </div>

            {/* Box 2 */}
            <div className="bg-white border border-[#E5E5E5] rounded-2xl p-10 overflow-hidden relative shadow-sm">
              <h3 className="text-[24px] text-[#00274A] font-medium mb-4 z-10 relative tracking-tight">Local Identity Infrastructure</h3>
              <p className="text-[#525252] text-[15px] leading-relaxed max-w-[360px] z-10 relative">
                Deploy on-premise or use our localized cloud zones to ensure absolute data sovereignty and ultra-low latency verifications.
              </p>
              {/* Abstract element */}
              <div className="absolute right-[8%] bottom-[15%] opacity-70 flex items-end gap-3">
                 <div className="w-12 h-12 bg-white border border-[#E5E5E5] rounded shadow-sm relative"><div className="absolute top-2 left-2 right-2 bottom-2 bg-neutral-100 rounded-sm"></div></div>
                 <div className="w-12 h-16 bg-white border border-[#E5E5E5] rounded shadow-sm relative"><div className="absolute top-2 left-2 right-2 bottom-2 bg-neutral-100 rounded-sm"></div></div>
                 <div className="w-12 h-20 bg-white border border-[#007BE5] rounded shadow-sm relative"><div className="absolute top-2 left-2 right-2 bottom-2 bg-blue-50 rounded-sm"></div></div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="px-6 py-24 bg-white border-t border-[#E5E5E5]">
          <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-[32px] md:text-[40px] text-[#00274A] tracking-[-0.02em] mb-12" style={{ fontFamily: "var(--font-geist-sans, system-ui)", fontWeight: 400 }}>
                Frequently Asked<br />Questions
              </h2>
              
              <div className="flex flex-col gap-0">
                {[
                  "How easy is it to migrate from another provider?",
                  "Does ThirdFactor support non-English documents?",
                  "Can we host the solution on our own servers?",
                  "What is your SLA for verification speed?"
                ].map((q, i) => (
                  <div key={i} className="border-b border-[#E5E5E5] py-6 first:pt-0">
                    <div className="flex justify-between items-center cursor-pointer group">
                      <h4 className="text-[16px] text-[#00274A] font-medium group-hover:text-[#007BE5] transition-colors">{q}</h4>
                      <div className="text-[#A3A3A3] text-xl font-light">+</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Abstract Graphic representing network/nodes */}
            <div className="w-full h-full min-h-[400px] rounded-2xl relative overflow-hidden bg-white border border-[#E5E5E5] flex items-center justify-center p-8">
               <div className="w-full h-full grid grid-cols-10 grid-rows-10 gap-1 md:gap-2">
                 {Array.from({ length: 100 }).map((_, i) => {
                   const isBlue = i === 12 || i === 25 || i === 34 || i === 48 || i === 76 || i === 89;
                   const isLight = i % 7 === 0 || i % 11 === 0;
                   return (
                     <div key={i} className={`rounded-sm ${isBlue ? 'bg-[#007BE5]' : isLight ? 'bg-[#F0F7FF]' : 'bg-[#FAFAFA]'}`}></div>
                   );
                 })}
               </div>
            </div>
          </div>
        </section>

        <CTABanner />
      </main>

      <Footer />
    </div>
  );
}
