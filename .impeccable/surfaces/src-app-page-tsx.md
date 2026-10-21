---
version: 1
slug: "src-app-page-tsx"
primary_target: "src/app/page.tsx"
related_targets: ["src/app/layout.tsx"]
---

# Homepage and site shell

Scope: the homepage and the shared shell every page inherits. Visitor mode: Persuade.

Audience and job: stressed homeowners and light-commercial property managers in Bucks County, Montgomery County and Philadelphia, mostly on phones, deciding whether to call. Action: tap to call 215.666.3086, or send a quote request. Proof: Master Plumber Lic. #43391, Backflow Certified, family owned, real trucks and job photos, two verbatim testimonials. Constraints: no invented claims, no counters, no pill buttons, no purple, no em dashes in copy.

## Direction contract

THESIS: The category-standard premium plumber site, played straight but made specific to Brett Sabol: his own truck lettering is the hero and his real jobs are the proof. It refuses the dark-overlay stock photo hero and the grid of identical icon cards.

OWN-WORLD: White truck-body ground. Deep navy #0F2A4F carries the announcement bar, the commercial band and the footer. Sabol blue #345CAB for "Plumbing", links and focus. Truck red #D71920 only for the call action and "Heating &". Archivo 800 to 900 at a slightly wide setting for lettering, Public Sans for reading. 4px radii, cool hairline rules, photos in thin frames at honest sizes, lucide icons at one stroke.

STORY: In one screen the visitor learns what Brett does, where, why to trust him, and how to reach him. Scrolling proves it with real jobs, plain explanations and verbatim reviews, then ends on a working quote form and the phone number.

FIRST VIEWPORT: Navy announcement bar with the 24 hour emergency line, office hours and license. White header with the real logo mark, lockup, navigation and a red call button. Left half: H1 set as the truck lettering, "Plumbing" blue, "Heating &" red, "Jet Drain Cleaning" navy, a two-line paragraph naming the three areas, red "Call 215.666.3086" and navy outline "Request a quote", then four credential items. Right half: the real van photo in a thin frame, overlapped by a navy card quoting a verbatim review excerpt. A strip of common problems sits at the fold.

FORM: The category standard, chosen by the user after four rounds (not from my ordered list). seed: seed:07354a047a1ec799. Signature interaction: the vinyl-lettering reveal, a brand-colored bar sweeps each hero line and uncovers it, CSS only, skipped under reduced motion. Motion grammar: restrained fade-rise on major blocks only, spring mobile drawer, animated accordion height, shared-element photo lightbox.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance

## Unresolved

- RESEND_API_KEY and a verified sending domain in Vercel.
- Domain connection in Vercel (apex to www).
