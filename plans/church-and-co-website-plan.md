**Clarifying Questions**
1. Should product CTAs say `Enquire`, `Visit Store`, or `Add to Bag` even though checkout is out of scope?
2. Should `/shop`, `/collections`, `/lookbook`, and `/journal` include detail pages in v1, or listing pages only?
3. Do you want the data relationship diagram visible on the public site, or only as a developer/design-system section?
4. Should we use placeholder editorial images first, or do you have brand/product imagery ready?

**Recommended Direction**
Build Church & Co. as a static editorial commerce website: premium brand storytelling first, shopping showcase second. No auth, cart logic, payment, inventory, database, or backend.

The current `DESIGN.md` is unrelated to this brand. It should be replaced with a Church & Co. design system before implementation.

**Website Architecture**
```txt
src/
  app/
    layout.tsx
    page.tsx
    shop/page.tsx
    collections/page.tsx
    collections/[slug]/page.tsx
    new-arrivals/page.tsx
    lookbook/page.tsx
    lookbook/[slug]/page.tsx
    about/page.tsx
    journal/page.tsx
    journal/[slug]/page.tsx
    contact/page.tsx

  components/
    layout/
      site-header.tsx
      mobile-nav.tsx
      site-footer.tsx
      page-shell.tsx

    sections/
      hero-section.tsx
      featured-collection-section.tsx
      new-arrivals-section.tsx
      church-street-story-section.tsx
      lookbook-preview-section.tsx
      best-sellers-section.tsx
      testimonials-section.tsx
      newsletter-section.tsx
      store-info-section.tsx
      relationship-diagram-section.tsx

    cards/
      product-card.tsx
      collection-card.tsx
      lookbook-card.tsx
      journal-card.tsx
      testimonial-card.tsx

    ui/
      shadcn components

  data/
    brand.ts
    navigation.ts
    collections.ts
    products.ts
    lookbooks.ts
    journal.ts
    testimonials.ts
    store.ts
    relationships.ts

  types/
    brand.ts
    product.ts
    collection.ts
    lookbook.ts
    journal.ts

  lib/
    utils.ts
```

**Page Hierarchy**
| Route | Purpose |
| --- | --- |
| `/` | Immersive homepage with brand, collections, products, story, lookbook, testimonials, newsletter |
| `/shop` | Static product showcase with simple category/tag filtering |
| `/collections` | Collection landing page |
| `/collections/[slug]` | Editorial collection detail with related products |
| `/new-arrivals` | Curated latest drops |
| `/lookbook` | Editorial gallery index |
| `/lookbook/[slug]` | Full visual campaign/story page |
| `/about` | Brand story, Church Street influence, positioning |
| `/journal` | Fashion/editorial articles |
| `/journal/[slug]` | Static article detail |
| `/contact` | Store location, hours, contact, social links, newsletter |

**Homepage Sections**
1. Hero Section: full-bleed editorial campaign visual, large headline, tagline, primary CTA.
2. Featured Collection: 2-3 large editorial collection cards.
3. New Arrivals: compact product grid with drop labels.
4. Church Street Story: location-led brand narrative.
5. Editorial Lookbook: asymmetric image gallery.
6. Best Sellers: curated product cards.
7. Testimonials: customer/community quotes.
8. Newsletter Signup: minimal email capture UI, no backend yet.
9. Footer: navigation, store info, social links.

**Static Data Model**
```txt
Brand
├── Collections
├── Products
├── Lookbooks
├── Journal Articles
└── Testimonials

Collections
└── Products

Products
├── Images
├── Variants
├── Categories
└── Tags

Lookbooks
└── Featured Products
```

Example product shape:

```ts
type Product = {
  id: string;
  slug: string;
  name: string;
  price: string;
  category: "Outerwear" | "Shirts" | "T-Shirts" | "Bottoms" | "Accessories";
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
```

