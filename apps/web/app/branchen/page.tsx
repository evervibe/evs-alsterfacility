import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Branchen - Reinigung für alle Bereiche | Alsterfacility Hamburg",
  description: "Spezialisierte Reinigungslösungen für Büros, Praxen, Einzelhandel, Hausverwaltungen, Gastronomie und Industrie in Hamburg.",
};

const industries = [
  {
    name: "Büros & Co-Working-Spaces",
    description: "Professionelle Reinigung für moderne Arbeitsumgebungen",
  },
  {
    name: "Arztpraxen & Kliniken",
    description: "Hygienische Reinigung nach medizinischen Standards",
  },
  {
    name: "Einzelhandel & Showrooms",
    description: "Repräsentative Verkaufsflächen für Ihre Kunden",
  },
  {
    name: "Hausverwaltungen",
    description: "Zuverlässige Reinigung für Wohnanlagen und Gewerbeimmobilien",
  },
  {
    name: "Gastronomie & Hotels",
    description: "Sauberkeit und Hygiene für Ihre Gäste",
  },
  {
    name: "Industrie & Produktion",
    description: "Spezialisierte Industriereinigung mit Fachpersonal",
  },
];

export default function BranchenPage() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-blue-50 to-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Branchen
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              Spezialisierte Reinigungslösungen für verschiedene Branchen
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry) => (
              <div
                key={industry.name}
                className="border border-[var(--border)] rounded-lg p-8 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {industry.name}
                </h3>
                <p className="text-gray-600">{industry.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link href="/kontakt">Jetzt Angebot anfragen</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
