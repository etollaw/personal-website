"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github, Clock, User, Lightbulb, RotateCcw } from "lucide-react";
import { HackathonItem } from "@/data/hackathons";
import Reactions from "@/components/Reactions";

// ── Per-slug custom sections ──
import SentinelDetail from "./detail-sentinel";
import CommunityWatchDetail from "./detail-communitywatch";
import RecallRoyaleDetail from "./detail-recall-royale";

const detailComponents: Record<string, React.ComponentType> = {
  sentinel: SentinelDetail,
  communitywatch: CommunityWatchDetail,
  "recall-royale": RecallRoyaleDetail,
};

const linkIcons: Record<string, typeof ExternalLink> = {
  github: Github,
  demo: ExternalLink,
  video: ExternalLink,
  external: ExternalLink,
};

interface HackathonDetailClientProps {
  item: HackathonItem;
}

export default function HackathonDetailClient({ item }: HackathonDetailClientProps) {
  const DetailSection = detailComponents[item.slug];

  return (
    <div className="max-w-4xl mx-auto px-6 py-24">
      {/* Back */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Link
          href="/hackathons"
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors mb-8"
        >
          <ArrowLeft size={14} />
          Back to Hackathons
        </Link>
      </motion.div>

      {/* Hero */}
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {/* Badges row */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="text-[10px] font-medium tracking-widest uppercase text-accent bg-accent-light px-2.5 py-1 rounded-full">
            {item.event}
          </span>
          <span className="flex items-center gap-1 text-[10px] font-bold tracking-widest uppercase text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-full">
            <Clock size={10} />
            {item.duration} build
          </span>
          {item.date && (
            <span className="text-[10px] font-medium tracking-widest uppercase text-muted bg-white/5 px-2.5 py-1 rounded-full">
              {item.date}
            </span>
          )}
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight">
          {item.name}
        </h1>
        <p className="mt-3 text-lg text-muted leading-relaxed max-w-2xl">
          {item.pitch}
        </p>

        {/* Role badge */}
        <div className="mt-4 flex items-center gap-2 text-sm text-muted">
          <User size={14} className="text-accent" />
          <span className="font-medium text-foreground">{item.role}</span>
        </div>

        {/* Links */}
        {item.links && item.links.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-3">
            {item.links.map((link) => {
              const Icon = linkIcons[link.type] || ExternalLink;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 text-sm border border-border rounded-lg hover:bg-surface hover:border-accent/20 transition-all"
                >
                  <Icon size={14} className="text-accent" />
                  {link.label}
                </a>
              );
            })}
          </div>
        )}

        {/* Hero image */}
        {item.image && (
          <div className="relative mt-8 h-64 sm:h-80 rounded-2xl overflow-hidden">
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          </div>
        )}
      </motion.header>

      {/* Stack */}
      <motion.section
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-12"
      >
        <h2 className="text-xs font-medium tracking-widest uppercase text-accent mb-4">
          Tech Stack
        </h2>
        <div className="flex flex-wrap gap-2">
          {item.stack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 text-sm font-medium rounded-lg bg-surface border border-border"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.section>

      {/* Description */}
      <motion.section
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-12"
      >
        <h2 className="text-xs font-medium tracking-widest uppercase text-accent mb-4">
          Overview
        </h2>
        <div className="prose prose-invert max-w-none">
          {item.description.split("\n\n").map((p, i) => (
            <p key={i} className="text-muted leading-relaxed mb-4">
              {p}
            </p>
          ))}
        </div>
      </motion.section>

      {/* My Role */}
      <motion.section
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-12"
      >
        <h2 className="text-xs font-medium tracking-widest uppercase text-accent mb-4">
          My Role: {item.role}
        </h2>
        <div className="p-6 rounded-2xl border border-border bg-surface">
          <p className="text-sm text-muted leading-relaxed">{item.roleDescription}</p>
        </div>
      </motion.section>

      {/* Features */}
      <motion.section
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-12"
      >
        <h2 className="text-xs font-medium tracking-widest uppercase text-accent mb-4">
          What We Built
        </h2>
        <div className="space-y-2">
          {item.features.map((feature, i) => (
            <div
              key={i}
              className="flex gap-3 p-3.5 rounded-xl border border-border bg-surface text-sm text-muted"
            >
              <span className="w-5 h-5 rounded-full bg-accent-light text-accent text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                {i + 1}
              </span>
              {feature}
            </div>
          ))}
        </div>
      </motion.section>

      {/* Custom Detail Section */}
      {DetailSection && (
        <div className="mt-12">
          <DetailSection />
        </div>
      )}

      {/* Demo Flow */}
      <motion.section
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-12"
      >
        <h2 className="text-xs font-medium tracking-widest uppercase text-accent mb-4">
          60-Second Demo Flow
        </h2>
        <div className="relative pl-6 border-l-2 border-accent/20 space-y-4">
          {item.demoFlow.map((step, i) => (
            <div key={i} className="relative">
              <div className="absolute -left-[25px] w-4 h-4 rounded-full bg-background border-2 border-accent flex items-center justify-center">
                <span className="text-[8px] font-bold text-accent">{i + 1}</span>
              </div>
              <p className="text-sm text-muted leading-relaxed pl-2">{step}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* Reflections */}
      {item.reflections && (
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12"
        >
          <h2 className="text-xs font-medium tracking-widest uppercase text-accent mb-4">
            Reflections
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-6 rounded-2xl border border-border bg-surface">
              <div className="flex items-center gap-2 mb-3">
                <Lightbulb size={16} className="text-accent" />
                <h3 className="text-sm font-semibold">What I Learned</h3>
              </div>
              <p className="text-sm text-muted leading-relaxed">
                {item.reflections.learned}
              </p>
            </div>
            <div className="p-6 rounded-2xl border border-border bg-surface">
              <div className="flex items-center gap-2 mb-3">
                <RotateCcw size={16} className="text-amber-400" />
                <h3 className="text-sm font-semibold">What I&apos;d Do Differently</h3>
              </div>
              <p className="text-sm text-muted leading-relaxed">
                {item.reflections.doOver}
              </p>
            </div>
          </div>
        </motion.section>
      )}

      {/* Reactions */}
      <Reactions slug={item.slug} />
    </div>
  );
}
