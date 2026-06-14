"use client";

import Lottie from "lottie-react";
import { useEffect, useState } from "react";

type LottieData = Record<string, unknown>;

export default function HeroLottie() {
  const [animationData, setAnimationData] = useState<LottieData | null>(null);

  useEffect(() => {
    let active = true;

    fetch("/illustrations/hero-lottie.json")
      .then((response) => {
        if (!response.ok) throw new Error("Unable to load hero animation");
        return response.json() as Promise<LottieData>;
      })
      .then((data) => {
        if (active) setAnimationData(data);
      })
      .catch(() => undefined);

    return () => {
      active = false;
    };
  }, []);

  if (!animationData) {
    return <div className="aspect-[4/3] w-full" aria-hidden="true" />;
  }

  return (
    <Lottie
      animationData={animationData}
      autoplay
      loop
      aria-label="ThirdFactor identity verification workflow"
      className="h-auto w-full select-none"
      rendererSettings={{ preserveAspectRatio: "xMidYMid meet" }}
    />
  );
}
