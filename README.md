# Umbrellish Landing Page

High-performance teaser landing page for Umbrellish — an intent-based DeFi interaction layer.

## Features

- **Single-screen design** — Calm, powerful, and intentional
- **Local font loading** — Norwester and Space Grotesk for zero runtime font requests
- **Email capture** — Simple API route ready for integration
- **Glassmorphism UI** — Subtle, refined header design
- **Animated gradients** — Deep black background with sophisticated lighting
- **Fully responsive** — Perfect on mobile and desktop
- **Performance-optimized** — Built with Next.js 14 App Router and Tailwind CSS

## Getting Started

### Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
npm run build
npm start
```

## Email Capture Integration

The email capture currently logs submissions to the console. To integrate with a service:

1. Open `app/api/subscribe/route.ts`
2. Add your email service provider (Mailchimp, ConvertKit, Resend, etc.)
3. Replace the console.log with your integration code

Example services:
- **Mailchimp** — Classic email marketing
- **ConvertKit** — Creator-focused platform
- **Resend** — Modern email API
- **Database** — Store directly in your database

## Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms

The site is a standard Next.js app and can be deployed to:
- Netlify
- Railway
- Fly.io
- Any Node.js hosting

## Customization

### Social Links

Update in `components/Header.tsx`:
- X: https://x.com/umbrellish
- Telegram: https://t.me/umbrellish

### Headline Options

Choose from these options in `components/Hero.tsx`:
- "intent, not interfaces" (current)
- "from intent to execution"
- "defi without the ui"

### Colors

Brand colors are defined in `tailwind.config.ts`:
- Orange: #F78140
- Black: #0A0A0A
- Charcoal: #1F1F1F
- Light: #F5F5F5

## Tech Stack

- **Next.js 15** — App Router
- **React 19** — Latest features
- **Tailwind CSS 4** — Utility-first styling
- **Framer Motion** — Smooth animations
- **TypeScript** — Type safety

## Performance

- Lighthouse-optimized
- Local fonts (no Google Fonts runtime)
- Minimal JavaScript
- Fast LCP
- Fully accessible

## License

Private — Umbrellish
