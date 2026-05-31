import { relationships } from "@/data/relationships";

export function RelationshipDiagramSection() {
  return (
    <section className="container-shell py-20">
      <p className="micro-label mb-4">Data model</p>
      <h2 className="section-title mb-8">Static relationships.</h2>
      <div className="editorial-card grid gap-4 p-6 md:grid-cols-4">
        {["Brand", "Collections", "Products", "Lookbooks", "Journal"].map((node) => (
          <div className="border border-border bg-background/60 p-4 text-center text-sm font-bold uppercase tracking-[0.16em]" key={node}>{node}</div>
        ))}
      </div>
      <ul className="mt-6 grid gap-3 text-sm leading-7 text-muted-foreground md:grid-cols-2">
        {relationships.map((item) => <li key={item}>{item}</li>)}
      </ul>
    </section>
  );
}
