"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Products", href: "#product", dropdown: true },
  { label: "About us", href: "#about" },
  { label: "Resources", href: "#resources" },
  { label: "Pricing", href: "#pricing" },
];

const regions = [
  { code: "NP", flag: "🇳🇵", name: "Nepal" },
  { code: "IN", flag: "🇮🇳", name: "India" },
  { code: "US", flag: "🇺🇸", name: "United States" },
  { code: "SG", flag: "🇸🇬", name: "Singapore" },
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
        className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-neutral-200 hover:bg-neutral-50 transition-colors duration-150"
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
              className={`w-full flex items-center gap-2.5 px-3 py-2 text-sm text-left transition-colors hover:bg-neutral-50 ${
                selected.code === r.code ? "bg-neutral-50" : ""
              }`}
              onClick={() => { setSelected(r); setOpen(false); }}
            >
              <span className="text-base">{r.flag}</span>
              <span className="font-medium text-neutral-700">{r.name}</span>
              <span className="ml-auto text-xs text-neutral-400">{r.code}</span>
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
        <nav className="hidden lg:flex items-center justify-center gap-0.5">
          {navLinks.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="flex items-center gap-0.5 px-3 py-1.5 text-sm rounded-full hover:bg-neutral-100 transition-colors duration-150"
              style={{ color: "#A3A3A3" }}
            >
              {l.label}
              {l.dropdown && <ChevronDown size={13} className="text-neutral-300" />}
            </Link>
          ))}
        </nav>

        {/* Right side */}
        <div className="hidden lg:flex items-center gap-2">
          <RegionDropdown />
          <Link
            href="#"
            className="px-4 py-1.5 text-sm font-medium text-white rounded-full bg-[#007BE5] hover:bg-[#0069C2] transition-colors duration-150"
          >
            Book a Demo
          </Link>
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
            <Link href="#" className="flex-1 text-center px-4 py-2 text-sm font-medium text-white rounded-full bg-[#007BE5]">
              Book a Demo
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
