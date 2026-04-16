import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Web3Provider from "@/components/providers/Web3Provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alex Nakamoto — Web3 Content Strategist & Community Builder",
  description:
    "Web3 content creator, community builder, and blockchain-native professional. I craft stories that drive adoption and build communities that last.",
  keywords: ["Web3", "Content Strategy", "Community Management", "Blockchain", "DeFi", "NFT", "DAO"],
  openGraph: {
    title: "Alex Nakamoto — Web3 Content Strategist",
    description: "Building communities. Crafting narratives. Driving adoption.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Nakamoto — Web3 Content Strategist",
    description: "Building communities. Crafting narratives. Driving adoption.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark`}
      style={{ colorScheme: "dark" }}
    >
      <body className="min-h-screen antialiased">
        <Web3Provider>{children}</Web3Provider>
      </body>
    </html>
  );
}
