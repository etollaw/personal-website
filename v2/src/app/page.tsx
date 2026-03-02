import Hero from "@/components/Hero";
import SectionHeading from "@/components/SectionHeading";
import WorkCard from "@/components/WorkCard";
import HackathonCard from "@/components/HackathonCard";
import ExperienceCard from "@/components/ExperienceCard";
import { featuredWork } from "@/data/work";
import { hackathons } from "@/data/hackathons";
import { experiences } from "@/data/experiences";
import { ArrowRight, Code2, Brain, BarChart3, Wrench } from "lucide-react";
import Link from "next/link";

const techStack = [
  { icon: Brain, label: "Python, ML, RL" },
  { icon: Code2, label: "C, C++, JS, TS" },
  { icon: BarChart3, label: "R, QGIS, Data Viz" },
  { icon: Wrench, label: "Git, HPC, System Design" },
];

export default function Home() {
  const featuredExperiences = experiences.slice(0, 3);

  return (
    <>
      <Hero />

      {/* Featured Work */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <SectionHeading
          label="Projects"
          title="What I'm Building"
          description="Research, products, and technical projects across AI, systems, and data."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredWork.slice(0, 4).map((item, i) => (
            <WorkCard key={item.slug} item={item} index={i} />
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors group"
          >
            View all projects
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Hackathons */}
      <section className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <SectionHeading
            label="Hackathons"
            title="Rapid Builds"
            description="Shipping under pressure — end-to-end demos built in 24–48 hours."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hackathons.slice(0, 3).map((item, i) => (
              <HackathonCard key={item.slug} item={item} index={i} />
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <Link
              href="/hackathons"
              className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors group"
            >
              View all hackathons
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Technical Breadth */}
      <section className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <SectionHeading
            label="Stack"
            title="Technical Breadth"
            description="Comfortable across the stack — from low-level systems to ML research to data visualization."
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {techStack.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-3 p-4 rounded-2xl border border-border bg-surface"
              >
                <div className="w-10 h-10 rounded-xl bg-accent-light flex items-center justify-center shrink-0">
                  <item.icon size={18} className="text-accent" />
                </div>
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Experience */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <SectionHeading
          label="Experience"
          title="Where I've Contributed"
          description="Research, leadership, and hands-on roles that shaped my approach to technology."
        />
        <div className="max-w-3xl">
          {featuredExperiences.map((exp, i) => (
            <ExperienceCard key={exp.title} experience={exp} index={i} />
          ))}
        </div>
        <div className="mt-8">
          <Link
            href="/experience"
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-accent transition-colors group"
          >
            View full experience
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border">
        <div className="max-w-6xl mx-auto px-6 py-24 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Let&apos;s Connect
          </h2>
          <p className="mt-4 text-muted max-w-lg mx-auto">
            I&apos;m always open to discussing research, collaboration
            opportunities, or just connecting over shared interests.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <a
              href="mailto:ewt2121@columbia.edu"
              className="px-6 py-3 bg-accent text-background font-medium text-sm rounded-lg hover:opacity-90 transition-opacity"
            >
              Send an Email
            </a>
            <Link
              href="/contact"
              className="px-6 py-3 border border-border text-sm font-medium rounded-lg hover:bg-surface transition-colors"
            >
              Contact Page
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
