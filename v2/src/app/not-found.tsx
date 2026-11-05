import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-32 text-center">
      <p className="text-xs font-medium tracking-widest uppercase text-accent">404</p>
      <h1 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight">Page not found</h1>
      <p className="mt-4 text-muted max-w-md mx-auto">
        That page doesn&apos;t exist or has moved. Try one of these instead.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Link
          href="/"
          className="px-6 py-3 bg-accent text-background font-medium text-sm rounded-lg hover:opacity-90 transition-opacity"
        >
          Home
        </Link>
        <Link
          href="/work"
          className="px-6 py-3 border border-border text-sm font-medium rounded-lg hover:bg-surface transition-colors"
        >
          Projects
        </Link>
        <Link
          href="/contact"
          className="px-6 py-3 border border-border text-sm font-medium rounded-lg hover:bg-surface transition-colors"
        >
          Contact
        </Link>
      </div>
    </div>
  );
}
