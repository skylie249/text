import type { Metadata } from "next";
import Faq from "@/components/Faq";
import FaqJsonLd from "@/components/FaqJsonLd";
import WordCounterApp from "@/components/WordCounterApp";
import { getTool, SITE_URL } from "@/lib/site";

const tool = getTool("word-counter")!;

export const metadata: Metadata = {
  title: "Word Counter — Count Words, Characters & Reading Time",
  description: tool.description,
  alternates: {
    canonical: `${SITE_URL}/word-counter`,
  },
  openGraph: {
    title: "Word Counter — Count Words, Characters & Reading Time",
    description: tool.description,
    url: `${SITE_URL}/word-counter`,
    type: "website",
  },
};

const faqItems = [
  {
    question: "Is this word counter free to use?",
    answer:
      "Yes. The word counter is completely free, has no usage limits, and doesn't require an account.",
  },
  {
    question: "Does my text get uploaded or stored anywhere?",
    answer:
      "No. All counting happens locally in your browser using JavaScript. Your text is never sent to a server, logged, or saved.",
  },
  {
    question: "How is reading time calculated?",
    answer:
      "Reading time is estimated using an average adult silent reading speed of about 225 words per minute. Speaking time uses an average speaking pace of about 130 words per minute. Actual times vary by reader and content.",
  },
  {
    question: "How are sentences and paragraphs counted?",
    answer:
      "Sentences are counted by detecting text segments that end in '.', '!', or '?'. Paragraphs are counted as blocks of text separated by a blank line.",
  },
  {
    question: "Does it count words in other languages?",
    answer:
      "The word counter splits text on whitespace, so it works reasonably well for space-separated languages like English, Spanish, or Korean written with spaces. Character count works for any language or script.",
  },
];

export default function WordCounterPage() {
  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-10 sm:px-6">
      <FaqJsonLd items={faqItems} />
      <div className="text-center">
        <span className="inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-950 dark:text-blue-300">
          Free tool
        </span>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
          {tool.emoji} Word Counter
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-zinc-600 dark:text-zinc-400">
          {tool.description}
        </p>
      </div>

      <WordCounterApp />

      <article className="prose prose-zinc mx-auto mt-16 max-w-3xl dark:prose-invert">
        <h2>How to use the word counter</h2>
        <p>
          Paste or type your text into the box above. The word count,
          character count, sentence count, paragraph count, and estimated
          reading time update automatically as you type — there&apos;s no
          button to click and nothing to submit.
        </p>
        <h2>Who uses a word counter?</h2>
        <p>
          Writers, students, and content marketers use word counters to hit
          length requirements for essays, articles, social media posts, and
          meta descriptions. SEO professionals use them to check that titles,
          headlines, and blog content fall within recommended ranges.
          Translators and editors use character counts to estimate work for
          per-character billing.
        </p>
      </article>

      <div className="mx-auto max-w-3xl">
        <Faq items={faqItems} />
      </div>
    </main>
  );
}
