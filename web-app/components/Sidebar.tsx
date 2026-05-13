"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { NavSection } from "@/lib/docs";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Sidebar({ nav }: { nav: NavSection[] }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) => {
    const normalized = decodeURIComponent(pathname);
    return normalized === href || normalized === href + "/";
  };

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setMobileOpen(true)}
        className="lg:hidden fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-accent text-white shadow-lg flex items-center justify-center"
        aria-label="打开目录"
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/40"
          onClick={() => setMobileOpen(false)}
          aria-hidden
        />
      )}

      <aside
        className={[
          "fixed lg:sticky top-14 left-0 z-40 lg:z-0",
          "w-72 lg:w-64 xl:w-72",
          "h-[calc(100vh-3.5rem)] overflow-y-auto",
          "bg-paper dark:bg-night border-r border-neutral-200 dark:border-neutral-800",
          "px-5 py-6 lg:py-8",
          "transition-transform",
          mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        ].join(" ")}
      >
        <div className="flex items-center justify-between mb-4 lg:hidden">
          <span className="font-semibold">目录</span>
          <button
            onClick={() => setMobileOpen(false)}
            aria-label="关闭目录"
            className="p-1.5 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-900"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <Link
          href="/docs"
          onClick={() => setMobileOpen(false)}
          className={[
            "block text-sm font-semibold py-2 px-2 -mx-2 rounded mb-3 transition-colors",
            isActive("/docs")
              ? "bg-accent/10 text-accent dark:text-accent-muted"
              : "text-ink dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-900"
          ].join(" ")}
        >
          研究路线图 · 索引
        </Link>

        <nav className="space-y-6 text-sm">
          {nav.map((section) => (
            <div key={section.title}>
              <h4 className="text-[11px] uppercase tracking-wider font-sans font-semibold text-ink-subtle dark:text-neutral-500 mb-2 px-2">
                {section.title}
              </h4>
              <ul className="space-y-0.5">
                {section.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={[
                        "block py-1.5 px-2 -mx-2 rounded text-[13.5px] leading-snug transition-colors",
                        isActive(item.href)
                          ? "bg-accent/10 text-accent dark:text-accent-muted font-medium"
                          : "text-ink-muted dark:text-neutral-400 hover:text-ink dark:hover:text-neutral-100 hover:bg-neutral-100/60 dark:hover:bg-neutral-900/60"
                      ].join(" ")}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </nav>

        <div className="mt-10 pt-6 border-t border-neutral-200 dark:border-neutral-800 text-[11px] text-ink-subtle dark:text-neutral-500 px-2 leading-relaxed">
          <p>
            原始文档：<br />
            <code className="text-[10.5px]">docs/AI与社会研究路线图.docx</code>
          </p>
        </div>
      </aside>
    </>
  );
}
