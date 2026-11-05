export interface Experience {
  title: string;
  organization: string;
  period?: string;
  location?: string;
  description: string;
  highlights?: string[];
  tags?: string[];
  current?: boolean;
}

// Professional roles, newest first. Shown on the home page and at the top of /experience.
export const experiences: Experience[] = [
  {
    title: "AI Software Engineering Intern",
    organization: "AArete",
    period: "Jun 2026 – Present",
    location: "Chicago, IL",
    current: true,
    description:
      "Building production LLM systems on AWS — from agent pipelines and retrieval to evaluation and deployment.",
    highlights: [
      "Architected a production LLM pipeline (Python, LangGraph, FastAPI) exposed through 9 MCP tools across two decoupled services on a Postgres job store; deployed on AWS Bedrock AgentCore (Docker, ECR, CDK, Cognito OAuth, API Gateway + Lambda)",
      "Engineered a RAG system on AWS Bedrock with citation-grounded retrieval and 6 concurrent QC validators, plus an LLM-as-judge eval harness that surfaced and fixed 20+ pipeline defects",
      "Automated donor reporting for Street Samaritans (nonprofit): a Python ETL unifying WooCommerce, PayPal, and check donations into a live Looker Studio dashboard — replacing a tool that crashed on 345K+ orders and surfacing a ~344K-attempt card-testing fraud pattern",
    ],
    tags: ["Python", "LangGraph", "FastAPI", "MCP", "AWS Bedrock", "RAG"],
  },
  {
    title: "Software Engineering Intern",
    organization: "NeuralSeek",
    period: "Aug 2025 – Present",
    location: "Remote",
    current: true,
    description:
      "Shipping enterprise AI applications on API-first backend services.",
    highlights: [
      "Architected RAG over 10K+ documents with vector retrieval, lifting search relevance ~30% and cutting latency ~25% in production",
      "Built reusable AI platform components that let engineers launch new enterprise automation products in days instead of weeks",
    ],
    tags: ["RAG", "LLMs", "Vector Search", "APIs"],
  },
  {
    title: "AI/ML Engineering Research Intern",
    organization: "Texas Advanced Computing Center (TACC), UT Austin",
    period: "May 2025 – Aug 2025",
    location: "Austin, TX",
    description:
      "NSF Cyberinfrastructure REU — research on combining search-based planning with reinforcement learning.",
    highlights: [
      "Built Q-learning agents with search-based warm-starts, reaching 38–62% faster convergence and 67–133% higher final reward vs. cold-start baselines",
      "Ran 15 large-scale experiments across 90 GPU HPC nodes; presented to 50+ researchers at the TACC REU symposium",
    ],
    tags: ["Reinforcement Learning", "HPC", "Python"],
  },
  {
    title: "Software Engineering Intern (IT Systems)",
    organization: "Randolph College",
    period: "Aug 2024 – Aug 2025",
    location: "Lynchburg, VA",
    description:
      "Internal tooling and support for the campus IT team.",
    highlights: [
      "Built automation and asset-tracking tooling for 300+ users, cutting equipment retrieval time 40%",
      "Resolved 20+ tickets a week at 100% SLA compliance",
    ],
  },
];

// Leadership, outreach, and programs. Shown in a compact list on /experience.
export const earlierExperiences: Experience[] = [
  {
    title: "Judiciary Chair",
    organization: "Randolph College",
    description:
      "Chaired judiciary committee meetings and mediated 30+ student conduct cases per semester, applying college bylaws for fair, consistent outcomes.",
  },
  {
    title: "Presidential Ambassador",
    organization: "Randolph College",
    description:
      "Represented the college at events and built relationships with prospective students and community members.",
  },
  {
    title: "Science Outreach",
    organization: "Randolph College",
    description:
      "Planned and taught interactive STEM lessons for middle school students.",
  },
  {
    title: "Tutor",
    organization: "Randolph College",
    description:
      "Gave one-on-one academic support with lesson plans tailored to each student.",
  },
  {
    title: "Member, Society of Physics Students",
    organization: "Randolph College",
    description:
      "Organized events to get more students involved in physics and STEM.",
  },
  {
    title: "SciFest Internship",
    organization: "SciFest",
    description:
      "Helped run a LEGO competition and community science outreach events.",
  },
  {
    title: "CodePath TIP Program",
    organization: "CodePath",
    description:
      "Technical interview prep: data structures, algorithms, and mock interviews.",
  },
  {
    title: "Volunteer",
    organization: "SOS Children's Villages, Ethiopia",
    description:
      "Organized fundraising events and educational programs for children.",
  },
];
