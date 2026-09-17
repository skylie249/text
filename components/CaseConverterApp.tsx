"use client";

import { useMemo, useState } from "react";
import { CASE_CONVERTERS } from "@/lib/caseConvert";

export default function CaseConverterApp() {
  const [text, setText] = useState("");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const results = useMemo(
    () =>
      CASE_CONVERTERS.map((converter) => ({
        ...converter,
        value: converter.convert(text),
      })),
    [text]
  );

  const handleCopy = async (id: string, value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedId(id);
      setTimeout(() => setCopiedId((current) => (current === id ? null : current)), 1500);
    } catch {
      // Clipboard API unavailable — silently ignore.
    }
  };

  return (
    <div className="mt-8">
      <label htmlFor="case-converter-input" className="sr-only">
        Text to convert
      </label>
      <textarea
        id="case-converter-input"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type or paste your text here…"
        className="h-32 w-full resize-y rounded-xl border border-zinc-200 bg-white p-4 text-sm leading-relaxed text-zinc-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100"
      />
      <div className="mt-2 flex justify-end">
        <button
          type="button"
          onClick={() => setText("")}
          className="rounded-md px-2 py-1 text-sm font-medium text-zinc-500 hover:bg-zinc-100 hover:text-zinc-800 dark:hover:bg-zinc-800 dark:hover:text-zinc-200"
        >
          Clear
        </button>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        {results.map((result) => (
          <div
            key={result.id}
            className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wide text-zinc-500 dark:text-zinc-400">
                {result.label}
              </span>
              <button
                type="button"
                onClick={() => handleCopy(result.id, result.value)}
                disabled={!text}
                className="rounded-md px-2 py-1 text-xs font-medium text-blue-600 hover:bg-blue-50 disabled:cursor-not-allowed disabled:text-zinc-300 dark:text-blue-400 dark:hover:bg-blue-950 dark:disabled:text-zinc-700"
              >
                {copiedId === result.id ? "Copied!" : "Copy"}
              </button>
            </div>
            <p className="mt-2 min-h-[1.5rem] break-words font-mono text-sm text-zinc-800 dark:text-zinc-200">
              {text ? result.value : result.example}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
