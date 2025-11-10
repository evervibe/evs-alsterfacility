import { ServiceTemplate } from "@/components/service-template";
import { Droplet } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Grundreinigung Hamburg - Intensive Tiefenreinigung | Alsterfacility",
  description: "Professionelle Grundreinigung in Hamburg. Intensive Tiefenreinigung für alle Oberflächen und Räume.",
};

export default function GrundreinigungPage() {
  return (
    <ServiceTemplate
      title="Grundreinigung"
      subtitle="Intensive Tiefenreinigung für langanhaltende Sauberkeit"
      description="Die Grundreinigung geht über die normale Unterhaltsreinigung hinaus und entfernt auch hartnäckige Verschmutzungen. Ideal nach längerer Nutzung, vor Neuvermietung oder als Ergänzung zur regelmäßigen Reinigung – für ein rundum sauberes und hygienisches Ergebnis."
      icon={<Droplet className="h-16 w-16 text-[var(--primary)]" />}
      features={[
        "Maschinelle Bodenreinigung und -versiegelung",
        "Tiefenreinigung von Teppichen und Polstern",
        "Entfernung hartnäckiger Verschmutzungen",
        "Sanitäranlagen mit Spezialreinigung",
        "Hochdruckreinigung bei Bedarf",
        "Glasflächen und Fensterrahmen",
      ]}
      process={[
        {
          step: 1,
          title: "Detailanalyse",
          description: "Erfassung aller zu reinigenden Bereiche und Verschmutzungsgrade.",
        },
        {
          step: 2,
          title: "Intensive Reinigung",
          description: "Einsatz von Spezialgeräten und -mitteln für gründliche Tiefenreinigung.",
        },
        {
          step: 3,
          title: "Pflege & Schutz",
          description: "Versiegelung und Schutzbehandlung für langanhaltende Sauberkeit.",
        },
      ]}
      benefits={[
        "Professionelle Maschinen und Geräte",
        "Spezialreinigungsmittel für beste Ergebnisse",
        "Langanhaltende Sauberkeit und Hygiene",
      ]}
    />
  );
}
