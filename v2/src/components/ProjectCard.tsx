"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
  featured?: boolean;
}

export default function ProjectCard({ project, index, featured }: ProjectCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group relative overflow-hidden rounded-2xl border border-border bg-surface hover:border-accent/20 transition-all duration-300 ${
        featured ? "md:col-span-2 md:row-span-2" : ""
      }`}
    >
      {/* Image */}
      {project.image && (
        <div className="relative h-48 overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent" />
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        <h3 className="text-lg font-semibold group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <p className="mt-2 text-sm text-muted leading-relaxed line-clamp-3">
          {project.description}
        </p>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-[10px] font-medium tracking-wide uppercase rounded-md bg-accent-light text-accent"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
