"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { Experience } from "@/data/experiences";

interface ExperienceCardProps {
  experience: Experience;
  index: number;
  /** Hide bullet points (used on the home page). */
  compact?: boolean;
}

export default function ExperienceCard({ experience, index, compact }: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative flex gap-6 py-6 border-b border-border last:border-b-0 hover:bg-surface -mx-4 px-4 rounded-xl transition-colors duration-200"
    >
      {/* Timeline dot */}
      <div className="flex flex-col items-center pt-1.5">
        <div
          className={`w-3 h-3 rounded-full border-2 border-accent transition-colors ${
            experience.current ? "bg-accent" : "bg-background group-hover:bg-accent"
          }`}
        />
        <div className="w-px flex-1 bg-border mt-2" />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-3">
          <h3 className="font-semibold group-hover:text-accent transition-colors">
            {experience.title}
          </h3>
          {experience.period && (
            <span className="text-xs font-medium text-accent bg-accent-light px-2 py-0.5 rounded-full w-fit shrink-0">
              {experience.period}
            </span>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-0.5 text-sm text-muted">
          <span className="text-foreground/80">{experience.organization}</span>
          {experience.location && (
            <span className="inline-flex items-center gap-1 text-xs">
              <MapPin size={12} />
              {experience.location}
            </span>
          )}
        </div>

        <p className="text-sm text-muted mt-2 leading-relaxed">{experience.description}</p>

        {!compact && experience.highlights && experience.highlights.length > 0 && (
          <ul className="mt-3 space-y-2">
            {experience.highlights.map((h) => (
              <li key={h} className="flex gap-2.5 text-sm text-muted leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                {h}
              </li>
            ))}
          </ul>
        )}

        {experience.tags && experience.tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {experience.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 text-[10px] font-medium tracking-wide uppercase rounded-md bg-white/5 text-muted"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}
