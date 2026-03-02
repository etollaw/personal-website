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

const designValues = [
  {
    title: "Accessibility-First",
    description:
      "Not an afterthought — clear typography, high contrast, minimal cognitive load, touch-friendly controls. Designed with neurodiverse learners in mind.",
  },
  {
    title: "Audio-Forward Learning",
    description:
      "Letter- and word-level pronunciation audio as the primary learning channel. Supports repetition, slow-play, and audio-visual pairing.",
  },
  {
    title: "Culturally Respectful",
    description:
      "Content designed with cultural context and linguistic nuance. No romanization shortcuts — learners engage with the script directly.",
  },
  {
    title: "Multiple Learning Styles",
    description:
      "Visual, auditory, and interactive modalities. Matching exercises, sentence completion, and context-based learning.",
  },
];

const built = [
  "Core architecture and data models (letters, words, phrases, lessons)",
  "Supabase backend: auth, database, and audio storage pipeline",
  "Audio pipeline for letter-level and basic vocabulary pronunciation",
  "UI component library under active iteration",
  "MVP scope definition and learning path design",
];

const next = [
  "Expand from letters to full vocabulary and phrase-level content",
  "Add adaptive learning logic based on learner interaction",
  "Introduce user progress tracking, streaks, and review scheduling",
  "Interactive matching exercises (Amharic ↔ English)",
  "Number and symbol recognition exercises",
  "Integrate speech feedback and pronunciation evaluation",
  "Support additional underrepresented languages",
  "User testing with real learners",
];

export default function LisanDetail() {
  return (
    <>
      {/* ── Motivation ── */}
      <motion.section {...sectionAnim}>
        <h2 className="text-xs font-medium tracking-widest uppercase text-accent mb-4">
          Motivation
        </h2>
        <div className="space-y-4">
          <p className="text-muted leading-relaxed">
            Lisan is inspired by my lived experience growing up between cultures
            and languages. Many widely used language platforms fail to adequately
            support underrepresented languages or prioritize accessibility for
            learners with different cognitive, auditory, or educational needs.
          </p>
          <p className="text-muted leading-relaxed">
            The name &quot;Lisan&quot; (ልሳን) means &quot;language&quot; or
            &quot;tongue&quot; in Amharic. The platform starts with Amharic — one
            of the most widely spoken Semitic languages in the world, yet poorly
            served by existing learning tools — with a vision to expand to other
            underrepresented languages.
          </p>
        </div>
      </motion.section>

      {/* ── Design Values ── */}
      <motion.section {...sectionAnim} className="mt-12">
        <h2 className="text-xs font-medium tracking-widest uppercase text-accent mb-4">
          Design Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {designValues.map((value) => (
            <div
              key={value.title}
              className="p-5 rounded-2xl border border-border bg-surface"
            >
              <h3 className="text-sm font-semibold mb-2">{value.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* ── Architecture ── */}
      <motion.section {...sectionAnim} className="mt-12">
        <h2 className="text-xs font-medium tracking-widest uppercase text-accent mb-4">
          Architecture
        </h2>
        <div className="space-y-4 mb-6">
          <p className="text-muted leading-relaxed">
            Lisan uses Supabase as a unified backend — handling authentication,
            database, and audio file storage in a single platform. Audio files are
            stored and served efficiently for low-latency playback. The data models
            are structured to scale from individual letters to words, phrases, and
            full interactive exercises.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
          <div className="p-4 rounded-xl border border-border bg-surface text-center">
            <p className="text-xs text-muted uppercase tracking-wider mb-1">Frontend</p>
            <p className="text-sm font-medium">Next.js + React</p>
          </div>
          <div className="p-4 rounded-xl border border-border bg-surface text-center">
            <p className="text-xs text-muted uppercase tracking-wider mb-1">Backend</p>
            <p className="text-sm font-medium">Supabase (Auth, DB, Storage)</p>
          </div>
          <div className="p-4 rounded-xl border border-border bg-surface text-center">
            <p className="text-xs text-muted uppercase tracking-wider mb-1">Audio</p>
            <p className="text-sm font-medium">Letter + Word Pronunciation</p>
          </div>
        </div>
        <MediaPlaceholder
          type="diagram"
          label="System Architecture Diagram"
          description="Frontend → Supabase → Audio Pipeline → Learning Engine"
        />
      </motion.section>

      {/* ── Learning Experience ── */}
      <motion.section {...sectionAnim} className="mt-12">
        <h2 className="text-xs font-medium tracking-widest uppercase text-accent mb-4">
          Learning Experience (Planned)
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            "Audio-based pronunciation drills",
            "Visual + audio pairing for vocabulary",
            "Interactive matching (Amharic ↔ English)",
            "Sentence completion & context learning",
            "Number and symbol recognition",
            "Adaptive progression based on interaction",
          ].map((item) => (
            <div
              key={item}
              className="flex gap-2.5 p-3 rounded-xl border border-border bg-surface text-sm text-muted"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
              {item}
            </div>
          ))}
        </div>
      </motion.section>

      {/* ── Roadmap ── */}
      <motion.section {...sectionAnim} className="mt-12">
        <h2 className="text-xs font-medium tracking-widest uppercase text-accent mb-4">
          Roadmap
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

      {/* ── Demo / Screenshots ── */}
      <motion.section {...sectionAnim} className="mt-12">
        <h2 className="text-xs font-medium tracking-widest uppercase text-accent mb-4">
          Preview
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <MediaPlaceholder
            type="image"
            label="Learning Interface"
            description="Letter recognition and pronunciation drill"
          />
          <MediaPlaceholder
            type="image"
            label="Audio Playback UI"
            description="Pronunciation with visual feedback"
          />
        </div>
        <VideoEmbed placeholder="Lisan Platform Demo" />
      </motion.section>

      {/* ── Philosophy ── */}
      <motion.section {...sectionAnim} className="mt-12">
        <h2 className="text-xs font-medium tracking-widest uppercase text-accent mb-4">
          Philosophy
        </h2>
        <div className="p-6 rounded-2xl border border-border bg-surface">
          <p className="text-sm text-muted leading-relaxed">
            Lisan is intentionally iterative. The goal is not rapid feature accumulation,
            but{" "}
            <span className="text-foreground font-medium">
              thoughtful design that balances pedagogy, accessibility, and technical
              scalability
            </span>
            . Every design decision is guided by the question: does this actually help
            someone learn? The platform is a long-term vision — a serious tool for
            language preservation and accessible education, not a side project.
          </p>
        </div>
      </motion.section>
    </>
  );
}
