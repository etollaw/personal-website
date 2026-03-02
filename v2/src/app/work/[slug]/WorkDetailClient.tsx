"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github, FileText, Image as ImageIcon } from "lucide-react";
import { WorkItem, categoryLabels, statusLabels } from "@/data/work";
import MediaPlaceholder from "@/components/MediaPlaceholder";
import VideoEmbed from "@/components/VideoEmbed";
import Reactions from "@/components/Reactions";

// ── Per-slug custom sections ──
import TACCDetail from "./detail-tacc";
import NeuralSeekDetail from "./detail-neuralseek";
import LisanDetail from "./detail-lisan";
import ToSSummarizerDetail from "./detail-tos";
import SystemsDetail from "./detail-systems";
import DataAnalysisDetail from "./detail-data";
import MatrixCalculatorDetail from "./detail-matrix";
import VoiceAidDetail from "./detail-voiceaid";

const detailComponents: Record<string, React.ComponentType> = {
  "tacc-research": TACCDetail,
  neuralseek: NeuralSeekDetail,
  lisan: LisanDetail,
  "tos-summarizer": ToSSummarizerDetail,
  "systems-programming": SystemsDetail,
  "data-analysis": DataAnalysisDetail,
  "matrix-calculator": MatrixCalculatorDetail,
  "voice-aid": VoiceAidDetail,
};

const linkIcons: Record<string, typeof ExternalLink> = {
  github: Github,
  paper: FileText,
  poster: ImageIcon,
  demo: ExternalLink,
  video: ExternalLink,
  external: ExternalLink,
};

interface WorkDetailClientProps {
  item: WorkItem;
}

export default function WorkDetailClient({ item }: WorkDetailClientProps) {
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
          href="/work"
          className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors mb-8"
        >
          <ArrowLeft size={14} />
          Back to Work
        </Link>
      </motion.div>

      {/* Hero */}
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Badges */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-[10px] font-medium tracking-widest uppercase text-accent bg-accent-light px-2.5 py-1 rounded-full">
            {categoryLabels[item.category]}
          </span>
          {item.status === "in-progress" && (
            <span className="text-[10px] font-medium tracking-widest uppercase text-amber-400 bg-amber-400/10 px-2.5 py-1 rounded-full">
              {statusLabels[item.status]}
            </span>
          )}
          {item.period && (
            <span className="text-[10px] font-medium tracking-widest uppercase text-muted px-2.5 py-1">
              {item.period}
            </span>
          )}
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
          {item.title}
        </h1>
        {item.subtitle && (
          <p className="mt-3 text-lg text-muted">{item.subtitle}</p>
        )}
        {item.organization && (
          <p className="mt-1 text-sm text-muted">{item.organization}</p>
        )}
      </motion.header>

      {/* Cover image */}
      {item.image && (
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-8 rounded-2xl overflow-hidden border border-border"
        >
          <Image
            src={item.image}
            alt={item.title}
            width={900}
            height={480}
            className="w-full object-cover"
          />
        </motion.div>
      )}

      {/* Tags */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mt-6 flex flex-wrap gap-2"
      >
        {item.tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-1 text-[10px] font-medium tracking-wide uppercase rounded-full bg-accent-light text-accent"
          >
            {tag}
          </span>
        ))}
      </motion.div>

      {/* Links */}
      {item.links && item.links.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
          className="mt-6 flex flex-wrap gap-3"
        >
          {item.links.map((link) => {
            const Icon = linkIcons[link.type] || ExternalLink;
            const isPlaceholder = link.href === "#";
            return (
              <a
                key={link.label}
                href={isPlaceholder ? undefined : link.href}
                target={isPlaceholder ? undefined : "_blank"}
                rel={isPlaceholder ? undefined : "noopener noreferrer"}
                className={`inline-flex items-center gap-2 px-4 py-2 text-sm font-medium rounded-lg border transition-all duration-200 ${
                  isPlaceholder
                    ? "border-border text-muted cursor-default opacity-50"
                    : "border-border text-foreground hover:border-accent hover:text-accent"
                }`}
              >
                <Icon size={14} />
                {link.label}
                {isPlaceholder && (
                  <span className="text-[10px] uppercase tracking-wider text-muted">Soon</span>
                )}
              </a>
            );
          })}
        </motion.div>
      )}

      {/* Overview */}
      {item.longDescription && (
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
          <div className="prose-custom space-y-4">
            {item.longDescription.split("\n\n").map((paragraph, i) => (
              <p key={i} className="text-muted leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </motion.section>
      )}

      {/* Highlights */}
      {item.highlights && item.highlights.length > 0 && (
        <motion.section
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12"
        >
          <h2 className="text-xs font-medium tracking-widest uppercase text-accent mb-4">
            Key Contributions
          </h2>
          <ul className="space-y-3">
            {item.highlights.map((h, i) => (
              <li key={i} className="flex gap-3 text-sm text-muted leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                {h}
              </li>
            ))}
          </ul>
        </motion.section>
      )}

      {/* Custom detail section per slug */}
      {DetailSection && (
        <div className="mt-16">
          <DetailSection />
        </div>
      )}

      {/* Reactions */}
      <Reactions slug={item.slug} />
    </div>
  );
}
