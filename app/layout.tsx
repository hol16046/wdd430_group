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
  title: "Hand Crafted Haven",
  description: "Connecting Communities and Artists",
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
