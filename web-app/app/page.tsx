import Link from "next/link";
import { Header } from "@/components/Header";
import { ArrowRight, BookOpen, Compass, History, Layers, Sparkles } from "lucide-react";

const disciplines = [
  {
    label: "社会学",
    en: "Sociology",
    question: "AI 如何被嵌入既有的权力结构？",
    color: "from-orange-500/15 to-red-500/5",
    accent: "text-orange-700 dark:text-orange-300"
  },
  {
    label: "伦理学",
    en: "Ethics",
    question: "AI 应该做什么？谁来决定？",
    color: "from-blue-500/15 to-indigo-500/5",
    accent: "text-blue-700 dark:text-blue-300"
  },
  {
    label: "未来学",
    en: "Futurology",
    question: "我们走向哪些可能的未来？",
    color: "from-emerald-500/15 to-teal-500/5",
    accent: "text-emerald-700 dark:text-emerald-300"
  },
  {
    label: "技术哲学",
    en: "Philosophy of Technology",
    question: "AI 是一种什么样的存在？",
    color: "from-purple-500/15 to-fuchsia-500/5",
    accent: "text-purple-700 dark:text-purple-300"
  }
];

const phases = [
  {
    range: "月 1–3",
    title: "建立词汇与地图",
    detail: "四学科入门 · 学者卡片 · 历史对照矩阵",
    output: "3000 字四学科对比 · 2000 字对照矩阵"
  },
  {
    range: "月 4–6",
    title: "流派深耕",
    detail: "选定主场 · 横扫客场 · 内部争论地图",
    output: "8000–10000 字流派现状报告"
  },
  {
    range: "月 7–9",
    title: "历史比较",
    detail: "对照案例 · 多维分析框架 · 投稿期刊",
    output: "15000–20000 字深度对照文章"
  },
  {
    range: "月 10–12",
    title: "原创框架",
    detail: "提取张力 · 框架草图 · 公开演讲",
    output: "3000–5000 字框架草图 · 预印本"
  }
];

