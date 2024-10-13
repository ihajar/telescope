import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { cn } from "@/lib/utils";
import { QueryProvider } from "@/components/query-provider";

import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Telescope",
  description: "All in one project management system",
  icons: {
    icon: [
      {
        media: "(prefers-color-scheme: light)",
        url: "/logo.svg",
        href: "/logo.svg",
      },
      {
        media: "(prefers-color-scheme: dark)",
        url: "/logo-dark.svg",
        href: "/logo-dark.svg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(inter.className, "antialiased min-h-screen")}
      >
        <QueryProvider>
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}
