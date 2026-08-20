import OpportunityForm from "@/components/forms/OpportunityForm";
import { COMPANY_CONFIG } from "@/lib/config";
import { Shield, FileCheck2, Clock, CheckCircle } from "lucide-react";

export const metadata = {
  title: `Submit Opportunity | ${COMPANY_CONFIG.name}`,
  description: `Present your business, real estate, or strategic investment opportunity to ${COMPANY_CONFIG.name}. Capital for sustainable growth.`,
};

export default function SubmitOpportunityPage() {
  return (
    <div className="pt-28 pb-24 bg-brand-ivory text-brand-body min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-purple font-mono block mb-3">
            CAPITAL PROPOSAL SUBMISSION
          </span>
          <h1 className="heading-serif text-4xl sm:text-6xl text-brand-charcoal font-semibold mb-4 leading-tight">
            PRESENT YOUR <br />
            <span className="text-brand-purple italic font-normal">OPPORTUNITY.</span>
          </h1>
          <p className="text-base sm:text-lg text-brand-body/80 font-light leading-relaxed">
            Give us a clear picture of the opportunity, the capital required and the potential for long-term value creation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Form Container */}
          <div className="lg:col-span-8 bg-white p-6 sm:p-10 border border-brand-purple/15 rounded-sm shadow-lg">
            <OpportunityForm />
          </div>

          {/* Sidebar Guidelines & Trust Badges */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
            <div className="p-6 bg-brand-charcoal text-brand-ivory rounded-sm space-y-4 shadow-xl border border-brand-charcoal-border">
              <h3 className="text-xs font-mono font-bold uppercase tracking-[0.2em] text-brand-champagne">
                WHAT WE LOOK FOR
              </h3>
              <ul className="space-y-3 text-xs text-brand-ivory/80 font-light">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-brand-champagne flex-shrink-0 mt-0.5" />
                  <span>Verified asset ownership or title authenticity</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-brand-champagne flex-shrink-0 mt-0.5" />
                  <span>Clear economic logic & yield / return fundamentals</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-brand-champagne flex-shrink-0 mt-0.5" />
                  <span>Experienced operational team or market positioning</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="w-4 h-4 text-brand-champagne flex-shrink-0 mt-0.5" />
                  <span>Disciplined exit or cash flow distribution model</span>
                </li>
              </ul>
            </div>

            <div className="p-6 bg-white border border-brand-purple/10 rounded-sm space-y-4">
              <div className="flex items-center space-x-3 text-brand-purple">
                <Shield className="w-5 h-5 flex-shrink-0" />
                <h4 className="text-xs font-mono uppercase font-bold tracking-wider text-brand-charcoal">
                  STRICT CONFIDENTIALITY
                </h4>
              </div>
              <p className="text-xs text-brand-body/70 font-light leading-relaxed">
                All submitted proprietary information, pitch decks, title deeds, and financial estimates are handled under standard non-disclosure standards.
              </p>
            </div>

            <div className="p-6 bg-white border border-brand-purple/10 rounded-sm space-y-4">
              <div className="flex items-center space-x-3 text-brand-purple">
                <Clock className="w-5 h-5 flex-shrink-0" />
                <h4 className="text-xs font-mono uppercase font-bold tracking-wider text-brand-charcoal">
                  EVALUATION TIMELINE
                </h4>
              </div>
              <p className="text-xs text-brand-body/70 font-light leading-relaxed">
                Submissions are reviewed by our investment committee within 5-10 business days. Qualified opportunities receive a direct follow-up call or meeting request.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
