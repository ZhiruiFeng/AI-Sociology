import { DocRenderer } from "../../../components/DocRenderer";
import { getAllDocs, getDocBySlug } from "@/lib/docs";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  const docs = getAllDocs();
  return docs
    .filter((d) => d.slug.length > 0)
    .map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const decoded = slug.map((s) => decodeURIComponent(s));
  const doc = getDocBySlug(decoded);
  if (!doc) return {};
  return {
    title: doc.title,
    description: doc.description
  };
}

export default async function DocPage({
  params
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const decoded = slug.map((s) => decodeURIComponent(s));
  const doc = getDocBySlug(decoded);
  if (!doc) notFound();
  return <DocRenderer doc={doc} />;
}
