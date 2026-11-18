import { ArrowDown } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Soft glows (radial gradients are far cheaper to paint than blur filters) */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(28rem circle at 85% 30%, rgba(0,229,191,0.07), transparent 70%), radial-gradient(24rem circle at 5% 75%, rgba(168,85,247,0.06), transparent 70%)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-6 w-full">
        <div className="max-w-3xl">
          <div
            style={{ animationDelay: "100ms" }}
            className="animate-fade-up inline-block px-3 py-1 mb-6 text-xs font-medium tracking-widest uppercase border border-border rounded-full text-accent"
          >
            CS & Math @ Columbia University
          </div>

          <h1
            style={{ animationDelay: "200ms" }}
            className="animate-fade-up text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
            <span className="block">Hello.</span>
            <span className="block mt-2">
              I&apos;m{" "}
              <span className="text-accent">Eldad</span>.
            </span>
          </h1>

          <p
            style={{ animationDelay: "400ms" }}
            className="animate-fade-up mt-6 text-lg sm:text-xl text-muted leading-relaxed max-w-xl"
          >
            AI software engineer and researcher. I build production LLM systems,
            RAG pipelines, and tools that make technology more accessible.
            Originally from Ethiopia, now in New York.
          </p>

          <p
            style={{ animationDelay: "500ms" }}
            className="animate-fade-up mt-5 flex items-center gap-2.5 text-sm text-muted"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-60 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            <span>
              Currently: AI SWE Intern at{" "}
              <span className="text-foreground">AArete</span> · SWE Intern at{" "}
              <span className="text-foreground">NeuralSeek</span>
            </span>
          </p>

          <div
            style={{ animationDelay: "600ms" }}
            className="animate-fade-up mt-8 flex flex-wrap gap-3"
          >
            <Link
              href="/work"
              className="px-6 py-3 bg-accent text-background font-medium text-sm rounded-lg hover:opacity-90 transition-opacity"
            >
              View Projects
            </Link>
            <Link
              href="/resume"
              className="px-6 py-3 border border-border text-sm font-medium rounded-lg hover:bg-surface transition-colors"
            >
              Resume
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 border border-border text-sm font-medium rounded-lg hover:bg-surface transition-colors"
            >
              Get in Touch
            </Link>
          </div>
        </div>

      </div>

      {/* Scroll indicator */}
      <div className="hidden sm:block absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-up" style={{ animationDelay: "1200ms" }}>
        <ArrowDown size={18} className="text-muted animate-bob" />
      </div>
    </section>
  );
}
