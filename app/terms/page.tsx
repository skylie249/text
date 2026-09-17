import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of Use for NexaLab Tools.",
  alternates: { canonical: `${SITE_URL}/terms` },
};

export default function TermsPage() {
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-14 sm:px-6">
      <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
        Terms of Use
      </h1>
      <div className="prose prose-zinc mt-6 dark:prose-invert">
        <p>Last updated: 2026</p>

        <h2>Use of the tools</h2>
        <p>
          NexaLab Tools provides free, browser-based utilities (the word
          counter, case converter, and Markdown preview) &quot;as is&quot;,
          without warranty of any kind. You are free to use these tools for
          personal or commercial purposes at no cost.
        </p>

        <h2>No guarantee of accuracy</h2>
        <p>
          While we aim for accurate results, we make no guarantee that word
          counts, character counts, case conversions, or Markdown rendering
          are free of errors. You are responsible for verifying results
          before relying on them for any critical purpose (such as academic
          or legal word-count requirements).
        </p>

        <h2>Acceptable use</h2>
        <p>
          You agree not to use these tools to process content that is
          illegal, or to attempt to disrupt, reverse-engineer, or abuse the
          site&apos;s infrastructure.
        </p>

        <h2>Changes</h2>
        <p>
          These terms may be updated from time to time. Continued use of the
          site after changes are posted constitutes acceptance of the
          revised terms.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about these terms can be sent through the{" "}
          <a href="/contact">Contact page</a>.
        </p>
      </div>
    </main>
  );
}
