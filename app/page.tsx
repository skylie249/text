import Link from "next/link";
import { SITE_DESCRIPTION, SITE_NAME, TOOLS } from "@/lib/site";

export default function Home() {
  return (
    <main className="flex-1">
      <section className="mx-auto max-w-5xl px-4 py-16 text-center sm:px-6 sm:py-24">
        <h1 className="text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
          {SITE_NAME}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
          {SITE_DESCRIPTION}
        </p>
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-20 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-3">
          {TOOLS.map((tool) => (
            <Link
              key={tool.slug}
              href={`/${tool.slug}`}
              className="group flex flex-col rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
            >
              <span className="text-3xl" aria-hidden>
                {tool.emoji}
              </span>
              <h2 className="mt-4 text-lg font-bold text-zinc-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                {tool.name}
              </h2>
              <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
                {tool.tagline}
              </p>
              <span className="mt-4 text-sm font-medium text-blue-600 dark:text-blue-400">
                Open tool →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-t border-zinc-200 bg-white py-16 dark:border-zinc-800 dark:bg-zinc-900">
        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white">
            Why NexaLab Tools?
          </h2>
          <div className="mt-8 grid gap-8 sm:grid-cols-3">
            <div>
              <h3 className="font-semibold text-zinc-900 dark:text-white">
                Private by design
              </h3>
              <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
                Every tool runs entirely in your browser. Your text is never
                sent to a server or stored anywhere.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-zinc-900 dark:text-white">
                No sign-up required
              </h3>
              <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
                Just open a tool and start typing. No accounts, no email, no
                paywalls.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-zinc-900 dark:text-white">
                Fast and free
              </h3>
              <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
                Results update instantly as you type, and every tool is free
                to use as often as you like.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
