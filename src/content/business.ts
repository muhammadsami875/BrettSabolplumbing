// Every business fact on the site comes from this file. Sources: the client's
// existing site (www.brettsabolplumbing.com), the lettering on the company
// trucks, and answers confirmed by the client. Do not add claims that are not
// verified there (prices, ratings, review counts, awards, guarantees).

export const SITE_URL = "https://www.brettsabolplumbing.com";

export const business = {
  name: "Brett Sabol Plumbing, Heating & Jet Drain Cleaning",
  shortName: "Brett Sabol Plumbing",
  legalName: "Brett Sabol Plumbing, Heating & Jet Drain Cleaning LLC",
  owner: "Brett Sabol",
  ownerTitle: "Master Plumber",
  license: "Master Plumber Lic. #43391",
  licenseNumber: "43391",
  backflow: "Backflow Certified",
  experience: "more than 25 years",
  phone: {
    display: "215.666.3086",
    href: "tel:+12156663086",
    e164: "+12156663086",
  },
  email: "bsabol22@comcast.net",
  address: {
    street: "421 Philmont Ave",
    city: "Feasterville-Trevose",
    region: "PA",
    postalCode: "19053",
    country: "US",
  },
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Brett+Sabol+Plumbing+%26+Heating+LLC+Feasterville-Trevose+PA",
  reviewsUrl: "https://www.google.com/search?q=Brett+Sabol+Plumbing+reviews",
  // Google Business Profile map supplied by the agency (Brett Sabol Plumbing & Heating LLC).
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3050.2540817238705!2d-74.99418519999999!3d40.1366237!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6b29e346790b3%3A0xfc73f862679df182!2sBrett%20Sabol%20Plumbing%20%26%20Heating%20LLC!5e0!3m2!1sen!2s!4v1792588649694!5m2!1sen!2s",
  geo: { latitude: 40.1366237, longitude: -74.9941852 },
  emergency: "24-hour emergency service available",
} as const;

export type DayHours = {
  day: string;
  short: string;
  schemaDay: string;
  hours: string;
  opens?: string;
  closes?: string;
};

export const hours: DayHours[] = [
  { day: "Monday", short: "Mon", schemaDay: "Monday", hours: "8:00 am to 5:00 pm", opens: "08:00", closes: "17:00" },
  { day: "Tuesday", short: "Tue", schemaDay: "Tuesday", hours: "8:00 am to 5:00 pm", opens: "08:00", closes: "17:00" },
  { day: "Wednesday", short: "Wed", schemaDay: "Wednesday", hours: "8:00 am to 5:00 pm", opens: "08:00", closes: "17:00" },
  { day: "Thursday", short: "Thu", schemaDay: "Thursday", hours: "8:00 am to 5:00 pm", opens: "08:00", closes: "17:00" },
  { day: "Friday", short: "Fri", schemaDay: "Friday", hours: "8:00 am to 5:00 pm", opens: "08:00", closes: "17:00" },
  { day: "Saturday", short: "Sat", schemaDay: "Saturday", hours: "By appointment" },
  { day: "Sunday", short: "Sun", schemaDay: "Sunday", hours: "By appointment" },
];

export const fullAddress = `${business.address.street}, ${business.address.city}, ${business.address.region} ${business.address.postalCode}`;

// Genuine testimonials from the client's existing website, quoted verbatim.
// They were published without customer names, so none are attributed here.
export const testimonials = [
  {
    id: "valentines-day",
    context: "Called on Valentine’s Day",
    quote:
      "We had an excellent experience with Brett Sabol Plumbing. Even though it was Valentine’s Day, the owner answered the phone within two minutes of our call. He immediately sent his workers, and shortly after, he personally came to make sure everything was handled properly. The problem was resolved very quickly, professionally, and with high quality. We truly appreciate the fast response, responsibility, and attention to detail!",
  },
  {
    id: "second-opinion-sewer",
    context: "Second opinion on a sewer line",
    quote:
      "Called Brett in a panic after the first plumbing company we called came out, charged us to say that the sewage pipe was broken (root damage) and blocked and we needed someone with an excavator and camera. Brett sent someone over within like 2 hours of our call, figured out where the pipe access point was outside (which the other plumber said didn’t exist) and then snaked it, cleared the pipe (got the plumbing working again) and confirmed no damage to the sewage pipe . All done quickly, professionally for an extremely fair price. He was recommended by a friend and i will never use another plumber as long as he’s in business. Highly recommend!",
  },
] as const;

// Service area approved by the client: the three areas named on the original
// site, with nearby communities listed as examples ("including"), grouped by county.
export const serviceAreas = [
  {
    id: "bucks-county",
    name: "Bucks County",
    note: "Home base. The shop is on Philmont Avenue in Feasterville-Trevose.",
    places: [
      "Feasterville-Trevose",
      "Bensalem",
      "Southampton",
      "Holland",
      "Richboro",
      "Churchville",
      "Langhorne",
      "Penndel",
      "Levittown",
      "Newtown",
      "Yardley",
      "Warminster",
      "Ivyland",
      "Bristol",
    ],
  },
  {
    id: "montgomery-county",
    name: "Montgomery County",
    note: "Eastern Montgomery County, a short drive from the shop.",
    places: [
      "Huntingdon Valley",
      "Bethayres",
      "Hatboro",
      "Horsham",
      "Willow Grove",
      "Abington",
      "Jenkintown",
      "Rockledge",
      "Elkins Park",
      "Glenside",
      "Cheltenham",
      "Dresher",
    ],
  },
  {
    id: "philadelphia",
    name: "Philadelphia",
    note: "Northeast Philadelphia neighborhoods near the shop, and the wider city.",
    places: [
      "Somerton",
      "Bustleton",
      "Fox Chase",
      "Parkwood",
      "Byberry",
      "Torresdale",
      "Holmesburg",
      "Mayfair",
      "Rhawnhurst",
      "Tacony",
      "Oxford Circle",
      "Burholme",
      "Academy Gardens",
      "Morrell Park",
    ],
  },
] as const;
