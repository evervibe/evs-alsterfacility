import { ServiceTemplate } from "@/components/service-template";
import { Sparkles } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Unterhaltsreinigung Hamburg - Professionell & Zuverlässig | Alsterfacility",
  description: "Professionelle Unterhaltsreinigung in Hamburg. Regelmäßige Reinigung für dauerhaft saubere Räume. Individuell angepasst an Ihre Bedürfnisse.",
};

export default function UnterhaltsreinigungPage() {
  return (
    <ServiceTemplate
      title="Unterhaltsreinigung"
      subtitle="Regelmäßige Reinigung für dauerhaft saubere und gepflegte Räume"
      description="Die Unterhaltsreinigung ist die Basis für ein gepflegtes Arbeitsumfeld. Wir sorgen mit regelmäßigen Reinigungsintervallen dafür, dass Ihre Räumlichkeiten stets repräsentativ und hygienisch einwandfrei sind. Individuell angepasst an Ihre Bedürfnisse und Nutzungsfrequenz – täglich, wöchentlich oder nach Bedarf."
      icon={<Sparkles className="h-16 w-16 text-[var(--primary)]" />}
      features={[
        "Staubsaugen und Wischen aller Böden",
        "Entleerung und Reinigung von Papierkörben",
        "Reinigung von Sanitäranlagen",
        "Oberflächenreinigung (Tische, Schreibtische)",
        "Küchen- und Teeküchen-Reinigung",
        "Türen, Griffe und Lichtschalter",
      ]}
      process={[
        {
          step: 1,
          title: "Bedarfsanalyse",
          description: "Wir erfassen Ihre spezifischen Anforderungen und Räumlichkeiten vor Ort.",
        },
        {
          step: 2,
          title: "Individueller Plan",
          description: "Erstellung eines maßgeschneiderten Reinigungsplans mit Turnus und Leistungen.",
        },
        {
          step: 3,
          title: "Zuverlässige Umsetzung",
          description: "Regelmäßige Reinigung durch unser geschultes Team zu vereinbarten Zeiten.",
        },
      ]}
      benefits={[
        "Flexible Reinigungsintervalle",
        "Geschultes Fachpersonal",
        "Umweltfreundliche Reinigungsmittel",
      ]}
    />
  );
}
