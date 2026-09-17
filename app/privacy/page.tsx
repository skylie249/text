import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for NexaLab Tools.",
  alternates: { canonical: `${SITE_URL}/privacy` },
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-14 sm:px-6">
      <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
        Privacy Policy
      </h1>
      <div className="prose prose-zinc mt-6 dark:prose-invert">
        <p>Last updated: 2026</p>

        <h2>Text you enter into the tools</h2>
        <p>
          The word counter, case converter, and Markdown preview tools run
          entirely in your browser. The text you type or paste into these
          tools is processed locally on your device using JavaScript and is
          never transmitted to, or stored on, our servers.
        </p>

        <h2>Analytics</h2>
        <p>
          We may use privacy-respecting analytics (such as Google Analytics)
          to understand aggregate traffic, such as which pages are visited
          and how often. This data is anonymized and aggregated, and is not
          linked to the content of the text you enter into any tool.
        </p>

        <h2>Advertising</h2>
        <p>
          This site may display advertising served by third parties (such as
          Google AdSense). These providers may use cookies or similar
          technologies to serve ads based on your prior visits to this or
          other websites. You can opt out of personalized advertising by
          visiting your ad settings with the relevant provider.
        </p>

        <h2>Cookies</h2>
        <p>
          The site may use cookies for basic functionality and analytics.
          You can disable cookies in your browser settings; some features
          may not function as intended if you do.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about this policy can be sent through the{" "}
          <a href="/contact">Contact page</a>.
        </p>
      </div>
    </main>
  );
}
