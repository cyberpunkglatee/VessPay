import HeroSection from '@/components/HeroSection';
import TrustMarquee from '@/components/TrustMarquee';
import HowItWorksSection from '@/components/HowItWorksSection';
import FeaturesGrid from '@/components/FeaturesGrid';
import AudiencePanels from '@/components/AudiencePanels';
import StatsBar from '@/components/StatsBar';
import CTASection from '@/components/CTASection';

export default function Home() {
  const homeStats = [
    { value: 1000, suffix: "B+", label: "GHS Processed Annually" },
    { value: 40, suffix: "M+", label: "Active MoMo Users" },
    { value: 83, suffix: "%", label: "Financial Inclusion" },
    { value: 33, suffix: "", label: "African Countries" },
  ];

  return (
    <main className="bg-[#1a3a2a] selection:bg-[#c9a84c]/30 selection:text-[#c9a84c]">
      <HeroSection />
      <TrustMarquee />
      <HowItWorksSection />
      <FeaturesGrid />
      <AudiencePanels />
      <StatsBar stats={homeStats} />
      <CTASection />
    </main>
  );
}
