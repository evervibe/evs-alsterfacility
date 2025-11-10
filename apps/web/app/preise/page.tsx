import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Preise - Transparente Kosten für Gebäudereinigung | Alsterfacility Hamburg",
  description: "Transparente Preise für Gebäudereinigung in Hamburg. Individuelle Angebote basierend auf Ihren Anforderungen.",
};

export default function PreisePage() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-blue-50 to-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Preise & Leistungen
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              Faire und transparente Preise für professionelle Reinigungsleistungen
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Individuelle Preisgestaltung
            </h2>
            <p className="text-lg text-gray-600">
              Unsere Preise richten sich nach verschiedenen Faktoren wie Objektgröße,
              Reinigungsintervall und Leistungsumfang. Richtwerte für
              Unterhaltsreinigung liegen bei 1,50 € - 4,00 € pro m².
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="border-2 border-[var(--border)] rounded-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Basis</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-[var(--primary)]">
                  ab 1,50 €
                </span>
                <span className="text-gray-600"> / m²</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[var(--accent)] mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Unterhaltsreinigung</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[var(--accent)] mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Wöchentliche Reinigung</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[var(--accent)] mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Standard-Reinigungsmittel</span>
                </li>
              </ul>
            </div>

            <div className="border-2 border-[var(--primary)] rounded-lg p-8 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[var(--primary)] text-white px-4 py-1 rounded-full text-sm font-medium">
                Beliebt
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Standard</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-[var(--primary)]">
                  ab 2,50 €
                </span>
                <span className="text-gray-600"> / m²</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[var(--accent)] mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Tägliche Reinigung</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[var(--accent)] mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Umweltfreundliche Mittel</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[var(--accent)] mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Qualitätskontrolle</span>
                </li>
              </ul>
            </div>

            <div className="border-2 border-[var(--border)] rounded-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Premium</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-[var(--primary)]">
                  ab 3,50 €
                </span>
                <span className="text-gray-600"> / m²</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[var(--accent)] mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Mehrmals täglich</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[var(--accent)] mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Premium-Reinigungsmittel</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-[var(--accent)] mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Persönlicher Objektleiter</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center bg-blue-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Kostenloses Angebot anfordern
            </h3>
            <p className="text-gray-600 mb-6">
              Jedes Objekt ist einzigartig. Lassen Sie uns Ihre Anforderungen
              besprechen und erhalten Sie ein maßgeschneidertes Angebot.
            </p>
            <Button asChild size="lg">
              <Link href="/kontakt">Jetzt Angebot anfordern</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
