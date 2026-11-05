import type { MetadataRoute } from "next";
import { work } from "@/data/work";
import { hackathons } from "@/data/hackathons";

const SITE_URL = "https://eldadtolla.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/about", "/work", "/hackathons", "/experience", "/resume", "/contact"];
  const projects = work.filter((w) => w.hasDetailPage).map((w) => `/work/${w.slug}`);
  const builds = hackathons.filter((h) => h.hasDetailPage).map((h) => `/hackathons/${h.slug}`);
  return [...pages, ...projects, ...builds].map((path) => ({ url: `${SITE_URL}${path}` }));
}
