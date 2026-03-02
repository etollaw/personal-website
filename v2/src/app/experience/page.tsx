import { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import ExperienceCard from "@/components/ExperienceCard";
import { experiences } from "@/data/experiences";

export const metadata: Metadata = {
  title: "Experience",
};

export default function ExperiencePage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-24">
      <SectionHeading
        label="Experience"
        title="My Journey"
        description="Research, leadership, and hands-on roles across tech, education, and community."
      />

      <div className="max-w-3xl">
        {experiences.map((exp, i) => (
          <ExperienceCard key={exp.title} experience={exp} index={i} />
        ))}
      </div>
    </div>
  );
}
