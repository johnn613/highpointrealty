# High Point Realty & Auction — Replit Build Prompt

> Paste this entire prompt into Replit's AI assistant after creating a new React Vite project.

---

## Overview

Build a full multi-page real estate and auction website for **High Point Realty & Auction** (highpointky.com) using **React + Vite** with **React Router** for routing and **Tailwind CSS** for styling.

The site should be modern, clean, and premium — inspired by marcumsold.com's aesthetic: dark navy + white + gold/orange accent colors, bold serif typography for headings, full-screen hero with video background or high-quality image, sticky navigation, and professional agent photo cards.

---

## Brand Identity

| Property | Value |
|---|---|
| Company | High Point Realty & Auction |
| Primary Color | Navy Blue `#1B2D4F` |
| Accent Color | Gold/Amber `#C9A84C` |
| Background | White `#FFFFFF` |
| Heading Font | Playfair Display (serif) |
| Body Font | Inter or Lato (sans-serif) |
| Tagline | "Your High Point in Real Estate & Auction" |

**Team:**
- **Ken DeGrant** | Broker/Owner | 859-200-2084
- **John Montgomery** | Auctioneer | 606-496-6530

**Logo:** Use a placeholder styled "HP" monogram in a circle badge until the real logo is provided.

---

## Site Structure (React Router)

| Route | Page |
|---|---|
| `/` | Home |
| `/listings` | Current Listings |
| `/listings/:id` | Individual Listing Detail |
| `/past-auctions` | Past Auctions |
| `/property-management` | Property Management |
| `/videos` | Content Library |
| `/about` | About Us |
| `/contact` | Contact |

---

## Global Components

### Navbar
- Sticky top, transparent over hero, solid navy on scroll (useEffect scroll listener)
- Logo left, nav links center: Home | Listings | Past Auctions | Property Management | Videos | About | Contact
- Right side: gold phone number pill button + hamburger for mobile
- Mobile: full-screen drawer menu
- Active route highlighting

### Footer
- Dark navy background
- Logo, tagline, nav links, social icons (YouTube, Facebook, Instagram)
- Ken DeGrant 859-200-2084 | John Montgomery 606-496-6530
- Copyright line

---

## Page Details

### 1. Home Page (`/`)

**Hero Section**
- Full-viewport-height
- Background: `https://images.unsplash.com/photo-1570129477492-45c003edd2be`
- Dark navy overlay at 60% opacity
- Centered content:
  - Badge: "Kentucky's Premier Realty & Auction"
  - H1: "High Point Realty & Auction" (Playfair Display, large, white)
  - Subtext: "Serving Kentucky with integrity — real estate sales, auctions, and property management."
  - Two CTA buttons: **[View Current Listings]** (gold filled) and **[Upcoming Auctions]** (white outlined)
- Quick search bar below hero (county/city/address input + gold search button)

**Services Section (3 Cards)**
- Real Estate Sales (house icon)
- Auction Services (gavel icon)
- Property Management (key icon)
- Each card: icon, bold title, 2-sentence description, "Learn More" link

**Featured Listings Preview**
- Section title: "Featured Listings"
- 3 listing cards (mock data, Zillow-style)
- Each card: photo, price, beds/baths/sqft, address, status badge
- "View All Listings" button at bottom

**Upcoming Auctions Section**
- Full-width navy background
- 2-column grid of upcoming auction cards
- Each card: property image, address, auction date/time, "Onsite & Online Bidding" badge, description, "View Details" button
- Use 2-3 placeholder auctions

**Meet the Team**
- 2 agent cards side by side
- Large circular placeholder photo, name, title, phone, short bio
- Ken DeGrant | Broker/Owner | 859-200-2084
- John Montgomery | Auctioneer | 606-496-6530

**Video Teaser Section**
- "Watch Our Latest Listings on YouTube"
- 1 embedded YouTube iframe (placeholder ID: `dQw4w9WgXcQ`)
- "View Full Video Library" button below

**Areas We Serve**
- Grid of county image tiles (like marcumsold.com areas grid)
- Counties: Madison, Estill, Rockcastle, Jackson, Lee, Breathitt
- Each tile: Unsplash image with county name overlay on hover

**CTA Banner**
- Full-width navy background
- "Ready to Buy, Sell, or Auction? Let's Talk."
- Button: [Contact Us Today]

---

### 2. Current Listings Page (`/listings`)

Closely mimic Zillow's listing experience.

**Search + Filter Bar (sticky below navbar)**
- Search input: "Search by address, city, or ZIP"
- Filters:
  - **Property Type:** All | Residential | Commercial | Land | Auction
  - **Price Range:** Any | Under $100K | $100K-$200K | $200K-$300K | $300K-$500K | $500K+
  - **Bedrooms:** Any | 1+ | 2+ | 3+ | 4+
  - **Bathrooms:** Any | 1+ | 2+ | 3+
  - **Status:** All | Active | Under Contract | Auction
