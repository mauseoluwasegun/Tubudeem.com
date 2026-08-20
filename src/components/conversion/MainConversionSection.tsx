"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { COMPANY_CONFIG } from "@/lib/config";

export default function MainConversionSection() {
  return (
    <section className="py-20 sm:py-28 bg-[#111015] text-[#F7F4EE] relative overflow-hidden border-t border-white/10">
      {/* Background Deep Purple Subtle Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#42124F]/35 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6 sm:space-y-8">
        <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#C7A45B] block">
          CALL FOR INVESTMENT OPPORTUNITIES
        </span>

        <h2 className="heading-ayat text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold uppercase leading-[1.08] text-white">
          HAVE SOMETHING <br />
          <span className="text-[#C7A45B]">WORTH BUILDING?</span>
        </h2>

        <div className="ayat-gold-line w-24 sm:w-32 mx-auto" />

        <p className="text-sm sm:text-lg md:text-xl text-[#F7F4EE]/85 font-light max-w-2xl mx-auto leading-relaxed">
          If you have a business, property or project requiring strategic capital, present the opportunity to {COMPANY_CONFIG.shortName}.
        </p>

        <div className="pt-2 sm:pt-4">
          <Link
            href="/submit-opportunity"
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 sm:px-10 sm:py-5 text-xs font-mono font-bold uppercase tracking-widest text-[#111015] bg-[#C7A45B] hover:bg-[#F7F4EE] transition-all duration-300 rounded-xs shadow-2xl gold-glow group"
          >
            <span>Submit an Investment Opportunity</span>
            <ArrowUpRight className="w-4 h-4 ml-2.5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
