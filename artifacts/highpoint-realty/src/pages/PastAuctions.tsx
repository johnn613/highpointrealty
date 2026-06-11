import { useState, useMemo } from "react";
import { Search, MapPin, Calendar, Gavel, Wifi, Monitor } from "lucide-react";
import { pastAuctions } from "@/data/pastAuctions";

const allCounties = ["All", ...Array.from(new Set(pastAuctions.map((a) => a.county))).sort()];
const allYears = ["All", ...Array.from(new Set(pastAuctions.map((a) => a.year.toString()))).sort((a, b) => Number(b) - Number(a))];

export default function PastAuctions() {
  const [search, setSearch] = useState("");
  const [year, setYear] = useState("All");
  const [county, setCounty] = useState("All");
  const [category, setCategory] = useState("All");

  const filtered = useMemo(() => {
    let result = [...pastAuctions];
    if (search) {
      const q = search.toLowerCase();
      result = result.filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          a.location.toLowerCase().includes(q) ||
          a.county.toLowerCase().includes(q)
      );
    }
    if (year !== "All") result = result.filter((a) => a.year.toString() === year);
    if (county !== "All") result = result.filter((a) => a.county === county);
    if (category !== "All") result = result.filter((a) => a.category === category);
    return result;
  }, [search, year, county, category]);

  const totalHighBid = pastAuctions.filter((a) => a.highBid > 0).reduce((sum, a) => sum + a.highBid, 0);
  const realEstateCount = pastAuctions.filter((a) => a.category === "Real Estate").length;

  return (
    <div className="min-h-screen bg-[#F5F5F5]">
      {/* Header */}
      <div className="bg-[#1B2D4F] pt-28 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-serif text-5xl text-white font-bold mb-4">Past Auctions</h1>
          <div className="w-16 h-1 bg-[#C9A84C] mx-auto rounded-full mb-6" />
          <p className="text-white/60 text-lg max-w-xl mx-auto mb-10">
            A record of every auction conducted by High Point Realty &amp; Auction.
          </p>
          {/* Stats */}
          <div className="flex flex-wrap items-center justify-center gap-8">
            <div className="text-center">
              <div className="font-serif text-3xl font-bold text-[#C9A84C]">{pastAuctions.length}</div>
              <div className="text-white/50 text-sm mt-1">Total Auctions</div>
            </div>
            <div className="w-px h-10 bg-white/20 hidden sm:block" />
            <div className="text-center">
              <div className="font-serif text-3xl font-bold text-[#C9A84C]">{realEstateCount}</div>
              <div className="text-white/50 text-sm mt-1">Real Estate</div>
            </div>
            <div className="w-px h-10 bg-white/20 hidden sm:block" />
            <div className="text-center">
              <div className="font-serif text-3xl font-bold text-[#C9A84C]">
                ${(totalHighBid / 1_000_000).toFixed(1)}M+
              </div>
              <div className="text-white/50 text-sm mt-1">Recorded High Bids</div>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="bg-white shadow-md sticky top-[64px] md:top-[80px] z-30">
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 flex-1 min-w-[200px]">
            <Search size={15} className="text-gray-400" />
            <input
              type="text"
              placeholder="Search by title, city, or county..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 bg-transparent text-sm outline-none text-gray-700 placeholder-gray-400"
            />
          </div>

          <select
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="text-xs border border-gray-200 rounded-lg px-3 py-2 bg-white text-gray-700 outline-none cursor-pointer"
          >
            {allYears.map((y) => (
              <option key={y}>{y === "All" ? "Year: All" : y}</option>
            ))}
          </select>

          <select
            value={county}
            onChange={(e) => setCounty(e.target.value)}
            className="text-xs border border-gray-200 rounded-lg px-3 py-2 bg-white text-gray-700 outline-none cursor-pointer"
          >
            {allCounties.map((c) => (
              <option key={c}>{c === "All" ? "County: All" : `${c} County`}</option>
            ))}
          </select>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="text-xs border border-gray-200 rounded-lg px-3 py-2 bg-white text-gray-700 outline-none cursor-pointer"
          >
            {["All", "Real Estate", "Personal Property"].map((c) => (
              <option key={c}>{c === "All" ? "Type: All" : c}</option>
            ))}
          </select>

          <span className="text-xs text-gray-500 ml-auto">
            {filtered.length} of {pastAuctions.length} auctions
          </span>
        </div>
      </div>

      {/* Results */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-gray-400">No auctions match your search.</div>
        ) : (
          <div className="space-y-3">
            {filtered.map((auction) => (
              <div
                key={auction.id}
                className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:border-[#C9A84C]/30 transition-all duration-200 p-5"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                  {/* Icon */}
                  <div className="flex-shrink-0 w-12 h-12 bg-[#1B2D4F]/6 rounded-xl flex items-center justify-center">
                    <Gavel size={20} className="text-[#1B2D4F]/60" />
                  </div>

                  {/* Main info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1.5">
                      <span className={`text-xs px-2.5 py-0.5 rounded-full font-medium ${
                        auction.category === "Real Estate"
                          ? "bg-[#1B2D4F]/10 text-[#1B2D4F]"
                          : "bg-[#C9A84C]/15 text-[#9b7d34]"
                      }`}>
                        {auction.category}
                      </span>
                      <span className={`text-xs px-2.5 py-0.5 rounded-full font-medium flex items-center gap-1 ${
                        auction.format === "Live Webcast"
                          ? "bg-blue-50 text-blue-600"
                          : "bg-purple-50 text-purple-600"
                      }`}>
                        {auction.format === "Live Webcast"
                          ? <Wifi size={10} />
                          : <Monitor size={10} />
                        }
                        {auction.format}
                      </span>
                    </div>
                    <h3 className="font-serif font-bold text-[#1B2D4F] text-base leading-snug">
                      {auction.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 mt-1.5">
                      <span className="flex items-center gap-1.5 text-gray-500 text-xs">
                        <MapPin size={11} />
                        {auction.location} &middot; {auction.county} County
                      </span>
                      <span className="flex items-center gap-1.5 text-gray-500 text-xs">
                        <Calendar size={11} />
                        {auction.date}
                      </span>
                    </div>
                  </div>

                  {/* High bid */}
                  <div className="sm:text-right flex-shrink-0">
                    {auction.highBid > 0 ? (
                      <>
                        <div className="text-xs text-gray-400 mb-0.5">High Bid</div>
                        <div className="font-bold text-green-600 text-lg">
                          ${auction.highBid.toLocaleString()}
                        </div>
                      </>
                    ) : (
                      <div className="text-xs text-gray-400 italic">Bid undisclosed</div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
