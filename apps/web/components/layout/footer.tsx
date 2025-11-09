import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

const serviceLinks = [
  { name: "Unterhaltsreinigung", href: "/leistungen/unterhaltsreinigung" },
  { name: "Büroreinigung", href: "/leistungen/bueroreinigung" },
  { name: "Bauendreinigung", href: "/leistungen/bauendreinigung" },
  { name: "Glas & Fassade", href: "/leistungen/glas-fassade" },
  { name: "Treppenhausreinigung", href: "/leistungen/treppenhausreinigung" },
  { name: "Grundreinigung", href: "/leistungen/grundreinigung" },
];

const companyLinks = [
  { name: "Über uns", href: "/ueber-uns" },
  { name: "Referenzen", href: "/referenzen" },
  { name: "FAQ", href: "/faq" },
  { name: "Kontakt", href: "/kontakt" },
];

const legalLinks = [
  { name: "Impressum", href: "/recht/impressum" },
  { name: "Datenschutz", href: "/recht/datenschutz" },
  { name: "AGB", href: "/recht/agb" },
];

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">ALSTERFACILITY</h3>
            <p className="text-gray-400 mb-4">
              Professionelle Gebäudereinigung in Hamburg. Schnell. Sauber. Verlässlich.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <a href="tel:+494012345678" className="hover:text-white">
                  +49 (0)40 123 456 78
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <a href="mailto:info@alsterfacility.de" className="hover:text-white">
                  info@alsterfacility.de
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Hamburg, Deutschland</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Leistungen</h3>
            <ul className="space-y-2">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Unternehmen</h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Rechtliches</h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Alsterfacility e.K. Alle Rechte
            vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
}
