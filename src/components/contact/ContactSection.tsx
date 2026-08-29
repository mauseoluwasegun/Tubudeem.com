"use client";

import { COMPANY_CONFIG } from "@/lib/config";
import { MapPin, Mail, ShieldCheck, Clock } from "lucide-react";
import ContactForm from "@/components/forms/ContactForm";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#F7F4EE] text-[#242127] relative border-t border-[#42124F]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-10 sm:mb-16">
          <span className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.2em] sm:tracking-[0.25em] text-[#42124F] block mb-2 sm:mb-3 font-bold">
            GET IN TOUCH
          </span>
          <h2 className="heading-ayat text-2xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-[#111015]">
            LET&apos;S START A <br />
            <span className="text-[#C7A45B]">CONVERSATION.</span>
          </h2>
          <p className="mt-4 text-xs sm:text-sm text-[#242127]/80 font-light leading-relaxed">
            Reach out to us for general inquiries or to schedule an appointment at our registered office.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Office Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 sm:p-8 bg-[#111015] text-[#F7F4EE] rounded-xs shadow-xl border border-white/10 space-y-6">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#C7A45B] block mb-2 font-bold">
                  REGISTERED ENTITY
                </span>
                <h3 className="heading-ayat text-lg sm:text-xl font-bold uppercase">
                  {COMPANY_CONFIG.name}
                </h3>
                <p className="text-xs font-mono text-[#F7F4EE]/60 mt-1">
                  RC NO: {COMPANY_CONFIG.rcNumber}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 space-y-4 text-xs font-light">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-[#C7A45B] flex-shrink-0 mt-0.5" />
                  <div className="leading-relaxed">
                    <span className="font-bold block font-mono text-[10px] uppercase tracking-widest text-[#F7F4EE] mb-1">
                      Office Address
                    </span>
                    <span className="text-[#F7F4EE]/80">{COMPANY_CONFIG.address}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-[#C7A45B] flex-shrink-0" />
                  <div>
                    <span className="font-bold block font-mono text-[10px] uppercase tracking-widest text-[#F7F4EE] mb-1">
                      Email
                    </span>
                    <a
                      href={`mailto:${COMPANY_CONFIG.contactEmailPlaceholder}`}
                      className="text-[#F7F4EE]/80 hover:text-[#C7A45B] transition-colors"
                    >
                      {COMPANY_CONFIG.contactEmailPlaceholder}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-5 sm:p-6 bg-white border border-[#42124F]/15 rounded-xs space-y-3 text-xs text-[#242127]/70 font-light shadow-xs">
              <div className="flex items-center space-x-2 text-[#42124F] font-mono font-bold">
                <Clock className="w-4 h-4" />
                <span>OFFICE HOURS</span>
              </div>
              <p>Monday - Friday: 8:00 AM - 5:00 PM (WAT)</p>
              <p>Consultations by appointment only.</p>
            </div>

            <div className="flex items-center space-x-2 text-[11px] text-[#242127]/60 font-light">
              <ShieldCheck className="w-4 h-4 text-[#42124F] flex-shrink-0" />
              <span>We review every message personally.</span>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-white p-6 sm:p-8 lg:p-10 border border-[#42124F]/15 rounded-xs shadow-xl">
            <h3 className="heading-ayat text-xl sm:text-2xl font-extrabold uppercase text-[#111015] mb-6">
              Send a Message
            </h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
