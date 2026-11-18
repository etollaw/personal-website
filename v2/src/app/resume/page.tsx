import { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import { Download, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: "Resume",
  description: "Eldad Tolla's resume — AI software engineering, RAG, reinforcement learning, and iOS.",
};

const RESUME_PATH = "/Eldad_Tolla_Resume.pdf";

export default function ResumePage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-24">
      <SectionHeading as="h1"
        label="Resume"
        title="My Resume"
        description="Updated October 2026. View it below or download a copy."
      >
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={RESUME_PATH}
            download="Eldad_Tolla_Resume.pdf"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-background font-medium text-sm rounded-lg hover:opacity-90 transition-opacity"
          >
            <Download size={16} />
            Download PDF
          </a>
          <a
            href={RESUME_PATH}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-border text-sm font-medium rounded-lg hover:bg-surface transition-colors"
          >
            <ExternalLink size={16} />
            Open in New Tab
          </a>
        </div>
      </SectionHeading>

      {/* Inline preview (hidden on small screens, where PDF embeds work poorly) */}
      <div className="hidden md:block max-w-4xl rounded-2xl overflow-hidden border border-border bg-white">
        <object
          data={`${RESUME_PATH}#view=FitH&toolbar=0`}
          type="application/pdf"
          className="w-full h-[1100px]"
          aria-label="Eldad Tolla resume"
        >
          <p className="p-8 text-sm text-neutral-600">
            Your browser can&apos;t show PDFs inline.{" "}
            <a href={RESUME_PATH} className="underline">
              Download the resume
            </a>{" "}
            instead.
          </p>
        </object>
      </div>
    </div>
  );
}