const deepDives = [
  {
    id: "D1",
    title: "AI 作为通用技术",
    subtitle: "经济学共识与社会学补丁",
    href: "/docs/deep-dives/D1-AI作为通用技术深度分析"
  },
  {
    id: "D2",
    title: "批判算法研究学派地图",
    subtitle: "四类立场 · 五条主线 · 三个争论",
    href: "/docs/deep-dives/D2-批判算法研究学派地图"
  },
  {
    id: "D3",
    title: "AI 社会学新兴学科",
    subtitle: "2024–2026 自觉形成中",
    href: "/docs/deep-dives/D3-AI社会学新兴学科"
  },
  {
    id: "D4",
    title: "价值对齐的哲学问题",
    subtitle: "从工程到规范的三个层次",
    href: "/docs/deep-dives/D4-价值对齐的哲学问题"
  },
  {
    id: "D5",
    title: "中文哲学传统与 AI",
    subtitle: "被低估的原创性来源",
    href: "/docs/deep-dives/D5-中文哲学传统与AI"
  }
];

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="relative grain border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
          <div className="text-[12px] uppercase tracking-[0.18em] font-sans font-semibold text-accent mb-6">
            2026 · 研究路线图 / Research Roadmap
          </div>
          <h1 className="font-serif text-4xl lg:text-6xl leading-[1.15] tracking-tight text-ink dark:text-neutral-50 mb-6">
            AI 与社会
            <span className="block text-2xl lg:text-3xl mt-4 text-ink-muted dark:text-neutral-400 font-sans font-normal">
              从技术从业者到独立研究者的<br className="hidden lg:block" />
              系统性研究路径
            </span>
          </h1>
          <p className="max-w-2xl text-lg lg:text-xl leading-relaxed text-ink-muted dark:text-neutral-400 mb-10 font-serif">
            技术能力以 18–24 个月翻倍的速度推进，对其进行系统性思考的人文社科理论框架却严重滞后。
            这份路线图把<strong className="text-ink dark:text-neutral-100">社会学</strong>、
            <strong className="text-ink dark:text-neutral-100">伦理学</strong>、
            <strong className="text-ink dark:text-neutral-100">未来学</strong>、
            <strong className="text-ink dark:text-neutral-100">技术哲学</strong>
            四个学科视角组织为 12 个月可执行的研究计划。
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/docs"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-ink dark:bg-neutral-100 text-paper dark:text-night rounded-md hover:bg-ink-muted dark:hover:bg-neutral-300 transition-colors text-sm font-medium"
            >
              进入研究文档 <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/docs/03-12月路线图"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-neutral-300 dark:border-neutral-700 text-ink dark:text-neutral-100 rounded-md hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-colors text-sm font-medium"
            >
              查看 12 个月计划
            </Link>
          </div>
        </div>
      </section>

      {/* Why now */}
      <section className="border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid lg:grid-cols-[1fr_2fr] gap-12">
            <div>
              <h2 className="font-serif text-3xl text-ink dark:text-neutral-50 mb-4 tracking-tight">
                为什么是现在
              </h2>
              <div className="text-[12px] uppercase tracking-wider text-accent font-sans font-semibold">
                Why Now
              </div>
            </div>
            <div className="space-y-5 text-ink-muted dark:text-neutral-400 leading-relaxed font-serif text-[17px]">
              <p>
                当前的话语生态被三种声音主导——
                <strong className="text-ink dark:text-neutral-100">技术乐观主义</strong>（硅谷布道者）、
                <strong className="text-ink dark:text-neutral-100">存在风险叙事</strong>（AI 安全社群）、
                <strong className="text-ink dark:text-neutral-100">当下危害批判</strong>（批判算法研究学派）。
                三者各自重要，但都不足以提供完整图景。
              </p>
              <p>
                AI 当下所处的位置，大致对应 <strong className="text-ink dark:text-neutral-100">1995 年的互联网</strong>——
                大众已知道它会改变一切，但没有人完整说清楚它如何改变、改变什么、按什么顺序改变。
              </p>
              <p className="text-accent dark:text-accent-muted font-medium">
                话语权的窗口期是真实存在的。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Four disciplines */}
      <section className="border-b border-neutral-200 dark:border-neutral-800 bg-gradient-to-b from-transparent to-neutral-50/50 dark:to-neutral-950/30">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
          <div className="mb-12">
            <div className="text-[12px] uppercase tracking-wider font-sans font-semibold text-accent mb-3">
              第一部分 · Part I
            </div>
            <h2 className="font-serif text-3xl lg:text-4xl text-ink dark:text-neutral-50 tracking-tight">
              四学科视角的前沿理论地图
            </h2>
            <p className="mt-3 text-ink-muted dark:text-neutral-400 max-w-2xl">
              不预设 AI"是什么"，观察"AI 在做什么"、"对谁有利"、"用什么话语合法化自己"。
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {disciplines.map((d) => (
              <div
                key={d.label}
                className={`relative rounded-lg p-6 bg-gradient-to-br ${d.color} border border-neutral-200/60 dark:border-neutral-800/60 hover:shadow-md transition-shadow group`}
              >
                <div className="text-[11px] uppercase tracking-wider font-sans font-semibold text-ink-subtle dark:text-neutral-500 mb-2">
                  {d.en}
                </div>
                <h3 className={`font-serif text-2xl ${d.accent} mb-4`}>{d.label}</h3>
                <p className="text-[14px] leading-relaxed text-ink dark:text-neutral-200">
                  {d.question}
                </p>
              </div>
            ))}
          </div>
          <Link
            href="/docs/01-四学科视角理论地图"
            className="mt-8 inline-flex items-center gap-1.5 text-sm text-accent dark:text-accent-muted hover:gap-2.5 transition-all"
          >
            阅读完整理论地图 <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* 12-month roadmap */}
      <section className="border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
          <div className="mb-12 grid lg:grid-cols-[2fr_3fr] gap-10 items-end">
            <div>
              <div className="text-[12px] uppercase tracking-wider font-sans font-semibold text-accent mb-3">
                第三部分 · Part III
              </div>
              <h2 className="font-serif text-3xl lg:text-4xl text-ink dark:text-neutral-50 tracking-tight">
                12 个月研究路线图
              </h2>
              <p className="mt-3 text-ink-muted dark:text-neutral-400">
                每周 7–10 小时投入，12 个月完成"从入门到提出原创框架"。
              </p>
            </div>
            <p className="text-ink-muted dark:text-neutral-400 leading-relaxed text-[15px] font-serif">
              建议第一遍通读一次（约 90 分钟），第二遍按月执行。每月回头修订一次这份文档，把新发现的学者、新意识到的问题加进来——这本身就是 PKM（个人知识管理）的最佳实践。
            </p>
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-4">
            {phases.map((p, i) => (
              <div
                key={p.range}
                className="relative bg-paper-card dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg p-6 hover:border-accent/40 transition-colors"
              >
                <div className="absolute -top-3 left-6 px-2 py-0.5 bg-accent text-white text-[10px] uppercase tracking-wider rounded font-semibold">
                  阶段 {["一", "二", "三", "四"][i]}
                </div>
                <div className="text-sm text-ink-subtle dark:text-neutral-500 mb-1">{p.range}</div>
                <h3 className="font-serif text-xl text-ink dark:text-neutral-100 mb-3">{p.title}</h3>
                <p className="text-[13px] leading-relaxed text-ink-muted dark:text-neutral-400 mb-3">
                  {p.detail}
                </p>
                <div className="pt-3 border-t border-neutral-200 dark:border-neutral-800 text-[12px] text-ink-subtle dark:text-neutral-500">
                  <span className="text-accent dark:text-accent-muted font-medium">产出 </span>
                  {p.output}
                </div>
              </div>
            ))}
          </div>
          <Link
            href="/docs/03-12月路线图"
            className="mt-8 inline-flex items-center gap-1.5 text-sm text-accent dark:text-accent-muted hover:gap-2.5 transition-all"
          >
            查看每月细节 <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* Deep dives */}
      <section className="border-b border-neutral-200 dark:border-neutral-800 bg-gradient-to-b from-transparent to-neutral-50/50 dark:to-neutral-950/30">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
          <div className="mb-12">
            <div className="text-[12px] uppercase tracking-wider font-sans font-semibold text-accent mb-3 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              初始深度研究 · Deep Dives
            </div>
            <h2 className="font-serif text-3xl lg:text-4xl text-ink dark:text-neutral-50 tracking-tight mb-3">
              五篇初始研究综述
            </h2>
            <p className="text-ink-muted dark:text-neutral-400 max-w-2xl">
              这五篇综述对应路线图第一阶段（月 1–3）应产出的"研究输出"。它们不是终点，而是
              <strong className="text-ink dark:text-neutral-100">进入问题的起点</strong>——每篇都标注了开放问题与下一步方向。
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {deepDives.map((d) => (
              <Link
                key={d.id}
                href={d.href}
                className="group relative bg-paper-card dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg p-6 hover:border-accent dark:hover:border-accent-muted transition-colors block"
              >
                <div className="text-[11px] font-mono font-semibold text-accent dark:text-accent-muted mb-2">
                  {d.id}
                </div>
                <h3 className="font-serif text-xl text-ink dark:text-neutral-100 mb-2 leading-snug">
                  {d.title}
                </h3>
                <p className="text-[13.5px] text-ink-muted dark:text-neutral-400 leading-relaxed">
                  {d.subtitle}
                </p>
                <ArrowRight className="absolute bottom-5 right-5 w-4 h-4 text-ink-subtle dark:text-neutral-600 group-hover:text-accent dark:group-hover:text-accent-muted group-hover:translate-x-0.5 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Quick access */}
      <section className="border-b border-neutral-200 dark:border-neutral-800">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-16">
          <h2 className="font-serif text-2xl text-ink dark:text-neutral-50 mb-8 tracking-tight">
            快速进入
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 text-sm">
            {[
              { icon: Compass, label: "序言 · 研究定位", href: "/docs/00-序言-研究定位" },
              { icon: Layers, label: "四学科理论地图", href: "/docs/01-四学科视角理论地图" },
              { icon: History, label: "四类历史镜鉴", href: "/docs/02-历史镜鉴" },
              { icon: BookOpen, label: "核心概念词汇表", href: "/docs/glossary" }
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 px-4 py-3 border border-neutral-200 dark:border-neutral-800 rounded-md hover:border-accent dark:hover:border-accent-muted hover:bg-neutral-50 dark:hover:bg-neutral-900 transition-colors text-ink dark:text-neutral-200"
              >
                <item.icon className="w-4 h-4 text-ink-subtle dark:text-neutral-500" />
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center text-sm text-ink-subtle dark:text-neutral-500 leading-relaxed">
          <p className="font-serif italic mb-2">
            "一个学派的形成，不是因为某个人天才，而是因为一群人在一段时间里集中思考同一个问题。"
          </p>
          <p className="text-[12px]">—— 改写自 Michel Foucault</p>
          <div className="mt-6 text-[11px]">
            起草于 2026 年 5 月 · 这份地图至少有 30% 是错的——这是正常的，也是好的
          </div>
        </div>
      </footer>
    </div>
  );
}
