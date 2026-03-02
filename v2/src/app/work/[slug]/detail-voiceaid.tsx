"use client";

import { motion } from "framer-motion";
import {
  Mic,
  Upload,
  FileText,
  Sparkles,
  ListChecks,
  Clock,
  Server,
  Database,
  Headphones,
  Accessibility,
  TestTube,
  RefreshCcw,
} from "lucide-react";

const sectionAnim = {
  initial: { opacity: 0, y: 15 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true as const },
  transition: { duration: 0.5 },
};

const pipeline = [
  {
    icon: Upload,
    step: "Record or Upload",
    detail: "In-browser microphone recording via MediaRecorder API, or drag-and-drop upload supporting 9 audio formats up to 100 MB.",
  },
  {
    icon: Headphones,
    step: "Audio Processing",
    detail: "FFmpeg converts audio to 16 kHz mono WAV, detects duration via ffprobe, and chunks long files into 5-minute segments.",
  },
  {
    icon: FileText,
    step: "AI Transcription",
    detail: "AssemblyAI cloud API transcribes audio with automatic language detection. Status FSM tracks progress: uploading → transcribing → summarizing → completed.",
  },
  {
    icon: Sparkles,
    step: "Smart Summarization",
    detail: "Custom extractive summarizer scores sentences by term frequency after stop-word removal. Map-reduce splits 50+ sentence transcripts into chunks for combined summaries.",
  },
  {
    icon: ListChecks,
    step: "Key Points & Action Items",
    detail: "Top 7 highest-scored sentences extracted as key points. 12+ regex patterns detect action items: \"need to\", \"should\", \"follow-up\", \"deadline\", etc.",
  },
  {
    icon: Clock,
    step: "Session History",
    detail: "Full CRUD with search, status filtering, and pagination. Re-summarize any session with configurable sentence count (1–20).",
  },
];

const architectureLayers = [
  {
    icon: Server,
    label: "FastAPI Backend",
    detail: "Python 3.11+, uvicorn ASGI server, 6 REST endpoints, Pydantic schema validation, AssemblyAI integration.",
  },
  {
    icon: Database,
    label: "SQLite + SQLAlchemy",
    detail: "ORM-managed sessions table with UUID primary keys, status FSM, JSON-serialized key points and action items.",
  },
  {
    icon: Mic,
    label: "React Frontend",
    detail: "React 18 + Vite, Tailwind CSS with custom brand palette (indigo #4F46E5), React Router v6, Lucide icons.",
  },
  {
    icon: Headphones,
    label: "Audio Pipeline",
    detail: "FFmpeg/ffprobe for format conversion, duration detection, and chunking. Graceful fallback when FFmpeg is unavailable.",
  },
];

const accessibilityFeatures = [
  { label: "Voice-first input", desc: "Record directly from microphone — no typing needed for primary interaction" },
  { label: "Structured output", desc: "Transforms unstructured audio into organized, scannable summaries, key points, and action items" },
  { label: "ARIA labels", desc: "Interactive elements have descriptive aria-labels (e.g. record button toggles between 'Start/Stop recording')" },
  { label: "Semantic HTML", desc: "Proper heading hierarchy, <nav>, <main>, <footer>, <dl>/<dt>/<dd> for settings" },
  { label: "High contrast", desc: "Dark text on light backgrounds, colored status badges with ring-inset borders" },
  { label: "Responsive design", desc: "Mobile-first with Tailwind breakpoints — nav labels collapse on small screens" },
  { label: "Focus states", desc: "Visible focus rings (ring-4 ring-brand-300) on all interactive elements" },
  { label: "Error handling", desc: "Clear, dismissible error messages with helpful context ('Is the backend running?', 'Allow microphone permission')" },
];

const apiEndpoints = [
  { method: "GET", path: "/api/health", desc: "Health check + config info (version, mock mode, provider)" },
  { method: "POST", path: "/api/sessions", desc: "Upload audio → validate → transcribe → summarize → store" },
  { method: "GET", path: "/api/sessions", desc: "List sessions with ?search=, ?status=, ?page= params" },
  { method: "GET", path: "/api/sessions/{id}", desc: "Get single session with full transcript and summary" },
  { method: "DELETE", path: "/api/sessions/{id}", desc: "Delete session and associated audio file" },
  { method: "POST", path: "/api/sessions/{id}/resummarize", desc: "Re-summarize with different sentence count" },
];

