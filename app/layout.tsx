import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Web3Provider from "@/components/providers/Web3Provider";

// Body font — clean, modern, excellent readability
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

// Headline font — strong, Web3-native, professional branding
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["600", "700", "800", "900"],
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
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="min-h-screen antialiased" style={{ background: "#F4D8CD", color: "#3A2E39" }}>
        <Web3Provider>{children}</Web3Provider>
      </body>
    </html>
  );
}
