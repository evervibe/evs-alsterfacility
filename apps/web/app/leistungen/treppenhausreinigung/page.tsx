import { ServiceTemplate } from "@/components/service-template";
import { Home } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Treppenhausreinigung Hamburg - Sauber & Repräsentativ | Alsterfacility",
  description: "Professionelle Treppenhausreinigung in Hamburg. Saubere und gepflegte Treppenhäuser für einen positiven ersten Eindruck.",
};

export default function TreppenausreinigungPage() {
  return (
    <ServiceTemplate
      title="Treppenhausreinigung"
      subtitle="Saubere Treppenhäuser für einen guten ersten Eindruck"
      description="Das Treppenhaus ist oft der erste Bereich, den Besucher und Mieter sehen. Eine regelmäßige, professionelle Reinigung sorgt für Sauberkeit, Sicherheit und ein gepflegtes Erscheinungsbild Ihrer Immobilie – besonders wichtig für Hausverwaltungen und Wohnungseigentümer."
      icon={<Home className="h-16 w-16 text-[var(--primary)]" />}
      features={[
        "Reinigung von Treppen und Podesten",
        "Handläufe und Geländer",
        "Fenster und Fensterbretter",
        "Lichtschalter und Klingelanlagen",
        "Briefkästen und Hauseingänge",
        "Kellerflure und Fahrstuhlbereiche",
      ]}
      process={[
        {
          step: 1,
          title: "Bestandsaufnahme",
          description: "Besichtigung des Treppenhauses und Festlegung der Reinigungsintervalle.",
        },
        {
          step: 2,
          title: "Regelmäßige Reinigung",
          description: "Wöchentliche oder zweiwöchentliche Reinigung nach festem Plan.",
        },
        {
          step: 3,
          title: "Dokumentation",
          description: "Reinigungsnachweis für Hausverwaltungen und Eigentümergemeinschaften.",
        },
      ]}
      benefits={[
        "Feste Reinigungstermine",
        "Vertrautes Personal",
        "Dokumentation für Verwaltungen",
      ]}
    />
  );
}
