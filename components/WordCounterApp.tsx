"use client";

import { useMemo, useState } from "react";

function countStats(text: string) {
  const trimmed = text.trim();

  const words = trimmed.length === 0 ? 0 : (trimmed.match(/\S+/g) ?? []).length;
  const characters = text.length;
  const charactersNoSpaces = text.replace(/\s/g, "").length;

  const sentences =
    trimmed.length === 0
      ? 0
      : (trimmed.match(/[^.!?]+[.!?]+(\s|$)|[^.!?]+$/g) ?? []).filter(
          (s) => s.trim().length > 0
        ).length;

  const paragraphs =
    trimmed.length === 0
      ? 0
      : trimmed.split(/\n\s*\n/).filter((p) => p.trim().length > 0).length;

  const readingTimeSeconds = Math.ceil((words / 225) * 60);
  const speakingTimeSeconds = Math.ceil((words / 130) * 60);

  return {
    words,
    characters,
    charactersNoSpaces,
    sentences,
    paragraphs,
    readingTimeSeconds,
    speakingTimeSeconds,
  };
}

function formatDuration(totalSeconds: number) {
  if (totalSeconds <= 0) return "0 sec";
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  if (minutes === 0) return `${seconds} sec`;
  if (seconds === 0) return `${minutes} min`;
  return `${minutes} min ${seconds} sec`;
}

const STAT_CARDS: Array<{
  key: keyof ReturnType<typeof countStats>;
  label: string;
  format?: (value: number) => string;
}> = [
  { key: "words", label: "Words" },
  { key: "characters", label: "Characters" },
  { key: "charactersNoSpaces", label: "Characters (no spaces)" },
  { key: "sentences", label: "Sentences" },
  { key: "paragraphs", label: "Paragraphs" },
];

export default function WordCounterApp() {
  const [text, setText] = useState("");
  const stats = useMemo(() => countStats(text), [text]);

  return (
    <div className="mt-8">
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <label htmlFor="word-counter-input" className="sr-only">
            Text to analyze
          </label>
          <textarea
            id="word-counter-input"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Start typing or paste your text here…"
            className="h-80 w-full resize-y rounded-xl border border-zinc-200 bg-white p-4 font-mono text-sm leading-relaxed text-zinc-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100"
          />
          <div className="mt-3 flex items-center justify-between text-sm text-zinc-500 dark:text-zinc-400">
            <span>
              Estimated reading time:{" "}
              <strong className="text-zinc-800 dark:text-zinc-200">
                {formatDuration(stats.readingTimeSeconds)}
              </strong>{" "}
              · Speaking time:{" "}
              <strong className="text-zinc-800 dark:text-zinc-200">
                {formatDuration(stats.speakingTimeSeconds)}
              </strong>
            </span>
            <button
              type="button"
              onClick={() => setText("")}
              className="rounded-md px-2 py-1 font-medium text-zinc-500 hover:bg-zinc-100 hover:text-zinc-800 dark:hover:bg-zinc-800 dark:hover:text-zinc-200"
            >
              Clear
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3 content-start">
          {STAT_CARDS.map((card) => (
            <div
              key={card.key}
              className="rounded-xl border border-zinc-200 bg-white p-4 shadow-sm dark:border-zinc-800 dark:bg-zinc-900"
            >
              <div className="text-2xl font-bold tabular-nums text-zinc-900 dark:text-white">
                {stats[card.key].toLocaleString()}
              </div>
              <div className="mt-1 text-xs font-medium text-zinc-500 dark:text-zinc-400">
                {card.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
