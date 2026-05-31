import Link from "next/link";
import { MobileNav } from "@/components/layout/mobile-nav";
import { navigation } from "@/data/navigation";

export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-border bg-background/78 backdrop-blur-xl">
      <div className="container-shell flex h-20 items-center justify-between gap-6">
        <Link className="focus-ring font-display text-2xl font-bold tracking-[-0.04em]" href="/">
          Church & Co.
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navigation.map((item) => (
            <Link className="focus-ring text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground transition hover:text-foreground" href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>
        <Link className="focus-ring hidden rounded-full bg-foreground px-5 py-3 text-xs font-black uppercase tracking-[0.18em] text-background transition hover:bg-accent md:inline-flex" href="/contact">
          Visit Store
        </Link>
        <MobileNav />
      </div>
    </header>
  );
}
