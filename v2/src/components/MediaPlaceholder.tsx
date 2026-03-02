"use client";

import { motion } from "framer-motion";
import { ImageIcon, FileText, BarChart3, Camera, Map } from "lucide-react";
import { ReactNode } from "react";

type PlaceholderType = "image" | "poster" | "figure" | "photo" | "diagram" | "pdf";

const iconMap: Record<PlaceholderType, typeof ImageIcon> = {
  image: ImageIcon,
  poster: FileText,
  figure: BarChart3,
  photo: Camera,
  diagram: Map,
  pdf: FileText,
};

interface MediaPlaceholderProps {
  type: PlaceholderType;
  label: string;
  description?: string;
  aspectRatio?: string;
  children?: ReactNode;
  className?: string;
}

export default function MediaPlaceholder({
  type,
  label,
  description,
  aspectRatio = "16/9",
  children,
  className = "",
}: MediaPlaceholderProps) {
  const Icon = iconMap[type] || ImageIcon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className={`relative flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-accent/20 bg-surface/50 ${className}`}
      style={{ aspectRatio }}
    >
      {children || (
        <>
          <div className="w-12 h-12 rounded-xl bg-accent-light flex items-center justify-center mb-3">
            <Icon size={22} className="text-accent" />
          </div>
          <p className="text-sm font-medium text-muted">{label}</p>
          {description && (
            <p className="text-xs text-muted/60 mt-1 max-w-[200px] text-center">
              {description}
            </p>
          )}
        </>
      )}
    </motion.div>
  );
}
