import Link from "next/link";
import { ArrowRight, BookOpen, FileText } from "lucide-react";

const resources = [
  {
    type: "Whitepaper",
    title: "The Sovereign Identity Playbook",
    description:
      "A practical guide to deploying compliant identity infrastructure without sending sensitive data across borders.",
    href: "/blogs/sovereign-identity-playbook",
    icon: FileText,
    code: "TF / 01",
  },
  {
    type: "Industry Insight",
    title: "How AI is reshaping KYC in regulated markets",
    description:
      "Where intelligent automation improves onboarding, and where human oversight still matters.",
    href: "/blogs/ai-powered-kyc",
    icon: BookOpen,
    code: "TF / 02",
  },
  {
    type: "Case Study",
    title: "Building faster onboarding without compromising trust",
    description:
      "Lessons from designing identity workflows for banks, fintechs, and high-volume digital services.",
    href: "/blogs/faster-onboarding",
    icon: BookOpen,
    code: "TF / 03",
  },
];

export default function FeaturedResources() {
  return (
    <section className="bg-white px-4 py-[72px] md:px-8 md:py-[104px] lg:px-[120px] lg:py-[120px] xl:px-[140px]">
      <div className="mx-auto w-full max-w-[1160px]">
        <div className="mb-10 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between">
          <div className="max-w-[680px]">
            <p className="mb-4 w-fit rounded border border-[#D9E8F7] bg-[#F7FBFF] px-2 py-1 font-mono text-[11px] uppercase tracking-[0.08em] text-[#64748B]">
              Featured resources
            </p>
            <h2 className="text-[32px] font-normal leading-[1.12] tracking-normal text-[#00274A] md:text-[44px]">
              Intelligence for building trust at scale
            </h2>
          </div>

          <Link
            href="/blogs"
            className="group inline-flex h-11 w-fit items-center gap-3 rounded-full bg-[#F2F2F7] px-5 text-[14px] font-medium text-[#00274A] transition-colors hover:bg-[#007BE5] hover:text-white"
          >
            Explore all resources
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid overflow-hidden border border-[#D9E8F7] md:grid-cols-3">
          {resources.map((resource) => {
            const Icon = resource.icon;

            return (
              <Link
                key={resource.title}
                href={resource.href}
                className="group flex min-h-[430px] flex-col border-b border-[#D9E8F7] bg-white transition-colors last:border-b-0 hover:bg-[#F7FBFF] md:border-b-0 md:border-r md:last:border-r-0"
              >
                <div className="relative h-[174px] overflow-hidden border-b border-[#D9E8F7] bg-[#EBF5FF]">
                  <div className="absolute -right-5 -top-5 grid grid-cols-3 gap-1.5 transition-transform duration-500 group-hover:translate-x-[-6px] group-hover:translate-y-[6px]">
                    {Array.from({ length: 9 }).map((_, index) => (
                      <span
                        key={index}
                        className={`size-11 ${
                          [1, 3, 5, 7].includes(index)
                            ? "border border-[#007BE5]/35 bg-white/50"
                            : "bg-[#007BE5]"
                        }`}
                      />
                    ))}
                  </div>
                  <div className="absolute bottom-5 left-6 font-mono text-[11px] tracking-[0.08em] text-[#007BE5]">
                    {resource.code}
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6 md:p-7">
                  <div className="mb-5 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#64748B]">
                    <Icon size={15} />
                    {resource.type}
                  </div>
                  <h3 className="text-[24px] font-normal leading-[1.2] tracking-normal text-[#00274A]">
                    {resource.title}
                  </h3>
                  <p className="mt-4 text-[14px] leading-[1.6] text-[#64748B]">
                    {resource.description}
                  </p>

                  <span className="mt-auto flex items-center gap-2 pt-7 text-[13px] font-semibold text-[#007BE5]">
                    Read resource
                    <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
