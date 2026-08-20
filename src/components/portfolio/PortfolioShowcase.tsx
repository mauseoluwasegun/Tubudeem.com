"use client";

import Image from "next/image";
import { Lock, MapPin } from "lucide-react";

export default function PortfolioShowcase() {
  const tiles = [
    {
      category: "REAL ESTATE DEVELOPMENT",
      title: "Commercial & Residential Developments",
      location: "Ikoyi & Lekki, Lagos State",
      image: "/images/real_estate_focus.jpg",
    },
    {
      category: "ESTABLISHED BUSINESSES",
      title: "Expansion Capital & Strategic Equity",
      location: "Victoria Island, Lagos State",
      image: "/images/business_focus.jpg",
    },
    {
      category: "FINANCIAL INVESTMENTS",
      title: "Fixed Income & Market Securities",
      location: "Onikan, Lagos State",
      image: "/images/financial_focus.jpg",
    },
    {
      category: "AGRICULTURE & STRATEGIC",
      title: "Commercial Agri-Tech & Processing",
      location: "Commercial Agro Hubs, Nigeria",
      image: "/images/agriculture_focus.jpg",
    },
  ];

  return (
    <section id="portfolio" className="py-16 sm:py-24 bg-[#111015] text-[#F7F4EE] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-16 pb-6 sm:pb-8 border-b border-white/10">
          <div className="max-w-2xl">
            <span className="text-[10px] sm:text-xs font-mono font-bold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#C7A45B] block mb-2 sm:mb-3">
              PORTFOLIO SHOWCASE · SELECTED ASSETS
            </span>
            <h2 className="heading-ayat text-2xl sm:text-4xl md:text-5xl font-extrabold uppercase text-white">
              OUR <span className="text-[#C7A45B]">PORTFOLIO.</span>
            </h2>
          </div>
          <p className="mt-4 md:mt-0 max-w-md text-xs sm:text-sm text-[#F7F4EE]/70 font-light leading-relaxed">
            Our portfolio showcases selected high-value opportunities across our target investment sectors upon finalization of deployment phases.
          </p>
        </div>

        {/* 4 Large Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {tiles.map((tile) => (
            <div
              key={tile.category}
              className="group relative h-72 sm:h-88 md:h-96 rounded-xs overflow-hidden bg-[#191422] border border-[#C7A45B]/20 hover:border-[#C7A45B] transition-all duration-500 shadow-2xl"
            >
              {/* Image */}
              <Image
                src={tile.image}
                alt={tile.title}
                fill
                className="object-cover object-center filter brightness-60 contrast-110 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111015] via-[#111015]/50 to-transparent" />

              {/* Status Badge */}
              <div className="absolute top-3 right-3 sm:top-5 sm:right-5 z-10">
                <span className="inline-flex items-center px-2.5 py-1 sm:px-3.5 sm:py-1.5 rounded-xs bg-[#111015]/90 backdrop-blur-md border border-[#C7A45B]/30 text-[9px] sm:text-[10px] font-mono uppercase tracking-widest text-[#C7A45B] font-bold">
                  <Lock className="w-3 h-3 text-[#C7A45B] mr-1" />
                  <span>Portfolio Showcase · Active Pipeline</span>
                </span>
              </div>

              {/* Bottom Overlay Content */}
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-8 z-10 space-y-1.5 sm:space-y-2">
                <div className="flex flex-wrap items-center gap-2 text-[9px] sm:text-[10px] font-mono text-[#C7A45B] uppercase tracking-widest font-bold">
                  <span>{tile.category}</span>
                  <span className="hidden sm:inline">•</span>
                  <span className="flex items-center text-[#F7F4EE]/70 font-normal">
                    <MapPin className="w-3 h-3 mr-1 text-[#C7A45B]" />
                    {tile.location}
                  </span>
                </div>
                <h3 className="heading-ayat text-xl sm:text-2xl md:text-3xl text-white font-extrabold uppercase group-hover:text-[#C7A45B] transition-colors">
                  {tile.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
