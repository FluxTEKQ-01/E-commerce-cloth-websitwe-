import type { Metadata } from "next";
import { PageShell } from "@/components/layout/page-shell";
import { StoreInfoSection } from "@/components/sections/store-info-section";
import { brand } from "@/data/brand";
import { store } from "@/data/store";

export const metadata: Metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <PageShell eyebrow="Contact" title="Visit the Church Street store." intro="No online checkout yet. Come by for fit guidance, collection previews, and store-only pieces.">
      <StoreInfoSection />
      <section className="container-shell grid gap-8 pb-20 md:grid-cols-2">
        <div className="editorial-card p-8">
          <p className="micro-label mb-4">Write to us</p>
          <form className="grid gap-4">
            <input className="focus-ring min-h-12 border border-border bg-background px-4" placeholder="Name" type="text" />
            <input className="focus-ring min-h-12 border border-border bg-background px-4" placeholder="Email" type="email" />
            <textarea className="focus-ring min-h-36 border border-border bg-background p-4" placeholder="Message" />
            <button className="focus-ring bg-accent px-6 py-4 text-sm font-black uppercase tracking-[0.16em] text-accent-foreground" type="button">Send enquiry</button>
          </form>
        </div>
        <div className="beige-panel p-8">
          <p className="text-xs font-black uppercase tracking-[0.18em]">Store details</p>
          <p className="mt-6 text-3xl font-display font-semibold leading-none tracking-[-0.04em]">{store.address}</p>
          <div className="mt-8 space-y-2 text-sm leading-7">
            {store.hours.map((hour) => <p key={hour}>{hour}</p>)}
            <p>{store.email}</p>
            <p>{store.phone}</p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {brand.social.map((item) => <a className="border border-black/20 px-4 py-2 text-xs font-black uppercase tracking-[0.16em]" href={item.href} key={item.label}>{item.label}</a>)}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
