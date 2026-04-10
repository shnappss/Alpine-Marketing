import Nav from "../components/Nav";
import HeroSection from "../components/HeroSection";
import ProblemSection from "../components/ProblemSection";
import SystemSection from "../components/SystemSection";
import TechStackSection from "../components/TechStackSection";
import MetricsSection from "../components/MetricsSection";
import CaseStudiesSection from "../components/CaseStudiesSection";
import FAQSection from "../components/FAQSection";
import ComparisonSection from "../components/ComparisonSection";
import WhyAlpineSection from "../components/WhyAlpineSection";
import TeamSection from "../components/TeamSection";
import FinalCTASection from "../components/FinalCTASection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-[100dvh] bg-background text-foreground flex flex-col font-sans selection:bg-primary/20">
      <Nav />
      <main className="flex-1">
        <HeroSection />
        <ProblemSection />
        <SystemSection />
        <TechStackSection />
        <MetricsSection />
        <CaseStudiesSection />
        <FAQSection />
        <ComparisonSection />
        <WhyAlpineSection />
        <TeamSection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
}
