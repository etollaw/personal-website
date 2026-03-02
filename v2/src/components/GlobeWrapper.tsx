"use client";

import dynamic from "next/dynamic";

const Globe = dynamic(() => import("@/components/Globe"), {
  ssr: false,
  loading: () => (
    <div className="aspect-square max-w-[400px] mx-auto rounded-2xl bg-surface animate-pulse" />
  ),
});

export default function GlobeWrapper() {
  return <Globe />;
}
