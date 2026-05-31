"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { collections } from "@/data/collections";
import { journal } from "@/data/journal";
import { lookbooks } from "@/data/lookbooks";
import { navigation } from "@/data/navigation";

const routeHrefs = [
  "/",
  "/contact",
  ...navigation.map((item) => item.href),
  ...collections.map((collection) => `/collections/${collection.slug}`),
  ...lookbooks.map((lookbook) => `/lookbook/${lookbook.slug}`),
  ...journal.map((article) => `/journal/${article.slug}`),
];

export function RoutePrefetcher() {
  const router = useRouter();

  useEffect(() => {
    const prefetchRoutes = () => {
      for (const href of routeHrefs) {
        router.prefetch(href);
      }
    };

    if ("requestIdleCallback" in window) {
      const idleId = window.requestIdleCallback(prefetchRoutes, { timeout: 1800 });
      return () => window.cancelIdleCallback(idleId);
    }

    const timeoutId = globalThis.setTimeout(prefetchRoutes, 900);
    return () => globalThis.clearTimeout(timeoutId);
  }, [router]);

  return null;
}
