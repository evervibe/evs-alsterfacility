import { ContactForm } from "@/components/contact-form";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt - Alsterfacility Hamburg | Gebäudereinigung",
  description: "Kontaktieren Sie Alsterfacility für professionelle Gebäudereinigung in Hamburg. Telefon, E-Mail oder Kontaktformular.",
};

export default function KontaktPage() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Kontakt aufnehmen
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              Wir freuen uns auf Ihre Anfrage und beraten Sie gerne zu Ihrem
              Reinigungsprojekt
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Kontaktinformationen
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Phone className="h-6 w-6 text-[var(--primary)] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">Telefon</p>
                      <a
                        href="tel:+494012345678"
                        className="text-gray-600 hover:text-[var(--primary)]"
                      >
                        +49 (0)40 123 456 78
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Mail className="h-6 w-6 text-[var(--primary)] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">E-Mail</p>
                      <a
                        href="mailto:info@alsterfacility.de"
                        className="text-gray-600 hover:text-[var(--primary)]"
                      >
                        info@alsterfacility.de
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <MapPin className="h-6 w-6 text-[var(--primary)] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">Standort</p>
                      <p className="text-gray-600">
                        Hamburg
                        <br />
                        Deutschland
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="h-6 w-6 text-[var(--primary)] flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-gray-900">Erreichbarkeit</p>
                      <p className="text-gray-600">
                        Mo - Fr: 08:00 - 18:00 Uhr
                        <br />
                        24/7 Notdienst verfügbar
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-bold text-gray-900 mb-2">
                  Schnelle Rückmeldung garantiert
                </h3>
                <p className="text-sm text-gray-600">
                  Wir antworten in der Regel innerhalb von 2 Stunden während der
                  Geschäftszeiten. Bei Notfällen erreichen Sie uns rund um die Uhr.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 bg-white border border-[var(--border)] rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Senden Sie uns eine Nachricht
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Contact Methods */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Weitere Kontaktmöglichkeiten
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg text-center">
              <Phone className="h-12 w-12 text-[var(--primary)] mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">Anrufen</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Sprechen Sie direkt mit einem unserer Experten
              </p>
              <a
                href="tel:+494012345678"
                className="inline-block text-[var(--primary)] font-medium hover:underline"
              >
                +49 (0)40 123 456 78
              </a>
            </div>

            <div className="bg-white p-8 rounded-lg text-center">
              <svg
                className="h-12 w-12 text-[var(--accent)] mx-auto mb-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              <h3 className="font-bold text-lg mb-2">WhatsApp</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Schnelle Anfragen per Chat
              </p>
              <a
                href="https://wa.me/4917012345678"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-[var(--accent)] font-medium hover:underline"
              >
                Chat starten
              </a>
            </div>

            <div className="bg-white p-8 rounded-lg text-center">
              <Mail className="h-12 w-12 text-[var(--secondary)] mx-auto mb-4" />
              <h3 className="font-bold text-lg mb-2">E-Mail</h3>
              <p className="text-gray-600 mb-4 text-sm">
                Detaillierte Anfragen per E-Mail
              </p>
              <a
                href="mailto:info@alsterfacility.de"
                className="inline-block text-[var(--secondary)] font-medium hover:underline"
              >
                E-Mail senden
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
