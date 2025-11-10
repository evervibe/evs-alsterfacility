"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigation = [
  { name: "Leistungen", href: "/leistungen" },
  { name: "Branchen", href: "/branchen" },
  { name: "Preise", href: "/preise" },
  { name: "Referenzen", href: "/referenzen" },
  { name: "FAQ", href: "/faq" },
  { name: "Über uns", href: "/ueber-uns" },
  { name: "Kontakt", href: "/kontakt" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-[var(--border)] sticky top-0 z-50">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="text-2xl font-bold text-[var(--primary)]">
                ALSTERFACILITY
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-6">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-700 hover:text-[var(--primary)] transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex lg:items-center lg:space-x-4">
            <a
              href="tel:+494012345678"
              className="flex items-center space-x-2 text-sm font-medium text-[var(--primary)] hover:text-[var(--secondary)]"
            >
              <Phone className="h-4 w-4" />
              <span>+49 (0)40 123 456 78</span>
            </a>
            <Button asChild size="sm">
              <Link href="/kontakt">Angebot anfragen</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Menü öffnen</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 space-y-2 border-t border-[var(--border)]">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 text-base font-medium text-gray-700 hover:text-[var(--primary)]"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4 space-y-2">
              <a
                href="tel:+494012345678"
                className="flex items-center space-x-2 py-2 text-base font-medium text-[var(--primary)]"
              >
                <Phone className="h-5 w-5" />
                <span>+49 (0)40 123 456 78</span>
              </a>
              <Button asChild className="w-full">
                <Link href="/kontakt">Angebot anfragen</Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
