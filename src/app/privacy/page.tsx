import { COMPANY_CONFIG } from "@/lib/config";

export const metadata = {
  title: `Privacy Policy | ${COMPANY_CONFIG.name}`,
  description: `Privacy & Information Security Policy for ${COMPANY_CONFIG.name}.`,
};

export default function PrivacyPage() {
  return (
    <div className="pt-28 pb-24 bg-brand-ivory text-brand-body min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-purple font-mono block mb-2">
            LEGAL STATEMENT
          </span>
          <h1 className="heading-serif text-3xl sm:text-5xl text-brand-charcoal font-semibold mb-4">
            PRIVACY & DATA PROTECTION POLICY
          </h1>
          <p className="text-xs font-mono text-brand-body/60">
            Last Updated: August 2026 · {COMPANY_CONFIG.name} (RC No: {COMPANY_CONFIG.rcNumber})
          </p>
        </div>

        <div className="bg-white p-8 sm:p-10 border border-brand-purple/15 rounded-sm space-y-6 text-sm text-brand-body/80 leading-relaxed">
          <section className="space-y-2">
            <h2 className="heading-serif text-xl font-semibold text-brand-charcoal">1. Information Collection</h2>
            <p>
              When you present an investment opportunity or submit documentation via our web portal, {COMPANY_CONFIG.name} collects personal identifiers (name, corporate affiliation, telephone number, email) and proprietary financial or technical details regarding your project.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="heading-serif text-xl font-semibold text-brand-charcoal">2. Purpose & Use of Data</h2>
            <p>
              Submitted data is utilized exclusively for evaluating investment viability, performing legal and financial due diligence, and conducting direct communications with proposal submitters. We do not sell, license, or monetize submitted proprietary business information.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="heading-serif text-xl font-semibold text-brand-charcoal">3. Confidentiality & Non-Disclosure</h2>
            <p>
              All pitch decks, land titles, company disclosures, and executive summaries uploaded to our servers are stored with restricted access and subject to standard fiduciary non-disclosure protocols under Nigerian law.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="heading-serif text-xl font-semibold text-brand-charcoal">4. Data Security</h2>
            <p>
              We implement industry-standard electronic, physical, and administrative safeguards to prevent unauthorized access, data breach, or accidental disclosure of submitted proposals.
            </p>
          </section>

          <section className="space-y-2 border-t border-gray-100 pt-6">
            <h2 className="heading-serif text-xl font-semibold text-brand-charcoal">5. Contact Data Controller</h2>
            <p>
              Inquiries regarding data retention or proposal withdrawal may be directed to our registered office: <br />
              <strong>{COMPANY_CONFIG.name}</strong> <br />
              {COMPANY_CONFIG.address}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
