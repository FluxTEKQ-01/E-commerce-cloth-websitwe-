import { store } from "@/data/store";

export function StoreInfoSection() {
  return (
    <section className="container-shell py-20">
      <div className="grid gap-8 border-y border-border py-10 md:grid-cols-3">
        <div>
          <p className="micro-label mb-3">Address</p>
          <p className="text-sm leading-7 text-muted-foreground">{store.address}</p>
        </div>
        <div>
          <p className="micro-label mb-3">Hours</p>
          {store.hours.map((item) => <p className="text-sm leading-7 text-muted-foreground" key={item}>{item}</p>)}
        </div>
        <div>
          <p className="micro-label mb-3">Contact</p>
          <p className="text-sm leading-7 text-muted-foreground">{store.email}</p>
          <p className="text-sm leading-7 text-muted-foreground">{store.phone}</p>
        </div>
      </div>
    </section>
  );
}
