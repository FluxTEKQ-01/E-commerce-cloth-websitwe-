import Image from "next/image";
import type { Product } from "@/types/product";

type ProductCardProps = {
  product: Product;
  priority?: boolean;
};

export function ProductCard({ product, priority = false }: ProductCardProps) {
  return (
    <article className="group">
      <div className="relative aspect-[4/5] overflow-hidden bg-muted">
        <Image
          alt={product.images.alt}
          className="object-cover transition duration-700 group-hover:scale-105"
          fill
          priority={priority}
          quality={68}
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
          src={product.images.primary}
        />
        <div className="absolute left-3 top-3 flex gap-2">
          {product.isNew ? <span className="bg-accent px-2 py-1 text-[0.65rem] font-black uppercase tracking-[0.14em] text-accent-foreground">New</span> : null}
          {product.isBestSeller ? <span className="bg-background/85 px-2 py-1 text-[0.65rem] font-black uppercase tracking-[0.14em]">Best</span> : null}
        </div>
      </div>
      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-2xl font-semibold tracking-[-0.04em]">{product.name}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{product.category}</p>
        </div>
        <p className="text-sm font-bold">{product.price}</p>
      </div>
    </article>
  );
}
