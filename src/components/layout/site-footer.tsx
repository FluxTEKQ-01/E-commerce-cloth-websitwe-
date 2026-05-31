import Link from "next/link";
import { brand } from "@/data/brand";
import { navigation } from "@/data/navigation";
import { store } from "@/data/store";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container-shell grid gap-10 py-14 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <p className="font-display text-4xl font-semibold tracking-[-0.05em]">Church & Co.</p>
          <p className="mt-4 max-w-md text-sm leading-7 text-muted-foreground">{brand.tagline}</p>
        </div>
        <div>
          <p className="micro-label mb-4">Explore</p>
          <div className="grid gap-3 text-sm text-muted-foreground">
            {navigation.map((item) => (
              <Link className="focus-ring hover:text-foreground" href={item.href} key={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <p className="micro-label mb-4">Store</p>
          <p className="text-sm leading-7 text-muted-foreground">{store.address}</p>
          <p className="mt-4 text-sm text-muted-foreground">{store.email}</p>
        </div>
      </div>
    </footer>
  );
}
