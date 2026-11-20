// Upcoming shows for the "Next shows" section on the homepage.
//
// Add one entry per show. Shows drop off by themselves once their date has
// passed (the site rebuilds every night), so old entries can be deleted
// whenever. When nothing is upcoming, the section and its menu link are hidden.
//
// Example:
//   {
//     date: "2026-12-04",          // YYYY-MM-DD
//     time: "19:30",               // optional
//     name: "Comedy on Kloof",     // the show or night
//     venue: "Kloof Street House", // optional
//     city: "Cape Town",
//     url: "https://...",          // tickets or event page, optional
//   },

export type Show = {
  date: string;
  time?: string;
  name: string;
  venue?: string;
  city: string;
  url?: string;
};

export const SHOWS: Show[] = [
  {
    date: "2026-11-30",
    time: "19:30",
    name: "Open Stage",
    venue: "Toneelhuis",
    city: "Cape Town",
    url: "https://www.quicket.co.za/events/405520-open-stage/?ref=organiser-profile#/",
  },
  {
    date: "2026-12-03",
    time: "19:30",
    name: "Off the Hook Comedy",
    venue: "The Greek Fisherman",
    city: "Sea Point",
    url: "https://www.quicket.co.za/events/358465-off-the-hook-comedy-the-greek-fisherman/#/",
  },
  {
    date: "2026-12-05",
    time: "19:30",
    name: "Kaas Kween",
    venue: "Herbanville",
    city: "Durbanville",
  },
  {
    date: "2026-12-15",
    time: "19:30",
    name: "Kaas Kween",
    venue: "Infusion",
    city: "Table View",
  },
];
