"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  children?: ReactNode;
  className?: string;
}

export default function SectionHeading({
  label,
  title,
  description,
  children,
  className = "",
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${className}`}
    >
      {label && (
        <span className="text-xs font-medium tracking-widest uppercase text-accent">
          {label}
        </span>
      )}
      <h2 className="mt-2 text-3xl sm:text-4xl font-bold tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-muted max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
      {children}
    </motion.div>
  );
}
