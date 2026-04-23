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
    <section className="bg-[#EBF5FF] py-12">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Top row — quote left, stats right */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 lg:gap-16">
          
          {/* Left — quote block */}
          <div className="flex flex-col gap-6 max-w-[540px]">
            {/* Logo */}
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
            
            {/* Read Case Study button */}
            <div className="mt-2">
              <Link
                href="#"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-neutral-300 bg-white text-neutral-900 text-[14px] font-medium font-sans hover:bg-neutral-50 hover:border-neutral-400 transition-colors"
              >
                Read Case Study
              </Link>
            </div>
          </div>

          {/* Right — stat cards */}
          <div className="flex flex-col gap-3 shrink-0 w-full md:w-[380px]">
            {stats.map((s, i) => (
              <div
                key={i}
                className="bg-white rounded-[12px] px-6 py-4 flex items-center gap-5 shadow-sm"
              >
                <span className="font-sans font-medium text-[28px] tracking-tight text-neutral-900 shrink-0">
                  {s.value}
                </span>
                <span className="font-sans text-[14px] leading-tight text-neutral-500">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom separator with arrow */}
        <div className="mt-8 border-t border-[#c7d2e0] pt-4 flex justify-end">
          <ArrowRight size={20} className="text-neutral-700" />
        </div>
        
      </div>
    </section>
  );
}
