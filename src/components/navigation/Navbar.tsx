"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Menu, X, MapPin, ShieldCheck } from "lucide-react";
import { COMPANY_CONFIG } from "@/lib/config";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Our Focus", href: "/#focus" },
    { name: "Opportunities", href: "/#opportunities" },
    { name: "Approach", href: "/#approach" },
    { name: "Portfolio", href: "/#portfolio" },
    { name: "Insights", href: "/blog" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Corporate Status Bar */}
      <div className="bg-[#2B0A35] border-b border-[#C7A45B]/20 py-1.5 px-3 sm:px-6 text-[10px] sm:text-[11px] font-mono text-[#F7F4EE]/80">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-y-1">
          <div className="flex items-center space-x-3 sm:space-x-6">
            <span className="flex items-center text-[#C7A45B] font-bold whitespace-nowrap">
              <ShieldCheck className="w-3.5 h-3.5 mr-1 text-[#C7A45B] flex-shrink-0" />
              RC NO: {COMPANY_CONFIG.rcNumber}
            </span>
            <span className="flex items-center whitespace-nowrap">
              <MapPin className="w-3.5 h-3.5 mr-1 text-[#C7A45B] flex-shrink-0" />
              {COMPANY_CONFIG.state}, NG
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-4 text-[10px] uppercase tracking-widest text-[#F7F4EE]/70 font-semibold">
            <span>STRATEGIC CAPITAL ALLOCATION</span>
            <span className="text-[#C7A45B]">•</span>
            <span>BUILDING LASTING VALUE</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div
        className={`transition-all duration-300 ${
          isScrolled
            ? "glass-nav py-2.5 sm:py-3.5 shadow-2xl"
            : "bg-[#111015]/90 backdrop-blur-md py-3 sm:py-4 border-b border-white/10"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo & Title */}
            <Link href="/" className="flex items-center space-x-2.5 sm:space-x-3.5 group">
              <div className="relative w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0">
                <Image
                  src="/images/tubudeem_icon_darkmode.png"
                  alt={COMPANY_CONFIG.name}
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-105"
                  priority
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold tracking-widest text-sm sm:text-base text-white uppercase font-sans leading-tight">
                  {COMPANY_CONFIG.shortName}
                </span>
                <span className="text-[8px] sm:text-[9px] tracking-[0.2em] text-[#C7A45B] uppercase font-mono font-medium leading-none mt-0.5">
                  INVESTMENT NIGERIA
                </span>
              </div>
            </Link>

            {/* Desktop Nav Links */}
            <nav className="hidden lg:flex items-center space-x-7 xl:space-x-9">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-xs uppercase tracking-[0.2em] font-mono text-[#F7F4EE]/80 hover:text-[#C7A45B] transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA Button */}
            <div className="hidden lg:flex items-center">
              <Link
                href="/submit-opportunity"
                className="inline-flex items-center justify-center px-5 py-2.5 text-xs font-mono uppercase tracking-widest text-[#111015] bg-[#C7A45B] hover:bg-[#F7F4EE] transition-all duration-300 rounded-xs font-bold shadow-md gold-glow group"
              >
                <span>Submit Opportunity</span>
                <ArrowUpRight className="w-3.5 h-3.5 ml-1.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex lg:hidden items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-white hover:text-[#C7A45B] transition-colors focus:outline-none min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="Toggle Mobile Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[75px] z-50 bg-[#111015]/95 backdrop-blur-xl border-t border-[#C7A45B]/20 animate-fade-in flex flex-col justify-between p-6 overflow-y-auto">
          <div className="space-y-4">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#C7A45B] block mb-2 font-bold">
              NAVIGATION MENU
            </span>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm font-mono uppercase tracking-widest text-white hover:text-[#C7A45B] transition-colors py-3 border-b border-white/5 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-4 h-4 text-[#C7A45B]" />
              </Link>
            ))}
          </div>

          <div className="pt-6 border-t border-white/10 space-y-4">
            <Link
              href="/submit-opportunity"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center px-6 py-4 text-xs font-mono font-bold uppercase tracking-widest text-[#111015] bg-[#C7A45B] hover:bg-[#F7F4EE] transition-all rounded-xs shadow-lg gold-glow"
            >
              <span>Submit Opportunity</span>
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </Link>

            <div className="text-[10px] font-mono text-white/50 text-center uppercase tracking-widest">
              RC NO: {COMPANY_CONFIG.rcNumber} · {COMPANY_CONFIG.state}, NIGERIA
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
