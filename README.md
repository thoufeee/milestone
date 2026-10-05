# Milestone website

Marketing and portfolio site for Milestone.

**Stack:** Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · Motion (animation)

Next.js gives server-rendered HTML, metadata, a sitemap and structured data out of the box, which matters for a company that sells SEO. Tailwind v4 keeps the styling in the markup, driven by CSS variable tokens (light and dark).

## Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the build
```

## Structure

```
app/
  layout.tsx          fonts, metadata, Organization JSON-LD
  page.tsx            page composition
  globals.css         design tokens, theme, keyframes
  api/contact/        POST endpoint for the contact form
  sitemap.ts robots.ts
components/           one file per section
lib/content.ts        all copy and data (edit content here)
```

## Before launch

- `lib/content.ts`: set the real WhatsApp link (`https://wa.me/91XXXXXXXXXX`), phone, email and site URL.
- Replace the sample projects, figures and testimonials with real ones.
- `app/api/contact/route.ts`: the lead is only logged. Send it to email or a CRM.
- Add an Open Graph image and a favicon (`app/icon.png`, `app/opengraph-image.png`).
