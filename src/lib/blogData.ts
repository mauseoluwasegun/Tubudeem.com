export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: "Real Estate" | "Business" | "Financial Markets" | "Agriculture";
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  publishedAt: string;
  readTime: string;
  featuredImage: string;
  tags: string[];
  featured?: boolean;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "1",
    slug: "strategic-real-estate-acquisitions-lagos-abuja",
    title: "Strategic Real Estate Acquisitions: Capitalizing on Lagos & Abuja Prime Growth Corridors",
    excerpt:
      "An in-depth analysis of high-yield commercial and residential development opportunities across Ikoyi, Lekki Phase 1, and Maitama extension zones.",
    content: `
      <p class="lead text-lg font-light text-[#F7F4EE]/90 leading-relaxed mb-6">
        As West Africa's primary economic engine, Nigeria’s real estate sector continues to present compelling capital deployment opportunities for disciplined institutional investors and high-net-worth strategic partners.
      </p>

      <h3 class="text-xl font-bold text-[#C7A45B] mt-8 mb-4">1. Demographics & Rapid Urbanization</h3>
      <p class="mb-4 text-[#F7F4EE]/80 leading-relaxed">
        With Lagos projecting a population exceeding 25 million and Abuja expanding rapidly as an administrative and commercial nexus, demand for grade-A commercial real estate, logistics hubs, and mixed-use luxury residential developments remains at historic highs.
      </p>

      <h3 class="text-xl font-bold text-[#C7A45B] mt-8 mb-4">2. Value Creation Through Joint Venture Structure</h3>
      <p class="mb-4 text-[#F7F4EE]/80 leading-relaxed">
        At Tubudeem Investment, our target focus centers on partnering with prime land owners and experienced site developers through structured Joint Venture (JV) arrangements. By coupling strategic capital with institutional oversight, project completion risks are mitigated while maximizing return on equity (ROE).
      </p>

      <blockquote class="my-8 p-6 bg-[#42124F]/30 border-l-4 border-[#C7A45B] rounded-r-lg text-white font-serif italic text-lg">
        "Real estate in high-growth African metropolitan hubs isn't merely about land banking—it is about active capital structuring and rapid value creation."
      </blockquote>

      <h3 class="text-xl font-bold text-[#C7A45B] mt-8 mb-4">3. Key Risk Management Pillars</h3>
      <ul class="list-disc list-inside space-y-2 mb-6 text-[#F7F4EE]/80">
        <li><strong>Title Perfection:</strong> Comprehensive Governor's Consent, C of O, and Gazette verification prior to capital commitment.</li>
        <li><strong>FX-Hedging Contracts:</strong> Indexing commercial leases or milestone distributions to hard currency or inflation-adjusted yields.</li>
        <li><strong>ESG Integration:</strong> Implementing solar-augmented energy grids and water management systems to reduce tenant operational expenditure.</li>
      </ul>
    `,
    category: "Real Estate",
    author: {
      name: "Tubudeem Team",
      role: "Tubudeem Investment Nigeria",
      avatar: "/images/tubudeem_icon_darkmode.png",
    },
    publishedAt: "August 15, 2026",
    readTime: "6 min read",
    featuredImage: "/images/blog_real_estate.jpg",
    tags: ["Real Estate", "Lagos Property", "Joint Venture", "Capital Allocation"],
    featured: true,
  },
  {
    id: "2",
    slug: "venture-debt-vs-equity-west-african-scaleups",
    title: "Growth Capital & Expansion Financing for West African Scaleups",
    excerpt:
      "Why mezzanine debt, revenue-share models, and minority equity stakes offer superior risk-adjusted returns for mid-sized enterprise growth.",
    content: `
      <p class="lead text-lg font-light text-[#F7F4EE]/90 leading-relaxed mb-6">
        Mid-market businesses in Nigeria represent the backbone of domestic commerce. However, access to non-dilutive, flexible capital structures remains a primary bottleneck for expansion.
      </p>

      <h3 class="text-xl font-bold text-[#C7A45B] mt-8 mb-4">1. Beyond Traditional Bank Lending</h3>
      <p class="mb-4 text-[#F7F4EE]/80 leading-relaxed">
        Commercial bank interest rates often restrict long-term capital investments for growth companies. Structured growth capital and flexible debt fill this crucial void by offering customized repayment schedules tied to revenue realization.
      </p>

      <h3 class="text-xl font-bold text-[#C7A45B] mt-8 mb-4">2. High-Growth Sectors</h3>
      <p class="mb-4 text-[#F7F4EE]/80 leading-relaxed">
        Our evaluation models highlight significant momentum in FMCG distribution networks, healthcare logistics, renewable energy installation, and technology-enabled services.
      </p>

      <div class="my-6 p-6 bg-[#18161D] border border-[#C7A45B]/20 rounded-xl">
        <h4 class="text-[#C7A45B] font-bold mb-2 uppercase text-sm tracking-wider">Tubudeem Evaluation Criteria</h4>
        <p class="text-[#F7F4EE]/70 text-sm">
          We look for businesses with proven unit economics, strong founder alignment, minimum 3-year track record of revenue, and clear market expansion roadmaps.
        </p>
      </div>
    `,
    category: "Business",
    author: {
      name: "Tubudeem Team",
      role: "Tubudeem Investment Nigeria",
      avatar: "/images/tubudeem_icon_darkmode.png",
    },
    publishedAt: "August 10, 2026",
    readTime: "8 min read",
    featuredImage: "/images/blog_venture_capital.jpg",
    tags: ["Growth Capital", "Expansion Financing", "Scaleups", "West Africa"],
    featured: true,
  },
  {
    id: "3",
    slug: "agribusiness-infrastructure-yield-processing-nigeria",
    title: "Agribusiness Infrastructure: Unlocking High-Margin Export Value Chains",
    excerpt:
      "Transforming agricultural yield through mechanized processing, cold chain logistics, and direct export corridor partnerships.",
    content: `
      <p class="lead text-lg font-light text-[#F7F4EE]/90 leading-relaxed mb-6">
        Agriculture accounts for over 22% of Nigeria’s GDP, yet post-harvest loss remains a significant value leak. Strategic capital targeting processing and logistics generates substantial economic dividends.
      </p>

      <h3 class="text-xl font-bold text-[#C7A45B] mt-8 mb-4">1. Moving Up the Value Chain</h3>
      <p class="mb-4 text-[#F7F4EE]/80 leading-relaxed">
        Instead of primary farming, high-margin returns lie in post-harvest processing plants for cashews, cocoa, palm oil, and grains, alongside temperature-controlled warehousing near major logistics highways.
      </p>

      <h3 class="text-xl font-bold text-[#C7A45B] mt-8 mb-4">2. Export Opportunities & Foreign Exchange Earnings</h3>
      <p class="mb-4 text-[#F7F4EE]/80 leading-relaxed">
        By aligning agro-processing facilities with international quality standards, local agricultural produce generates sustainable hard currency revenue streams while strengthening national food security.
      </p>
    `,
    category: "Agriculture",
    author: {
      name: "Tubudeem Team",
      role: "Tubudeem Investment Nigeria",
      avatar: "/images/tubudeem_icon_darkmode.png",
    },
    publishedAt: "July 28, 2026",
    readTime: "5 min read",
    featuredImage: "/images/blog_agribusiness.jpg",
    tags: ["Agribusiness", "Value Chain", "Export", "Infrastructure"],
    featured: false,
  },
  {
    id: "4",
    slug: "navigating-financial-markets-fixed-income-2026",
    title: "Fixed Income & Hedging Strategies in High-Inflation Macro Economies",
    excerpt:
      "Navigating yield curves, treasury instruments, and currency arbitrage in dynamic emerging market environments.",
    content: `
      <p class="lead text-lg font-light text-[#F7F4EE]/90 leading-relaxed mb-6">
        Capital preservation in inflationary macro climates demands disciplined asset allocation across money market instruments, sovereign paper, and yield-bearing corporate debt.
      </p>

      <h3 class="text-xl font-bold text-[#C7A45B] mt-8 mb-4">1. Dynamic Yield Curve Positioning</h3>
      <p class="mb-4 text-[#F7F4EE]/80 leading-relaxed">
        Short-duration treasury bills combined with high-yield commercial paper provide liquidity flexibility while capturing elevated interest rate environments.
      </p>

      <h3 class="text-xl font-bold text-[#C7A45B] mt-8 mb-4">2. Risk Diversification</h3>
      <p class="mb-4 text-[#F7F4EE]/80 leading-relaxed">
        Balancing domestic liquid assets with tangible real asset backings creates a resilient portfolio structure capable of compounding through macro cycles.
      </p>
    `,
    category: "Financial Markets",
    author: {
      name: "Tubudeem Team",
      role: "Tubudeem Investment Nigeria",
      avatar: "/images/tubudeem_icon_darkmode.png",
    },
    publishedAt: "July 18, 2026",
    readTime: "7 min read",
    featuredImage: "/images/blog_financial_markets.jpg",
    tags: ["Financial Markets", "Treasury", "Inflation Hedge", "Fixed Income"],
    featured: false,
  },
];

export const BLOG_CATEGORIES = [
  "All",
  "Real Estate",
  "Business",
  "Financial Markets",
  "Agriculture",
] as const;
