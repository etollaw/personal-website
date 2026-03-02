"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Emoji reaction bar for project & hackathon detail pages.
 *
 * Persistent via localStorage. Each page (identified by slug) gets
 * independent reaction counts. Users can react multiple times — each
 * click increments the count and triggers a micro-animation.
 *
 * Architecture: localStorage is the default store. The component is
 * structured so a backend (Supabase, etc.) can be plugged in later
 * by replacing the storage functions.
 *
 * Recruiter-safe: works offline, no external deps, graceful hydration.
 */

interface Reaction {
  emoji: string;
  label: string;
}

const reactions: Reaction[] = [
  { emoji: "🔥", label: "Impressive" },
  { emoji: "🚀", label: "Innovative" },
  { emoji: "💡", label: "Clever" },
  { emoji: "👏", label: "Well done" },
  { emoji: "🤯", label: "Mind-blown" },
];

interface ReactionCounts {
  [emoji: string]: number;
}

// ── Storage helpers (swap these for a backend later) ──

function getStorageKey(slug: string) {
  return `reactions:${slug}`;
}

function loadReactions(slug: string): ReactionCounts {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(getStorageKey(slug));
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function saveReactions(slug: string, counts: ReactionCounts) {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(getStorageKey(slug), JSON.stringify(counts));
  } catch {
    // localStorage full or unavailable — fail silently
  }
}

// ── Floating particle animation ──

interface Particle {
  id: number;
  emoji: string;
  x: number;
}

let particleId = 0;

// ── Component ──

interface ReactionsProps {
  slug: string;
}

export default function Reactions({ slug }: ReactionsProps) {
  const [counts, setCounts] = useState<ReactionCounts>({});
  const [hydrated, setHydrated] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);
  const [hoveredEmoji, setHoveredEmoji] = useState<string | null>(null);
  const timeoutRefs = useRef<Map<number, NodeJS.Timeout>>(new Map());

  // Hydrate from localStorage after mount (avoids SSR mismatch)
  useEffect(() => {
    setCounts(loadReactions(slug));
    setHydrated(true);
  }, [slug]);

  const handleReaction = useCallback(
    (emoji: string) => {
      setCounts((prev) => {
        const updated = { ...prev, [emoji]: (prev[emoji] || 0) + 1 };
        saveReactions(slug, updated);
        return updated;
      });

      // Spawn floating particle
      const id = ++particleId;
      const x = (Math.random() - 0.5) * 40; // random horizontal offset
      setParticles((prev) => [...prev, { id, emoji, x }]);

      // Remove particle after animation
      const timeout = setTimeout(() => {
        setParticles((prev) => prev.filter((p) => p.id !== id));
        timeoutRefs.current.delete(id);
      }, 800);
      timeoutRefs.current.set(id, timeout);
    },
    [slug]
  );

  // Cleanup timeouts on unmount
  useEffect(() => {
    const refs = timeoutRefs.current;
    return () => {
      refs.forEach((t) => clearTimeout(t));
    };
  }, []);

  const totalReactions = Object.values(counts).reduce((a, b) => a + b, 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mt-16 pt-8 border-t border-border"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <p className="text-xs font-medium tracking-widest uppercase text-muted">
          Reactions
        </p>
        {hydrated && totalReactions > 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xs text-muted"
          >
            {totalReactions} reaction{totalReactions !== 1 ? "s" : ""}
          </motion.p>
        )}
      </div>

      {/* Reaction buttons */}
      <div className="flex flex-wrap gap-2">
        {reactions.map((reaction) => {
          const count = counts[reaction.emoji] || 0;
          const isActive = count > 0;

          return (
            <div key={reaction.emoji} className="relative">
              {/* Floating particles */}
              <AnimatePresence>
                {particles
                  .filter((p) => p.emoji === reaction.emoji)
                  .map((particle) => (
                    <motion.span
                      key={particle.id}
                      initial={{ opacity: 1, y: 0, x: particle.x, scale: 1 }}
                      animate={{ opacity: 0, y: -50, scale: 1.3 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.7, ease: "easeOut" }}
                      className="absolute -top-2 left-1/2 -translate-x-1/2 pointer-events-none text-lg z-10"
                    >
                      {particle.emoji}
                    </motion.span>
                  ))}
              </AnimatePresence>

              {/* Button */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onMouseEnter={() => setHoveredEmoji(reaction.emoji)}
                onMouseLeave={() => setHoveredEmoji(null)}
                onClick={() => handleReaction(reaction.emoji)}
                className={`relative flex items-center gap-2 px-3.5 py-2 rounded-full border text-sm transition-all duration-200 select-none ${
                  isActive
                    ? "border-accent/30 bg-accent-light"
                    : "border-border bg-surface hover:border-accent/20 hover:bg-accent-light"
                }`}
                aria-label={`React with ${reaction.label}`}
              >
                <span className="text-base leading-none">{reaction.emoji}</span>
                {hydrated && count > 0 && (
                  <motion.span
                    key={count}
                    initial={{ scale: 1.4, opacity: 0.7 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-xs font-medium text-foreground min-w-[1ch] tabular-nums"
                  >
                    {count}
                  </motion.span>
                )}
              </motion.button>

              {/* Tooltip */}
              <AnimatePresence>
                {hoveredEmoji === reaction.emoji && (
                  <motion.div
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 4 }}
                    transition={{ duration: 0.15 }}
                    className="absolute -top-9 left-1/2 -translate-x-1/2 px-2 py-1 text-[10px] font-medium tracking-wide uppercase text-muted bg-surface border border-border rounded-md whitespace-nowrap z-20 pointer-events-none"
                  >
                    {reaction.label}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
