import { COMPANY_CONFIG } from "@/lib/config";
import { MapPin, Mail, Phone, ShieldCheck, Clock } from "lucide-react";

export const metadata = {
  title: `Contact Us | ${COMPANY_CONFIG.name}`,
  description: `Contact ${COMPANY_CONFIG.name} at ${COMPANY_CONFIG.address}. RC No: ${COMPANY_CONFIG.rcNumber}.`,
};

export default function ContactPage() {
  return (
    <div className="pt-28 pb-24 bg-brand-ivory text-brand-body min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-brand-purple font-mono block mb-3">
            GET IN TOUCH
          </span>
          <h1 className="heading-serif text-4xl sm:text-6xl text-brand-charcoal font-semibold mb-4 leading-tight">
            CONTACT <br />
            <span className="text-brand-purple italic font-normal">OUR OFFICES.</span>
          </h1>
          <p className="text-base sm:text-lg text-brand-body/80 font-light leading-relaxed">
            Reach out to our investment team for general inquiries or schedule an appointment at our registered office in Onikan, Lagos State.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Office Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 bg-brand-charcoal text-brand-ivory rounded-sm shadow-xl space-y-6 border border-brand-charcoal-border">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-brand-champagne block mb-2">
                  REGISTERED ENTITY
                </span>
                <h3 className="heading-serif text-xl text-brand-ivory font-semibold">
                  {COMPANY_CONFIG.name}
                </h3>
                <p className="text-xs font-mono text-brand-champagne/80 mt-1">
                  RC NO: {COMPANY_CONFIG.rcNumber}
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 space-y-4 text-xs font-light">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-brand-champagne flex-shrink-0 mt-0.5" />
                  <div className="leading-relaxed">
                    <span className="font-bold block text-brand-ivory font-mono">HEAD OFFICE ADDRESS</span>
                    <span>{COMPANY_CONFIG.address}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-brand-champagne flex-shrink-0" />
                  <div>
                    <span className="font-bold block text-brand-ivory font-mono">EMAIL INQUIRIES</span>
                    <span>{COMPANY_CONFIG.contactEmailPlaceholder}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-brand-champagne flex-shrink-0" />
                  <div>
                    <span className="font-bold block text-brand-ivory font-mono">TELEPHONE</span>
                    <span>{COMPANY_CONFIG.contactPhonePlaceholder}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white border border-brand-purple/10 rounded-sm space-y-3 text-xs text-brand-body/70 font-light">
              <div className="flex items-center space-x-2 text-brand-purple font-mono font-bold">
                <Clock className="w-4 h-4" />
                <span>OFFICE HOURS</span>
              </div>
              <p>Monday - Friday: 8:00 AM - 5:00 PM (WAT)</p>
              <p>Consultations by appointment only.</p>
            </div>
          </div>

          {/* Right Column: Contact Inquiry Form */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-10 border border-brand-purple/15 rounded-sm shadow-md space-y-6">
            <h3 className="heading-serif text-2xl text-brand-charcoal font-semibold">
              Send a Direct Message
            </h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-medium text-brand-charcoal uppercase tracking-wider mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Michael Bello"
                    className="w-full px-4 py-3 text-sm bg-white border border-brand-purple/20 rounded-sm focus:outline-none focus:border-brand-purple text-brand-charcoal"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-brand-charcoal uppercase tracking-wider mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g. michael@example.com"
                    className="w-full px-4 py-3 text-sm bg-white border border-brand-purple/20 rounded-sm focus:outline-none focus:border-brand-purple text-brand-charcoal"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-brand-charcoal uppercase tracking-wider mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  required
                  placeholder="Inquiry regarding..."
                  className="w-full px-4 py-3 text-sm bg-white border border-brand-purple/20 rounded-sm focus:outline-none focus:border-brand-purple text-brand-charcoal"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-brand-charcoal uppercase tracking-wider mb-2">
                  Message / Communication
                </label>
                <textarea
                  rows={5}
                  required
                  placeholder="How can our investment office assist you?"
                  className="w-full px-4 py-3 text-sm bg-white border border-brand-purple/20 rounded-sm focus:outline-none focus:border-brand-purple text-brand-charcoal"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 text-xs font-semibold uppercase tracking-widest text-brand-charcoal bg-brand-champagne hover:bg-brand-ivory transition-all rounded-sm shadow-md gold-glow"
              >
                Send Communication
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
