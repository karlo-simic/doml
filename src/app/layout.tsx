import type { Metadata } from "next";
import { Actor, Montserrat, Noto_Sans_Newa } from "next/font/google";

import "./globals.css";

import { cn } from "@/lib/utils/cn";

const actor = Actor({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-sans-secondary",
});

const montserrat = Montserrat({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-sans-primary",
});

const notoSansNewa = Noto_Sans_Newa({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "DOML - AI Marketing. Optimized Reach.",
  description:
    "Our vision is to revolutionize the way brands and advertisers target, reach",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          actor.variable,
          montserrat.variable,
          notoSansNewa.variable,
          "antialiased bg-black text-white font-sans-primary",
        )}
      >
        {children}
      </body>
    </html>
  );
}
