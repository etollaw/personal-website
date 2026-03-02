import { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import GlobeWrapper from "@/components/GlobeWrapper";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
};

const techAreas = [
  { label: "Languages", value: "Python, C, C++, JavaScript/TypeScript, R" },
  { label: "ML & AI", value: "Reinforcement Learning, NLP, Speech Recognition, TensorFlow" },
  { label: "Data", value: "R/ggplot2, QGIS, Pandas, Statistical Modeling" },
  { label: "Systems", value: "Memory Management, GDB, Valgrind, HPC" },
  { label: "Web & Tools", value: "Next.js, React, Git, GitHub, System Design" },
  { label: "Research", value: "Paper Writing, Academic Posters, Experimental Evaluation" },
];

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-24">
      <SectionHeading label="About" title="Who I Am" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main bio */}
        <div className="lg:col-span-2 space-y-6 text-muted leading-relaxed">
          <p className="text-foreground text-lg leading-relaxed">
            I&apos;m Eldad Workeneh Tolla, a Computer Science student at Columbia
            University. Originally from Ethiopia, my roots have profoundly shaped
            my perspective and passion for leveraging technology to drive
            meaningful change.
          </p>
          <p>
            My primary research interests lie at the intersection of reinforcement
            learning, high-performance computing, and AI systems. In Summer 2025,
            I conducted research at the Texas Advanced Computing Center (TACC) at
            UT Austin through the NSF Cyberinfrastructure REU, investigating how
            search-based planning priors can improve Q-learning convergence.
          </p>
          <p>
            Beyond research, I bring technical depth across the stack — from
            systems-level C programming to data analysis in R and QGIS, to
            building full-stack web applications. I believe in understanding
            technology at every level, not just the abstractions.
          </p>
          <p>
            Through my coursework and hands-on projects, I&apos;m building
            expertise in algorithm design, ML workflows, and data-driven
            problem-solving. I&apos;m especially passionate about applying these
            skills to real-world challenges affecting underrepresented communities.
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
                <dd className="font-medium">Computer Science</dd>
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
                <dt className="text-muted">Research</dt>
                <dd className="font-medium">RL, HPC, AI Planning</dd>
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
            <div
              key={area.label}
              className="p-5 rounded-2xl border border-border bg-surface"
            >
              <dt className="text-xs font-medium tracking-widest uppercase text-muted mb-1.5">
                {area.label}
              </dt>
              <dd className="text-sm font-medium leading-relaxed">{area.value}</dd>
            </div>
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
