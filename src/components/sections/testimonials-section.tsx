import { TestimonialCard } from "@/components/cards/testimonial-card";
import { testimonials } from "@/data/testimonials";

export function TestimonialsSection() {
  return (
    <section className="container-shell render-later py-20">
      <p className="micro-label mb-4">Community</p>
      <h2 className="section-title mb-10">Worn by regulars.</h2>
      <div className="grid gap-5 md:grid-cols-3">
        {testimonials.map((testimonial) => <TestimonialCard testimonial={testimonial} key={testimonial.name} />)}
      </div>
    </section>
  );
}
