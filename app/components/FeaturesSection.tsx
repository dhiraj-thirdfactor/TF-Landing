"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

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
    <section suppressHydrationWarning ref={containerRef} className=" min-h-screen w-full flex md:py-[104px] lg:py-[120px] py-[72px] bg-white border-t border-neutral-200 overflow-hidden ">
      <div className="max-w-[1440px] mx-auto flex flex-col lg:gap-[54px]">

        {/* Header */}
        <div className="px-4  md:px-8  lg:px-[140px] flex lg:items-center items-start lg:flex-row flex-col lg:gap-4 md:gap-6 gap-8 w-full">
          <div className="flex flex-col items-start ">
            <h2 className="text-[24px] font-semibold md:font-normal leading-[130%] lg:leading-[48px] md:leading-[48px] text-[#00274A] lg:max-w-[80%] md:max-w-[703px]">
              Verify users, read documents, and manage compliance from a single dashboard
            </h2>

          <p className="text-[16px]">
            One Platform for Every Identity Workflow
          </p>
          </div>

            <a className=" h-[44px] px-6 flex items-center rounded-full cursor-pointer  bg-[#007BE5] text-white hover:bg-[#0069C2] text-nowrap hover:text-white transition-all duration-300 ease-in-out  ">
              Book a Demo
            </a>
        </div>

        {/* Horizontal Section */}
        <div  className="horiz-gallery-wrapper px-6 md:px-[140px] md:block flex  overflow-hidden md:mt-[54px] lg:mt-0 mt-[32px]"  style={{ WebkitOverflowScrolling: "touch" }}>
          <div
            ref={stripRef}
            className="horiz-gallery-strip flex flex-col md:flex-row gap-6 md:gap-[36px] w-max pb-4 will-change-transform"
          >
            {cards.map((c, i) => (
              <div
                key={i}
                className="w-[330px] md:w-[370px] h-[420px] md:h-[452px] rounded-2xl border border-[#D7D7D7] flex flex-col gap-6 bg-white shrink-0 justify-between px-8 pt-8 pb-13"
              >
                <div className="w-[140px] h-[180px] relative self-center">
                  <Image
                    src={c.img}
                    alt={c.imgAlt}
                    fill
                    style={{ objectFit: "contain" }}
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

      </div>
    </section>
  );
}