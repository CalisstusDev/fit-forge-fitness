import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { ChatWidget } from "@/components/chat-widget";
import "./globals.css";

const display = Bebas_Neue({ variable: "--font-display", subsets: ["latin"], weight: "400" });
const sans = Inter({ variable: "--font-sans", subsets: ["latin"] });

export const metadata: Metadata = {
  title: { default: "FITFORGE | Build Your Stronger Self", template: "%s | FITFORGE" },
  description: "Strength training, nourishing food, and a community that keeps you moving forward.",
  icons: { icon: "/icon.svg", shortcut: "/icon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`}>
      <body>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <ChatWidget />
      </body>
    </html>
  );
}