**Component Hierarchy**
```txt
RootLayout
└── SiteHeader
└── Page Content
    ├── HeroSection
    ├── FeaturedCollectionSection
    │   └── CollectionCard
    ├── NewArrivalsSection
    │   └── ProductCard
    ├── ChurchStreetStorySection
    ├── LookbookPreviewSection
    │   └── LookbookCard
    ├── BestSellersSection
    │   └── ProductCard
    ├── TestimonialsSection
    │   └── TestimonialCard
    ├── NewsletterSection
    └── StoreInfoSection
└── SiteFooter
```

**shadcn/ui Components**
Use only the minimum set initially:

```bash
npx shadcn@latest init
npx shadcn@latest add button card badge input textarea sheet separator tabs accordion
```

Recommended usage:
- `Button`: CTAs
- `Card`: product, collection, article, testimonial wrappers
- `Badge`: new arrival, bestseller, collection label
- `Input`: newsletter/contact
- `Textarea`: contact form
- `Sheet`: mobile navigation/filter drawer
- `Separator`: footer and editorial section dividers
- `Tabs`: shop category groupings
- `Accordion`: FAQ/store info if needed

**Design System**
Brand aesthetic: premium urban streetwear, editorial, minimalist, Bengaluru-inspired.

Colors:
```css
--charcoal-black: #0D0D0D;
--soft-black: #121212;
--off-white: #F7F5F2;
--warm-beige: #D8CBB8;
--concrete-gray: #7A7A7A;
--electric-orange: #FF6B35;
```

Semantic tokens:
```css
--background: #0D0D0D;
--foreground: #F7F5F2;
--card: #121212;
--card-foreground: #F7F5F2;
--primary: #F7F5F2;
--primary-foreground: #0D0D0D;
--secondary: #D8CBB8;
--secondary-foreground: #0D0D0D;
--accent: #FF6B35;
--accent-foreground: #0D0D0D;
--muted: #1E1E1E;
--muted-foreground: #A8A29A;
--border: rgba(247, 245, 242, 0.14);
--ring: #FF6B35;
```

Typography:
- Display: `Playfair Display` or `Cormorant Garamond`
- Body: `Inter`
- Labels: uppercase Inter with letter spacing

Scale:
- Hero: `clamp(4.5rem, 9vw, 6rem)`
- Section heading: `clamp(3rem, 6vw, 4rem)`
- Card title: `1.5rem` to `2rem`
- Body: `1rem` to `1.125rem`
- Labels: `0.75rem` to `0.875rem`

Visual language:
- Dark editorial canvas
- Warm beige content surfaces
- Concrete gray supporting text
- Electric orange used sparingly for CTAs, focus rings, and drop labels
- Large imagery, generous whitespace, asymmetric layouts
- Avoid generic ecommerce grids as the dominant visual pattern

**Responsive Strategy**
Mobile:
- Sticky compact header
- `Sheet` mobile nav
- 1-column editorial sections
- 2-column product grid where product images remain readable
- Hero typography uses `clamp()`
- Lookbook becomes vertical stacked gallery

Tablet:
- 2-column editorial modules
- 3-column product grid
- Collection cards can alternate image/text rhythm

Desktop:
- Full-width editorial hero
- 4-column product grid
- Asymmetric lookbook layouts
- Sticky header
- Wide max container around `1440px`

**Motion Strategy**
Use subtle motion only.

Recommended:
```bash
npm install framer-motion
```

Use:
- fade-in section reveals
- product image hover swap
- subtle image reveal masks
- CTA hover lift
- light parallax on hero/lookbook imagery

Defer:
- GSAP
- Lenis
- complex scroll choreography

Respect `prefers-reduced-motion`.

**Relationship Diagram**
Use React Flow only if the diagram should be visible.

```bash
npm install @xyflow/react
```

Recommended behavior:
- Static nodes and edges
- `fitView`
- `nodesDraggable={false}`
- `nodesConnectable={false}`
- Accessible text fallback below the diagram
- Dynamically import the diagram to avoid adding client JS to every page

Diagram nodes:
```txt
Brand
Collections
Products
Lookbooks
Journal Articles
Testimonials
Images
Variants
Categories
Tags
Featured Products
```

**Implementation Roadmap**
Phase 1: Foundation
- Replace current design system with Church & Co. system.
- Configure fonts in `layout.tsx`.
- Add Tailwind v4 semantic tokens in `globals.css`.
- Initialize shadcn/ui.
- Add `cn()` utility.

