import { extractToc, renderMarkdown } from "@/lib/mdx";
import type { DocContent } from "@/lib/docs";
import { TableOfContents } from "./TableOfContents";
import { getAllDocs } from "@/lib/docs";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export async function DocRenderer({ doc }: { doc: DocContent }) {
  const html = await renderMarkdown(doc.content, doc.slugPath);
  const toc = extractToc(doc.content);

  const all = getAllDocs();
  const linearIdx = all.findIndex((d) => d.slugPath === doc.slugPath);
  const prev = linearIdx > 0 ? all[linearIdx - 1] : null;
  const next = linearIdx >= 0 && linearIdx < all.length - 1 ? all[linearIdx + 1] : null;

  return (
    <div className="xl:grid xl:grid-cols-[minmax(0,1fr)_14rem] xl:gap-10 px-6 lg:px-10 xl:px-14 py-10 lg:py-14 max-w-[80rem] mx-auto">
      <article className="min-w-0">
        <header className="mb-8 pb-6 border-b border-neutral-200 dark:border-neutral-800">
          {doc.section && (
            <div className="text-[11px] uppercase tracking-wider font-sans font-semibold text-accent dark:text-accent-muted mb-3">
              {doc.section}
            </div>
          )}
          <h1 className="font-serif text-3xl lg:text-4xl tracking-tight text-ink dark:text-neutral-50 leading-tight">
            {doc.title}
          </h1>
          {doc.description && (
            <p className="mt-3 text-ink-muted dark:text-neutral-400 text-[15px] leading-relaxed font-serif">
              {doc.description}
            </p>
          )}
        </header>

        <div
          className="prose prose-neutral dark:prose-invert max-w-none"
          dangerouslySetInnerHTML={{ __html: html }}
        />

        <nav className="mt-16 pt-6 border-t border-neutral-200 dark:border-neutral-800 grid sm:grid-cols-2 gap-3">
          {prev ? (
            <Link
              href={prev.href}
              className="group flex flex-col gap-1 p-4 border border-neutral-200 dark:border-neutral-800 rounded-md hover:border-accent dark:hover:border-accent-muted transition-colors"
            >
              <span className="text-[11px] uppercase tracking-wider text-ink-subtle dark:text-neutral-500 flex items-center gap-1">
                <ArrowLeft className="w-3 h-3" /> 上一篇
              </span>
              <span className="text-[14px] font-serif text-ink dark:text-neutral-200 group-hover:text-accent dark:group-hover:text-accent-muted leading-snug">
                {prev.title}
              </span>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              href={next.href}
              className="group flex flex-col gap-1 p-4 border border-neutral-200 dark:border-neutral-800 rounded-md hover:border-accent dark:hover:border-accent-muted transition-colors text-right sm:items-end"
            >
              <span className="text-[11px] uppercase tracking-wider text-ink-subtle dark:text-neutral-500 flex items-center gap-1">
                下一篇 <ArrowRight className="w-3 h-3" />
              </span>
              <span className="text-[14px] font-serif text-ink dark:text-neutral-200 group-hover:text-accent dark:group-hover:text-accent-muted leading-snug">
                {next.title}
              </span>
            </Link>
          ) : (
            <span />
          )}
        </nav>
      </article>

      <aside className="hidden xl:block">
        <div className="sticky top-24">
          <TableOfContents items={toc} />
        </div>
      </aside>
    </div>
  );
}
