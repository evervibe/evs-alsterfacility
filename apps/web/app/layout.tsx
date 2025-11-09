import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { StickyCTA } from "@/components/layout/sticky-cta";

export const metadata: Metadata = {
  title: "Gebäudereinigung Hamburg - Alsterfacility | Schnell. Sauber. Verlässlich.",
  description: "Professionelle Gebäudereinigung in Hamburg. ISO-konforme Prozesse, 24/7 Notdienst. Angebot in 60 Sekunden. Start innerhalb von 24 Stunden.",
  keywords: "Gebäudereinigung Hamburg, Büroreinigung, Unterhaltsreinigung, Bauendreinigung, Fensterreinigung",
  authors: [{ name: "Alsterfacility e.K." }],
  openGraph: {
    title: "Gebäudereinigung Hamburg - Alsterfacility",
    description: "Professionelle Gebäudereinigung in Hamburg. Schnell. Sauber. Verlässlich.",
    type: "website",
    locale: "de_DE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <StickyCTA />
      </body>
    </html>
  );
}
