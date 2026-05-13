import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

export function Header({ variant = "default" }: { variant?: "default" | "docs" }) {
  return (
    <header className="sticky top-0 z-30 backdrop-blur-md bg-paper/80 dark:bg-night/80 border-b border-neutral-200/60 dark:border-neutral-800/60">
      <div className={variant === "docs" ? "px-4 lg:px-8" : "max-w-7xl mx-auto px-6 lg:px-8"}>
        <div className="h-14 flex items-center justify-between">
          <Link
            href="/"
            className="font-sans font-semibold tracking-tight text-ink dark:text-neutral-100 flex items-center gap-2"
          >
            <span className="inline-block w-5 h-5 bg-accent rounded-sm rotate-45" aria-hidden />
            <span>AI 与社会</span>
            <span className="hidden sm:inline text-ink-subtle dark:text-neutral-500 font-normal text-sm">
              · 研究路线图
            </span>
          </Link>
          <nav className="flex items-center gap-1 text-sm">
            <Link
              href="/docs"
              className="px-3 py-1.5 rounded-md text-ink-muted hover:text-ink hover:bg-neutral-100 dark:text-neutral-400 dark:hover:text-neutral-100 dark:hover:bg-neutral-900 transition-colors"
            >
              文档
            </Link>
            <Link
              href="/docs/deep-dives/D1-AI作为通用技术深度分析"
              className="hidden md:inline-block px-3 py-1.5 rounded-md text-ink-muted hover:text-ink hover:bg-neutral-100 dark:text-neutral-400 dark:hover:text-neutral-100 dark:hover:bg-neutral-900 transition-colors"
            >
              深度研究
            </Link>
            <Link
              href="/docs/glossary"
              className="hidden md:inline-block px-3 py-1.5 rounded-md text-ink-muted hover:text-ink hover:bg-neutral-100 dark:text-neutral-400 dark:hover:text-neutral-100 dark:hover:bg-neutral-900 transition-colors"
            >
              词汇表
            </Link>
            <div className="w-px h-4 bg-neutral-200 dark:bg-neutral-800 mx-1" />
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  );
}
