import Link from "next/link";
import { Sparkles, Building2, Hammer, Square, Home, Droplet } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    name: "Unterhaltsreinigung",
    description: "Regelmäßige Reinigung für dauerhaft saubere Räume",
    icon: Sparkles,
    href: "/leistungen/unterhaltsreinigung",
  },
  {
    name: "Büroreinigung",
    description: "Professionelle Reinigung für Bürogebäude und Arbeitsplätze",
    icon: Building2,
    href: "/leistungen/bueroreinigung",
  },
  {
    name: "Bauendreinigung",
    description: "Gründliche Reinigung nach Bau- und Renovierungsarbeiten",
    icon: Hammer,
    href: "/leistungen/bauendreinigung",
  },
  {
    name: "Glas & Fassade",
    description: "Streifenfreie Fenster- und Fassadenreinigung",
    icon: Square,
    href: "/leistungen/glas-fassade",
  },
  {
    name: "Treppenhausreinigung",
    description: "Saubere Treppenhäuser für einen guten ersten Eindruck",
    icon: Home,
    href: "/leistungen/treppenhausreinigung",
  },
  {
    name: "Grundreinigung",
    description: "Intensive Tiefenreinigung für alle Oberflächen",
    icon: Droplet,
    href: "/leistungen/grundreinigung",
  },
];

export function ServicesOverview() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Unsere Leistungen
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Professionelle Reinigungslösungen für jeden Bedarf
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link
              key={service.name}
              href={service.href}
              className="group relative rounded-2xl border border-[var(--border)] p-8 hover:shadow-lg transition-shadow bg-white"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white transition-colors">
                    <service.icon className="h-6 w-6" />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-gray-900 group-hover:text-[var(--primary)] transition-colors">
                    {service.name}
                  </h3>
                  <p className="mt-2 text-sm text-gray-600">
                    {service.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/leistungen">Alle Leistungen ansehen</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
