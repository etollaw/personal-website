"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Gradient orb */}
      <div className="absolute top-1/4 -right-32 w-96 h-96 bg-accent rounded-full opacity-[0.05] blur-[120px]" />
      <div className="absolute bottom-1/4 -left-32 w-80 h-80 bg-purple-500 rounded-full opacity-[0.04] blur-[100px]" />

      <div className="relative max-w-6xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="max-w-3xl"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-block px-3 py-1 mb-6 text-xs font-medium tracking-widest uppercase border border-border rounded-full text-accent"
          >
            Computer Science @ Columbia University
          </motion.div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
            <span className="block">Hello.</span>
            <span className="block mt-2">
              I&apos;m{" "}
              <span className="text-accent">Eldad</span>.
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-6 text-lg sm:text-xl text-muted leading-relaxed max-w-xl"
          >
            Researcher and builder focused on AI, machine learning, and
            data-driven solutions. Originally from Ethiopia, now building at the
            intersection of technology and social impact.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="/work"
              className="px-6 py-3 bg-accent text-background font-medium text-sm rounded-lg hover:opacity-90 transition-opacity"
            >
              View Projects
            </a>
            <a
              href="/contact"
              className="px-6 py-3 border border-border text-sm font-medium rounded-lg hover:bg-surface transition-colors"
            >
              Get in Touch
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <ArrowDown size={18} className="text-muted" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
