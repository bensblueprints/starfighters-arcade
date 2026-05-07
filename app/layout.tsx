import type { Metadata } from "next";
import { Press_Start_2P, Orbitron, Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const pixel = Press_Start_2P({ subsets: ["latin"], weight: "400", variable: "--font-pixel" });
const display = Orbitron({ subsets: ["latin"], weight: ["500", "700", "800", "900"], variable: "--font-display" });
const body = Inter({ subsets: ["latin"], variable: "--font-body" });

export const metadata: Metadata = {
  title: "StarFighters Arcade — Mesa's Retro 80s Arcade",
  description:
    "Arizona's largest retro arcade. Over 200 rotating classic arcade & pinball machines on free-play in Mesa, AZ. Tournaments, private parties, and pure 80s nostalgia.",
  metadataBase: new URL("https://starfighters.advancedmarketing.co"),
  openGraph: {
    title: "StarFighters Arcade — Mesa's Retro 80s Arcade",
    description: "Over 200 classic arcade & pinball machines on free-play in Mesa, AZ.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${pixel.variable} ${display.variable} ${body.variable}`}>
      <body className="min-h-dvh font-body overflow-x-hidden">
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[1000] focus:bg-neon-magenta focus:text-bg focus:px-3 focus:py-2 focus:font-pixel focus:text-xs">
          Skip to main content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
