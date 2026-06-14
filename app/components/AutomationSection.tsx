"use client";
import Image from "next/image";

export default function AutomationSection() {
  return (
    <section className="block overflow-hidden border-t border-neutral-200 bg-white py-10 lg:hidden">
      <div className="flex min-h-[520px] items-center justify-center sm:min-h-[620px]">
        <Image
          src="/illustrations/automation.png"
          alt="ThirdFactor automation workflow"
          width={800}
          height={600}
          className="h-auto w-[155vw] max-w-none rotate-90 object-contain sm:w-[125vw]"
          sizes="155vw"
          preload
        />
      </div>
    </section>
  );
}
