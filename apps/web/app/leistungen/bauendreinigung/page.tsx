import { ServiceTemplate } from "@/components/service-template";
import { Hammer } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bauendreinigung Hamburg - Professionell nach Renovierung | Alsterfacility",
  description: "Professionelle Bauendreinigung in Hamburg. Gründliche Reinigung nach Bau- und Renovierungsarbeiten für bezugsfertige Räume.",
};

export default function BauendreinigungPage() {
  return (
    <ServiceTemplate
      title="Bauendreinigung"
      subtitle="Gründliche Reinigung nach Bau- und Renovierungsarbeiten"
      description="Nach Bau- oder Renovierungsarbeiten hinterlassen Handwerker oft Staub, Schmutz und Materialreste. Unsere Bauendreinigung macht Ihre Räume bezugsfertig und entfernt alle Baurückstände professionell und gründlich – vom groben Schmutz bis zur Feinreinigung."
      icon={<Hammer className="h-16 w-16 text-[var(--primary)]" />}
      features={[
        "Entfernung von Bauschutt und grober Verschmutzung",
        "Fensterreinigung innen und außen",
        "Entfernung von Farb- und Kleberesten",
        "Grundreinigung aller Böden",
        "Sanitärreinigung inkl. Armaturen",
        "Staubentfernung von allen Oberflächen",
      ]}
      process={[
        {
          step: 1,
          title: "Objektbesichtigung",
          description: "Begutachtung des Reinigungsumfangs direkt vor Ort nach Bauabschluss.",
        },
        {
          step: 2,
          title: "Grobreinigung",
          description: "Entfernung von Bauschutt, Staub und groben Verschmutzungen.",
        },
        {
          step: 3,
          title: "Feinreinigung",
          description: "Detailreinigung aller Flächen für ein bezugsfertiges Ergebnis.",
        },
      ]}
      benefits={[
        "Schnelle Verfügbarkeit und Durchführung",
        "Entsorgung von Bauresten inklusive",
        "Professionelle Geräte und Reinigungsmittel",
      ]}
    />
  );
}
