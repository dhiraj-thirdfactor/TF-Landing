"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import BookADemoButton from "../ui/components/BookADemoButton";
import LayoutWrapper from "./common/wrapper/LayoutWrapper";


gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    title: "White-Label Mobile SDK",
    desc: "Native SDK for iOS and Android. Embed liveness and document capture directly into your branded app with no WebView.",
    img: "/feature-section-imgs/whitelabel ui.svg",
    imgAlt: "Mobile SDK illustration",
  },
  {
    title: "Create any flow",
    desc: "Drop-in verification iFrame or headless React components. Full styling control for browser-first onboarding flows.",
    img: "/feature-section-imgs/create any identity flow.svg",
    imgAlt: "Web components illustration",
  },
  {
    title: "Unified Identity stack",
    desc: "Backend API with full data ownership. Raw biometric scores, document data, and audit logs stay in your infrastructure.",
    img: "/feature-section-imgs/Unified Identity Stack.svg",
    imgAlt: "Database illustration",
  },
  {
    title: "REST API & Webhooks",
    desc: "Every verification capability exposed as a clean REST endpoint with real-time webhooks and streaming callback support.",
    img: "/feature-section-imgs/Developer-First Integration.svg",
    imgAlt: "API illustration",
  },
  {
    title: "Multi-Channel Orchestration",
    desc: "Route verification through any channel, including branch kiosk, mobile app, or web portal, from a single integration point.",
    img: "/feature-section-imgs/Transparent Pricing.svg",
    imgAlt: "Multi-channel illustration",
  },
];
export default function FeaturesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const stripRef = useRef<HTMLDivElement>(null);

 useGSAP(() => {
  const mm = gsap.matchMedia();

  const setup = (startValue:string, increment:number) => {
    const container = containerRef.current;
    const strip = stripRef.current;
    if (!container || !strip) return;

    let scrollLength = 0;

    const calculate = () => {
      scrollLength = strip.scrollWidth * increment;
    };

    calculate();

    const tween = gsap.to(strip, {
      x: () => -scrollLength,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: startValue, // 👈 dynamic per breakpoint
        end: () => `+=${strip.scrollWidth}`,
        scrub: true,
        pin: container,
        invalidateOnRefresh: true,
        // markers: true,
      },
    });

    ScrollTrigger.addEventListener("refreshInit", calculate);

    return () => {
      tween.kill();
      ScrollTrigger.removeEventListener("refreshInit", calculate);
    };
  };

  // 💻 Desktop
  mm.add("(min-width: 1024px)", () => {
    return setup("top top", 0.4);
  });

  // 📱 Tablet
  mm.add("(min-width: 768px) and (max-width: 1023px)", () => {
    return setup("30% top", 0.5);
  });

  return () => mm.revert();
}, []);

  return (
    
    <section suppressHydrationWarning ref={containerRef} className="w-full flex py-[72px] md:min-h-screen md:py-[104px] lg:py-[120px] bg-white overflow-hidden">
      <LayoutWrapper className="flex flex-col lg:gap-[54px]" >

        {/* Header */}
        <div className="px-4  md:px-8  lg:px-[140px] flex lg:items-center items-start lg:flex-row flex-col lg:gap-4 md:gap-6 gap-8 w-full">
          <div className="flex flex-col items-start ">
            <h2 className="text-[24px] md:text-[40px] font-semibold md:font-normal leading-[130%] lg:leading-[48px] md:leading-[48px] text-[#00274A] lg:max-w-[80%] md:max-w-[703px] ">
              Verify users, read documents, and manage compliance from a single dashboard
            </h2>

          <p className="text-body-m mt-[16px]">
            One Platform for Every Identity Workflow
          </p>
          </div>

            <BookADemoButton variant="secondary" />
        </div>

        {/* Horizontal Section */}
        <div  className="horiz-gallery-wrapper px-4 md:px-[140px] md:block flex overflow-hidden md:mt-[54px] lg:mt-0 mt-[32px]"  style={{ WebkitOverflowScrolling: "touch" }}>
          <div
            ref={stripRef}
            className="horiz-gallery-strip flex w-full flex-col md:w-max md:flex-row gap-6 md:gap-[36px] pb-4 md:will-change-transform"
          >
            {cards.map((c, i) => (
              <div
                key={i}
                className="w-full md:w-[330px] lg:w-[370px] min-h-[420px] md:h-[452px] rounded-2xl border border-[#D7D7D7] flex flex-col gap-6 bg-white shrink-0 justify-between px-6 md:px-8 pt-8 pb-10 md:pb-13"
              >
                <div className=" w-[200px] h-[200px] relative self-center">
                  <Image
                    src={c.img}
                    alt={c.imgAlt}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>

                <div className="flex flex-col gap-3">
                  <p className="font-semibold text-[18px] leading-[140%] text-neutral-900">{c.title}</p>
                  <p className="text-sm text-gray-500">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </LayoutWrapper>
    </section>
  );
}
