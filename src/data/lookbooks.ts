import type { Lookbook } from "@/types/lookbook";

export const lookbooks: Lookbook[] = [
  {
    slug: "cafe-to-curfew",
    title: "Cafe to Curfew",
    dek: "A full-day edit moving from first coffee to the last open shutter.",
    date: "January 2026",
    location: "Church Street",
    images: [
      { src: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1200&q=80", alt: "Streetwear editorial in city light" },
      { src: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=1200&q=80", alt: "Layered fashion look on a city street" },
      { src: "https://images.unsplash.com/photo-1495385794356-15371f348c31?auto=format&fit=crop&w=1200&q=80", alt: "Editorial portrait in neutral clothing" },
    ],
    featuredProductSlugs: ["ash-cotton-overshirt", "brigade-relaxed-trouser"],
  },
  {
    slug: "rain-on-brigade",
    title: "Rain on Brigade",
    dek: "Monsoon weight layers photographed between wet concrete and warm cafe glass.",
    date: "February 2026",
    location: "Brigade Road",
    images: [
      { src: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80", alt: "Model wearing light outerwear" },
      { src: "https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?auto=format&fit=crop&w=1200&q=80", alt: "Fashion portrait near concrete architecture" },
      { src: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=1200&q=80", alt: "Editorial streetwear movement" },
    ],
    featuredProductSlugs: ["rainline-shell", "cafe-canvas-tote"],
  },
];
