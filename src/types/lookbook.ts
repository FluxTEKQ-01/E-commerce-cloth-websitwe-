export type Lookbook = {
  slug: string;
  title: string;
  dek: string;
  date: string;
  location: string;
  images: { src: string; alt: string }[];
  featuredProductSlugs: string[];
};
