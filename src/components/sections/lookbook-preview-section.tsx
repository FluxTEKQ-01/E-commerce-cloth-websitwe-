import { LookbookCard } from "@/components/cards/lookbook-card";
import { lookbooks } from "@/data/lookbooks";

export function LookbookPreviewSection() {
  return (
    <section className="container-shell render-later py-20">
      <p className="micro-label mb-4">Lookbook</p>
      <h2 className="section-title mb-10 max-w-3xl">Campaigns from the neighborhood.</h2>
      <div className="grid gap-8 md:grid-cols-2">
        {lookbooks.map((lookbook, index) => <LookbookCard lookbook={lookbook} key={lookbook.slug} priority={index === 0} />)}
      </div>
    </section>
  );
}
