import { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import ExperienceCard from "@/components/ExperienceCard";
import { experiences, earlierExperiences } from "@/data/experiences";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Internships in AI software engineering (AArete, NeuralSeek) and reinforcement learning research (TACC), plus leadership and outreach.",
};

export default function ExperiencePage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-24">
      <SectionHeading as="h1"
        label="Experience"
        title="My Journey"
        description="Industry internships in applied AI, research in reinforcement learning, and the leadership roles that came before."
      />

      <div className="max-w-3xl">
        {experiences.map((exp, i) => (
          <ExperienceCard key={exp.title + exp.organization} experience={exp} index={i} />
        ))}
      </div>

      <div className="mt-20 max-w-3xl">
        <h2 className="text-xs font-medium tracking-widest uppercase text-accent mb-6">
          Leadership & Earlier
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {earlierExperiences.map((exp) => (
            <div key={exp.title} className="p-5 rounded-2xl border border-border bg-surface">
              <h3 className="text-sm font-semibold">{exp.title}</h3>
              <p className="text-xs text-muted mt-0.5">{exp.organization}</p>
              <p className="text-sm text-muted mt-2 leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
