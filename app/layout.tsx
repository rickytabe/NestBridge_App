import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NestBridge | Co-Founder Matching for Startup Team Formation",
  description:
    "Find a technical, business, or product co-founder with compatibility-based matching, then turn a serious founder match into an investor-ready venture brief.",
  keywords: [
    "co-founder matching",
    "cofounder matching",
    "find a co-founder",
    "find a cofounder",
    "startup co-founder",
    "startup cofounder",
    "technical co-founder",
    "find technical cofounder",
    "business co-founder",
    "product co-founder",
    "founder matching platform",
    "founder compatibility matching",
    "startup team formation",
    "startup venture brief",
    "accelerator-ready startup roadmap",
    "first-time founders",
  ],
  applicationName: "NestBridge",
  category: "Startup software",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "NestBridge | Co-Founder Matching for Startup Team Formation",
    description:
      "NestBridge helps first-time founders find compatible co-founders and turn serious matches into investor-ready venture briefs.",
    type: "website",
    siteName: "NestBridge",
  },
  twitter: {
    card: "summary",
    title: "NestBridge | Co-Founder Matching for Startup Team Formation",
    description:
      "Find a compatible startup co-founder and shape the match into a venture-ready brief.",
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
