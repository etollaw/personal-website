/**
 * Page entrance animation. Rendered from template.tsx, which remounts on every
 * navigation. Pure CSS, so pages are visible even before JavaScript loads.
 */
export default function PageTransition({ children }: { children: React.ReactNode }) {
  return <div className="animate-page-in">{children}</div>;
}
