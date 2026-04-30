"use client";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const stats = [
  { value: "70%", label: "Reduction in data team dependency" },
  { value: "70%", label: "Reduction in data team dependency" },
  { value: "70%", label: "Reduction in data team dependency" },
];

export default function Testimonial() {
  return (
    <section className="bg-[#EBF5FF] py-[96px]">
      <div className="max-w-[1400px] mx-auto flex flex-col  gap-[64px] px-6 lg:px-[140px] ">
        
        {/* Top row — quote left, stats right */}
        <div className="flex flex-col md:flex-row  justify-between items-start gap-8 md:gap-12 lg:gap-[64px] ">
          
          {/* Left — quote block */}
          <div className="flex flex-col  gap-6 max-w-[540px]">
            {/* Logo */}
              <div className=" flex flex-col gap-10 items-start">
            <div className="flex items-center h-8 relative w-[120px]">
              <Image
                src="/illustrations/vianetlogo.png"
                alt="Vianet"
                fill
                className="object-contain object-left"
              />
            </div>
            {/* Quote */}
            <blockquote className="font-sans text-[18px] leading-[1.5] text-neutral-900 m-0">
              &ldquo;ThirdFactor has become the backbone of our digital
              onboarding. It lets our risk and compliance teams catch forged
              documents instantly while giving customers a verification
              experience that feels effortless and genuinely built for
              Nepal.&rdquo;
            </blockquote>

            {/* Attribution */}
            <p className="font-sans text-[15px] text-neutral-500 m-0">
              Khemraj Bhujel, CEO
            </p>
            </div>
            
            {/* Read Case Study button */}
          </div>

          {/* Right — stat cards */}
          <div className="flex flex-col  w-full  md:h-[322px]  gap-[16px] justify-between">
            {stats.map((s, i) => (
              <div
                key={i}
                className="bg-white rounded-[12px] px-6 py-5 flex flex-col items-start md:flex-row md:items-center gap-6 md:gap-5 "
              >
                <span className="font-medium text-[28px] tracking-tight text-neutral-900 shrink-0 ">
                  {s.value}
                </span>
                <span className=" text-[16px] md:text-[20px] leading-tight text-[#000000] max-w-[250px] md:max-w-full">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
            <div className="">
              <Link
                href="#"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-neutral-300 bg-white text-neutral-900 text-[14px] font-medium font-sans hover:bg-neutral-50 hover:border-neutral-400 transition-colors"
              >
                Read Case Study
              </Link>
            </div>

        {/* Bottom separator with arrow */}
        <div className="w-full h-full flex items-center gap-[32px]">
          <div className="line w-full h-px bg-[#0000003D]"/>
          <div className="p-2 bg-white  rounded-full cursor-pointer">
            <ArrowRight size={20} className="text-black" /></div>
        </div>
        
      </div>
    </section>
  );
}
