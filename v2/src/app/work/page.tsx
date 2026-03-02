"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import WorkCard from "@/components/WorkCard";
import { work, categoryLabels, WorkCategory } from "@/data/work";

const categories: (WorkCategory | "all")[] = [
  "all",
  "research",
  "product",
  "systems",
  "data",
  "applied-ml",
  "platform",
];

export default function WorkPage() {
  const [filter, setFilter] = useState<WorkCategory | "all">("all");

  const filtered = filter === "all" ? work : work.filter((w) => w.category === filter);

  return (
    <div className="max-w-6xl mx-auto px-6 py-24">
      <SectionHeading
        label="Projects"
        title="Projects & Research"
        description="Research, products, and technical projects across AI, systems, and data — from undergraduate research to personal builds."
      />

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-10">
        {categories.map((cat) => {
          const isActive = filter === cat;
          const label = cat === "all" ? "All" : categoryLabels[cat];
          // Only show categories that have items
          if (cat !== "all" && !work.some((w) => w.category === cat)) return null;
          return (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3 py-1.5 text-xs font-medium tracking-wide uppercase rounded-full transition-all duration-200 ${
                isActive
                  ? "bg-accent text-background"
                  : "bg-surface text-muted hover:text-foreground border border-border"
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>

      {/* Work Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={filter}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filtered.map((item, i) => (
            <WorkCard key={item.slug} item={item} index={i} />
          ))}
        </motion.div>
      </AnimatePresence>

      {filtered.length === 0 && (
        <p className="text-center text-muted py-12">No items in this category yet.</p>
      )}
    </div>
  );
}
