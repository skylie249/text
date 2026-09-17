import Link from "next/link";
import { TOOLS } from "@/lib/site";

export default function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <div className="text-base font-bold text-zinc-900 dark:text-white">
              NexaLab Tools
            </div>
            <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
              Free browser-based text tools. A project by{" "}
              <a
                href="https://nexalab.app"
                className="underline hover:text-zinc-700 dark:hover:text-zinc-200"
              >
                nexalab.app
              </a>
              .
            </p>
          </div>
          <div>
            <div className="text-sm font-semibold text-zinc-900 dark:text-white">
              Tools
            </div>
            <ul className="mt-3 space-y-2">
              {TOOLS.map((tool) => (
                <li key={tool.slug}>
                  <Link
                    href={`/${tool.slug}`}
                    className="text-sm text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200"
                  >
                    {tool.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold text-zinc-900 dark:text-white">
              Company
            </div>
            <ul className="mt-3 space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold text-zinc-900 dark:text-white">
              Legal
            </div>
            <ul className="mt-3 space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-200"
                >
                  Terms of Use
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-zinc-200 pt-6 text-xs text-zinc-400 dark:border-zinc-800 dark:text-zinc-500">
          © {year} NexaLab Tools, a project by nexalab.app. All processing
          happens in your browser — no text is uploaded to a server.
        </div>
      </div>
    </footer>
  );
}
