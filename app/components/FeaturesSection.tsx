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
  const mm = gsap.matchMedia();
  useGSAP(() => {
    mm.add("(min-width: 1024px)", () => {
    const container = containerRef.current;
    const strip = stripRef.current;

    if (!container || !strip) return;

    let scrollLength = 0;

    const calculate = () => {
      scrollLength = strip.scrollWidth * 0.4;
    };

    calculate();

    const tween = gsap.to(strip, {
      x: () => -scrollLength,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top top",
        end: () => `+=${strip.scrollWidth}`,
        scrub: true,
        pin: container,
        invalidateOnRefresh: true,
      },
    });

    ScrollTrigger.addEventListener("refreshInit", calculate);

    return () => {
      tween.kill();
      ScrollTrigger.removeEventListener("refreshInit", calculate);
    };
    });
  }, []);

  return (
    <section ref={containerRef} className=" min-h-screen w-full flex justify-center items-center bg-white border-t border-neutral-200 overflow-hidden xl:py-20">
      <div className="max-w-[1440px] mx-auto">

        {/* Header */}
        <div className="px-6 md:px-[140px] flex flex-col gap-4 mb-13.5">
          <div className="flex">
            <h2 className="text-[32px] md:text-[40px] text-[#00274A] lg:max-w-[80%]">
              Verify users, read documents, and manage compliance from a single dashboard
            </h2>

            <a className="ml-4 h-[44px] px-6 flex items-center rounded-full cursor-pointer hover:bg-[#0069C2] hover:text-white transition-all duration-300 ease-in-out  ">
              Book a Demo
            </a>
          </div>

          <p className="text-[16px]">
            One Platform for Every Identity Workflow
          </p>
        </div>

        {/* Horizontal Section */}
        <div  className="horiz-gallery-wrapper px-6 md:px-[140px] overflow-x-auto scrollbar-hidden lg:overflow-hidden"  style={{ WebkitOverflowScrolling: "touch" }}>
          <div
            ref={stripRef}
            className="horiz-gallery-strip flex gap-6 md:gap-[36px] w-max pb-4 will-change-transform"
          >
            {cards.map((c, i) => (
              <div
                key={i}
                className="w-[300px] md:w-[370px] h-[420px] md:h-[452px] rounded-2xl border flex flex-col gap-6 bg-white shrink-0 justify-between px-8 pt-8 pb-13"
              >
                <div className="w-[140px] h-[180px] relative self-center">
                  <Image
                    src={c.img}
                    alt={c.imgAlt}
                    fill
                    style={{ objectFit: "contain" }}
                  />
                </div>

                <div>
                  <p className="font-semibold">{c.title}</p>
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