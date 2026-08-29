import Hero from "@/components/hero/Hero";
import SectorStrip from "@/components/sector-strip/SectorStrip";
import InvestmentFocus from "@/components/investment-focus/InvestmentFocus";
import OpportunitiesWeSeek from "@/components/opportunity-list/OpportunitiesWeSeek";
import InvestmentApproach from "@/components/approach/InvestmentApproach";
import HomeBlogSection from "@/components/blog/HomeBlogSection";
import AboutSummary from "@/components/about/AboutSummary";
import MissionVision from "@/components/about/MissionVision";
import ContactSection from "@/components/contact/ContactSection";
import MainConversionSection from "@/components/conversion/MainConversionSection";

export default function Home() {
  return (
    <>
      <Hero />
      <SectorStrip />
      <InvestmentFocus />
      <OpportunitiesWeSeek />
      <InvestmentApproach />
      <HomeBlogSection />
      <AboutSummary />
      <MissionVision />
      <ContactSection />
      <MainConversionSection />
    </>
  );
}
