import Hero from "@/components/hero/Hero";
import SectorStrip from "@/components/sector-strip/SectorStrip";
import InvestmentFocus from "@/components/investment-focus/InvestmentFocus";
import OpportunitiesWeSeek from "@/components/opportunity-list/OpportunitiesWeSeek";
import OpportunityPreCheck from "@/components/conversion/OpportunityPreCheck";
import InvestmentApproach from "@/components/approach/InvestmentApproach";
import PortfolioShowcase from "@/components/portfolio/PortfolioShowcase";
import HomeBlogSection from "@/components/blog/HomeBlogSection";
import AboutSummary from "@/components/about/AboutSummary";
import MissionVision from "@/components/about/MissionVision";
import MainConversionSection from "@/components/conversion/MainConversionSection";

export default function Home() {
  return (
    <>
      <Hero />
      <SectorStrip />
      <InvestmentFocus />
      <OpportunitiesWeSeek />
      <OpportunityPreCheck />
      <InvestmentApproach />
      <PortfolioShowcase />
      <HomeBlogSection />
      <AboutSummary />
      <MissionVision />
      <MainConversionSection />
    </>
  );
}
