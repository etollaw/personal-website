"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Experience } from "@/data/experiences";

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

export default function ExperienceCard({ experience, index }: ExperienceCardProps) {
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
        <div className="w-3 h-3 rounded-full border-2 border-accent bg-background group-hover:bg-accent transition-colors" />
        <div className="w-px flex-1 bg-border mt-2" />
      </div>

      {/* Image */}
      {experience.image && (
        <div className="hidden sm:block shrink-0 w-16 h-16 rounded-xl overflow-hidden border border-border">
          <Image
            src={experience.image}
            alt={experience.title}
            width={64}
            height={64}
            className="object-cover w-full h-full"
          />
        </div>
      )}

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
          <h3 className="font-semibold group-hover:text-accent transition-colors">
            {experience.title}
          </h3>
          {experience.period && (
            <span className="text-xs font-medium text-accent bg-accent-light px-2 py-0.5 rounded-full w-fit">
              {experience.period}
            </span>
          )}
        </div>
        <p className="text-sm text-muted mt-0.5">{experience.organization}</p>
        <p className="text-sm text-muted mt-2 leading-relaxed">
          {experience.description}
        </p>
      </div>
    </motion.div>
  );
}
