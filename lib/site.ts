export const SITE_NAME = "NexaLab Tools";
export const SITE_URL = "https://tools.nexalab.app";
export const SITE_DESCRIPTION =
  "Free, fast, browser-based text and productivity tools. No sign-up, no data leaves your browser.";

export type ToolDefinition = {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  description: string;
  emoji: string;
};

export const TOOLS: ToolDefinition[] = [
  {
    slug: "word-counter",
    name: "Word Counter",
    shortName: "Word Counter",
    tagline: "Count words, characters, sentences, and paragraphs instantly",
    description:
      "Free online word counter and character counter. Get instant word count, character count, sentence count, paragraph count, and estimated reading & speaking time.",
    emoji: "🔢",
  },
  {
    slug: "case-converter",
    name: "Case Converter",
    shortName: "Case Converter",
    tagline: "Convert text between uppercase, lowercase, camelCase, and more",
    description:
      "Free online case converter. Instantly convert text to UPPERCASE, lowercase, Title Case, Sentence case, camelCase, PascalCase, snake_case, kebab-case, and CONSTANT_CASE.",
    emoji: "🔤",
  },
  {
    slug: "markdown-preview",
    name: "Markdown Preview",
    shortName: "Markdown Preview",
    tagline: "Write Markdown and preview the rendered output live",
    description:
      "Free online Markdown editor and live preview. Write GitHub-flavored Markdown and see the rendered HTML instantly, side by side. Export or copy the result.",
    emoji: "📝",
  },
];

export function getTool(slug: string): ToolDefinition | undefined {
  return TOOLS.find((t) => t.slug === slug);
}
