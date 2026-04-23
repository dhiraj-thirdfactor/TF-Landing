"use client";
import Image from "next/image";

const cards = [
  {
    title: "White-Label Mobile SDK",
    desc: "Native SDK for iOS and Android. Embed liveness and document capture directly into your branded app with no WebView.",
    img: "/illustrations/image.png",
    imgAlt: "Mobile SDK illustration",
  },
  {
    title: "White-Label Web Components",
    desc: "Drop-in verification iFrame or headless React components. Full styling control for browser-first onboarding flows.",
    img: "/illustrations/image3.png",
    imgAlt: "Web components illustration",
  },
  {
    title: "White-Label Data Layer",
    desc: "Backend API with full data ownership. Raw biometric scores, document data, and audit logs stay in your infrastructure.",
    img: "/illustrations/image2.png",
    imgAlt: "Database illustration",
  },
  {
    title: "REST API & Webhooks",
    desc: "Every verification capability exposed as a clean REST endpoint with real-time webhooks and streaming callback support.",
    img: "/illustrations/image.png",
    imgAlt: "API illustration",
  },
  {
    title: "Multi-Channel Orchestration",
    desc: "Route verification through any channel — branch kiosk, mobile app, or web portal — from a single integration point.",
    img: "/illustrations/image3.png",
    imgAlt: "Multi-channel illustration",
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-white border-t border-neutral-200 overflow-hidden">
      <div className="max-w-[1440px] mx-auto">

        {/* Header */}
        <div className="px-6 md:px-[140px] flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <p className="font-sans font-normal text-[16px] leading-[1.5] text-[#525252] mb-3">
              One Platform for Every Identity Workflow
            </p>
            <h2 className="font-sans font-normal text-[32px] md:text-[40px] leading-[1.25] tracking-[-0.02em] text-[#00274A] m-0">
              Verify users, read documents, and manage compliance from a single dashboard
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 h-[44px] px-6 text-[14px] font-medium text-white bg-[#007BE5] rounded-[100px] whitespace-nowrap shrink-0 hover:bg-[#0069C2] transition-colors w-full lg:w-auto"
          >
            Book a Demo
          </a>
        </div>

        {/* Cards — horizontal scroll */}
        <div
          className="overflow-x-auto scrollbar-hide px-6 md:px-[140px]"
          style={{ WebkitOverflowScrolling: "touch" }}
        >
          <div className="flex gap-6 md:gap-[36px] w-max pb-4">
            {cards.map((c, i) => (
              <div
                key={i}
                className="w-[300px] md:w-[370px] h-[420px] md:h-[452px] rounded-2xl border border-[#E5E5E5] p-6 md:p-8 flex flex-col gap-6 md:gap-8 bg-white shrink-0"
              >
                {/* Illustration */}
                <div className="w-[140px] md:w-[158px] h-[180px] md:h-[200px] border-[2px] border-[#2563EB] rounded-xl overflow-hidden bg-[#EFF6FF] shrink-0 self-center relative">
                  <Image
                    src={c.img}
                    alt={c.imgAlt}
                    fill
                    style={{ objectFit: "contain", padding: "12px" }}
                    sizes="158px"
                  />
                </div>

                {/* Text block */}
                <div className="w-full flex flex-col gap-3">
                  <p className="font-sans font-semibold text-[16px] md:text-[18px] leading-[1.3] tracking-[-0.01em] text-[#00274A] m-0">
                    {c.title}
                  </p>
                  <p className="font-sans font-normal text-[13px] md:text-[14px] leading-[1.5] text-[#525252] m-0">
                    {c.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
}
