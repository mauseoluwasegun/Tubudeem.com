"use client";

import { COMPANY_CONFIG } from "@/lib/config";

export default function SectorStrip() {
  const highlights = [
    { label: "REGISTERED ENTITY", val: `RC NO: ${COMPANY_CONFIG.rcNumber}` },
    { label: "INVESTMENT FOCUS", val: "4 CORE SECTORS" },
    { label: "HEADQUARTERS", val: "ONIKAN, LAGOS STATE" },
    { label: "PROPOSAL REVIEW", val: "CONFIDENTIAL & FAST" },
  ];

  const sectors = [
    "REAL ESTATE ACQUISITION & DEVELOPMENT",
    "ESTABLISHED BUSINESS EXPANSION",
    "FINANCIAL MARKETS & TREASURY ASSETS",
    "AGRICULTURE & STRATEGIC PROJECTS",
  ];

  return (
    <div className="bg-[#111015] border-y border-white/10 select-none">
      {/* Key Metrics Counter Strip */}
      <div className="bg-[#191422] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 sm:py-4 border-b border-[#C7A45B]/15">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-6">
          {highlights.map((item, idx) => (
            <div key={idx} className="flex flex-col border-l-2 border-[#42124F] pl-3 sm:pl-4 py-0.5 sm:py-1">
              <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[#C7A45B] font-bold mb-0.5 sm:mb-1 truncate">
                {item.label}
              </span>
              <span className="text-[11px] sm:text-xs font-mono font-bold text-white truncate">
                {item.val}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Sector Navigation Ticker */}
      <div className="py-2.5 sm:py-3 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="flex items-center justify-between space-x-6 sm:space-x-8 text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#F7F4EE]/80 overflow-x-auto no-scrollbar py-1">
          {sectors.map((sector, index) => (
            <div key={index} className="flex items-center flex-shrink-0 space-x-6 sm:space-x-8">
              <span className="hover:text-[#C7A45B] transition-colors cursor-default whitespace-nowrap font-medium">
                {sector}
              </span>
              {index !== sectors.length - 1 && (
                <span className="w-1.5 h-1.5 rounded-full bg-[#C7A45B] flex-shrink-0" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
