"use client";

import { motion } from "framer-motion";
import MediaPlaceholder from "@/components/MediaPlaceholder";
import VideoEmbed from "@/components/VideoEmbed";
import { BookOpen, Users, Gamepad2, Sparkles } from "lucide-react";

const sectionAnim = {
  initial: { opacity: 0, y: 15 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true as const },
  transition: { duration: 0.5 },
};

const highlights = [
  {
    icon: Gamepad2,
    title: "Gamified Learning",
    description:
      "Traditional studying reimagined as interactive gameplay — subject-based learning paths with scoring and progression.",
  },
  {
    icon: BookOpen,
    title: "Interactive Flashcards",
    description:
      "Full flashcard system working end-to-end, with creation, review, and progression tracking.",
  },
  {
    icon: Users,
    title: "User-Generated Content",
    description:
      "Users can create their own learning materials, building a community-driven knowledge base.",
  },
  {
    icon: Sparkles,
    title: "Clean UX Under Constraints",
    description:
      "Built a functional, intuitive learning interface in 24 hours — the flashcard UX went through three iterations.",
  },
];

export default function RecallRoyaleDetail() {
  return (
    <>
      {/* ── Inspiration ── */}
      <motion.section {...sectionAnim}>
        <h2 className="text-xs font-medium tracking-widest uppercase text-accent mb-4">
          Inspiration
        </h2>
        <div className="p-6 rounded-2xl border border-border bg-surface">
          <p className="text-sm text-muted leading-relaxed">
            Traditional studying is often dry and passive. We wanted to explore what
            happens when you make learning feel like playing — rewarding, interactive,
            and engaging enough that students return to it voluntarily.
          </p>
        </div>
      </motion.section>

      {/* ── Highlights Grid ── */}
      <motion.section {...sectionAnim} className="mt-12">
        <h2 className="text-xs font-medium tracking-widest uppercase text-accent mb-4">
          Key Highlights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {highlights.map((item) => (
            <div
              key={item.title}
              className="p-5 rounded-2xl border border-border bg-surface"
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 rounded-lg bg-accent-light flex items-center justify-center">
                  <item.icon size={16} className="text-accent" />
                </div>
                <h3 className="text-sm font-semibold">{item.title}</h3>
              </div>
              <p className="text-sm text-muted leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* ── Architecture ── */}
      <motion.section {...sectionAnim} className="mt-12">
        <h2 className="text-xs font-medium tracking-widest uppercase text-accent mb-4">
          Architecture
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div className="p-4 rounded-xl border border-border bg-surface text-center">
            <p className="text-xs text-muted uppercase tracking-wider mb-1">Backend</p>
            <p className="text-sm font-medium">Flask (Python)</p>
          </div>
          <div className="p-4 rounded-xl border border-border bg-surface text-center">
            <p className="text-xs text-muted uppercase tracking-wider mb-1">Frontend</p>
            <p className="text-sm font-medium">HTML / CSS / JavaScript</p>
          </div>
          <div className="p-4 rounded-xl border border-border bg-surface text-center">
            <p className="text-xs text-muted uppercase tracking-wider mb-1">Database</p>
            <p className="text-sm font-medium">SQLite</p>
          </div>
        </div>
        <p className="text-sm text-muted leading-relaxed">
          A deliberately lightweight stack — Flask handles routing and API logic,
          SQLite stores user content and flashcard data, and vanilla HTML/CSS/JS
          keeps the frontend snappy without build tooling overhead. The constraint
          was intentional: ship fast, iterate on UX, prove the concept.
        </p>
      </motion.section>

      {/* ── What&apos;s Next ── */}
      <motion.section {...sectionAnim} className="mt-12">
        <h2 className="text-xs font-medium tracking-widest uppercase text-accent mb-4">
          What&apos;s Next
        </h2>
        <div className="space-y-2">
          {[
            "Add more gamification mechanics (streaks, leaderboards, timed challenges)",
            "Personalized learning paths based on user performance",
            "Expand community features for collaborative content creation",
            "Mobile-responsive redesign for on-the-go studying",
          ].map((item, i) => (
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <MediaPlaceholder
            type="image"
            label="Learning Interface"
            description="Subject selection and flashcard view"
          />
          <MediaPlaceholder
            type="image"
            label="Content Creation"
            description="User-generated flashcard builder"
          />
        </div>
        <VideoEmbed placeholder="Recall Royale Demo" />
      </motion.section>
    </>
  );
}
