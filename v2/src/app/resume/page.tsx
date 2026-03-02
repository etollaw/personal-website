import { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import { FileDown } from "lucide-react";

export const metadata: Metadata = {
  title: "Resume",
};

export default function ResumePage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-24">
      <SectionHeading
        label="Resume"
        title="My Resume"
        description="Download a copy of my latest resume below."
      />

      <div className="max-w-lg">
        <div className="p-8 rounded-2xl border border-border bg-surface text-center">
          <div className="w-16 h-16 rounded-2xl bg-accent-light flex items-center justify-center mx-auto mb-4">
            <FileDown size={28} className="text-accent" />
          </div>
          <h3 className="text-lg font-semibold">Eldad Tolla — Resume</h3>
          <p className="text-sm text-muted mt-2">
            PDF format &middot; Updated 2026
          </p>
          <a
            href="/images/new_resume.pdf"
            download
            className="inline-block mt-6 px-6 py-3 bg-accent text-background font-medium text-sm rounded-lg hover:opacity-90 transition-opacity"
          >
            Download Resume (PDF)
          </a>
        </div>
      </div>
    </div>
  );
}
