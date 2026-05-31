import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { RoutePrefetcher } from "@/components/layout/route-prefetcher";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import "./globals.css";

const inter = Inter({
  variable: "--font-church-sans",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-church-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://churchandco.example"),
  title: {
    default: "Church & Co. | Bengaluru Editorial Commerce",
    template: "%s | Church & Co.",
  },
  description:
    "Premium streetwear and lifestyle essentials crafted for Church Street, Bengaluru.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorant.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
      </head>
      <body className="min-h-full">
        <SiteHeader />
        {children}
        <SiteFooter />
        <RoutePrefetcher />
      </body>
    </html>
  );
}
