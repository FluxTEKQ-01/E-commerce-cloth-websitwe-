import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ProductCard } from "@/components/cards/product-card";
import { PageShell } from "@/components/layout/page-shell";
import { lookbooks } from "@/data/lookbooks";
import { products } from "@/data/products";

type LookbookPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return lookbooks.map((lookbook) => ({ slug: lookbook.slug }));
}

export async function generateMetadata({ params }: LookbookPageProps): Promise<Metadata> {
  const { slug } = await params;
  const lookbook = lookbooks.find((item) => item.slug === slug);
  return { title: lookbook?.title ?? "Lookbook" };
}

export default async function LookbookDetailPage({ params }: LookbookPageProps) {
  const { slug } = await params;
  const lookbook = lookbooks.find((item) => item.slug === slug);
  if (!lookbook) notFound();

  const featuredProducts = products.filter((product) => lookbook.featuredProductSlugs.includes(product.slug));

  return (
    <PageShell eyebrow={`${lookbook.date} / ${lookbook.location}`} title={lookbook.title} intro={lookbook.dek}>
      <section className="container-shell grid gap-5 pb-20 md:grid-cols-3">
        {lookbook.images.map((image, index) => (
          <div className={index === 0 ? "relative min-h-[36rem] overflow-hidden bg-muted md:col-span-2" : "relative min-h-[36rem] overflow-hidden bg-muted"} key={image.src}>
            <Image alt={image.alt} className="object-cover" fill priority={index === 0} quality={index === 0 ? 76 : 68} sizes={index === 0 ? "(min-width: 768px) 66vw, 100vw" : "(min-width: 768px) 33vw, 100vw"} src={image.src} />
          </div>
        ))}
      </section>
      <section className="container-shell render-later pb-20">
        <h2 className="section-title mb-10">Featured products.</h2>
        <div className="grid grid-cols-2 gap-5 lg:grid-cols-4">
          {featuredProducts.map((product) => <ProductCard product={product} key={product.id} />)}
        </div>
      </section>
    </PageShell>
  );
}
