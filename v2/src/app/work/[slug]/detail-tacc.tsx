"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, FileText, Presentation } from "lucide-react";

const sectionAnim = {
  initial: { opacity: 0, y: 15 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true as const },
  transition: { duration: 0.5 },
};

const results = [
  { value: "38–62%", label: "faster convergence vs. cold start" },
  { value: "67–133%", label: "higher final reward" },
  { value: "15", label: "experiments × 1,000 episodes" },
  { value: "90", label: "GPU HPC nodes" },
];

const deliverables = [
  {
    icon: FileText,
    title: "Research Paper",
    description: "Methodology, experiments, and results (PDF)",
    href: "/images/DRAFT PAPER2.pdf",
  },
  {
    icon: Presentation,
    title: "Academic Poster",
    description: "Presented to 50+ researchers at the TACC REU symposium",
    href: "/images/Tolla_TACC_42x56in.pdf",
  },
];

const photos = [
  { src: "/images/reupresentation.jpeg", caption: "Presenting the poster at the REU symposium" },
  { src: "/images/reucohort.jpeg", caption: "The 2025 REU cohort" },
  { src: "/images/taccfacility.jpeg", caption: "TACC facility, UT Austin" },
];

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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {results.map((r) => (
            <div key={r.label} className="p-4 rounded-2xl border border-border bg-surface">
              <p className="text-2xl font-bold text-accent tracking-tight">{r.value}</p>
              <p className="text-xs text-muted mt-1 leading-snug">{r.label}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* ── Deliverables ── */}
      <motion.section {...sectionAnim} className="mt-12">
        <h2 className="text-xs font-medium tracking-widest uppercase text-accent mb-4">
          Deliverables
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {deliverables.map((d) => (
            <a
              key={d.title}
              href={d.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-4 p-5 rounded-2xl border border-border bg-surface hover:border-accent/30 transition-colors"
            >
              <div className="w-10 h-10 rounded-xl bg-accent-light flex items-center justify-center shrink-0">
                <d.icon size={18} className="text-accent" />
              </div>
              <div className="flex-1">
                <p className="font-medium group-hover:text-accent transition-colors">{d.title}</p>
                <p className="text-sm text-muted mt-1">{d.description}</p>
              </div>
              <ArrowUpRight size={16} className="text-muted group-hover:text-accent transition-colors" />
            </a>
          ))}
        </div>
      </motion.section>

      {/* ── Photos from the REU ── */}
      <motion.section {...sectionAnim} className="mt-12">
        <h2 className="text-xs font-medium tracking-widest uppercase text-accent mb-4">
          Photos
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {photos.map((photo) => (
            <a
              key={photo.src}
              href={photo.src}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border">
                <Image
                  src={photo.src}
                  alt={photo.caption}
                  fill
                  sizes="(min-width: 640px) 300px, 100vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="text-xs text-muted mt-2">{photo.caption}</p>
            </a>
          ))}
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
