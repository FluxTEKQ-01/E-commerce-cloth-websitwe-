import type { Testimonial } from "@/types/brand";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="editorial-card p-6">
      <blockquote className="font-display text-3xl leading-none tracking-[-0.04em]">
        &ldquo;{testimonial.quote}&rdquo;
      </blockquote>
      <figcaption className="mt-8 text-sm text-muted-foreground">
        <span className="block font-bold text-foreground">{testimonial.name}</span>
        {testimonial.detail}
      </figcaption>
    </figure>
  );
}
