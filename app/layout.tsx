import type { Metadata } from "next";
import { Fraunces, Hanken_Grotesk } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["500", "600", "700"],
  display: "swap",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Zaza Midôla — Ensemble pour les enfants de Toamasina",
  description:
    "Association Zaza Midôla : tournoi de football solidaire et actions pour les enfants de Toamasina, Madagascar.",
  icons: {
    icon: "/logo/logo.png", // Chemin vers ton logo dans le dossier public
    apple: "/logo/logo.png", 
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${fraunces.variable} ${hanken.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
