# NexaLab Tools

Free, browser-based text and productivity tools — part of [nexalab.app](https://nexalab.app).

## Tools

- `/word-counter` — word, character, sentence, paragraph count + reading/speaking time
- `/case-converter` — UPPERCASE, lowercase, Title Case, Sentence case, camelCase, PascalCase, snake_case, CONSTANT_CASE, kebab-case, aLtErNaTiNg CaSe
- `/markdown-preview` — live GitHub-flavored Markdown editor + preview

All processing happens client-side in the browser. No text is ever sent to a server.

## Stack

- Next.js 16 (App Router, Turbopack)
- TypeScript
- Tailwind CSS v4 (+ `@tailwindcss/typography`)
- `react-markdown` + `remark-gfm` for Markdown rendering

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm run start
```

## Deployment notes

Deployed as `text.nexalab.app`, similar to the existing `paycheck.nexalab.app` sub-project.

Cloudflare DNS: add a CNAME record — `Name: text`, `Target: cname.vercel-dns.com`, `Proxy status: DNS only` (grey cloud) — then add `text.nexalab.app` as a domain in the Vercel project settings.

## SEO

- Each tool has its own route, unique metadata (title/description/OG/canonical), and FAQ content with `FAQPage` JSON-LD structured data.
- `app/sitemap.ts` and `app/robots.ts` generate `/sitemap.xml` and `/robots.txt` automatically.
