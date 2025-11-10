import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Shield, Award, Users, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Über uns - Ihr Partner für Gebäudereinigung | Alsterfacility Hamburg",
  description: "Erfahren Sie mehr über Alsterfacility: Qualifikationen, Team, Qualitätsmanagement und warum wir Ihr idealer Partner für Gebäudereinigung in Hamburg sind.",
};

export default function UeberUnsPage() {
  return (
    <div className="bg-white">
      <section className="bg-gradient-to-br from-blue-50 to-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Über Alsterfacility
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              Ihr zuverlässiger Partner für professionelle Gebäudereinigung in
              Hamburg seit über 15 Jahren
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Unsere Mission
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Alsterfacility e.K. steht seit über 15 Jahren für professionelle
                  Gebäudereinigung in Hamburg und Umgebung. Wir verbinden
                  Erfahrung, modernste Technik und geschultes Personal zu einem
                  Rundum-Service, auf den unsere Kunden vertrauen können.
                </p>
                <p>
                  Unsere Mission ist es, Arbeits- und Lebensräume so zu
                  gestalten, dass sich Menschen darin wohlfühlen. Sauberkeit ist
                  für uns nicht nur ein optisches, sondern vor allem ein
                  hygienisches Thema – besonders in sensiblen Bereichen wie
                  Arztpraxen oder Kindergärten.
                </p>
                <p>
                  Wir arbeiten nach ISO-konformen Prozessen und legen größten Wert
                  auf Qualität, Nachhaltigkeit und Kundenzufriedenheit. Jeder
                  unserer Mitarbeiter wird regelmäßig geschult und ist
                  versicherungstechnisch abgesichert.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <Shield className="h-12 w-12 text-[var(--primary)] mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Versichert</h3>
                <p className="text-sm text-gray-600">
                  Haftpflicht bis 10 Mio. € für Ihre Sicherheit
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <Award className="h-12 w-12 text-[var(--primary)] mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Zertifiziert</h3>
                <p className="text-sm text-gray-600">
                  ISO-konforme Prozesse und Qualitätsmanagement
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <Users className="h-12 w-12 text-[var(--primary)] mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">Geschult</h3>
                <p className="text-sm text-gray-600">
                  Regelmäßige Schulungen unserer Mitarbeiter
                </p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg">
                <Clock className="h-12 w-12 text-[var(--primary)] mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">24/7 Notdienst</h3>
                <p className="text-sm text-gray-600">
                  Immer erreichbar bei Notfällen
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Unsere Werte
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white rounded-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Qualität
                </h3>
                <p className="text-gray-600">
                  Höchste Standards bei jeder Reinigung durch geschultes Personal
                  und modernste Technik
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Zuverlässigkeit
                </h3>
                <p className="text-gray-600">
                  Pünktlich, verlässlich und transparent – darauf können Sie sich
                  verlassen
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white rounded-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  Nachhaltigkeit
                </h3>
                <p className="text-gray-600">
                  Umweltfreundliche Reinigungsmittel und ressourcenschonende
                  Prozesse
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Lernen Sie uns kennen
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Überzeugen Sie sich selbst von unserer Arbeit
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/kontakt">Kontakt aufnehmen</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/referenzen">Referenzen ansehen</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
