import TopBar from "./components/TopBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeaturesSection from "./components/FeaturesSection";
import TechIntegration from "./components/TechIntegration";
import APISection from "./components/APISection";
import UserExperience from "./components/UserExperience";
import AutomationSection from "./components/AutomationSection";
import Testimonial from "./components/Testimonial";
import FAQ from "./components/FAQ";
import CTABanner from "./components/CTABanner";
import Footer from "./components/Footer";

export const metadata = {
  title: "ThirdFactor | Instant Identity Verification for Regulated Markets",
  description: "Full-stack platform for fast, secure, and compliant onboarding. Switch providers in a day. Deploy on-premise and maintain zero data retention.",
  openGraph: {
    title: "ThirdFactor | Identity Verification",
    description: "The scalable foundational infrastructure designed to run global identity systems.",
    url: "https://thirdfactor.ai",
    siteName: "ThirdFactor",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Third Factor | Instant Identity Verification",
    description: "Fast, secure, and compliant onboarding infrastructure.",
  },
};

export default function Home() {
  return (
    <>
      <TopBar />
      <Navbar />
      <main>
        <Hero />
        <FeaturesSection />
        <TechIntegration />
        <APISection />
        <UserExperience />
        <AutomationSection />
        <Testimonial />
        <FAQ />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}