- Sort by: Newest | Price Low-High | Price High-Low
- Results count: "Showing X of Y listings"
- Toggle: Grid view / Map view (map = placeholder div "Map View Coming Soon")

**Listing Cards Grid (2-3 column responsive)**

Each card:
- Property photo (Unsplash placeholder, 16:9)
- Status badge top-left: "Active" (green), "Auction" (gold), "Under Contract" (blue)
- Heart/save icon top-right
- Price (large, bold)
- Beds | Baths | Sq Ft row
- Address
- Days on Market tag
- Description excerpt
- Clicking navigates to `/listings/:id`

**Mock Listings Data (10 listings)**

```json
[
  {
    "id": 1,
    "address": "185 Treadway Rd, Beattyville, KY 41311",
    "price": 89000,
    "beds": 3,
    "baths": 2,
    "sqft": 1792,
    "type": "Residential",
    "status": "Auction",
    "dom": 5,
    "description": "Manufactured home with large detached garage on 1 fenced acre."
  },
  {
    "id": 2,
    "address": "1375 Richmond St, Mt Vernon, KY 40456",
    "price": 595000,
    "beds": 0,
    "baths": 0,
    "sqft": 18000,
    "type": "Commercial",
    "status": "Auction",
    "dom": 12,
    "description": "35-room motel just off I-75 in a high-visibility location near Renfro Valley."
  },
  {
    "id": 3,
    "address": "428 Main St, Irvine, KY 40336",
    "price": 145000,
    "beds": 3,
    "baths": 1,
    "sqft": 1400,
    "type": "Residential",
    "status": "Active",
    "dom": 21,
    "description": "Charming home in the heart of Irvine with updates throughout."
  },
  {
    "id": 4,
    "address": "2201 Highway 52, Berea, KY 40403",
    "price": 275000,
    "beds": 4,
    "baths": 2,
    "sqft": 2200,
    "type": "Residential",
    "status": "Active",
    "dom": 8,
    "description": "Spacious family home on large lot with detached workshop."
  },
  {
    "id": 5,
    "address": "100 Depot St, Jackson, KY 41339",
    "price": 55000,
    "beds": 0,
    "baths": 0,
    "sqft": 3200,
    "type": "Commercial",
    "status": "Active",
    "dom": 34,
    "description": "Historic commercial building in downtown Jackson with high foot traffic."
  },
  {
    "id": 6,
    "address": "Lot 12 River Rd, Beattyville, KY 41311",
    "price": 28000,
    "beds": 0,
    "baths": 0,
    "sqft": 0,
    "type": "Land",
    "status": "Active",
    "dom": 45,
    "description": "Beautiful 5-acre wooded lot along the Kentucky River. Build your dream home."
  },
  {
    "id": 7,
    "address": "317 Oak Hill Dr, Richmond, KY 40475",
    "price": 189000,
    "beds": 3,
    "baths": 2,
    "sqft": 1650,
    "type": "Residential",
    "status": "Under Contract",
    "dom": 3,
    "description": "Move-in ready ranch home in a quiet neighborhood close to EKU."
  },
  {
    "id": 8,
    "address": "541 Furnace Fork Rd, Stanton, KY 40380",
    "price": 112000,
    "beds": 2,
    "baths": 1,
    "sqft": 1100,
    "type": "Residential",
    "status": "Active",
    "dom": 19,
    "description": "Cozy country home with mountain views and creek frontage."
  },
  {
    "id": 9,
    "address": "890 Hwy 11 N, Booneville, KY 41314",
    "price": 72000,
    "beds": 3,
    "baths": 1,
    "sqft": 1250,
    "type": "Residential",
    "status": "Auction",
    "dom": 7,
    "description": "Solid home on corner lot. Will be selling by the deed. Auction date TBD."
  },
  {
    "id": 10,
    "address": "220 Industrial Park Dr, Mt Vernon, KY 40456",
    "price": 380000,
    "beds": 0,
    "baths": 0,
    "sqft": 12000,
    "type": "Commercial",
    "status": "Active",
    "dom": 60,
    "description": "Large warehouse/flex space in Rockcastle County industrial park. Motivated seller."
  }
]
```

**Individual Listing Page (`/listings/:id`)**

- Back button to listings
- Full-width hero photo
- Left column (2/3):
  - Price, address, status badge
  - Key stats: beds | baths | sqft | lot size | property type
  - Tabs: Overview | Details | Auction Info (if applicable)
  - Full description
  - If auction: show date, time, bidding type (Onsite & Online)
