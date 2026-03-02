"use client";

import { motion } from "framer-motion";
import MediaPlaceholder from "@/components/MediaPlaceholder";
import VideoEmbed from "@/components/VideoEmbed";

const sectionAnim = {
  initial: { opacity: 0, y: 15 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true as const },
  transition: { duration: 0.5 },
};

const agents = [
  {
    name: "Pattern Finder",
    input: "Contracts, donations, officials",
    task: "Detects statistical outliers, flags suspicious donation-to-vote timing, identifies officials receiving donations from entities they later vote for.",
    output: "Anomalies with confidence scores",
  },
  {
    name: "Timeline Builder",
    input: "Dated events (donations, votes, contracts)",
    task: "Chronologically orders events, identifies causal chains, computes time gaps between related actions.",
    output: "Human-readable investigative narrative",
  },
  {
    name: "Evidence Ranker",
    input: "Documents (PDFs, meeting minutes, donation records)",
    task: "Ranks evidence by strength and relevance, prioritizes primary sources and 1-hop graph connections.",
    output: "Ranked citation list",
  },
  {
    name: "Report Compiler",
    input: "Outputs from Agents 1–3",
    task: "Synthesizes findings into a structured investigative report, cites sources for every claim, acknowledges uncertainty.",
    output: "Structured report object",
  },
];

export default function SentinelDetail() {
  return (
    <>
      {/* ── My Role ── */}
      <motion.section {...sectionAnim}>
        <h2 className="text-xs font-medium tracking-widest uppercase text-accent mb-4">
          My Role
        </h2>
        <div className="p-6 rounded-2xl border border-border bg-surface">
          <h3 className="font-semibold text-lg mb-2">AI/ML & Multi-Agent Lead</h3>
          <p className="text-sm text-muted leading-relaxed">
            Responsible for the core AI reasoning layer and multi-agent orchestration.
            Designed the 4-agent pipeline, led LLM prompt engineering for factual outputs,
            built the investigation narrative system, and integrated ElevenLabs for
            auto-generated audio reports.
          </p>
        </div>
      </motion.section>

      {/* ── Multi-Agent Architecture ── */}
      <motion.section {...sectionAnim} className="mt-12">
        <h2 className="text-xs font-medium tracking-widest uppercase text-accent mb-4">
          Multi-Agent Architecture
        </h2>
        <p className="text-muted leading-relaxed mb-6">
          Sentinel uses four specialized agents orchestrated through Dedalus ADK,
          consuming graph data from a Neo4j database. Each agent has a distinct
          responsibility, and they chain together to produce a final investigative report.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {agents.map((agent, i) => (
            <div
              key={agent.name}
              className="p-5 rounded-2xl border border-border bg-surface"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="w-6 h-6 rounded-full bg-accent-light text-accent text-xs font-bold flex items-center justify-center">
                  {i + 1}
                </span>
                <h3 className="text-sm font-semibold">{agent.name}</h3>
              </div>
              <dl className="space-y-2 text-xs">
                <div>
                  <dt className="text-muted uppercase tracking-wider font-medium">Input</dt>
                  <dd className="text-foreground mt-0.5">{agent.input}</dd>
                </div>
                <div>
                  <dt className="text-muted uppercase tracking-wider font-medium">Task</dt>
                  <dd className="text-foreground mt-0.5 leading-relaxed">{agent.task}</dd>
                </div>
                <div>
                  <dt className="text-muted uppercase tracking-wider font-medium">Output</dt>
                  <dd className="text-accent font-medium mt-0.5">{agent.output}</dd>
                </div>
              </dl>
            </div>
          ))}
        </div>
      </motion.section>

      {/* ── Orchestration Flow ── */}
      <motion.section {...sectionAnim} className="mt-12">
        <h2 className="text-xs font-medium tracking-widest uppercase text-accent mb-4">
          Orchestration Flow
        </h2>
        <div className="space-y-4">
          <p className="text-muted leading-relaxed">
            The investigation engine chains all four agents together. It consumes graph
            data from Neo4j, runs each agent sequentially (Pattern Finder → Timeline
            Builder → Evidence Ranker → Report Compiler), then generates an audio script
            that ElevenLabs narrates in an NPR-style voice (&quot;Drew&quot;).
          </p>
          <p className="text-muted leading-relaxed">
            K2 Think&apos;s reasoning model assists with parsing fragmented raw data,
            chronologically ordering events into structured JSON, and preparing structured
            reports before audio generation. All audio files are cached locally to prevent
            demo failure.
          </p>
        </div>
        <div className="mt-6">
          <MediaPlaceholder
            type="diagram"
            label="Orchestration Pipeline Diagram"
            description="Neo4j → Agents 1–4 → Report + Audio"
          />
        </div>
      </motion.section>

      {/* ── Voice Generation ── */}
      <motion.section {...sectionAnim} className="mt-12">
        <h2 className="text-xs font-medium tracking-widest uppercase text-accent mb-4">
          Voice Generation
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="p-5 rounded-2xl border border-border bg-surface">
            <h3 className="text-sm font-semibold mb-2">ElevenLabs Integration</h3>
            <ul className="space-y-1.5 text-sm text-muted">
              <li>Voice: &quot;Drew&quot; (NPR-style)</li>
              <li>Tone: Objective, factual, non-sensational</li>
              <li>Script constrained to &lt;3 minutes</li>
              <li>All claims explicitly cited in narration</li>
            </ul>
          </div>
          <div className="p-5 rounded-2xl border border-border bg-surface">
            <h3 className="text-sm font-semibold mb-2">Responsible AI Practices</h3>
            <ul className="space-y-1.5 text-sm text-muted">
              <li>Every claim backed by source citations</li>
              <li>Uncertainty explicitly acknowledged</li>
              <li>No sensationalized or speculative language</li>
              <li>Fallback + caching for reliability</li>
            </ul>
          </div>
        </div>
        <VideoEmbed placeholder="Sentinel Demo — Audio Investigation Report" />
      </motion.section>

      {/* ── Screenshots ── */}
      <motion.section {...sectionAnim} className="mt-12">
        <h2 className="text-xs font-medium tracking-widest uppercase text-accent mb-4">
          Screenshots
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <MediaPlaceholder
            type="image"
            label="Dashboard UI"
            description="Investigation interface and report output"
          />
          <MediaPlaceholder
            type="image"
            label="Agent Pipeline Visualization"
            description="Multi-agent orchestration in action"
          />
        </div>
      </motion.section>

      {/* ── Context ── */}
      <motion.section {...sectionAnim} className="mt-12">
        <h2 className="text-xs font-medium tracking-widest uppercase text-accent mb-4">
          Context
        </h2>
        <div className="p-6 rounded-2xl border border-border bg-surface">
          <p className="text-sm text-muted leading-relaxed">
            Sentinel was built during{" "}
            <span className="text-foreground font-medium">
              DivHacks at Columbia University
            </span>
            , a 24-hour hackathon focused on using technology for social impact.
            The project demonstrates that responsible, citation-backed AI systems
            for public accountability are technically feasible — even within hackathon
            constraints. The multi-agent architecture provides a foundation that could
            be extended into a real investigative tool for journalists and researchers.
          </p>
        </div>
      </motion.section>
    </>
  );
}
