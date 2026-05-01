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

      <main className="font-sans">
        <section className="py-16 md:py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16 flex flex-col gap-16">

            {/* HEADER */}
            <div className="text-center max-w-2xl mx-auto">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-gray-900">
                News & Resources
              </h1>
              <p className="mt-6 text-base md:text-lg text-gray-600 leading-relaxed">
                Discover the latest product updates, deep dives into AI-powered verification,
                and industry insights from the ThirdFactor team.
              </p>
            </div>

            {/* FILTER */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => {
                const isActive = activeCategory === category;

                return (
                  <button
                    key={category}
                    onClick={() => {
                      setActiveCategory(category);
                      setVisibleCount(3);
                    }}
                    className={`h-10 px-5 rounded-full text-sm font-medium border transition
                      ${isActive
                        ? "bg-gray-900 text-white border-gray-900"
                        : "bg-white text-gray-600 border-gray-200 hover:bg-gray-50 hover:text-gray-900"
                      }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>

            {/* FEATURED */}
            {(activeCategory === "All Posts" || activeCategory === "Company News") && (
              <section>
                <article className="grid lg:grid-cols-2 border border-gray-200 rounded-2xl overflow-hidden bg-white shadow-sm">
                  
                  {/* IMAGE */}
                  <div className="relative h-64 md:h-80 lg:h-full">
                    <Image
                      src="/illustrations/herosection.png"
                      alt="Featured"
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="p-6 md:p-10 flex flex-col">
                    <span className="w-fit text-xs font-medium bg-gray-100 text-gray-700 px-3 py-1 rounded-full mb-6">
                      Featured
                    </span>

                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-900 leading-tight">
                      TingTing at Web Summit Qatar
                    </h2>

                    <p className="mt-4 text-gray-600 text-base md:text-lg leading-relaxed">
                      Web Summit Qatar wrapped up with over 30,000 attendees from 127 countries,
                      and a strong conversation around AI-led trust infrastructure.
                    </p>

                    <Link
                      href="/blogs/tingting-web-summit-qatar"
                      className="mt-auto pt-6 border-t text-blue-600 font-medium text-sm flex items-center gap-1 hover:gap-2 transition-all"
                    >
                      Read full story →
                    </Link>
                  </div>
                </article>
              </section>
            )}

            {/* POSTS */}
            <section className="flex flex-col gap-6">
              <h2 className="text-2xl md:text-3xl font-medium text-gray-900">
                {activeCategory === "All Posts" ? "Latest Articles" : activeCategory}
              </h2>

              {displayedPosts.length > 0 ? (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {displayedPosts.map((item) => (
                    <article
                      key={item.title}
                      className="border border-gray-200 rounded-2xl overflow-hidden bg-white flex flex-col transition hover:-translate-y-1 hover:shadow-md"
                    >
                      <div className="relative h-48">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div className="p-5 flex flex-col flex-1">
                        <span className="w-fit text-xs bg-gray-100 text-gray-700 px-2.5 py-1 rounded-full">
                          {item.tag}
                        </span>

                        <h3 className="mt-4 text-lg font-medium text-gray-900">
                          {item.title}
                        </h3>

                        <Link
                          href={`/blogs/${item.title.toLowerCase().replace(/\s+/g, "-")}`}
                          className="mt-auto pt-5 text-blue-600 text-sm font-medium hover:underline"
                        >
                          Read article →
                        </Link>
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                <div className="text-center p-10 bg-gray-50 border border-dashed border-gray-300 rounded-2xl">
                  <p className="text-gray-500">No posts found in this category.</p>
                </div>
              )}

              {/* LOAD MORE */}
              {hasMore && (
                <div className="flex justify-center mt-4">
                  <button
                    onClick={() => setVisibleCount((prev) => prev + 3)}
                    className="px-8 py-3 rounded-full border border-gray-300 text-gray-900 text-sm font-medium hover:bg-gray-50 transition"
                  >
                    Load More Posts
                  </button>
                </div>
              )}
            </section>

            {/* RESOURCE LIBRARY */}
            <section>
              <div className="border border-gray-200 rounded-2xl bg-blue-50 p-6 md:p-10">
                <h2 className="text-2xl md:text-3xl font-medium text-gray-900">
                  Resource Library
                </h2>

                <p className="mt-4 text-gray-600 text-base md:text-lg max-w-2xl">
                  Explore implementation guides, compliance templates, and onboarding
                  playbooks across blog articles, case studies, and technical resources.
                </p>

                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 mt-8">
                  {["API Documentation", "Integration Guides", "Compliance Resources"].map((item) => (
                    <Link
                      key={item}
                      href="#"
                      className="flex items-center justify-center text-center border border-gray-300 rounded-xl p-4 bg-white font-medium text-gray-900 hover:border-blue-500 hover:shadow-sm transition"
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