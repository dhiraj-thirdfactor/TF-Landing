"use client";

import BookADemoButton from "../ui/components/BookADemoButton";
import HeroLottie from "./HeroLottie";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden bg-white font-sans"
      style={{ fontFamily: "var(--font-geist-sans, system-ui)" }}
    >
      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-1 items-center">
        <div className="relative grid min-h-[620px] w-full grid-cols-1 items-center gap-8 px-4 py-12 md:px-8 md:py-16 lg:min-h-[720px] lg:grid-cols-[minmax(360px,520px)_minmax(0,1fr)] lg:gap-0 lg:px-[120px] lg:py-20 xl:px-[140px]">
          <div className="flex max-w-[640px] flex-col gap-7 lg:pb-10">
            <h1 className="font-sans text-[42px] font-normal leading-[1] tracking-normal text-[#00274A] md:text-[56px] lg:text-[60px]">
              Intelligent Identity Infrastructure for Continuous Trust
            </h1>

            <p className="max-w-[520px] text-body-l font-normal text-[#475569]">
              The full-stack AI identity platform. Sovereign by design, the only engine trained natively on Nepal&apos;s documents, languages, and identities.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <BookADemoButton
                variant="primary"
                text="Book a Demo"
                href="/book-demo"
              />
            </div>

            <p className="text-caption text-[#64748B]">
              NRB Compliant · VAPT Certified
            </p>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[720px] lg:-mr-20 lg:w-[820px] lg:max-w-none xl:-mr-28 xl:w-[900px]">
              <HeroLottie />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
