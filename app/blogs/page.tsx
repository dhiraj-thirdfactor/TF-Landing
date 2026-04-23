"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import CTABanner from "../components/CTABanner";
import Footer from "../components/Footer";

const categories = [
  "All Posts",
  "Company News",
  "Case Study",
  "Industry Insight",
  "Use Cases",
];

const allPosts = [
  {
    title: "TingTing Omni Launch Highlights",
    image: "/illustrations/image.png",
    tag: "Company News",
  },
  {
    title: "WebSummit Qatar Key Takeaways",
    image: "/illustrations/image3.png",
    tag: "Company News",
  },
  {
    title: "Onboarding in Regulated Markets",
    image: "/illustrations/image2.png",
    tag: "Case Study",
  },
  {
    title: "How to streamline your KYC processes with AI",
    image: "/illustrations/image.png",
    tag: "Industry Insight",
  },
  {
    title: "Automated Document Verification for Fintechs",
    image: "/illustrations/image2.png",
    tag: "Use Cases",
  },
  {
    title: "ThirdFactor expands operations to Singapore",
    image: "/illustrations/image3.png",
    tag: "Company News",
  },
];

export default function BlogsPage() {
  const [activeCategory, setActiveCategory] = useState("All Posts");
  const [visibleCount, setVisibleCount] = useState(3);

  const filteredPosts = allPosts.filter(
    (post) => activeCategory === "All Posts" || post.tag === activeCategory
  );
  
  const displayedPosts = filteredPosts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredPosts.length;

  return (
    <>
      <TopBar />
      <Navbar />
      <main style={{ fontFamily: "var(--font-geist-sans, system-ui)" }}>
        <section style={{ background: "#ffffff", padding: "64px 24px" }}>
          <div
            style={{
              maxWidth: "1160px",
              margin: "0 auto",
              display: "flex",
              flexDirection: "column",
              gap: "64px",
            }}
          >
            {/* Page Header */}
            <div style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto" }}>
              <h1
                style={{
                  margin: 0,
                  fontSize: "56px",
                  fontWeight: 500,
                  letterSpacing: "-2px",
                  color: "#111827",
                  lineHeight: 1.1,
                }}
              >
                News & Resources
              </h1>
              <p
                style={{
                  margin: "24px 0 0",
                  fontSize: "18px",
                  lineHeight: 1.6,
                  color: "#4b5563",
                }}
              >
                Discover the latest product updates, deep dives into AI-powered verification, and industry insights from the ThirdFactor team.
              </p>
            </div>

            {/* Categories Filter */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", justifyContent: "center" }}>
              {categories.map((category) => {
                const isActive = activeCategory === category;
                return (
                  <button
                    key={category}
                    onClick={() => {
                      setActiveCategory(category);
                      setVisibleCount(3); // Reset visible count on filter change
                    }}
                    style={{
                      height: "40px",
                      borderRadius: "100px",
                      padding: "0 20px",
                      fontSize: "14px",
                      fontWeight: 500,
                      color: isActive ? "#ffffff" : "#4b5563",
                      background: isActive ? "#111827" : "#ffffff",
                      border: isActive ? "1px solid #111827" : "1px solid #e5e7eb",
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.background = "#f9fafb";
                        e.currentTarget.style.color = "#111827";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive) {
                        e.currentTarget.style.background = "#ffffff";
                        e.currentTarget.style.color = "#4b5563";
                      }
                    }}
                  >
                    {category}
                  </button>
                );
              })}
            </div>

            {/* Featured Article (Only show on 'All Posts' or 'Company News') */}
            {(activeCategory === "All Posts" || activeCategory === "Company News") && (
              <section>
                <article
                  style={{
                    border: "1px solid #e5e7eb",
                    borderRadius: "16px",
                    overflow: "hidden",
                    display: "grid",
                    background: "#ffffff",
                    gridTemplateColumns: "1.15fr 0.85fr",
                    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)",
                  }}
                >
                  <div style={{ position: "relative", minHeight: "360px" }}>
                    <Image
                      src="/illustrations/herosection.png"
                      alt="Featured company event"
                      fill
                      style={{ objectFit: "cover" }}
                      sizes="(max-width: 768px) 100vw, 60vw"
                    />
                  </div>
                  <div
                    style={{
                      padding: "48px",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <span
                      style={{
                        width: "fit-content",
                        fontSize: "13px",
                        fontWeight: 500,
                        color: "#374151",
                        background: "#f3f4f6",
                        borderRadius: "100px",
                        padding: "6px 12px",
                        marginBottom: "24px",
                      }}
                    >
                      Featured
                    </span>
                    <h2
                      style={{
                        margin: 0,
                        color: "#111827",
                        fontSize: "40px",
                        lineHeight: 1.1,
                        fontWeight: 500,
                        letterSpacing: "-1px",
                      }}
                    >
                      TingTing at Web Summit Qatar
                    </h2>
                    <p
                      style={{
                        margin: "16px 0 0",
                        color: "#4b5563",
                        fontSize: "18px",
                        lineHeight: 1.6,
                      }}
                    >
                      Web Summit Qatar wrapped up with over 30,000 attendees from
                      127 countries, and a strong conversation around AI-led
                      trust infrastructure.
                    </p>
                    <Link
                      href="#"
                      style={{
                        marginTop: "auto",
                        paddingTop: "24px",
                        borderTop: "1px solid #e5e7eb",
                        color: "#007BE5",
                        textDecoration: "none",
                        fontSize: "15px",
                        fontWeight: 500,
                        display: "flex",
                        alignItems: "center",
                        gap: "4px",
                      }}
                    >
                      Read full story &rarr;
                    </Link>
                  </div>
                </article>
              </section>
            )}

            {/* Posts Grid */}
            <section style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  justifyContent: "space-between",
                }}
              >
                <h2
                  style={{
                    margin: 0,
                    fontSize: "32px",
                    lineHeight: 1.2,
                    fontWeight: 500,
                    color: "#111827",
                    letterSpacing: "-0.5px",
                  }}
                >
                  {activeCategory === "All Posts" ? "Latest Articles" : activeCategory}
                </h2>
              </div>

              {displayedPosts.length > 0 ? (
                <div className="grid gap-6 md:grid-cols-3">
                  {displayedPosts.map((item) => (
                    <article
                      key={item.title}
                      style={{
                        borderRadius: "16px",
                        overflow: "hidden",
                        background: "#ffffff",
                        border: "1px solid #e5e7eb",
                        display: "flex",
                        flexDirection: "column",
                        transition: "transform 0.2s ease, box-shadow 0.2s ease",
                        cursor: "pointer",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = "translateY(-4px)";
                        e.currentTarget.style.boxShadow = "0 10px 15px -3px rgba(0, 0, 0, 0.05)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      <div style={{ position: "relative", height: "200px" }}>
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          style={{ objectFit: "cover" }}
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                      </div>
                      <div style={{ padding: "24px", flex: 1, display: "flex", flexDirection: "column" }}>
                        <span
                          style={{
                            width: "fit-content",
                            fontSize: "12px",
                            fontWeight: 500,
                            color: "#374151",
                            background: "#f3f4f6",
                            borderRadius: "100px",
                            padding: "4px 10px",
                          }}
                        >
                          {item.tag}
                        </span>
                        <h3
                          style={{
                            margin: "16px 0 0",
                            fontSize: "20px",
                            lineHeight: 1.4,
                            fontWeight: 500,
                            color: "#111827",
                          }}
                        >
                          {item.title}
                        </h3>
                        <div style={{ marginTop: "auto", paddingTop: "20px" }}>
                          <Link href="#" style={{ color: "#007BE5", fontSize: "14px", fontWeight: 500, textDecoration: "none" }}>
                            Read article &rarr;
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                <div style={{ textAlign: "center", padding: "48px", background: "#f9fafb", borderRadius: "16px", border: "1px dashed #d1d5db" }}>
                  <p style={{ color: "#6b7280", margin: 0 }}>No posts found in this category.</p>
                </div>
              )}

              {/* Load More Button */}
              {hasMore && (
                <div style={{ display: "flex", justifyContent: "center", marginTop: "24px" }}>
                  <button
                    onClick={() => setVisibleCount((prev) => prev + 3)}
                    style={{
                      background: "#ffffff",
                      border: "1px solid #d1d5db",
                      color: "#111827",
                      padding: "12px 32px",
                      borderRadius: "100px",
                      fontSize: "15px",
                      fontWeight: 500,
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#f9fafb";
                      e.currentTarget.style.borderColor = "#9ca3af";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "#ffffff";
                      e.currentTarget.style.borderColor = "#d1d5db";
                    }}
                  >
                    Load More Posts
                  </button>
                </div>
              )}
            </section>

            {/* Resource Library */}
            <section>
              <div
                style={{
                  border: "1px solid #e5e7eb",
                  borderRadius: "16px",
                  background: "#EBF5FF",
                  padding: "48px",
                }}
              >
                <h2
                  style={{
                    margin: 0,
                    fontSize: "32px",
                    lineHeight: 1.2,
                    fontWeight: 500,
                    color: "#111827",
                    letterSpacing: "-0.5px",
                  }}
                >
                  Resource Library
                </h2>
                <p
                  style={{
                    margin: "16px 0 0",
                    color: "#4b5563",
                    fontSize: "18px",
                    lineHeight: 1.6,
                    maxWidth: "760px",
                  }}
                >
                  Explore implementation guides, compliance templates, and
                  onboarding playbooks across blog articles, case studies, and
                  technical resources.
                </p>
                <div className="grid gap-4 md:grid-cols-3" style={{ marginTop: "32px" }}>
                  {["API Documentation", "Integration Guides", "Compliance Resources"].map((item) => (
                    <Link
                      key={item}
                      href="#"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        textDecoration: "none",
                        border: "1px solid #d1d5db",
                        borderRadius: "12px",
                        padding: "16px",
                        color: "#111827",
                        background: "#ffffff",
                        fontSize: "16px",
                        fontWeight: 500,
                        transition: "border-color 0.2s ease, box-shadow 0.2s ease",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "#007BE5";
                        e.currentTarget.style.boxShadow = "0 2px 4px rgba(0,123,229,0.1)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "#d1d5db";
                        e.currentTarget.style.boxShadow = "none";
                      }}
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
