import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { getNav } from "@/lib/docs";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  const nav = getNav();
  return (
    <div className="min-h-screen">
      <Header variant="docs" />
      <div className="lg:grid lg:grid-cols-[16rem_1fr] xl:grid-cols-[18rem_1fr]">
        <Sidebar nav={nav} />
        <main className="min-w-0">{children}</main>
      </div>
    </div>
  );
}
