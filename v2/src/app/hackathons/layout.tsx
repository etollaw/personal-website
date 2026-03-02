import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hackathons — Rapid Builds",
  description:
    "Hackathon projects by Eldad Tolla — shipping under pressure, end-to-end demos, and collaborative builds.",
};

export default function HackathonsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
