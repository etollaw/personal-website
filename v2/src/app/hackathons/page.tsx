"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import HackathonCard from "@/components/HackathonCard";
import { hackathons } from "@/data/hackathons";
import { Trophy, Clock, Users } from "lucide-react";

const stats = [
  { icon: Trophy, value: `${hackathons.length}`, label: "Hackathons" },
  { icon: Clock, value: "24–48h", label: "Build Windows" },
  { icon: Users, value: "End-to-End", label: "Demos Shipped" },
];

export default function HackathonsPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-24">
      <SectionHeading
        label="Hackathons"
        title="Rapid Builds"
        description="Shipping under pressure — end-to-end demos, collaborative builds, and clear narratives. Every project here was built from scratch within strict time constraints."
      />

      {/* Stats Banner */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-12"
      >
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="flex items-center gap-3 p-4 rounded-2xl border border-border bg-surface"
          >
            <div className="w-10 h-10 rounded-xl bg-accent-light flex items-center justify-center shrink-0">
              <stat.icon size={18} className="text-accent" />
            </div>
            <div>
              <p className="text-sm font-bold">{stat.value}</p>
              <p className="text-[10px] uppercase tracking-widest text-muted">{stat.label}</p>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Hackathon Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {hackathons.map((item, i) => (
          <HackathonCard key={item.slug} item={item} index={i} />
        ))}
      </div>
    </div>
  );
}
