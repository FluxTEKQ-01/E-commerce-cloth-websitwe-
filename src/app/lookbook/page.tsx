import type { Metadata } from "next";
import { LookbookCard } from "@/components/cards/lookbook-card";
import { PageShell } from "@/components/layout/page-shell";
import { lookbooks } from "@/data/lookbooks";

export const metadata: Metadata = { title: "Lookbook" };

export default function LookbookPage() {
  return (
    <PageShell eyebrow="Lookbook" title="Street-level campaigns." intro="Editorial stories photographed around the routes, storefronts, and late-night corners that shape the brand.">
      <section className="container-shell grid gap-10 pb-20 md:grid-cols-2">
        {lookbooks.map((lookbook, index) => <LookbookCard lookbook={lookbook} key={lookbook.slug} priority={index === 0} />)}
      </section>
    </PageShell>
  );
}
