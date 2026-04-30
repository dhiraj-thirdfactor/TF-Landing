import Link from "next/link";
import { Search } from "lucide-react";
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AskQuestionChat from "../components/AskQuestionChat";
import DocSearch from "../components/DocSearch";

export const metadata = {
  title: "Developer Documentation | ThirdFactor",
  description:
    "Integrate ThirdFactor's AI-led identity verification APIs into your applications.",
};

const navigation = [
  {
    title: "Getting Started",
    links: [
      { label: "Introduction", href: "#" },
      { label: "Authentication", href: "#" },
      { label: "Environments", href: "#" },
    ],
  },
  {
    title: "Core APIs",
    links: [
      { label: "Document Verification", href: "#" },
      { label: "Liveness Detection", href: "#" },
      { label: "Face Comparison", href: "#" },
    ],
  },
  {
    title: "SDKs",
    links: [
      { label: "Web SDK", href: "#" },
      { label: "iOS SDK", href: "#" },
      { label: "Android SDK", href: "#" },
    ],
  },
];

export default function DevDocsPage() {
  return (
    <>
      <TopBar />
      <Navbar />

      <div className="bg-[#fafafa] min-h-[calc(100vh-120px)] w-full font-sans">
        <div className="max-w-[1440px] mx-auto flex w-full relative items-start">
          {/* Left Sidebar - Fixed to Logo Width */}
          <aside className="w-[260px] shrink-0 sticky top-14 h-[calc(100vh-56px)] overflow-y-auto pl-6 pr-6 py-8 hidden md:flex flex-col gap-8">
            {/* Search Box */}
            <DocSearch />

            <nav className="flex flex-col gap-6">
              {navigation.map((section) => (
                <div key={section.title}>
                  <h3 className="text-[11px] font-bold text-neutral-400 uppercase tracking-wider mb-3">
                    {section.title}
                  </h3>
                  <ul className="flex flex-col gap-2.5">
                    {section.links.map((link) => (
                      <li key={link.label}>
                        <Link
                          href={link.href}
                          className="text-[13px] text-neutral-600 hover:text-[#007BE5] transition-colors block font-medium"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1 px-8 lg:px-12 py-10 bg-white border-x border-neutral-200 min-h-[calc(100vh-56px)] shadow-sm max-w-[800px]">
            <div className="mb-16">
              <span className="text-[12px] font-semibold text-[#007BE5] bg-[#EBF5FF] px-2.5 py-1 rounded-full mb-4 inline-block">
                v1.0 API
              </span>
              <h1 className="text-[36px] font-medium text-neutral-900 tracking-tight mb-4 leading-tight">
                Introduction
              </h1>
              <p className="text-[16px] text-neutral-600 leading-relaxed">
                Welcome to the ThirdFactor API documentation. Our APIs allow you
                to seamlessly integrate secure, AI-driven identity verification
                into your applications.
              </p>
            </div>

            <section className="mb-12">
              <h2 className="text-[22px] font-medium text-neutral-900 tracking-tight mb-4">
                Authentication
              </h2>
              <p className="text-[15px] text-neutral-600 leading-relaxed mb-6">
                All API requests must be authenticated using a Bearer token. You
                can generate API keys from your ThirdFactor developer dashboard.
              </p>

              <div className="bg-[#0a0d12] rounded-xl border border-neutral-800 overflow-hidden shadow-lg">
                <div className="px-4 py-3 border-b border-neutral-800 flex gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                </div>
                <pre className="p-5 overflow-x-auto text-[13px] text-neutral-300 font-mono leading-relaxed">
                  <code>
                    curl -X POST https://api.thirdfactor.ai/v1/verify \ -H
                    "Authorization: Bearer YOUR_API_KEY" \ -H "Content-Type:
                    application/json"
                  </code>
                </pre>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-[22px] font-medium text-neutral-900 tracking-tight mb-4">
                Base URLs
              </h2>
              <p className="text-[15px] text-neutral-600 leading-relaxed mb-6">
                We provide separate environments for testing and production to
                ensure safe integration.
              </p>

              <div className="bg-white border border-neutral-200 rounded-xl overflow-hidden shadow-sm">
                <table className="w-full text-left text-[14px]">
                  <thead>
                    <tr className="bg-neutral-50 border-b border-neutral-200">
                      <th className="px-5 py-3.5 text-neutral-900 font-medium">
                        Environment
                      </th>
                      <th className="px-5 py-3.5 text-neutral-900 font-medium">
                        Base URL
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-neutral-200">
                      <td className="px-5 py-4 text-neutral-600 font-medium">
                        Sandbox
                      </td>
                      <td className="px-5 py-4 text-[#007BE5] font-mono text-[13px]">
                        https://sandbox.api.thirdfactor.ai
                      </td>
                    </tr>
                    <tr>
                      <td className="px-5 py-4 text-neutral-600 font-medium">
                        Production
                      </td>
                      <td className="px-5 py-4 text-[#007BE5] font-mono text-[13px]">
                        https://api.thirdfactor.ai
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </main>

          {/* Right Sidebar - On this page */}
          <aside className="w-[280px] shrink-0 sticky top-14 h-[calc(100vh-56px)] pl-8 pr-6 py-10 hidden xl:flex flex-col">
            {/* Table of Contents */}
            <div>
              <h4 className="text-[13px] font-semibold text-neutral-900 mb-4">
                On this page
              </h4>
              <ul className="flex flex-col gap-3 text-[13px] text-neutral-500 font-medium border-l border-neutral-200">
                <li className="pl-3 -ml-[1px] border-l border-[#007BE5] text-[#007BE5]">
                  Introduction
                </li>
                <li className="pl-3 -ml-[1px] border-l border-transparent hover:border-neutral-300 hover:text-neutral-900 cursor-pointer transition-colors">
                  Authentication
                </li>
                <li className="pl-3 -ml-[1px] border-l border-transparent hover:border-neutral-300 hover:text-neutral-900 cursor-pointer transition-colors">
                  Base URLs
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>

      {/* Floating Ask a Question Chat Box */}
      <AskQuestionChat />
      <Footer />
    </>
  );
}
