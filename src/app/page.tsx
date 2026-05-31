import { BestSellersSection } from "@/components/sections/best-sellers-section";
import { FeaturedCollectionSection } from "@/components/sections/featured-collection-section";
import { HeroSection } from "@/components/sections/hero-section";
import { LookbookPreviewSection } from "@/components/sections/lookbook-preview-section";
import { NewArrivalsSection } from "@/components/sections/new-arrivals-section";
import { NewsletterSection } from "@/components/sections/newsletter-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";

export default function Home() {
  return (
    <main className="church-canvas min-h-screen pt-20">
      <HeroSection />
      <FeaturedCollectionSection />
      <NewArrivalsSection />
      <LookbookPreviewSection />
      <BestSellersSection />
      <TestimonialsSection />
      <NewsletterSection />
    </main>
  );
}
