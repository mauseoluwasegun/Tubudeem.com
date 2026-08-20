"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUpRight,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Sparkles,
  ShieldCheck,
  Building2,
  Briefcase,
  TrendingUp,
  Sprout,
  CheckCircle2,
} from "lucide-react";
import { COMPANY_CONFIG } from "@/lib/config";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [activeSectorIndex, setActiveSectorIndex] = useState(0);

  const sectors = [
    {
      title: "REAL ESTATE ACQUISITIONS",
      sub: "Prime commercial, luxury residential, and JV development opportunities in Lagos & Abuja.",
      icon: Building2,
      badge: "Lagos / Abuja Corridors",
    },
    {
      title: "HIGH-GROWTH ENTERPRISES",
      sub: "Venture debt & equity expansion backing for mid-market West African enterprises.",
      icon: Briefcase,
      badge: "Private Equity",
    },
    {
      title: "FINANCIAL & TREASURY ASSETS",
      sub: "Disciplined capital deployment across sovereign fixed income and money market yield.",
      icon: TrendingUp,
      badge: "Fixed Income",
    },
    {
      title: "AGRIBUSINESS INFRASTRUCTURE",
      sub: "Mechanized processing facilities, cold storage hubs, and high-margin export value chains.",
      icon: Sprout,
      badge: "Agri-Tech & Logistics",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSectorIndex((prev) => (prev + 1) % sectors.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [sectors.length]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center bg-[#0A090D] overflow-hidden pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-24 border-b border-[#C7A45B]/20">
      {/* Background Video Player */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          ref={videoRef}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          poster="/images/investcorp_cover.jpg"
          className="w-full h-full object-cover filter brightness-[0.45] contrast-125 scale-105 transition-transform duration-1000"
        >
          <source src="/images/investcorp_hero_video.mp4" type="video/mp4" />
          <source src="/images/hero_background.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* High-End Dark Luxury Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A090D] via-[#0A090D]/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A090D] via-transparent to-[#42124F]/50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#C7A45B]/15 via-transparent to-transparent" />
      </div>

      {/* Floating Video Interactive Controls */}
      <div className="absolute bottom-6 right-6 sm:bottom-10 sm:right-10 z-20 flex items-center space-x-3 bg-[#0A090D]/80 backdrop-blur-xl border border-[#C7A45B]/30 p-2 rounded-full shadow-2xl">
        <button
          onClick={togglePlay}
          className="w-9 h-9 rounded-full bg-[#42124F] text-[#C7A45B] hover:text-white flex items-center justify-center transition-all hover:scale-105"
          aria-label={isPlaying ? "Pause Video" : "Play Video"}
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
        </button>

        <button
          onClick={toggleMute}
          className="w-9 h-9 rounded-full bg-[#18161D] text-[#C7A45B] hover:text-white flex items-center justify-center transition-all hover:scale-105"
          aria-label={isMuted ? "Unmute Audio" : "Mute Audio"}
        >
          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </button>

        <div className="hidden md:flex items-center px-3 py-1 text-[10px] font-mono uppercase tracking-widest text-[#C7A45B]">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse mr-2" />
          Live Cinematic Feed
        </div>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Hero Copy & Actions */}
          <div className="lg:col-span-8 space-y-6 sm:space-y-8">
            {/* Corporate Status Eyebrow */}
            <div className="inline-flex items-center space-x-3 px-3.5 py-1.5 bg-[#42124F]/70 border border-[#C7A45B]/40 rounded-full text-[#C7A45B] text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest backdrop-blur-md shadow-lg">
              <ShieldCheck className="w-4 h-4 text-[#C7A45B]" />
              <span>OFFICIAL ENTITY · RC NO {COMPANY_CONFIG.rcNumber}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold font-heading text-white tracking-tight leading-[1.05] uppercase">
              INVESTING IN <br />
              <span className="bg-gradient-to-r from-[#C7A45B] via-[#F7F4EE] to-[#E6CA85] bg-clip-text text-transparent drop-shadow-sm">
                OPPORTUNITIES.
              </span> <br />
              BUILDING LASTING VALUE.
            </h1>

            {/* Accent Gold Gradient Divider */}
            <div className="w-28 sm:w-36 h-1 bg-gradient-to-r from-[#C7A45B] to-transparent rounded-full" />

            {/* Dynamic Sector Subtext Carousel */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSectorIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
                className="max-w-2xl bg-[#14121A]/80 backdrop-blur-md border border-[#C7A45B]/25 p-5 rounded-2xl shadow-2xl"
              >
                <div className="flex items-center space-x-2 text-[#C7A45B] text-xs font-mono font-bold uppercase tracking-wider mb-2">
                  <Sparkles className="w-4 h-4" />
                  <span>{sectors[activeSectorIndex].badge}</span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white font-heading mb-1">
                  {sectors[activeSectorIndex].title}
                </h3>
                <p className="text-xs sm:text-sm text-[#F7F4EE]/80 font-light leading-relaxed">
                  {sectors[activeSectorIndex].sub}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <Link
                href="/submit-opportunity"
                className="inline-flex items-center justify-center px-8 py-4 text-xs font-mono font-bold uppercase tracking-widest text-[#0A090D] bg-[#C7A45B] hover:bg-white transition-all duration-300 rounded-sm shadow-xl gold-glow group"
              >
                <span>Submit Deal Proposal</span>
                <ArrowUpRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>

              <Link
                href="/blog"
                className="inline-flex items-center justify-center px-8 py-4 text-xs font-mono font-bold uppercase tracking-widest text-white border border-white/20 hover:border-[#C7A45B] hover:text-[#C7A45B] bg-[#0A090D]/60 transition-all duration-300 rounded-sm backdrop-blur-md"
              >
                <span>Read Market Insights</span>
              </Link>
            </div>
          </div>

          {/* Right Column: Capital Allocation Stats Panel */}
          <div className="lg:col-span-4 hidden lg:block">
            <div className="bg-[#14121A]/90 backdrop-blur-xl border border-[#C7A45B]/30 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-xs font-mono uppercase tracking-widest text-[#C7A45B] font-bold">
                  PORTFOLIO METRICS
                </span>
                <span className="px-2.5 py-0.5 bg-[#42124F] text-[#C7A45B] text-[10px] font-mono rounded-full font-bold">
                  2026 ACTIVE
                </span>
              </div>

              <div className="space-y-5">
                <div className="p-4 bg-[#18161D] rounded-xl border border-white/5">
                  <div className="text-[10px] font-mono uppercase text-[#F7F4EE]/60 mb-1">
                    TARGET CAPITAL DEPLOYMENT
                  </div>
                  <div className="text-2xl font-bold font-mono text-[#C7A45B]">
                    ₦100M - ₦2.5B+
                  </div>
                  <div className="text-[11px] text-[#F7F4EE]/70 font-light mt-1">
                    Per Deal Opportunity / JV Development
                  </div>
                </div>

                <div className="p-4 bg-[#18161D] rounded-xl border border-white/5">
                  <div className="text-[10px] font-mono uppercase text-[#F7F4EE]/60 mb-1">
                    CORE TARGET SECTORS
                  </div>
                  <div className="text-sm font-bold text-white flex flex-wrap gap-2 mt-2">
                    {["Real Estate", "Venture Debt", "Agri-Tech", "Fixed Income"].map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 bg-[#42124F]/50 border border-[#C7A45B]/30 rounded-md text-[10px] font-mono text-[#C7A45B]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 bg-[#18161D] rounded-xl border border-white/5 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-white">Rapid Proposal Evaluation</div>
                    <div className="text-[11px] text-[#F7F4EE]/60 font-mono">Response within 72 Business Hours</div>
                  </div>
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                </div>
              </div>

              <Link
                href="/submit-opportunity"
                className="w-full inline-flex items-center justify-center py-3 bg-[#42124F]/80 hover:bg-[#42124F] border border-[#C7A45B]/40 text-[#C7A45B] text-xs font-mono font-bold uppercase tracking-widest rounded-xl transition-colors"
              >
                <span>Check Deal Eligibility ↗</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
