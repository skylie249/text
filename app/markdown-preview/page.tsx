import type { Metadata } from "next";
import Faq from "@/components/Faq";
import FaqJsonLd from "@/components/FaqJsonLd";
import MarkdownPreviewApp from "@/components/MarkdownPreviewApp";
import { getTool, SITE_URL } from "@/lib/site";

const tool = getTool("markdown-preview")!;

export const metadata: Metadata = {
  title: "Markdown Preview — Live Markdown Editor & Renderer",
  description: tool.description,
  alternates: {
    canonical: `${SITE_URL}/markdown-preview`,
  },
  openGraph: {
    title: "Markdown Preview — Live Markdown Editor & Renderer",
    description: tool.description,
    url: `${SITE_URL}/markdown-preview`,
    type: "website",
  },
};

const faqItems = [
  {
    question: "What Markdown syntax is supported?",
    answer:
      "Standard Markdown plus GitHub-flavored Markdown (GFM) extensions: tables, task lists, strikethrough, and autolinks. Headings, lists, blockquotes, code blocks, links, and images are all supported.",
  },
  {
    question: "Is my Markdown saved or uploaded anywhere?",
    answer:
      "No. The editor and preview run entirely in your browser. Nothing you type is sent to a server or stored after you close the tab.",
  },
  {
    question: "Can I copy the Markdown or the rendered result?",
    answer:
      "Use the 'Copy Markdown' button to copy your raw Markdown source to the clipboard. To reuse the rendered HTML, you can select and copy the preview pane directly in most browsers.",
  },
  {
    question: "Does it support code syntax highlighting?",
    answer:
      "Code blocks are rendered in a monospace font with basic formatting. For advanced syntax highlighting in your own project, pair this preview with a highlighting library such as highlight.js or Prism.",
  },
];

export default function MarkdownPreviewPage() {
  return (
    <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-10 sm:px-6">
      <FaqJsonLd items={faqItems} />
      <div className="text-center">
        <span className="inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-950 dark:text-blue-300">
          Free tool
        </span>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
          {tool.emoji} Markdown Preview
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-zinc-600 dark:text-zinc-400">
          {tool.description}
        </p>
      </div>

      <MarkdownPreviewApp />

      <article className="prose prose-zinc mx-auto mt-16 max-w-3xl dark:prose-invert">
        <h2>How to use the Markdown preview</h2>
        <p>
          Write or paste Markdown into the left panel. The right panel
          renders the formatted output live, so you can check headings,
          lists, tables, and links before publishing.
        </p>
        <h2>Who uses a Markdown previewer?</h2>
        <p>
          Developers use it to check README files and documentation before
          committing. Writers use it to preview blog posts or notes written
          in Markdown for static site generators and note-taking apps.
          Anyone drafting content for GitHub, GitLab, or a wiki can use it to
          confirm formatting renders as expected.
        </p>
      </article>

      <div className="mx-auto max-w-3xl">
        <Faq items={faqItems} />
      </div>
    </main>
  );
}
