// ─── Static data for the portfolio ───────────────────────────────────────────

export const personalInfo = {
  name: "Alex Nakamoto",
  title: "Web3 Content Strategist & Community Builder",
  tagline: "Building Communities. Crafting Narratives. Driving Adoption.",
  bio: `I've spent the last 4 years living and breathing Web3 — from DeFi protocols to NFT ecosystems,
  from DAOs to L2 scaling solutions. My mission: translate complex blockchain concepts into
  compelling stories that onboard the next million users.`,
  location: "Remote — Global",
  email: "alex@nakamoto.xyz",
  walletAddress: "0x71C7656EC7ab88b098defB751B7401B5f6d8976F",
  social: {
    twitter: "https://twitter.com",
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    discord: "https://discord.com",
  },
};

export const skills = [
  {
    category: "Web3 Tools",
    icon: "⛓️",
    color: "cyan",
    items: [
      "Ethereum & EVM Chains",
      "Solana Ecosystem",
      "DeFi Protocols",
      "NFT Platforms",
      "DAO Governance",
      "Layer 2 Solutions",
      "MetaMask & Wallets",
      "Dune Analytics",
    ],
  },
  {
    category: "Content Creation",
    icon: "✍️",
    color: "purple",
    items: [
      "Long-form Articles",
      "Twitter Threads",
      "Newsletter Writing",
      "Video Scripts",
      "Whitepaper Editing",
      "SEO Strategy",
      "Brand Storytelling",
      "Technical Writing",
    ],
  },
  {
    category: "Community Management",
    icon: "🌐",
    color: "blue",
    items: [
      "Discord Server Setup",
      "Telegram Management",
      "Community Strategy",
      "Ambassador Programs",
      "Event Coordination",
      "Growth Hacking",
      "Moderation Systems",
      "Engagement Campaigns",
    ],
  },
];

export const projects = [
  {
    id: 1,
    title: "NovaDEX Launch Campaign",
    description:
      "Led the full content and community strategy for a next-gen decentralized exchange launch. Built hype through strategic threads, AMAs, and influencer collaborations.",
    role: "Content Lead & Community Strategist",
    impact: "2.3M+ impressions · $18M TVL in 72hrs · 45k Discord members",
    tags: ["DeFi", "Content Strategy", "Launch"],
    color: "cyan",
    metrics: { impressions: "2.3M+", tvl: "$18M", members: "45k" },
  },
  {
    id: 2,
    title: "ArcDAO Governance Framework",
    description:
      "Designed and implemented the community governance framework for ArcDAO, including proposal templates, voting mechanisms education, and delegate onboarding.",
    role: "Community Manager & DAO Architect",
    impact: "78% voter participation · 12k active delegates · 3 successful proposals",
    tags: ["DAO", "Governance", "Community"],
    color: "purple",
    metrics: { participation: "78%", delegates: "12k", proposals: "3" },
  },
  {
    id: 3,
    title: "ChainPulse Newsletter",
    description:
      "Founded and grew ChainPulse, a weekly Web3 intelligence newsletter covering protocol updates, alpha, and market insights for builders and investors.",
    role: "Founder & Editor-in-Chief",
    impact: "28k+ subscribers · 62% avg open rate · 4.2% click-through",
    tags: ["Newsletter", "Content", "Growth"],
    color: "blue",
    metrics: { subscribers: "28k+", openRate: "62%", ctr: "4.2%" },
  },
  {
    id: 4,
    title: "MetaVerse Studios NFT Collection",
    description:
      "Community strategy and content execution for a 10k generative NFT collection. Managed Discord from 0 to launch, coordinated whitelist campaigns and post-mint engagement.",
    role: "Community Manager",
    impact: "Sold out in 8 minutes · 50k+ Twitter followers · 0.8 ETH floor at peak",
    tags: ["NFT", "Community", "Discord"],
    color: "cyan",
    metrics: { soldOut: "8 min", twitter: "50k+", floor: "0.8 ETH" },
  },
];

export const experiences = [
  {
    id: 1,
    company: "Nebula Protocol",
    role: "Head of Community & Content",
    period: "2023 — Present",
    description:
      "Leading all community operations and content strategy for a $40M TVL DeFi protocol. Overseeing a team of 8 moderators and 3 content writers.",
    highlights: ["Grew Discord to 65k members", "Launched ambassador program", "40% increase in organic traffic"],
    type: "full-time",
  },
  {
    id: 2,
    company: "ArcDAO",
    role: "Community Manager",
    period: "2022 — 2023",
    description:
      "Managed the community for one of the fastest-growing DAOs on Ethereum. Designed governance participation programs and monthly community calls.",
    highlights: ["Scaled to 30k members", "Launched weekly governance digest", "Onboarded 200+ delegates"],
    type: "full-time",
  },
  {
    id: 3,
    company: "NovaDEX",
    role: "Content Strategist (Contract)",
    period: "2022",
    description:
      "Contracted to design and execute the full content strategy for the NovaDEX mainnet launch. Led cross-functional team across marketing, dev, and BD.",
    highlights: ["$18M TVL in 72hrs", "2.3M+ impressions", "Featured in Bankless & The Defiant"],
    type: "contract",
  },
  {
    id: 4,
    company: "ChainPulse (Self-Founded)",
    role: "Founder & Editor",
    period: "2021 — Present",
    description:
      "Built a Web3 newsletter from scratch. Grew to 28k subscribers with consistently high engagement through curated alpha, protocol deep-dives, and market commentary.",
    highlights: ["28k+ subscribers", "62% open rate", "Partnerships with 5 protocols"],
    type: "founder",
  },
];

export const metrics = [
  { label: "Community Members Grown", value: "150k+", suffix: "", icon: "👥", color: "cyan" },
  { label: "Content Pieces Published", value: "500+", suffix: "", icon: "✍️", color: "purple" },
  { label: "Newsletter Subscribers", value: "28k+", suffix: "", icon: "📧", color: "blue" },
  { label: "Campaign Impressions", value: "10M+", suffix: "", icon: "🚀", color: "cyan" },
  { label: "Protocols Worked With", value: "25+", suffix: "", icon: "⛓️", color: "purple" },
  { label: "Avg. Open Rate", value: "62%", suffix: "", icon: "📈", color: "blue" },
];
