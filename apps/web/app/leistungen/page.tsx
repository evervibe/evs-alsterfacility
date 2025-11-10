import Link from "next/link";
import { Sparkles, Building2, Hammer, Square, Home, Droplet, Zap } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Unsere Leistungen - Professionelle Gebäudereinigung Hamburg | Alsterfacility",
  description: "Übersicht aller Reinigungsleistungen von Alsterfacility: Unterhaltsreinigung, Büroreinigung, Bauendreinigung und mehr.",
};

const services = [
  {
    name: "Unterhaltsreinigung",
    description: "Regelmäßige Reinigung für dauerhaft saubere Räume. Individuell angepasst an Ihre Bedürfnisse und Nutzungsfrequenz.",
    icon: Sparkles,
    href: "/leistungen/unterhaltsreinigung",
  },
  {
    name: "Büroreinigung",
    description: "Professionelle Reinigung für Bürogebäude und Arbeitsplätze. Saubere Umgebung für produktives Arbeiten.",
    icon: Building2,
    href: "/leistungen/bueroreinigung",
  },
  {
    name: "Bauendreinigung",
    description: "Gründliche Reinigung nach Bau- und Renovierungsarbeiten für bezugsfertige Räume ohne Baurückstände.",
    icon: Hammer,
    href: "/leistungen/bauendreinigung",
  },
  {
    name: "Glas & Fassade",
    description: "Streifenfreie Fenster- und Fassadenreinigung mit modernster Technik, auch für große Höhen.",
    icon: Square,
    href: "/leistungen/glas-fassade",
  },
  {
    name: "Treppenhausreinigung",
    description: "Saubere Treppenhäuser für einen guten ersten Eindruck bei Besuchern und Mietern.",
    icon: Home,
    href: "/leistungen/treppenhausreinigung",
  },
  {
    name: "Grundreinigung",
    description: "Intensive Tiefenreinigung für alle Oberflächen. Ideal nach längerer Nutzung oder vor Neuvermietung.",
    icon: Droplet,
    href: "/leistungen/grundreinigung",
  },
  {
    name: "Sonderreinigung",
    description: "Individuelle Lösungen für besondere Anforderungen und Notfälle. 24/7 verfügbar.",
    icon: Zap,
    href: "/leistungen/sonderreinigung",
  },
];

export default function LeistungenPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Unsere Leistungen
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              Professionelle Reinigungslösungen für jeden Bedarf in Hamburg und Umgebung
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.name}
                href={service.href}
                className="group relative rounded-2xl border-2 border-[var(--border)] p-8 hover:border-[var(--primary)] hover:shadow-xl transition-all bg-white"
              >
                <div className="flex flex-col h-full">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white transition-colors mb-6">
                    <service.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[var(--primary)] transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 flex-grow">
                    {service.description}
                  </p>
                  <div className="mt-6 text-[var(--primary)] font-medium group-hover:underline">
                    Mehr erfahren →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Sie wissen nicht genau, welche Leistung Sie benötigen?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Kontaktieren Sie uns für eine kostenlose Beratung. Wir finden die passende Lösung für Sie.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center h-11 px-6 py-2 rounded-md text-sm font-medium bg-[var(--primary)] text-white hover:bg-[#094a8a] transition-colors"
              >
                Jetzt Kontakt aufnehmen
              </Link>
              <a
                href="tel:+494012345678"
                className="inline-flex items-center justify-center h-11 px-6 py-2 rounded-md text-sm font-medium border-2 border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white transition-colors"
              >
                +49 (0)40 123 456 78
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
