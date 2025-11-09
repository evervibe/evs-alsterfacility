import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqData } from "@/content/faq-data";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ - Häufig gestellte Fragen | Alsterfacility Hamburg",
  description: "Antworten auf häufig gestellte Fragen zur Gebäudereinigung in Hamburg: Preise, Ablauf, Versicherung, Reinigungsmittel und mehr.",
};

export default function FAQPage() {
  // Generate FAQ Schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="bg-white">
        {/* Hero */}
        <section className="bg-gradient-to-br from-blue-50 to-white py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
                Häufig gestellte Fragen
              </h1>
              <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
                Hier finden Sie Antworten auf die wichtigsten Fragen zur
                Gebäudereinigung in Hamburg
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Accordion */}
        <section className="py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <Accordion type="single" collapsible className="space-y-4">
              {faqData.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-[var(--border)] rounded-lg px-6 bg-white"
                >
                  <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gray-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Ihre Frage wurde nicht beantwortet?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Kontaktieren Sie uns gerne direkt – wir helfen Ihnen weiter!
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild size="lg">
                  <Link href="/kontakt">Jetzt Kontakt aufnehmen</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="tel:+494012345678">+49 (0)40 123 456 78</a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
