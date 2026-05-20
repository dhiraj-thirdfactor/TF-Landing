"use client";
import Image from "next/image";
import Link from "next/link";
import { GeistPixelCircle } from "geist/font/pixel";
import {
  ExternalLink,
  Share2,
  Globe,
  Play,
} from "lucide-react";

export default function Footer() {
  return (
    <>
      {/* ── Main footer ─────────────────────────────── */}
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-[1163px] mx-auto py-12 md:pt-16 md:pb-12 px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1fr_repeat(4,auto)] gap-10 lg:gap-[72px] items-start">
            {/* Brand */}
            <div className="flex flex-col gap-4 w-full lg:max-w-[267px]">
              <h2 className="font-sans text-[24px] leading-none text-gray-900 m-0 font-normal tracking-[-1px]">
                Instant{" "}
                <span className={`${GeistPixelCircle.className} font-normal text-[24px] leading-none tracking-[-1px]`}>
                  Identity
                </span>
                <br />
                Verification for regulated
                <br />
                markets.
              </h2>
              <div>
                <Link
                  href="#"
                  className="inline-block px-6 py-2.5 rounded-full bg-blue-50 text-[14px] text-gray-900 font-sans font-medium no-underline hover:bg-blue-100 transition-colors"
                >
                  Learn More
                </Link>
              </div>
            </div>

            {/* Products */}
            <FooterCol
              heading="PRODUCTS"
              links={[
                { label: "Documentation", href: "/dev" },
                { label: "Pricing", href: "/pricing" },
                { label: "ThirdFactor Verify", href: "/products/verify" },
                { label: "ThirdFactor Shield", href: "/products/shield" },
              ]}
            />

            {/* Resources */}
            <FooterCol
              heading="COMPANY"
              links={[
                { label: "About Us", href: "/about" },
                { label: "Blogs", href: "/blogs" },
                { label: "Contact Us", href: "/contact" },
                { label: "FAQs", href: "/faq" },
              ]}
            />

            {/* Compare */}
            <FooterCol
              heading="COMPARE"
              links={[
                { label: "vs Sumsub", href: "/compare/sumsub" },
                { label: "vs Onfido", href: "/compare/onfido" },
                { label: "vs Jumio", href: "/compare/jumio" },
              ]}
            />

            {/* Contact */}
            <div>
              <p className="font-sans text-[11px] font-bold tracking-[0.08em] text-gray-500 uppercase m-0 mb-4">
                CONTACT
              </p>
              <ul className="list-none m-0 p-0 flex flex-col gap-2.5">
                {["info@thirdfactor.ai", "9705180020", "Kupondole, Lalitpur"].map(
                  (item) => (
                    <li key={item} className="font-sans text-[14px] text-gray-700">
                      {item}
                    </li>
                  )
                )}
              </ul>

              {/* Social */}
              <div className="flex gap-3 mt-5">
                {[
                  { icon: <ExternalLink size={16} />, label: "Twitter" },
                  { icon: <Share2 size={16} />, label: "LinkedIn" },
                  { icon: <Globe size={16} />, label: "GitHub" },
                  { icon: <Play size={16} />, label: "YouTube" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href="#"
                    aria-label={s.label}
                    className="text-gray-700 flex items-center justify-center hover:text-gray-900 transition-colors"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 mt-12 border-t border-gray-200">
           <a href="https://prixa.org/" target="_blank" rel="noopener noreferrer">
            <Image
              src="/illustrations/prixa.png"
              alt="A PRIXA Company"
              width={180}
              height={28}
              className="h-[28px] w-auto"
              />
              </a>
            <Link
              href="#"
              className="font-sans text-[14px] text-gray-700 no-underline hover:text-gray-900 transition-colors"
            >
              Terms and Conditions
            </Link>
          </div>
        </div>
      </footer>

      {/* ── Dot-grid strip ──────────────────────────── */}
      <div style={{ width: "100%", lineHeight: 0 }}>
        <Image
          src="/illustrations/footer.png"
          alt=""
          width={1440}
          height={220}
          style={{ width: "100%", height: "auto", display: "block" }}
          aria-hidden="true"
        />
      </div>
    </>
  );
}

function FooterCol({
  heading,
  links,
}: {
  heading: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <p
        style={{
          fontFamily: "var(--font-geist-sans, system-ui)",
          fontSize: "11px",
          fontWeight: 700,
          letterSpacing: "0.08em",
          color: "#6b7280",
          textTransform: "uppercase",
          margin: "0 0 16px",
        }}
      >
        {heading}
      </p>
      <ul
        style={{
          listStyle: "none",
          margin: 0,
          padding: 0,
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        {links.map((l) => (
          <li key={l.label}>
            <Link
              href={l.href}
              style={{
                fontFamily: "var(--font-geist-sans, system-ui)",
                fontSize: "14px",
                color: "#374151",
                textDecoration: "none",
              }}
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
