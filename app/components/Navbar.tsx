"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import { ChevronDown, Menu, X, ShieldCheck, FileText, Activity, Key, PieChart, Settings, Database, ArrowRight } from "lucide-react";
import BookADemoButton from "../ui/components/BookADemoButton";

const navLinks = [
  { label: "Products", href: "#product", dropdown: true },
  { label: "About us", href: "/about" },
  { label: "Developers", href: "/dev" },
  { label: "Pricing", href: "/pricing" },
];

const regions = [
  { code: "NP", flag: "🇳🇵", name: "Nepal" },
  { code: "IN", flag: "🇮🇳", name: "India", comingSoon: true },
  { code: "LK", flag: "🇱🇰", name: "Sri Lanka", comingSoon: true },
  { code: "DE", flag: "🇩🇪", name: "Germany", comingSoon: true },
];

function RegionDropdown() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(regions[0]);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div className="relative" ref={ref}>
      {/* NP trigger — with border */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-4 py-3 rounded-full border border-neutral-200 hover:bg-neutral-50 transition-colors duration-150 h-[44px]"
        aria-expanded={open}
      >
        <span className="text-base leading-none">{selected.flag}</span>
        <span className="text-sm font-medium" style={{ color: "#404040" }}>
          {selected.code}
        </span>
        <ChevronDown
          size={13}
          className={`transition-transform duration-150 text-neutral-400 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="absolute right-0 top-full mt-1.5 w-44 bg-white border border-neutral-200 rounded shadow-sm z-50 py-1">
          {regions.map((r) => (
            <button
              key={r.code}
              className={`w-full flex items-center gap-2.5 px-3 py-2 text-sm text-left transition-colors ${
                r.comingSoon ? "cursor-not-allowed opacity-70" : "hover:bg-neutral-50"
              } ${selected.code === r.code && !r.comingSoon ? "bg-neutral-50" : ""}`}
              onClick={() => { 
                if (!r.comingSoon) {
                  setSelected(r); 
                  setOpen(false); 
                }
              }}
              disabled={r.comingSoon}
            >
              <span className="text-base">{r.flag}</span>
              <span className="font-medium text-neutral-700">{r.name}</span>
              {r.comingSoon ? (
                <span className="ml-auto text-[10px] font-semibold text-[#007BE5] bg-[#EBF5FF] px-1.5 py-0.5 rounded">Soon</span>
              ) : (
                <span className="ml-auto text-xs text-neutral-400">{r.code}</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 left-0 right-0 z-40 bg-white border-b border-neutral-200">
      {/* 3-column layout: logo | nav (centered) | actions */}
      <div className="max-w-[1440px] mx-auto px-6 h-14 grid grid-cols-[auto_1fr_auto] items-center gap-4">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image src="/logo.svg" alt="ThirdFactor.ai" width={152} height={28} priority />
        </Link>

        {/* Nav links — centered */}
        <nav className="hidden lg:flex items-center justify-center gap-0.5 relative">
          {navLinks.map((l) => {
            if (l.label === "Products") {
              return (
                <div key={l.label} className="relative group">
                  <button
                    className="flex items-center gap-0.5 px-3 py-1.5 text-sm rounded-full hover:bg-neutral-100 transition-colors duration-150"
                    style={{ color: "#A3A3A3" }}
                  >
                    {l.label}
                    <ChevronDown size={13} className="text-neutral-300 transition-transform group-hover:rotate-180" />
                  </button>
                  
                  {/* Mega Menu Dropdown - Enterprise Structural Style */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="w-[1000px] bg-white border border-neutral-200 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] overflow-hidden grid grid-cols-[1fr_1fr_300px]">
                      
                      {/* Column 1: Solutions */}
                      <div className="p-6">
                        <span className="text-[12px] font-semibold uppercase tracking-wider text-neutral-400 mb-3 block px-3">Identity Solutions</span>
                        <div className="flex flex-col gap-1">
                          {[
                            { name: "ThirdFactor Verify", desc: "Core identity & document checks", imgSrc: "/illustrations/image.png", href: "/products/verify" },
                            { name: "ThirdFactor Shield", desc: "Fraud prevention & liveness", imgSrc: "/illustrations/image2.png", href: "/products/shield" },
                            { name: "ThirdFactor Comply", desc: "AML & compliance monitoring", imgSrc: "/illustrations/image3.png", href: "/products/comply" },
                            { name: "ThirdFactor Access", desc: "Seamless authentication flows", imgSrc: "/illustrations/image.png", href: "/products/access" }
                          ].map((prod) => (
                            <Link
                              key={prod.name}
                              href={prod.href}
                              className="flex items-start gap-3 p-3 rounded-md hover:bg-neutral-50 transition-colors group/item"
                            >
                              <div className="mt-0.5 shrink-0 w-8 h-8 relative rounded overflow-hidden flex items-center justify-center opacity-70 group-hover/item:opacity-100 transition-opacity">
                                <Image src={prod.imgSrc} alt={prod.name} fill className="object-contain p-0.5" />
                              </div>
                              <div className="flex flex-col">
                                <span className="text-[14px] font-medium text-neutral-900">{prod.name}</span>
                                <span className="text-[13px] text-neutral-500 mt-0.5 leading-snug">{prod.desc}</span>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* Column 2: Platform */}
                      <div className="p-6 border-l border-neutral-100">
                        <span className="text-[12px] font-semibold uppercase tracking-wider text-neutral-400 mb-3 block px-3">Platform</span>
                        <div className="flex flex-col gap-1">
                          {[
                            { name: "ThirdFactor Lens", desc: "Analytics & risk scoring", imgSrc: "/illustrations/image2.png", href: "/products/lens" },
                            { name: "ThirdFactor Charter", desc: "Enterprise policy builder", imgSrc: "/illustrations/image3.png", href: "/products/charter" },
                            { name: "ThirdFactor Bedrock", desc: "Foundational infrastructure", imgSrc: "/illustrations/image.png", href: "/products/bedrock" }
                          ].map((prod) => (
                            <Link
                              key={prod.name}
                              href={prod.href}
                              className="flex items-start gap-3 p-3 rounded-md hover:bg-neutral-50 transition-colors group/item"
                            >
                              <div className="mt-0.5 shrink-0 w-8 h-8 relative rounded overflow-hidden flex items-center justify-center opacity-70 group-hover/item:opacity-100 transition-opacity">
                                <Image src={prod.imgSrc} alt={prod.name} fill className="object-contain p-0.5" />
                              </div>
                              <div className="flex flex-col">
                                <span className="text-[14px] font-medium text-neutral-900">{prod.name}</span>
                                <span className="text-[13px] text-neutral-500 mt-0.5 leading-snug">{prod.desc}</span>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* Column 3: Featured Section */}
                      <div className="bg-[#fafafa] p-6 border-l border-neutral-200 flex flex-col justify-between">
                        <div>
                          <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-500 mb-3 block">New Release</span>
                          <div className="relative w-full h-[120px] rounded-lg overflow-hidden border border-neutral-200 mb-4">
                            <Image src="/illustrations/herosection.png" alt="ThirdFactor Bedrock" fill className="object-cover" />
                          </div>
                          <h3 className="text-[15px] font-medium text-neutral-900 mb-1 leading-tight">Explore ThirdFactor Bedrock</h3>
                          <p className="text-[13px] text-neutral-500 leading-relaxed">
                            The scalable foundational infrastructure designed to run global identity systems.
                          </p>
                        </div>
                        <Link href="#" className="mt-6 flex items-center gap-1 text-[13px] font-medium text-[#007BE5] hover:text-[#0069C2] transition-colors">
                          Learn more <ArrowRight size={14} />
                        </Link>
                      </div>

                    </div>
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={l.label}
                href={l.href}
                className="flex items-center gap-0.5 px-3 py-1.5 text-sm rounded-full hover:bg-neutral-100 transition-colors duration-150"
                style={{ color: "#A3A3A3" }}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        {/* Right side */}
        <div className="hidden lg:flex items-center gap-2">
          <RegionDropdown />
          <BookADemoButton variant="primary" text="Book a Demo" href="/demo" />
        
        </div>

        {/* Hamburger — mobile (spans grid properly) */}
        <button
          className="lg:hidden p-2 rounded-md hover:bg-neutral-100 transition-colors text-neutral-600 col-start-3"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-neutral-200 bg-white px-4 py-4 flex flex-col gap-1">
          {navLinks.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="flex items-center gap-1 px-3 py-2 text-sm rounded-md hover:bg-neutral-50"
              style={{ color: "#A3A3A3" }}
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
              {l.dropdown && <ChevronDown size={13} />}
            </Link>
          ))}
          <div className="flex items-center gap-2 mt-3 pt-3 border-t border-neutral-200">
            <RegionDropdown />
            <Link href="/book-demo" className="flex-1 text-center px-4 py-2 text-sm font-medium text-white rounded-full bg-[#007BE5]">
              Book a Demo
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
