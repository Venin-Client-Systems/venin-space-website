# Venin Space Website

Marketing website repository serving the ExciseMate product marketing page.

## Live Site

- Production: https://venin.space/excisemate
- Repository: https://github.com/georgeatkinson-veninspace/venin-space-website

## Structure

```
venin-space-website/
├── src/
│   ├── app/
│   │   ├── excisemate/          # ExciseMate marketing page
│   │   │   ├── page.tsx         # Main marketing page
│   │   │   ├── layout.tsx       # Layout wrapper
│   │   │   ├── privacy/         # Privacy policy
│   │   │   └── terms/           # Terms & conditions
│   │   ├── layout.tsx           # Root layout (Inter font)
│   │   ├── globals.css          # Global styles + Tailwind
│   │   └── page.tsx             # Root redirects to /excisemate
│   ├── components/
│   │   ├── marketing/           # Marketing-specific components
│   │   └── ui/                  # Reusable UI components (shadcn)
│   ├── lib/
│   │   └── utils.ts             # Utility functions (cn)
│   └── styles/
│       └── mobile.css           # Mobile-specific styles
├── public/
│   ├── logo.png                 # ExciseMate logo
│   ├── logo-light.png           # Light variant
│   ├── excisemate-logo.svg      # SVG logo
│   ├── favicon.ico              # Site favicon
│   └── icon-*.png               # PWA icons
└── next.config.ts               # Next.js configuration
```

## Technology Stack

- Next.js 15.5.4 (App Router)
- React 19
- TypeScript (strict mode)
- Tailwind CSS 3.4.18
- shadcn/ui components
- Inter font (Google Fonts)

## Development

```bash
npm install
npm run dev    # http://localhost:3000 → redirects to /excisemate
```

## Features

- ExciseMate product marketing page with:
  - Hero section with ATO blue branding
  - Feature showcase (6 key features)
  - Benefits section
  - Pricing tiers (Starter $99, Professional $199, Enterprise $499 AUD/month)
  - CTA sections with 60-day free trial
  - Privacy policy & Terms pages

## Deployment

- Automated via GitHub Actions
- Docker containerized
- Deployed to AWS EC2
- Domain: venin.space

## Key Files

- `next.config.ts` - Redirects root to /excisemate, security headers
- `tailwind.config.ts` - Tailwind v3 config with custom animations
- `src/app/globals.css` - ATO blue CSS variables, custom fonts
