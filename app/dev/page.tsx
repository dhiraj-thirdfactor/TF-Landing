import DeveloperDocs from "../components/DeveloperDocs";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TopBar from "../components/TopBar";

export const metadata = {
  title: "API Documentation | ThirdFactor",
  description: "Integrate ThirdFactor face, document, KYC, OCR, forgery, and KYB APIs.",
};

export default function DevDocsPage() {
  return (
    <>
      <TopBar />
      <Navbar />
      <DeveloperDocs />
      <Footer />
    </>
  );
}
