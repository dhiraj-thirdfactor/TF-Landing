"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ChevronRight } from "lucide-react";

const items = [
  {
    id: "rest",
    label: "REST API & SDKs",
    content:
      "Full REST API with OpenAPI 3.0 spec. Native SDKs for Flutter, React Native, iOS (Swift), and Android (Kotlin). All endpoints return structured JSON with consistent error codes.",
  },
  {
    id: "fusion",
    label: "Fusion Components",
    content:
      "Pre-built, embeddable UI components for face capture, document scan, and consent flow. Drop into any web or mobile app with a single import.",
  },
  {
    id: "webhook",
    label: "Webhooks & Real-Time Events",
    content:
      "Subscribe to session lifecycle events via signed webhooks. Supports retries, dead-letter queues, and per-event filtering.",
  },
  {
    id: "integration",
    label: "Integration Timeline",
    content:
      "Most teams ship a production integration in 3–5 business days. Our integration team provides a dedicated Slack channel and sandbox environment.",
  },
];

export default function APISection() {
  const [openId, setOpenId] = useState<string | null>("rest");

  return (
    <section className="bg-white py-16 md:py-20 border-t border-neutral-200">
      <div className="max-w-[1441px] mx-auto px-6 md:px-[140px]">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-[72px] items-start w-full">

       

          {/* ── Right: copy + accordion ─────────── */}
          <div className="w-full  flex flex-col gap-8 shrink-0">
            {/* Heading */}
            <div className="flex w-full items-center justify-between">
         
              <h2 className="font-sans font-normal text-[32px] md:text-[40px] leading-[1.2] tracking-[-2px] text-[#00274A] mb-4">
                Build anything with
                <br className="hidden md:block" /> a powerful host of APIs
              </h2>
         

            {/* View Documentation */}
            <Link
              href="#"
              className="inline-flex items-center justify-center gap-4 w-full sm:w-[227px] h-[60px] rounded-[100px] bg-[#F2F2F7] text-black text-[14px] font-medium font-sans shrink-0 transition-colors hover:bg-[#0069C2] hover:text-white"
              >
              View Documentation
              <ChevronRight size={16} />
            </Link>
              </div>
              <div className="w-full flex justify-between gap-10">
                <div className="img ">
                 <div className="w-full lg:w-[575px] h-[300px] sm:h-[450px] lg:h-[559px] overflow-hidden shrink-0  relative flex items-center justify-center">
            <Image
              src="/illustrations/apis.png"
              alt="ThirdFactor API infrastructure"
              fill
              style={{ objectFit: "contain", padding: "32px" }}
              sizes="(max-width: 1024px) 100vw, 576px"
              priority
            />
          </div>
                </div>
            {/* Expandable rows */}
            <div className="flex flex-col w-full mt-2 lg:mt-0 max-w-[558px] divide-y divide-dashed divide-[#D9D9D9]">
              {items.map((item, idx) => {
                const isOpen = openId === item.id;
                return (
                  <div
                    key={item.id}
                    className={`w-full `}
                  >
                    <button
                      onClick={() => setOpenId(isOpen ? null : item.id)}
                      className="w-full h-[69px] flex items-center justify-between gap-4 bg-transparent border-none cursor-pointer p-0 text-left outline-none"
                    >
                      <span className={`text-[30px]  transition-colors ${isOpen ? "font-medium text-[#00274A]" : "font-normal text-[#404040]"}`}>
                        {item.label}
                      </span>
                      <ChevronDown
                        size={16}
                        className="text-[#A3A3A3] shrink-0 transition-transform duration-200"
                        style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                      />
                    </button>
                    {isOpen && (
                      <div className="pb-5">
                        <p className="font-sans font-normal text-[14px] leading-[1.6] text-[#525252] m-0">
                          {item.content}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}
