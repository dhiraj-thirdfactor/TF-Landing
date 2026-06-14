import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CTABanner from "../../components/CTABanner";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import ProductPageContent from "../../components/product/ProductPage";
import TopBar from "../../components/TopBar";
import { products, productSlugs } from "../../data/products";

export function generateStaticParams() {
  return productSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = products[slug];

  if (!product) return {};

  return {
    title: `ThirdFactor ${product.name} | ${product.eyebrow}`,
    description: product.summary,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products[slug];

  if (!product) notFound();

  return (
    <>
      <TopBar />
      <Navbar />
      <main>
        <ProductPageContent product={product} />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
