import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://eldadtolla.vercel.app";
const DESCRIPTION =
  "CS & Math at Columbia. AI software engineer building production LLM systems and RAG pipelines, and a reinforcement learning researcher.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Eldad Tolla — CS @ Columbia",
    template: "%s — Eldad Tolla",
  },
  description: DESCRIPTION,
  authors: [{ name: "Eldad Tolla", url: SITE_URL }],
  openGraph: {
    title: "Eldad Tolla — CS @ Columbia",
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "Eldad Tolla",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eldad Tolla — CS @ Columbia",
    description: DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main className="min-h-screen pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
