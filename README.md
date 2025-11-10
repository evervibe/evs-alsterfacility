# Alsterfacility Website

Professional website for Alsterfacility e.K. - Gebäudereinigung Hamburg

## 🚀 Quick Start

```bash
cd apps/web
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

## 📁 Project Structure

```
/
├── apps/
│   └── web/              # Next.js application
│       ├── app/          # App router pages
│       ├── components/   # React components
│       ├── lib/          # Utilities
│       ├── content/      # Content data
│       └── public/       # Static assets
├── docs/                 # Documentation
└── README.md
```

## 🛠 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **React**: 19
- **TypeScript**: 5.x
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui + Radix UI
- **Forms**: React Hook Form + Zod
- **Icons**: Lucide React

## 📦 Features

### ✅ Implemented (v0.1.0)

- Homepage with Hero and Services overview
- 7 Service pages (Unterhaltsreinigung, Büroreinigung, etc.)
- Contact form with validation
- FAQ page with accordion
- SEO optimized (sitemap, robots.txt, Schema.org)
- Responsive design
- Sticky CTA bar (mobile)

### 🔜 Coming Soon (v0.2.0+)

- Quick quote calculator
- Email integration (SMTP)
- Analytics & consent banner
- CI/CD pipeline
- Performance optimizations

## 🏗 Development

### Commands

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Lint code
npm run lint
```

### Environment Variables

Copy `.env.example` to `.env.local` and configure:

```env
NEXT_PUBLIC_SITE_NAME=Alsterfacility
NEXT_PUBLIC_PRIMARY_PHONE=+494012345678
NEXT_PUBLIC_WHATSAPP=+4917012345678
NEXT_PUBLIC_BASE_URL=https://alsterfacility.de
```

## 📄 Documentation

- [Master Specification](./docs/MASTER_SPEC.md)
- [Changelog](./CHANGELOG.md)

## 🚢 Deployment

Recommended platform: **Vercel**

1. Push code to GitHub
2. Connect repository to Vercel
3. Configure environment variables
4. Deploy

## 📞 Contact

**Alsterfacility e.K.**
- Website: https://alsterfacility.de
- Email: info@alsterfacility.de
- Phone: +49 (0)40 123 456 78

## 📝 License

Proprietary - © 2024 Alsterfacility e.K.