import type { Metadata } from "next";
import { SITE_URL } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with the NexaLab Tools team.",
  alternates: { canonical: `${SITE_URL}/contact` },
};

export default function ContactPage() {
  return (
    <main className="mx-auto w-full max-w-3xl flex-1 px-4 py-14 sm:px-6">
      <h1 className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
        Contact
      </h1>
      <div className="prose prose-zinc mt-6 dark:prose-invert">
        <p>
          Found a bug, have a feature request, or just want to say hello?
          Reach out by email:
        </p>
        <p>
          <a href="mailto:kimhg249@gmail.com">kimhg249@gmail.com</a>
        </p>
        <p>
          NexaLab Tools is part of{" "}
          <a href="https://nexalab.app" target="_blank" rel="noreferrer">
            nexalab.app
          </a>
          .
        </p>
      </div>
    </main>
  );
}
