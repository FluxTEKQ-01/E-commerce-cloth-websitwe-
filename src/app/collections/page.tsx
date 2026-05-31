import type { Metadata } from "next";
import { CollectionCard } from "@/components/cards/collection-card";
import { PageShell } from "@/components/layout/page-shell";
import { collections } from "@/data/collections";

export const metadata: Metadata = { title: "Collections" };

export default function CollectionsPage() {
  return (
    <PageShell eyebrow="Collections" title="Wardrobes by mood." intro="Each collection is an editorial capsule tied to the weather, venues, and creative tempo of central Bengaluru.">
      <section className="container-shell grid gap-5 pb-20 md:grid-cols-3">
        {collections.map((collection, index) => <CollectionCard collection={collection} key={collection.slug} priority={index === 0} />)}
      </section>
    </PageShell>
  );
}
