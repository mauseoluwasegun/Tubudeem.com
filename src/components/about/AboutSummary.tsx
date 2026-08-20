"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Building2, Shield, Target, Award } from "lucide-react";
import { COMPANY_CONFIG } from "@/lib/config";

export default function AboutSummary() {
  return (
    <section id="about" className="py-24 bg-brand-ivory text-brand-body relative border-t border-brand-purple/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-purple font-sans block">
              ABOUT TUBUDEEM
            </span>
            <h2 className="heading-serif text-3xl sm:text-5xl text-brand-charcoal font-semibold leading-tight">
              CAPITAL WITH <br />
              <span className="text-brand-purple italic font-normal">PURPOSE.</span>
            </h2>
            <p className="text-base sm:text-lg text-brand-body/85 font-light leading-relaxed">
              {COMPANY_CONFIG.name} operates across multiple investment areas, identifying opportunities where disciplined capital and long-term thinking can create sustainable value.
            </p>

            <div className="pt-4 border-t border-brand-purple/10 grid grid-cols-2 gap-4 text-xs font-mono text-brand-charcoal">
              <div>
                <span className="text-brand-purple/60 block mb-1">REGISTRATION</span>
                <span className="font-bold">RC No: {COMPANY_CONFIG.rcNumber}</span>
              </div>
              <div>
                <span className="text-brand-purple/60 block mb-1">LOCATION</span>
                <span className="font-bold">Onikan, Lagos State</span>
              </div>
            </div>

            <div className="pt-4">
              <Link
                href="/about"
                className="inline-flex items-center text-xs font-semibold uppercase tracking-widest text-brand-purple hover:text-brand-champagne transition-colors group"
              >
                <span>Read Full Corporate Profile</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right Column: 3 Pillars */}
          <div className="lg:col-span-6 space-y-4">
            <div className="p-6 bg-white border border-brand-purple/10 rounded-sm shadow-xs flex items-start space-x-5">
              <div className="w-10 h-10 rounded-xs bg-brand-purple/10 flex items-center justify-center text-brand-purple flex-shrink-0">
                <Shield className="w-5 h-5" />
              </div>
              <div>
                <h3 className="heading-serif text-xl font-semibold text-brand-charcoal mb-1">
                  Integrity
                </h3>
                <p className="text-xs sm:text-sm text-brand-body/70 font-light leading-relaxed">
                  Every opportunity is evaluated with legal transparency, fiduciary responsibility, and complete compliance.
                </p>
              </div>
            </div>

            <div className="p-6 bg-white border border-brand-purple/10 rounded-sm shadow-xs flex items-start space-x-5">
              <div className="w-10 h-10 rounded-xs bg-brand-purple/10 flex items-center justify-center text-brand-purple flex-shrink-0">
                <Target className="w-5 h-5" />
              </div>
              <div>
                <h3 className="heading-serif text-xl font-semibold text-brand-charcoal mb-1">
                  Discipline
                </h3>
                <p className="text-xs sm:text-sm text-brand-body/70 font-light leading-relaxed">
                  We exercise strict risk controls, rigorous fundamental analysis, and patient execution before committing capital.
                </p>
              </div>
            </div>

            <div className="p-6 bg-white border border-brand-purple/10 rounded-sm shadow-xs flex items-start space-x-5">
              <div className="w-10 h-10 rounded-xs bg-brand-purple/10 flex items-center justify-center text-brand-purple flex-shrink-0">
                <Building2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="heading-serif text-xl font-semibold text-brand-charcoal mb-1">
                  Long-Term Value
                </h3>
                <p className="text-xs sm:text-sm text-brand-body/70 font-light leading-relaxed">
                  Our capital is structured for durable asset growth, sustainable cash flows, and lasting community impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
