import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "AI 与社会 · 研究路线图",
    template: "%s · AI 与社会"
  },
  description:
    "一份从技术从业者到独立研究者的系统性研究路线图——社会学、伦理学、未来学、技术哲学四学科视角",
  openGraph: {
    title: "AI 与社会 · 研究路线图",
    description:
      "社会学 · 伦理学 · 未来学 · 技术哲学 四学科视角下的 AI 与社会研究",
    type: "website",
    locale: "zh_CN"
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
