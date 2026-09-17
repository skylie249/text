import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "NexaLab Tools is a collection of free, browser-based text and productivity tools built by nexalab.app.",
  alternates: { canonical: `${SITE_URL}/about` },
};

export default function AboutPage() {
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-14 sm:px-6">
      <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
        About NexaLab Tools
      </h1>
      <div className="prose prose-zinc mt-6 dark:prose-invert">
        <p>
          NexaLab Tools is a small collection of free, fast, browser-based
          utilities for everyday text tasks — counting words, converting text
          case, and previewing Markdown. It&apos;s built and maintained as
          part of{" "}
          <a href="https://nexalab.app" target="_blank" rel="noreferrer">
            nexalab.app
          </a>
          , a personal platform for small web tools and side projects.
        </p>
        <p>
          Every tool here runs entirely client-side in your browser. Nothing
          you type is uploaded to a server, logged, or stored — the page
          simply runs JavaScript locally to compute the result you see.
        </p>
        <p>
          Have feedback, a bug report, or an idea for a new tool? Get in
          touch on the{" "}
          <a href="/contact">Contact page</a>.
        </p>
      </div>
    </main>
  );
}
