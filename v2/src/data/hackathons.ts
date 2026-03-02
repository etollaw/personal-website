export interface HackathonItem {
  slug: string;
  name: string;
  event: string;
  date: string;
  duration: string; // e.g. "24h"
  pitch: string;
  description: string;
  role: string;
  roleDescription: string;
  stack: string[];
  features: string[];
  demoFlow: string[];
  image?: string;
  links: { label: string; href: string; type: "github" | "demo" | "video" | "external" }[];
  tags: string[];
  hasDetailPage: boolean;
  reflections: {
    learned: string;
    doOver: string;
  };
}

export const hackathons: HackathonItem[] = [
  // ── SENTINEL — DivHacks @ Columbia ──
  {
    slug: "sentinel",
    name: "Sentinel",
    event: "DivHacks @ Columbia University",
    date: "2026",
    duration: "24h",
    pitch:
      "A multi-agent AI system that analyzes public government data and generates citation-backed investigative reports with NPR-style audio narration.",
    description:
      "Sentinel uses four specialized AI agents orchestrated through Dedalus ADK to parse campaign finance, contracts, and lobbying records from a Neo4j graph database. The pipeline produces structured investigative reports where every claim is explicitly cited, plus auto-generated audio narration via ElevenLabs.",
    role: "AI/ML & Multi-Agent Lead",
    roleDescription:
      "Designed the core reasoning layer: a four-agent pipeline (Pattern Finder → Timeline Builder → Evidence Ranker → Report Compiler) orchestrated through Dedalus ADK. Led LLM prompt engineering for factual outputs, built investigation narrative generation (graph → story), and integrated ElevenLabs with caching fallback.",
    stack: ["Python", "Dedalus ADK", "Neo4j", "ElevenLabs", "K2 Think", "LLMs"],
    features: [
      "4-agent pipeline: Pattern Finder, Timeline Builder, Evidence Ranker, Report Compiler",
      "Graph-based investigation using Neo4j for relationship analysis",
      "Citation-backed outputs — every claim linked to source data",
      "NPR-style audio narration via ElevenLabs (voice: Drew)",
      "K2 Think reasoning for fragmented data parsing and event ordering",
      "Fallback + caching strategies for demo reliability",
    ],
    demoFlow: [
      "Open Sentinel dashboard and select an investigation topic",
      "Show the Neo4j graph data powering the analysis",
      "Trigger the 4-agent pipeline and watch agents process sequentially",
      "Review the structured investigative report with inline citations",
      "Play the auto-generated audio narration",
      "Highlight uncertainty acknowledgment and responsible AI practices",
    ],
    image: "https://raw.githubusercontent.com/etollaw/personal-website/main/sentinel.png",
    links: [
      { label: "GitHub Repository", href: "https://github.com/amanupg/sentry-project", type: "github" },
      { label: "Live Demo", href: "https://youtu.be/fjBXrFshx8I", type: "video" },
    ],
    tags: ["Multi-Agent AI", "LLMs", "Neo4j", "ElevenLabs", "Dedalus ADK"],
    hasDetailPage: true,
    reflections: {
      learned:
        "Building reliable multi-agent systems under time pressure requires aggressive scoping — we cut features early and focused on getting the core pipeline working end-to-end. Caching audio files locally was critical for demo stability.",
      doOver:
        "I'd invest more time upfront in defining the agent communication protocol. We spent debugging time on agents not correctly passing structured output to the next stage. A shared schema from the start would have saved hours.",
    },
  },

  // ── COMMUNITYWATCH — Code2040 / Tech for Resistance ──
  {
    slug: "communitywatch",
    name: "CommunityWatch",
    event: "Code2040 / Tech for Resistance",
    date: "2025",
    duration: "48h",
    pitch:
      "A civic tech platform that helps residents document local infrastructure neglect, connect it to historical redlining, and track whether city services are delivered equitably.",
    description:
      "CommunityWatch goes beyond individual 311 complaints — it connects resident reports to historical redlining data (HOLC maps) to surface systemic patterns in how city services are delivered. The platform includes an interactive disparity dashboard, equity badges per report, and an auto-advocate tool that generates professional 311-ready complaints.",
    role: "Full-Stack Developer",
    roleDescription:
      "Built the reporting system and disparity dashboard, integrated Leaflet maps with HOLC redlining overlay, implemented the equity badge logic, and developed the auto-advocate 311 text generator. Handled Supabase auth and database integration.",
    stack: ["Next.js", "Supabase", "Leaflet", "TypeScript", "Tailwind CSS"],
    features: [
      "Public landing page with mission statement and disparity snapshot",
      "Supabase authentication with protected reporting route",
      "Issue reporting system: location-tagged infrastructure/environmental reports",
      "Interactive disparity dashboard with Leaflet map",
      "HOLC redlining overlay toggle on map",
      "Equity badge per report: redlined zone detection + response-time estimate",
      "Auto-advocate tool: generates professional 311-ready complaint text",
    ],
    demoFlow: [
      "Show landing page with mission and disparity snapshot (e.g. '2.3× slower in redlined areas')",
      "Open the disparity dashboard and toggle the HOLC redlining overlay",
      "Submit a new infrastructure issue report with location",
      "Show the equity badge: redlined zone indicator + response-time gap",
      "Generate a 311-ready complaint using the auto-advocate tool",
      "Copy text and show link to 311 portal",
    ],
    image: "https://raw.githubusercontent.com/etollaw/personal-website/main/communitywatch.png",
    links: [
      { label: "GitHub Repository", href: "https://github.com/pauloz03/code2040/tree/main/my-app", type: "github" },
      { label: "Live Demo", href: "https://youtu.be/i4PQmHrIgrc", type: "video" },
    ],
    tags: ["Civic Tech", "Next.js", "Supabase", "Leaflet", "GIS"],
    hasDetailPage: true,
    reflections: {
      learned:
        "Working with historical geographic data (HOLC maps) required careful data handling — digitized boundaries don't always align perfectly with modern infrastructure. Learned to communicate data limitations honestly in the UI rather than hiding them.",
      doOver:
        "I'd build the equity scoring algorithm more robustly from the start. The initial version was too simplistic (binary redlined/not). A weighted overlay considering multiple historical factors would be more accurate and defensible.",
    },
  },

  // ── RECALL ROYALE ──
  {
    slug: "recall-royale",
    name: "Recall Royale",
    event: "Hackathon",
    date: "2025",
    duration: "24h",
    pitch:
      "A learning platform that makes studying fun through interactive gameplay and user-generated content.",
    description:
      "Recall Royale turns passive studying into active engagement. Users pick a subject and learn through interactive flashcard-based experiences. They can also create their own learning content, building a community-driven knowledge base. Built with Flask, vanilla HTML/CSS/JS, and SQLite.",
    role: "Backend & Integration Lead",
    roleDescription:
      "Designed the Flask backend and SQLite data model, built the content creation and flashcard APIs, and integrated frontend-backend communication for real-time flashcard interactions.",
    stack: ["Flask", "Python", "SQLite", "HTML/CSS", "JavaScript"],
    features: [
      "Subject selection and interactive learning path",
      "User-generated content: create and share learning materials",
      "Interactive flashcard system with progression tracking",
      "Clean UX for a gamified learning experience",
    ],
    demoFlow: [
      "Pick a subject on the landing page",
      "Start an interactive flashcard session",
      "Show the learning progression and scoring",
      "Create a new flashcard set as user-generated content",
      "Demonstrate the community content discovery",
    ],
    image: "/images/pic20.jpg",
    links: [
      { label: "GitHub Repository", href: "#", type: "github" },
      { label: "Demo", href: "#", type: "demo" },
    ],
    tags: ["Flask", "Python", "SQLite", "EdTech", "Gamification"],
    hasDetailPage: true,
    reflections: {
      learned:
        "User-centered design matters even for rapid prototypes. The flashcard UX went through three iterations in 24 hours because the first version was functional but not intuitive. Team collaboration under time constraints was a forcing function for clear communication.",
      doOver:
        "I'd use a proper ORM instead of raw SQLite queries from the start. The time spent on manual query building added up, and a lightweight ORM like SQLAlchemy would have made the content creation features faster to implement.",
    },
  },
];

export const featuredHackathons = hackathons.filter((h) => h.hasDetailPage);
export const getHackathonBySlug = (slug: string) => hackathons.find((h) => h.slug === slug);
