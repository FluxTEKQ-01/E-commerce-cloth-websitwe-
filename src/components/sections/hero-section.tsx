import Image from "next/image";
import Link from "next/link";
import { brand } from "@/data/brand";

export function HeroSection() {
  return (
    <section className="container-shell grid min-h-[calc(100vh-5rem)] items-end gap-8 py-28 md:grid-cols-[1.1fr_0.9fr]">
      <div className="pb-4">
        <p className="micro-label mb-6">{brand.location}</p>
        <h1 className="display-title text-[clamp(4.5rem,11vw,10rem)]">Crafted for the Streets.</h1>
        <p className="mt-8 max-w-xl text-lg leading-8 text-muted-foreground">{brand.description}</p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link className="focus-ring bg-foreground px-6 py-4 text-sm font-black uppercase tracking-[0.16em] text-background transition hover:bg-accent" href="/shop">Shop the edit</Link>
          <Link className="focus-ring border border-border px-6 py-4 text-sm font-black uppercase tracking-[0.16em] transition hover:border-accent hover:text-accent" href="/lookbook">View lookbook</Link>
        </div>
      </div>
      <div className="relative min-h-[34rem] overflow-hidden border border-border">
        <Image alt="Church and Co. editorial streetwear campaign" className="object-cover" fill priority quality={78} sizes="(min-width: 1024px) 45vw, 100vw" src="https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1400&q=80" />
        <div className="absolute bottom-0 left-0 right-0 bg-background/82 p-5 backdrop-blur">
          <p className="text-sm uppercase tracking-[0.18em]">Inspired by Bengaluru / Cut for now</p>
        </div>
      </div>
    </section>
  );
}
