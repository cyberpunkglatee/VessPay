import HeroSection from '@/components/HeroSection';
import TrustMarquee from '@/components/TrustMarquee';
import DualEngineSection from '@/components/DualEngineSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import FeaturesGrid from '@/components/FeaturesGrid';
import AudiencePanels from '@/components/AudiencePanels';
import StatsBar from '@/components/StatsBar';
import CTASection from '@/components/CTASection';

export default function Home() {
  const platformStats = [
    { value: 33, suffix: "", label: "African Countries" },
    { value: 160, suffix: "+", label: "Currency Pairs" },
    { value: 99.9, suffix: "%", label: "API Uptime SLA" },
    { value: 1, suffix: "B+", label: "GHS Processed Annually" },
  ];

  return (
    <main className="bg-[#1a3a2a] selection:bg-[#c9a84c]/30 selection:text-[#c9a84c]">
      <HeroSection />
      <TrustMarquee />
      <DualEngineSection />
      <HowItWorksSection />
      <FeaturesGrid />
      <AudiencePanels />
      <StatsBar stats={platformStats} />
      <CTASection />
    </main>
  );
}
