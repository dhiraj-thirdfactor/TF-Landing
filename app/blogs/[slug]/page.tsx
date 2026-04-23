import Link from "next/link";
import Image from "next/image";
import TopBar from "../../components/TopBar";
import Navbar from "../../components/Navbar";
import CTABanner from "../../components/CTABanner";
import Footer from "../../components/Footer";

// Example blog data fetching logic
const getPostData = (slug: string) => {
  return {
    title: "TingTing at Web Summit Qatar",
    description: "Web Summit Qatar wrapped up with over 30,000 attendees from 127 countries, and a strong conversation around AI-led trust infrastructure.",
    date: "March 15, 2026",
    readTime: "4 min read",
    tag: "Company News",
    author: "ThirdFactor Team",
    image: "/illustrations/herosection.png",
    content: [
      {
        type: "paragraph",
        value: "Web Summit Qatar wrapped up with over 30,000 attendees from 127 countries, and a strong conversation around AI-led trust infrastructure. As the digital economy grows, so does the sophistication of fraud."
      },
      {
        type: "heading",
        value: "The importance of verifiable digital identities"
      },
      {
        type: "paragraph",
        value: "Traditional methods of identity verification are no longer sufficient to protect businesses and consumers. We need dynamic, AI-driven solutions that can adapt to new threats in real-time."
      },
      {
        type: "quote",
        value: "The response was overwhelmingly positive, validating our approach to building a more secure and frictionless digital world."
      },
      {
        type: "image",
        url: "/illustrations/image3.png",
        caption: "Our team presenting at the main stage"
      },
      {
        type: "heading",
        value: "Key Takeaways from the Summit"
      },
      {
        type: "list",
        items: [
          "AI is the new baseline: It's no longer just a buzzword; it's a fundamental requirement.",
          "User experience matters: Security cannot come at the cost of friction.",
          "Regulatory compliance is evolving: Navigating the complex landscape requires adaptability."
        ]
      },
      {
        type: "paragraph",
        value: "We're excited about the future of digital identity and the role ThirdFactor will play in shaping it. Stay tuned for more updates as we continue to innovate and expand our platform."
      }
    ]
  };
};

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostData(params.slug);
  return {
    title: `${post.title} | ThirdFactor News`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      images: [post.image],
    },
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPostData(params.slug);

  return (
    <>
      <TopBar />
      <Navbar />
      <main style={{ fontFamily: "var(--font-geist-sans, system-ui)", background: "#fafafa" }}>
        <article style={{ background: "#ffffff", padding: "80px 24px", paddingBottom: "120px", borderBottom: "1px solid #e5e7eb" }}>
          <div style={{ maxWidth: "720px", margin: "0 auto" }}>
            
            {/* CSS for hover effects since it's a server component */}
            <style dangerouslySetInnerHTML={{__html: `
              .back-btn {
                display: inline-flex;
                align-items: center;
                gap: 8px;
                color: #6b7280;
                text-decoration: none;
                font-size: 15px;
                font-weight: 500;
                margin-bottom: 48px;
                transition: color 0.2s ease;
              }
              .back-btn:hover {
                color: #111827;
              }
              .blog-body p {
                margin-top: 0;
                margin-bottom: 28px;
                font-size: 16px;
                line-height: 1.8;
                color: #374151;
              }
              .blog-body h2 {
                color: #111827;
                font-size: 24px;
                font-weight: 500;
                letter-spacing: -0.5px;
                margin-top: 56px;
                margin-bottom: 24px;
                line-height: 1.3;
              }
              .blog-body ul {
                padding-left: 24px;
                margin-bottom: 32px;
              }
              .blog-body li {
                margin-bottom: 12px;
                font-size: 16px;
                line-height: 1.7;
                color: #374151;
              }
              .blog-body blockquote {
                border-left: 4px solid #007BE5;
                padding-left: 24px;
                margin: 40px 0;
                font-style: italic;
                font-size: 20px;
                line-height: 1.5;
                color: #111827;
              }
              .blog-image-wrap {
                margin: 48px 0;
                border-radius: 12px;
                overflow: hidden;
                border: 1px solid #e5e7eb;
              }
            `}} />

            <header style={{ marginBottom: "56px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
                <span
                  style={{
                    fontSize: "13px",
                    fontWeight: 500,
                    color: "#007BE5",
                    background: "#EBF5FF",
                    borderRadius: "100px",
                    padding: "6px 14px",
                  }}
                >
                  {post.tag}
                </span>
                <span style={{ color: "#9ca3af", fontSize: "14px", fontWeight: 500 }}>
                  {post.date} &nbsp;&bull;&nbsp; {post.readTime}
                </span>
              </div>
              
              <h1
                style={{
                  margin: 0,
                  fontSize: "48px",
                  lineHeight: 1.1,
                  fontWeight: 500,
                  color: "#111827",
                  letterSpacing: "-1.5px",
                  marginBottom: "32px",
                }}
              >
                {post.title}
              </h1>

              <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
                <div style={{ width: "44px", height: "44px", borderRadius: "50%", background: "#f3f4f6", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid #e5e7eb" }}>
                  <span style={{ fontSize: "14px", color: "#4b5563", fontWeight: 600 }}>TF</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span style={{ fontSize: "15px", fontWeight: 600, color: "#111827" }}>{post.author}</span>
                  <span style={{ fontSize: "13px", color: "#6b7280" }}>Editorial Team</span>
                </div>
              </div>
            </header>

            <div style={{ position: "relative", width: "100%", height: "400px", borderRadius: "16px", overflow: "hidden", marginBottom: "64px", border: "1px solid #e5e7eb" }}>
              <Image 
                src={post.image}
                alt={post.title}
                fill
                style={{ objectFit: "cover" }}
                priority
              />
            </div>

            <div className="blog-body">
              {post.content.map((block, idx) => {
                if (block.type === "paragraph") {
                  return <p key={idx}>{block.value}</p>;
                }
                if (block.type === "heading") {
                  return <h2 key={idx}>{block.value}</h2>;
                }
                if (block.type === "quote") {
                  return <blockquote key={idx}>{block.value}</blockquote>;
                }
                if (block.type === "list") {
                  return (
                    <ul key={idx}>
                      {block.items?.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  );
                }
                if (block.type === "image") {
                  return (
                    <figure key={idx} className="blog-image-wrap">
                      <div style={{ position: "relative", width: "100%", height: "360px" }}>
                        <Image 
                          src={block.url || ""}
                          alt={block.caption || ""}
                          fill
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                      {block.caption && (
                        <figcaption style={{ padding: "16px", textAlign: "center", color: "#6b7280", fontSize: "14px", background: "#f9fafb", borderTop: "1px solid #e5e7eb" }}>
                          {block.caption}
                        </figcaption>
                      )}
                    </figure>
                  );
                }
                return null;
              })}
            </div>
          </div>
        </article>
        
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
