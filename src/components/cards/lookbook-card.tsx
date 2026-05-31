import Image from "next/image";
import Link from "next/link";
import type { Lookbook } from "@/types/lookbook";

type LookbookCardProps = {
  lookbook: Lookbook;
  priority?: boolean;
};

export function LookbookCard({ lookbook, priority = false }: LookbookCardProps) {
  return (
    <Link className="focus-ring group block" href={`/lookbook/${lookbook.slug}`}>
      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
        <Image alt={lookbook.images[0].alt} className="object-cover transition duration-700 group-hover:scale-105" fill priority={priority} quality={70} sizes="(min-width: 768px) 50vw, 100vw" src={lookbook.images[0].src} />
      </div>
      <p className="micro-label mt-5">{lookbook.location}</p>
      <h3 className="mt-2 font-display text-4xl font-semibold tracking-[-0.05em]">{lookbook.title}</h3>
      <p className="mt-3 text-sm leading-7 text-muted-foreground">{lookbook.dek}</p>
    </Link>
  );
}
