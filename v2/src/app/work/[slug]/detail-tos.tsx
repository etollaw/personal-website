"use client";

import { motion } from "framer-motion";
import MediaPlaceholder from "@/components/MediaPlaceholder";
import { FileText, Settings, Sparkles } from "lucide-react";

const sectionAnim = {
  initial: { opacity: 0, y: 15 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true as const },
  transition: { duration: 0.5 },
};

const summaryModes = [
  {
    icon: Sparkles,
    name: "Super Layman",
    description:
      "Key bullet points only — the essentials in under 30 seconds. Perfect for deciding whether to read further.",
  },
  {
    icon: FileText,
    name: "Simplified",
    description:
      "Plain English overview of the full document. Major clauses explained in accessible language, organized by theme.",
  },
  {
    icon: Settings,
    name: "Detailed",
    description:
      "Comprehensive yet readable breakdown. Every significant clause summarized with context and implications noted.",
  },
];

const uxImprovements = [
  "Encoding-aware text processing (handles Unicode, special characters, and HTML entities)",
  "Quote cleanup: removes malformed or dangling quotation marks from extracted text",
  "Empty element removal: hides UI sections when no content is available",
  "Detail-level toggle: instant switching between summary modes without re-processing",
  "Clean popup UI sized for readability without overwhelming the browser tab",
];

export default function ToSSummarizerDetail() {
  return (
    <>
      {/* ── Problem ── */}
      <motion.section {...sectionAnim}>
        <h2 className="text-xs font-medium tracking-widest uppercase text-accent mb-4">
          The Problem
        </h2>
        <div className="p-6 rounded-2xl border border-border bg-surface">
          <p className="text-sm text-muted leading-relaxed">
            Terms of Service documents are intentionally dense — often thousands of words
            of legalese that most people blindly accept. Users deserve to understand what
            they&apos;re agreeing to without needing a law degree. This extension puts
            comprehension back in the user&apos;s hands.
          </p>
        </div>
      </motion.section>

      {/* ── Summary Modes ── */}
      <motion.section {...sectionAnim} className="mt-12">
        <h2 className="text-xs font-medium tracking-widest uppercase text-accent mb-4">
          Summary Modes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {summaryModes.map((mode) => (
            <div
              key={mode.name}
              className="p-5 rounded-2xl border border-border bg-surface"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 rounded-lg bg-accent-light flex items-center justify-center">
                  <mode.icon size={16} className="text-accent" />
                </div>
                <h3 className="text-sm font-semibold">{mode.name}</h3>
              </div>
              <p className="text-sm text-muted leading-relaxed">{mode.description}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* ── How It Works ── */}
      <motion.section {...sectionAnim} className="mt-12">
        <h2 className="text-xs font-medium tracking-widest uppercase text-accent mb-4">
          How It Works
        </h2>
        <div className="relative pl-6 border-l-2 border-accent/20 space-y-4">
          {[
            "User navigates to any Terms of Service or Terms & Conditions page",
            "Clicks the extension icon — text is extracted and parsed from the page",
            "Summarization pipeline processes the content with encoding-aware handling",
            "Results displayed in a clean popup with detail-level toggle",
          ].map((step, i) => (
            <div key={i} className="relative">
              <div className="absolute -left-[25px] w-4 h-4 rounded-full bg-background border-2 border-accent flex items-center justify-center">
                <span className="text-[8px] font-bold text-accent">{i + 1}</span>
              </div>
              <p className="text-sm text-muted leading-relaxed pl-2">{step}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* ── UX Improvements ── */}
      <motion.section {...sectionAnim} className="mt-12">
        <h2 className="text-xs font-medium tracking-widest uppercase text-accent mb-4">
          UX & Engineering Details
        </h2>
        <div className="space-y-2">
          {uxImprovements.map((item, i) => (
            <div
              key={i}
              className="flex gap-2.5 p-3 rounded-xl border border-border bg-surface text-sm text-muted"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
              {item}
            </div>
          ))}
        </div>
      </motion.section>

      {/* ── Screenshots ── */}
      <motion.section {...sectionAnim} className="mt-12">
        <h2 className="text-xs font-medium tracking-widest uppercase text-accent mb-4">
          Screenshots
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <MediaPlaceholder
            type="image"
            label="Super Layman Mode"
            description="Key bullet point summary"
          />
          <MediaPlaceholder
            type="image"
            label="Simplified Mode"
            description="Plain English overview"
          />
          <MediaPlaceholder
            type="image"
            label="Detailed Mode"
            description="Comprehensive breakdown"
          />
        </div>
      </motion.section>
    </>
  );
}
