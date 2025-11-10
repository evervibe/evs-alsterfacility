import { ServiceTemplate } from "@/components/service-template";
import { Square } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Glas- & Fassadenreinigung Hamburg - Streifenfrei & Sicher | Alsterfacility",
  description: "Professionelle Glas- und Fassadenreinigung in Hamburg. Streifenfreie Fenster und gepflegte Fassaden mit modernster Technik.",
};

export default function GlasFassadePage() {
  return (
    <ServiceTemplate
      title="Glas- & Fassadenreinigung"
      subtitle="Streifenfreie Fenster und gepflegte Fassaden"
      description="Saubere Fenster und gepflegte Fassaden sind die Visitenkarte Ihres Gebäudes. Mit modernster Reinigungstechnik und geschultem Personal sorgen wir für streifenfreien Durchblick und eine repräsentative Außenwirkung – auch in schwer zugänglichen Bereichen und großen Höhen."
      icon={<Square className="h-16 w-16 text-[var(--primary)]" />}
      features={[
        "Fensterreinigung innen und außen",
        "Rahmen- und Dichtungsreinigung",
        "Fassadenreinigung (Glas, Metall, Stein)",
        "Wintergärten und Glasdächer",
        "Schaufenster und Showrooms",
        "Höhenarbeit mit Sicherheitsausrüstung",
      ]}
      process={[
        {
          step: 1,
          title: "Sicherheitskonzept",
          description: "Erstellung eines Sicherheitsplans für Höhenarbeiten und schwer erreichbare Bereiche.",
        },
        {
          step: 2,
          title: "Professionelle Reinigung",
          description: "Einsatz von osmotischem Wasser und professioneller Ausrüstung für streifenfreie Ergebnisse.",
        },
        {
          step: 3,
          title: "Qualitätskontrolle",
          description: "Abschlusskontrolle und Nacharbeiten für perfekte Sauberkeit.",
        },
      ]}
      benefits={[
        "Zertifizierte Höhenarbeiter",
        "Modernste Reinigungstechnik",
        "Vollumfängliche Versicherung",
      ]}
    />
  );
}
