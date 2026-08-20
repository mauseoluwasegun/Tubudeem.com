import { COMPANY_CONFIG } from "@/lib/config";

export const metadata = {
  title: `Terms & Conditions | ${COMPANY_CONFIG.name}`,
  description: `Investment submission terms and conditions for ${COMPANY_CONFIG.name}.`,
};

export default function TermsPage() {
  return (
    <div className="pt-28 pb-24 bg-brand-ivory text-brand-body min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-purple font-mono block mb-2">
            TERMS OF ENGAGEMENT
          </span>
          <h1 className="heading-serif text-3xl sm:text-5xl text-brand-charcoal font-semibold mb-4">
            TERMS & PROPOSAL CONDITIONS
          </h1>
          <p className="text-xs font-mono text-brand-body/60">
            Last Updated: August 2026 · {COMPANY_CONFIG.name} (RC No: {COMPANY_CONFIG.rcNumber})
          </p>
        </div>

        <div className="bg-white p-8 sm:p-10 border border-brand-purple/15 rounded-sm space-y-6 text-sm text-brand-body/80 leading-relaxed">
          <section className="space-y-2">
            <h2 className="heading-serif text-xl font-semibold text-brand-charcoal">1. Proposal Submissions</h2>
            <p>
              Submitting an opportunity or business plan through this website does not constitute a commitment, contract, or guarantee of capital funding by {COMPANY_CONFIG.name}. All submissions undergo independent due diligence and investment committee evaluation.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="heading-serif text-xl font-semibold text-brand-charcoal">2. Accuracy of Representation</h2>
            <p>
              Submitting parties warrant that all information, financial revenue figures, asset valuations, title ownership claims, and project projections provided are authentic, accurate, and free from fraudulent misrepresentation.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="heading-serif text-xl font-semibold text-brand-charcoal">3. Intellectual Property</h2>
            <p>
              The trademarks, logos, photographs, visual layout, and branding displayed on this site are the exclusive intellectual property of {COMPANY_CONFIG.name} (RC No: {COMPANY_CONFIG.rcNumber}).
            </p>
          </section>

          <section className="space-y-2 border-t border-gray-100 pt-6">
            <h2 className="heading-serif text-xl font-semibold text-brand-charcoal">4. Jurisdiction</h2>
            <p>
              These terms and all investment inquiries submitted hereunder are governed by and construed in accordance with the laws of the Federal Republic of Nigeria.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
