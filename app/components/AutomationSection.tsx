"use client";
import Image from "next/image";

export default function AutomationSection() {
  return (
    <section
      className="bg-white lg:hidden block py-20 border-t border-neutral-200 overflow-hidden"
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          src="/illustrations/automation.png"
          alt="ThirdFactor automation workflow"
          width={800}
          height={600}
          style={{ objectFit: "contain", maxWidth: "100%" }}
          priority
        />
      </div>
    </section>
  );
}
