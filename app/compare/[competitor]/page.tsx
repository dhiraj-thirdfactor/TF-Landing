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

  {/* HERO */}
  <section className="px-6 py-16 md:py-20 max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
    <div>
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#00274A] tracking-tight leading-tight mb-6">
        Don't Waste Your Budget on Failed Verifications.
      </h1>

      <p className="text-base md:text-lg text-gray-600 mb-8 leading-relaxed max-w-xl">
        Global KYC tools reject valid Nepali IDs because they don't understand
        the local context. ThirdFactor.ai delivers 99%+ accuracy on local
        documents at 1/4th the cost.
      </p>

      <Link
        href="/contact"
        className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#007BE5] text-white text-sm font-medium hover:bg-blue-600 transition shadow-sm"
      >
        Talk to sales
      </Link>
    </div>

    <div className="relative w-full aspect-[4/3] flex items-center justify-center">
      <Image
        src="/illustrations/vspage.png"
        alt="Comparison"
        fill
        className="object-contain mix-blend-multiply scale-105 md:scale-110"
      />
    </div>
  </section>

  {/* NAV */}
  <section className="px-6 py-5 border-y border-gray-200 bg-gray-50">
    <div className="max-w-6xl mx-auto flex flex-wrap gap-6 justify-center">
      {competitorsList.map((c) => (
        <Link
          key={c}
          href={`/compare/${c}`}
          className={`text-sm font-medium transition ${
            competitorId === c
              ? "text-[#007BE5] border-b-2 border-[#007BE5] pb-1"
              : "text-gray-400 hover:text-gray-600"
          }`}
        >
          ThirdFactor vs {competitorsData[c].name}
        </Link>
      ))}
    </div>
  </section>

  {/* TABLE */}
  <section className="px-6 py-16 md:py-24 max-w-5xl mx-auto">
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">

      {/* SCROLL WRAPPER (important) */}
      <div className="overflow-x-auto">
        <div className="min-w-[600px]">

          {/* HEADER */}
          <div className="grid grid-cols-3 p-5 border-b bg-gray-50 items-center text-sm font-semibold text-gray-400 uppercase tracking-wide">
            <div>Features</div>

            <div className="flex justify-center">
              <Image src="/logo.svg" alt="ThirdFactor" width={120} height={20} />
            </div>

            <div className="flex justify-center relative h-8">
              {competitor.logoImage ? (
                <Image src={competitor.logoImage} alt={competitor.name} fill className="object-contain" />
              ) : (
                <span className="text-lg font-bold" style={{ color: competitor.textColor }}>
                  {competitor.logoText}
                </span>
              )}
            </div>
          </div>

          {/* BODY */}
          <div className="flex flex-col">
            {commonFeatures.map((feat, idx) => (
              <div
                key={idx}
                className={`grid grid-cols-3 px-5 py-4 items-center text-sm ${
                  idx !== commonFeatures.length - 1 && "border-b"
                } hover:bg-gray-50`}
              >
                <div className="text-gray-600 font-medium">{feat.name}</div>

                <div className="flex justify-center">
                  {feat.us ? (
                    <Check className="text-[#007BE5]" size={20} />
                  ) : (
                    <X className="text-gray-400" size={18} />
                  )}
                </div>

                <div className="flex justify-center">
                  {feat.them ? (
                    <Check className="text-gray-400" size={18} />
                  ) : (
                    <X className="text-gray-300" size={18} />
                  )}
                </div>
              </div>
            ))}

            {/* EXTRA ROWS */}
            <div className="grid grid-cols-3 px-5 py-4 border-t bg-gray-50 text-sm items-center">
              <div className="text-gray-600 font-medium">Implementation Time</div>
              <div className="text-center text-[#00274A] font-medium bg-blue-50 py-1 rounded-full">
                Days
              </div>
              <div className="text-center text-gray-400">Weeks</div>
            </div>

            <div className="grid grid-cols-3 px-5 py-4 border-t bg-gray-50 text-sm items-center">
              <div className="text-gray-600 font-medium">Pricing Model</div>
              <div className="text-center text-[#00274A] font-medium bg-blue-50 py-1 rounded-full">
                Flat Fee
              </div>
              <div className="text-center text-gray-400">API + Add-ons</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* BENEFITS */}
  <section className="px-6 pb-16 md:pb-24 max-w-6xl mx-auto">
    <div className="text-center mb-12 md:mb-16">
      <h2 className="text-2xl md:text-3xl text-[#00274A] mb-4">
        Stop overpaying for lower conversion.
      </h2>
      <p className="text-gray-600 text-sm md:text-base">
        We built the engine that understands emerging market documents.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-6 md:gap-8">

      <div className="bg-blue-600 rounded-2xl p-8 md:p-10 text-white relative overflow-hidden">
        <h3 className="text-xl md:text-2xl font-medium mb-4">
          Guaranteed Accuracy
        </h3>
        <p className="text-blue-100 text-sm md:text-base max-w-sm">
          Our models are trained on local IDs ensuring valid users are never rejected.
        </p>
      </div>

      <div className="bg-white border rounded-2xl p-8 md:p-10 relative">
        <h3 className="text-xl md:text-2xl text-[#00274A] mb-4">
          Local Infrastructure
        </h3>
        <p className="text-gray-600 text-sm md:text-base max-w-sm">
          Deploy on-premise or localized cloud zones for sovereignty & speed.
        </p>
      </div>

    </div>
  </section>

  {/* FAQ */}
  <section className="px-6 py-16 md:py-24 border-t">
    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16">

      <div>
        <h2 className="text-2xl md:text-4xl text-[#00274A] mb-10">
          Frequently Asked Questions
        </h2>

        <div className="divide-y">
          {[
            "How easy is it to migrate?",
            "Support for non-English docs?",
            "On-premise hosting?",
            "Verification SLA?",
          ].map((q, i) => (
            <div key={i} className="py-5 flex justify-between items-center group cursor-pointer">
              <h4 className="text-sm md:text-base text-[#00274A] group-hover:text-[#007BE5] transition">
                {q}
              </h4>
              <span className="text-gray-400 text-lg">+</span>
            </div>
          ))}
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
