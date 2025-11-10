# ALSTERFACILITY Website Redesign – Master-Spezifikation

Version: 0.1.0 (MVP)
Zielkunde: **Alsterfacility e.K.** (Gebäudereinigung, Hamburg)
Projektziel: Lead-Generierung (Kontakt/Angebot) steigern, seriöser Auftritt, schnelle Performance, saubere SEO-Basis.

## Projektstatus

✅ **Completed - MVP v0.1.0**

## Implementierte Features

### Core Setup
- ✅ Next.js 15 mit App Router
- ✅ TypeScript
- ✅ Tailwind CSS v4
- ✅ shadcn/ui Komponenten
- ✅ Design System (Farben, Typografie, Komponenten)

### Routing & Pages
- ✅ Homepage mit Hero und Services-Übersicht
- ✅ 7 Leistungsseiten (Unterhaltsreinigung, Büroreinigung, etc.)
- ✅ Leistungen Übersichtsseite
- ✅ Branchen-Seite
- ✅ Preise-Seite
- ✅ Referenzen-Seite
- ✅ FAQ-Seite mit Accordion
- ✅ Über uns-Seite
- ✅ Kontakt-Seite
- ✅ Rechtliche Seiten (Impressum, Datenschutz, AGB)

### Komponenten
- ✅ Header mit Navigation
- ✅ Footer
- ✅ Sticky CTA Bar (mobil)
- ✅ Hero Component
- ✅ Service Template
- ✅ Contact Form (mit React Hook Form + Zod)
- ✅ Button, Input, Label, Textarea, Select, Accordion

### SEO & Schema.org
- ✅ Sitemap
- ✅ robots.txt
- ✅ Metadata für alle Seiten
- ✅ LocalBusiness Schema
- ✅ Organization Schema
- ✅ FAQ Schema
- ✅ Open Graph Tags

### Features
- ✅ Kontaktformular mit Validation
- ✅ API Route für Kontaktanfragen
- ✅ WhatsApp & Telefon CTAs
- ✅ 12 FAQ-Einträge
- ✅ 3 Referenz-Case-Studies
- ✅ Responsive Design

## Noch zu implementieren (Post-MVP)

### v0.2.0 Geplant
- ⏳ Quick Quote Kalkulator (Schnell-Angebot)
- ⏳ Email-Versand für Kontaktformular (SMTP Integration)
- ⏳ Analytics & Consent Banner (Plausible/GA4)
- ⏳ CI/CD Pipeline (GitHub Actions + Vercel)
- ⏳ Optimierung für Core Web Vitals
- ⏳ OG-Bilder generieren
- ⏳ Lighthouse Tests > 90

### v0.3.0+ Zukunft
- ⏳ CMS-Integration (Sanity/Contentful)
- ⏳ Review-Import
- ⏳ Mehrsprachigkeit (optional)
- ⏳ A/B-Tests
- ⏳ Weitere Case-Studies

## Technologie-Stack

- **Framework**: Next.js 15.0+ (App Router)
- **React**: 19.0+
- **TypeScript**: 5.x
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui + Radix UI
- **Forms**: React Hook Form + Zod
- **Icons**: Lucide React
- **Deployment**: Vercel (geplant)

## Design System

### Farben
- Primary: #0A5AA6 (Blau)
- Secondary: #0E748A (Petrol)
- Accent: #21A179 (Grün)
- Background: #FFFFFF
- Muted: #F5F5F5

### Typografie
- Font: Inter (System Fallback)
- H1: 44-56px
- H2: 32-40px
- Body: 16-18px
- Line Height: 1.6

### Spacing
- 8px Grid System
- Border Radius: 12-16px

## SEO-Strategie

### Ziel-Keywords
- Gebäudereinigung Hamburg (Primär)
- Büroreinigung Hamburg
- Unterhaltsreinigung Hamburg
- Bauendreinigung Hamburg
- Fensterreinigung Hamburg

### On-Page SEO
- ✅ Eindeutige H1 pro Seite
- ✅ 300-600 Worte Content pro Seite
- ✅ Interne Verlinkung
- ✅ Semantisches HTML
- ✅ Alt-Tags für Bilder (geplant)

### Technical SEO
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ Structured Data (Schema.org)
- ✅ Meta Descriptions
- ✅ Open Graph Tags

## Kontaktinformationen

- **Telefon**: +49 (0)40 123 456 78
- **WhatsApp**: +49 (0)170 123 456 78
- **E-Mail**: info@alsterfacility.de
- **Standort**: Hamburg, Deutschland

## Deployment

### Development
```bash
npm run dev
```

### Build
```bash
npm run build
```

### Production
- Platform: Vercel (empfohlen)
- Domain: alsterfacility.de
- Edge Functions für API Routes

## Lizenz

Proprietary - © 2024 Alsterfacility e.K.
