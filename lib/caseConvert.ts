function splitWords(input: string): string[] {
  const normalized = input
    .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
    .replace(/[_\-]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  if (!normalized) return [];
  return normalized.split(" ").filter(Boolean);
}

export function toUpperCase(input: string): string {
  return input.toUpperCase();
}

export function toLowerCase(input: string): string {
  return input.toLowerCase();
}

export function toTitleCase(input: string): string {
  return splitWords(input)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(" ");
}

export function toSentenceCase(input: string): string {
  const lower = input.toLowerCase();
  return lower.replace(/(^\s*[a-z])|([.!?]\s+[a-z])/g, (match) =>
    match.toUpperCase()
  );
}

export function toCamelCase(input: string): string {
  const words = splitWords(input).map((w) => w.toLowerCase());
  return words
    .map((w, i) =>
      i === 0 ? w : w.charAt(0).toUpperCase() + w.slice(1)
    )
    .join("");
}

export function toPascalCase(input: string): string {
  return splitWords(input)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join("");
}

export function toSnakeCase(input: string): string {
  return splitWords(input)
    .map((w) => w.toLowerCase())
    .join("_");
}

export function toConstantCase(input: string): string {
  return toSnakeCase(input).toUpperCase();
}

export function toKebabCase(input: string): string {
  return splitWords(input)
    .map((w) => w.toLowerCase())
    .join("-");
}

export function toAlternatingCase(input: string): string {
  return input
    .split("")
    .map((ch, i) => (i % 2 === 0 ? ch.toLowerCase() : ch.toUpperCase()))
    .join("");
}

export type CaseConverterDefinition = {
  id: string;
  label: string;
  example: string;
  convert: (input: string) => string;
};

export const CASE_CONVERTERS: CaseConverterDefinition[] = [
  { id: "upper", label: "UPPERCASE", example: "HELLO WORLD", convert: toUpperCase },
  { id: "lower", label: "lowercase", example: "hello world", convert: toLowerCase },
  { id: "title", label: "Title Case", example: "Hello World", convert: toTitleCase },
  {
    id: "sentence",
    label: "Sentence case",
    example: "Hello world",
    convert: toSentenceCase,
  },
  { id: "camel", label: "camelCase", example: "helloWorld", convert: toCamelCase },
  { id: "pascal", label: "PascalCase", example: "HelloWorld", convert: toPascalCase },
  { id: "snake", label: "snake_case", example: "hello_world", convert: toSnakeCase },
  {
    id: "constant",
    label: "CONSTANT_CASE",
    example: "HELLO_WORLD",
    convert: toConstantCase,
  },
  { id: "kebab", label: "kebab-case", example: "hello-world", convert: toKebabCase },
  {
    id: "alternating",
    label: "aLtErNaTiNg CaSe",
    example: "hElLo WoRlD",
    convert: toAlternatingCase,
  },
];
