"use client";

import { COMPANY_CONFIG } from "@/lib/config";
import { ShieldCheck, Scale, TrendingUp, Compass, ArrowRight } from "lucide-react";

export default function InvestmentApproach() {
  const icons = [ShieldCheck, Scale, Compass, TrendingUp];

  return (
    <section id="approach" className="py-16 sm:py-24 bg-[#F7F4EE] text-[#242127] relative border-t border-[#42124F]/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-start mb-16 sm:mb-20">
          {/* Left Column: Headline */}
          <div className="lg:col-span-5">
            <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#42124F] block mb-2 sm:mb-4">
              GOVERNANCE & APPROACH
            </span>
            <h2 className="heading-ayat text-3xl sm:text-5xl font-extrabold uppercase leading-[1.08] text-[#111015]">
              DISCIPLINE <br />
              <span className="text-[#42124F]">BEHIND EVERY</span> <br />
              OPPORTUNITY.
            </h2>
            <div className="ayat-purple-line w-20 sm:w-24 my-6 sm:my-8" />
            <p className="text-xs sm:text-base text-[#242127]/80 font-light leading-relaxed">
              We maintain rigorous governance, financial prudence, and legal clarity across every stage of investment evaluation, capital structuring, and deployment.
            </p>
          </div>

          {/* Right Column: 4 Core Principles Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {COMPANY_CONFIG.principles.map((principle, index) => {
              const IconComponent = icons[index % icons.length];
              return (
                <div
                  key={principle.title}
                  className="p-5 sm:p-6 bg-white border border-[#42124F]/15 rounded-xs shadow-xs hover:border-[#42124F]/40 hover:shadow-md transition-all duration-300 group"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xs bg-[#42124F]/10 flex items-center justify-center mb-3 sm:mb-4 text-[#42124F] group-hover:bg-[#42124F] group-hover:text-[#F7F4EE] transition-colors">
                    <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <h3 className="heading-ayat text-lg sm:text-xl font-bold text-[#111015] mb-1.5 sm:mb-2 uppercase">
                    {principle.title}
                  </h3>
                  <p className="text-xs text-[#242127]/70 font-light leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* 5-Stage Investment Process Pipeline */}
        <div className="pt-12 sm:pt-16 border-t border-[#42124F]/15">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 sm:mb-12 gap-2">
            <div>
              <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] text-[#42124F] block mb-1 font-bold">
                EXECUTION PIPELINE
              </span>
              <h3 className="heading-ayat text-xl sm:text-2xl font-bold uppercase text-[#111015]">
                Five-Stage Capital Deployment Cycle
              </h3>
            </div>
            <span className="text-[10px] sm:text-xs font-mono text-[#42124F] font-bold">
              IDENTIFY → EVALUATE → INVEST → SUPPORT → GROW
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-4">
            {COMPANY_CONFIG.pipelineStages.map((stage, idx) => (
              <div
                key={stage.stage}
                className="p-4 sm:p-5 bg-white border border-[#42124F]/15 rounded-xs hover:border-[#42124F] transition-all duration-300 shadow-xs relative group"
              >
                <div className="flex items-center justify-between mb-2.5 sm:mb-3">
                  <span className="font-mono text-xs font-bold text-[#42124F] bg-[#42124F]/10 px-2 py-0.5 rounded-xs">
                    {stage.stage}
                  </span>
                  {idx < COMPANY_CONFIG.pipelineStages.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-[#42124F]/30 group-hover:text-[#42124F] hidden lg:block" />
                  )}
                </div>
                <h4 className="text-xs sm:text-sm font-bold font-mono uppercase tracking-wider text-[#111015] mb-1 group-hover:text-[#42124F] transition-colors">
                  {stage.name}
                </h4>
                <p className="text-[11px] text-[#242127]/60 font-light leading-snug">
                  {stage.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
