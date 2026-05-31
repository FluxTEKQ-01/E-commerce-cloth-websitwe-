import Link from "next/link";
import { ProductCard } from "@/components/cards/product-card";
import { products } from "@/data/products";

export function NewArrivalsSection() {
  const newProducts = products.filter((product) => product.isNew).slice(0, 4);

  return (
    <section className="container-shell render-later py-20">
      <div className="mb-10 flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="micro-label mb-4">New arrivals</p>
          <h2 className="section-title">Fresh on the rail.</h2>
        </div>
        <Link className="focus-ring text-sm font-black uppercase tracking-[0.16em] text-accent" href="/new-arrivals">View drop</Link>
      </div>
      <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
        {newProducts.map((product) => <ProductCard product={product} key={product.id} />)}
      </div>
    </section>
  );
}
