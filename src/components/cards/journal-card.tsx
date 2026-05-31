import Image from "next/image";
import Link from "next/link";
import type { JournalArticle } from "@/types/journal";

type JournalCardProps = {
  article: JournalArticle;
  priority?: boolean;
};

export function JournalCard({ article, priority = false }: JournalCardProps) {
  return (
    <Link className="focus-ring group grid gap-5 border-t border-border py-6 md:grid-cols-[0.7fr_1.3fr]" href={`/journal/${article.slug}`}>
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <Image alt={article.alt} className="object-cover transition duration-700 group-hover:scale-105" fill priority={priority} quality={68} sizes="(min-width: 768px) 25vw, 100vw" src={article.image} />
      </div>
      <div>
        <p className="micro-label">{article.category}</p>
        <h3 className="mt-3 font-display text-4xl font-semibold tracking-[-0.05em]">{article.title}</h3>
        <p className="mt-4 text-sm leading-7 text-muted-foreground">{article.excerpt}</p>
        <p className="mt-5 text-xs uppercase tracking-[0.16em] text-muted-foreground">{article.date} / {article.readTime}</p>
      </div>
    </Link>
  );
}
