import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Building2, Users, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Referenzen - Zufriedene Kunden | Alsterfacility Hamburg",
  description: "Referenzen und Kundenstimmen zur professionellen Gebäudereinigung von Alsterfacility in Hamburg.",
};

const references = [
  {
    company: "Bürohaus Alstertal",
    industry: "Büroimmobilie",
    area: "2.500 m²",
    service: "Tägliche Unterhaltsreinigung",
    quote:
      "Seit 3 Jahren arbeiten wir mit Alsterfacility zusammen. Die Qualität ist konstant hoch und das Team sehr zuverlässig.",
    result: "Reklamationsquote unter 1%",
  },
  {
    company: "Praxis Dr. med. Schmidt",
    industry: "Arztpraxis",
    area: "350 m²",
    service: "3x wöchentliche Reinigung",
    quote:
      "Die Hygiene-Standards werden vorbildlich eingehalten. Unsere Patienten fühlen sich in den sauberen Räumen sehr wohl.",
    result: "5-Sterne-Bewertung",
  },
  {
    company: "Hamburg Shopping Center",
    industry: "Einzelhandel",
    area: "8.000 m²",
    service: "Tägliche Reinigung + Glasfassade",
    quote:
      "Professionelle Arbeit zu fairen Preisen. Besonders die Fassadenreinigung überzeugt uns jedes Mal aufs Neue.",
    result: "Vertragsverlängerung um 3 Jahre",
  },
];

export default function ReferenzenPage() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-blue-50 to-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Referenzen
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              Zufriedene Kunden sind unser bester Beweis für Qualität und
              Zuverlässigkeit
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <Building2 className="h-12 w-12 text-[var(--primary)] mx-auto mb-4" />
              <div className="text-4xl font-bold text-gray-900 mb-2">150+</div>
              <div className="text-gray-600">Zufriedene Kunden</div>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 text-[var(--primary)] mx-auto mb-4" />
              <div className="text-4xl font-bold text-gray-900 mb-2">98%</div>
              <div className="text-gray-600">Kundenzufriedenheit</div>
            </div>
            <div className="text-center">
              <Award className="h-12 w-12 text-[var(--primary)] mx-auto mb-4" />
              <div className="text-4xl font-bold text-gray-900 mb-2">15+</div>
              <div className="text-gray-600">Jahre Erfahrung</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 pb-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Unsere Referenzprojekte
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {references.map((ref, index) => (
              <div
                key={index}
                className="border border-[var(--border)] rounded-lg p-8 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {ref.company}
                </h3>
                <div className="text-sm text-gray-500 mb-4">
                  {ref.industry} | {ref.area}
                </div>
                <div className="mb-4">
                  <span className="text-sm font-medium text-[var(--primary)]">
                    {ref.service}
                  </span>
                </div>
                <blockquote className="text-gray-600 italic mb-4 border-l-4 border-[var(--primary)] pl-4">
                  "{ref.quote}"
                </blockquote>
                <div className="pt-4 border-t border-[var(--border)]">
                  <span className="text-sm font-medium text-[var(--accent)]">
                    {ref.result}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Werden Sie unser nächster zufriedener Kunde
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Kontaktieren Sie uns für ein unverbindliches Angebot
            </p>
            <Button asChild size="lg">
              <Link href="/kontakt">Jetzt Kontakt aufnehmen</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