- Right column (1/3, sticky):
  - Agent contact card (Ken DeGrant, 859-200-2084)
  - "Schedule Showing" button (mailto link)
  - Contact form: Name, Email, Phone, Message, Submit
  - "Share this listing" buttons
- Related Listings section at bottom (3 cards)

---

### 3. Past Auctions Page (`/past-auctions`)

**Page Header**
- Navy hero banner: "Past Auctions" + "Browse our auction history — properties sold across Central and Eastern Kentucky."

**Search & Filter Bar**
- Text search (address/county)
- Filters: Year (All | 2026 | 2025 | 2024 | 2023), County, Property Type
- Sort: Newest First | Oldest First
- Results count

**Past Auction Cards Grid**

Each card:
- Property image (Unsplash placeholder)
- "SOLD" badge (dark red)
- Address
- Sale date
- Sold price (bold, green)
- Property type badge
- Brief description
- "View Details" button (expands modal or inline accordion)

**Mock Past Auctions Data (8 records)**

```json
[
  {
    "id": 1,
    "address": "185 Treadway Rd, Beattyville, KY",
    "sold_date": "January 31, 2026",
    "sold_price": 84000,
    "type": "Residential",
    "description": "Manufactured home on 1 acre. Sold at auction onsite and online."
  },
  {
    "id": 2,
    "address": "648 Highway 89, Irvine, KY",
    "sold_date": "November 15, 2025",
    "sold_price": 52000,
    "type": "Residential",
    "description": "3BR/1BA home in Estill County."
  },
  {
    "id": 3,
    "address": "114 Mays Fork Rd, Booneville, KY",
    "sold_date": "September 20, 2025",
    "sold_price": 38500,
    "type": "Land",
    "description": "12-acre tract with creek frontage."
  },
  {
    "id": 4,
    "address": "321 Court St, Jackson, KY",
    "sold_date": "August 5, 2025",
    "sold_price": 145000,
    "type": "Commercial",
    "description": "Downtown commercial building. Online bidding only."
  },
  {
    "id": 5,
    "address": "77 Elk Lick Rd, McKee, KY",
    "sold_date": "June 10, 2025",
    "sold_price": 61000,
    "type": "Residential",
    "description": "2BR/1BA home with large outbuilding on 2 acres."
  },
  {
    "id": 6,
    "address": "899 N Main St, Stanton, KY",
    "sold_date": "March 22, 2025",
    "sold_price": 29000,
    "type": "Land",
    "description": "5-acre commercial lot on Main Street."
  },
  {
    "id": 7,
    "address": "203 Park Dr, Mt Vernon, KY",
    "sold_date": "January 18, 2025",
    "sold_price": 118000,
    "type": "Residential",
    "description": "Brick ranch home with 3BR/2BA. Sold above reserve."
  },
  {
    "id": 8,
    "address": "555 Hwy 421, Hyden, KY",
    "sold_date": "October 30, 2024",
    "sold_price": 195000,
    "type": "Commercial",
    "description": "Former retail strip with 4 units in Leslie County."
  }
]
```

---

### 4. Property Management Page (`/property-management`)

- Navy hero banner: "Property Management Services"
- Services list with icons:
  - Tenant Screening
  - Rent Collection
  - Maintenance Coordination
  - Property Inspections
  - Lease Preparation
  - Financial Reporting
- Brief paragraph about their management approach
- CTA: "Let us manage your property. Contact Ken DeGrant today." + phone button (859-200-2084)

---

### 5. Videos / Content Library Page (`/videos`)

- Page header: "Video Library" — "Watch property tours, auction previews, and market updates"
- Search bar: filter by title keyword
- Category filter tabs: All | Property Tours | Auction Previews | Market Updates | Tips & Advice
- 3-column grid of video cards (6 videos)
- Each card:
  - YouTube thumbnail-style embed
  - Video title
  - Category badge
  - Date uploaded
  - "Watch Now" button — opens iframe modal/lightbox (clicking backdrop closes it)

**Placeholder YouTube Videos**

| YouTube ID | Title | Category |
|---|---|---|
| `dQw4w9WgXcQ` | Motel for Auction \| 1375 Richmond St, Mt Vernon KY | Auction Previews |
| `jNQXAC9IVRw` | 185 Treadway Rd Property Tour \| Beattyville, KY | Property Tours |
| `M7lc1UVf-VE` | How Auctions Work \| High Point Realty | Tips & Advice |
| `9bZkp7q19f0` | Buying at Auction: What You Need to Know | Tips & Advice |
| `kJQP7kiw5Fk` | Estill County Market Update \| Q1 2026 | Market Updates |
| `OPf0YbXqDm0` | Property Management 101 \| High Point Realty | Tips & Advice |

