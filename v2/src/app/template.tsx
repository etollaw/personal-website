import PageTransition from "@/components/PageTransition";

/**
 * template.tsx remounts on every navigation (unlike layout.tsx which persists).
 * This makes it the right place for page entrance animations.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return <PageTransition>{children}</PageTransition>;
}
