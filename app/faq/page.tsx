import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import FAQ from "../components/FAQ";
import CTABanner from "../components/CTABanner";
import Footer from "../components/Footer";

export default function FAQPage() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main>
        <FAQ />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
