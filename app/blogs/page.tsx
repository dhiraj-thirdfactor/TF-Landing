"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import CTABanner from "../components/CTABanner";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TopBar from "../components/TopBar";

const categories = ["All", "Company", "Case studies", "Identity", "Compliance"];

const posts = [
  {
    slug: "tingting-web-summit-qatar",
    title: "Building trust infrastructure for markets the global stack overlooks",
    excerpt: "What Web Summit Qatar revealed about locally trained identity and compliance systems.",
    category: "Company",
    date: "June 10, 2026",
    readTime: "6 min read",
    image: "/illustrations/herosection.png",
    featured: true,
  },
  {
    slug: "sovereign-identity-playbook",
    title: "The sovereign identity playbook",
    excerpt: "A practical architecture for keeping sensitive identity data inside the systems that govern it.",
    category: "Compliance",
    date: "May 28, 2026",
    readTime: "9 min read",
    image: "/illustrations/image3.png",
  },
  {
    slug: "ai-powered-kyc",
    title: "Where AI actually improves KYC",
    excerpt: "A grounded look at document extraction, liveness, review queues, and human decisions.",
    category: "Identity",
    date: "May 16, 2026",
    readTime: "7 min read",
    image: "/illustrations/image.png",
  },
  {
    slug: "faster-onboarding",
    title: "Faster onboarding without weaker controls",
    excerpt: "How regulated teams can remove friction while preserving traceability and risk ownership.",
    category: "Case studies",
    date: "April 30, 2026",
    readTime: "5 min read",
    image: "/illustrations/image2.png",
  },
  {
    slug: "local-document-intelligence",
    title: "Why local document intelligence matters",
    excerpt: "Local context changes extraction, validation, and confidence at the document edge.",
    category: "Identity",
    date: "April 12, 2026",
    readTime: "8 min read",
    image: "/illustrations/about.png",
  },
  {
    slug: "audit-ready-verification",
    title: "Designing verification records for the audit",
    excerpt: "Consent, policy decisions, model signals, and human review should tell one coherent story.",
    category: "Compliance",
    date: "March 22, 2026",
    readTime: "6 min read",
    image: "/illustrations/vspage.png",
  },
];

export default function BlogsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const featuredPost = posts[0];
  const filteredPosts = posts.filter(
    (post) => !post.featured && (activeCategory === "All" || post.category === activeCategory),
  );

  return (
    <>
      <TopBar />
      <Navbar />

      <main className="bg-white text-[#00274A]">
        <header className="border-b border-[#D9E2EA]">
          <div className="mx-auto max-w-[1160px] px-4 py-16 md:px-8 md:py-24">
            <p className="font-mono text-[10px] uppercase tracking-[0.12em] text-[#007BE5]">Resources</p>
            <h1 className="mt-4 text-[42px] font-normal leading-[1.05] tracking-[-0.035em] md:text-[58px]">
              Insights from ThirdFactor
            </h1>
            <p className="mt-5 max-w-[620px] text-[17px] leading-[1.65] text-[#64748B]">
              Product updates, implementation guidance, and clear thinking about identity infrastructure.
            </p>
          </div>
        </header>

        <section className="mx-auto max-w-[1160px] px-4 py-12 md:px-8 md:py-16">
          <Link
            href={`/blogs/${featuredPost.slug}`}
            className="group grid overflow-hidden border border-[#D9E2EA] md:grid-cols-[1.15fr_0.85fr]"
          >
            <div className="relative min-h-[280px] overflow-hidden md:min-h-[430px]">
              <Image
                src={featuredPost.image}
                alt=""
                fill
                sizes="(min-width: 768px) 58vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
            </div>
            <article className="flex flex-col justify-between border-t border-[#D9E2EA] p-7 md:border-l md:border-t-0 md:p-10">
              <div>
                <PostMeta post={featuredPost} />
                <h2 className="mt-6 text-[30px] font-normal leading-[1.12] tracking-[-0.025em] md:text-[38px]">
                  {featuredPost.title}
                </h2>
                <p className="mt-5 text-[15px] leading-[1.65] text-[#64748B]">{featuredPost.excerpt}</p>
              </div>
              <span className="mt-10 flex items-center gap-2 text-[13px] font-medium text-[#007BE5]">
                Read article
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </span>
            </article>
          </Link>
        </section>

        <section className="border-t border-[#D9E2EA]">
          <div className="mx-auto max-w-[1160px] px-4 py-12 md:px-8 md:py-16">
            <div className="flex flex-col gap-6 border-b border-[#D9E2EA] pb-6 md:flex-row md:items-center md:justify-between">
              <h2 className="text-[28px] font-normal tracking-[-0.02em]">Latest articles</h2>
              <div className="scrollbar-hidden flex gap-1 overflow-x-auto">
                {categories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    className={`shrink-0 px-3 py-2 text-[12px] transition-colors ${
                      activeCategory === category
                        ? "bg-[#00274A] text-white"
                        : "text-[#64748B] hover:bg-[#F2F6F9] hover:text-[#00274A]"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid gap-x-7 gap-y-12 pt-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredPosts.map((post) => (
                <Link key={post.slug} href={`/blogs/${post.slug}`} className="group">
                  <div className="relative aspect-[16/10] overflow-hidden bg-[#EEF2F5]">
                    <Image
                      src={post.image}
                      alt=""
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.025]"
                    />
                  </div>
                  <article className="pt-5">
                    <PostMeta post={post} />
                    <h3 className="mt-4 text-[22px] font-normal leading-[1.2] tracking-[-0.015em]">{post.title}</h3>
                    <p className="mt-3 text-[14px] leading-[1.6] text-[#64748B]">{post.excerpt}</p>
                  </article>
                </Link>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <p className="py-16 text-center text-[14px] text-[#64748B]">No articles in this category yet.</p>
            )}
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
    </>
  );
}

function PostMeta({ post }: { post: (typeof posts)[number] }) {
  return (
    <p className="font-mono text-[10px] uppercase tracking-[0.08em] text-[#71808D]">
      <span className="text-[#007BE5]">{post.category}</span>
      <span className="mx-2 text-[#B2BDC6]">/</span>
      {post.date}
      <span className="mx-2 text-[#B2BDC6]">/</span>
      {post.readTime}
    </p>
  );
}
