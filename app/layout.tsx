import type { Metadata } from "next";
import { Playfair_Display, Red_Hat_Display } from "next/font/google";
import "./globals.css";
import Footer from "./ui/footer";

const redHat = Red_Hat_Display({ 
  subsets: ["latin"],
  display: "swap",
  variable: '--font-red-hat',
});
const playfair = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: '--font-playfair',
});

export const metadata: Metadata = {
  title: {
    template: '%s | Hand Crafted Haven',
    default: "Hand Crafted Haven"
  },
  description: "Connecting Communities and Artists. Discover unique handcrafted products made by local artisans near you. Explore a curated selection of locally made goods including jewelry, home decor, clothing, and more, all crafted with care and passion. Support your community and shop for one-of-a-kind items that tell a story.",
  creator: "Group 7 WDD430",
  authors: [{name: "Heather Holt"},
  {name: "Larry Copeland"},
  {name: "Will Keel"},
  {name: "Michaela Nell"},
  {name: "Rayshorn Richardson"}],
 };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={`${redHat.variable} ${playfair.variable}`}>{children}</body>
      
    </html>
  );
}
