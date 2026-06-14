"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import BookADemoButton from "../ui/components/BookADemoButton";

const navLinks = [
  { label: "About us", href: "/about" },
  { label: "Developers", href: "/dev" },
  { label: "Pricing", href: "/pricing" },
];

const productGroups = [
  {
    label: "Identity solutions",
    products: [
      { name: "Verify", description: "Identity and document checks", href: "/products/verify" },
      { name: "Shield", description: "Fraud prevention and liveness", href: "/products/shield" },
      { name: "Comply", description: "AML and compliance monitoring", href: "/products/comply" },
      { name: "Access", description: "Secure authentication flows", href: "/products/access" },
    ],
  },
  {
    label: "Platform",
    products: [
      { name: "Lens", description: "Analytics and risk scoring", href: "/products/lens" },
      { name: "Charter", description: "Enterprise policy orchestration", href: "/products/charter" },
      { name: "Bedrock", description: "Sovereign identity infrastructure", href: "/products/bedrock" },
    ],
  },
];

const regions = [
  { code: "NP", flag: "🇳🇵", name: "Nepal" },
  { code: "IN", flag: "🇮🇳", name: "India", comingSoon: true },
  { code: "LK", flag: "🇱🇰", name: "Sri Lanka", comingSoon: true },
  { code: "DE", flag: "🇩🇪", name: "Germany", comingSoon: true },
];

