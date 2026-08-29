"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export default function OpportunitiesWeSeek() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const criteriaList = [
    {
      num: "01",
      title: "Real Estate Acquisition",
      desc: "Undervalued, distressed, or prime strategic land parcels and commercial/residential properties in Lagos.",
      focus: "Direct Land & Property Buying",
    },
    {
      num: "02",
      title: "Property Development",
      desc: "Joint-venture capital for commercial, residential, or mixed-use architectural developments in high-growth corridors.",
      focus: "JV Architectural Projects",
    },
    {
      num: "03",
      title: "Income-Generating Properties",
      desc: "Stabilized operational real estate assets offering verifiable rental yields and predictable cash flows.",
      focus: "Yield & Rental Assets",
    },
    {
      num: "04",
      title: "Established Businesses Seeking Expansion Capital",
      desc: "Mid-market enterprises needing equity or debt capital to expand processing, open new branches, or upgrade systems.",
      focus: "Expansion Equity & Debt",
    },
    {
      num: "05",
      title: "Profitable Businesses Ready to Scale",
      desc: "Companies with solid net margins, tested unit economics, and experienced leadership prepared for multi-region expansion.",
      focus: "Growth & Scale Capital",
    },
    {
      num: "06",
      title: "SMEs Requiring Capital",
      desc: "High-integrity small to medium enterprises with proven revenue channels, clear execution plans, and working capital needs.",
      focus: "Structured SME Capital",
    },
  ];

  return (
    <section id="opportunities" className="py-16 sm:py-24 bg-[#111015] text-[#F7F4EE] relative border-t border-white/10 overflow-hidden">
      {/* Background Subtle Purple Ambient Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#42124F]/30 rounded-full filter blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-start">
          {/* Left Column: Headline & Direct Callout */}
          <Reveal className="lg:col-span-5 lg:sticky lg:top-32 space-y-4 sm:space-y-6">
            <span className="text-[10px] sm:text-xs font-mono font-semibold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#C7A45B] block font-bold">
              TARGET OPPORTUNITY MATRIX
            </span>
            <h2 className="heading-ayat text-2xl sm:text-4xl lg:text-5xl font-extrabold uppercase leading-tight text-white">
              HAVE AN OPPORTUNITY THAT <br />
              <span className="text-[#C7A45B]">NEEDS CAPITAL?</span>
            </h2>
            <div className="ayat-gold-line w-20 sm:w-24 my-3 sm:my-4" />
            <p className="text-xs sm:text-sm text-[#F7F4EE]/80 font-light leading-relaxed">
              Tell us about your property, business or project. We evaluate every proposal based on fundamentals, market potential, and sustainable long-term value creation.
            </p>

            <div className="pt-2 sm:pt-4">
              <Link
                href="/submit-opportunity"
                className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-4 text-xs font-mono font-bold uppercase tracking-widest text-[#111015] bg-[#C7A45B] hover:bg-[#F7F4EE] transition-all duration-300 rounded-xs shadow-xl gold-glow group"
              >
                <span>Present Your Opportunity</span>
                <ArrowUpRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </div>
          </Reveal>

          {/* Right Column: Clean Interactive List */}
          <div className="lg:col-span-7 space-y-3 sm:space-y-4">
            {criteriaList.map((item, idx) => (
              <Reveal key={item.num} delay={idx * 0.08} y={16}>
                <div
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`p-4 sm:p-6 rounded-xs transition-all duration-300 border ${
                    hoveredIndex === idx
                      ? "bg-[#191422] border-[#C7A45B] gold-glow"
                      : "bg-[#14101D] border-white/10"
                  }`}
                >
                  <div className="flex items-start space-x-3.5 sm:space-x-5">
                    <span className="font-mono text-xs font-bold text-[#C7A45B] pt-0.5 flex-shrink-0">
                      {item.num}
                    </span>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1.5 sm:mb-2">
                        <h3 className="text-sm sm:text-base md:text-lg font-bold text-white group-hover:text-[#C7A45B] transition-colors">
                          {item.title}
                        </h3>
                        <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-[#C7A45B] bg-[#42124F]/30 px-2.5 py-0.5 rounded-xs border border-[#C7A45B]/20 self-start sm:self-auto font-bold">
                          {item.focus}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#F7F4EE]/70 font-light leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                    <ChevronRight
                      className={`w-4 h-4 sm:w-5 sm:h-5 transition-all duration-300 flex-shrink-0 mt-0.5 ${
                        hoveredIndex === idx
                          ? "text-[#C7A45B] translate-x-1"
                          : "text-white/20"
                      }`}
                    />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
