import { notFound } from "next/navigation";
import { work } from "@/data/work";
import WorkDetailClient from "./WorkDetailClient";

// Generate static params for all detail-page items
export function generateStaticParams() {
  return work.filter((w) => w.hasDetailPage).map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = work.find((w) => w.slug === slug);
  if (!item) return { title: "Not Found" };
  return {
    title: item.title,
    description: item.description,
  };
}

export default async function WorkDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const item = work.find((w) => w.slug === slug && w.hasDetailPage);
  if (!item) notFound();

  return <WorkDetailClient item={item} />;
}
