import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AGB - Allgemeine Geschäftsbedingungen | Alsterfacility Hamburg",
  description: "Allgemeine Geschäftsbedingungen von Alsterfacility e.K., Hamburg",
};

export default function AGBPage() {
  return (
    <div className="bg-white py-24">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">
          Allgemeine Geschäftsbedingungen (AGB)
        </h1>

        <div className="prose prose-lg max-w-none">
          <h2>§ 1 Geltungsbereich</h2>
          <p>
            Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge über die
            Erbringung von Reinigungsdienstleistungen zwischen Alsterfacility e.K.
            (nachfolgend "Auftragnehmer") und dem Kunden (nachfolgend
            "Auftraggeber").
          </p>

          <h2>§ 2 Vertragsschluss</h2>
          <p>
            Der Vertrag kommt durch die schriftliche Auftragsbestätigung des
            Auftragnehmers zustande. Mündliche Nebenabreden bedürfen zu ihrer
            Wirksamkeit der Schriftform.
          </p>

          <h2>§ 3 Leistungsumfang</h2>
          <p>
            Der Umfang der zu erbringenden Leistungen ergibt sich aus der
            Leistungsbeschreibung im Angebot bzw. der Auftragsbestätigung. Änderungen
            und Ergänzungen bedürfen der Schriftform.
          </p>

          <h2>§ 4 Preise und Zahlungsbedingungen</h2>
          <p>
            Es gelten die im Angebot bzw. der Auftragsbestätigung genannten Preise.
            Alle Preise verstehen sich zuzüglich der gesetzlichen Mehrwertsteuer.
          </p>
          <p>
            Rechnungen sind innerhalb von 14 Tagen nach Rechnungsstellung ohne Abzug
            zur Zahlung fällig.
          </p>

          <h2>§ 5 Ausführung der Leistung</h2>
          <p>
            Der Auftragnehmer erbringt die vereinbarten Leistungen fachgerecht und
            nach den anerkannten Regeln der Technik. Der Auftraggeber stellt die
            erforderlichen Räumlichkeiten, Anschlüsse und Materialien zur Verfügung.
          </p>

          <h2>§ 6 Haftung</h2>
          <p>
            Der Auftragnehmer haftet für Schäden nur bei Vorsatz und grober
            Fahrlässigkeit. Dies gilt nicht für Schäden aus der Verletzung des
            Lebens, des Körpers oder der Gesundheit. Der Auftragnehmer verfügt über
            eine Betriebshaftpflichtversicherung mit einer Deckungssumme von 10
            Millionen Euro.
          </p>

          <h2>§ 7 Mängelrüge</h2>
          <p>
            Mängel sind dem Auftragnehmer unverzüglich, spätestens jedoch innerhalb
            von 24 Stunden nach Leistungserbringung, schriftlich anzuzeigen. Der
            Auftragnehmer wird erkannte Mängel unverzüglich und kostenlos beheben.
          </p>

          <h2>§ 8 Vertragslaufzeit und Kündigung</h2>
          <p>
            Die Vertragslaufzeit ergibt sich aus der Auftragsbestätigung. Bei
            Dauerverträgen gilt eine Kündigungsfrist von 3 Monaten zum Monatsende,
            sofern nichts anderes vereinbart wurde.
          </p>

          <h2>§ 9 Geheimhaltung</h2>
          <p>
            Der Auftragnehmer verpflichtet sich, über alle im Rahmen der
            Vertragserfüllung bekannt gewordenen Informationen Stillschweigen zu
            bewahren.
          </p>

          <h2>§ 10 Schlussbestimmungen</h2>
          <p>
            Es gilt das Recht der Bundesrepublik Deutschland. Sollten einzelne
            Bestimmungen dieser AGB unwirksam sein, so bleibt die Wirksamkeit der
            übrigen Bestimmungen hiervon unberührt.
          </p>

          <p className="mt-8 text-sm text-gray-600">
            Stand: {new Date().toLocaleDateString("de-DE")}
          </p>
        </div>
      </div>
    </div>
  );
}
