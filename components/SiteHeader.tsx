import Link from "next/link";
import { TOOLS } from "@/lib/site";

export default function SiteHeader() {
  return (
    <header className="border-b border-zinc-200 bg-white/80 backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/80 sticky top-0 z-50">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-bold tracking-tight text-zinc-900 dark:text-white"
        >
          <span aria-hidden>🧰</span>
          NexaLab Tools
        </Link>
        <nav className="flex items-center gap-1 sm:gap-2">
          {TOOLS.map((tool) => (
            <Link
              key={tool.slug}
              href={`/${tool.slug}`}
              className="rounded-md px-2 py-1.5 text-sm font-medium text-zinc-600 transition-colors hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-white sm:px-3"
            >
              {tool.shortName}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
