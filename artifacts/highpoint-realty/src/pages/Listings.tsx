import { useState, useMemo } from "react";
import { Link } from "wouter";
import { Search, Grid, Map, ArrowUpDown, Gavel } from "lucide-react";
import ListingCard from "@/components/ListingCard";
import { listings } from "@/data/listings";

type StatusFilter = "All" | "Active" | "Under Contract";
type TypeFilter = "All" | "Residential" | "Commercial" | "Land";
type PriceFilter = "Any" | "Under $100K" | "$100K-$200K" | "$200K-$300K" | "$300K-$500K" | "$500K+";
type BedsFilter = "Any" | "1+" | "2+" | "3+" | "4+";
type BathsFilter = "Any" | "1+" | "2+" | "3+";
type SortBy = "Newest" | "Price Low-High" | "Price High-Low";

const activeListings = listings.filter((l) => l.status !== "Auction");

export default function Listings() {
  const [search, setSearch] = useState("");
  const [type, setType] = useState<TypeFilter>("All");
  const [price, setPrice] = useState<PriceFilter>("Any");
  const [beds, setBeds] = useState<BedsFilter>("Any");
  const [baths, setBaths] = useState<BathsFilter>("Any");
  const [status, setStatus] = useState<StatusFilter>("All");
  const [sort, setSort] = useState<SortBy>("Newest");
  const [view, setView] = useState<"grid" | "map">("grid");

  const filtered = useMemo(() => {
    let result = [...activeListings];

    if (search) {
      const q = search.toLowerCase();
      result = result.filter(
        (l) =>
          l.address.toLowerCase().includes(q) ||
          l.city.toLowerCase().includes(q) ||
          l.county.toLowerCase().includes(q)
      );
    }

    if (type !== "All") {
      result = result.filter((l) => l.type === type);
    }

    if (status !== "All") {
      result = result.filter((l) => l.status === status);
    }

    if (price !== "Any") {
      result = result.filter((l) => {
        if (price === "Under $100K") return l.price < 100000;
        if (price === "$100K-$200K") return l.price >= 100000 && l.price <= 200000;
        if (price === "$200K-$300K") return l.price > 200000 && l.price <= 300000;
        if (price === "$300K-$500K") return l.price > 300000 && l.price <= 500000;
        if (price === "$500K+") return l.price > 500000;
        return true;
      });
    }

    if (beds !== "Any") {
      const minBeds = parseInt(beds);
      result = result.filter((l) => l.beds >= minBeds);
    }

    if (baths !== "Any") {
      const minBaths = parseInt(baths);
      result = result.filter((l) => l.baths >= minBaths);
    }

    if (sort === "Newest") result.sort((a, b) => a.dom - b.dom);
    if (sort === "Price Low-High") result.sort((a, b) => a.price - b.price);
    if (sort === "Price High-Low") result.sort((a, b) => b.price - a.price);

    return result;
  }, [search, type, price, beds, baths, status, sort]);

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      {/* Page Header */}
      <div className="bg-[#1B2D4F] pt-28 pb-10 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-serif text-4xl text-white font-bold mb-2">Current Listings</h1>
          <p className="text-white/60 mb-5">Find your next property across Central & Eastern Kentucky</p>
          <Link href="/current-auctions">
            <div className="inline-flex items-center gap-2 bg-[#C9A84C]/20 border border-[#C9A84C]/40 text-[#C9A84C] text-sm font-semibold px-4 py-2 rounded-lg hover:bg-[#C9A84C]/30 transition-colors cursor-pointer">
              <Gavel size={15} />
              Looking for auctions? View Current Auctions →
            </div>
          </Link>
        </div>
      </div>

      {/* Sticky Filter Bar */}
      <div className="sticky top-[64px] md:top-[80px] z-30 bg-white shadow-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-3">
          {/* Search Row */}
          <div className="flex items-center gap-3 mb-3">
            <div className="flex-1 flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2">
              <Search size={16} className="text-gray-400 flex-shrink-0" />
              <input
                type="text"
                placeholder="Search by address, city, or county..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="flex-1 bg-transparent text-sm outline-none text-gray-700 placeholder-gray-400"
              />
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setView("grid")}
                className={`p-2 rounded-lg transition-colors ${view === "grid" ? "bg-[#1B2D4F] text-white" : "bg-gray-100 text-gray-500 hover:bg-gray-200"}`}
              >
                <Grid size={18} />
              </button>
              <button
                onClick={() => setView("map")}
                className={`p-2 rounded-lg transition-colors ${view === "map" ? "bg-[#1B2D4F] text-white" : "bg-gray-100 text-gray-500 hover:bg-gray-200"}`}
              >
                <Map size={18} />
              </button>
            </div>
          </div>

          {/* Filters Row */}
          <div className="flex items-center gap-2 flex-wrap">
            <select
              value={type}
              onChange={(e) => setType(e.target.value as TypeFilter)}
              className="text-xs border border-gray-200 rounded-lg px-3 py-2 bg-white text-gray-700 outline-none cursor-pointer"
            >
              {["All", "Residential", "Commercial", "Land"].map((opt) => (
                <option key={opt}>{opt}</option>
              ))}
            </select>

            <select
              value={price}
              onChange={(e) => setPrice(e.target.value as PriceFilter)}
              className="text-xs border border-gray-200 rounded-lg px-3 py-2 bg-white text-gray-700 outline-none cursor-pointer"
            >
              {["Any", "Under $100K", "$100K-$200K", "$200K-$300K", "$300K-$500K", "$500K+"].map((opt) => (
                <option key={opt}>{opt}</option>
              ))}
            </select>

            <select
              value={beds}
              onChange={(e) => setBeds(e.target.value as BedsFilter)}
              className="text-xs border border-gray-200 rounded-lg px-3 py-2 bg-white text-gray-700 outline-none cursor-pointer"
            >
              {["Any", "1+", "2+", "3+", "4+"].map((opt) => (
                <option key={opt}>{opt === "Any" ? "Beds: Any" : `${opt} Beds`}</option>
              ))}
            </select>

            <select
              value={baths}
              onChange={(e) => setBaths(e.target.value as BathsFilter)}
              className="text-xs border border-gray-200 rounded-lg px-3 py-2 bg-white text-gray-700 outline-none cursor-pointer"
            >
              {["Any", "1+", "2+", "3+"].map((opt) => (
                <option key={opt}>{opt === "Any" ? "Baths: Any" : `${opt} Baths`}</option>
              ))}
            </select>

            <select
              value={status}
              onChange={(e) => setStatus(e.target.value as StatusFilter)}
              className="text-xs border border-gray-200 rounded-lg px-3 py-2 bg-white text-gray-700 outline-none cursor-pointer"
            >
              {["All", "Active", "Under Contract"].map((opt) => (
                <option key={opt}>{opt === "All" ? "Status: All" : opt}</option>
              ))}
            </select>

            <div className="flex items-center gap-1 ml-auto">
              <ArrowUpDown size={14} className="text-gray-400" />
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as SortBy)}
                className="text-xs border border-gray-200 rounded-lg px-3 py-2 bg-white text-gray-700 outline-none cursor-pointer"
              >
                {["Newest", "Price Low-High", "Price High-Low"].map((opt) => (
                  <option key={opt}>{opt}</option>
                ))}
              </select>
            </div>

            <span className="text-xs text-gray-500 ml-2">
              Showing {filtered.length} of {activeListings.length}
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {view === "map" ? (
          <div className="bg-white rounded-xl border border-gray-200 h-96 flex items-center justify-center shadow-inner">
            <div className="text-center text-gray-400">
              <Map size={48} className="mx-auto mb-3 opacity-30" />
              <p className="font-medium">Map View Coming Soon</p>
              <p className="text-sm mt-1">Interactive map will be available here</p>
            </div>
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-gray-400 text-lg mb-2">No listings found</div>
            <p className="text-gray-400 text-sm">Try adjusting your search or filters</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((listing) => (
              <ListingCard key={listing.id} listing={listing} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
