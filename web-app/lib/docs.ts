import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export const DOCS_ROOT = path.resolve(process.cwd(), "..", "docs", "research");

export interface DocFrontmatter {
  title: string;
  description?: string;
  order?: number;
  section?: string;
}

export interface DocMeta extends DocFrontmatter {
  slug: string[];
  slugPath: string;
  href: string;
  filePath: string;
}

export interface DocContent extends DocMeta {
  content: string;
}

function walk(dir: string, base: string = dir): string[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files: string[] = [];
  for (const entry of entries) {
    if (entry.name.startsWith(".")) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...walk(full, base));
    } else if (entry.isFile() && entry.name.endsWith(".md")) {
      files.push(path.relative(base, full));
    }
  }
  return files;
}

function fileToSlug(relPath: string): string[] {
  const stem = relPath.replace(/\.md$/, "");
  if (stem === "README") return [];
  return stem.split(path.sep);
}

let _cache: DocMeta[] | null = null;

export function getAllDocs(): DocMeta[] {
  if (_cache) return _cache;
  if (!fs.existsSync(DOCS_ROOT)) return [];
  const files = walk(DOCS_ROOT);
  const docs: DocMeta[] = files.map((rel) => {
    const filePath = path.join(DOCS_ROOT, rel);
    const raw = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(raw);
    const slug = fileToSlug(rel);
    const slugPath = slug.join("/");
    const href = slug.length === 0 ? "/docs" : `/docs/${slugPath}`;
    return {
      title: (data.title as string) ?? rel,
      description: data.description as string | undefined,
      order: data.order as number | undefined,
      section: data.section as string | undefined,
      slug,
      slugPath,
      href,
      filePath
    };
  });
  docs.sort((a, b) => (a.order ?? 999) - (b.order ?? 999));
  _cache = docs;
  return docs;
}

export function getDocBySlug(slug: string[]): DocContent | null {
  const all = getAllDocs();
  const target = slug.join("/");
  const meta = all.find((d) => d.slugPath === target);
  if (!meta) return null;
  const raw = fs.readFileSync(meta.filePath, "utf-8");
  const { content } = matter(raw);
  // Strip the leading H1 since DocRenderer renders title from frontmatter
  const stripped = content.replace(/^\s*#\s+.+?\r?\n+/, "");
  return { ...meta, content: stripped };
}

export function getDocByHref(href: string): DocContent | null {
  if (href === "/docs") return getDocBySlug([]);
  if (!href.startsWith("/docs/")) return null;
  const slug = href.slice("/docs/".length).split("/");
  return getDocBySlug(slug);
}

export interface NavSection {
  title: string;
  items: DocMeta[];
}

export function getNav(): NavSection[] {
  const docs = getAllDocs();
  const sectionOrder = [
    "序言",
    "理论地图",
    "历史镜鉴",
    "路线图",
    "必读清单",
    "方法与工具",
    "长期策略",
    "附录",
    "词汇表",
    "深度研究"
  ];
  const grouped = new Map<string, DocMeta[]>();
  for (const doc of docs) {
    if (doc.slug.length === 0) continue; // skip README; it's the index page
    const sec = doc.section || "其他";
    if (!grouped.has(sec)) grouped.set(sec, []);
    grouped.get(sec)!.push(doc);
  }
  const sections: NavSection[] = [];
  for (const name of sectionOrder) {
    if (grouped.has(name)) {
      sections.push({ title: name, items: grouped.get(name)! });
      grouped.delete(name);
    }
  }
  for (const [name, items] of grouped) {
    sections.push({ title: name, items });
  }
  return sections;
}
