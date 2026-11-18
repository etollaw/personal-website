import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Projects & Research",
    template: "%s — Eldad Tolla",
  },
  description: "Research, products, and technical projects by Eldad Tolla.",
};

export default function WorkLayout({ children }: { children: React.ReactNode }) {
  return children;
}
