export type ProductCategory =
  | "Outerwear"
  | "Shirts"
  | "T-Shirts"
  | "Bottoms"
  | "Accessories";

export type Product = {
  id: string;
  slug: string;
  name: string;
  price: string;
  category: ProductCategory;
  collectionSlug: string;
  description: string;
  images: {
    primary: string;
    hover?: string;
    alt: string;
  };
  variants: {
    sizes: string[];
    colors?: string[];
  };
  tags: string[];
  isNew?: boolean;
  isBestSeller?: boolean;
};
