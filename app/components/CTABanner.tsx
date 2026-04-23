"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="bg-[#007BE5] py-20 md:py-28">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 text-center">
        {/* Subtle dot pattern overlay */}
        <div className="relative">
          <p className="text-xs font-semibold text-white/60 tracking-widest uppercase mb-4">
            Get started today
          </p>
          <h2 className="text-[32px] sm:text-[44px] font-bold leading-[1.10] tracking-[-0.025em] text-white mb-4">
            Start Verifying{" "}
            <span className="italic">with</span>{" "}
            Confidence
          </h2>
          <p className="text-sm text-white/70 leading-relaxed mb-10 max-w-lg mx-auto">
            Join the regulated businesses trusting ThirdFactor to onboard users faster, reduce fraud, and stay compliant — all from a single platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="#"
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-medium text-[#007BE5] bg-white rounded-full hover:bg-neutral-50 transition-colors"
            >
              Send Today
              <ArrowRight size={16} />
            </Link>
            <Link
              href="#"
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 text-sm font-medium text-white rounded-full border border-white/30 hover:bg-white/10 transition-colors"
            >
              Book a Demo
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
