import Link from "next/link";
import {
  Activity,
  ArrowRight,
  Check,
  CheckCircle2,
  Database,
  FileCheck2,
  Fingerprint,
  GitBranch,
  MoveRight,
  ScanFace,
  Server,
  ShieldCheck,
} from "lucide-react";
import type { ProductContent } from "../../data/products";
import { products } from "../../data/products";
import CodeBlock from "../forDev/CodeBlock";

export default function ProductPageContent({ product }: { product: ProductContent }) {
  return (
    <>
      <ProductHero product={product} />
      <ProofStrip product={product} />
      <Capabilities product={product} />
      <Workflow product={product} />
      <Integration product={product} />
      <Deployment product={product} />
      <RelatedProducts product={product} />
    </>
  );
}

function ProductHero({ product }: { product: ProductContent }) {
  return (
    <section className="overflow-hidden border-b border-[#DCE5EC] bg-white">
      <div className="mx-auto grid min-h-[680px] max-w-[1440px] items-center lg:grid-cols-[0.9fr_1.1fr]">
        <div className="px-4 py-16 md:px-8 lg:px-[120px] lg:py-24 xl:px-[140px]">
          <p className="font-mono text-[10px] uppercase tracking-[0.12em]" style={{ color: product.accent }}>
            ThirdFactor {product.name}
          </p>
          <h1 className="mt-5 max-w-[650px] text-[44px] font-normal leading-[1.02] tracking-[-0.04em] text-[#00274A] md:text-[60px]">
            {product.headline}
          </h1>
          <p className="mt-6 max-w-[590px] text-[17px] leading-[1.65] text-[#526476]">{product.summary}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/book-demo" className="flex h-12 items-center gap-2 bg-[#007BE5] px-6 text-[14px] font-medium text-white hover:bg-[#0069C2]">
              Book a demo <ArrowRight size={16} />
            </Link>
            <Link href="/dev" className="flex h-12 items-center gap-2 border border-[#C5D3DE] px-6 text-[14px] font-medium text-[#00274A] hover:border-[#007BE5]">
              API documentation <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        <div className="relative flex min-h-[440px] items-center justify-center border-t border-[#DCE5EC] bg-[#F3F7FA] p-8 lg:min-h-[680px] lg:border-l lg:border-t-0">
          <div className="absolute left-7 top-7 font-mono text-[10px] uppercase tracking-[0.12em] text-[#8091A0]">{product.eyebrow}</div>
          <ProductVisual slug={product.slug} accent={product.accent} />
          <div className="absolute bottom-7 left-7 right-7 flex items-center justify-between border-t border-[#C7D4DE] pt-4 text-[11px] text-[#718391]">
            <span>Identity infrastructure</span>
            <span>TF / {product.slug.toUpperCase()}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProductVisual({ slug, accent }: { slug: string; accent: string }) {
  return (
    <div className="relative w-full max-w-[650px] border border-[#B9C9D5] bg-[#FDFEFE] shadow-[0_26px_70px_rgba(0,39,74,0.13)]">
      <div className="flex h-12 items-center justify-between border-b border-[#D3DEE6] bg-white px-4">
        <div className="flex items-center gap-2">
          <span className="size-2 bg-[#AFC0CC]" />
          <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-[#6F8291]">ThirdFactor control plane</span>
        </div>
        <span className="flex items-center gap-1.5 font-mono text-[9px] uppercase text-[#3F7660]">
          <span className="size-1.5 rounded-full bg-[#33A36B]" /> Live
        </span>
      </div>
      <div className="min-h-[390px] p-4 sm:p-6">
        {slug === "verify" && <VerifyVisual accent={accent} />}
        {slug === "shield" && <ShieldVisual accent={accent} />}
        {slug === "comply" && <ComplyVisual accent={accent} />}
        {slug === "access" && <AccessVisual accent={accent} />}
        {slug === "lens" && <LensVisual accent={accent} />}
        {slug === "charter" && <CharterVisual accent={accent} />}
        {slug === "bedrock" && <BedrockVisual accent={accent} />}
      </div>
    </div>
  );
}

function VerifyVisual({ accent }: { accent: string }) {
  return (
    <div className="grid h-full gap-4 sm:grid-cols-[0.85fr_1.15fr]">
      <div className="relative flex min-h-[280px] items-center justify-center overflow-hidden border border-[#CEDAE3] bg-[#E9EFF3]">
        <div className="absolute inset-5 border border-dashed border-[#8EA5B5]" />
        <div className="w-[72%] rotate-[-2deg] border border-[#9FB2C0] bg-[#F8FAFB] p-4 shadow-lg">
          <div className="flex gap-3">
            <div className="grid size-14 place-items-center bg-[#D9E2E8]"><ScanFace size={28} className="text-[#738999]" /></div>
            <div className="flex-1 space-y-2 pt-1">
              <div className="h-2 w-2/3 bg-[#AFC0CC]" />
              <div className="h-2 w-full bg-[#D0DAE1]" />
              <div className="h-2 w-4/5 bg-[#D0DAE1]" />
            </div>
          </div>
          <div className="mt-5 grid grid-cols-3 gap-2">{[1, 2, 3].map((i) => <div key={i} className="h-5 bg-[#E3E9ED]" />)}</div>
        </div>
        <span className="absolute bottom-3 left-3 bg-white px-2 py-1 font-mono text-[8px] uppercase text-[#4C6273]">Citizenship front detected</span>
      </div>
      <div className="border border-[#CEDAE3] bg-white p-4">
        <VisualTitle icon={FileCheck2} title="Extraction result" accent={accent} />
        <div className="mt-5 space-y-4">
          <DataRow label="Document type" value="Citizenship" />
          <DataRow label="Full name" value="Aarav Shrestha" />
          <DataRow label="Document number" value="12-34-56-78901" />
          <DataRow label="Date of birth" value="2054-08-17 BS" />
        </div>
        <div className="mt-6 flex items-center justify-between border-t border-[#DDE5EA] pt-4">
          <span className="text-[11px] text-[#637887]">Document confidence</span>
          <strong className="font-mono text-[18px]" style={{ color: accent }}>99.4%</strong>
        </div>
      </div>
    </div>
  );
}

function ShieldVisual({ accent }: { accent: string }) {
  const signals = [82, 96, 74, 91, 87, 98, 89, 94, 77, 93, 97, 90];
  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-[1.1fr_0.9fr]">
        <div className="relative min-h-[235px] overflow-hidden border border-[#CEDAE3] bg-[#12202B]">
          <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(#8FA6B6_1px,transparent_1px),linear-gradient(90deg,#8FA6B6_1px,transparent_1px)] [background-size:28px_28px]" />
          <div className="absolute inset-0 grid place-items-center">
            <div className="relative grid size-36 place-items-center rounded-full border border-white/20">
              <div className="grid size-24 place-items-center rounded-full border-2" style={{ borderColor: accent }}>
                <Fingerprint size={54} className="text-white/80" />
              </div>
              <span className="absolute -right-5 top-5 bg-white px-2 py-1 font-mono text-[8px] text-[#153044]">Depth verified</span>
            </div>
          </div>
          <span className="absolute bottom-3 left-3 font-mono text-[9px] uppercase text-white/55">Passive session / 00:02.4</span>
        </div>
        <div className="border border-[#CEDAE3] bg-white p-4">
          <VisualTitle icon={ShieldCheck} title="Attack analysis" accent={accent} />
          <div className="mt-5 space-y-3">
            <ScoreRow label="Liveness" value="98.7" accent={accent} />
            <ScoreRow label="Injection defence" value="Clear" accent={accent} />
            <ScoreRow label="Replay defence" value="Clear" accent={accent} />
            <ScoreRow label="Face match" value="92.1" accent={accent} />
          </div>
        </div>
      </div>
      <div className="mt-4 flex h-14 items-end gap-1 border border-[#CEDAE3] bg-white px-3 pb-2 pt-3">
        {signals.map((height, i) => <span key={i} className="flex-1" style={{ height: `${height / 2.8}px`, backgroundColor: i === 7 ? accent : "#C7D4DD" }} />)}
      </div>
    </div>
  );
}

function ComplyVisual({ accent }: { accent: string }) {
  return (
    <div className="grid gap-4 sm:grid-cols-[0.9fr_1.1fr]">
      <div className="border border-[#CEDAE3] bg-white p-4">
        <VisualTitle icon={ShieldCheck} title="Customer risk" accent={accent} />
        <div className="mt-7 text-center">
          <div className="mx-auto grid size-32 place-items-center rounded-full border-[10px] border-[#DCE9E2]">
            <div><strong className="block text-[34px] font-normal" style={{ color: accent }}>18</strong><span className="text-[9px] uppercase text-[#718391]">Low risk</span></div>
          </div>
        </div>
        <div className="mt-7 grid grid-cols-2 gap-2 text-center">
          <SmallStat label="Open alerts" value="2" />
          <SmallStat label="Sources" value="12" />
        </div>
      </div>
      <div className="border border-[#CEDAE3] bg-white">
        <div className="border-b border-[#DCE5EA] p-4"><VisualTitle icon={Database} title="Screening activity" accent={accent} /></div>
        {[
          ["Sanctions", "No match", "Clear"],
          ["PEP database", "Potential", "Review"],
          ["Adverse media", "No match", "Clear"],
          ["Internal watchlist", "No match", "Clear"],
        ].map(([source, detail, status]) => (
          <div key={source} className="grid grid-cols-[1fr_auto] items-center border-b border-[#E5EBEF] px-4 py-3 last:border-b-0">
            <div><p className="text-[11px] font-medium text-[#284257]">{source}</p><p className="mt-1 text-[9px] text-[#83929E]">{detail}</p></div>
            <span className={`px-2 py-1 font-mono text-[8px] uppercase ${status === "Review" ? "bg-[#FFF1D9] text-[#9A5C00]" : "bg-[#E8F5ED] text-[#297247]"}`}>{status}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function AccessVisual({ accent }: { accent: string }) {
  return (
    <div className="mx-auto max-w-[430px] border border-[#CEDAE3] bg-white">
      <div className="border-b border-[#DCE5EA] p-5 text-center">
        <div className="mx-auto grid size-12 place-items-center rounded-full" style={{ backgroundColor: `${accent}18`, color: accent }}><Fingerprint size={24} /></div>
        <h3 className="mt-3 text-[16px] font-medium text-[#17354C]">Confirm it&apos;s you</h3>
        <p className="mt-1 text-[10px] text-[#748794]">Changing payout account requires high assurance</p>
      </div>
      <div className="p-5">
        {[
          ["Trusted device", "complete"],
          ["Passive liveness", "active"],
          ["Face comparison", "pending"],
        ].map(([label, state], index) => (
          <div key={label} className="flex items-center gap-3 pb-5 last:pb-0">
            <div className={`grid size-7 place-items-center rounded-full border ${state === "complete" ? "border-[#58A978] bg-[#E8F5ED] text-[#318054]" : state === "active" ? "text-white" : "border-[#C9D5DE] text-[#9BACB8]"}`} style={state === "active" ? { backgroundColor: accent, borderColor: accent } : undefined}>
              {state === "complete" ? <Check size={13} /> : <span className="font-mono text-[9px]">{index + 1}</span>}
            </div>
            <div className="flex-1 border-b border-[#E4EAEE] pb-5 last:border-0"><p className="text-[12px] text-[#284257]">{label}</p><p className="mt-1 text-[9px] capitalize text-[#83929E]">{state}</p></div>
          </div>
        ))}
        <button className="mt-5 h-10 w-full text-[11px] font-medium text-white" style={{ backgroundColor: accent }}>Continue verification</button>
      </div>
    </div>
  );
}

function LensVisual({ accent }: { accent: string }) {
  const bars = [45, 58, 52, 76, 69, 84, 79, 92, 86, 98, 91, 95];
  return (
    <div>
      <div className="grid grid-cols-3 gap-3">
        <SmallStat label="Approval rate" value="91.8%" />
        <SmallStat label="Manual review" value="6.2%" />
        <SmallStat label="Fraud blocked" value="1,284" />
      </div>
      <div className="mt-4 border border-[#CEDAE3] bg-white p-4">
        <div className="flex items-center justify-between"><VisualTitle icon={Activity} title="Verification volume" accent={accent} /><span className="font-mono text-[8px] text-[#7D8E9A]">LAST 30 DAYS</span></div>
        <div className="mt-7 flex h-36 items-end gap-2 border-b border-l border-[#D8E1E7] pl-3">
          {bars.map((height, i) => <div key={i} className="flex-1" style={{ height: `${height}%`, backgroundColor: i > 8 ? accent : "#BFD0DC" }} />)}
        </div>
        <div className="mt-3 flex justify-between font-mono text-[8px] text-[#8A9AA6]"><span>MAY 01</span><span>MAY 15</span><span>MAY 30</span></div>
      </div>
    </div>
  );
}

function CharterVisual({ accent }: { accent: string }) {
  const nodes = [
    { title: "Document", detail: "Verify citizenship", x: "left-0 top-3" },
    { title: "Liveness", detail: "Passive check", x: "left-[37%] top-3" },
    { title: "Decision", detail: "Risk < 40", x: "right-0 top-3" },
    { title: "Manual review", detail: "Compliance queue", x: "left-[18%] bottom-3" },
    { title: "Approve", detail: "Create customer", x: "right-[10%] bottom-3" },
  ];
  return (
    <div className="relative h-[360px] overflow-hidden border border-[#CEDAE3] bg-[#F4F7F9]">
      <div className="absolute inset-0 opacity-50 [background-image:radial-gradient(#A9BBC8_1px,transparent_1px)] [background-size:18px_18px]" />
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 600 360" fill="none">
        <path d="M125 70H255M370 70H480M310 100L210 270M360 100L475 270M280 290H430" stroke="#9EB2C0" strokeWidth="1.5" strokeDasharray="5 5" />
      </svg>
      {nodes.map((node, i) => (
        <div key={node.title} className={`absolute z-10 w-[28%] min-w-[105px] border bg-white p-3 shadow-sm ${node.x}`} style={{ borderColor: i === 2 ? accent : "#C8D5DE" }}>
          <div className="flex items-center gap-2"><GitBranch size={12} style={{ color: accent }} /><span className="text-[10px] font-medium text-[#284257]">{node.title}</span></div>
          <p className="mt-2 text-[8px] text-[#84939F]">{node.detail}</p>
        </div>
      ))}
    </div>
  );
}

function BedrockVisual({ accent }: { accent: string }) {
  return (
    <div className="relative min-h-[360px] border border-[#CEDAE3] bg-[#101C26] p-5 text-white">
      <div className="flex items-center justify-between"><VisualTitle icon={Server} title="Sovereign cluster" accent="#75BDEB" dark /><span className="font-mono text-[8px] text-white/40">REGION / NP-01</span></div>
      <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3">
        {[
          [FileCheck2, "Document OCR", "4 replicas"],
          [ScanFace, "Face engine", "3 replicas"],
          [ShieldCheck, "Fraud defence", "2 replicas"],
          [GitBranch, "Policy engine", "2 replicas"],
          [Database, "Audit store", "encrypted"],
          [Activity, "Telemetry", "healthy"],
        ].map(([Icon, title, detail]) => {
          const NodeIcon = Icon as typeof Server;
          return (
            <div key={title as string} className="border border-white/15 bg-white/[0.04] p-3">
              <NodeIcon size={15} style={{ color: accent }} />
              <p className="mt-5 text-[10px]">{title as string}</p>
              <p className="mt-1 font-mono text-[8px] text-white/40">{detail as string}</p>
              <div className="mt-3 h-0.5 bg-white/10"><div className="h-full w-[86%]" style={{ backgroundColor: accent }} /></div>
            </div>
          );
        })}
      </div>
      <div className="mt-4 flex items-center justify-between border-t border-white/15 pt-4 font-mono text-[8px] text-white/45">
        <span>ZERO EXTERNAL RETENTION</span><span className="flex items-center gap-1 text-[#79D6A1]"><span className="size-1.5 rounded-full bg-[#50C681]" /> ALL SYSTEMS HEALTHY</span>
      </div>
    </div>
  );
}

function VisualTitle({ icon: Icon, title, accent, dark = false }: { icon: typeof Activity; title: string; accent: string; dark?: boolean }) {
  return <div className="flex items-center gap-2"><Icon size={15} style={{ color: accent }} /><span className={`text-[11px] font-medium ${dark ? "text-white" : "text-[#284257]"}`}>{title}</span></div>;
}

function DataRow({ label, value }: { label: string; value: string }) {
  return <div><p className="font-mono text-[8px] uppercase tracking-[0.08em] text-[#8A9AA6]">{label}</p><p className="mt-1 border-b border-[#E3E9ED] pb-2 text-[11px] text-[#284257]">{value}</p></div>;
}

function ScoreRow({ label, value, accent }: { label: string; value: string; accent: string }) {
  return <div className="flex items-center justify-between border-b border-[#E4EAEE] pb-3"><span className="text-[10px] text-[#607584]">{label}</span><span className="flex items-center gap-1.5 font-mono text-[10px]" style={{ color: accent }}><CheckCircle2 size={12} /> {value}</span></div>;
}

function SmallStat({ label, value }: { label: string; value: string }) {
  return <div className="border border-[#CEDAE3] bg-white p-3"><p className="font-mono text-[8px] uppercase tracking-[0.06em] text-[#84939F]">{label}</p><p className="mt-2 text-[18px] font-normal text-[#17354C]">{value}</p></div>;
}

function ProofStrip({ product }: { product: ProductContent }) {
  return (
    <section className="border-b border-[#DCE5EC] bg-[#00274A] text-white">
      <div className="mx-auto grid max-w-[1160px] grid-cols-1 px-4 sm:grid-cols-3 md:px-8">
        {product.metric.map((metric) => (
          <div key={metric.label} className="border-b border-white/15 py-7 sm:border-b-0 sm:border-r sm:px-8 sm:first:pl-0 sm:last:border-r-0">
            <p className="text-[30px] font-normal leading-none">{metric.value}</p>
            <p className="mt-2 text-[12px] text-white/60">{metric.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Capabilities({ product }: { product: ProductContent }) {
  return (
    <section className="border-b border-[#DCE5EC] bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[1160px] px-4 md:px-8">
        <SectionHeading label="Capabilities" title={`What ${product.name} handles`} description="A focused operating layer built for production identity workflows, clear decisions, and controlled exceptions." />
        <div className="mt-12 grid border-t border-l border-[#DCE5EC] md:grid-cols-2">
          {product.capabilities.map((capability, index) => (
            <article key={capability.title} className="min-h-[250px] border-b border-r border-[#DCE5EC] p-7 md:p-9">
              <span className="font-mono text-[10px] text-[#8A9AA8]">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="mt-8 text-[23px] font-normal tracking-[-0.02em] text-[#00274A]">{capability.title}</h3>
              <p className="mt-3 max-w-[430px] text-[14px] leading-[1.65] text-[#526476]">{capability.description}</p>
              <p className="mt-7 border-t border-[#E5EBF0] pt-4 font-mono text-[10px] leading-[1.5] uppercase tracking-[0.06em]" style={{ color: product.accent }}>{capability.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Workflow({ product }: { product: ProductContent }) {
  return (
    <section className="border-b border-[#DCE5EC] bg-[#F7F9FB] py-16 md:py-24">
      <div className="mx-auto max-w-[1160px] px-4 md:px-8">
        <SectionHeading label="Workflow" title="From input to decision" description="Keep customer-facing steps short while preserving the evidence your risk and operations teams need." />
        <div className="mt-12 grid gap-0 md:grid-cols-3">
          {product.workflow.map((item, index) => (
            <article key={item.step} className="relative border-b border-[#C9D5DF] py-7 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0">
              <span className="font-mono text-[11px]" style={{ color: product.accent }}>{item.step}</span>
              <h3 className="mt-8 text-[22px] font-normal text-[#00274A]">{item.title}</h3>
              <p className="mt-3 text-[14px] leading-[1.65] text-[#526476]">{item.description}</p>
              {index < product.workflow.length - 1 && <MoveRight size={18} className="absolute right-[-9px] top-7 z-10 hidden bg-[#F7F9FB] text-[#8091A0] md:block" />}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Integration({ product }: { product: ProductContent }) {
  return (
    <section className="border-b border-[#DCE5EC] bg-white py-16 md:py-24">
      <div className="mx-auto grid max-w-[1160px] items-center gap-12 px-4 md:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.12em]" style={{ color: product.accent }}>Integration</p>
          <h2 className="mt-4 text-[34px] font-normal leading-[1.08] tracking-[-0.03em] text-[#00274A] md:text-[44px]">One integration, clear outcomes.</h2>
          <p className="mt-5 max-w-[470px] text-[15px] leading-[1.7] text-[#526476]">
            Start through API, hosted flow, or embedded SDK. Every channel returns consistent session states, reason codes, and webhook events.
          </p>
          <ul className="mt-7 space-y-3">
            {["Sandbox and production environments", "Webhooks for state and result updates", "Server-side tokens and auditable sessions"].map((item) => (
              <li key={item} className="flex items-center gap-3 text-[13px] text-[#40566A]"><Check size={15} className="text-[#007BE5]" /> {item}</li>
            ))}
          </ul>
        </div>
        <CodeBlock code={product.code} />
      </div>
    </section>
  );
}

function Deployment({ product }: { product: ProductContent }) {
  return (
    <section className="border-b border-[#DCE5EC] bg-[#00274A] py-16 text-white md:py-24">
      <div className="mx-auto max-w-[1160px] px-4 md:px-8">
        <SectionHeading light label="Deployment" title="Built around your operating model" description="Use a managed service, private environment, or sovereign deployment without changing the customer journey." />
        <div className="mt-12 grid border-t border-white/20 md:grid-cols-3">
          {product.deployment.map((item) => (
            <article key={item.title} className="border-b border-white/20 py-7 md:border-b-0 md:border-r md:px-8 md:first:pl-0 md:last:border-r-0">
              <h3 className="text-[20px] font-normal">{item.title}</h3>
              <p className="mt-3 text-[13px] leading-[1.65] text-white/60">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function RelatedProducts({ product }: { product: ProductContent }) {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-[1160px] px-4 md:px-8">
        <SectionHeading label="Platform" title="Works better together" description="Combine products through Charter workflows and use Lens to understand the resulting risk and operational performance." />
        <div className="mt-10 grid border-t border-[#DCE5EC] md:grid-cols-3">
          {product.related.map((slug) => {
            const related = products[slug];
            return (
              <Link key={slug} href={`/products/${slug}`} className="group border-b border-[#DCE5EC] py-7 md:border-b-0 md:border-r md:px-7 md:first:pl-0 md:last:border-r-0">
                <p className="font-mono text-[10px] uppercase tracking-[0.1em]" style={{ color: related.accent }}>ThirdFactor</p>
                <h3 className="mt-3 text-[23px] font-normal text-[#00274A]">{related.name}</h3>
                <p className="mt-3 line-clamp-2 text-[13px] leading-[1.6] text-[#64748B]">{related.summary}</p>
                <span className="mt-6 flex items-center gap-2 text-[12px] font-medium text-[#007BE5]">Explore product <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" /></span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function SectionHeading({ label, title, description, light = false }: { label: string; title: string; description: string; light?: boolean }) {
  return (
    <div className="grid gap-5 md:grid-cols-[0.8fr_1.2fr] md:items-end">
      <div>
        <p className={`font-mono text-[10px] uppercase tracking-[0.12em] ${light ? "text-[#54AFFF]" : "text-[#007BE5]"}`}>{label}</p>
        <h2 className={`mt-4 text-[34px] font-normal leading-[1.08] tracking-[-0.03em] md:text-[44px] ${light ? "text-white" : "text-[#00274A]"}`}>{title}</h2>
      </div>
      <p className={`max-w-[520px] text-[15px] leading-[1.7] md:justify-self-end ${light ? "text-white/60" : "text-[#526476]"}`}>{description}</p>
    </div>
  );
}
