import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const columns = [
  {
    heading: "Products",
    links: [
      { label: "Verify", href: "/products/verify" },
      { label: "Shield", href: "/products/shield" },
      { label: "Comply", href: "/products/comply" },
      { label: "Access", href: "/products/access" },
      { label: "Bedrock", href: "/products/bedrock" },
    ],
  },
  {
    heading: "Platform",
    links: [
      { label: "Developers", href: "/dev" },
      { label: "Pricing", href: "/pricing" },
      { label: "FAQs", href: "/faq" },
      { label: "Book a Demo", href: "/book-demo" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Blogs", href: "/blogs" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Compare",
    links: [
      { label: "vs Sumsub", href: "/compare/sumsub" },
      { label: "vs Onfido", href: "/compare/onfido" },
      { label: "vs Jumio", href: "/compare/jumio" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms and Conditions", href: "/terms" },
    ],
  },
];

const socials = [
  { label: "LinkedIn", href: "https://www.linkedin.com/company/thirdfactor-ai/", icon: "linkedin" },
  { label: "GitHub", href: "https://github.com/thirdfactor", icon: "github" },
  { label: "Facebook", href: "https://www.facebook.com/thirdfactorai", icon: "facebook" },
  { label: "Instagram", href: "https://www.instagram.com/thirdfactor.ai/", icon: "instagram" },
  { label: "YouTube", href: "https://www.youtube.com/@thirdfactorai", icon: "youtube" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[#D9E8F7] bg-white">
      <div className="mx-auto max-w-[1160px] px-6 py-14 md:py-20">
        <div className="grid gap-14 lg:grid-cols-[1.15fr_2fr] lg:gap-20">
          <div className="flex flex-col gap-6">
            <Link href="/" className="w-fit">
              <Image
                src="/logo.svg"
                alt="ThirdFactor.ai"
                width={205}
                height={30}
                className="h-[30px] w-auto"
              />
            </Link>
            <p className="max-w-[330px] font-sans text-[14px] leading-[1.65] text-[#64748B]">
              Intelligent identity infrastructure for regulated markets, built with local context and sovereign deployment in mind.
            </p>
            <address className="flex flex-col gap-1.5 text-[14px] not-italic text-[#475569]">
              <a href="mailto:info@thirdfactor.ai" className="hover:text-[#007BE5]">
                info@thirdfactor.ai
              </a>
              <a href="tel:+9779705180020" className="hover:text-[#007BE5]">
                +977 9705180020
              </a>
              <a href="https://tflanding-eta.vercel.app/#" className="hover:text-[#007BE5]">
                Kupondole, Lalitpur, Kathmandu
              </a>
            </address>
            <Link
              href="/book-demo"
              className="group mt-1 inline-flex w-fit items-center gap-2 text-[14px] font-semibold text-[#007BE5]"
            >
              Build trust with us
              <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
            <div className="flex gap-3">
              {socials.map((social) => {
                return (
                  <Link
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex size-9 items-center justify-center border border-[#D9E8F7] text-[#64748B] transition-colors hover:border-[#007BE5] hover:text-[#007BE5]"
                  >
                    <SocialIcon name={social.icon} />
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-5">
            {columns.map((column) => (
              <div key={column.heading}>
                <p className="mb-5 font-mono text-[11px] font-medium uppercase tracking-[0.08em] text-[#64748B]">
                  {column.heading}
                </p>
                <ul className="m-0 flex list-none flex-col gap-3.5 p-0">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="font-sans text-[14px] text-[#334155] transition-colors hover:text-[#007BE5]"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

      </div>

      <div className="relative overflow-hidden border-t border-[#D9E8F7] bg-[#F7FBFF]">
        <div className="relative z-20 mx-auto flex max-w-[1160px] flex-col gap-5 px-6 py-7 sm:flex-row sm:items-center sm:justify-between">
          <Link href="https://prixa.org/" target="_blank" rel="noopener noreferrer">
            <Image
              src="/illustrations/prixa.png"
              alt="A PRIXA Company"
              width={180}
              height={28}
              className="h-[28px] w-auto opacity-70 grayscale"
            />
          </Link>
          <p className="m-0 font-sans text-[13px] text-[#64748B]">
            Copyright 2026 ThirdFactor AI
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ name }: { name: string }) {
  const paths: Record<string, React.ReactNode> = {
    linkedin: (
      <>
        <path d="M5.3 7.4H2.1V18h3.2V7.4ZM3.7 2A1.86 1.86 0 1 0 3.7 5.72 1.86 1.86 0 0 0 3.7 2ZM18 12c0-3.2-1.7-4.9-4-4.9a3.5 3.5 0 0 0-3.2 1.8V7.4H7.6V18h3.2v-5.2c0-1.4.3-2.8 2.1-2.8 1.8 0 1.9 1.7 1.9 2.9V18H18v-6Z" />
      </>
    ),
    github: <path d="M10 1.8a8.2 8.2 0 0 0-2.6 16c.4.1.5-.2.5-.4v-1.6c-2.2.5-2.7-.9-2.7-.9-.3-.9-.9-1.1-.9-1.1-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.2 1.8.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4a3.1 3.1 0 0 1 .8-2.2c-.1-.2-.4-1 .1-2.2 0 0 .7-.2 2.3.8a7.9 7.9 0 0 1 4.2 0c1.6-1 2.3-.8 2.3-.8.5 1.2.2 2 .1 2.2.5.6.8 1.4.8 2.2 0 3.1-1.9 3.8-3.6 4 .3.2.5.7.5 1.4v2.3c0 .2.1.5.5.4A8.2 8.2 0 0 0 10 1.8Z" />,
    facebook: <path d="M11.4 18v-7h2.3l.4-2.7h-2.7V6.6c0-.8.2-1.3 1.4-1.3h1.5V2.9c-.3 0-1.1-.1-2.1-.1-2.1 0-3.5 1.3-3.5 3.6v2H6.3V11h2.4v7h2.7Z" />,
    instagram: <path d="M10 5.7A4.3 4.3 0 1 0 10 14.3 4.3 4.3 0 0 0 10 5.7Zm0 7.1a2.8 2.8 0 1 1 0-5.6 2.8 2.8 0 0 1 0 5.6Zm5.5-7.3a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM18.3 6.5c-.1-1.3-.4-2.4-1.3-3.3-.9-.9-2-1.2-3.3-1.3H6.3C5 2 3.9 2.3 3 3.2c-.9.9-1.2 2-1.3 3.3v7c.1 1.3.4 2.4 1.3 3.3.9.9 2 1.2 3.3 1.3h7.4c1.3-.1 2.4-.4 3.3-1.3.9-.9 1.2-2 1.3-3.3v-7ZM16.6 15.2c-.4 1-1.1 1.4-2.1 1.4H5.5c-1 0-1.7-.4-2.1-1.4-.3-.8-.2-2.5-.2-5.2s-.1-4.4.2-5.2c.4-1 1.1-1.4 2.1-1.4h9c1 0 1.7.4 2.1 1.4.3.8.2 2.5.2 5.2s.1 4.4-.2 5.2Z" />,
    youtube: <path d="M18.4 5.2a2.2 2.2 0 0 0-1.5-1.6C15.5 3.2 10 3.2 10 3.2s-5.5 0-6.9.4a2.2 2.2 0 0 0-1.5 1.6A23 23 0 0 0 1.2 10c0 1.6.1 3.2.4 4.8a2.2 2.2 0 0 0 1.5 1.6c1.4.4 6.9.4 6.9.4s5.5 0 6.9-.4a2.2 2.2 0 0 0 1.5-1.6c.3-1.6.4-3.2.4-4.8s-.1-3.2-.4-4.8ZM8.2 13V7l4.8 3-4.8 3Z" />,
  };

  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" className="size-[17px] fill-current">
      {paths[name]}
    </svg>
  );
}
