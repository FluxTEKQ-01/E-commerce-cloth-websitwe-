import type { Metadata } from "next";
import { ProductCard } from "@/components/cards/product-card";
import { PageShell } from "@/components/layout/page-shell";
import { products } from "@/data/products";

export const metadata: Metadata = { title: "New Arrivals" };

export default function NewArrivalsPage() {
  const arrivals = products.filter((product) => product.isNew);

  return (
    <PageShell eyebrow="Latest drop" title="Fresh on the rail." intro="New seasonal pieces for heat, rain, cafe hours, and after-dark movement.">
      <section className="container-shell grid grid-cols-2 gap-5 pb-20 lg:grid-cols-4">
        {arrivals.map((product, index) => <ProductCard product={product} key={product.id} priority={index < 2} />)}
      </section>
    </PageShell>
  );
}
