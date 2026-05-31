import Image from "next/image";
import Link from "next/link";
import type { Collection } from "@/types/collection";

type CollectionCardProps = {
  collection: Collection;
  priority?: boolean;
};

export function CollectionCard({ collection, priority = false }: CollectionCardProps) {
  return (
    <Link className="focus-ring group editorial-card block overflow-hidden" href={`/collections/${collection.slug}`}>
      <div className="relative aspect-[5/6] overflow-hidden">
        <Image alt={collection.alt} className="object-cover transition duration-700 group-hover:scale-105" fill priority={priority} quality={70} sizes="(min-width: 1024px) 32vw, (min-width: 768px) 50vw, 100vw" src={collection.image} />
      </div>
      <div className="p-6">
        <p className="micro-label">{collection.season}</p>
        <h3 className="mt-3 font-display text-4xl font-semibold tracking-[-0.05em]">{collection.title}</h3>
        <p className="mt-4 text-sm leading-7 text-muted-foreground">{collection.summary}</p>
      </div>
    </Link>
  );
}
