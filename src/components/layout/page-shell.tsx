import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type PageShellProps = {
  eyebrow?: string;
  title: string;
  intro?: string;
  children: ReactNode;
  className?: string;
};

export function PageShell({ eyebrow, title, intro, children, className }: PageShellProps) {
  return (
    <main className={cn("church-canvas min-h-screen pt-24", className)}>
      <section className="container-shell py-12 md:py-20">
        {eyebrow ? <p className="micro-label mb-4">{eyebrow}</p> : null}
        <h1 className="display-title max-w-5xl text-[clamp(4rem,10vw,8rem)]">{title}</h1>
        {intro ? <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">{intro}</p> : null}
      </section>
      {children}
    </main>
  );
}
