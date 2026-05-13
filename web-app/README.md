# AI 与社会 · 研究路线图（Web）

把 [`/docs/AI与社会研究路线图.docx`](../docs/AI与社会研究路线图.docx) 拆解后的研究文档（位于 [`/docs/research/`](../docs/research/)）渲染为一个可浏览的静态网站。

## 技术栈

- **Next.js 15** App Router + React 19，静态生成（SSG）
- **Tailwind CSS** + `@tailwindcss/typography`（中文优化）
- **next-themes** 深色/浅色模式
- **remark / rehype** 管线：`remark-gfm`、`rehype-slug`、`rehype-autolink-headings` + 自定义 `.md` 链接重写插件
- **gray-matter** 解析 frontmatter
- **lucide-react** 图标

## 目录结构

```
web-app/
├── app/
│   ├── layout.tsx          # 根布局 + ThemeProvider
│   ├── page.tsx            # 首页（hero、四学科、12 月计划、深度研究）
│   ├── globals.css         # Tailwind + 中文排印
│   └── docs/
│       ├── layout.tsx      # docs 布局（带 sidebar）
│       ├── page.tsx        # /docs → 渲染 README.md
│       └── [...slug]/
│           └── page.tsx    # /docs/* → 动态渲染任意 md 文件
├── components/
│   ├── Header.tsx
│   ├── Sidebar.tsx         # 客户端导航 + 移动端抽屉
│   ├── TableOfContents.tsx # 右侧 TOC + IntersectionObserver
│   ├── DocRenderer.tsx     # 解析 md → html，渲染 + prev/next 导航
│   ├── ThemeProvider.tsx
│   └── ThemeToggle.tsx
├── lib/
│   ├── docs.ts             # 读取 ../docs/research/，构建 nav 树
│   └── mdx.ts              # markdown 渲染 + 内部 .md 链接重写
└── tailwind.config.ts      # 自定义 prose 主题（serif 中文 + 排印细节）
```

## 内容源

文档**不在本目录**，位于 [`../docs/research/`](../docs/research/)。`lib/docs.ts` 在构建/请求时读取该目录，提取 frontmatter 与正文。

frontmatter 约定：

```yaml
---
title: 文档标题
description: 一句话描述（可选）
order: 1                # 排序权重（侧边栏顺序）
section: 序言            # 侧边栏分组
---
```

侧边栏分组顺序：`序言 → 理论地图 → 历史镜鉴 → 路线图 → 必读清单 → 方法与工具 → 长期策略 → 附录 → 词汇表 → 深度研究`

## 路由

| URL | 内容 |
| --- | --- |
| `/` | 着陆页（hero、学科卡片、12 月计划、深度研究入口） |
| `/docs` | 研究路线图索引（`README.md`） |
| `/docs/<slug>` | 单篇文档，如 `/docs/01-四学科视角理论地图` |
| `/docs/deep-dives/<slug>` | 深度研究综述 |
| `/docs/glossary` | 核心概念词汇表 |

URL 中允许中文字符。Markdown 内的相对链接（`./xxx.md`、`../xxx.md`）会在渲染时被自定义 rehype 插件重写为站内路径，无需修改原文。

## 开发

```bash
npm install
npm run dev          # http://localhost:3000
npm run dev -- -p 3031  # 自定义端口
```

## 构建 / 部署

```bash
npm run build        # 全部 19 个页面预渲染为静态 HTML
npm run start        # 本地启动生产构建
```

部署目标可以是任何支持 Node.js 的平台（Vercel、Cloudflare Pages、Netlify、自托管）。由于全部页面都是 SSG，也可以 `next export` 为纯静态站点。

## 设计取向

- **中文优先排印**：正文使用 serif（Source Han Serif / Noto Serif SC / Songti SC fallback），标题与 UI 使用系统 sans
- **窄行高 + 大间距**：1.85 行高，h2/h3 上下间距加大
- **配色克制**：浅色用 `#fafaf7` 纸色 + `#a5462b` 朱砂作强调；深色版自动反转
- **导航三层**：顶部 header / 左侧 sidebar / 右侧 TOC
- **手机端**：sidebar 转为悬浮抽屉，TOC 自动隐藏

## 添加新文档

1. 在 `../docs/research/` 或 `../docs/research/deep-dives/` 新建 `.md`，加 frontmatter
2. 文件名即 URL slug（不含 `.md`）
3. 重启 `npm run dev`（生产环境为重新 build）
