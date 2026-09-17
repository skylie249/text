import type { Metadata } from "next";
import CaseConverterApp from "@/components/CaseConverterApp";
import Faq from "@/components/Faq";
import FaqJsonLd from "@/components/FaqJsonLd";
import { getTool, SITE_URL } from "@/lib/site";

const tool = getTool("case-converter")!;

export const metadata: Metadata = {
  title: "Case Converter — UPPERCASE, camelCase, snake_case & More",
  description: tool.description,
  alternates: {
    canonical: `${SITE_URL}/case-converter`,
  },
  openGraph: {
    title: "Case Converter — UPPERCASE, camelCase, snake_case & More",
    description: tool.description,
    url: `${SITE_URL}/case-converter`,
    type: "website",
  },
};

const faqItems = [
  {
    question: "What text cases can I convert to?",
    answer:
      "You can convert text to UPPERCASE, lowercase, Title Case, Sentence case, camelCase, PascalCase, snake_case, CONSTANT_CASE, kebab-case, and aLtErNaTiNg CaSe — all at once, side by side.",
  },
  {
    question: "What is camelCase used for?",
    answer:
      "camelCase is a common naming convention in programming languages like JavaScript and Java, typically used for variable and function names, e.g. myVariableName.",
  },
  {
    question: "What is snake_case used for?",
    answer:
      "snake_case is commonly used for variable and file names in Python, Ruby, and database column names, e.g. my_variable_name.",
  },
  {
    question: "What is kebab-case used for?",
    answer:
      "kebab-case (also called dash-case) is often used in URLs, CSS class names, and HTML attributes, e.g. my-page-title.",
  },
  {
    question: "Does the converter change my original text?",
    answer:
      "No. Your original input stays in the text box unchanged. Each converted result is shown separately, and you can copy any of them with one click.",
  },
];

export default function CaseConverterPage() {
  return (
    <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-10 sm:px-6">
      <FaqJsonLd items={faqItems} />
      <div className="text-center">
        <span className="inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-950 dark:text-blue-300">
          Free tool
        </span>
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white sm:text-4xl">
          {tool.emoji} Case Converter
        </h1>
        <p className="mx-auto mt-3 max-w-2xl text-zinc-600 dark:text-zinc-400">
          {tool.description}
        </p>
      </div>

      <CaseConverterApp />

      <article className="prose prose-zinc mx-auto mt-16 max-w-3xl dark:prose-invert">
        <h2>How to use the case converter</h2>
        <p>
          Type or paste your text into the box above. Every supported case
          format updates instantly below, and you can copy any result with
          the Copy button next to it.
        </p>
        <h2>Who uses a case converter?</h2>
        <p>
          Developers use it to quickly reformat variable and function names
          between naming conventions. Writers and marketers use it to fix
          text pasted from all-caps sources or to apply consistent Title
          Case to headlines. It also helps when preparing slugs, file names,
          or CSS classes that require kebab-case or snake_case.
        </p>
      </article>

      <div className="mx-auto max-w-3xl">
        <Faq items={faqItems} />
      </div>
    </main>
  );
}
