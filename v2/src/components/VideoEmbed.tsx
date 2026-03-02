"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

interface VideoEmbedProps {
  /** YouTube/Vimeo URL or self-hosted MP4 path */
  src?: string;
  /** Placeholder label when no src is provided */
  placeholder?: string;
  title?: string;
  className?: string;
}

function getEmbedUrl(src: string): { type: "embed" | "video"; url: string } {
  // YouTube
  const ytMatch = src.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  );
  if (ytMatch) {
    return { type: "embed", url: `https://www.youtube.com/embed/${ytMatch[1]}?rel=0` };
  }

  // Vimeo
  const vimeoMatch = src.match(/vimeo\.com\/(\d+)/);
  if (vimeoMatch) {
    return { type: "embed", url: `https://player.vimeo.com/video/${vimeoMatch[1]}` };
  }

  // Self-hosted
  return { type: "video", url: src };
}

export default function VideoEmbed({
  src,
  placeholder = "Demo Video",
  title = "Video",
  className = "",
}: VideoEmbedProps) {
  // Placeholder state when no src
  if (!src || src === "#") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className={`relative flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-accent/20 bg-surface/50 ${className}`}
        style={{ aspectRatio: "16/9" }}
      >
        <div className="w-14 h-14 rounded-full bg-accent-light flex items-center justify-center mb-3">
          <Play size={24} className="text-accent ml-0.5" />
        </div>
        <p className="text-sm font-medium text-muted">{placeholder}</p>
        <p className="text-xs text-muted/60 mt-1">Video coming soon</p>
      </motion.div>
    );
  }

  const { type, url } = getEmbedUrl(src);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={`relative rounded-2xl overflow-hidden border border-border bg-surface ${className}`}
      style={{ aspectRatio: "16/9" }}
    >
      {type === "embed" ? (
        <iframe
          src={url}
          title={title}
          className="absolute inset-0 w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <video
          src={url}
          title={title}
          controls
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
    </motion.div>
  );
}