export default function VoiceAidDetail() {
  return (
    <>
      {/* ── Mission ── */}
      <motion.section {...sectionAnim}>
        <h2 className="text-xs font-medium tracking-widest uppercase text-accent mb-4">
          The Mission
        </h2>
        <div className="p-6 rounded-2xl border border-border bg-surface">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-accent-light flex items-center justify-center">
              <Accessibility size={20} className="text-accent" />
            </div>
            <p className="text-sm font-semibold">Your voice, understood.</p>
          </div>
          <p className="text-sm text-muted leading-relaxed">
            Most voice tools are designed for able-bodied users in ideal conditions.
            VoiceAid is built for accessibility — transforming audio into structured,
            actionable notes so that anyone can capture, organize, and act on
            spoken information regardless of physical ability or communication challenges.
          </p>
        </div>
      </motion.section>

      {/* ── Processing Pipeline ── */}
      <motion.section {...sectionAnim} className="mt-12">
        <h2 className="text-xs font-medium tracking-widest uppercase text-accent mb-4">
          Processing Pipeline
        </h2>
        <div className="relative pl-6 border-l-2 border-accent/20 space-y-6">
          {pipeline.map((step, i) => (
            <div key={step.step} className="relative">
              <div className="absolute -left-[25px] w-4 h-4 rounded-full bg-background border-2 border-accent flex items-center justify-center">
                <span className="text-[8px] font-bold text-accent">{i + 1}</span>
              </div>
              <div className="pl-4">
                <div className="flex items-center gap-2 mb-1">
                  <step.icon size={14} className="text-accent" />
                  <h3 className="text-sm font-semibold">{step.step}</h3>
                </div>
                <p className="text-sm text-muted leading-relaxed">{step.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* ── Architecture ── */}
      <motion.section {...sectionAnim} className="mt-12">
        <h2 className="text-xs font-medium tracking-widest uppercase text-accent mb-4">
          Architecture
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {architectureLayers.map((layer) => (
            <div
              key={layer.label}
              className="p-5 rounded-2xl border border-border bg-surface"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-accent-light flex items-center justify-center">
                  <layer.icon size={16} className="text-accent" />
                </div>
                <h3 className="text-sm font-semibold">{layer.label}</h3>
              </div>
              <p className="text-sm text-muted leading-relaxed">{layer.detail}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* ── API Reference ── */}
      <motion.section {...sectionAnim} className="mt-12">
        <h2 className="text-xs font-medium tracking-widest uppercase text-accent mb-4">
          REST API (6 Endpoints)
        </h2>
        <div className="space-y-2">
          {apiEndpoints.map((ep) => (
            <div
              key={`${ep.method}-${ep.path}`}
              className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 p-3 rounded-xl border border-border bg-surface"
            >
              <div className="flex items-center gap-2 shrink-0">
                <span
                  className={`text-[10px] font-bold tracking-wide px-2 py-0.5 rounded ${
                    ep.method === "GET"
                      ? "bg-emerald-500/10 text-emerald-400"
                      : ep.method === "POST"
                      ? "bg-blue-500/10 text-blue-400"
                      : "bg-red-500/10 text-red-400"
                  }`}
                >
                  {ep.method}
                </span>
                <code className="text-xs font-mono text-accent">{ep.path}</code>
              </div>
              <span className="text-sm text-muted leading-relaxed">{ep.desc}</span>
            </div>
          ))}
        </div>
      </motion.section>

      {/* ── Accessibility ── */}
      <motion.section {...sectionAnim} className="mt-12">
        <h2 className="text-xs font-medium tracking-widest uppercase text-accent mb-4">
          Accessibility by Design
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {accessibilityFeatures.map((feat) => (
            <div
              key={feat.label}
              className="p-4 rounded-2xl border border-border bg-surface"
            >
              <p className="text-xs font-semibold text-accent mb-1">{feat.label}</p>
              <p className="text-sm text-muted leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* ── Summarization Engine ── */}
      <motion.section {...sectionAnim} className="mt-12">
        <h2 className="text-xs font-medium tracking-widest uppercase text-accent mb-4">
          Summarization Engine
        </h2>
        <div className="p-6 rounded-2xl border border-border bg-surface">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-accent-light flex items-center justify-center">
              <RefreshCcw size={20} className="text-accent" />
            </div>
            <div>
              <h3 className="text-sm font-semibold">Extractive TF-Based Scoring</h3>
              <p className="text-xs text-muted">Deterministic · No ML models · Configurable</p>
            </div>
          </div>
          <div className="space-y-3 mt-4">
            {[
              "Split transcript into sentences via regex ([.!?]+)",
              "Score each sentence by term frequency after stop-word removal, normalized",
              "Select top N sentences (default 5), preserving original order",
              "Extract top 7 scored sentences as key points",
              "Detect action items via 12+ regex patterns (need to, should, follow-up, deadline …)",
              "Map-reduce: transcripts >50 sentences split into 20-sentence chunks, summarized individually, then combined",
              "Re-summarize any session with custom sentence count (1–20)",
            ].map((step, i) => (
              <div key={i} className="flex gap-2.5 text-sm text-muted">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                {step}
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ── Testing ── */}
      <motion.section {...sectionAnim} className="mt-12">
        <h2 className="text-xs font-medium tracking-widest uppercase text-accent mb-4">
          Testing & Quality
        </h2>
        <div className="p-6 rounded-2xl border border-border bg-surface">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-accent-light flex items-center justify-center">
              <TestTube size={20} className="text-accent" />
            </div>
            <div>
              <h3 className="text-sm font-semibold">15 pytest Tests</h3>
              <p className="text-xs text-muted">10 API tests · 5 service test classes · Mock mode</p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
            {[
              { label: "API Tests", desc: "Health check, upload, invalid format, CRUD, search, re-summarize" },
              { label: "Service Tests", desc: "Sentence splitting, summary extraction, key points, action item detection" },
              { label: "Mock Mode", desc: "MOCK_MODE=true bypasses API calls — tests run without AssemblyAI key" },
            ].map((item) => (
              <div key={item.label} className="p-3 rounded-xl bg-background border border-border">
                <p className="text-xs font-semibold text-accent mb-1">{item.label}</p>
                <p className="text-xs text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>
    </>
  );
}
