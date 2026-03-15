export interface PastAuction {
  id: number;
  address: string;
  county: string;
  soldDate: string;
  soldPrice: number;
  type: "Residential" | "Commercial" | "Land";
  description: string;
  image: string;
  year: number;
}

export const pastAuctions: PastAuction[] = [
  {
    id: 1,
    address: "185 Treadway Rd, Beattyville, KY",
    county: "Lee",
    soldDate: "January 31, 2026",
    soldPrice: 84000,
    type: "Residential",
    description: "Manufactured home on 1 acre. Sold at auction onsite and online. Property attracted 14 registered bidders.",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800",
    year: 2026,
  },
  {
    id: 2,
    address: "648 Highway 89, Irvine, KY",
    county: "Estill",
    soldDate: "November 15, 2025",
    soldPrice: 52000,
    type: "Residential",
    description: "3BR/1BA home in Estill County. Successful online bidding auction with 22 bidders registered.",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800",
    year: 2025,
  },
  {
    id: 3,
    address: "114 Mays Fork Rd, Booneville, KY",
    county: "Owsley",
    soldDate: "September 20, 2025",
    soldPrice: 38500,
    type: "Land",
    description: "12-acre tract with creek frontage. Beautiful property sold above reserve to an out-of-state buyer.",
    image: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800",
    year: 2025,
  },
  {
    id: 4,
    address: "321 Court St, Jackson, KY",
    county: "Breathitt",
    soldDate: "August 5, 2025",
    soldPrice: 145000,
    type: "Commercial",
    description: "Downtown commercial building. Online bidding only. Sold at absolute auction after competitive bidding.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800",
    year: 2025,
  },
  {
    id: 5,
    address: "77 Elk Lick Rd, McKee, KY",
    county: "Jackson",
    soldDate: "June 10, 2025",
    soldPrice: 61000,
    type: "Residential",
    description: "2BR/1BA home with large outbuilding on 2 acres. Sold onsite with over 30 attendees.",
    image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=800",
    year: 2025,
  },
  {
    id: 6,
    address: "899 N Main St, Stanton, KY",
    county: "Powell",
    soldDate: "March 22, 2025",
    soldPrice: 29000,
    type: "Land",
    description: "5-acre commercial lot on Main Street. High-visibility location sold to local developer.",
    image: "https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?w=800",
    year: 2025,
  },
  {
    id: 7,
    address: "203 Park Dr, Mt Vernon, KY",
    county: "Rockcastle",
    soldDate: "January 18, 2025",
    soldPrice: 118000,
    type: "Residential",
    description: "Brick ranch home with 3BR/2BA. Sold above reserve to a local family after spirited bidding.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
    year: 2025,
  },
  {
    id: 8,
    address: "555 Hwy 421, Hyden, KY",
    county: "Leslie",
    soldDate: "October 30, 2024",
    soldPrice: 195000,
    type: "Commercial",
    description: "Former retail strip with 4 units in Leslie County. Sold at absolute auction, all units occupied at time of sale.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800",
    year: 2024,
  },
];
