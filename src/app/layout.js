import { Inter, Outfit, Playfair_Display } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import CookieBanner from "@/components/CookieBanner";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata = {
  title: "VessPay | Send & Spend With One Wallet Across Africa",
  description: "The borderless financial ecosystem for Africa and the diaspora. One wallet to hold foreign currency, send and spend across 33 African countries — jurisdictions are not a problem. Enterprise Payout API + Consumer Wallet. Powered by Ecobank.",
  keywords: "Africa payout API, multi-currency wallet, Ecobank, diaspora payments, remote worker payroll Africa, mobile money, cross-border payments Africa",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${outfit.variable} ${playfair.variable} antialiased`}>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <CookieBanner />
      </body>
    </html>
  );
}
