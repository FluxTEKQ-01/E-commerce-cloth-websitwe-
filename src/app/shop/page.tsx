import type { Metadata } from "next";
import { ProductCard } from "@/components/cards/product-card";
import { PageShell } from "@/components/layout/page-shell";
import { products } from "@/data/products";

export const metadata: Metadata = { title: "Shop" };

const categories = ["Outerwear", "Shirts", "T-Shirts", "Bottoms", "Accessories"] as const;

export default function ShopPage() {
  return (
    <PageShell eyebrow="Shop" title="The full edit." intro="Static product showcase only. Visit the Church Street store for sizing, availability, and purchases.">
      <section className="container-shell pb-20">
        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((category) => <span className="border border-border px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] text-muted-foreground" key={category}>{category}</span>)}
        </div>
        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
          {products.map((product, index) => <ProductCard product={product} key={product.id} priority={index < 2} />)}
        </div>
      </section>
    </PageShell>
  );
}
