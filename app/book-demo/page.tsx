import React from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ImpactStudies from "../components/ImpactStudies";

export const metadata = {
  title: "Book a Demo | ThirdFactor",
  description: "Schedule a personalized demo of ThirdFactor's identity verification platform.",
};

export default function BookDemoPage() {
  return (
    <div style={{ background: "#FAFAFA", minHeight: "100vh" }}>
      <TopBar />
      <Navbar />

      <main style={{ paddingTop: "80px", paddingBottom: "120px" }}>
        <div style={{ maxWidth: "1441px", margin: "0 auto", paddingLeft: "140px", paddingRight: "140px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 500px", gap: "100px", alignItems: "flex-start" }}>
            
            {/* Left Copy */}
            <div style={{ paddingTop: "40px" }}>
              <h1 style={{ fontFamily: "var(--font-geist-sans, system-ui)", fontSize: "48px", lineHeight: "1.1", letterSpacing: "-1.5px", color: "#00274A", margin: "0 0 24px 0", fontWeight: 400 }}>
                Get a personalized demo of ThirdFactor.
              </h1>
              <p style={{ fontFamily: "var(--font-geist-sans, system-ui)", fontSize: "18px", lineHeight: "1.6", color: "#525252", margin: "0 0 40px 0", maxWidth: "480px" }}>
                See how the world's fastest-growing fintechs use ThirdFactor to automate KYC, eliminate fraud, and scale confidently in emerging markets.
              </p>

              <div style={{ display: "flex", flexDirection: "column", gap: "24px", marginBottom: "64px" }}>
                {[
                  "Live walkthrough of the biometric and document capture flow",
                  "Deep dive into the compliance dashboard and risk scoring",
                  "Discussion of your specific integration timeline and architecture",
                  "Transparent pricing overview based on your volume"
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
                    <CheckCircle2 color="#007BE5" size={24} style={{ flexShrink: 0, marginTop: "2px" }} />
                    <span style={{ fontFamily: "var(--font-geist-sans, system-ui)", fontSize: "16px", color: "#00274A", lineHeight: "1.5", fontWeight: 500 }}>{item}</span>
                  </div>
                ))}
              </div>

              {/* Trusted by section */}
              <div>
                <p style={{ fontFamily: "var(--font-geist-sans, system-ui)", fontSize: "12px", fontWeight: 600, letterSpacing: "0.08em", color: "#A3A3A3", textTransform: "uppercase", marginBottom: "20px" }}>
                  TRUSTED BY INNOVATIVE TEAMS
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "32px", flexWrap: "wrap", filter: "grayscale(100%) contrast(10%) opacity(0.5)" }}>
                  <Image src="/illustrations/vianetlogo.png" alt="Vianet" width={100} height={28} style={{ objectFit: "contain", height: "28px", width: "auto" }} />
                  <Image src="/illustrations/khalti.png" alt="Khalti" width={100} height={28} style={{ objectFit: "contain", height: "28px", width: "auto" }} />
                  <Image src="/illustrations/nmb.png" alt="NMB Bank" width={80} height={28} style={{ objectFit: "contain", height: "28px", width: "auto" }} />
                  <Image src="/illustrations/dishhome.png" alt="DishHome" width={110} height={28} style={{ objectFit: "contain", height: "28px", width: "auto" }} />
                  <Image src="/illustrations/gon.png" alt="Government of Nepal" width={36} height={36} style={{ objectFit: "contain", height: "36px", width: "auto" }} />
                </div>
              </div>
            </div>

            {/* Right Form Card */}
            <div style={{ background: "#ffffff", border: "1px solid #E5E5E5", borderRadius: "16px", padding: "48px", boxShadow: "0 12px 48px rgba(0,0,0,0.04)" }}>
              <h2 style={{ fontFamily: "var(--font-geist-sans, system-ui)", fontSize: "24px", color: "#00274A", margin: "0 0 32px 0", fontWeight: 500, letterSpacing: "-0.5px" }}>
                Schedule your session
              </h2>

              <form style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    <label style={{ fontFamily: "var(--font-geist-sans, system-ui)", fontSize: "13px", fontWeight: 500, color: "#404040" }}>First Name</label>
                    <input type="text" placeholder="Jane" style={{ width: "100%", height: "48px", padding: "0 16px", border: "1px solid #E5E5E5", borderRadius: "8px", fontSize: "15px", outline: "none", fontFamily: "var(--font-geist-sans, system-ui)" }} />
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    <label style={{ fontFamily: "var(--font-geist-sans, system-ui)", fontSize: "13px", fontWeight: 500, color: "#404040" }}>Last Name</label>
                    <input type="text" placeholder="Doe" style={{ width: "100%", height: "48px", padding: "0 16px", border: "1px solid #E5E5E5", borderRadius: "8px", fontSize: "15px", outline: "none", fontFamily: "var(--font-geist-sans, system-ui)" }} />
                  </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <label style={{ fontFamily: "var(--font-geist-sans, system-ui)", fontSize: "13px", fontWeight: 500, color: "#404040" }}>Work Email</label>
                  <input type="email" placeholder="jane@company.com" style={{ width: "100%", height: "48px", padding: "0 16px", border: "1px solid #E5E5E5", borderRadius: "8px", fontSize: "15px", outline: "none", fontFamily: "var(--font-geist-sans, system-ui)" }} />
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <label style={{ fontFamily: "var(--font-geist-sans, system-ui)", fontSize: "13px", fontWeight: 500, color: "#404040" }}>Company Name</label>
                  <input type="text" placeholder="Acme Corp" style={{ width: "100%", height: "48px", padding: "0 16px", border: "1px solid #E5E5E5", borderRadius: "8px", fontSize: "15px", outline: "none", fontFamily: "var(--font-geist-sans, system-ui)" }} />
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <label style={{ fontFamily: "var(--font-geist-sans, system-ui)", fontSize: "13px", fontWeight: 500, color: "#404040" }}>Primary Use Case</label>
                  <select style={{ width: "100%", height: "48px", padding: "0 16px", border: "1px solid #E5E5E5", borderRadius: "8px", fontSize: "15px", outline: "none", fontFamily: "var(--font-geist-sans, system-ui)", backgroundColor: "#ffffff", appearance: "none" }}>
                    <option value="">Select a use case...</option>
                    <option value="kyc">KYC Onboarding</option>
                    <option value="fraud">Fraud Prevention</option>
                    <option value="aml">AML Compliance</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="hover:bg-[#0069C2] transition-colors"
                  style={{
                    width: "100%", height: "52px", borderRadius: "8px", background: "#007BE5", color: "#ffffff",
                    fontSize: "15px", fontWeight: 500, fontFamily: "var(--font-geist-sans, system-ui)",
                    border: "none", cursor: "pointer", marginTop: "16px"
                  }}
                >
                  Request Demo
                </button>
                
                <p style={{ fontFamily: "var(--font-geist-sans, system-ui)", fontSize: "12px", color: "#A3A3A3", textAlign: "center", margin: 0, marginTop: "8px" }}>
                  By submitting this form, you agree to our Terms and Privacy Policy.
                </p>
              </form>
            </div>
          </div>
        </div>
      </main>

      <ImpactStudies />

      <Footer />
    </div>
  );
}
