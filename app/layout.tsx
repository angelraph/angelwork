import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Web3Provider from "@/components/providers/Web3Provider";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "angelraph — Web3 Content Strategist & Community Builder",
  description:
    "Web3 content creator, community builder, and blockchain-native professional. Crafting stories that drive adoption and building communities that last.",
  keywords: ["Web3", "Content Strategy", "Community Management", "Blockchain", "DeFi", "NFT", "DAO"],
  openGraph: {
    title: "angelraph — Web3 Content Strategist",
    description: "Building communities. Crafting narratives. Driving adoption.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "angelraph — Web3 Content Strategist",
    description: "Building communities. Crafting narratives. Driving adoption.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.variable}>
      <body className="min-h-screen antialiased" style={{ background: "#EA4335", color: "#F5F5F5" }}>
        <Web3Provider>{children}</Web3Provider>
      </body>
    </html>
  );
}
