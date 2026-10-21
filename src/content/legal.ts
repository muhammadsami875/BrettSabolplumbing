// Plain-language legal pages. They describe only what this website actually
// does today: a contact form delivered by email through Resend, hosting on
// Vercel, and no analytics or advertising cookies. Update the effective date
// and the relevant sections if analytics, chat or tracking tools are added.

export const LEGAL_EFFECTIVE_DATE = "October 21, 2026";

export type LegalSection = { heading: string; paragraphs: string[]; list?: string[] };

export const privacySections: LegalSection[] = [
  {
    heading: "Who we are",
    paragraphs: [
      "This website belongs to Brett Sabol Plumbing, Heating & Jet Drain Cleaning LLC, 421 Philmont Ave, Feasterville-Trevose, PA 19053. In this policy, \"we\", \"us\" and \"our\" mean the company. You can reach us at 215.666.3086 or bsabol22@comcast.net.",
    ],
  },
  {
    heading: "What we collect",
    paragraphs: [
      "We only collect what you choose to send us. When you use the contact form, we receive the details you type in:",
    ],
    list: [
      "Your name and phone number",
      "Your email address, if you give one",
      "Your town or ZIP code, if you give one",
      "The service you picked and the message you wrote",
    ],
  },
  {
    heading: "What we use it for",
    paragraphs: [
      "We use your details to answer your request, schedule work, give you a price and keep a record of the job. We do not sell, rent or trade your information, and we do not add you to marketing lists.",
    ],
  },
  {
    heading: "How the form is delivered",
    paragraphs: [
      "Form messages are sent to our business inbox by email through Resend, an email delivery service. Resend handles the message only to deliver it. Our website is hosted by Vercel, which keeps standard server logs (such as IP address, browser type and the pages requested) to run and protect the service.",
    ],
  },
  {
    heading: "Cookies and tracking",
    paragraphs: [
      "This website does not use advertising cookies or analytics tracking. If we add tools like that in the future, we will update this page first.",
      "Some pages show an embedded Google Map of our shop. When that map loads, Google may set cookies and collect usage data under Google's own privacy policy. The map only loads when you scroll to it.",
      "Pages may link to other websites, such as Google Maps for directions or Google for our reviews. Those sites have their own privacy policies.",
    ],
  },
  {
    heading: "How long we keep it",
    paragraphs: [
      "We keep form messages and job records for as long as we need them to serve you and to meet tax, licensing and warranty record-keeping obligations. You can ask us to delete your details at any time, unless we need to keep them for one of those reasons.",
    ],
  },
  {
    heading: "Your choices",
    paragraphs: [
      "You can ask what information we hold about you, ask us to correct it, or ask us to delete it. Call 215.666.3086 or email bsabol22@comcast.net and we will take care of it.",
    ],
  },
  {
    heading: "Children",
    paragraphs: [
      "This website is meant for adults arranging plumbing and heating service. We do not knowingly collect information from children under 13.",
    ],
  },
  {
    heading: "Changes to this policy",
    paragraphs: [
      "If we change how we handle information, we will update this page and the effective date at the top.",
    ],
  },
];

export const termsSections: LegalSection[] = [
  {
    heading: "About these terms",
    paragraphs: [
      "These terms cover your use of the website for Brett Sabol Plumbing, Heating & Jet Drain Cleaning LLC (\"we\", \"us\", \"our\"). By using the site, you agree to them. They do not replace the agreement for any plumbing or heating work, which is settled with you directly before a job starts.",
    ],
  },
  {
    heading: "Information on this site",
    paragraphs: [
      "We write this site to help you understand our services and how to reach us. It is general information, not a diagnosis of your plumbing. Every home and building is different, so the right fix is decided on site after we look at the problem.",
      "We try to keep service descriptions, hours and service areas current, but they can change. Call 215.666.3086 to confirm anything that matters to your decision.",
    ],
  },
  {
    heading: "Requests, quotes and scheduling",
    paragraphs: [
      "Sending the contact form or leaving a message is a request, not a booked appointment. A job is scheduled once we confirm it with you. Prices are given for the specific job after we understand it, and a price is only binding once we agree on it with you.",
      "Emergency service is available 24 hours a day. How quickly we can arrive depends on the time, the weather, the location and the work already underway, so we cannot promise a set arrival time.",
    ],
  },
  {
    heading: "Using the contact form",
    paragraphs: [
      "Please send only accurate information and do not use the form to send spam, harmful content or anything unlawful. For a plumbing emergency, call us. Do not rely on the form for anything urgent.",
    ],
  },
  {
    heading: "Photos, logo and content",
    paragraphs: [
      "The photos, logo, text and design on this site belong to Brett Sabol Plumbing, Heating & Jet Drain Cleaning LLC. Please do not copy or reuse them without our written permission.",
    ],
  },
  {
    heading: "Links to other websites",
    paragraphs: [
      "We link to a few outside sites, such as Google Maps and Google reviews. We are not responsible for their content or how they handle your information.",
    ],
  },
  {
    heading: "No warranties for the website",
    paragraphs: [
      "The website is provided as it is. We do our best to keep it accurate and available, but we do not promise that it will always be error free or online. Warranties for any work we perform are covered by the agreement for that job, not by this website.",
    ],
  },
  {
    heading: "Limitation of liability",
    paragraphs: [
      "To the extent the law allows, we are not liable for losses that come from using or relying on the website itself. Nothing here limits rights you have under Pennsylvania law that cannot be limited by agreement.",
    ],
  },
  {
    heading: "Governing law",
    paragraphs: ["These terms are governed by the laws of the Commonwealth of Pennsylvania."],
  },
  {
    heading: "Changes and contact",
    paragraphs: [
      "We may update these terms from time to time, and the effective date at the top will change when we do. Questions? Call 215.666.3086 or email bsabol22@comcast.net.",
    ],
  },
];
