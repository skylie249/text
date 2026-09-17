"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const DEFAULT_MARKDOWN = `# Hello, Markdown!

Type on the left, see the **rendered preview** on the right.

## Features

- GitHub-flavored Markdown (tables, task lists, strikethrough)
- Live preview, no refresh needed
- 100% in your browser — nothing is uploaded

### Task list

- [x] Write some Markdown
- [ ] Share the preview

### Table

| Syntax | Result |
| --- | --- |
| \`**bold**\` | **bold** |
| \`*italic*\` | *italic* |
| \`~~strike~~\` | ~~strike~~ |

> Blockquotes look like this.

\`\`\`js
function greet(name) {
  return \`Hello, \${name}!\`;
}
\`\`\`
`;

export default function MarkdownPreviewApp() {
  const [markdown, setMarkdown] = useState(DEFAULT_MARKDOWN);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(markdown);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // Clipboard API unavailable — silently ignore.
    }
  };

  return (
    <div className="mt-8">
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-zinc-500 dark:text-zinc-400">
          Markdown source / Live preview
        </span>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={handleCopy}
            className="rounded-md px-2 py-1 text-sm font-medium text-blue-600 hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-blue-950"
          >
            {copied ? "Copied!" : "Copy Markdown"}
          </button>
          <button
            type="button"
            onClick={() => setMarkdown("")}
            className="rounded-md px-2 py-1 text-sm font-medium text-zinc-500 hover:bg-zinc-100 hover:text-zinc-800 dark:hover:bg-zinc-800 dark:hover:text-zinc-200"
          >
            Clear
          </button>
        </div>
      </div>

      <div className="mt-3 grid gap-4 lg:grid-cols-2">
        <label htmlFor="markdown-input" className="sr-only">
          Markdown source
        </label>
        <textarea
          id="markdown-input"
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
          placeholder="Write Markdown here…"
          spellCheck={false}
          className="h-[32rem] w-full resize-y rounded-xl border border-zinc-200 bg-white p-4 font-mono text-sm leading-relaxed text-zinc-900 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/30 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-100"
        />

        <div className="h-[32rem] overflow-y-auto rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <article className="prose prose-zinc max-w-none dark:prose-invert">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {markdown}
            </ReactMarkdown>
          </article>
        </div>
      </div>
    </div>
  );
}
