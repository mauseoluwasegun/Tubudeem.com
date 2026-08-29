"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";

export default function InvestmentFocus() {
  const [activeSector, setActiveSector] = useState(0);

  const focusAreas = [
    {
      id: "01",
      title: "Real Estate",
      subtitle: "ACQUISITIONS & CAPITAL DEVELOPMENTS",
      image: "/images/real_estate_focus.jpg",
      tags: ["Prime Land", "Commercial Towers", "Mixed-Use", "Rental Yield"],
      description:
        "Strategic capital deployment into commercial, residential, and mixed-use real estate assets across high-density economic hubs.",
      criteria: [
        "Verifiable land title / Certificate of Occupancy",
        "Targeted gross rental yield exceeding 12% p.a.",
        "Strategic location in prime commercial corridors",
        "Joint venture development or full asset acquisition",
      ],
    },
    {
      id: "02",
      title: "Businesses",
      subtitle: "EXPANSION CAPITAL & STRATEGIC EQUITY",
      image: "/images/business_focus.jpg",
      tags: ["Expansion Capital", "Established SMEs", "Operational Backing", "Growth"],
      description:
        "Partnering with profitable, high-performing middle-market enterprises seeking growth capital or multi-location expansion.",
      criteria: [
        "Minimum 3-year operational track record",
        "Positive EBITDA and tested unit economics",
        "Strong leadership team & operational structure",
        "Structured equity or growth debt capital options",
      ],
    },
    {
      id: "03",
      title: "Startups & Ventures",
      subtitle: "EARLY-STAGE CAPITAL & ACCELERATOR SUPPORT",
      image: "/images/business_focus.jpg",
      tags: ["Early-Stage", "Accelerator Programs", "Mentorship", "Seed Capital"],
      description:
        "Backing early-stage Nigerian startups with seed capital and structured support, including participation in accelerator programs.",
      criteria: [
        "Clear problem-solution fit and early market traction",
        "Committed founding team with relevant domain experience",
        "Scalable business model with a credible path to revenue",
        "Openness to structured mentorship and milestone-based funding",
      ],
    },
    {
      id: "04",
      title: "Financial Markets",
      subtitle: "TREASURY & MONEY MARKET ASSETS",
      image: "/images/financial_focus.jpg",
      tags: ["Treasury Bills", "Sovereign Bonds", "Equities", "Money Market"],
      description:
        "Disciplined portfolio allocation across liquid money-market instruments, fixed income, sovereign debt, and listed securities.",
      criteria: [
        "Capital preservation priority",
        "High-liquidity money market instruments",
        "Sovereign & AAA-rated debt securities",
        "Active yield optimization",
      ],
    },
  ];

  return (
    <section id="focus" className="py-16 sm:py-24 bg-[#F7F4EE] text-[#242127] relative border-t border-[#42124F]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-16 pb-6 sm:pb-8 border-b border-[#42124F]/15">
          <div className="max-w-2xl">
            <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#42124F] block mb-2 sm:mb-3 font-bold">
              INVESTMENT FOCUS · SECTOR ALLOCATION
            </span>
            <h2 className="heading-ayat text-2xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-[#111015]">
              WHERE WE SEE <br />
              <span className="text-[#C7A45B]">OPPORTUNITY.</span>
            </h2>
          </div>
          <p className="mt-4 md:mt-0 max-w-md text-xs sm:text-sm text-[#242127]/80 font-light leading-relaxed">
            We focus on opportunities where disciplined capital and long-term thinking support sustainable growth and asset value.
          </p>
        </div>

        {/* Swipeable Tab Buttons */}
        <div className="flex items-center space-x-2 border-b border-[#42124F]/15 pb-4 mb-8 sm:mb-12 overflow-x-auto no-scrollbar">
          {focusAreas.map((area, idx) => (
            <button
              key={area.id}
              onClick={() => setActiveSector(idx)}
              className={`px-4 sm:px-6 py-2.5 sm:py-3 text-[11px] sm:text-xs font-mono uppercase tracking-widest rounded-xs transition-all whitespace-nowrap min-h-[44px] ${
                activeSector === idx
                  ? "bg-[#42124F] text-[#F7F4EE] font-bold shadow-md gold-glow"
                  : "bg-white text-[#242127]/80 hover:bg-[#42124F]/5 border border-[#42124F]/15"
              }`}
            >
              <span className="mr-1.5 text-[#C7A45B] font-bold">{area.id}.</span>
              <span>{area.title}</span>
            </button>
          ))}
        </div>

        {/* Active Sector Feature Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSector}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-stretch bg-white border border-[#42124F]/15 rounded-xs p-4 sm:p-8 lg:p-10 shadow-xl"
          >
            {/* Left Visual Container */}
            <div className="lg:col-span-6 relative min-h-[240px] sm:min-h-[340px] lg:min-h-[420px] rounded-xs overflow-hidden bg-[#111015] group">
              <Image
                src={focusAreas[activeSector].image}
                alt={focusAreas[activeSector].title}
                fill
                className="object-cover object-center filter brightness-90 contrast-105 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111015] via-transparent to-transparent opacity-80" />
              
              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-[#42124F]/90 backdrop-blur-md px-3 py-1 sm:px-3.5 sm:py-1.5 text-[10px] sm:text-xs font-mono text-[#C7A45B] font-bold rounded-xs border border-white/10">
                {focusAreas[activeSector].id} / {String(focusAreas.length).padStart(2, "0")}
              </div>

              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 text-white">
                <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-[#C7A45B] block mb-0.5 sm:mb-1 font-bold">
                  SECTOR CLASSIFICATION
                </span>
                <h3 className="heading-ayat text-xl sm:text-2xl font-bold uppercase">
                  {focusAreas[activeSector].title}
                </h3>
              </div>
            </div>

            {/* Right Content */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
              <div>
                <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#42124F] block mb-1.5 sm:mb-2 font-bold">
                  {focusAreas[activeSector].subtitle}
                </span>
                <h3 className="heading-ayat text-xl sm:text-3xl font-extrabold uppercase text-[#111015] mb-3 sm:mb-4">
                  {focusAreas[activeSector].title} Scope
                </h3>
                <p className="text-xs sm:text-sm text-[#242127]/80 font-light leading-relaxed mb-4 sm:mb-6">
                  {focusAreas[activeSector].description}
                </p>

                {/* Criteria List */}
                <div className="space-y-2.5 sm:space-y-3 pt-3 sm:pt-4 border-t border-[#42124F]/15">
                  <span className="text-[11px] sm:text-xs font-mono uppercase font-bold text-[#111015] block mb-1.5 sm:mb-2">
                    Key Investment Evaluation Criteria:
                  </span>
                  {focusAreas[activeSector].criteria.map((item, cIdx) => (
                    <div key={cIdx} className="flex items-start space-x-2.5 sm:space-x-3 text-[11px] sm:text-xs text-[#242127]/80">
                      <div className="w-4 h-4 rounded-full bg-[#42124F]/10 text-[#42124F] flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-[#42124F]" />
                      </div>
                      <span className="leading-tight">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tags & Action Link */}
              <div className="pt-4 sm:pt-6 border-t border-[#42124F]/15 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {focusAreas[activeSector].tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[9px] sm:text-[10px] font-mono tracking-wider uppercase bg-[#F7F4EE] text-[#42124F] px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-xs border border-[#42124F]/15 font-bold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href="/submit-opportunity"
                  className="w-full sm:w-auto inline-flex items-center justify-center text-xs font-mono font-bold uppercase tracking-widest text-[#42124F] hover:text-[#C7A45B] transition-colors py-2 group/link"
                >
                  <span>Submit {focusAreas[activeSector].title} Proposal</span>
                  <ArrowUpRight className="w-4 h-4 ml-1.5 transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                </Link>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
