import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Shield, Clock, Award } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-white py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            Gebäudereinigung in Hamburg.
            <br />
            <span className="text-[var(--primary)]">
              Schnell. Sauber. Verlässlich.
            </span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto">
            Angebot in 60 Sekunden. Start innerhalb von 24 Stunden.
            <br />
            Professionelle Reinigungsleistungen für Büros, Praxen und Gewerbe.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="/kontakt">Sofort-Angebot berechnen</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto">
              <a href="tel:+494012345678">
                <Phone className="mr-2 h-5 w-5" />
                Jetzt anrufen
              </a>
            </Button>
          </div>

          {/* Trust Line */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-[var(--accent)]" />
              <span>ISO-konforme Prozesse</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="h-5 w-5 text-[var(--accent)]" />
              <span>Haftpflicht bis 10 Mio. €</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-[var(--accent)]" />
              <span>24/7 Notdienst</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
