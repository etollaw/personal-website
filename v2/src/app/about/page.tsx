import { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import GlobeWrapper from "@/components/GlobeWrapper";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "Eldad Tolla — CS & Math at Columbia, AI software engineering intern, and reinforcement learning researcher.",
};

const techAreas = [
  { label: "Languages", value: "Python, Swift, C/C++, Java, TypeScript, SQL" },
  { label: "AI & ML", value: "LLMs, RAG, LangGraph, MCP, PyTorch, Reinforcement Learning" },
  { label: "Cloud & Backend", value: "AWS (Bedrock, Lambda, S3), FastAPI, Docker, Kubernetes, CI/CD" },
  { label: "Data", value: "PostgreSQL, Redis, Kafka, Neo4j, Spark, Data Modeling" },
  { label: "Apple / iOS", value: "SwiftUI, Core ML, Speech, AVFoundation, SwiftData, VoiceOver" },
  { label: "Systems & Research", value: "Multithreading, HPC, Performance Tuning, Papers & Posters" },
];

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-24">
      <SectionHeading label="About" title="Who I Am" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main bio */}
        <div className="lg:col-span-2 space-y-6 text-muted leading-relaxed">
          <p className="text-foreground text-lg leading-relaxed">
            I&apos;m Eldad Workeneh Tolla, a Computer Science and Mathematics
            student at Columbia University. Originally from Ethiopia, my roots have profoundly shaped
            my perspective and passion for leveraging technology to drive
            meaningful change.
          </p>
          <p>
            Right now I&apos;m an AI Software Engineering Intern at AArete, where I
            build production LLM pipelines and RAG systems on AWS Bedrock, and a
            Software Engineering Intern at NeuralSeek, shipping enterprise AI
            applications. Before that, I spent Summer 2025 at the Texas Advanced
            Computing Center (TACC) at UT Austin through the NSF Cyberinfrastructure
            REU, studying how search-based planning can speed up Q-learning.
          </p>
          <p>
            I like understanding technology at every level, not just the
            abstractions — from multithreaded C++ and HPC experiments to cloud
            infrastructure and native iOS. My current side project, Lisan, is an
            iOS app that teaches Amharic with fully on-device pronunciation scoring.
          </p>
          <p>
            I&apos;m especially motivated by work that helps underrepresented
            communities, whether that&apos;s a language app for the Ethiopian
            diaspora or a data pipeline for a nonprofit.
          </p>
          <p>
            As I continue my journey, I&apos;m committed to creating a community
            that fosters innovation and inclusivity — helping others from similar
            backgrounds access opportunities in technology and research.
          </p>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="p-6 rounded-2xl border border-border bg-surface">
            <h3 className="text-sm font-medium tracking-widest uppercase text-accent mb-4">
              Quick Facts
            </h3>
            <dl className="space-y-4 text-sm">
              <div>
                <dt className="text-muted">School</dt>
                <dd className="font-medium">Columbia University</dd>
              </div>
              <div>
                <dt className="text-muted">Major</dt>
                <dd className="font-medium">Computer Science & Mathematics</dd>
              </div>
              <div>
                <dt className="text-muted">Graduating</dt>
                <dd className="font-medium">Spring 2028</dd>
              </div>
              <div>
                <dt className="text-muted">From</dt>
                <dd className="font-medium">Ethiopia</dd>
              </div>
              <div>
                <dt className="text-muted">Location</dt>
                <dd className="font-medium">New York, NY</dd>
              </div>
              <div>
                <dt className="text-muted">Currently</dt>
                <dd className="font-medium">AArete · NeuralSeek</dd>
              </div>
              <div>
                <dt className="text-muted">Interests</dt>
                <dd className="font-medium">Applied AI, RL, Accessible Tech</dd>
              </div>
            </dl>
          </div>

          <a
            href="mailto:ewt2121@columbia.edu"
            className="block w-full text-center px-6 py-3 bg-accent text-background font-medium text-sm rounded-lg hover:opacity-90 transition-opacity"
          >
            Get in Touch
          </a>

          {/* Globe */}
          <div className="mt-6">
            <GlobeWrapper />
          </div>
        </div>
      </div>

      {/* Technical Profile */}
      <div className="mt-20">
        <h2 className="text-xs font-medium tracking-widest uppercase text-accent mb-6">
          Technical Profile
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {techAreas.map((area) => (
            <dl
              key={area.label}
              className="p-5 rounded-2xl border border-border bg-surface"
            >
              <dt className="text-xs font-medium tracking-widest uppercase text-muted mb-1.5">
                {area.label}
              </dt>
              <dd className="text-sm font-medium leading-relaxed">{area.value}</dd>
            </dl>
          ))}
        </div>
        <p className="mt-6 text-sm text-muted">
          See my work in action →{" "}
          <Link href="/work" className="text-accent hover:underline">
            Projects & Research
          </Link>
        </p>
      </div>
    </div>
  );
}
