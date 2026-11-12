export const SITE = {
  title: "Ruan van der Merwe",
  // Used as the <title> of the homepage. Keep "Comedian" next to the name:
  // it is what separates this Ruan van der Merwe from all the others in search.
  homeTitle: "Ruan van der Merwe | Stand-up Comedian, Cape Town",
  tagline: "Your fifth favourite socially awkward comedian",
  showName: "The Socially Awkward Afrikaner",
  description:
    "Ruan van der Merwe: your fifth favourite socially awkward comedian. Cape Town stand-up, currently building a show called The Socially Awkward Afrikaner. Clips and bookings.",
  author: "Ruan van der Merwe",
  // Switch to the custom domain once it is live (also update astro.config.mjs
  // and add public/CNAME).
  url: "https://ruanvdmerwe.github.io",
  email: "ruan [at] bytefuse [dot] ai",
  // Booking address, kept in parts so it never appears whole in the HTML.
  // BookingEmail.astro reassembles it in the browser.
  bookingEmail: { user: "ruanh.vandermerwe", domain: "gmail.com" },
  location: "Cape Town, South Africa",
  role: "Stand-up Comedian · Cape Town",
};

export const NAV = [
  { href: "/", label: "comedy" },
  { href: "/writing", label: "writing" },
  { href: "/research", label: "research" },
];

// Sub-navigation shown on the /research pages.
export const RESEARCH_NAV = [
  { href: "/research", label: "overview" },
  { href: "/research/papers", label: "papers" },
  { href: "/research/projects", label: "projects" },
  { href: "/research/talks", label: "talks" },
  { href: "/research/supervision", label: "supervision" },
  { href: "/research/cv", label: "cv" },
];

export const SOCIAL = {
  // Comedy profiles. Each one is linked in the footer and listed as "sameAs" in
  // the structured data so Google ties them to this site. Leave empty to hide.
  instagram: "",
  tiktok: "",
  youtube: "",
  // Career profiles, shown on the /research pages.
  scholar:
    "https://scholar.google.com/citations?user=IXdm2doAAAAJ&hl=en",
  linkedin: "https://www.linkedin.com/in/ruan-van-der-merwe-b87a08111/",
  github: "https://github.com/ruanvdmerwe",
  bytefuse: "https://bytefuse.ai",
};

export const COMEDY_SOCIALS = [
  { label: "instagram", href: SOCIAL.instagram },
  { label: "tiktok", href: SOCIAL.tiktok },
  { label: "youtube", href: SOCIAL.youtube },
].filter((s) => s.href);
