import Link from "next/link";
import { navigation } from "@/data/navigation";

export function MobileNav() {
  return (
    <details className="group md:hidden">
      <summary className="focus-ring flex cursor-pointer list-none items-center rounded-full border border-border px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-foreground">
        Menu
      </summary>
      <div className="absolute left-4 right-4 top-20 z-50 grid gap-2 border border-border bg-background/95 p-4 shadow-2xl backdrop-blur">
        {navigation.map((item) => (
          <Link className="focus-ring px-2 py-3 text-sm uppercase tracking-[0.16em]" href={item.href} key={item.href}>
            {item.label}
          </Link>
        ))}
        <Link className="focus-ring beige-panel px-4 py-3 text-center text-sm font-bold uppercase tracking-[0.16em]" href="/contact">
          Visit Store
        </Link>
      </div>
    </details>
  );
}
