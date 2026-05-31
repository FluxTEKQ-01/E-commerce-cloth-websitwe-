# Church & Co. Design System

Church & Co. uses a dark editorial commerce system for a premium streetwear boutique on Church Street, Bengaluru.

## Stack

- Framework: Next.js App Router, React, TypeScript
- Styling: Tailwind CSS v4 with semantic tokens in `src/app/globals.css`
- Components: Minimal custom server components
- Fonts: Inter for body, Cormorant Garamond for display headings
- Images: `next/image` with Unsplash remote placeholders

## Visual Direction

- Premium urban streetwear, editorial, minimalist, Bengaluru-inspired
- Dark charcoal canvas with warm beige content moments
- Electric orange used sparingly for CTAs, focus, and drop labels
- Large imagery, asymmetric sections, generous whitespace
- Avoid generic ecommerce grids as the dominant page experience

## Tokens

- `--charcoal-black`: `#0D0D0D`
- `--soft-black`: `#121212`
- `--off-white`: `#F7F5F2`
- `--warm-beige`: `#D8CBB8`
- `--concrete-gray`: `#7A7A7A`
- `--electric-orange`: `#FF6B35`

Semantic tokens are mapped to Tailwind with `@theme inline` in `globals.css`.

## Typography

- Display headings use `.display-title` or `.section-title`
- Labels use `.micro-label`
- Body copy uses relaxed leading and muted foregrounds for editorial pacing

## Core Utilities

- `.church-canvas`: dark textured page background
- `.container-shell`: max-width page container
- `.editorial-card`: dark bordered content surface
- `.beige-panel`: warm beige editorial block
- `.focus-ring`: visible orange focus treatment

## Accessibility

- Keep visible focus on all interactive elements
- Use `next/image` alt text for all imagery
- Keep contact and newsletter forms static until backend scope is added
