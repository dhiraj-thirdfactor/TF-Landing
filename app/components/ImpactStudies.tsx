"use client";
import { useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const studies = [
  {
    id: "vianet",
    logo: "/illustrations/vianetlogo.png",
    metric: "99% faster",
    quote: "\"ThirdFactor entirely automated our KYC pipeline, allowing us to onboard customers instantly without manual review queues.\"",
    name: "Shyam P.",
    title: "Head of Operations, Vianet",
    bgImage: "/illustrations/mofin.png",
    bgFallback: "linear-gradient(135deg, #00274A 0%, #001224 100%)",
  },
  {
    id: "khalti",
    logo: "/illustrations/khalti.png",
    metric: "1.2M+ verified",
    quote: "\"We scaled our user base rapidly without ever compromising on compliance or risking sophisticated fraud attacks.\"",
    name: "Amit A.",
    title: "Growth Lead, Khalti",
    bgImage: "/illustrations/tingting.png",
    bgFallback: "linear-gradient(135deg, #4A0027 0%, #240012 100%)",
  },
  {
    id: "nmb",
    logo: "/illustrations/nmb.png",
    metric: "Zero fines",
    quote: "\"The localized AML screening and ongoing monitoring has given our compliance team complete peace of mind.\"",
    name: "Sita R.",
    title: "Chief Compliance Officer, NMB",
    bgImage: "/illustrations/mofin.png", // Reusing image to maintain layout consistency
    bgFallback: "linear-gradient(135deg, #004A27 0%, #002412 100%)",
  },
  {
    id: "dishhome",
    logo: "/illustrations/dishhome.png",
    metric: "50% cost cut",
    quote: "\"Switching to ThirdFactor reduced our manual verification operational costs by half within the first month.\"",
    name: "Raj K.",
    title: "VP Engineering, DishHome",
    bgImage: "/illustrations/tingting.png", // Reusing image to maintain layout consistency
    bgFallback: "linear-gradient(135deg, #4A2700 0%, #241200 100%)",
  }
];

export default function ImpactStudies() {
  const [active, setActive] = useState(0);

  return (
    <section className="bg-white py-16 md:py-[120px] border-t border-[#E5E5E5]">
      <div className="max-w-[1441px] mx-auto px-6 md:px-[140px]">
        
        <h2 className="font-sans font-normal text-[32px] md:text-[40px] leading-[1.1] tracking-[-1.5px] text-[#00274A] mb-10 md:mb-16">
          Read how ThirdFactor helps great companies scale faster
        </h2>

        <div className="flex flex-col md:flex-row gap-4 md:gap-6 min-h-[800px] md:min-h-0 md:h-[500px]">
          {studies.map((study, idx) => {
            const isActive = active === idx;
            return (
              <div 
                key={study.id}
                onMouseEnter={() => setActive(idx)}
                style={{
                  flex: isActive ? "3" : "1",
                  position: "relative",
                  borderRadius: "24px",
                  overflow: "hidden",
                  transition: "flex 1.5s cubic-bezier(0.25, 1, 0.5, 1)",
                  cursor: "pointer",
                  background: study.bgFallback,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  minHeight: isActive ? "300px" : "100px",
                }}
              >
                {/* Background Image & Gradient Overlays */}
                {study.bgImage && (
                  <div className="absolute inset-0 z-0">
                    <Image src={study.bgImage} alt={study.name} fill className="object-cover" />
                  </div>
                )}
                
                <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/10 to-black/85 pointer-events-none"></div>

                {/* Logo Top Left */}
                <div className="relative z-[2] h-[24px] md:h-[32px] w-[80px] md:w-[100px] mt-6 md:mt-10 mx-6 md:mx-8 shrink-0">
                  <Image src={study.logo} alt={study.id} fill className="object-contain object-left brightness-0 invert" />
                </div>

                {/* Content Bottom */}
                <div className="relative z-[2] mx-6 md:mx-8 mb-6 md:mb-10 flex flex-col gap-2 md:gap-4 justify-end h-full">
                  <h3 
                    className="font-sans font-medium text-white tracking-[-1px] m-0 whitespace-nowrap transition-all duration-[1500ms] ease-[cubic-bezier(0.25,1,0.5,1)]"
                    style={{ fontSize: isActive ? "36px" : "24px" }}
                  >
                    {study.metric}
                  </h3>
                  
                  {/* Modern CSS Grid Accordion for perfectly smooth height animation without abrupt max-height snapping */}
                  <div style={{ 
                    display: "grid",
                    gridTemplateRows: isActive ? "1fr" : "0fr",
                    transition: "grid-template-rows 1.5s cubic-bezier(0.25, 1, 0.5, 1)",
                  }}>
                    <div className="overflow-hidden">
                      <div 
                        className="w-full md:w-[360px] flex flex-col gap-4 md:gap-6 pt-2 transition-opacity duration-[1500ms] ease-[cubic-bezier(0.25,1,0.5,1)]"
                        style={{ opacity: isActive ? 1 : 0 }}
                      >
                        <p className="font-sans text-[14px] md:text-[16px] leading-[1.6] text-white/90 m-0">
                          {study.quote}
                        </p>
                        
                        <button className="inline-flex items-center gap-2 px-4 md:px-5 py-2 md:py-2.5 rounded-full bg-white/15 hover:bg-white/25 border border-white/30 text-white text-[13px] md:text-[14px] font-medium w-fit transition-colors cursor-pointer">
                          Impact study <ArrowRight size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Labels below cards */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 mt-6 md:mt-6 hidden md:flex">
          {studies.map((study, idx) => {
            const isActive = active === idx;
            return (
              <div key={study.id + "-label"} style={{ flex: isActive ? "3" : "1", transition: "flex 1.5s cubic-bezier(0.25, 1, 0.5, 1)" }}>
                <div style={{ height: "2px", background: isActive ? "#007BE5" : "#E5E5E5", width: "100%", marginBottom: "16px", transition: "background 1.5s cubic-bezier(0.25, 1, 0.5, 1)" }}></div>
                <div style={{ opacity: isActive ? 1 : 0.5, transition: "opacity 1.5s cubic-bezier(0.25, 1, 0.5, 1)" }}>
                  <span className="font-sans text-[14px] font-semibold text-[#00274A]">{study.name} </span>
                  <span className="font-sans text-[13px] text-[#525252]">{study.title}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
