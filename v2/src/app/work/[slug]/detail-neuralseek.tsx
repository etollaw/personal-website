"use client";

import { motion } from "framer-motion";
import MediaPlaceholder from "@/components/MediaPlaceholder";
import VideoEmbed from "@/components/VideoEmbed";
import { CheckCircle, Circle } from "lucide-react";

const sectionAnim = {
  initial: { opacity: 0, y: 15 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true as const },
  transition: { duration: 0.5 },
};

const built = [
  "Problem framing and use-case definition",
  "Data ingestion pipeline design (structured + unstructured)",
  "Initial embedding exploration for semantic retrieval",
  "MVP architecture planning and tech stack selection",
];

const next = [
  "Implement ranking model with learned relevance signals",
  "Build query understanding layer (intent + entity extraction)",
  "User-facing search interface (React frontend)",
  "Evaluation framework: precision, recall, user satisfaction",
  "Deploy demo instance for testing",
];

export default function NeuralSeekDetail() {
  return (
    <>
      {/* ── Problem & Motivation ── */}
      <motion.section {...sectionAnim}>
        <h2 className="text-xs font-medium tracking-widest uppercase text-accent mb-4">
          Problem & Motivation
        </h2>
        <div className="space-y-4">
          <p className="text-muted leading-relaxed">
            Traditional search tools struggle with heterogeneous data — mixing structured
            databases, unstructured documents, and semi-structured metadata. NeuralSeek
            explores how ML-driven components can meaningfully improve the discovery
            experience in domain-specific contexts where generic search falls short.
          </p>
          <p className="text-muted leading-relaxed">
            The goal is not another generic search engine, but a system that demonstrates
            how embedding-based retrieval, learned ranking, and query understanding
            can work together in a cohesive pipeline.
          </p>
        </div>
      </motion.section>

      {/* ── Architecture ── */}
      <motion.section {...sectionAnim} className="mt-12">
        <h2 className="text-xs font-medium tracking-widest uppercase text-accent mb-4">
          System Architecture
        </h2>
        <MediaPlaceholder
          type="diagram"
          label="Architecture Diagram"
          description="Data pipeline → Embedding index → Ranking → Interface"
        />
      </motion.section>

      {/* ── Roadmap ── */}
      <motion.section {...sectionAnim} className="mt-12">
        <h2 className="text-xs font-medium tracking-widest uppercase text-accent mb-4">
          Roadmap
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* What's Built */}
          <div className="p-6 rounded-2xl border border-border bg-surface">
            <h3 className="text-sm font-semibold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-accent" />
              What&apos;s Built
            </h3>
            <ul className="space-y-3">
              {built.map((item, i) => (
                <li key={i} className="flex gap-2.5 text-sm text-muted">
                  <CheckCircle size={16} className="text-accent shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* What's Next */}
          <div className="p-6 rounded-2xl border border-border bg-surface">
            <h3 className="text-sm font-semibold mb-4 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              What&apos;s Next
            </h3>
            <ul className="space-y-3">
              {next.map((item, i) => (
                <li key={i} className="flex gap-2.5 text-sm text-muted">
                  <Circle size={16} className="text-muted/40 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.section>

      {/* ── Demo ── */}
      <motion.section {...sectionAnim} className="mt-12">
        <h2 className="text-xs font-medium tracking-widest uppercase text-accent mb-4">
          Demo
        </h2>
        <VideoEmbed placeholder="NeuralSeek Demo Video" />
      </motion.section>
    </>
  );
}
