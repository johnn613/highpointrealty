export interface Video {
  id: number;
  youtubeId: string;
  title: string;
  category: "Property Tours" | "Auction Previews" | "Market Updates" | "Tips & Advice";
  date: string;
}

export const videos: Video[] = [
  {
    id: 1,
    youtubeId: "dQw4w9WgXcQ",
    title: "Motel for Auction | 1375 Richmond St, Mt Vernon KY",
    category: "Auction Previews",
    date: "March 1, 2026",
  },
  {
    id: 2,
    youtubeId: "jNQXAC9IVRw",
    title: "185 Treadway Rd Property Tour | Beattyville, KY",
    category: "Property Tours",
    date: "February 20, 2026",
  },
  {
    id: 3,
    youtubeId: "M7lc1UVf-VE",
    title: "How Auctions Work | High Point Realty",
    category: "Tips & Advice",
    date: "February 10, 2026",
  },
  {
    id: 4,
    youtubeId: "9bZkp7q19f0",
    title: "Buying at Auction: What You Need to Know",
    category: "Tips & Advice",
    date: "January 28, 2026",
  },
  {
    id: 5,
    youtubeId: "kJQP7kiw5Fk",
    title: "Estill County Market Update | Q1 2026",
    category: "Market Updates",
    date: "January 15, 2026",
  },
  {
    id: 6,
    youtubeId: "OPf0YbXqDm0",
    title: "Property Management 101 | High Point Realty",
    category: "Tips & Advice",
    date: "January 5, 2026",
  },
];
