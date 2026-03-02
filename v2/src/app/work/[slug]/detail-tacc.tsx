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

export default function TACCDetail() {
  return (
    <>
      {/* ── Methodology ── */}
      <motion.section {...sectionAnim}>
        <h2 className="text-xs font-medium tracking-widest uppercase text-accent mb-4">
          Methodology
        </h2>
        <div className="space-y-4">
          <p className="text-muted leading-relaxed">
            The experimental setup used the Pac-Man environment as a testing ground for
            approximate Q-learning with feature-based state representations. Rather than
            learning entirely from scratch (cold start), I explored whether search-based
            planning priors — specifically suboptimal pathfinding trajectories — could
            warm-start Q-values and accelerate learning.
          </p>
          <p className="text-muted leading-relaxed">
            The pipeline involved three phases: (1) generating trajectory data from
            search/pathfinding algorithms run on the same environment, (2) using those
            trajectories to initialize approximate Q-values before training, and (3)
            comparing cold-start vs warm-start agents across convergence speed, cumulative
            reward, and policy stability over multiple independent runs.
          </p>
        </div>
      </motion.section>

      {/* ── Evaluation & Results ── */}
      <motion.section {...sectionAnim} className="mt-12">
        <h2 className="text-xs font-medium tracking-widest uppercase text-accent mb-4">
          Evaluation & Results
        </h2>
        <div className="space-y-4 mb-8">
          <p className="text-muted leading-relaxed">
            Warm-started agents consistently achieved faster convergence — reaching
            near-optimal policies in fewer training episodes compared to cold-start
            baselines. Policy stability also improved, with lower variance in cumulative
            reward across independent runs.
          </p>
          <p className="text-muted leading-relaxed">
            Results were evaluated quantitatively through learning curves, reward
            distributions, and convergence plots across multiple random seeds. The
            findings contribute to a broader understanding of how planning-based priors
            can complement model-free reinforcement learning.
          </p>
        </div>

        {/* Placeholder for figures */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <MediaPlaceholder
            type="figure"
            label="Learning Curve Comparison"
            description="Cold-start vs warm-start convergence"
          />
          <MediaPlaceholder
            type="figure"
            label="Cumulative Reward Distribution"
            description="Across multiple independent runs"
          />
        </div>
      </motion.section>

      {/* ── Deliverables ── */}
      <motion.section {...sectionAnim} className="mt-12">
        <h2 className="text-xs font-medium tracking-widest uppercase text-accent mb-4">
          Deliverables
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <MediaPlaceholder
            type="pdf"
            label="Research Paper (PDF)"
            description="Full paper with methodology and results"
          />
          <MediaPlaceholder
            type="poster"
            label="Academic Poster"
            description="Presented at TACC REU symposium"
          />
        </div>
      </motion.section>

      {/* ── Presentation & Demo ── */}
      <motion.section {...sectionAnim} className="mt-12">
        <h2 className="text-xs font-medium tracking-widest uppercase text-accent mb-4">
          Presentation
        </h2>
        <VideoEmbed
          placeholder="Research Presentation / Talk"
        />
      </motion.section>

      {/* ── Photos from the REU ── */}
      <motion.section {...sectionAnim} className="mt-12">
        <h2 className="text-xs font-medium tracking-widest uppercase text-accent mb-4">
          Photos
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          <MediaPlaceholder
            type="photo"
            label="REU Cohort"
            aspectRatio="4/3"
          />
          <MediaPlaceholder
            type="photo"
            label="Poster Presentation"
            aspectRatio="4/3"
          />
          <MediaPlaceholder
            type="photo"
            label="TACC Facility"
            aspectRatio="4/3"
          />
        </div>
      </motion.section>

      {/* ── Research Context ── */}
      <motion.section {...sectionAnim} className="mt-12">
        <h2 className="text-xs font-medium tracking-widest uppercase text-accent mb-4">
          Research Context
        </h2>
        <div className="p-6 rounded-2xl border border-border bg-surface">
          <p className="text-sm text-muted leading-relaxed">
            This research was conducted as part of the{" "}
            <span className="text-foreground font-medium">
              NSF Cyberinfrastructure REU Program
            </span>{" "}
            at the Texas Advanced Computing Center (TACC) at UT Austin during Summer
            2025. The program supports undergraduate research at the intersection of
            high-performance computing and computational science.
          </p>
          <p className="text-sm text-muted leading-relaxed mt-3">
            The work sits at the boundary of reinforcement learning and classical AI
            planning — exploring how search-based methods can provide useful inductive
            biases for model-free learning agents. This hybrid approach has implications
            for settings where planning is feasible but imperfect, and learning is
            needed for long-term optimization.
          </p>
        </div>
      </motion.section>
    </>
  );
}