function RegionDropdown({ openUp = false }: { openUp?: boolean }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(regions[0]);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) setOpen(false);
    }

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        className="flex h-11 items-center gap-1.5 rounded-full border border-[#D9E8F7] bg-white px-4 text-[#334155] transition-colors hover:bg-[#F7FBFF]"
        aria-expanded={open}
      >
        <span className="text-base leading-none">{selected.flag}</span>
        <span className="text-sm font-medium">{selected.code}</span>
        <ChevronDown size={13} className={`text-[#94A3B8] transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div
          className={`absolute right-0 z-50 w-48 overflow-hidden border border-[#D9E8F7] bg-white py-1 shadow-[0_16px_40px_rgba(0,39,74,0.12)] ${
            openUp ? "bottom-full mb-2" : "top-full mt-2"
          }`}
        >
          {regions.map((region) => (
            <button
              key={region.code}
              type="button"
              disabled={region.comingSoon}
              onClick={() => {
                if (!region.comingSoon) {
                  setSelected(region);
                  setOpen(false);
                }
              }}
              className="flex w-full items-center gap-2.5 px-4 py-2.5 text-left text-sm text-[#334155] transition-colors hover:bg-[#F7FBFF] disabled:cursor-not-allowed disabled:opacity-50"
            >
              <span>{region.flag}</span>
              <span>{region.name}</span>
              <span className="ml-auto font-mono text-[10px] uppercase text-[#007BE5]">
                {region.comingSoon ? "Soon" : region.code}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [navVisible, setNavVisible] = useState(true);
  const [mounted, setMounted] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setMobileOpen(false);
    }

    if (!mobileOpen) return;

    const scrollY = window.scrollY;
    const body = document.body;
    const html = document.documentElement;
    const previousBodyStyles = {
      position: body.style.position,
      top: body.style.top,
      width: body.style.width,
      overflow: body.style.overflow,
    };
    const previousHtmlOverflow = html.style.overflow;

    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.width = "100%";
    body.style.overflow = "hidden";
    html.style.overflow = "hidden";

    window.addEventListener("keydown", closeOnEscape);
    return () => {
      body.style.position = previousBodyStyles.position;
      body.style.top = previousBodyStyles.top;
      body.style.width = previousBodyStyles.width;
      body.style.overflow = previousBodyStyles.overflow;
      html.style.overflow = previousHtmlOverflow;
      window.scrollTo(0, scrollY);
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [mobileOpen]);

  useEffect(() => {
    function handleScroll() {
      const currentScrollY = window.scrollY;
      const movingDown = currentScrollY > lastScrollY.current;

      if (!mobileOpen) {
        setNavVisible(currentScrollY < 24 || !movingDown);
      }

      lastScrollY.current = currentScrollY;
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mobileOpen]);

  const closeMobileMenu = () => setMobileOpen(false);

  return (
    <header
      className={`sticky left-0 right-0 top-0 z-40 border-b border-[#E7EDF3] bg-white transition-transform duration-300 ease-out ${
        navVisible || mobileOpen ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="mx-auto grid h-[72px] max-w-[1440px] grid-cols-[auto_1fr_auto] items-center gap-4 px-4 md:px-8 lg:px-[120px] xl:px-[140px]">
        <Link href="/" className="flex shrink-0 items-center">
          <Image src="/logo.svg" alt="ThirdFactor.ai" width={164} height={24} priority />
        </Link>

        <nav className="relative hidden items-center justify-center gap-1 lg:flex">
          <div className="group relative">
            <button className="flex items-center gap-1 rounded-full px-3 py-2 text-sm text-[#475569] transition-colors hover:bg-[#F7FBFF] hover:text-[#007BE5]">
              Products
              <ChevronDown size={13} className="transition-transform group-hover:rotate-180" />
            </button>

            <div className="invisible absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
              <div className="grid w-[760px] grid-cols-2 overflow-hidden border border-[#D9E8F7] bg-white shadow-[0_20px_60px_rgba(0,39,74,0.12)]">
                {productGroups.map((group) => (
                  <div key={group.label} className="border-r border-[#D9E8F7] p-5 last:border-r-0">
                    <p className="mb-3 px-3 font-mono text-[10px] uppercase tracking-[0.1em] text-[#64748B]">
                      {group.label}
                    </p>
                    {group.products.map((product) => (
                      <Link
                        key={product.name}
                        href={product.href}
                        className="group/item flex items-start justify-between gap-4 px-3 py-3 transition-colors hover:bg-[#F7FBFF]"
                      >
                        <span>
                          <span className="block text-[14px] font-medium text-[#00274A]">
                            ThirdFactor {product.name}
                          </span>
                          <span className="mt-0.5 block text-[12px] text-[#64748B]">
                            {product.description}
                          </span>
                        </span>
                        <ArrowRight size={14} className="mt-1 text-[#94A3B8] transition-transform group-hover/item:translate-x-1 group-hover/item:text-[#007BE5]" />
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="rounded-full px-3 py-2 text-sm text-[#475569] transition-colors hover:bg-[#F7FBFF] hover:text-[#007BE5]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <RegionDropdown />
          <BookADemoButton variant="primary" text="Book a Demo" href="/book-demo" />
        </div>

        <button
          type="button"
          className="col-start-3 flex size-10 items-center justify-center text-[#00274A] transition-colors hover:text-[#007BE5] lg:hidden"
          onClick={() => setMobileOpen(true)}
          aria-label="Open navigation"
          aria-expanded={mobileOpen}
        >
          <Menu size={20} />
        </button>
      </div>

      {mounted &&
        createPortal(
          <aside
            className={`fixed inset-0 z-[100] flex h-dvh w-screen touch-none flex-col overflow-hidden overscroll-none bg-white transition-[transform,opacity,visibility] duration-300 ease-out lg:hidden ${
              mobileOpen ? "visible translate-x-0 opacity-100" : "invisible translate-x-6 opacity-0"
            }`}
            aria-label="Mobile navigation"
            aria-modal="true"
            role="dialog"
          >
            <div className="flex h-[72px] shrink-0 items-center justify-between border-b border-[#E7EDF3] px-5">
              <Image src="/logo.svg" alt="ThirdFactor.ai" width={158} height={24} />
              <button type="button" onClick={closeMobileMenu} className="flex size-10 items-center justify-center text-[#00274A]" aria-label="Close navigation">
                <X size={19} />
              </button>
            </div>

            <div className="flex min-h-0 flex-1 flex-col px-5 py-3">
              <button type="button" onClick={() => setMobileProductsOpen((current) => !current)} className="flex w-full items-center justify-between border-b border-[#E7EDF3] py-3 text-left text-[17px] font-medium text-[#00274A]">
                Products
                <ChevronDown size={17} className={`transition-transform ${mobileProductsOpen ? "rotate-180" : ""}`} />
              </button>

              {mobileProductsOpen && (
                <div className="grid grid-cols-2 gap-x-5 border-b border-[#E7EDF3] py-3">
                  {productGroups.map((group) => (
                    <div key={group.label}>
                      <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.1em] text-[#64748B]">{group.label}</p>
                      {group.products.map((product) => (
                        <Link key={product.name} href={product.href} onClick={closeMobileMenu} className="flex items-center justify-between py-1.5 text-[13px] text-[#334155]">
                          ThirdFactor {product.name}
                          <ArrowRight size={14} className="text-[#94A3B8]" />
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}

              <nav className="flex flex-col">
                {navLinks.map((link) => (
                  <Link key={link.label} href={link.href} onClick={closeMobileMenu} className="flex items-center justify-between border-b border-[#E7EDF3] py-3 text-[17px] font-medium text-[#00274A]">
                    {link.label}
                    <ArrowRight size={16} className="text-[#94A3B8]" />
                  </Link>
                ))}
              </nav>
            </div>

            <div className="shrink-0 border-t border-[#E7EDF3] bg-white p-5">
              <div className="mb-4 flex items-center justify-between gap-4">
                <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#64748B]">Region</span>
                <RegionDropdown openUp />
              </div>
              <Link href="/book-demo" onClick={closeMobileMenu} className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[#007BE5] text-[14px] font-medium text-white">
                Book a Demo
                <ArrowRight size={16} />
              </Link>
            </div>
          </aside>,
          document.body,
        )}
    </header>
  );
}
