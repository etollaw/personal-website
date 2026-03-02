"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

/**
 * Page transition wrapper.
 * Placed in template.tsx (which remounts on every navigation).
 * Provides a subtle fade + slide entrance animation.
 *
 * Why no exit animation: Next.js App Router unmounts the old page
 * before the new one renders, making exit animations unreliable
 * and prone to scroll/layout issues. The Navbar's layoutId indicator
 * already provides visual continuity between routes.
 */
export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.35,
        ease: [0.25, 0.1, 0.25, 1], // cubic-bezier for smooth decel
      }}
    >
      {children}
    </motion.div>
  );
}
