import { ProductCard } from "@/components/cards/product-card";
import { products } from "@/data/products";

export function BestSellersSection() {
  return (
    <section className="container-shell render-later py-20">
      <p className="micro-label mb-4">Best sellers</p>
      <h2 className="section-title mb-10">The repeat pieces.</h2>
      <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
        {products.filter((product) => product.isBestSeller).map((product) => <ProductCard product={product} key={product.id} />)}
      </div>
    </section>
  );
}
