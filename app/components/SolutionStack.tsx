import {
  Database,
  FileCheck2,
  Link2,
  ScanFace,
  ShieldCheck,
  SlidersHorizontal,
} from "lucide-react";

const chips = [
  { label: "Connect", icon: Link2 },
  { label: "Verify", icon: FileCheck2 },
  { label: "Secure", icon: ShieldCheck },
  { label: "Control", icon: SlidersHorizontal },
];

const rows = [
  { service: "Citizenship OCR", identity: "Active", fraud: "Active", review: "Clear" },
  { service: "Passport MRZ", identity: "Active", fraud: "Active", review: "Clear" },
  { service: "Face Liveness", identity: "Active", fraud: "Blocked", review: "Review" },
  { service: "KYB Registry", identity: "Active", fraud: "Pending", review: "Clear" },
  { service: "AML Screening", identity: "Active", fraud: "Active", review: "Escalate" },
];

export default function SolutionStack() {
  return (
    <section className="bg-white py-16 md:py-20 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-4 md:px-8 lg:px-[140px]">
        <div className="relative z-10 flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16 xl:gap-24">
          <div className="flex flex-col gap-5 lg:flex-1">
            <p className="w-fit rounded border border-[#D9E8F7] bg-[#F7FBFF] px-2 py-1 font-mono text-[11px] uppercase tracking-[0.08em] text-[#64748B]">
              The solution
            </p>
            <h2 className="max-w-[620px] font-sans text-[32px] font-normal leading-[1.12] tracking-normal text-[#00274A] md:text-[40px] lg:text-[44px]">
              Connect every identity signal to one governed trust layer.
            </h2>
            <p className="max-w-[560px] font-sans text-[16px] font-normal leading-[1.6] text-[#475569] md:text-[18px]">
              Bring documents, liveness, fraud checks, KYB, and compliance workflows into a single operating surface for risk and onboarding teams.
            </p>
            <div className="mt-2 flex flex-wrap items-center gap-2">
              {chips.map((chip) => {
                const Icon = chip.icon;
                return (
                  <span
                    key={chip.label}
                    className="inline-flex items-center gap-1.5 rounded-full border border-[#D9E8F7] bg-white px-3 py-1.5 font-sans text-[12px] font-medium text-[#475569]"
                  >
                    <Icon size={14} />
                    {chip.label}
                  </span>
                );
              })}
            </div>
          </div>

          <div className="flex justify-center lg:flex-1">
            <div className="relative w-full max-w-[560px] overflow-hidden rounded-2xl border border-[#D9E8F7] bg-[#F7FBFF] p-5 shadow-sm">
              <svg
                className="pointer-events-none absolute inset-0 h-full w-full opacity-70"
                aria-hidden="true"
              >
                {[120, 210, 300, 390].map((x, index) => (
                  <path
                    key={x}
                    d={`M ${x} 28 C ${x} 64, ${280 + (index - 1.5) * 34} 82, ${280 + (index - 1.5) * 34} 112`}
                    fill="none"
                    stroke="#9CCAF4"
                    strokeWidth="1.5"
                    strokeDasharray="4 7"
                    className="solution-dash"
                    style={{ animationDelay: `${index * 180}ms` }}
                  />
                ))}
              </svg>

              <div className="relative z-10">
                <div className="mb-12 flex justify-center gap-3">
                  {["API", "SDK", "Webhook", "Policy"].map((item) => (
                    <div
                      key={item}
                      className="rounded-lg border border-[#D9E8F7] bg-white px-3 py-2 font-sans text-[12px] font-semibold text-[#00274A] shadow-sm"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <div className="overflow-hidden border border-[#D9E8F7] bg-white">
                  <div className="flex items-center gap-2 border-b border-[#D9E8F7] bg-[#EBF5FF] px-4 py-3">
                    <Database size={16} className="text-[#007BE5]" />
                    <span className="font-sans text-[12px] font-bold uppercase tracking-[0.08em] text-[#00274A]">
                      Trust Catalog
                    </span>
                  </div>

                  <div className="grid grid-cols-[1fr_72px_72px_72px] gap-3 border-b border-[#E5E7EB] bg-[#FAFCFF] px-4 py-2">
                    {["Service", "ID", "Fraud", "Ops"].map((heading) => (
                      <span key={heading} className="font-sans text-[10px] font-semibold uppercase tracking-[0.08em] text-[#64748B]">
                        {heading}
                      </span>
                    ))}
                  </div>

                  {rows.map((row) => (
                    <div
                      key={row.service}
                      className="grid grid-cols-[1fr_72px_72px_72px] items-center gap-3 border-b border-[#EEF2F7] px-4 py-3 last:border-b-0"
                    >
                      <div className="flex min-w-0 items-center gap-2.5">
                        <div className="flex size-5 shrink-0 items-center justify-center rounded border border-[#D9E8F7] bg-[#F7FBFF]">
                          <ScanFace size={12} className="text-[#007BE5]" />
                        </div>
                        <span className="truncate font-sans text-[12px] font-medium text-[#00274A]">
                          {row.service}
                        </span>
                      </div>
                      <Status label={row.identity} />
                      <Status label={row.fraud} />
                      <Status label={row.review} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Status({ label }: { label: string }) {
  const tone =
    label === "Active" || label === "Clear"
      ? "bg-emerald-500 text-emerald-700"
      : label === "Pending" || label === "Review"
        ? "bg-amber-500 text-amber-700"
        : "bg-[#007BE5] text-[#0069C2]";

  return (
    <span className={`inline-flex items-center gap-1.5 font-sans text-[10px] font-medium ${tone.split(" ").slice(1).join(" ")}`}>
      <span className={`size-1.5 rounded-full ${tone.split(" ")[0]}`} />
      {label}
    </span>
  );
}
