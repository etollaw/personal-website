"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Globe,
  Brain,
  BarChart3,
  Wrench,
  Users,
  type LucideIcon,
} from "lucide-react";
import { SkillCategory } from "@/data/skills";

const iconMap: Record<string, LucideIcon> = {
  Code2,
  Globe,
  Brain,
  BarChart3,
  Wrench,
  Users,
};

interface SkillCardProps {
  skill: SkillCategory;
  index: number;
}

export default function SkillCard({ skill, index }: SkillCardProps) {
  const Icon = iconMap[skill.icon] || Code2;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group p-6 rounded-2xl border border-border bg-surface hover:border-accent/20 transition-all duration-300"
    >
      <div className="w-10 h-10 rounded-xl bg-accent-light flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
        <Icon size={20} className="text-accent" />
      </div>
      <h3 className="font-semibold text-base group-hover:text-accent transition-colors">
        {skill.title}
      </h3>
      <p className="mt-2 text-sm text-muted leading-relaxed">
        {skill.description}
      </p>
    </motion.div>
  );
}
