---
name: Church & Co. Design System
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0edec'
  surface-container-high: '#ebe7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1c1b1b'
  on-surface-variant: '#444748'
  inverse-surface: '#313030'
  inverse-on-surface: '#f3f0ef'
  outline: '#747878'
  outline-variant: '#c4c7c7'
  surface-tint: '#5f5e5e'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#1c1b1b'
  on-primary-container: '#858383'
  inverse-primary: '#c9c6c5'
  secondary: '#5e5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e3e2e2'
  on-secondary-container: '#646464'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#390c00'
  on-tertiary-container: '#e25621'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c9c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474646'
  secondary-fixed: '#e3e2e2'
  secondary-fixed-dim: '#c7c6c6'
  on-secondary-fixed: '#1b1c1c'
  on-secondary-fixed-variant: '#464747'
  tertiary-fixed: '#ffdbd0'
  tertiary-fixed-dim: '#ffb59d'
  on-tertiary-fixed: '#390c00'
  on-tertiary-fixed-variant: '#832600'
  background: '#fcf9f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
typography:
  display-lg:
    fontFamily: Playfair Display
    fontSize: 72px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.1'
  headline-xl:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-xl-mobile:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.1em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1440px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 20px
---

## Brand & Style

The design system embodies the intersection of heritage architecture and high-octane streetwear. It captures the energy of Bengaluru's Church Street through a lens of high-fashion editorial. The personality is confident, architectural, and avant-garde.

The style is **Luxury Minimalism** with a **High-Contrast Editorial** edge. It prioritizes expansive whitespace, razor-sharp alignment, and a sophisticated hierarchy that treats every interface like a magazine spread. Visual interest is generated through dramatic scale shifts in typography and the strategic use of a singular high-energy accent color against a neutral, sophisticated backdrop.

## Colors

The palette is rooted in a "Concrete & Canvas" philosophy. 

- **Charcoal Black (#0D0D0D)** and **Soft Black (#121212)** serve as the foundation for all structural elements and primary typography, providing depth and weight.
- **Off White (#F7F5F2)** acts as the primary canvas, offering a warm, premium alternative to pure white that feels more artisanal.
- **Warm Beige (#D8CBB8)** is used for section breaks and subtle depth, mimicking high-quality paper stock.
- **Electric Orange (#FF6B35)** is the "Signal" color—used exclusively for critical calls to action, active states, and limited-edition indicators to maintain its visual impact.

## Typography

This design system utilizes a "High-Low" typographic pairing. 

**Playfair Display** provides the luxury "High" note. It should be used for all expressive headings. Tight kerning is recommended for larger display sizes to enhance the editorial feel.

**Inter** provides the utilitarian "Low" note. Its neutral, geometric construction ensures legibility for product descriptions, navigation, and technical details. 

For all uppercase labels, a slight increase in letter-spacing (10%) is mandatory to ensure a premium, airy aesthetic.

## Layout & Spacing

The layout follows a **Rigid 12-Column Grid** for desktop and a **4-Column Grid** for mobile. 

- **Philosophy:** Asymmetry is encouraged. Elements should often offset from the center to create dynamic, magazine-like compositions.
- **Vertical Rhythm:** Use a baseline of 8px. Large sections should be separated by significant vertical padding (80px, 120px, or 160px) to allow the "Off White" space to act as a luxury element itself.
- **Margins:** Generous outer margins (64px+) on desktop ensure that content feels framed and curated, rather than crowded.

## Elevation & Depth

This design system avoids traditional drop shadows to maintain a flat, architectural aesthetic. Depth is communicated through:

- **Tonal Layering:** Overlapping elements using the Warm Beige (#D8CBB8) and Soft Black (#121212) to create stack order.
- **Thin Outlines:** 1px solid borders in Muted Concrete Gray (#7A7A7A) are used to define boundaries for cards and input fields without adding visual bulk.
- **Hard Offsets:** In rare cases where a "lift" is needed, use a hard 2px-4px offset solid "shadow" (no blur) in Charcoal Black to mimic a brutalist, printed effect.

## Shapes

The shape language is **Architectural and Sharp**. 

A minimal radius of 4px is the standard for interactive elements (buttons, inputs) to soften the "bite" of the high contrast without losing the modern edge. Imagery and large containers should remain strictly sharp (0px) to emulate the look of printed magazine pages.

## Components

### Buttons
- **Primary:** Solid Charcoal Black, white text, 4px radius. High-intensity hover state using Electric Orange.
- **Secondary:** Transparent with 1px Soft Black border, Charcoal Black text.
- **CTA:** Electric Orange background for limited "Drop" events or "Add to Cart" actions.

### Cards
- **Product Cards:** Full-bleed imagery on Off White background. 0px corner radius. Product name in Inter (Label-sm), price in Playfair Display.
- **Editorial Cards:** Large typography overlapping the image slightly to create depth.

### Input Fields
- Underline-only or 1px border. Minimalist labels using Inter (Label-sm). Error states highlighted in Electric Orange.

### Lists & Navigation
- **Navigation:** All-caps Inter, 12px, high letter spacing. Thin 1px horizontal dividers between list items.
- **Iconography:** Ultra-thin stroke icons (1px weight) to match the elegant line-work of the brand.

### Specialized Components
- **The "Drop" Timer:** A monospaced or high-contrast Playfair display countdown for limited edition releases.
- **Lookbook Slider:** A horizontal scroll component that ignores standard container margins for a full-bleed immersive experience.