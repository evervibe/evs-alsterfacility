import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";

interface ServiceTemplateProps {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  process: Array<{ step: number; title: string; description: string }>;
  benefits: string[];
  icon?: ReactNode;
}

export function ServiceTemplate({
  title,
  subtitle,
  description,
  features,
  process,
  benefits,
  icon,
}: ServiceTemplateProps) {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {icon && <div className="flex justify-center mb-6">{icon}</div>}
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              {title}
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
              {subtitle}
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg">
                <Link href="/kontakt">Jetzt Angebot anfragen</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="tel:+494012345678">Beratung anrufen</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed">{description}</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Leistungsumfang
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 bg-white p-6 rounded-lg"
              >
                <Check className="h-6 w-6 text-[var(--accent)] flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            So läuft es ab
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {process.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-[var(--primary)] text-white text-xl font-bold mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
                {index < process.length - 1 && (
                  <ArrowRight className="hidden md:block absolute top-6 -right-4 h-6 w-6 text-gray-300" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Ihre Vorteile
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 bg-white p-6 rounded-lg shadow-sm"
              >
                <Check className="h-6 w-6 text-[var(--accent)] flex-shrink-0" />
                <span className="text-gray-900 font-medium">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-[var(--primary)] rounded-2xl p-12 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Bereit für professionelle Reinigung?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Erhalten Sie Ihr individuelles Angebot in weniger als 60 Sekunden
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" variant="secondary">
                <Link href="/kontakt">Jetzt Angebot anfordern</Link>
              </Button>
              <Button asChild size="lg" className="bg-white text-[var(--primary)] hover:bg-gray-100">
                <a href="https://wa.me/4917012345678">WhatsApp Chat starten</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
