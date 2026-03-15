# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Structure

```text
artifacts-monorepo/
├── artifacts/              # Deployable applications
│   ├── api-server/         # Express API server
│   └── highpoint-realty/   # High Point Realty & Auction website (React + Vite)
├── lib/                    # Shared libraries
│   ├── api-spec/           # OpenAPI spec + Orval codegen config
│   ├── api-client-react/   # Generated React Query hooks
│   ├── api-zod/            # Generated Zod schemas from OpenAPI
│   └── db/                 # Drizzle ORM schema + DB connection
├── scripts/                # Utility scripts (single workspace package)
├── pnpm-workspace.yaml
├── tsconfig.base.json
├── tsconfig.json
└── package.json
```

## Artifacts

### `artifacts/highpoint-realty` — High Point Realty & Auction website

A full multi-page real estate and auction website.

**Route**: `/` (served at root)
**Tech**: React + Vite + Tailwind CSS + Wouter routing
**No backend required** — all data is static mock data

**Pages:**
- `/` — Home (hero, services, featured listings, upcoming auctions, team, video teaser, county grid, CTA)
- `/listings` — Current Listings with search/filter (address, type, price, beds, baths, status, sort)
- `/listings/:id` — Individual Listing Detail with contact sidebar form
- `/past-auctions` — Past Auctions with search/filter and expandable detail cards
- `/property-management` — Property Management services page
- `/videos` — Video Library with YouTube lightbox modal
- `/about` — About page with team bios and why choose us section
- `/contact` — Contact page with form and info panel

**Brand:**
- Primary: Navy Blue `#1B2D4F`
- Accent: Gold `#C9A84C`
- Fonts: Playfair Display (headings), Inter (body)
- Team: Ken DeGrant (Broker/Owner, 859-200-2084), John Montgomery (Auctioneer, 606-496-6530)

**Key Features:**
- Sticky navbar with transparent→navy scroll transition on home page
- Active route highlighting
- Mobile hamburger drawer menu
- Fully functional search/filter on listings and past auctions (useState + useMemo)
- YouTube video lightbox modal (click-backdrop-to-close, Escape key support)
- Responsive at mobile/tablet/desktop

**Data files:**
- `src/data/listings.ts` — 10 mock property listings
- `src/data/pastAuctions.ts` — 8 past auction records
- `src/data/videos.ts` — 6 YouTube video entries

**Post-build replacements needed:**
- Agent photos (currently placeholder images)
- Real YouTube video IDs from High Point's channel
- Real property listing photos
- Google Maps embed for contact page
- Real logo file (currently HP monogram badge)

## TypeScript & Composite Projects

Every package extends `tsconfig.base.json` which sets `composite: true`. The root `tsconfig.json` lists all packages as project references.

Root commands:
- `pnpm run typecheck:libs` runs `tsc --build` for the composite libs.
- `pnpm run typecheck` is the canonical full check.

## Packages

### `artifacts/api-server` (`@workspace/api-server`)

Express 5 API server. No active routes beyond health check — the realty website is all frontend.

### `lib/db` (`@workspace/db`)

Database layer using Drizzle ORM with PostgreSQL. No schema currently — the website uses static mock data.

### `lib/api-spec` (`@workspace/api-spec`)

OpenAPI spec and Orval codegen config. Run codegen: `pnpm --filter @workspace/api-spec run codegen`

### `lib/api-zod` (`@workspace/api-zod`)

Generated Zod schemas from the OpenAPI spec.

### `lib/api-client-react` (`@workspace/api-client-react`)

Generated React Query hooks and fetch client from the OpenAPI spec.

### `scripts` (`@workspace/scripts`)

Utility scripts package. Run scripts via `pnpm --filter @workspace/scripts run <script>`.
