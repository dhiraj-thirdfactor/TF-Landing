"use client";
import Image from "next/image";

export default function HeroCard() {
  return (
    <div
      className="relative w-full rounded-2xl overflow-hidden"
      style={{ background: "#C77DFF", minHeight: "480px" }}
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
