"use client";

import type { TocItem } from "@/lib/mdx";
import { useEffect, useState } from "react";

export function TableOfContents({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    if (items.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-80px 0px -70% 0px",
        threshold: 0
      }
    );

    items.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  if (items.length === 0) return null;

  return (
    <nav className="text-sm">
      <h4 className="text-[11px] uppercase tracking-wider font-semibold text-ink-subtle dark:text-neutral-500 mb-3">
        本页目录
      </h4>
      <ul className="space-y-1 border-l border-neutral-200 dark:border-neutral-800">
        {items.map((item) => (
          <li key={item.id} style={{ paddingLeft: (item.depth - 2) * 12 }}>
            <a
              href={`#${item.id}`}
              className={[
                "block pl-3 -ml-px py-1 border-l text-[13px] transition-colors",
                activeId === item.id
                  ? "toc-active font-medium"
                  : "border-transparent text-ink-muted dark:text-neutral-400 hover:text-ink dark:hover:text-neutral-100"
              ].join(" ")}
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
