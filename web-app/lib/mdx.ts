import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkGfm from "remark-gfm";
import remarkRehype from "remark-rehype";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeStringify from "rehype-stringify";
import { visit } from "unist-util-visit";
import type { Plugin } from "unified";
import type { Element, Root } from "hast";
import GithubSlugger from "github-slugger";

/** Rewrite `.md` links to clean URLs. Operates on URLs like `./00-foo.md`, `../glossary.md`. */
function rewriteMdLinks(currentSlugPath: string): Plugin<[], Root> {
  return () => (tree) => {
    visit(tree, "element", (node: Element) => {
      if (node.tagName !== "a") return;
      const href = node.properties?.href;
      if (typeof href !== "string") return;
      if (/^(https?:)?\/\//.test(href)) return; // external
      if (href.startsWith("#")) return; // anchor only

      // Strip query/hash for processing, then re-attach
      const [pathPart, hashPart] = href.split("#");
      let cleaned = pathPart;

      if (!/\.md(\?|$)/.test(cleaned)) {
        return; // not a markdown link
      }

      // Resolve relative to current slug path
      const currentDir = currentSlugPath.split("/").slice(0, -1).join("/");
      const segments = cleaned.split("/");
      const currentParts = currentDir ? currentDir.split("/") : [];

      for (const seg of segments) {
        if (seg === ".") continue;
        if (seg === "..") {
          currentParts.pop();
        } else {
          currentParts.push(seg);
        }
      }

      let stem = currentParts.join("/").replace(/\.md$/, "");
      // README -> root docs
      stem = stem.replace(/(^|\/)README$/, "");

      let url = stem ? `/docs/${stem}` : "/docs";
      if (hashPart) url += `#${hashPart}`;

      node.properties = { ...node.properties, href: url };
    });
  };
}

export async function renderMarkdown(
  markdown: string,
  slugPath: string
): Promise<string> {
  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: false })
    .use(rehypeSlug)
    .use(rewriteMdLinks(slugPath))
    .use(rehypeAutolinkHeadings, {
      behavior: "append",
      properties: { className: ["anchor"], "aria-hidden": "true", tabIndex: -1 },
      content: { type: "text", value: "#" }
    })
    .use(rehypeStringify)
    .process(markdown);

  return String(file);
}

export interface TocItem {
  id: string;
  text: string;
  depth: number;
}

/** Extract TOC from raw markdown (depths 2 and 3). */
export function extractToc(markdown: string): TocItem[] {
  const slugger = new GithubSlugger();
  const items: TocItem[] = [];
  const lines = markdown.split("\n");
  let inCodeBlock = false;
  for (const line of lines) {
    if (line.startsWith("```")) {
      inCodeBlock = !inCodeBlock;
      continue;
    }
    if (inCodeBlock) continue;
    const m = /^(#{2,3})\s+(.+?)\s*$/.exec(line);
    if (!m) continue;
    const depth = m[1].length;
    const text = m[2].replace(/`/g, "").replace(/\*\*/g, "").trim();
    const id = slugger.slug(text);
    items.push({ id, text, depth });
  }
  return items;
}
