import { ServiceTemplate } from "@/components/service-template";
import { Building2 } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Büroreinigung Hamburg - Professionelle Reinigung für Arbeitsplätze | Alsterfacility",
  description: "Professionelle Büroreinigung in Hamburg. Saubere und hygienische Arbeitsplätze für mehr Produktivität und Wohlbefinden.",
};

export default function BueroreinigungPage() {
  return (
    <ServiceTemplate
      title="Büroreinigung"
      subtitle="Professionelle Reinigung für produktive Arbeitsumgebungen"
      description="Ein sauberes Büro ist die Grundlage für produktives Arbeiten und das Wohlbefinden Ihrer Mitarbeiter. Unsere Büroreinigung ist speziell auf die Anforderungen moderner Arbeitsplätze zugeschnitten – von Einzelbüros über Großraumbüros bis hin zu Co-Working-Spaces."
      icon={<Building2 className="h-16 w-16 text-[var(--primary)]" />}
      features={[
        "Arbeitsplatz- und Schreibtischreinigung",
        "IT-Equipment (Tastaturen, Monitore) entstauben",
        "Besprechungsräume und Konferenzräume",
        "Küchen und Pausenräume",
        "WC-Anlagen und Sanitärräume",
        "Eingangsbereiche und Empfang",
      ]}
      process={[
        {
          step: 1,
          title: "Objektbegehung",
          description: "Detaillierte Besichtigung Ihrer Büroräume und Erfassung der Anforderungen.",
        },
        {
          step: 2,
          title: "Angebot & Planung",
          description: "Transparentes Angebot mit individueller Reinigungsplanung und Zeitfenstern.",
        },
        {
          step: 3,
          title: "Regelmäßige Reinigung",
          description: "Zuverlässige Durchführung zu bürofreundlichen Zeiten (nach Feierabend möglich).",
        },
      ]}
      benefits={[
        "Reinigung außerhalb der Geschäftszeiten",
        "Qualifiziertes und zuverlässiges Personal",
        "Einsatz von umweltschonenden Mitteln",
      ]}
    />
  );
}
