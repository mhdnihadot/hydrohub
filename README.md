# hydrohub

Marketing site for Hydro Hub Industries: the shower & tap filter, hard water hair care and upcoming laundry / whole-home filtration. Copy follows the company profile.

Next.js 16 (App Router) · Tailwind CSS v4 · Lenis smooth scroll · self-hosted Fontshare fonts (General Sans + Satoshi).

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
```

## Where things live

- `app/` — routes: `/`, `/products`, `/about`, `/credits`, `api/enquiry`
- `components/` — page sections; `motion.jsx` holds the scroll-reveal / word-reveal / count-up helpers
- `data/products.js` — product catalogue (cards show `image` if set, otherwise the first `gallery` photo)
- `data/credits.js` — attribution for the Wikimedia Commons photos in `public/images/gallery`
- `app/globals.css` — theme colour tokens (`@theme`) and motion styles

## Enquiries

`POST /api/enquiry` validates and logs submissions. Connect it to email/CRM/WhatsApp before going live.
