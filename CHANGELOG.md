# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.1.0] - 2024-01-XX

### Added

#### Core Infrastructure
- Next.js 15 project with App Router
- TypeScript configuration
- Tailwind CSS v4 with custom design system
- shadcn/ui component library integration

#### Pages
- Homepage with Hero section and Services overview
- Service pages:
  - Unterhaltsreinigung
  - Büroreinigung
  - Bauendreinigung
  - Glas & Fassadenreinigung
  - Treppenhausreinigung
  - Grundreinigung
  - Sonderreinigung
- Leistungen overview page
- Branchen page
- Preise page
- Referenzen page
- FAQ page with 12 questions
- Über uns page
- Kontakt page
- Legal pages (Impressum, Datenschutz, AGB)

#### Components
- Header with responsive navigation
- Footer with links and contact info
- Sticky CTA bar for mobile
- Hero component
- Service template component
- Contact form with React Hook Form + Zod validation
- UI components (Button, Input, Label, Textarea, Select, Accordion)

#### Features
- Contact form with client-side validation
- API route for contact form submissions
- WhatsApp and phone call-to-action buttons
- 12 FAQ entries with structured data
- 3 reference case studies
- Fully responsive design

#### SEO & Performance
- Sitemap.xml generation
- robots.txt configuration
- Meta tags for all pages
- Open Graph tags
- Schema.org structured data:
  - LocalBusiness
  - Organization
  - FAQPage
  - Service (for service pages)
- Semantic HTML structure

#### Documentation
- Master specification (MASTER_SPEC.md)
- README with setup instructions
- Environment variables example
- This CHANGELOG

### Technical Details

- **Framework**: Next.js 15.0.1
- **React**: 19.2.0
- **TypeScript**: 5.x
- **Styling**: Tailwind CSS v4
- **Form Management**: React Hook Form 7.66.0
- **Validation**: Zod 4.1.12
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React 0.553.0

### Design System

- Primary Color: #0A5AA6 (Blue)
- Secondary Color: #0E748A (Petrol)
- Accent Color: #21A179 (Green)
- Typography: Inter (system fallback)
- Grid: 8px spacing system
- Border Radius: 12-16px

## [Unreleased]

### Planned for v0.2.0
- Quick quote calculator (Schnell-Angebot)
- Email integration for contact form
- Analytics integration (Plausible/GA4)
- Consent banner for GDPR compliance
- CI/CD pipeline (GitHub Actions)
- Performance optimizations
- OG image generation
- Lighthouse score optimization (target >90)

### Planned for v0.3.0+
- CMS integration (Sanity/Contentful)
- Review/testimonial import
- Multi-language support (optional)
- A/B testing setup
- Additional case studies

---

[0.1.0]: https://github.com/evervibe/evs-alsterfacility/releases/tag/v0.1.0