Phase 2: Static Content
- Add typed data files for brand, navigation, products, collections, lookbooks, journal, testimonials, store.
- Add image placeholders and alt text.
- Define reusable TypeScript types.

Phase 3: Layout
- Build `SiteHeader`, `MobileNav`, `SiteFooter`, and `PageShell`.
- Add metadata for the brand.
- Add responsive navigation.

Phase 4: Homepage
- Build hero, featured collections, new arrivals, Church Street story, lookbook preview, best sellers, testimonials, newsletter, footer.

Phase 5: Core Pages
- Build `/shop`, `/collections`, `/new-arrivals`, `/lookbook`, `/about`, `/journal`, `/contact`.
- Add optional detail routes if approved.

Phase 6: Diagram
- Add React Flow relationship visualization if required.
- Add accessible fallback relationship list.

Phase 7: Polish
- Add Framer Motion selectively.
- Optimize responsive layouts.
- Add SEO metadata.
- Check accessibility.
- Optimize images.

Phase 8: Verification
```bash
npm run lint
npx tsc --noEmit
npm run build
```

**Risks**
- Existing `DESIGN.md` conflicts with the Church & Co. direction.
- Large editorial images can hurt performance if not optimized.
- Overusing animations can make the site feel gimmicky.
- Product grids can become generic unless balanced with editorial storytelling.
- Hero typography may break on mobile without `clamp()`.
- React Flow adds client-side weight, so it should be isolated.

**Copyable Starter Prompt**
```txt
Build the full Church & Co. website in the existing Next.js project.

Brand:
Church & Co. is a premium fashion and lifestyle boutique clothing brand located on Church Street, Bengaluru. Tagline: “Crafted for the Streets. Inspired by Bengaluru.”

Scope:
Create a static editorial commerce website. No auth, no accounts, no cart backend, no payment gateway, no inventory management, no database.

Stack:
Use Next.js App Router, TypeScript, Tailwind CSS v4, shadcn/ui, and static TypeScript data files. Use Framer Motion only for subtle animations. Use React Flow only for a static data relationship diagram if included.

Routes:
/
 /shop
 /collections
 /collections/[slug]
 /new-arrivals
 /lookbook
 /lookbook/[slug]
 /about
 /journal
 /journal/[slug]
 /contact

Homepage sections:
Hero Section, Featured Collection, New Arrivals, Church Street Story, Editorial Lookbook, Best Sellers, Testimonials, Newsletter Signup, Footer.

Design:
Premium urban streetwear aesthetic inspired by Church Street’s fashion culture, cafés, music scene, creative community, and independent lifestyle brands. The site should feel modern, premium, editorial, minimalist, urban, fashion-forward, creative, and sophisticated.

Avoid:
Generic ecommerce layouts, corporate designs, bright colorful themes, overcrowded interfaces, SaaS/dashboard styling, blueprint/glassmorphism workspace aesthetics.

Colors:
Charcoal Black #0D0D0D
Soft Black #121212
Off White #F7F5F2
Warm Beige #D8CBB8
Concrete Gray #7A7A7A
Electric Orange #FF6B35

Typography:
Use Playfair Display or Cormorant Garamond for headings and Inter for body text. Use large editorial type with responsive clamp sizing.

Components:
Navbar, Mobile Navigation, Hero Banner, Collection Cards, Product Cards, Lookbook Gallery, Editorial Sections, Testimonial Cards, Newsletter Form, Footer, Relationship Diagram.

Static data model:
Brand has Collections, Products, Lookbooks, Journal Articles, Testimonials.
Collections have Products.
Products have Images, Variants, Categories, Tags.
Lookbooks have Featured Products.

Implementation:
Replace the current starter design with Church & Co. branding. Create typed static data files under src/data and reusable types under src/types. Build reusable layout, section, and card components. Use shadcn/ui primitives where appropriate. Keep most components server-rendered; only use client components for mobile menu, motion, or React Flow.

Verification:
Run npm run lint, npx tsc --noEmit, and npm run build after implementation.
```
