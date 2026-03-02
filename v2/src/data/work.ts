export type WorkCategory = "research" | "product" | "systems" | "data" | "applied-ml" | "platform";
export type WorkStatus = "completed" | "in-progress" | "ongoing";

export interface WorkItem {
  slug: string;
  title: string;
  subtitle?: string;
  description: string;
  longDescription?: string;
  category: WorkCategory;
  status: WorkStatus;
  tags: string[];
  image?: string;
  featured?: boolean;
  period?: string;
  organization?: string;
  links?: { label: string; href: string; type: "github" | "paper" | "demo" | "poster" | "video" | "external" }[];
  highlights?: string[];
  hasDetailPage?: boolean;
}

export const categoryLabels: Record<WorkCategory, string> = {
  research: "Research",
  product: "Product",
  systems: "Systems",
  data: "Data & Analysis",
  "applied-ml": "Applied ML",
  platform: "Platform",
};

export const statusLabels: Record<WorkStatus, string> = {
  completed: "Completed",
  "in-progress": "In Progress",
  ongoing: "Ongoing",
};

export const work: WorkItem[] = [
  // ── FLAGSHIP: TACC Research ──
  {
    slug: "tacc-research",
    title: "Reinforcement Learning with Search-Based Planning Priors",
    subtitle: "NSF Cyberinfrastructure REU — Texas Advanced Computing Center",
    description:
      "Investigated how search-based planning methods (pathfinding algorithms) can be combined with approximate Q-learning to improve learning efficiency and convergence in complex environments. Produced a research paper, poster, and oral presentation.",
    longDescription:
      "As part of the NSF Cyberinfrastructure REU at UT Austin's Texas Advanced Computing Center (TACC), I conducted research at the intersection of reinforcement learning and high-performance computing. The core question: can suboptimal search trajectories warm-start Q-values and accelerate learning compared to cold-start approaches?\n\nI implemented RL agents in the Pac-Man environment using approximate Q-learning, integrated pathfinding-based trajectory priors to initialize Q-values, and ran systematic comparisons across convergence speed, cumulative reward, and policy stability. The results demonstrated measurable improvements in learning efficiency when combining planning priors with learned policies — contributing to the broader literature on hybrid planning + learning systems.",
    category: "research",
    status: "completed",
    tags: ["Reinforcement Learning", "Q-Learning", "HPC", "Pathfinding", "Python"],
    image: "https://raw.githubusercontent.com/etollaw/personal-website/main/RLimage.png",
    featured: true,
    period: "Summer 2025",
    organization: "Texas Advanced Computing Center (TACC) @ UT Austin",
    links: [
      { label: "Research Paper (PDF)", href: "/images/DRAFT PAPER2.pdf", type: "paper" },
      { label: "Academic Poster", href: "/images/Tolla_TACC_42x56in.pdf", type: "poster" },
      { label: "REU Cohort", href: "/images/reucohort.jpeg", type: "external" },
      { label: "Poster Presentation", href: "/images/reupresentation.jpeg", type: "external" },
      { label: "TACC Facility", href: "/images/taccfacility.jpeg", type: "external" },
    ],
    highlights: [
      "Implemented RL agents using approximate Q-learning in the Pac-Man environment",
      "Integrated suboptimal search/pathfinding trajectories to warm-start Q-values",
      "Demonstrated faster convergence and improved stability vs cold-start baselines",
      "Produced quantitative comparisons and learning-curve plots across multiple runs",
      "Delivered research paper, academic poster, and oral presentation",
    ],
    hasDetailPage: true,
  },

  // ── NeuralSeek ──
  {
    slug: "neuralseek",
    title: "NeuralSeek",
    subtitle: "Intelligent Search & Discovery System",
    description:
      "A research-inspired product exploring intelligent search and discovery over complex structured and unstructured data. Focused on ML-driven relevance, system architecture, and iterative engineering.",
    longDescription:
      "NeuralSeek is an early-stage system designed to help users search, filter, and reason over heterogeneous information. The project emphasizes a thoughtful system design approach: data ingestion pipelines, embedding-based retrieval, and relevance ranking — built with extensibility and iteration in mind.\n\nThe goal is not to build another generic search tool, but to explore how ML components (embeddings, learned ranking, query understanding) can meaningfully improve discovery in domain-specific contexts.",
    category: "product",
    status: "in-progress",
    tags: ["Search", "Embeddings", "Retrieval", "Python", "System Design"],
    image: "/images/pic20.jpg",
    featured: true,
    period: "2025 – Present",
    links: [
      { label: "GitHub Repository", href: "#", type: "github" },
      { label: "Live Demo", href: "#", type: "demo" },
    ],
    highlights: [
      "Designed data ingestion pipeline for structured + unstructured sources",
      "Exploring embedding-based retrieval and learned ranking models",
      "MVP-first approach with clear iteration roadmap",
      "Emphasis on system architecture and extensibility",
    ],
    hasDetailPage: true,
  },

  // ── Lisan — Language Learning Platform ──
  {
    slug: "lisan",
    title: "Lisan — Accessible Language Learning",
    subtitle: "Culturally Grounded Language Education Platform",
    description:
      "An in-progress language learning platform focused on accessible, culturally grounded education for underrepresented languages — starting with Amharic. Built with Next.js and Supabase with an audio-first learning approach.",
    longDescription:
      "Lisan is inspired by my background growing up between cultures and languages. Many widely used language platforms fail to adequately support underrepresented languages or prioritize accessibility for learners with different cognitive, auditory, or educational needs. Lisan addresses these gaps by combining modern web technology, audio-first learning, and inclusive UX principles.\n\nThe platform is built on Next.js with Supabase handling auth, database, and audio storage. The architecture supports clean data models for letters, words, phrases, and lessons — designed to scale from Amharic to additional underrepresented languages. This is intentionally iterative: the goal is not rapid feature accumulation, but thoughtful design balancing pedagogy, accessibility, and technical scalability.",
    category: "product",
    status: "in-progress",
    tags: ["Next.js", "Supabase", "Accessibility", "Audio", "React", "EdTech"],
    image: "https://raw.githubusercontent.com/etollaw/personal-website/main/lisan.png",
    featured: true,
    period: "2025 – Present",
    links: [
      { label: "GitHub Repository", href: "https://github.com/etollaw/Lisan-app", type: "github" },
      { label: "Live Demo", href: "https://lisan-app.vercel.app/learn", type: "demo" },
    ],
    highlights: [
      "Audio-first learning pipeline for letter- and word-level pronunciation",
      "Supabase-based unified backend (auth, database, audio storage)",
      "Accessibility-first design: clear typography, minimal cognitive load, touch-friendly",
      "Clean data models scaling from letters → words → phrases → exercises",
      "Designed with neurodiverse learners in mind",
    ],
    hasDetailPage: true,
  },

  // ── ToS Summarizer — Browser Extension ──
  {
    slug: "tos-summarizer",
    title: "Terms of Service Summarizer",
    subtitle: "Browser Extension for Readable Legal Text",
    description:
      "A browser extension that summarizes Terms & Conditions into simple, understandable language with multiple detail levels — making legal text accessible for everyday users.",
    longDescription:
      "Most people blindly accept Terms of Service because the documents are intentionally dense and hard to parse. This browser extension addresses that gap by providing instant summarization of ToS documents at three detail levels: Super Layman (key bullet points), Simplified (plain English overview), and Detailed (comprehensive yet readable).\n\nThe extension handles text extraction from web pages, runs a summarization pipeline with encoding-aware processing, and presents results in a clean popup UI. Significant UX effort went into removing empty UI elements, fixing encoding artifacts in quoted text, and designing intuitive controls for toggling between summary levels.",
    category: "product",
    status: "completed",
    tags: ["Browser Extension", "JavaScript", "NLP", "UX Design", "Chrome API"],
    image: "https://raw.githubusercontent.com/etollaw/personal-website/main/tos.png",
    featured: true,
    period: "2025",
    links: [
      { label: "GitHub Repository", href: "https://github.com/etollaw/tos-summarizer-extension", type: "github" },
      { label: "Demo", href: "#", type: "demo" },
    ],
    highlights: [
      "Three summary modes: Super Layman, Simplified, and Detailed",
      "Text parsing and summarization pipeline with encoding-aware processing",
      "Clean popup UI with detail-level controls",
      "UX improvements: encoding fixes, empty element removal, quote cleanup",
      "Built as a Chrome extension with Chrome API integration",
    ],
    hasDetailPage: true,
  },

  // ── Systems Programming (C) ──
  {
    slug: "systems-programming",
    title: "Systems Programming in C",
    subtitle: "Low-Level Engineering & Performance-Oriented Thinking",
    description:
      "Advanced coursework in C and C++ focused on memory management, data structures at the systems level, debugging workflows, and performance-oriented development.",
    longDescription:
      "Completed rigorous coursework in systems-level programming using C and C++. This work emphasized manual memory management (malloc/free, pointers, buffer handling), data structure implementation at the hardware-aware level, and the discipline of writing correct, performant code.\n\nTopics included compilation and linking pipelines, debugging with GDB/Valgrind, and reasoning about performance at the instruction level. This experience provides an important complement to my higher-level ML and data science work — demonstrating depth across the stack.",
    category: "systems",
    status: "completed",
    tags: ["C", "C++", "Memory Management", "Data Structures", "Debugging"],
    image: "https://raw.githubusercontent.com/etollaw/personal-website/main/systemsprogramming.png",
    featured: true,
    period: "2024 – 2025",
    links: [
      { label: "Course Projects (GitHub)", href: "#", type: "github" },
    ],
    highlights: [
      "Manual memory management: allocation, pointers, buffer debugging",
      "Data structures and algorithms implemented at the systems level",
      "Compilation, linking, and debugging workflows (GDB, Valgrind)",
      "Performance-oriented thinking and correctness reasoning",
    ],
    hasDetailPage: true,
  },

  // ── Data Analysis & Visualization ──
  {
    slug: "data-analysis",
    title: "Data Analysis & Spatial Visualization",
    subtitle: "Statistical Analysis, GIS, and Real-World Datasets",
    description:
      "Hands-on data analysis coursework using R for statistical modeling, data cleaning, and exploratory analysis — combined with spatial analysis using QGIS on environmental and social datasets.",
    longDescription:
      "Through dedicated data science coursework, I developed hands-on skills in data wrangling, visualization, and statistical modeling using R. Projects involved real-world datasets spanning environmental, social, and geographic domains.\n\nA distinctive component was spatial analysis using QGIS — working with geographic information systems to analyze spatial patterns in data. This combination of traditional statistical analysis with geospatial tools reflects my ability to work across quantitative methods.",
    category: "data",
    status: "completed",
    tags: ["R", "QGIS", "Data Visualization", "Statistics", "GIS"],
    image: "https://raw.githubusercontent.com/etollaw/personal-website/main/dataanalysis.png",
    featured: true,
    period: "2024 – 2025",
    links: [
      { label: "Analysis Notebooks", href: "#", type: "github" },
    ],
    highlights: [
      "Statistical analysis and modeling in R",
      "Data cleaning and exploratory data analysis on real-world datasets",
      "Spatial analysis and mapping using QGIS",
      "Environmental, social, and geographic data interpretation",
    ],
    hasDetailPage: true,
  },

  // ── Matrix Operations Library ──
  {
    slug: "matrix-calculator",
    title: "Matrix Operations Library & Web Calculator",
    subtitle: "Python Library + Interactive Linear Algebra Tool",
    description:
      "A dual-purpose project: an importable Python library for linear algebra operations and a browser-based calculator powered by Flask. Supports 9 operations including eigenvalues, LU decomposition, and solving Ax=b — with 34 unit tests and CI/CD.",
    longDescription:
      "Matrix Operations Library is both a pip-installable Python package and a live web calculator for linear algebra. The library wraps NumPy and SciPy with a clean public API, custom exception hierarchy, and thorough input validation — making it useful as a teaching tool and a quick computation utility.\n\nThe web calculator is a single-page Flask app with a vanilla JS frontend. It features live dimension badges as you type, pre-loaded examples for every operation, CSS-styled matrix bracket rendering, complex number formatting, and a copy-to-clipboard button. The entire project is deployed to Vercel via a serverless WSGI adapter, with a GitHub Actions CI pipeline running 34 pytest tests and ruff linting on every push.",
    category: "systems",
    status: "completed",
    tags: ["Python", "NumPy", "SciPy", "Flask", "Linear Algebra", "pytest"],
    image: "https://raw.githubusercontent.com/etollaw/personal-website/main/matrixcalc.png",
    featured: true,
    period: "2026",
    links: [
      { label: "GitHub Repository", href: "https://github.com/etollaw/matrix-operations-library", type: "github" },
      { label: "Live Calculator", href: "https://matrix-operations-library.vercel.app/", type: "demo" },
    ],
    highlights: [
      "9 operations: multiply, determinant, inverse, transpose, eigenvalues, solve Ax=b, LU decomposition, rank, trace",
      "Custom exception hierarchy (DimensionError, SingularMatrixError, InvalidInputError)",
      "34 pytest unit tests covering correctness, edge cases, and error handling",
      "Live web calculator with pre-loaded examples and matrix bracket rendering",
      "Vercel serverless deployment via WSGI adapter + GitHub Actions CI",
    ],
    hasDetailPage: true,
  },

  // ── Existing projects (refined) ──
  {
    slug: "voice-assistant",
    title: "Voice-Controlled Smart Assistant",
    subtitle: "Speech Recognition & NLP System",
    description:
      "Developed a voice-controlled smart assistant capable of recognizing and responding to spoken commands using speech recognition and NLP. Built under the guidance of Dr. Jonathan Skelton.",
    category: "applied-ml",
    status: "completed",
    tags: ["Python", "NLP", "Speech Recognition", "APIs", "ML"],
    image: "/images/pic19.jpg",
    featured: false,
    period: "2024",
    organization: "Randolph College",
    highlights: [
      "Speech-to-text pipeline with real-time command processing",
      "NLP-based intent classification and response generation",
      "Supervised by Dr. Jonathan Skelton (Robotics & Mechatronics)",
    ],
    hasDetailPage: false,
  },
  {
    slug: "superminds",
    title: "Data Mining for Agricultural Insights (SUPERMinDS)",
    subtitle: "Interactive Data Analytics Platform",
    description:
      "Built interactive web tools for data mining and analytics using USDA crop data, weather patterns, and related factors. Supervised by Dr. Jasmine Wan.",
    category: "data",
    status: "completed",
    tags: ["Python", "JavaScript", "Data Visualization", "ML"],
    image: "https://raw.githubusercontent.com/etollaw/personal-website/main/datamining.png",
    period: "2024",
    organization: "Randolph College",
    highlights: [
      "Interactive dashboards for USDA crop and weather data",
      "Machine learning models for agricultural pattern detection",
      "Supervised by Dr. Jasmine Wan (CS & Mathematics)",
    ],
    hasDetailPage: false,
  },
  {
    slug: "voice-aid",
    title: "VoiceAid — AI-Powered Speech Recognition",
    subtitle: "Voice-to-Notes Platform for Assistive Technology",
    description:
      "A full-stack voice-to-notes platform that transcribes audio, generates smart summaries, extracts key points, and detects action items — designed for accessibility. Built with FastAPI, React, AssemblyAI, and deployed on Render.",
    longDescription:
      "VoiceAid transforms unstructured audio into organized, actionable notes. Users can record directly from their microphone or upload audio files, and the platform handles the rest: AI-powered transcription via AssemblyAI, extractive summarization with TF-based sentence scoring, key point extraction, and automatic action item detection using pattern matching.\n\nThe architecture is a clean FastAPI backend with SQLite/SQLAlchemy and a React + Vite frontend styled with Tailwind CSS. Audio processing uses FFmpeg for format conversion and duration detection. The entire session lifecycle is tracked through a status FSM (uploading → transcribing → summarizing → completed), with full CRUD, search, and pagination on the history view.\n\nThe project was built with accessibility at its core — voice input removes the need for typing, structured output makes information scannable, and the UI follows accessibility best practices with ARIA labels, semantic HTML, high contrast, and responsive design.",
    category: "applied-ml",
    status: "completed",
    tags: ["FastAPI", "React", "AssemblyAI", "Tailwind CSS", "SQLite", "FFmpeg", "Python"],
    image: "https://raw.githubusercontent.com/etollaw/personal-website/main/voiceaid.png",
    featured: true,
    period: "2024 – 2026",
    links: [
      { label: "GitHub Repository", href: "https://github.com/etollaw/Voice-Aid-AI-Powered-Speech-Recognition-for-Assistive-Technology", type: "github" },
      { label: "Live Demo", href: "https://voice-aid-ai-powered-speech-recognition-72un.onrender.com/", type: "demo" },
    ],
    highlights: [
      "In-browser microphone recording (MediaRecorder API) + drag-and-drop file upload (9 formats, 100MB max)",
      "AI transcription via AssemblyAI with automatic language detection",
      "Extractive summarization engine: TF-based sentence scoring, no ML models required",
      "Automatic action item detection using 12+ regex patterns",
      "Full session history with CRUD, search, filtering, and pagination",
      "Map-reduce summarization for transcripts over 50 sentences",
      "15 pytest tests covering API endpoints and service logic",
      "Docker-ready backend, Makefile automation, deployed on Render",
    ],
    hasDetailPage: true,
  },
  {
    slug: "upkey",
    title: "Upkey: Empowering Diverse Talent",
    subtitle: "Digital Platform & UX Collaboration",
    description:
      "Collaborated on a digital platform connecting underrepresented students with internship opportunities, enhancing UX and onboarding flows.",
    category: "platform",
    status: "completed",
    tags: ["UX Design", "Web Development", "Platform"],
    image: "/images/pic22.jpg",
    hasDetailPage: false,
  },
];

// Helper to get featured work items
export const featuredWork = work.filter((w) => w.featured);

// Helper to get work by category
export function getWorkByCategory(category: WorkCategory) {
  return work.filter((w) => w.category === category);
}

// Helper to get a work item by slug
export function getWorkBySlug(slug: string) {
  return work.find((w) => w.slug === slug);
}
