import Nav from "../components/Nav";
import HeroSection from "../components/HeroSection";
import ProblemSection from "../components/ProblemSection";
import SolutionSection from "../components/SolutionSection";
import TechStackSection from "../components/TechStackSection";
import MetricsSection from "../components/MetricsSection";
import CaseStudiesSection from "../components/CaseStudiesSection";
import ComparisonSection from "../components/ComparisonSection";
import WhyAlpineSection from "../components/WhyAlpineSection";
import TeamSection from "../components/TeamSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-[100dvh] bg-background text-foreground flex flex-col font-sans selection:bg-primary/30">
      <Nav />
      <main className="flex-1">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <TechStackSection />
        <MetricsSection />
        <CaseStudiesSection />
        <ComparisonSection />
        <WhyAlpineSection />
        <TeamSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
