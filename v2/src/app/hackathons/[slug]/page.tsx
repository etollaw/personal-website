import { notFound } from "next/navigation";
import { hackathons } from "@/data/hackathons";
import HackathonDetailClient from "./HackathonDetailClient";

export function generateStaticParams() {
  return hackathons
    .filter((h) => h.hasDetailPage)
    .map((h) => ({ slug: h.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = hackathons.find((h) => h.slug === slug);
  if (!item) return { title: "Not Found" };
  return {
    title: `${item.name} — ${item.event}`,
    description: item.pitch,
  };
}

export default async function HackathonDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = hackathons.find((h) => h.slug === slug && h.hasDetailPage);
  if (!item) notFound();

  return <HackathonDetailClient item={item} />;
}
