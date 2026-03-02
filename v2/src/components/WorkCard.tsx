"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { WorkItem, categoryLabels, statusLabels } from "@/data/work";

interface WorkCardProps {
  item: WorkItem;
  index: number;
}

export default function WorkCard({ item, index }: WorkCardProps) {
  const inner = (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative overflow-hidden rounded-2xl border border-border bg-surface hover:border-accent/20 transition-all duration-300 flex flex-col h-full"
    >
      {/* Image */}
      {item.image && (
        <div className="relative h-48 overflow-hidden">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent" />
        </div>
      )}

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        {/* Category + Status badges */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[10px] font-medium tracking-widest uppercase text-accent bg-accent-light px-2 py-0.5 rounded-full">
            {categoryLabels[item.category]}
          </span>
          {item.status === "in-progress" && (
            <span className="text-[10px] font-medium tracking-widest uppercase text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded-full">
              {statusLabels[item.status]}
            </span>
          )}
        </div>

        <h3 className="text-lg font-semibold group-hover:text-accent transition-colors leading-snug">
          {item.title}
        </h3>
        {item.subtitle && (
          <p className="text-xs text-muted mt-1">{item.subtitle}</p>
        )}
        <p className="mt-3 text-sm text-muted leading-relaxed line-clamp-3 flex-1">
          {item.description}
        </p>

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {item.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-[10px] font-medium tracking-wide uppercase rounded-md bg-white/5 text-muted"
            >
              {tag}
            </span>
          ))}
          {item.tags.length > 4 && (
            <span className="px-2 py-0.5 text-[10px] text-muted">
              +{item.tags.length - 4}
            </span>
          )}
        </div>

        {/* Detail page indicator */}
        {item.hasDetailPage && (
          <div className="mt-4 pt-4 border-t border-border flex items-center gap-1.5 text-xs text-muted group-hover:text-accent transition-colors">
            View details
            <ArrowUpRight size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </div>
        )}
      </div>
    </motion.article>
  );

  if (item.hasDetailPage) {
    return (
      <Link href={`/work/${item.slug}`} className="block h-full">
        {inner}
      </Link>
    );
  }

  return inner;
}
