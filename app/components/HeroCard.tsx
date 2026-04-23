"use client";
import Image from "next/image";

export default function HeroCard() {
  return (
    <div
      className="relative w-full rounded-2xl overflow-hidden min-h-[300px] sm:min-h-[480px]"
      style={{ background: "#C77DFF" }}
    >
      <Image
        src="/illustrations/herosection.png"
        alt="ThirdFactor hero illustration"
        fill
        style={{ objectFit: "cover" }}
        priority
      />
    </div>
  );
}
