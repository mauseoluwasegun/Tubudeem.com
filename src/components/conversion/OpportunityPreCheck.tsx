"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, CheckCircle2, AlertCircle, HelpCircle, ShieldCheck, Sparkles } from "lucide-react";
import { COMPANY_CONFIG } from "@/lib/config";

export default function OpportunityPreCheck() {
  const [selectedCategory, setSelectedCategory] = useState<string>("Real Estate");
  const [fundingRange, setFundingRange] = useState<string>("₦50M - ₦250M");
  const [assetStage, setAssetStage] = useState<string>("Verified Title / 3+ Yrs Operations");

  const categories = [
    "Real Estate",
    "Business Investment",
    "SME Growth",
    "Startup & Early-Stage Ventures",
    "Financial Markets",
    "Other Strategic Investment",
  ];

  const fundingOptions = [
    "Under ₦50M ($50K)",
    "₦50M - ₦250M ($50K - $250K)",
    "₦250M - ₦1B ($250K - $1M)",
    "₦1B+ ($1M+)",
  ];

  const stageOptions = [
    "Verified Title / 3+ Yrs Operations",
    "Shovel-Ready / JV Development",
    "Operational Cash-Flow Positive",
    "Early Concept / Seed Stage",
  ];

  // Logic to determine fit score
  const evaluateFit = () => {
    if (assetStage === "Early Concept / Seed Stage") {
      return {
        status: "conditional",
        title: "CONDITIONAL FIT · ADVANCED PROOF REQUIRED",
        desc: "TUBUDEEM prioritizes physical asset collateral, verified land title, or positive EBITDA cash flows. Early-stage concepts require strong co-investment backing or verified real asset collateral.",
        badgeColor: "bg-amber-500/20 text-amber-300 border-amber-500/30",
        ctaText: "Submit Full Project Proposal",
      };
    }
    return {
      status: "high",
      title: "STRONG INVESTMENT FIT · HIGH ALIGNMENT",
      desc: "Your proposal strongly aligns with TUBUDEEM's investment criteria, asset readiness standards, and capital deployment focus.",
      badgeColor: "bg-[#C7A45B]/20 text-[#C7A45B] border-[#C7A45B]/40",
      ctaText: "Present Your Opportunity Now",
    };
  };

  const fitResult = evaluateFit();

  return (
    <section id="pre-check" className="py-20 sm:py-28 bg-[#111015] text-[#F7F4EE] relative border-t border-white/10 overflow-hidden">
      {/* Background Deep Purple Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#42124F]/30 rounded-full filter blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#C7A45B] block mb-2 sm:mb-3">
            INTERACTIVE EVALUATION TOOL
          </span>
          <h2 className="heading-ayat text-2xl sm:text-4xl md:text-5xl font-extrabold uppercase text-white">
            OPPORTUNITY FIT <span className="text-[#C7A45B]">PRE-CHECK.</span>
          </h2>
          <div className="ayat-gold-line w-24 my-3 sm:my-4" />
          <p className="text-xs sm:text-sm text-[#F7F4EE]/80 font-light leading-relaxed">
            Select your investment parameters below to instantly assess alignment with TUBUDEEM&apos;s capital allocation focus before submitting your proposal.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Column: Interactive Inputs */}
          <div className="lg:col-span-7 bg-[#191422] p-6 sm:p-8 border border-[#C7A45B]/20 rounded-xs space-y-6 sm:space-y-8 shadow-2xl">
            {/* Step 1: Category */}
            <div className="space-y-3">
              <label className="text-xs font-mono font-bold uppercase tracking-wider text-[#C7A45B] block">
                01. SELECT INVESTMENT CATEGORY
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setSelectedCategory(cat)}
                    className={`p-3 text-left text-[11px] font-mono rounded-xs transition-all border min-h-[44px] ${
                      selectedCategory === cat
                        ? "bg-[#42124F] text-[#F7F4EE] font-bold border-[#C7A45B] gold-glow"
                        : "bg-white/5 text-[#F7F4EE]/70 hover:bg-white/10 border-white/10"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Capital Required */}
            <div className="space-y-3 pt-4 border-t border-white/10">
              <label className="text-xs font-mono font-bold uppercase tracking-wider text-[#C7A45B] block">
                02. CAPITAL / FUNDING REQUIREMENT
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {fundingOptions.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => setFundingRange(opt)}
                    className={`p-3 text-left text-[11px] font-mono rounded-xs transition-all border min-h-[44px] ${
                      fundingRange === opt
                        ? "bg-[#42124F] text-[#F7F4EE] font-bold border-[#C7A45B] gold-glow"
                        : "bg-white/5 text-[#F7F4EE]/70 hover:bg-white/10 border-white/10"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Readiness Stage */}
            <div className="space-y-3 pt-4 border-t border-white/10">
              <label className="text-xs font-mono font-bold uppercase tracking-wider text-[#C7A45B] block">
                03. ASSET READINESS / STAGE
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {stageOptions.map((stage) => (
                  <button
                    key={stage}
                    type="button"
                    onClick={() => setAssetStage(stage)}
                    className={`p-3 text-left text-[11px] font-mono rounded-xs transition-all border min-h-[44px] ${
                      assetStage === stage
                        ? "bg-[#42124F] text-[#F7F4EE] font-bold border-[#C7A45B] gold-glow"
                        : "bg-white/5 text-[#F7F4EE]/70 hover:bg-white/10 border-white/10"
                    }`}
                  >
                    {stage}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Live Assessment Result */}
          <div className="lg:col-span-5 bg-[#14101D] p-6 sm:p-8 border border-[#C7A45B]/30 rounded-xs flex flex-col justify-between shadow-2xl relative">
            <div className="space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-[#C7A45B] flex items-center">
                  <Sparkles className="w-3.5 h-3.5 mr-1.5 text-[#C7A45B]" />
                  INSTANT ASSIGNMENT RESULT
                </span>
                <span className={`px-2.5 py-1 text-[9px] font-mono font-bold uppercase tracking-wider rounded-xs border ${fitResult.badgeColor}`}>
                  {fitResult.status === "high" ? "OPTIMAL MATCH" : "REVIEW NEEDED"}
                </span>
              </div>

              <div className="space-y-2">
                <span className="text-[10px] font-mono text-[#F7F4EE]/60 uppercase tracking-widest block">
                  EVALUATION RESULT
                </span>
                <h3 className="heading-ayat text-xl sm:text-2xl font-extrabold uppercase text-white">
                  {fitResult.title}
                </h3>
                <div className="ayat-gold-line w-16 my-2" />
                <p className="text-xs sm:text-sm text-[#F7F4EE]/80 font-light leading-relaxed">
                  {fitResult.desc}
                </p>
              </div>

              {/* Selected Parameters Summary */}
              <div className="p-4 bg-white/5 border border-white/10 rounded-xs space-y-2 text-xs font-mono">
                <div className="flex justify-between text-white/70">
                  <span>Category:</span>
                  <span className="font-bold text-[#C7A45B]">{selectedCategory}</span>
                </div>
                <div className="flex justify-between text-white/70">
                  <span>Capital Range:</span>
                  <span className="font-bold text-white">{fundingRange}</span>
                </div>
                <div className="flex justify-between text-white/70">
                  <span>Asset Stage:</span>
                  <span className="font-bold text-white truncate max-w-[180px]">{assetStage}</span>
                </div>
              </div>
            </div>

            {/* Direct CTA Link */}
            <div className="pt-6 border-t border-white/10 space-y-3">
              <div className="flex items-center space-x-2 text-[11px] text-white/60 font-light">
                <ShieldCheck className="w-4 h-4 text-[#C7A45B] flex-shrink-0" />
                <span>Non-Disclosure Fiduciary Review Standard</span>
              </div>

              <Link
                href={`/submit-opportunity?category=${encodeURIComponent(selectedCategory)}`}
                className="w-full inline-flex items-center justify-center px-6 py-4 text-xs font-mono font-bold uppercase tracking-widest text-[#111015] bg-[#C7A45B] hover:bg-[#F7F4EE] transition-all rounded-xs shadow-xl gold-glow min-h-[48px]"
              >
                <span>{fitResult.ctaText}</span>
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
