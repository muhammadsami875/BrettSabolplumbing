# Brett Sabol Plumbing, Heating & Jet Drain Cleaning

Marketing website for Brett Sabol Plumbing (Feasterville-Trevose, PA). Next.js 16 App Router, TypeScript, Tailwind CSS 4, Motion, lucide-react. Every page is statically prerendered.

## Commands

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run start      # serve the production build
npm run lint
npm run typecheck
npm run images     # re-process photos and logo from assets/originals
npm run qa         # site QA against a running server (default http://localhost:3218)
```

`npm run qa` checks every route for status codes, one H1, unique titles and descriptions, canonical URLs, valid JSON-LD, broken internal links, image alt text, the old `/residential` redirect, the 404 page, sitemap and robots, and the copy rules (no em dashes, semicolons, slashes, ellipses or "vs." outside verbatim reviews). Start the server first: `npm run start -- -p 3218`.

## Where things live

| What | Where |
| --- | --- |
| Business facts (phone, email, address, hours, testimonials, service areas) | `src/content/business.ts` |
| Navigation and route list | `src/content/navigation.ts` |
| Photo registry with alt text and captions | `src/content/photos.ts` |
| Privacy policy and terms text | `src/content/legal.ts` |
| Contact form server action (Resend) | `src/app/actions/contact.ts` |
| Design tokens, type scale, vinyl-lettering reveal | `src/app/globals.css` |
| JSON-LD builders | `src/lib/schema.ts` |
| Page metadata helper | `src/lib/seo.ts` |
| Each page | `src/app/<route>/page.tsx` (each page is composed on its own, no shared slug template) |
| Source photos and logo (originals) | `assets/originals` |

Never add claims that are not verified: prices, ratings, review counts, awards, guarantees or response times. The two testimonials are quoted verbatim from the old site and must not be edited.

## Before launch (required)

1. **Domain.** Add `www.brettsabolplumbing.com` and `brettsabolplumbing.com` to the Vercel project. The app already 301-redirects the apex to www, and all canonical URLs use `https://www.brettsabolplumbing.com`. Update DNS at the registrar (currently pointing at the old Duda site).
2. **Contact form email.** Create a Resend account, verify the sending domain (for example `brettsabolplumbing.com`), and set these in Vercel > Settings > Environment Variables (see `.env.example`):
   - `RESEND_API_KEY`
   - `LEAD_TO_EMAIL` (defaults to bsabol22@comcast.net)
   - `LEAD_FROM_EMAIL` (for example `Brett Sabol Website <website@brettsabolplumbing.com>`)

   Until `RESEND_API_KEY` is set, the form never pretends to send: it tells visitors that online requests are not connected and shows the phone number and email. Send one test request after setup (label it as a test from The Local Rankers).
3. **Search Console.** Submit `https://www.brettsabolplumbing.com/sitemap.xml` once the domain is live.
4. **Google Business Profile.** Point its website link to the new home page. If a direct Google reviews URL becomes available, replace `reviewsUrl` in `src/content/business.ts`.

Favicon, app icons and the social share image are generated from the real logo and van photo (`npm run images`). Every shipped image carries an embedded origin note (provenance). Re-running `npm run images` rewrites the files without it, so re-embed afterwards with Impeccable's `embed-prompt` (check with `impeccable embed-prompt --scan src/assets public/og src/app`). There is no "Made with" badge anywhere. Privacy policy and terms pages are at `/privacy-policy` and `/terms`.

## URL changes from the old site

| Old | New |
| --- | --- |
| `/residential` | `/residential-plumbing` (301) |
| `/`, `/about`, `/commercial`, `/jet-drain-cleaning`, `/gallery`, `/contact` | unchanged |

New pages: `/heating`, `/sewer-line-repair`, `/backflow-testing`, `/service-areas`, `/privacy-policy`, `/terms`.

Vercel preview deployments (`*.vercel.app`) send `X-Robots-Tag: noindex`, and `robots.txt` blocks everything outside production.
