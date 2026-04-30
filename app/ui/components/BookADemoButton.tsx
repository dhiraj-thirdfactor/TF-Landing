"use client";

import React from "react";
import Link from "next/link";
import { tv, type VariantProps } from "tailwind-variants";

// Define styles using tv properly
const buttonStyles = tv({
  base: "inline-flex items-center justify-center gap-2 py-[6px] px-6 h-[36px] md:h-[44px] rounded-[100px] transition-all whitespace-nowrap shrink-0 text-[14px] font-medium leading-[150%] tracking-[0px]",

  variants: {
    variant: {
      primary: "bg-[#007BE5] text-white hover:bg-[#0069C2] transition-colors duration-300 ease-in-out w-full sm:w-[149px]",
      secondary: "bg-[#EFF6FF] text-black hover:bg-[#C5DEFF] transition-colors duration-300 ease-in-out w-full sm:w-auto",
      outline: "bg-[#ffffff] text-[#404040] hover:bg-[#EFF6FF] transition-colors duration-300 ease-in-out w-full sm:w-auto border border-[#007BE5]",
      ghost: "text-[#007BE5] hover:bg-blue-50 px-2 w-auto",
    },
  },

  defaultVariants: {
    variant: "primary",
  },
});

// Type-safe props
type BookADemoButtonProps = {
  text?: string;
  href?: string;
  className?: string;
} & VariantProps<typeof buttonStyles>;

export default function BookADemoButton({
  text = "Book a Demo",
  href = "/book-demo",
  variant,
  className,
}: BookADemoButtonProps) {
  return (
    <Link href={href} className={buttonStyles({ variant, className })}>
      {text}
    </Link>
  );
}