"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock, User } from "lucide-react";
import { HackathonItem } from "@/data/hackathons";

interface HackathonCardProps {
  item: HackathonItem;
  index: number;
}

export default function HackathonCard({ item, index }: HackathonCardProps) {
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
            alt={item.name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent" />

          {/* Duration badge */}
          <div className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-background/80 backdrop-blur-sm border border-border">
            <Clock size={12} className="text-accent" />
            <span className="text-[10px] font-bold tracking-wider uppercase text-accent">
              {item.duration} build
            </span>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        {/* Event badge */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[10px] font-medium tracking-widest uppercase text-accent bg-accent-light px-2 py-0.5 rounded-full">
            {item.event}
          </span>
        </div>

        <h3 className="text-lg font-semibold group-hover:text-accent transition-colors leading-snug">
          {item.name}
        </h3>
        <p className="mt-2 text-sm text-muted leading-relaxed line-clamp-2">
          {item.pitch}
        </p>

        {/* Role */}
        <div className="mt-3 flex items-center gap-1.5 text-xs text-muted">
          <User size={12} className="text-accent shrink-0" />
          <span>{item.role}</span>
        </div>

        {/* Stack */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {item.stack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-0.5 text-[10px] font-medium tracking-wide uppercase rounded-md bg-white/5 text-muted"
            >
              {tech}
            </span>
          ))}
          {item.stack.length > 4 && (
            <span className="px-2 py-0.5 text-[10px] text-muted">
              +{item.stack.length - 4}
            </span>
          )}
        </div>

        {/* Detail indicator */}
        {item.hasDetailPage && (
          <div className="mt-4 pt-4 border-t border-border flex items-center gap-1.5 text-xs text-muted group-hover:text-accent transition-colors">
            View details
            <ArrowUpRight
              size={12}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
            />
          </div>
        )}
      </div>
    </motion.article>
  );

  if (item.hasDetailPage) {
    return (
      <Link href={`/hackathons/${item.slug}`} className="block h-full">
        {inner}
      </Link>
    );
  }

  return inner;
}
