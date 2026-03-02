"use client";

import { motion } from "framer-motion";
import MediaPlaceholder from "@/components/MediaPlaceholder";

const sectionAnim = {
  initial: { opacity: 0, y: 15 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true as const },
  transition: { duration: 0.5 },
};

const topics = [
  {
    title: "Memory Management",
    description:
      "Manual allocation and deallocation using malloc/free, pointer arithmetic, buffer handling, and common pitfalls (use-after-free, double free, buffer overflows).",
  },
  {
    title: "Data Structures",
    description:
      "Implementing core data structures (linked lists, hash tables, trees, graphs) at the systems level — reasoning about memory layout, cache behavior, and algorithmic complexity.",
  },
  {
    title: "Debugging & Tooling",
    description:
      "Debugging workflows using GDB and Valgrind. Understanding compilation and linking pipelines, object files, and symbol resolution.",
  },
  {
    title: "Performance",
    description:
      "Reasoning about performance at the instruction level. Understanding how compiler optimizations, cache locality, and data alignment affect execution speed.",
  },
];

export default function SystemsDetail() {
  return (
    <>
      {/* ── Why Systems Programming Matters ── */}
      <motion.section {...sectionAnim}>
        <h2 className="text-xs font-medium tracking-widest uppercase text-accent mb-4">
          Why This Matters
        </h2>
        <div className="space-y-4">
          <p className="text-muted leading-relaxed">
            Understanding systems-level programming is essential for writing efficient,
            correct software — especially in performance-critical domains like ML
            infrastructure, high-performance computing, and embedded systems. This
            coursework provides a foundation that complements my higher-level ML and
            data science work.
          </p>
          <p className="text-muted leading-relaxed">
            Working in C demands a level of precision and rigor that translates to
            better engineering everywhere: understanding what happens beneath the
            abstractions, debugging at the hardware level, and reasoning about
            correctness without garbage collection or safety nets.
          </p>
        </div>
      </motion.section>

      {/* ── Topics Grid ── */}
      <motion.section {...sectionAnim} className="mt-12">
        <h2 className="text-xs font-medium tracking-widest uppercase text-accent mb-4">
          Core Topics
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {topics.map((topic) => (
            <div
              key={topic.title}
              className="p-5 rounded-2xl border border-border bg-surface"
            >
              <h3 className="text-sm font-semibold mb-2">{topic.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{topic.description}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* ── Sample Work ── */}
      <motion.section {...sectionAnim} className="mt-12">
        <h2 className="text-xs font-medium tracking-widest uppercase text-accent mb-4">
          Sample Work
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <MediaPlaceholder
            type="image"
            label="Project Screenshot"
            description="Course project implementation"
          />
          <MediaPlaceholder
            type="image"
            label="Code Sample"
            description="Systems-level C implementation"
          />
        </div>
      </motion.section>
    </>
  );
}
