import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond, Montserrat } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-playfair",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-cormorant",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "THE CHALLENGE - Fine Dining Menu",
  description: "Experience exceptional French cuisine at THE CHALLENGE. Discover our carefully crafted menu featuring signature dishes, fresh seafood, and exquisite desserts.",
  keywords: "restaurant, menu, french cuisine, dining, THE CHALLENGE",
  openGraph: {
    title: "THE CHALLENGE - Fine Dining Menu",
    description: "Experience exceptional French cuisine",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${cormorant.variable} ${montserrat.variable} fr-mode`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
