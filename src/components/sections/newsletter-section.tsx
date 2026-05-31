export function NewsletterSection() {
  return (
    <section className="container-shell render-later py-20">
      <div className="editorial-card grid gap-6 p-8 md:grid-cols-[1fr_1fr] md:p-12">
        <div>
          <p className="micro-label mb-4">Dispatch</p>
          <h2 className="font-display text-5xl font-semibold leading-none tracking-[-0.05em]">Drop notes, fabric notes, and store events.</h2>
        </div>
        <form className="flex flex-col gap-3 self-end sm:flex-row">
          <input aria-label="Email address" className="focus-ring min-h-12 flex-1 border border-border bg-background px-4 text-sm" placeholder="you@example.com" type="email" />
          <button className="focus-ring min-h-12 bg-accent px-6 text-sm font-black uppercase tracking-[0.16em] text-accent-foreground" type="button">Notify me</button>
        </form>
      </div>
    </section>
  );
}
