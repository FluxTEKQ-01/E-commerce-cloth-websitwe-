import type { Metadata } from "next";
import { JournalCard } from "@/components/cards/journal-card";
import { PageShell } from "@/components/layout/page-shell";
import { journal } from "@/data/journal";

export const metadata: Metadata = { title: "Journal" };

export default function JournalPage() {
  return (
    <PageShell eyebrow="Journal" title="Notes from the street." intro="Short essays on fabric, city rhythm, wardrobe repetition, and the cultural texture around Church Street.">
      <section className="container-shell pb-20">
        {journal.map((article, index) => <JournalCard article={article} key={article.slug} priority={index === 0} />)}
      </section>
    </PageShell>
  );
}
