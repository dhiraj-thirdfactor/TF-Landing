"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

interface HoverPixelTextProps {
  text: string;
  className?: string;
  proximityRadius?: number;
}

export function HoverPixelText({
  text,
  className = "",
  proximityRadius = 40,
}: HoverPixelTextProps) {
  const rawMouseX = useMotionValue(-1000);
  const rawMouseY = useMotionValue(-1000);

  // 🔥 Smooth mouse movement
  const mouseX = useSpring(rawMouseX, { stiffness: 120, damping: 25 });
  const mouseY = useSpring(rawMouseY, { stiffness: 120, damping: 25 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      rawMouseX.set(e.clientX);
      rawMouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [rawMouseX, rawMouseY]);

  return (
    <span className={className}>
      {text.split("").map((char, i) => (
        <Letter
          key={i}
          char={char}
          mouseX={mouseX}
          mouseY={mouseY}
          proximityRadius={proximityRadius}
        />
      ))}
    </span>
  );
}

function Letter({ char, mouseX, mouseY, proximityRadius }: any) {
  const [isMounted, SetIsMounted] = useState(false);

  useEffect(() => {
    SetIsMounted(true);
  }, []);

  const [isPixel, setIsPixel] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  // ✅ cache center position once
  const centerRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!ref.current || char === " " || !isMounted) return;

    const updatePosition = () => {
      const rect = ref.current!.getBoundingClientRect();

      centerRef.current = {
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
      };
    };

    updatePosition();
    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition);

    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition);
    };
  }, [char]);

  useEffect(() => {
    if (char === " ") return;

    const unsubscribe = mouseX.on("change", () => {
      const { x, y } = centerRef.current;

      const dx = mouseX.get() - x;
      const dy = mouseY.get() - y;

      const distance = Math.sqrt(dx * dx + dy * dy);

      const next = distance < proximityRadius;

      // 🔥 prevent unnecessary re-renders
      setIsPixel((prev) => (prev !== next ? next : prev));
    });

    return () => unsubscribe();
  }, [char, mouseX, mouseY, proximityRadius]);

  if (char === " ") return <span>&nbsp;</span>;

  return (
    <motion.span
      ref={ref}
      className="inline-block will-change-transform"
      initial={false}
      animate={{
        fontFamily: isPixel
          ? "var(--font-geist-pixel-circle), monospace"
          : "var(--font-geist-sans), sans-serif",
        scale: 1,
        y: isPixel ? -2 : 0,
      }}
      transition={{
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1], // smoother than easeInOut
      }}
      style={{
        willChange:
          "transform, opacity, font-family, letter-spacing, font-weight, width",
      }}
    >
      {char}
    </motion.span>
  );
}
