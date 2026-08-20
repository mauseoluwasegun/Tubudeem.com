"use client";

import { COMPANY_CONFIG } from "@/lib/config";
import { Target, Compass } from "lucide-react";

export default function MissionVision() {
  return (
    <section className="py-16 sm:py-24 bg-[#111015] text-[#F7F4EE] relative border-t border-white/10 overflow-hidden">
      {/* Background Subtle Purple Ambient Overlay */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#42124F]/25 rounded-full filter blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-[0.25em] text-[#C7A45B] block">
            STRATEGIC DIRECTIVE
          </span>
          <h2 className="heading-ayat text-2xl sm:text-4xl md:text-5xl font-extrabold uppercase text-white">
            MISSION & <span className="text-[#C7A45B]">VISION.</span>
          </h2>
          <div className="ayat-gold-line w-24 mx-auto mt-2" />
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Mission Card */}
          <div className="p-6 sm:p-10 bg-[#191422] border border-[#C7A45B]/20 rounded-xs shadow-2xl relative overflow-hidden group hover:border-[#C7A45B]/60 transition-all duration-500">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 rounded-xs bg-[#42124F] text-[#C7A45B] flex items-center justify-center font-bold border border-[#C7A45B]/30 flex-shrink-0 group-hover:bg-[#C7A45B] group-hover:text-[#111015] transition-colors">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#C7A45B] block font-bold">
                  01 · CORPORATE PURPOSE
                </span>
                <h3 className="heading-ayat text-xl sm:text-2xl font-extrabold text-white uppercase">
                  OUR MISSION
                </h3>
              </div>
            </div>

            <div className="w-12 h-[2px] bg-[#C7A45B] mb-6" />

            <p className="text-sm sm:text-base text-[#F7F4EE]/85 font-light leading-relaxed">
              {COMPANY_CONFIG.mission}
            </p>
          </div>

          {/* Vision Card */}
          <div className="p-6 sm:p-10 bg-[#191422] border border-[#C7A45B]/20 rounded-xs shadow-2xl relative overflow-hidden group hover:border-[#C7A45B]/60 transition-all duration-500">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 rounded-xs bg-[#42124F] text-[#C7A45B] flex items-center justify-center font-bold border border-[#C7A45B]/30 flex-shrink-0 group-hover:bg-[#C7A45B] group-hover:text-[#111015] transition-colors">
                <Compass className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#C7A45B] block font-bold">
                  02 · LONG-TERM ASPIRATION
                </span>
                <h3 className="heading-ayat text-xl sm:text-2xl font-extrabold text-white uppercase">
                  OUR VISION
                </h3>
              </div>
            </div>

            <div className="w-12 h-[2px] bg-[#C7A45B] mb-6" />

            <p className="text-sm sm:text-base text-[#F7F4EE]/85 font-light leading-relaxed">
              {COMPANY_CONFIG.vision}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
