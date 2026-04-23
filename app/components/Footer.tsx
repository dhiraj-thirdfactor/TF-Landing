"use client";
import Link from "next/link";
import Image from "next/image";
import { ExternalLink, Share2, Globe, Play } from "lucide-react";

const navCols = [
  {
    heading: "Navigate",
    links: ["Product", "Developers", "Use Cases", "Pricing", "Company", "Blog"],
  },
  {
    heading: "Contact",
    links: ["Sales", "Support", "Partnerships", "Media"],
  },
  {
    heading: "Legal",
    links: ["Privacy Policy", "Terms of Service", "Security", "Compliance"],
  },
];

const social = [
  { icon: <ExternalLink size={16} />, href: "#", label: "Twitter" },
  { icon: <Share2 size={16} />, href: "#", label: "LinkedIn" },
  { icon: <Globe size={16} />, href: "#", label: "GitHub" },
  { icon: <Play size={16} />, href: "#", label: "YouTube" },
];

export default function Footer() {
  return (
    <footer className="bg-[#00274A] text-white py-14">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-12">
          {/* Brand */}
          <div className="col-span-2">
            <Image src="/logo.svg" alt="ThirdFactor.ai" width={150} height={30} className="brightness-0 invert mb-4" />
            <p className="text-sm text-white/60 leading-relaxed max-w-[260px]">
              Instant identity verification for regulated markets. Trusted by banks, fintechs, and telecoms across South Asia.
            </p>
            <div className="flex gap-3 mt-5">
              {social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-8 h-8 flex items-center justify-center rounded-full border border-white/20 text-white/60 hover:text-white hover:border-white/40 transition-colors"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {navCols.map((col) => (
            <div key={col.heading}>
              <p className="text-xs font-semibold text-white/40 tracking-widest uppercase mb-4">
                {col.heading}
              </p>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <Link
                      href="#"
                      className="text-sm text-white/70 hover:text-white transition-colors"
                    >
                      {l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} ThirdFactor AI. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-xs text-white/40">
            <span>A</span>
            <span className="font-semibold text-white/60 tracking-wider uppercase">PRXA</span>
            <span>Company</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
