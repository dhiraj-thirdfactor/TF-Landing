"use client";

import { useState } from "react";
import Link from "next/link";
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for contacting us! Our team will get back to you soon.");
    setFormData({ name: "", email: "", company: "", message: "" });
  };

  return (
    <>
      <TopBar />
      <Navbar />
      <main style={{ fontFamily: "var(--font-geist-sans, system-ui)", background: "#ffffff", minHeight: "100vh" }}>
        
        {/* Minimal Header */}
        <section style={{ padding: "100px 24px 60px" }}>
          <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
            <h1
              style={{
                margin: 0,
                fontSize: "64px",
                fontWeight: 400,
                letterSpacing: "-2.5px",
                color: "#111827",
                lineHeight: 1,
              }}
            >
              Contact us.
            </h1>
            <p
              style={{
                margin: "24px 0 0",
                fontSize: "20px",
                lineHeight: 1.5,
                color: "#6b7280",
                maxWidth: "500px"
              }}
            >
              We're here to help and answer any question you might have.
            </p>
          </div>
        </section>

        {/* Content Section */}
        <section style={{ padding: "0 24px 120px" }}>
          <div
            style={{
              maxWidth: "1000px",
              margin: "0 auto",
              display: "grid",
              gridTemplateColumns: "1fr 1.5fr",
              gap: "80px",
            }}
            className="contact-grid"
          >
            {/* Left Column: Minimal Contact Info */}
            <div style={{ display: "flex", flexDirection: "column", gap: "64px", paddingTop: "8px" }}>
              
              <div>
                <span style={{ fontSize: "12px", fontWeight: 600, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginBottom: "16px" }}>
                  Customer Support
                </span>
                <p style={{ margin: "0 0 16px 0", fontSize: "16px", color: "#374151", lineHeight: 1.5 }}>
                  Need technical assistance or have questions about your account?
                </p>
                <div style={{ fontSize: "16px", color: "#111827", fontWeight: 500, marginBottom: "12px" }}>
                  +977 970-5180020
                </div>
                <Link 
                  href="/faqs" 
                  style={{ color: "#007BE5", fontSize: "15px", fontWeight: 500, textDecoration: "none" }}
                  className="hover-link"
                >
                  Visit our FAQs &rarr;
                </Link>
              </div>

              <div>
                <span style={{ fontSize: "12px", fontWeight: 600, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "1px", display: "block", marginBottom: "16px" }}>
                  Business Team
                </span>
                <p style={{ margin: "0 0 24px 0", fontSize: "16px", color: "#374151", lineHeight: 1.5 }}>
                  Looking for custom solutions, volume pricing, or partnerships?
                </p>
                
                <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}>
                  {/* <div style={{ width: "48px", height: "48px", borderRadius: "50%", background: "#f3f4f6", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <span style={{ fontSize: "15px", color: "#4b5563", fontWeight: 500 }}>SP</span>
                  </div> */}
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <span style={{ fontSize: "16px", fontWeight: 500, color: "#111827" }}>Srawan Pandey</span>
                    <span style={{ fontSize: "14px", color: "#6b7280" }}>Head of Business Development</span>
                  </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  <div style={{ color: "#111827", fontSize: "16px", fontWeight: 500 }}>
                    +977 970-5180019
                  </div>
                  <div style={{ color: "#111827", fontSize: "16px", fontWeight: 500 }}>
                    business@thirdfactor.ai
                  </div>
                </div>
              </div>

            </div>

            {/* Right Column: Sleek Form */}
            <div>
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px" }} className="form-row">
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    <label htmlFor="name" style={{ fontSize: "13px", fontWeight: 500, color: "#4b5563" }}>Full name</label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="sleek-input"
                    />
                  </div>
                  
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    <label htmlFor="company" style={{ fontSize: "13px", fontWeight: 500, color: "#4b5563" }}>Company</label>
                    <input
                      id="company"
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="sleek-input"
                    />
                  </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <label htmlFor="email" style={{ fontSize: "13px", fontWeight: 500, color: "#4b5563" }}>Work email</label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="sleek-input"
                  />
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <label htmlFor="message" style={{ fontSize: "13px", fontWeight: 500, color: "#4b5563" }}>Message</label>
                  <textarea
                    id="message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="sleek-input"
                    style={{ resize: "vertical" }}
                  />
                </div>

                <button
                  type="submit"
                  className="sleek-button"
                  style={{
                    marginTop: "16px",
                    background: "#111827",
                    color: "#ffffff",
                    border: "none",
                    borderRadius: "8px",
                    padding: "16px 24px",
                    fontSize: "15px",
                    fontWeight: 500,
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                >
                  Send message
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Global Styles for Mobile Responsiveness & Form */}
        <style dangerouslySetInnerHTML={{__html: `
          .sleek-input {
            width: 100%;
            padding: 14px 16px;
            border-radius: 8px;
            border: 1px solid transparent;
            background: #f3f4f6;
            font-size: 16px;
            color: #111827;
            outline: none;
            transition: all 0.2s ease;
            box-sizing: border-box;
            font-family: inherit;
          }
          .sleek-input:focus {
            background: #ffffff;
            border-color: #007BE5;
            box-shadow: 0 0 0 4px rgba(0, 123, 229, 0.1);
          }
          .sleek-button:hover {
            background: #000000 !important;
            transform: translateY(-1px);
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          }
          .hover-link:hover {
            color: #0069C2 !important;
          }
          @media (max-width: 900px) {
            .contact-grid {
              grid-template-columns: 1fr !important;
              gap: 64px !important;
            }
          }
          @media (max-width: 600px) {
            .form-row {
              grid-template-columns: 1fr !important;
            }
          }
        `}} />
      </main>
      <Footer />
    </>
  );
}
