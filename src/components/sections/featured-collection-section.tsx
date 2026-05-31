import Link from "next/link";
import { CollectionCard } from "@/components/cards/collection-card";
import { collections } from "@/data/collections";

export function FeaturedCollectionSection() {
  return (
    <section className="container-shell render-later py-20">
      <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="micro-label mb-4">Collections</p>
          <h2 className="section-title">Seasonal city edits.</h2>
        </div>
        <Link className="focus-ring text-sm font-black uppercase tracking-[0.16em] text-accent" href="/collections">All collections</Link>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {collections.filter((collection) => collection.featured).map((collection, index) => <CollectionCard collection={collection} key={collection.slug} priority={index === 0} />)}
      </div>
    </section>
  );
}
