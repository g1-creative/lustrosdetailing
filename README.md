# Lustro Premium Detailing Website

A high-end, conversion-optimized website for Lustro Premium Detailing - a professional automotive detailing company specializing in luxury vehicles.

## Features

- **Premium Design**: Modern, clean, and conversion-focused UI
- **Mobile Responsive**: Fully responsive design for all devices
- **TypeScript**: Type-safe codebase
- **Next.js 14**: Built with the latest Next.js App Router
- **Tailwind CSS**: Modern utility-first styling

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout
│   ├── page.tsx         # Homepage
│   └── globals.css      # Global styles
├── components/
│   ├── Navigation.tsx
│   ├── Hero.tsx
│   ├── TrustSignals.tsx
│   ├── ServicesOverview.tsx
│   ├── BeforeAfterGallery.tsx
│   ├── WhyChooseLustro.tsx
│   ├── Testimonials.tsx
│   ├── AboutDetailer.tsx
│   └── FinalCTA.tsx
└── ...
```

## Customization

### Update Contact Information

Edit the contact details in `components/FinalCTA.tsx`:
- Phone number
- Email address
- Service area

### Update Images

Replace placeholder images with actual photos:
- Hero section background
- Gallery images
- About section image

### Brand Colors

Customize colors in `tailwind.config.ts` under the `luxury` color palette.

## Build for Production

```bash
npm run build
npm start
```

## Technologies Used

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- ESLint

