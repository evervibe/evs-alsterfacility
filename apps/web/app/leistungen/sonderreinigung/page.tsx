import { ServiceTemplate } from "@/components/service-template";
import { Sparkles } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sonderreinigung Hamburg - Individuelle Reinigungslösungen | Alsterfacility",
  description: "Professionelle Sonderreinigung in Hamburg. Individuelle Lösungen für besondere Anforderungen und Notfälle.",
};

export default function SonderreinigungPage() {
  return (
    <ServiceTemplate
      title="Sonderreinigung"
      subtitle="Individuelle Lösungen für besondere Anforderungen"
      description="Manchmal braucht es mehr als die Standard-Reinigung. Unsere Sonderreinigung deckt alle außergewöhnlichen Reinigungsanforderungen ab – von Notfalleinsätzen über Tatortreinigung bis hin zu speziellen Hygieneanforderungen in sensiblen Bereichen."
      icon={<Sparkles className="h-16 w-16 text-[var(--primary)]" />}
      features={[
        "24/7 Notdienst bei Wasserschäden oder Verschmutzungen",
        "Desinfektion und Hygiene-Tiefenreinigung",
        "Reinigung nach besonderen Vorfällen",
        "Industriereinigung mit Spezialgeräten",
        "Hotelreinigung und Event-Cleaning",
        "Individuelle Sonderwünsche nach Absprache",
      ]}
      process={[
        {
          step: 1,
          title: "Bedarfsanalyse",
          description: "Schnelle Erfassung der Situation und individuellen Anforderungen.",
        },
        {
          step: 2,
          title: "Maßgeschneidertes Konzept",
          description: "Entwicklung einer spezifischen Reinigungslösung für Ihren Bedarf.",
        },
        {
          step: 3,
          title: "Professionelle Umsetzung",
          description: "Zügige und diskrete Durchführung mit Spezialmitteln und -geräten.",
        },
      ]}
      benefits={[
        "24/7 Notdienst verfügbar",
        "Diskrete und professionelle Abwicklung",
        "Spezialausrüstung für alle Anforderungen",
      ]}
    />
  );
}
