import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/layout/page-shell";
import { journal } from "@/data/journal";

type JournalPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return journal.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: JournalPageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = journal.find((item) => item.slug === slug);
  return { title: article?.title ?? "Journal" };
}

export default async function JournalArticlePage({ params }: JournalPageProps) {
  const { slug } = await params;
  const article = journal.find((item) => item.slug === slug);
  if (!article) notFound();

  return (
    <PageShell eyebrow={`${article.category} / ${article.date}`} title={article.title} intro={article.excerpt}>
      <article className="container-shell grid gap-10 pb-20 md:grid-cols-[0.8fr_1.2fr]">
        <div className="relative min-h-[30rem] overflow-hidden bg-muted">
          <Image alt={article.alt} className="object-cover" fill priority quality={76} sizes="(min-width: 768px) 40vw, 100vw" src={article.image} />
        </div>
        <div className="space-y-7 text-lg leading-9 text-muted-foreground">
          {article.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </article>
    </PageShell>
  );
}
