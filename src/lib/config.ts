export const COMPANY_CONFIG = {
  name: "TUBUDEEM INVESTMENT NIGERIA LIMITED",
  shortName: "TUBUDEEM",
  rcNumber: "6907732",
  address: "No. 49, Lawson Street, Off Moloney, Onikan, Lagos State",
  state: "Lagos State",
  country: "Nigeria",
  primaryBrandStatement: "INVESTING IN OPPORTUNITIES. BUILDING LASTING VALUE.",
  supportingMessage:
    "We identify promising opportunities, provide capital, and support sustainable growth across real estate, businesses, financial markets and other strategic investments.",
  mission:
    "To identify high-potential opportunities across real estate, businesses, financial markets, and agriculture, deploying disciplined capital, rigorous risk management, and strategic oversight to build lasting value and drive sustainable growth.",
  vision:
    "To be a leading, highly trusted African investment house recognized for institutional integrity, capital discipline, and compounding long-term value for partners, businesses, and communities.",
  recipientEmail: process.env.OPPORTUNITY_RECIPIENT_EMAIL || "contact@tubudeem.com",
  contactPhonePlaceholder: "+234 (0) 1 234 5678",
  contactEmailPlaceholder: "proposals@tubudeem.com",
  socialLinks: {
    linkedin: "https://linkedin.com/company/tubudeem-investment",
    twitter: "https://twitter.com/tubudeem",
  },
  investmentCategories: [
    "Real Estate",
    "Business Investment",
    "SME Growth",
    "Financial Markets",
    "Agriculture",
    "Other Strategic Investment",
  ] as const,
  principles: [
    {
      title: "Integrity",
      description: "We approach opportunities with transparency, accountability, and legal responsibility.",
    },
    {
      title: "Discipline",
      description: "We evaluate opportunities carefully with rigorous risk analysis before committing capital.",
    },
    {
      title: "Long-Term Value",
      description: "We focus on sustainable value creation rather than short-term speculative hype.",
    },
    {
      title: "Growth",
      description: "We seek opportunities where strategic capital and guidance can unlock meaningful expansion.",
    },
  ],
  pipelineStages: [
    { stage: "01", name: "IDENTIFY", desc: "Sourcing vetted opportunities across our focus sectors" },
    { stage: "02", name: "EVALUATE", desc: "Rigorous financial, structural, and legal due diligence" },
    { stage: "03", name: "INVEST", desc: "Deploying disciplined capital tailored to project requirements" },
    { stage: "04", name: "SUPPORT", desc: "Providing active oversight, strategic guidance, and resources" },
    { stage: "05", name: "GROW", desc: "Unlocking long-term value and compounding sustainable returns" },
  ],
};