---

### 6. About Page (`/about`)

- Full-width navy banner: "About High Point Realty & Auction"
- Company story (2-3 sentences about serving Central and Eastern Kentucky)
- Two agent bio cards (large format):
  - **Ken DeGrant** | Broker/Owner | 859-200-2084 — "Ken has been serving Kentucky buyers and sellers for over a decade, specializing in residential, commercial, and auction real estate..."
  - **John Montgomery** | Auctioneer | 606-496-6530 — "John brings decades of auction experience across Kentucky, running onsite and online auctions with professionalism and results..."
- "Why Choose High Point?" — 4 icon/bullet points:
  - Local Expertise
  - Auction Specialists
  - Full-Service Realty
  - Honest & Transparent
- CTA: "Ready to work with us? Contact us today."

---

### 7. Contact Page (`/contact`)

- Split layout: left = contact form, right = contact info + map
- **Form fields:** Full Name, Email, Phone, Subject (Buy | Sell | Auction | Property Management | Other), Message, Submit
- **Right side info:**
  - Ken DeGrant | 859-200-2084 | ken@highpointky.com
  - John Montgomery | 606-496-6530
  - Serving Central & Eastern Kentucky
  - Hours: Mon-Fri 8am-6pm, Sat 9am-2pm
  - Placeholder map div (gray box labeled "Map Coming Soon")

---

## Technical Requirements

- **Framework:** React + Vite
- **Routing:** React Router v6
- **Styling:** Tailwind CSS only — no external UI libraries (no Material UI, Chakra, etc.)
- **Images:** Unsplash placeholder URLs (`https://images.unsplash.com/photo-[ID]?w=800`)
- **Agent photos:** `https://via.placeholder.com/300x300?text=Agent+Photo`
- **Responsive:** Mobile, tablet, desktop
- **Filter/search logic:** Fully functional using `useState` + `useMemo` — no backend needed, filter the mock data arrays
- **Navbar scroll behavior:** Transparent → solid navy on scroll (useEffect + scroll listener)
- **YouTube modal:** Clicking "Watch Now" opens centered modal with iframe embed; clicking backdrop closes it
- **CTAs:** Links to `mailto:ken@highpointky.com` or `tel:8592002084`
- **Smooth scroll:** `scroll-behavior: smooth` globally

---

## Design Specifications (Matching marcumsold.com Style)

| Element | Specification |
|---|---|
| Primary background | Navy `#1B2D4F` (hero, footer, section banners) |
| Page background | Light gray `#F5F5F5` |
| Cards | White, `rounded-xl`, subtle box shadow |
| Card hover state | `hover:shadow-xl hover:-translate-y-1 transition-all` |
| Primary buttons | Gold `#C9A84C` fill, white text, rounded |
| Secondary buttons | White outline, white text |
| H1/H2/H3 | Playfair Display (import from Google Fonts) |
| Body text | Inter or Lato |
| Navbar links | Uppercase, wide letter spacing, small font |
| Section heading accent | Thin gold underline below heading |
| Hero badge | Small uppercase pill, semi-transparent white/gold |

---

## File Structure

```
/src
  /components
    Navbar.jsx
    Footer.jsx
    ListingCard.jsx
    AuctionCard.jsx
    VideoCard.jsx
    VideoModal.jsx
    AgentCard.jsx
    SearchFilter.jsx
    HeroSection.jsx
  /pages
    Home.jsx
    Listings.jsx
    ListingDetail.jsx
    PastAuctions.jsx
    PropertyManagement.jsx
    Videos.jsx
    About.jsx
    Contact.jsx
  /data
    listings.js
    pastAuctions.js
    videos.js
  App.jsx
  main.jsx
  index.css
```

---

## Build Instructions

Build the complete site. All pages must be fully functional with:

1. Working navigation between all routes
2. Working search + filter on `/listings` and `/past-auctions` (filter mock data with useState/useMemo)
3. Working YouTube lightbox modal on `/videos`
4. Fully responsive design at mobile (375px), tablet (768px), and desktop (1280px)
5. Navbar transparency transition on scroll

Start with `App.jsx` and routing setup, then build each page in order. Import Google Fonts (Playfair Display + Inter) in `index.css`.

---

## Post-Build Replacements (For Client)

Once built, replace the following with real assets:

- [ ] Agent photos for Ken DeGrant and John Montgomery
- [ ] Real YouTube video IDs from High Point's channel
- [ ] Real property listing photos
- [ ] Google Maps embed for contact page
- [ ] Real logo file (replace HP monogram badge)
- [ ] Email: `ken@highpointky.com` confirmed and active
