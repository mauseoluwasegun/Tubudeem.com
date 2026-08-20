"use client";

import Link from "next/link";
import Image from "next/image";
import { COMPANY_CONFIG } from "@/lib/config";
import { MapPin, Mail, Phone, ShieldCheck } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A090D] text-[#F7F4EE] border-t border-white/10 pt-12 sm:pt-16 pb-8 sm:pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 pb-12 sm:pb-16 border-b border-white/10">
          {/* Corporate Identity */}
          <div className="sm:col-span-2 lg:col-span-4 space-y-4 sm:space-y-6">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0">
                <Image
                  src="/images/tubudeem_icon_darkmode.png"
                  alt={COMPANY_CONFIG.name}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold tracking-widest text-sm sm:text-base text-white uppercase font-sans">
                  {COMPANY_CONFIG.shortName}
                </span>
                <span className="text-[8px] sm:text-[9px] tracking-[0.2em] text-[#C7A45B] uppercase font-mono font-medium">
                  INVESTMENT NIGERIA
                </span>
              </div>
            </Link>

            <p className="text-xs text-[#F7F4EE]/70 font-light leading-relaxed max-w-sm">
              {COMPANY_CONFIG.name} is a strategic investment company deploying capital across real estate, businesses, financial markets, and agriculture.
            </p>

            <div className="p-3.5 bg-[#42124F]/20 border border-[#C7A45B]/20 rounded-xs text-[11px] font-mono text-[#C7A45B] font-bold">
              <div className="flex items-center space-x-2">
                <ShieldCheck className="w-4 h-4 text-[#C7A45B] flex-shrink-0" />
                <span className="truncate">REGISTERED ENTITY: RC NO {COMPANY_CONFIG.rcNumber}</span>
              </div>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-3 space-y-3 sm:space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-mono font-bold text-[#C7A45B]">
              NAVIGATION
            </h4>
            <ul className="space-y-2 text-xs font-mono uppercase tracking-wider text-[#F7F4EE]/80">
              <li>
                <Link href="/" className="hover:text-[#C7A45B] transition-colors py-1 block">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#focus" className="hover:text-[#C7A45B] transition-colors py-1 block">
                  Our Focus
                </Link>
              </li>
              <li>
                <Link href="/#opportunities" className="hover:text-[#C7A45B] transition-colors py-1 block">
                  Opportunities We Seek
                </Link>
              </li>
              <li>
                <Link href="/#approach" className="hover:text-[#C7A45B] transition-colors py-1 block">
                  Investment Approach
                </Link>
              </li>
              <li>
                <Link href="/#portfolio" className="hover:text-[#C7A45B] transition-colors py-1 block">
                  Portfolio Showcase
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-[#C7A45B] transition-colors text-[#C7A45B] font-semibold py-1 block">
                  Market Insights (Blog)
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#C7A45B] transition-colors py-1 block">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/submit-opportunity" className="hover:text-[#C7A45B] transition-colors text-[#C7A45B] font-bold py-1 block">
                  Submit Opportunity ↗
                </Link>
              </li>
            </ul>
          </div>

          {/* Focus Areas */}
          <div className="lg:col-span-2 space-y-3 sm:space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-mono font-bold text-[#C7A45B]">
              SECTORS
            </h4>
            <ul className="space-y-2 text-xs font-mono text-[#F7F4EE]/70">
              <li className="py-0.5">Real Estate</li>
              <li className="py-0.5">Established Businesses</li>
              <li className="py-0.5">Expansion Equity</li>
              <li className="py-0.5">Financial Markets</li>
              <li className="py-0.5">Agriculture</li>
            </ul>
          </div>

          {/* Registered Office Address */}
          <div className="lg:col-span-3 space-y-3 sm:space-y-4">
            <h4 className="text-xs uppercase tracking-[0.2em] font-mono font-bold text-[#C7A45B]">
              REGISTERED OFFICE
            </h4>
            <div className="space-y-2.5 text-xs text-[#F7F4EE]/80 font-light">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-[#C7A45B] flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed font-mono text-[11px]">{COMPANY_CONFIG.address}</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Mail className="w-4 h-4 text-[#C7A45B] flex-shrink-0" />
                <span className="font-mono text-[11px] truncate">{COMPANY_CONFIG.contactEmailPlaceholder}</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-[#C7A45B] flex-shrink-0" />
                <span className="font-mono text-[11px]">{COMPANY_CONFIG.contactPhonePlaceholder}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] sm:text-xs text-[#F7F4EE]/50 font-light gap-3 text-center sm:text-left">
          <div>
            © {currentYear} {COMPANY_CONFIG.name}. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center justify-center space-x-4 sm:space-x-6 text-[10px] sm:text-xs font-mono">
            <Link href="/privacy" className="hover:text-[#C7A45B] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#C7A45B] transition-colors">
              Terms of Engagement
            </Link>
            <Link href="/contact" className="hover:text-[#C7A45B] transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
