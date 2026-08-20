import { COMPANY_CONFIG } from "@/lib/config";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Shield, Target, Building2, Compass } from "lucide-react";
import MissionVision from "@/components/about/MissionVision";

export const metadata = {
  title: `About Us | ${COMPANY_CONFIG.name}`,
  description: `Learn about ${COMPANY_CONFIG.name} (RC ${COMPANY_CONFIG.rcNumber}) - mission, vision, principles, and disciplined capital for real estate, businesses, financial markets and strategic growth in Nigeria.`,
};

export default function AboutPage() {
  return (
    <div className="pt-28 pb-24 bg-[#F7F4EE] text-[#242127] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#42124F] block mb-3">
            CORPORATE PROFILE
          </span>
          <h1 className="heading-ayat text-3xl sm:text-5xl lg:text-6xl font-extrabold uppercase text-[#111015] mb-6 leading-tight">
            CAPITAL WITH <br />
            <span className="text-[#C7A45B]">PURPOSE.</span>
          </h1>
          <p className="text-base sm:text-lg text-[#242127]/80 font-light leading-relaxed">
            {COMPANY_CONFIG.name} (RC No: {COMPANY_CONFIG.rcNumber}) is an investment company structured to identify, capitalize, and scale high-potential opportunities across West Africa.
          </p>
        </div>

        {/* Hero Image Tile */}
        <div className="relative h-72 sm:h-96 lg:h-[450px] w-full rounded-xs overflow-hidden mb-16 sm:mb-20 shadow-2xl bg-[#111015] border border-[#42124F]/20">
          <Image
            src="/images/hero_architecture.jpg"
            alt={COMPANY_CONFIG.name}
            fill
            className="object-cover object-center filter brightness-90 contrast-105"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111015] via-[#111015]/40 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-8 text-white flex flex-col sm:flex-row justify-between items-end gap-4">
            <div>
              <span className="text-[10px] sm:text-xs font-mono uppercase tracking-widest text-[#C7A45B] block mb-1 font-bold">
                REGISTERED ENTITY
              </span>
              <p className="heading-ayat text-xl sm:text-2xl font-bold uppercase">
                {COMPANY_CONFIG.name}
              </p>
            </div>
            <div className="text-left sm:text-right font-mono text-xs text-white/70">
              <span>RC NO: {COMPANY_CONFIG.rcNumber}</span> <br />
              <span>ONIKAN, LAGOS STATE</span>
            </div>
          </div>
        </div>
      </div>

      {/* Embedded Mission & Vision Section */}
      <MissionVision />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20">
        {/* Corporate Ethos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 mb-16 sm:mb-20 items-start">
          <div className="space-y-6">
            <h2 className="heading-ayat text-2xl sm:text-3xl font-extrabold uppercase text-[#111015]">
              Our Operating Philosophy
            </h2>
            <p className="text-xs sm:text-sm text-[#242127]/80 font-light leading-relaxed">
              We operate with a conviction that sustainable financial returns are unlocked by fundamental economic value, disciplined capital allocation, and active partnership with project owners and entrepreneurs.
            </p>
            <p className="text-xs sm:text-sm text-[#242127]/80 font-light leading-relaxed">
              Whether acquiring high-yielding real-estate assets, providing expansion capital to established middle-market businesses, participating in sovereign and corporate debt instruments, or funding agricultural processing enterprises, we maintain uncompromised standards of due diligence.
            </p>
          </div>

          <div className="space-y-4">
            <div className="p-6 bg-white border border-[#42124F]/15 rounded-xs shadow-xs">
              <div className="flex items-center space-x-3 mb-2 text-[#42124F]">
                <Shield className="w-5 h-5" />
                <h3 className="heading-ayat text-lg font-bold uppercase text-[#111015]">Integrity & Governance</h3>
              </div>
              <p className="text-xs text-[#242127]/70 font-light leading-relaxed">
                Uncompromising transparency, regulatory compliance, and legal clarity across all agreements and capital deployments.
              </p>
            </div>

            <div className="p-6 bg-white border border-[#42124F]/15 rounded-xs shadow-xs">
              <div className="flex items-center space-x-3 mb-2 text-[#42124F]">
                <Target className="w-5 h-5" />
                <h3 className="heading-ayat text-lg font-bold uppercase text-[#111015]">Analytical Rigor</h3>
              </div>
              <p className="text-xs text-[#242127]/70 font-light leading-relaxed">
                Evaluating opportunities through rigorous cash flow modeling, stress-testing downside risk, and protecting downside capital.
              </p>
            </div>

            <div className="p-6 bg-white border border-[#42124F]/15 rounded-xs shadow-xs">
              <div className="flex items-center space-x-3 mb-2 text-[#42124F]">
                <Building2 className="w-5 h-5" />
                <h3 className="heading-ayat text-lg font-bold uppercase text-[#111015]">Asset Preservation</h3>
              </div>
              <p className="text-xs text-[#242127]/70 font-light leading-relaxed">
                Prioritizing real physical assets, income-generating collateral, and resilient business cash flows.
              </p>
            </div>
          </div>
        </div>

        {/* Registered Corporate Details Card */}
        <div className="p-8 sm:p-12 bg-[#111015] text-white rounded-xs shadow-xl border border-white/10 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#C7A45B] block mb-2">
              REGISTERED HEADQUARTERS
            </span>
            <h3 className="heading-ayat text-2xl font-bold uppercase text-white mb-2">
              {COMPANY_CONFIG.name}
            </h3>
            <p className="text-xs sm:text-sm text-white/70 font-light max-w-md">
              {COMPANY_CONFIG.address}
            </p>
          </div>

          <Link
            href="/submit-opportunity"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-xs font-mono font-bold uppercase tracking-widest text-[#111015] bg-[#C7A45B] hover:bg-white transition-all rounded-xs shadow-lg gold-glow"
          >
            <span>Present an Opportunity</span>
            <ArrowUpRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}
