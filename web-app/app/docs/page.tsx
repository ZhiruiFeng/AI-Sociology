import { DocRenderer } from "../../components/DocRenderer";
import { getDocBySlug } from "@/lib/docs";
import { notFound } from "next/navigation";

export const dynamicParams = false;

export async function generateMetadata() {
  const doc = getDocBySlug([]);
  if (!doc) return {};
  return {
    title: doc.title,
    description: doc.description
  };
}

export default async function DocsIndex() {
  const doc = getDocBySlug([]);
  if (!doc) notFound();
  return <DocRenderer doc={doc} />;
}
