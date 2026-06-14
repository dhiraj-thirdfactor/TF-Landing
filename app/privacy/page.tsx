import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Privacy Policy | ThirdFactor",
  description: "How ThirdFactor handles privacy, data protection, and personal information.",
};

const sections = [
  {
    title: "Information we process",
    body: "ThirdFactor processes information needed to provide identity verification, fraud prevention, compliance, and support services. This may include contact details, business information, identity document data, biometric verification signals, device metadata, and usage logs.",
  },
  {
    title: "How we use information",
    body: "We use information to deliver and secure our services, verify identities, prevent fraud, meet compliance obligations, provide customer support, improve reliability, and maintain audit records for regulated workflows.",
  },
  {
    title: "Data protection",
    body: "We design our systems around access control, encryption, auditability, and data minimization. Customer production data is handled according to contracted retention, deployment, and residency requirements.",
  },
  {
    title: "Sharing and subprocessors",
    body: "We do not sell personal information. We may share information with authorized service providers, infrastructure partners, legal authorities, or customer-approved subprocessors when necessary to provide the service or comply with law.",
  },
  {
    title: "Your rights",
    body: "Depending on your location and relationship with ThirdFactor, you may have rights to access, correct, delete, restrict, or object to certain processing. Requests can be sent to info@thirdfactor.ai.",
  },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Navbar />
      <main className="mx-auto max-w-[980px] px-4 py-16 md:px-8 md:py-24">
        <p className="mb-4 font-sans text-[13px] font-semibold uppercase tracking-[0.08em] text-[#64748B]">
          Legal
        </p>
        <h1 className="font-sans text-[40px] font-normal leading-[1.08] tracking-normal text-[#00274A] md:text-[56px]">
          Privacy Policy
        </h1>
        <p className="mt-6 max-w-[720px] font-sans text-[18px] leading-[1.6] text-[#475569]">
          This policy explains how ThirdFactor handles information when organizations use our identity infrastructure.
        </p>

        <div className="mt-14 divide-y divide-[#E5E7EB] border-y border-[#E5E7EB]">
          {sections.map((section) => (
            <section key={section.title} className="py-8">
              <h2 className="font-sans text-[22px] font-medium leading-[1.25] text-[#00274A]">
                {section.title}
              </h2>
              <p className="mt-3 font-sans text-[16px] leading-[1.7] text-[#475569]">
                {section.body}
              </p>
            </section>
          ))}
        </div>

        <p className="mt-10 font-sans text-[14px] leading-[1.6] text-[#64748B]">
          Last updated: June 15, 2026. For privacy questions, contact info@thirdfactor.ai.
        </p>
      </main>
      <Footer />
    </div>
  );
}
