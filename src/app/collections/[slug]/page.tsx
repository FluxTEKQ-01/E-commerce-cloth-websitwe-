import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ProductCard } from "@/components/cards/product-card";
import { PageShell } from "@/components/layout/page-shell";
import { collections } from "@/data/collections";
import { products } from "@/data/products";

type CollectionPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return collections.map((collection) => ({ slug: collection.slug }));
}

export async function generateMetadata({ params }: CollectionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const collection = collections.find((item) => item.slug === slug);
  return { title: collection?.title ?? "Collection" };
}

export default async function CollectionDetailPage({ params }: CollectionPageProps) {
  const { slug } = await params;
  const collection = collections.find((item) => item.slug === slug);
  if (!collection) notFound();

  const relatedProducts = products.filter((product) => product.collectionSlug === collection.slug);

  return (
    <PageShell eyebrow={collection.season} title={collection.title} intro={collection.summary}>
      <section className="container-shell grid gap-8 pb-20 md:grid-cols-[1.1fr_0.9fr]">
        <div className="relative min-h-[32rem] overflow-hidden bg-muted">
          <Image alt={collection.alt} className="object-cover" fill priority quality={76} sizes="(min-width: 768px) 55vw, 100vw" src={collection.image} />
        </div>
        <div className="editorial-card self-end p-8">
          <p className="micro-label mb-4">Story</p>
          <p className="text-lg leading-9 text-muted-foreground">{collection.story}</p>
        </div>
      </section>
      <section className="container-shell render-later pb-20">
        <h2 className="section-title mb-10">Related pieces.</h2>
        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
          {relatedProducts.map((product) => <ProductCard product={product} key={product.id} />)}
        </div>
      </section>
    </PageShell>
  );
}
