import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impressum | Alsterfacility Hamburg",
  description: "Impressum und Kontaktdaten von Alsterfacility e.K., Hamburg",
};

export default function ImpressumPage() {
  return (
    <div className="bg-white py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Impressum</h1>
        
        <div className="prose prose-lg max-w-none">
          <h2>Angaben gemäß § 5 TMG</h2>
          <p>
            Alsterfacility e.K.
            <br />
            Musterstraße 123
            <br />
            20095 Hamburg
          </p>

          <h2>Kontakt</h2>
          <p>
            Telefon: +49 (0)40 123 456 78
            <br />
            E-Mail: info@alsterfacility.de
          </p>

          <h2>Vertreten durch</h2>
          <p>Geschäftsführer: Max Mustermann</p>

          <h2>Registereintrag</h2>
          <p>
            Eingetragen im Handelsregister
            <br />
            Registergericht: Amtsgericht Hamburg
            <br />
            Registernummer: HRA XXXXX
          </p>

          <h2>Umsatzsteuer-ID</h2>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:
            <br />
            DE123456789
          </p>

          <h2>Berufsbezeichnung und berufsrechtliche Regelungen</h2>
          <p>
            Berufsbezeichnung: Gebäudereiniger
            <br />
            Zuständige Kammer: Handwerkskammer Hamburg
          </p>

          <h2>Haftungsausschluss</h2>
          <h3>Haftung für Inhalte</h3>
          <p>
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf
            diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8
            bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet,
            übermittelte oder gespeicherte fremde Informationen zu überwachen oder
            nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
            hinweisen.
          </p>

          <h3>Haftung für Links</h3>
          <p>
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren
            Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden
            Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
            Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten
            verantwortlich.
          </p>

          <h3>Urheberrecht</h3>
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
            Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
            Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
            Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
            jeweiligen Autors bzw. Erstellers.
          </p>
        </div>
      </div>
    </div>
  );
}
