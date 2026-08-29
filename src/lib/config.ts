export const COMPANY_CONFIG = {
  name: "TUBUDEEM INVESTMENT NIGERIA LIMITED",
  shortName: "TUBUDEEM",
  rcNumber: "6907732",
  address: "No. 49, Lawson Street, Off Moloney, Onikan, Lagos State",
  state: "Lagos State",
  country: "Nigeria",
  primaryBrandStatement: "INVESTING IN OPPORTUNITIES. BUILDING LASTING VALUE.",
  supportingMessage:
    "We identify promising opportunities and provide capital and support to help them grow, across real estate, businesses, startups and financial markets in Nigeria.",
  mission:
    "To identify high-potential opportunities across real estate, businesses, startups, and financial markets, and apply disciplined capital and careful risk management to help them grow.",
  vision:
    "To grow into a trusted Nigerian investment partner, known for integrity, discipline, and consistent long-term value for the people and businesses we work with.",
  recipientEmail: process.env.OPPORTUNITY_RECIPIENT_EMAIL || "contact@tubudeem.com",
  contactPhonePlaceholder: "+234 (0) 1 234 5678",
  contactEmailPlaceholder: "contact@tubudeem.com",
  socialLinks: {
    linkedin: "https://linkedin.com/company/tubudeem-investment",
    twitter: "https://twitter.com/tubudeem",
  },
  investmentCategories: [
    "Real Estate",
    "Business Investment",
    "SME Growth",
    "Startup & Early-Stage Ventures",
    "Financial Markets",
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
