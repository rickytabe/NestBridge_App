import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NestBridge — Find Your Co-Founder. Leave With a Plan.",
  description:
    "The friendly on-ramp before Y Combinator. Find the right co-founder, walk away with a visual plan you're proud to show.",
  openGraph: {
    title: "NestBridge — Find Your Co-Founder. Leave With a Plan.",
    description:
      "NestBridge pairs first-time founders with the right person to build alongside — then turns your raw idea into a clean, shareable one-pager in minutes.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
