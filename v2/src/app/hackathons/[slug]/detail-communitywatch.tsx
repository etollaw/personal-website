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

const platformFeatures = [
  {
    title: "Issue Reporting",
    description:
      "Residents report infrastructure/environmental issues with location tagging. Reports are stored in Supabase and linked to geographic data.",
  },
  {
    title: "Disparity Dashboard",
    description:
      "Interactive Leaflet map with toggle-able HOLC redlining overlay. Visualizes the relationship between historical segregation and current service gaps.",
  },
  {
    title: "Equity Badge",
    description:
      "Each report includes an equity badge showing whether the location falls within a historically redlined zone, with estimated response-time differences.",
  },
  {
    title: "Auto-Advocate Tool",
    description:
      "Generates professional, 311-ready complaint text from report data. One-click copy and direct link to the 311 portal.",
  },
];

export default function CommunityWatchDetail() {
  return (
    <>
      {/* ── Core Value ── */}
      <motion.section {...sectionAnim}>
        <h2 className="text-xs font-medium tracking-widest uppercase text-accent mb-4">
          Core Value Proposition
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-5 rounded-2xl border border-border bg-surface">
            <h3 className="text-sm font-semibold text-muted mb-2">311 (Status Quo)</h3>
            <p className="text-sm text-muted leading-relaxed">
              Individual complaint → single ticket → no context on systemic patterns.
              Each report exists in isolation.
            </p>
          </div>
          <div className="p-5 rounded-2xl border border-accent/20 bg-surface">
            <h3 className="text-sm font-semibold text-accent mb-2">CommunityWatch</h3>
            <p className="text-sm text-muted leading-relaxed">
              Pattern + context + accountability. Connects reports to historical
              redlining data to surface systemic inequity — not just individual issues.
            </p>
          </div>
        </div>
      </motion.section>

      {/* ── Platform Features ── */}
      <motion.section {...sectionAnim} className="mt-12">
        <h2 className="text-xs font-medium tracking-widest uppercase text-accent mb-4">
          Platform Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {platformFeatures.map((feature) => (
            <div
              key={feature.title}
              className="p-5 rounded-2xl border border-border bg-surface"
            >
              <h3 className="text-sm font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* ── Disparity Snapshot ── */}
      <motion.section {...sectionAnim} className="mt-12">
        <h2 className="text-xs font-medium tracking-widest uppercase text-accent mb-4">
          Disparity Data
        </h2>
        <div className="p-6 rounded-2xl border border-border bg-surface">
          <p className="text-muted leading-relaxed mb-4">
            The platform surfaces concrete patterns — for example, infrastructure reports in
            historically redlined areas show significantly longer average response times. The
            landing page includes a real-time disparity snapshot to give residents immediate
            context for their experiences.
          </p>
          <div className="inline-flex items-baseline gap-2 px-4 py-2 rounded-lg bg-red-500/10 border border-red-500/20">
            <span className="text-2xl font-bold text-red-400">2.3×</span>
            <span className="text-sm text-muted">slower response in redlined areas</span>
          </div>
        </div>
      </motion.section>

      {/* ── Map + Screenshots ── */}
      <motion.section {...sectionAnim} className="mt-12">
        <h2 className="text-xs font-medium tracking-widest uppercase text-accent mb-4">
          Screenshots
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <MediaPlaceholder
            type="image"
            label="Disparity Dashboard"
            description="Leaflet map with HOLC redlining overlay"
          />
          <MediaPlaceholder
            type="image"
            label="Equity Badge"
            description="Report detail showing redline zone + response gap"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <MediaPlaceholder
            type="image"
            label="Report Submission"
            description="Issue reporting interface with location"
          />
          <MediaPlaceholder
            type="image"
            label="Auto-Advocate Output"
            description="Generated 311-ready complaint text"
          />
        </div>
      </motion.section>

      {/* ── Demo ── */}
      <motion.section {...sectionAnim} className="mt-12">
        <VideoEmbed placeholder="CommunityWatch Platform Demo" />
      </motion.section>
    </>
  );
}
