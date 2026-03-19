import { useState, useMemo } from "react";
import { useLocation } from "wouter";
import { Search, Gavel, ArrowUpDown, Calendar, MapPin } from "lucide-react";
import { listings } from "@/data/listings";

type PriceFilter = "Any" | "Under $100K" | "$100K-$200K" | "$200K-$300K" | "$300K-$500K" | "$500K+";
type TypeFilter = "All" | "Residential" | "Commercial" | "Land";
type SortBy = "Newest" | "Price Low-High" | "Price High-Low" | "Auction Date";

const auctionListings = listings.filter((l) => l.status === "Auction");

export default function CurrentAuctions() {
  const [, navigate] = useLocation();
  const [search, setSearch] = useState("");
  const [type, setType] = useState<TypeFilter>("All");
  const [price, setPrice] = useState<PriceFilter>("Any");
  const [sort, setSort] = useState<SortBy>("Auction Date");

  const filtered = useMemo(() => {
    let result = [...auctionListings];

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

    if (sort === "Newest") result.sort((a, b) => a.dom - b.dom);
    if (sort === "Price Low-High") result.sort((a, b) => a.price - b.price);
    if (sort === "Price High-Low") result.sort((a, b) => b.price - a.price);

    return result;
  }, [search, type, price, sort]);

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      {/* Page Header */}
      <div className="bg-[#1B2D4F] pt-28 pb-12 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: "repeating-linear-gradient(45deg, #C9A84C 0, #C9A84C 1px, transparent 0, transparent 50%)",
          backgroundSize: "20px 20px"
        }} />
        <div className="max-w-7xl mx-auto relative">
          <div className="flex items-center gap-3 mb-3">
            <Gavel size={28} className="text-[#C9A84C]" />
            <span className="text-[#C9A84C] text-sm font-semibold uppercase tracking-widest">Live & Upcoming</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl text-white font-bold mb-3">Current Auctions</h1>
          <p className="text-white/60 max-w-xl">
            Bid onsite or online. All auctions conducted by licensed Kentucky auctioneers.
            Contact Ken DeGrant for registration and terms.
          </p>
          <div className="mt-6 flex flex-wrap gap-6 text-sm text-white/70">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C9A84C] inline-block" />
              {auctionListings.length} Active Auctions
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-400 inline-block" />
              Online &amp; Onsite Bidding Available
            </div>
          </div>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="sticky top-[64px] md:top-[80px] z-30 bg-white shadow-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center gap-3 flex-wrap">
            <div className="flex-1 min-w-[200px] flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2">
              <Search size={16} className="text-gray-400 flex-shrink-0" />
              <input
                type="text"
                placeholder="Search by address, city, or county..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="flex-1 bg-transparent text-sm outline-none text-gray-700 placeholder-gray-400"
              />
            </div>

            <select
              value={type}
              onChange={(e) => setType(e.target.value as TypeFilter)}
              className="text-xs border border-gray-200 rounded-lg px-3 py-2 bg-white text-gray-700 outline-none cursor-pointer"
            >
              {["All", "Residential", "Commercial", "Land"].map((opt) => (
                <option key={opt}>{opt === "All" ? "All Types" : opt}</option>
              ))}
            </select>

            <select
              value={price}
              onChange={(e) => setPrice(e.target.value as PriceFilter)}
              className="text-xs border border-gray-200 rounded-lg px-3 py-2 bg-white text-gray-700 outline-none cursor-pointer"
            >
              {["Any", "Under $100K", "$100K-$200K", "$200K-$300K", "$300K-$500K", "$500K+"].map((opt) => (
                <option key={opt}>{opt === "Any" ? "Any Price" : opt}</option>
              ))}
            </select>

            <div className="flex items-center gap-1 ml-auto">
              <ArrowUpDown size={14} className="text-gray-400" />
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as SortBy)}
                className="text-xs border border-gray-200 rounded-lg px-3 py-2 bg-white text-gray-700 outline-none cursor-pointer"
              >
                {["Auction Date", "Newest", "Price Low-High", "Price High-Low"].map((opt) => (
                  <option key={opt}>{opt}</option>
                ))}
              </select>
            </div>

            <span className="text-xs text-gray-500">
              {filtered.length} of {auctionListings.length} auctions
            </span>
          </div>
        </div>
      </div>

      {/* Auction Cards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <Gavel size={48} className="mx-auto text-gray-300 mb-4" />
            <div className="text-gray-500 text-lg mb-2">No auctions match your filters</div>
            <p className="text-gray-400 text-sm">Try adjusting your search or filters</p>
          </div>
        ) : (
          <div className="space-y-6">
            {filtered.map((listing) => (
              <div
                key={listing.id}
                onClick={() => navigate(`/listings/${listing.id}`)}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden group"
              >
                <div className="flex flex-col sm:flex-row">
                  {/* Image */}
                  <div className="sm:w-72 lg:w-80 flex-shrink-0 relative overflow-hidden">
                    <img
                      src={listing.image}
                      alt={listing.address}
                      className="w-full h-52 sm:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-[#C9A84C] text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide flex items-center gap-1.5">
                        <Gavel size={12} />
                        Auction
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between flex-wrap gap-4 mb-3">
                        <div>
                          <h3 className="font-serif text-2xl font-bold text-[#1B2D4F] group-hover:text-[#C9A84C] transition-colors">
                            {listing.address}
                          </h3>
                          <div className="flex items-center gap-1.5 text-gray-500 text-sm mt-1">
                            <MapPin size={13} />
                            {listing.city} · {listing.county} County
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-3xl font-bold text-[#1B2D4F]">
                            ${listing.price.toLocaleString()}
                          </div>
                          <div className="text-gray-400 text-xs mt-0.5">Starting Bid / Est. Value</div>
                        </div>
                      </div>

                      <p className="text-gray-600 text-sm leading-relaxed mb-4">{listing.description}</p>

                      <div className="flex flex-wrap gap-2">
                        {listing.beds > 0 && (
                          <span className="bg-gray-100 text-gray-600 text-xs px-2.5 py-1 rounded-full">{listing.beds} Bed</span>
                        )}
                        {listing.baths > 0 && (
                          <span className="bg-gray-100 text-gray-600 text-xs px-2.5 py-1 rounded-full">{listing.baths} Bath</span>
                        )}
                        {listing.sqft > 0 && (
                          <span className="bg-gray-100 text-gray-600 text-xs px-2.5 py-1 rounded-full">{listing.sqft.toLocaleString()} sqft</span>
                        )}
                        {listing.lotSize && (
                          <span className="bg-gray-100 text-gray-600 text-xs px-2.5 py-1 rounded-full">{listing.lotSize}</span>
                        )}
                        <span className="bg-gray-100 text-gray-600 text-xs px-2.5 py-1 rounded-full capitalize">{listing.type}</span>
                      </div>
                    </div>

                    {/* Auction Date Banner */}
                    {listing.auctionDate && (
                      <div className="mt-4 bg-[#1B2D4F] rounded-lg px-4 py-3 flex items-center justify-between flex-wrap gap-3">
                        <div className="flex items-center gap-2 text-white">
                          <Calendar size={16} className="text-[#C9A84C]" />
                          <span className="font-semibold">{listing.auctionDate}</span>
                          {listing.auctionTime && (
                            <span className="text-white/60 text-sm">at {listing.auctionTime}</span>
                          )}
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-white/60 text-xs">Onsite &amp; Online</span>
                          <span className="bg-[#C9A84C] text-white text-xs font-bold px-3 py-1.5 rounded-lg">
                            View Details →
                          </span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* CTA Banner */}
        <div className="mt-12 bg-[#1B2D4F] rounded-2xl p-8 text-center text-white">
          <Gavel size={36} className="mx-auto text-[#C9A84C] mb-4" />
          <h3 className="font-serif text-2xl font-bold mb-2">Want to Sell at Auction?</h3>
          <p className="text-white/60 mb-6 max-w-md mx-auto text-sm">
            High Point Realty & Auction handles the entire process — marketing, bidder registration, and closing.
            Call Ken to discuss your property today.
          </p>
          <a
            href="tel:8592002084"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-2 bg-[#C9A84C] hover:bg-[#b8933e] text-white font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Call 859-200-2084
          </a>
        </div>
      </div>
    </div>
  );
}
