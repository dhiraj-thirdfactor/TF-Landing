import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Terms and Conditions | ThirdFactor",
  description: "Terms governing use of ThirdFactor products, websites, and services.",
};

const sections = [
  {
    title: "Use of services",
    body: "ThirdFactor products and websites are intended for lawful business use. Customers are responsible for ensuring that their use of the services complies with applicable identity, privacy, financial, and data protection laws.",
  },
  {
    title: "Customer responsibilities",
    body: "Customers must provide accurate configuration, obtain required end-user notices and consents, protect account credentials, and use results only for authorized verification, fraud prevention, compliance, or operational purposes.",
  },
  {
    title: "Service availability",
    body: "We work to provide reliable access to our systems, APIs, and support channels. Specific uptime, support, deployment, and retention commitments are governed by the applicable customer agreement.",
  },
  {
    title: "Intellectual property",
    body: "ThirdFactor retains ownership of its software, models, documentation, brand assets, and platform technology. Customers retain ownership of their data and business-specific configurations unless otherwise agreed.",
  },
  {
    title: "Limitations",
    body: "The website content is provided for general information. Product capabilities, pricing, deployment options, and compliance requirements may vary by customer agreement, geography, and regulatory context.",
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      <TopBar />
      <Navbar />
      <main className="mx-auto max-w-[980px] px-4 py-16 md:px-8 md:py-24">
        <p className="mb-4 font-sans text-[13px] font-semibold uppercase tracking-[0.08em] text-[#64748B]">
          Legal
        </p>
        <h1 className="font-sans text-[40px] font-normal leading-[1.08] tracking-normal text-[#00274A] md:text-[56px]">
          Terms and Conditions
        </h1>
        <p className="mt-6 max-w-[720px] font-sans text-[18px] leading-[1.6] text-[#475569]">
          These terms outline general conditions for using ThirdFactor websites and services.
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
          Last updated: June 15, 2026. For contract or terms questions, contact info@thirdfactor.ai.
        </p>
      </main>
      <Footer />
    </div>
  );
}
