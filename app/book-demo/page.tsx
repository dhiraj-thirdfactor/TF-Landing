import Link from "next/link";
import { ArrowRight, Check, ChevronDown, LockKeyhole, Server, ShieldCheck } from "lucide-react";
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TrustLogos from "../components/TrustLogos";

export const metadata = {
  title: "Book a Demo | ThirdFactor",
  description: "Schedule a personalized demo of ThirdFactor's identity verification platform.",
};

const agenda = [
  "Review your current onboarding and fraud controls",
  "Map the right API, SDK, or white-label integration",
  "Assess data residency and deployment requirements",
  "Build a transparent rollout and pricing plan",
];

const trustItems = [
  { icon: ShieldCheck, label: "NRB-aligned controls" },
  { icon: Server, label: "Sovereign deployment" },
  { icon: LockKeyhole, label: "Zero-retention options" },
];

export default function BookDemoPage() {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Navbar />

      <main>
        <section className="border-b border-[#D9E8F7] bg-white">
          <div className="mx-auto grid min-h-[760px] max-w-[1440px] lg:grid-cols-[minmax(0,1fr)_minmax(460px,0.82fr)]">
            <div className="flex flex-col justify-center px-4 py-16 md:px-8 md:py-20 lg:px-[140px] lg:py-24 lg:pr-20">
              <p className="mb-5 w-fit rounded border border-[#D9E8F7] bg-[#F7FBFF] px-2 py-1 font-mono text-[11px] uppercase tracking-[0.08em] text-[#64748B]">
                Architecture consultation
              </p>
              <h1 className="max-w-[650px] text-[42px] font-normal leading-[1.05] tracking-normal text-[#00274A] md:text-[56px]">
                Design an identity system your risk team can trust.
              </h1>
              <p className="mt-6 max-w-[590px] text-[17px] leading-[1.65] text-[#475569] md:text-[18px]">
                Meet with an identity specialist to evaluate your workflow, deployment constraints, and path to production.
              </p>

              <div className="mt-10 grid gap-4">
                {agenda.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center border border-[#9CCAF4] bg-[#EBF5FF] text-[#007BE5]">
                      <Check size={12} />
                    </span>
                    <span className="text-[15px] leading-[1.5] text-[#334155]">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-12 grid max-w-[650px] grid-cols-1 overflow-hidden border border-[#D9E8F7] sm:grid-cols-3">
                {trustItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-center gap-3 border-b border-[#D9E8F7] bg-[#F7FBFF] p-4 last:border-b-0 sm:border-b-0 sm:border-r sm:last:border-r-0">
                      <Icon size={17} className="shrink-0 text-[#007BE5]" />
                      <span className="text-[12px] leading-[1.4] text-[#475569]">{item.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative flex items-center border-t border-[#D9E8F7] bg-[#F7FBFF] px-4 py-12 md:px-8 lg:border-l lg:border-t-0 lg:px-12 xl:px-16">
              <section className="relative z-10 w-full border border-[#D9E8F7] bg-white p-6 shadow-[0_20px_70px_rgba(0,39,74,0.08)] md:p-9">
                <div className="mb-8 flex items-start justify-between gap-6">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#007BE5]">
                      Request a session
                    </p>
                    <h2 className="mt-3 text-[26px] font-normal text-[#00274A]">
                      Tell us about your deployment.
                    </h2>
                  </div>
                  <span className="hidden font-mono text-[10px] text-[#94A3B8] sm:block">TF / DEMO</span>
                </div>

                <form className="grid gap-5">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <DemoInput label="First name" placeholder="Jane" />
                    <DemoInput label="Last name" placeholder="Doe" />
                  </div>
                  <DemoInput label="Work email" type="email" placeholder="jane@company.com" />
                  <DemoInput label="Organization" placeholder="Company or institution" />

                  <label>
                    <span className="mb-2 block text-[12px] font-medium text-[#334155]">
                      Primary use case
                    </span>
                    <span className="relative block">
                      <select className="h-12 w-full appearance-none border border-[#D9E8F7] bg-white px-4 text-[14px] text-[#334155] outline-none transition focus:border-[#007BE5]">
                        <option value="">Select a use case</option>
                        <option value="kyc">Customer onboarding / KYC</option>
                        <option value="fraud">Fraud and liveness</option>
                        <option value="aml">AML and compliance</option>
                        <option value="infrastructure">Identity infrastructure</option>
                      </select>
                      <ChevronDown size={15} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#64748B]" />
                    </span>
                  </label>

                  <label>
                    <span className="mb-2 block text-[12px] font-medium text-[#334155]">
                      What should we prepare for the call?
                    </span>
                    <textarea
                      rows={4}
                      placeholder="Current workflow, expected volume, deployment requirements..."
                      className="w-full resize-none border border-[#D9E8F7] px-4 py-3 text-[14px] leading-[1.5] text-[#334155] outline-none transition placeholder:text-[#94A3B8] focus:border-[#007BE5]"
                    />
                  </label>

                  <button type="submit" className="mt-1 flex h-12 w-full items-center justify-between bg-[#007BE5] px-5 text-[14px] font-medium text-white transition-colors hover:bg-[#0069C2]">
                    Request a demo
                    <ArrowRight size={16} />
                  </button>

                  <p className="text-[11px] leading-[1.5] text-[#94A3B8]">
                    By submitting, you agree to our{" "}
                    <Link href="/privacy" className="text-[#64748B] underline underline-offset-2">Privacy Policy</Link>
                    {" "}and{" "}
                    <Link href="/terms" className="text-[#64748B] underline underline-offset-2">Terms</Link>.
                  </p>
                </form>
              </section>
            </div>
          </div>
        </section>

        <TrustLogos />

        <section className="border-t border-[#D9E8F7] bg-[#F7FBFF] py-14 md:py-20">
          <div className="mx-auto grid max-w-[1160px] gap-10 px-4 md:grid-cols-2 md:px-8">
            <article className="border-l-2 border-[#007BE5] pl-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#64748B]">
                Customer support
              </p>
              <h2 className="mt-3 text-[26px] font-normal text-[#00274A]">
                Need help fast? Our team is ready via call or email.
              </h2>
              <div className="mt-6 flex flex-col items-start gap-2 text-[14px] text-[#475569]">
                <a href="mailto:info@thirdfactor.ai" className="hover:text-[#007BE5]">info@thirdfactor.ai</a>
                <a href="tel:+9779705180020" className="hover:text-[#007BE5]">+977 9705180020</a>
                <a href="https://www.tingting.io/faqs" className="font-medium text-[#007BE5]">FAQs</a>
                <p>Office opening time: Mon-Fri, 9:00 AM to 6:00 PM</p>
              </div>
            </article>

            <article className="border-l-2 border-[#00274A] pl-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#64748B]">
                Business team
              </p>
              <h2 className="mt-3 text-[26px] font-normal text-[#00274A]">
                Get a personalized demo and see TingTing in action.
              </h2>
              <div className="mt-6 flex flex-col items-start gap-2 text-[14px] text-[#475569]">
                <p className="font-semibold capitalize text-[#00274A]">Srawan Pandey</p>
                <a href="mailto:srawan.pandey@thirdfactor.ai" className="hover:text-[#007BE5]">
                  srawan.pandey@thirdfactor.ai
                </a>
                <a href="tel:+9779801467711" className="hover:text-[#007BE5]">+977 980-1467711</a>
              </div>
            </article>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function DemoInput({ label, placeholder, type = "text" }: { label: string; placeholder: string; type?: string }) {
  return (
    <label>
      <span className="mb-2 block text-[12px] font-medium text-[#334155]">{label}</span>
      <input
        type={type}
        placeholder={placeholder}
        className="h-12 w-full border border-[#D9E8F7] px-4 text-[14px] text-[#334155] outline-none transition placeholder:text-[#94A3B8] focus:border-[#007BE5]"
      />
    </label>
  );
}
