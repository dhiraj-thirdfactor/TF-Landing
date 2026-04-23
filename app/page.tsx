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
