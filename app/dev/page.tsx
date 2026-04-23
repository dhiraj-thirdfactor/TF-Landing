import Link from "next/link";
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata = {
  title: "Developer Documentation | ThirdFactor",
  description: "Integrate ThirdFactor's AI-led identity verification APIs into your applications.",
};

const navigation = [
  {
    title: "Getting Started",
    links: [
      { label: "Introduction", href: "#" },
      { label: "Authentication", href: "#" },
      { label: "Environments", href: "#" },
    ]
  },
  {
    title: "Core APIs",
    links: [
      { label: "Document Verification", href: "#" },
      { label: "Liveness Detection", href: "#" },
      { label: "Face Comparison", href: "#" },
    ]
  },
  {
    title: "SDKs",
    links: [
      { label: "Web SDK", href: "#" },
      { label: "iOS SDK", href: "#" },
      { label: "Android SDK", href: "#" },
    ]
  }
];

export default function DevDocsPage() {
  return (
    <>
      <TopBar />
      <Navbar />
      
      {/* CSS styles for docs */}
      <style dangerouslySetInnerHTML={{__html: `
        .doc-link {
          color: #4b5563;
          font-size: 14px;
          text-decoration: none;
          display: block;
          transition: color 0.15s ease;
        }
        .doc-link:hover {
          color: #007BE5;
        }
        .code-block {
          background: #0a0d12;
          border-radius: 12px;
          border: 1px solid #1f2937;
          overflow: hidden;
        }
        .code-header {
          padding: 12px 16px;
          border-bottom: 1px solid #1f2937;
          display: flex;
          gap: 8px;
        }
        .mac-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }
        .mac-dot.red { background: #ef4444; }
        .mac-dot.yellow { background: #eab308; }
        .mac-dot.green { background: #22c55e; }
        
        .code-pre {
          margin: 0;
          padding: 24px;
          overflow-x: auto;
          font-size: 14px;
          color: #e5e7eb;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
          line-height: 1.5;
        }
      `}} />

      <div style={{ display: "flex", minHeight: "calc(100vh - 120px)", background: "#fafafa", fontFamily: "var(--font-geist-sans, system-ui)" }}>
        
        {/* Sidebar */}
        <aside style={{ width: "260px", background: "#ffffff", borderRight: "1px solid #e5e7eb", padding: "40px 24px", position: "sticky", top: "0", height: "100vh", overflowY: "auto", flexShrink: 0 }}>
          <h2 style={{ fontSize: "18px", fontWeight: 600, color: "#111827", marginBottom: "32px", letterSpacing: "-0.5px" }}>Documentation</h2>
          
          <nav style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            {navigation.map((section) => (
              <div key={section.title}>
                <h3 style={{ fontSize: "12px", fontWeight: 700, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "12px" }}>
                  {section.title}
                </h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href} className="doc-link">
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
        <main style={{ flex: 1, padding: "64px 80px", maxWidth: "900px" }}>
          <div style={{ marginBottom: "64px" }}>
            <span style={{ fontSize: "13px", fontWeight: 500, color: "#007BE5", background: "#EBF5FF", padding: "4px 12px", borderRadius: "100px", marginBottom: "16px", display: "inline-block" }}>v1.0 API</span>
            <h1 style={{ fontSize: "40px", fontWeight: 500, color: "#111827", letterSpacing: "-1px", margin: "0 0 16px 0" }}>Introduction</h1>
            <p style={{ fontSize: "18px", color: "#4b5563", lineHeight: 1.6, margin: 0 }}>
              Welcome to the ThirdFactor API documentation. Our APIs allow you to seamlessly integrate secure, AI-driven identity verification into your applications.
            </p>
          </div>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ fontSize: "24px", fontWeight: 500, color: "#111827", letterSpacing: "-0.5px", margin: "0 0 20px 0" }}>Authentication</h2>
            <p style={{ fontSize: "16px", color: "#374151", lineHeight: 1.6, marginBottom: "24px" }}>
              All API requests must be authenticated using a Bearer token. You can generate API keys from your ThirdFactor developer dashboard.
            </p>
            
            <div className="code-block">
              <div className="code-header">
                <div className="mac-dot red"></div>
                <div className="mac-dot yellow"></div>
                <div className="mac-dot green"></div>
              </div>
              <pre className="code-pre">
<code>curl -X POST https://api.thirdfactor.ai/v1/verify \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json"</code>
              </pre>
            </div>
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ fontSize: "24px", fontWeight: 500, color: "#111827", letterSpacing: "-0.5px", margin: "0 0 20px 0" }}>Base URLs</h2>
            <p style={{ fontSize: "16px", color: "#374151", lineHeight: 1.6, marginBottom: "16px" }}>
              We provide separate environments for testing and production to ensure safe integration.
            </p>
            
            <div style={{ background: "#ffffff", border: "1px solid #e5e7eb", borderRadius: "12px", overflow: "hidden" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", textAlign: "left", fontSize: "14px" }}>
                <thead>
                  <tr style={{ background: "#f9fafb", borderBottom: "1px solid #e5e7eb" }}>
                    <th style={{ padding: "16px 24px", color: "#111827", fontWeight: 500 }}>Environment</th>
                    <th style={{ padding: "16px 24px", color: "#111827", fontWeight: 500 }}>Base URL</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: "1px solid #e5e7eb" }}>
                    <td style={{ padding: "16px 24px", color: "#4b5563" }}>Sandbox</td>
                    <td style={{ padding: "16px 24px", color: "#007BE5", fontFamily: "monospace" }}>https://sandbox.api.thirdfactor.ai</td>
                  </tr>
                  <tr>
                    <td style={{ padding: "16px 24px", color: "#4b5563" }}>Production</td>
                    <td style={{ padding: "16px 24px", color: "#007BE5", fontFamily: "monospace" }}>https://api.thirdfactor.ai</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}
